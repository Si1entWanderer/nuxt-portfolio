<template>
    <div :class="$style.Input">
        <slot name="pre-input" />
        <input
            ref="component"
            :class="$style.field"
            :value="value"
            :name="name"
            :placeholder="placeholder"
            @input="$emit('input', $event)"
            @change="$emit('change', $event)"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)"
            @keydown="$emit('keydown', $event)"
        />
        <slot name="post-input" />
    </div>
</template>

<script setup lang="ts">
interface Props {
    name?: string;
    placeholder?: string;
    value: string | number;
}

const { name, placeholder, value } = defineProps<Props>();

const component = ref<HTMLInputElement | null>(null);
defineExpose({
    component,
});

const $emit = defineEmits(["change", "blur", "input", "focus", "keydown"]);
</script>

<style lang="scss" module>
.Input {
    display: flex;
    align-items: center;

    padding: 12px 8px;

    border: 1px solid #{$gray-1};
    border-radius: 12px;
}

.field {
    flex-grow: 1;

    padding: 0;

    border: none;

    outline: none;

    &::placeholder {
        color: $gray-2;
    }
}
</style>
