<template>
  <div class="search">
    <form
      @submit.prevent="handleSearch(currentSearchTerm)"
      class="search__form"
    >
      <input
        type="search"
        placeholder="Examples: academics, accessibility, buildings, finance, heart, iowa"
        class="search__input"
        :value="currentSearchTerm"
        @change="setCurrentSearchTerm($event.target.value)"
        @focus="$event.target.select()"
      />
      <button class="search__button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import UidsButton from "@/components/UidsButton.vue";
const router = useRouter();
const route = useRoute();
const props = defineProps({
  currentSearchTerm: String,
});
const emit = defineEmits(["setCurrentSearchTerm"]);

function handleSearch(term) {
  if (term) {
    setCurrentSearchTerm(term);
    router.push({
      name: "Search",
      params: { term: term },
    });
  } else {
    // If no search term, send the user back home:
    router.push({
      name: "Home",
    });
  }
}

function setCurrentSearchTerm(term) {
  emit("setCurrentSearchTerm", term);
}
</script>

<style lang="scss">
.search {
  width: 100%;

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__input {
    display: block;
    margin: 0;
    border: 1px solid #ccc;
    border-right: none;
    padding: 20px;
    width: 100%;
    height: 60px;
    font-size: 1.3rem;
  }

  &__button {
    color: black;
    background: white;
    padding: 0 20px;
    border-left: 0;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0;
    font-size: 1.3rem;
    height: 60px;
    cursor: pointer;
    svg {
      width: 25px;
    }
  }
}
// Hide default mobile Safari search icons
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
