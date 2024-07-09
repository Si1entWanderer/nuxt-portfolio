<template>
    <div :class="$style.Todo">
        <CommonHeader />

        <div :class="$style.container">
            <TodoBlock :class="$style.block" />
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" module>
.Todo {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    width: 100%;
    max-width: 1312px;

    margin: 0 auto;
    padding: 24px 12px 48px;
}

.block {
    width: 100%;
}
</style>
