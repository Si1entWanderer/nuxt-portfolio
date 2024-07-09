<template>
    <ul :class="$style.List">
        <li v-for="item in list">
            <div>{{ item }}</div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { ListItem } from "~/types/todo";

interface Props {
    list: ListItem[];
}

const { list } = defineProps<Props>();
</script>

<style lang="scss" module>
.List {
    //
}
</style>
