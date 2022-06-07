<template>
  <div class="home">ThanhDien</div>
  <div class="mt-6">{{ user }}</div>
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
