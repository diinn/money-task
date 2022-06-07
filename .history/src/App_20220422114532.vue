<template>
  <component :is="componentId">
    <router-view />
  </component>
</template>

<script>
export default {
  setup() {
    return {
      layout,
    };
  },
};
</script>
