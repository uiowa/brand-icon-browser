<template></template>

<script>
export default {};
</script>

<style lang="scss">
.button-group .uids-button:not(:last-child) {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.button-group .uids-button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Clear floats (clearfix hack) */
.button-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.button-group .uids-button:hover {
  background-color: #eee;
}
</style>