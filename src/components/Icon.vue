<template>
  <div
    :class="{ variantFade: variantFade }"
    :style="style(icon, variant, format)"
  >
    <img
      :icon="icon"
      :variant="variant"
      :format="format"
      :src="src(icon, variant, format)"
      :alt="icon"
      loading="lazy"
      :class="[variant, { variantFade: variantFade }]"
      class="icon"
    />
  </div>
</template>

<script setup>
import getIconSrc from "../composables/getIconSrc.js";
import { ref } from "vue";
const props = defineProps({
  icon: String,
  variant: String,
  format: String,
  variantFade: Boolean,
});

function src(icon, variant, format) {
  if (props.variantFade == true) {
    return getIconSrc(icon, "two-color", format).value;
  } else {
    return getIconSrc(icon, variant, format).value;
  }
}

function style() {
  if (props.variantFade == true) {
    return {
      "background-image": `url(${
        getIconSrc(props.icon, "one-color-black", props.format).value
      })`,
      "background-size": "contain",
      "background-repeat": "no-repeat",
      "background-position": "50% 50%",
    };
  }
}
</script>

<style lang="scss">
.icon.variantFade {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;

  &.two-color {
    opacity: 1;
  }
}
</style>
