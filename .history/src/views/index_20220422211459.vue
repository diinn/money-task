<template>
  <!-- <div v-if="user" class="mt-6">{{ user.displayName }}</div> -->

  <!-- start: info -->
  <div class=""></div>
  <!-- end: info -->

  <!-- start: menu -->
  <!-- end: menu -->
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
