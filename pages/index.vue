<template>
    <div :class="$style.MainPage">
        <div :class="$style.container">
            <ProjectPreview
                v-for="project in projectsList"
                v-bind="project"
                :key="project.pk"
                :class="$style.preview"
            />
        </div>
    </div>
</template>

<script setup>
const $style = useCssModule();

const projectsList = [
    {
        pk: "todo",
        title: "Простой TODO список",
        description:
            "Добавление и удаление элементов списка. Вычеркивание завершенных задач. Сохранение данных в localstorage",
        link: "/todo",
        imageSrc: "",
    },
    {
        pk: "todo1",
        title: "Простой TODO список",
        description:
            "Добавление и удаление элементов списка. Вычеркивание завершенных задач. Сохранение данных в localstorage",
        link: "/todo",
        imageSrc: "",
    },
    {
        pk: "todo2",
        title: "Простой TODO список",
        description:
            "Добавление и удаление элементов списка. Вычеркивание завершенных задач. Сохранение данных в localstorage",
        link: "/todo",
        imageSrc: "",
    },
    {
        pk: "todo3",
        title: "Простой TODO список",
        description:
            "Добавление и удаление элементов списка. Вычеркивание завершенных задач. Сохранение данных в localstorage",
        link: "/todo",
        imageSrc: "",
    },
];
</script>

<style lang="scss" module>
.MainPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 1312px;

    margin: 0 auto;
    padding: 24px 12px 48px;

    @include from(tablet) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

.preview {
    margin-bottom: 24px;

    @include from(mobile) {
        width: unset;

        margin: 0 auto 24px;
    }

    @include from(tablet) {
        width: calc(50% - 12px);

        margin: 0 0 24px;
    }
}
</style>
