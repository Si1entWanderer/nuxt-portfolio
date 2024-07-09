<template>
    <div :class="$style.Footer">
        <a href="" :class="$style.author" target="_blank">
            made by&nbsp;
            <span :class="$style.strong">Петр Халиков</span>

            <Icon :class="$style.icon" :name="githubIcon" size="24" />
        </a>
    </div>
</template>

<script setup>
import { githubIcon } from "~/constants/icons";
</script>

<style lang="scss" module>
.Footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 24px;
    background: black;
}

.author {
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
}

.strong {
    font-weight: 500;
}

.link {
    display: flex;
    align-items: center;
    color: white;
}

.icon {
    margin-left: 8px;
}
</style>
