<script setup lang="ts">
    import { Validator } from "./logic"
    import EaInput from './EaInput.vue'
    import { defineProps, ref } from "vue";

    const props = defineProps<{
        validator: Validator
    }>()

    const model = defineModel()

    const element = ref<HTMLInputElement>()

</script>

<template>
    <input @input="validator.validate()" class="ea-input" ref="element">
</template>