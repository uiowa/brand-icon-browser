<template>
  <uids-brand-bar height="narrow">
    <h1 class="site-name">
      <router-link :to="{ name: 'Home' }">Brand Icon Browser</router-link>
    </h1>
  </uids-brand-bar>

  <div class="wrapper">
    <aside>
      <div class="sticky">
        <CategoryList />
        <div class="download-section">
          <uids-button
            href="https://github.com/uiowa/brand-icons/archive/refs/heads/main.zip"
            color="tertiary"
            class="download-button"
            :full="true"
            download
            >Download all
            <i class="fas fa-download"></i>
          </uids-button>
        </div>
        <p class="feedback">
          <a
            href="mailto:osc-brand@uiowa.edu?subject=Brand Icon Browser Feedback"
            >Submit Feedback</a
          >
          <a href="https://uiowa.edu/privacy">Privacy Notice</a>
        </p>
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
        @setCurrentSearchTerm="setCurrentSearchTerm"
        :currentVariant="currentVariant"
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
@import "node_modules/uids/src/assets/scss/reset.scss";
@import "node_modules/uids/src/components/logo/logo.scss";
@import "node_modules/uids/src/components/brand-bar/brand-bar.scss";
@import "node_modules/uids/src/components/button/button.scss";
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

  &.modal-open {
    height: 100vh;
    overflow: hidden;
  }
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
  max-width: 1550px;
}

.toolbar {
  padding: 10px 0;
  background-color: #f5f5f5de;
  backdrop-filter: blur(5px);

  @media only screen and (min-width: 760px) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
}

.sticky {
  @media only screen and (min-width: 760px) {
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
}
// .bttn.download-button {
//   display: block;
//   border-color: #ccc;
//   background: white;
// }
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

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
}
.feedback {
  text-align: center;
  margin-bottom: 0;
  font-size: 13px;
  a {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    &:not(:last-child) {
      padding-left: 0;
      border-right: 1px solid #000;
    }
  }
}

.privacy-container {
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  text-align: center;
  font-size: 12px;
}
</style>
<script setup>
import { ref, computed, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
import { UidsBrandBar, UidsButton } from "uids";
import iconsData from "/node_modules/uiowa-brand-icons/icons.json";
import CategoryList from "@/components/CategoryList.vue";
import IconList from "@/components/IconList.vue";
import IconModal from "@/components/IconModal.vue";
import SearchBar from "@/components/SearchBar.vue";
import Settings from "@/components/Settings.vue";
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
  document.body.classList.add("modal-open");
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
  document.body.classList.remove("modal-open");
  showModal.value = false;
}
</script>
