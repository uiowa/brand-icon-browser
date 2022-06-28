import { ref } from "vue";

const getIconSrc = (icon, variant, format, ratio) => {
  const currentIcon = ref("");
  const publicPath = "https://uiowa.github.io/brand-icons/dist";

  if (format) {
    if (ratio) {
      currentIcon.value =
        publicPath +
        "/icons/" +
        icon +
        "-" +
        variant +
        "-" +
        ratio +
        "." +
        format;
    } else {
      currentIcon.value =
        publicPath + "/icons/" + icon + "-" + variant + "." + format;
    }
  } else {
    // if no format is provided, fallback to png
    currentIcon.value = publicPath + "/icons/" + icon + "-" + variant + ".png";
  }

  return currentIcon;
};

export default getIconSrc;
