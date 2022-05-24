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
      <button class="search__button">Search</button>
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
  // @media only screen and (min-width: 1024px) {
  //   width: 55%;
  // }
  width: 90%;
  @media only screen and (min-width: 1280px) {
    // width: 55%;
  }
  @media only screen and (min-width: 1440px) {
    // width: 65%;
  }
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
    background: #ffcd00;
    color: black;
    padding: 0 20px;
    border: 1px solid #ccc;
    margin: 0;
    font-size: 1.3rem;
    height: 60px;
    cursor: pointer;
  }
}
</style>
