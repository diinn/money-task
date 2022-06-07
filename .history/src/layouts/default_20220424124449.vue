<template>
  <navigation-header />
  <slot />
  <navigation-bottom />
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
  components: {
    NavigationHeader,
    NavigationBottom,
  },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
