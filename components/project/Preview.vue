<template>
    <div :class="$style.Preview">
        <div :class="$style.preview">
            <img
                :class="$style.image"
                src="https://sdvv.ru/upload/iblock/0ba/0baa1188621b3ee1ccf144f4fb48bb14.png"
                alt=""
            />
        </div>

        <div :class="$style.content">
            <h2 :class="$style.title" v-text="title" />
            <p
                v-if="description"
                :class="$style.description"
                v-text="description"
            />

            <UiButton :class="$style.button" size="l" :link="link">
                Открыть
            </UiButton>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    description?: string;
    link?: string;
    imageSrc?: string;
}

const { title, description } = defineProps<Props>();
</script>

<style lang="scss" module>
.Preview {
    display: flex;
    flex-direction: column;

    @include from(mobile) {
        flex-direction: row-reverse;
    }
}

.content {
    @extend %glass;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    padding: 56px 24px 24px 24px;
    margin-top: -32px;

    border-radius: 0 0 32px 32px;

    @include from(mobile) {
        padding: 24px 56px 24px 24px;
        margin-top: 0;
        margin-right: -32px;

        border-radius: 32px 0 0 32px;
    }
}

.preview {
    position: relative;
    z-index: 2;

    padding: 24px;

    border-radius: 32px;

    background: white;
}

.image {
    height: 336px;
    width: 100%;

    object-fit: cover;

    @include from(mobile) {
        width: 296px;
    }
}

.title {
    margin: 0;

    font-size: 20px;
    line-height: 24px;
    color: white;
}

.description {
    margin-top: 24px;

    font-size: 14px;
    line-height: 16px;
    font-weight: 300;
    color: white;

    @include from(mobile) {
        max-width: 254px;
    }
}

.button {
    margin-top: 24px;

    @include from(mobile) {
        margin-top: auto;
    }
}
</style>
