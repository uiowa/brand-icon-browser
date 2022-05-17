<template>
  <a class="uids-button" :href="url" :download="download ? '' : undefined">
    <div class="uids-button-inner">
      <span class="uids-button-inner__title">{{ text }}</span>
      <Icon
        v-if="icon"
        :icon="icon"
        variant="two-color"
        class="uids-button-inner__icon"
      />
    </div>
  </a>
</template>

<script setup>
import { defineProps, computed } from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
  url: String,
  text: String,
  download: String,
  icon: String,
});
</script>

<style lang="scss">
.uids-button {
  background-color: #fff;
  border: 1px solid #a8a8a8;
  border-radius: 3px;
  color: #000;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: "Roboto", "sans";
  display: inline-block;
  margin: 0;
  text-decoration: none;

  &__inner {
    display: flex;
  }

  &.active {
    background-color: #eee;
  }
  span {
    align-self: center;
  }
  svg {
    margin-left: 10px;
    align-self: center;
    fill: #fed600;
    width: 20px;
  }
}
</style>