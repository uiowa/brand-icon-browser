<template>
  <IconList
    :icons="icons.icons"
    :variant="currentVariant"
    @openModal="openModal"
  />
</template>

<script setup>
import IconList from "@/components/IconList.vue";

// import getCats from '../composables/getCats.js'
import { ref, computed, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
import getIcons from "../composables/getIcons.js";

const route = useRoute();

const emit = defineEmits(["openModal"]);
const props = defineProps({
  currentVariant: String,
});

const { icons, error, load } = getIcons();

await load();

function openModal(icon) {
  emit("openModal", icon);
}
</script>
