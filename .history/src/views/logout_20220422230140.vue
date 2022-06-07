<template>
  <h1>Logout page</h1>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
export default {
  setup() {
    const { error, logout } = useLogout();

    logout();

    return { error };
  },
};
</script>
