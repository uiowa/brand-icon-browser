import { ref } from "vue";

const getIconSrc = (icon, variant, format, ratio) => {
  const currentIcon = ref("");

  if (format) {
    if (ratio) {
      currentIcon.value =
        "/brand-icons/" + icon + "-" + variant + "-" + ratio + "." + format;
    } else {
      currentIcon.value = "/brand-icons/" + icon + "-" + variant + "." + format;
    }
  } else {
    // if no format is provided, fallback to png
    currentIcon.value = "/brand-icons/" + icon + "-" + variant + ".png";
  }

  return currentIcon;
};

export default getIconSrc;
