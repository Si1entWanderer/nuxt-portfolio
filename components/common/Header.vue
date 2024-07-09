<template>
    <div :class="$style.Header">
        <div :class="$style.container" />
    </div>
</template>

<script setup></script>

<style lang="scss" module>
.Header {
    @extend %glass;

    padding: 20px 24px;
}

.container {
    width: 100%;
    max-width: $container-width;
    margin: 0 auto;
}
</style>
