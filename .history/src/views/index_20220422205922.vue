<template>
  <div class="home">ThanhDien</div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
  },
};
</script>
