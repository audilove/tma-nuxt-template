<template>
    <div class='flex justify-center'>
        <div class='main-container'>
            <main id="tma" class="gameView">
                <div class="py-6 px-4">
                    <ToastContainer />
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>