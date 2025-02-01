import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const generateToken = async (user_id) => {
    const payload = {
        sub: 'TG USER',
        aud: "authenticated",
        raw_user_meta_data: {
            chat_id: user_id
        }
    }
    const config = useRuntimeConfig()

    const token = jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: '1d' })
    const refresh_token = jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: '7d' })

    return { token, refresh_token }
}

const verifyTelegramData = (initData, botToken) => {
    const params = new URLSearchParams(initData)
    const receivedHash = params.get('hash')
    params.delete('hash')

    const dataCheckString = Array.from(params.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([key, value]) => `${key}=${value}`)
        .join('\n')

    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest()
    const hash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex')

    return hash === receivedHash
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const body = await readBody(event)

    const { initData } = body;

    if (!initData) {
        throw createError({
            statusCode: 400,
            statusMessage: 'initData is required',
        })
    }

    if (verifyTelegramData(initData, config.BOT_TOKEN)) {
        const params = new URLSearchParams(initData)
        const user = JSON.parse(params.get('user'))
        const userId = user.id

        const { token, refresh_token } = await generateToken(userId)

        return {
            success: true,
            token: token,
            refresh_token: refresh_token,
        };
    } else {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid Telegram data',
        })
    }
})