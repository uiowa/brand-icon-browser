<template>
  <router-link
    @click="scrollToTop"
    :to="{
      name: 'Category',
      params: { category: category.slug },
      query: { search: undefined },
    }"
    class="category-list-item__link"
    active-class="category-list-item__link--active"
  >
    <Icon :icon="icon" variant="two-color" class="category-list-item__icon" />
    <div class="category-list-item__title">{{ label }}</div>
    <div class="category-list-item__count">{{ count }}</div>
  </router-link>
</template>
<script setup>
import { defineProps } from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
  label: String,
  icon: String,
  count: Number,
  category: Object,
});

// @todo: fix scrolling now that new search has been implemented:
// observer.observe(document.querySelector("#search"));

// var searchVisible = true;
// var observer = new IntersectionObserver(
//   function (entries) {
//     if (entries[0].isIntersecting === true) {
//       searchVisible = true;
//     } else {
//       searchVisible = false;
//     }
//   },
//   { threshold: [1] }
// );

function scrollToTop() {
  // if (!searchVisible) {
  //   var element = document.getElementById("icon-list");
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // }
}
</script>

<style lang="scss">
.category-list-item {
  &__link {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 10px;
    text-decoration: none;

    &:hover,
    &--active {
      background: #fff;
      border-color: #eee;
    }
  }

  &__icon {
    display: block;
    align-self: center;
    padding: 5px 0;
    height: 40px;
    grid-column: span 1;
  }

  &__title {
    font-size: clamp(0.8rem, 1vw, 0.9rem);
    grid-column: span 4;
    align-self: center;
    line-height: 1;
    padding-left: 10px;
  }

  &__count {
    font-size: clamp(0.8rem, 1vw, 0.9rem);
    grid-column: span 1;
    justify-self: right;
    align-self: center;
    color: #666;
  }
}
</style>
