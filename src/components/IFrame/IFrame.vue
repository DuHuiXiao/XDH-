<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '300px',
  }
});
const thisUrls = window.location.href.split('/')[3]
console.log(thisUrls);

const baseUrl = window.location.protocol + '//' + window.location.host + '/' + thisUrls;

console.log(baseUrl);

</script>

<template>
  <iframe :src="baseUrl + src" frameborder="0"
  :width="props.width"
  :height="props.height"></iframe>
</template>