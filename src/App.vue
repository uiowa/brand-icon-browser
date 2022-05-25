<template>
  <uids-brand-bar height="narrow">
    <h1 class="site-name">Brand Icon Browser</h1>
  </uids-brand-bar>

  <div class="wrapper">
    <aside>
      <div class="sticky">
        <CategoryList />
        <div class="download-section">
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
        </div>
      </div>
    </aside>

    <main>
      <div class="toolbar sticky">
        <SearchBar
          id="search"
          @setCurrentSearchTerm="setCurrentSearchTerm"
          :currentSearchTerm="currentSearchTerm"
        />
        <Settings
          @toggleVariantColor="toggleVariantColor"
          :currentVariant="currentVariant"
        />
      </div>

      <router-view
        @openModal="openModal"
        :currentVariant="currentVariant"
        @setCurrentSearchTerm="setCurrentSearchTerm"
      />
    </main>
  </div>

  <teleport to=".modals" v-if="showModal">
    <IconModal
      @closeModal="closeModal"
      :variant="currentVariant"
      :icon="iconDetails"
    />
  </teleport>
</template>

<style lang="scss">
@import 'node_modules/uids/src/assets/scss/reset.scss';
@import 'node_modules/uids/src/components/logo/logo.scss';
@import 'node_modules/uids/src/components/brand-bar/brand-bar.scss';
body {
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
  text-align: left;
  background-color: #f5f5f5;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

a {
  color: #000;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  margin: 0 auto;
  padding: 0 10px;
  grid-template-columns: repeat(12, 1fr);
}

.toolbar {
  padding: 15px 0;
  background-color: #f5f5f5de;
  backdrop-filter: blur(5px);
  @media only screen and (min-width: 1280px) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
}

.sticky {
  @media only screen and (min-width: 1280px) {
    position: sticky;
    top: 0;
  }
}

.active {
  background: #eee;
}

.header {
  text-align: center;
  font-size: 4rem;
  grid-column: 1 / 13;
  display: grid;
  min-height: 150px;

  &__title {
    font-weight: 300;
    font-size: 4rem;
    margin: 0;
    align-self: center;
    line-height: 1;
    a {
      text-decoration: none;
    }
  }
}

.download-section {
  margin-top: 20px;
  padding-top: 10px;
}
.download-button {
  border-radius: 3px;
  color: #000;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-family: "Roboto", "sans";
  font-size: 0.9rem;
  line-height: 1;
  margin-top: 10px;
  display: flex;
  border: 1px solid #ccc;

  span {
    align-self: center;
    margin-left: auto;
  }
  svg {
    margin-left: 10px;
    align-self: center;
    fill: #fed600;
    width: 20px;
    margin-left: auto;
  }
}
aside {
  grid-column: 1 / 13;

  @media only screen and (min-width: 760px) {
    grid-column: 1 / 4;
  }

  @media only screen and (min-width: 1280px) {
    grid-column: 1 / 3;
  }
}

main {
  grid-column: 1 / 13;
  @media only screen and (min-width: 760px) {
    grid-column: 4 / 13;
  }

  @media only screen and (min-width: 1280px) {
    grid-column: 3 / 13;
  }
}

.content {
  grid-column: 4 / 11;
}

.text-center {
  text-align: center;
}
</style>
<script setup>
import { ref, computed, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
import UidsFooter from "@/components/UidsFooter.vue";
import SearchBar from "@/components/SearchBar.vue";
import Settings from "@/components/Settings.vue";
import IconList from "@/components/IconList.vue";
import IconModal from "@/components/IconModal.vue";
import CategoryList from "@/components/CategoryList.vue";
import iconsData from "/node_modules/uiowa-brand-icons/icons.json";
import { UidsBrandBar } from 'uids';

//Initiate app with two color variant for pretty reasons:
const currentVariant = ref("two-color");

const router = useRouter();
const route = useRoute();
const showModal = ref(false);
const iconDetails = ref("");
const currentSearchTerm = ref("");

//If we have an icon in the current URL params, show the icon modal:
if (window.location.hash) {
  let currentIconId = window.location.hash.replace("#", "");
  let currentIcon = iconsData.icons.find(function (icon) {
    return icon.name == currentIconId;
  });
  if (currentIcon) {
    iconDetails.value = currentIconId;
    openModal(currentIcon);
  }
}

function setCurrentSearchTerm(term) {
  currentSearchTerm.value = term;
}

function openModal(icon) {
  showModal.value = true;
  iconDetails.value = icon;
}

function toggleVariantColor() {
  // Wait 200ms before toggling between colors to make the toggle animation smoother.
  // I don't like this, but feel compelled to do it.
  setTimeout(() => {
    if (currentVariant.value == "one-color-black") {
      currentVariant.value = "two-color";
    } else {
      currentVariant.value = "one-color-black";
    }
  }, 300);
}

function closeModal() {
  router.push({ hash: "" });
  showModal.value = false;
}
</script>
