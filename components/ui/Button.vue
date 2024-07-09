<template>
    <NuxtLink v-if="Boolean(link)" :to="link" :class="[$style.Button, mainCss]">
        <slot />
    </NuxtLink>

    <button v-else :class="[$style.Button, mainCss]" type="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    size?: "s" | "l";
    style?: "dark";
    link?: string;
}

const props = defineProps<Props>();

const $style = useCssModule();
const mainCss = computed(() => ({
    [$style[`_size-${props.size}`]]: Boolean(props.size),
    [$style[`_${props.style}`]]: Boolean(props.style),
}));
</script>

<style lang="scss" module>
.Button {
    display: flex;
    justify-content: center;

    padding: 8px 20px;

    border-radius: 32px;
    border: none;

    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: none;
    color: black;

    background: white;

    transition: 0.3s;

    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 1;
    }

    &._size-s {
        padding: 4px 16px;
    }

    &._size-l {
        padding: 12px 24px;

        font-size: 20px;
        line-height: 24px;
    }

    &._dark {
        background: black;
    }
}
</style>
