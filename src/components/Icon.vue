<template>

<svg class="variant">
    <use :xlink:href="'/sprite.svg#' + icon + '-' + variant"></use>
</svg>

</template>

<script setup>
import getIconSrc from "../composables/getIconSrc.js";
import { ref } from "vue";
const props = defineProps({
  icon: String,
  variant: String,
  format: String,
});
</script>

<style></style>
