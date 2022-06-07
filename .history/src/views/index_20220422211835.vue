<template>
  <!-- <div v-if="user" class="mt-6">{{ user.displayName }}</div> -->

  <!-- start: info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoidap247.com%2Fcau-hoi%2F723157&psig=AOvVaw1wvCmmdJpJx6UIT6RRQLCB&ust=1650723340384000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDSz6Xup_cCFQAAAAAdAAAAABAE"
          alt="User's avatar"
        />
      </div>
    </div>
  </div>
  <!-- end: info -->

  <!-- start: menu -->
  <div class=""></div>
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
