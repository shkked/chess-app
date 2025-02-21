<script setup>
defineProps({
  name: String, 
  width: { type: String, default: "50" },
  height: { type: String, default: "50" }
});
</script>

<template>
  <svg :width="width" :height="height">
    <use :xlink:href="`/icons.svg#${name}`" />
  </svg>
</template>