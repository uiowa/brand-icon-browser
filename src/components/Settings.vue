<template>
  <div class="button-group settings__variant-selector">
    <vue-toggle
      activeColor="#ffcd00"
      title="Color"
      name="vue-toggle"
      :toggled="true"
      @toggle="toggleVariantColor"
    />
  </div>
</template>

<script setup>
import ButtonGroup from "@/components/ButtonGroup.vue";
import Icon from "@/components/Icon.vue";
import { defineProps } from "vue";
import VueToggle from "vue-toggle-component";
import { ref } from "vue";

const props = defineProps({
  currentVariant: String,
});

const emit = defineEmits(["toggleVariantColor"]);

function toggleVariantColor() {
  emit("toggleVariantColor");
}
</script>

<style lang="scss">
.settings {
  &__variant-selector {
    margin-left: auto;
    padding: 0 20px;
  }
}

.m-toggle__content {
  border: 1px solid #bab8b8;
}
</style>
