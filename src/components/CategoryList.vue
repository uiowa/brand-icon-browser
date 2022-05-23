<template>
  <div class="category-list">
    <ul class="category-list__list">
      <li class="category-list-item">
        <router-link
          :to="{ name: 'Home' }"
          class="category-list-item__link"
          active-class="category-list-item__link--active"
        >
          <Icon
            icon="open-book"
            variant="two-color"
            class="category-list-item__icon"
          />
          <div class="category-list-item__title">All brand icons</div>
          <div class="category-list-item__count">{{ icons.length }}</div>
        </router-link>
      </li>
      <li
        v-for="category in categories"
        :key="category.title"
        class="category-list__item"
      >
        <CategoryListItem
          :label="category.label"
          :icon="category.icon"
          :category="category"
          :count="category.icons.length"
        />
      </li>
    </ul>
  </div>
  <a
    href="https://github.com/uiowa/brand-icons/archive/refs/heads/main.zip"
    class="download-button"
    ><span>Download all</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"
      />
    </svg>
  </a>
</template>

<script setup>
import catData from "/data/categories.json";
import iconsData from "/data/icons.json";
import CategoryListItem from "@/components/CategoryListItem.vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
  icon: String,
  currentCategory: String,
});

const emit = defineEmits(["clearCurrentCategory"]);
const categories = catData.categories;
const icons = iconsData.icons;
</script>

<style lang="scss">
.category-list {
  position: sticky;
  top: 0;
  margin-top: 15px;
  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    row-gap: 10px;
  }
}
.download-button {
  border-radius: 3px;
  color: #000;
  padding: 10px 20px;
  padding-left: 0;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto", "sans";
  font-size: 0.9rem;
  line-height: 1;
  margin-left: auto;
  display: flex;

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
