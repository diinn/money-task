<template>
  <!-- start: info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
        <img
          class="w-full h-auto object-cover"
          src="https://i.pinimg.com/550x/e0/16/c8/e016c8070505d6f64862fbd27555941d.jpg"
          size="xs"
          alt="User's avatar"
        />
      </div>
      <div v-if="user" class="font-bold text-2xl text-primary mt-3">
        {{ user.displayName }}
      </div>
      <p v-if="user" class="font-semibold text-gray-400 mt-1">
        {{ user.email }}
      </p>
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
