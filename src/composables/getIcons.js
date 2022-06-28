import { ref } from "vue";

const getIcons = () => {
  const icons = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("https://uiowa.github.io/brand-icons/icons.json");

      if (!data.ok) {
        throw Error("no data available");
      }

      icons.value = await data.json();
      //console.log(icons.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { icons, error, load };
};

export default getIcons;
