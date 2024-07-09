<template>
    <div :class="$style.Block">
        <div :class="$style.heading">
            <h1 :class="$style.title">{{ LABELS.title }}</h1>
        </div>

        <div :class="$style.body">
            <TodoList :list="list" />

            <UiInput
                ref="inputComponent"
                :value="inputValue"
                :placeholder="PLACEHOLDERS.mainInput"
                @input="handleInput"
                @keydown="handleKeydown"
            >
                <template #post-input>
                    <Icon
                        :name="arrowRight"
                        :class="$style.icon"
                        size="24"
                        @click="handleAddClick"
                    />
                </template>
            </UiInput>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 } from "uuid";

import { arrowRight } from "~/constants/icons.js";

import type { ListItem } from "~/types/todo";
import type { UiInput } from "#build/components";

const PLACEHOLDERS = {
    mainInput: "Купить томаты",
};

const LABELS = {
    title: "TODO list",
};

// Refs
const inputComponent = ref<InstanceType<typeof UiInput> | null>(null);
// End Refs

// Input
const inputValue = ref<string>("");

const handleInput = (e: InputEvent): void => {
    const target = e.target as HTMLInputElement;

    inputValue.value = target.value || "";
};

const handleKeydown = (e: KeyboardEvent): void => {
    const target = e.target as HTMLInputElement;

    if (e.key === "Enter") {
        addToList();
        inputValue.value = "";
        target.focus();
    }
};

const handleAddClick = (): void => {
    const component = inputComponent.value?.component;

    addToList();
    inputValue.value = "";
    component?.focus?.();
};
// End Input

// List
const list = ref<ListItem[]>([]);

const addToList = (): void => {
    if (!inputValue.value) return;

    list.value.push({
        pk: v4(),
        title: inputValue.value,
        checked: false,
    });
};
// End List
</script>

<style lang="scss" module>
.Block {
    //
}

.heading {
    @extend %glass;

    padding: 24px 0 56px;
    margin-bottom: -32px;

    border-radius: 32px 32px 0 0;
}

.title {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: white;
}

.body {
    position: relative;
    z-index: 1;

    padding: 24px;

    border-radius: 32px;

    background: white;
}

.icon {
    color: $gray-2;

    cursor: pointer;
}
</style>
