<template>
  <div class="modal__backdrop" @click.self="closeModal()">
    <div class="modal">
      <div class="modal__actions">
        <svg
          @click="closeModal()"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </div>
      <div class="modal__body">
        <div class="modal__icon-preview-wrapper">
          <div>
            <div class="icon-preview" :class="iconPreviewClass">
              <Icon
                :icon="icon.name"
                :variant="selectedVariant"
                class="icon-preview__img"
              />
            </div>
          </div>
          <div class="modal__preview-actions">
            <div>
              <h1 class="modal__heading">{{ icon.name }}</h1>
              <p class="text-center">Select a variant:</p>
              <div class="modal__icon-variants-wrapper">
                <div
                  v-for="value in variants"
                  class="icon-preview icon-preview--small"
                  :class="[
                    {
                      'icon-preview--active': selectedVariant == value.variant,
                    },
                    'icon-preview--' + value.variant,
                  ]"
                  :key="value.variant"
                >
                  <Icon
                    class="icon-preview__img"
                    :icon="icon.name"
                    :variant="value.variant"
                    @click="changeSelectedVariant(value.variant)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__icon-preview-wrapper">
          <div class="icon-preview__download">
            <a
              :href="getIconSrc(icon.name, selectedVariant, 'svg').value"
              class="uids-button"
              download
              @click="
                gtag('event', 'icon_downloaded', [
                  { icon: icon.name },
                  { variant: selectedVariant },
                  { format: 'svg' },
                ])
              "
            >
              <div class="uids-button__inner">
                <span>SVG</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"
                  />
                </svg>
              </div>
            </a>
            <a
              :href="
                getIconSrc(icon.name, selectedVariant, 'png', 'square').value
              "
              class="uids-button"
              download
              @click="
                gtag('event', 'icon_downloaded', [
                  { icon: icon.name },
                  { variant: selectedVariant },
                  { format: 'png' },
                  { size: 'square' },
                ])
              "
            >
              <div class="uids-button__inner">
                <span>PNG (1:1)</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"
                  />
                </svg>
              </div>
            </a>
            <a
              :href="
                getIconSrc(icon.name, selectedVariant, 'png', 'wide').value
              "
              class="uids-button"
              download
              @click="
                gtag('event', 'icon_downloaded', [
                  { icon: icon.name },
                  { variant: selectedVariant },
                  { format: 'png' },
                  { size: 'wide' },
                ])
              "
            >
              <div class="uids-button__inner">
                <span>PNG (16:9)</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div class="tags">
          <span
            v-for="term in icon.keywords"
            :key="term.id"
            @click="closeModal()"
          >
            <router-link
              class="uids-tag"
              :to="{
                name: 'Search',
                params: { term: term },
              }"
              @click="gtag('event', 'search', [{ search_term: term }])"
              >#{{ term }}</router-link
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Icon from "@/components/Icon.vue";
import UidsButton from "@/components/UidsButton.vue";
import UidsTag from "@/components/UidsTag.vue";
import getIconSrc from "../composables/getIconSrc.js";

const props = defineProps({
  icon: Object,
  currentCategory: Object,
  variant: String,
});

const selectedVariant = ref("");
const iconPreviewClass = ref("white");
const emit = defineEmits(["closeModal"]);

selectedVariant.value = props.variant;

//Close modal upon pressing Esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

function changeSelectedVariant(variant) {
  if (variant == "one-color-white") {
    iconPreviewClass.value = "icon-preview--one-color-white";
  } else {
    iconPreviewClass.value = "";
  }
  selectedVariant.value = variant;
}
// Necessary to map which formats go with variants
// since we don't provide all formats for all variants.
const variants = [
  {
    variant: "one-color-black",
  },
  {
    variant: "two-color",
  },
  {
    variant: "one-color-gold",
  },
  {
    variant: "one-color-white",
  },
];

function closeModal() {
  emit("closeModal");
}
</script>

<style lang="scss">
.modal {
  width: 75%;
  padding: 30px;
  padding-top: 20px;
  margin: 20px auto;
  background: #fff;
  border: 1px solid #ccc;

  &__body {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  @media only screen and (min-width: 768px) {
    margin: 100px auto;

    height: auto;
  }

  @media only screen and (min-width: 1024px) {
    width: 75vw;
  }
  @media only screen and (min-width: 1280px) {
    width: 65vw;
  }
  @media only screen and (min-width: 1440px) {
    width: 60vw;
  }
  &__backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  &__heading {
    text-align: center;
    line-height: 1;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    display: grid;
    align-self: center;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
    }
  }

  &__actions {
    align-self: end;
    text-align: right;
    margin-bottom: 10px;
    margin-top: 0;
    svg {
      width: 15px;
      cursor: pointer;
    }
  }

  &__icon-preview-wrapper {
    display: grid;
    grid-gap: 10px;
    margin: 0 auto;
    align-items: center;

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__preview-actions {
    display: grid;
    p {
      text-align: center;
      margin-bottom: 10px;
      align-self: end;
    }
  }

  &__icon-variants-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2px;
    max-width: 50%;
    margin: auto;
  }
}

.icon-preview {
  padding: 10%;
  border: 1px solid #ccc;
  background-color: white;
  background: repeating-conic-gradient(#f1f1f1 0% 25%, transparent 0% 50%) 50% /
    50px 50px;
  &__img {
    display: block;
    width: 65%;
    margin: auto;

    @media only screen and (min-width: 760px) {
      width: 100%;
    }
  }

  &--small {
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }

  &--small.icon-preview--one-color-white {
    background: #000;

    &.icon-preview--active {
      background: #000;
    }
  }
  &.icon-preview--active {
    background: white;
    border-color: #ffcd00;
  }
  &__download {
    margin-top: 20px;
    text-align: center;
    .uids-button {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}

.tags {
  margin-top: 20px;
}
</style>
