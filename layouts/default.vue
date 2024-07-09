<template>
    <div :class="$style.default">
        <div :class="$style.body">
            <slot />
        </div>

        <CommonFooter :class="$style.footer" />

        <NuxtImg
            :class="$style.img"
            src="/bg/bg-2560.png"
            densities="x1 x2"
            placeholder="/bg/bg-blur.jpg"
        />
    </div>
</template>

<script setup></script>

<style lang="scss" module>
.default {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.body {
    height: 100vh;
}

.img {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
}

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    width: 100%;
}
</style>
