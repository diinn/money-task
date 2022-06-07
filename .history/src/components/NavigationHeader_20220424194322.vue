<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div v-if="user" class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              class="w-full h-auto object-cover"
              src="https://i.pinimg.com/550x/e0/16/c8/e016c8070505d6f64862fbd27555941d.jpg"
              alt="User's Avatar"
              size="sm"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">
            {{ meta.text }}
          </h1>
        </div>
        <div class="flex">
          <ul>
            <button type="submit" class="text-primary">Thêm</button>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const route = useRoute();

    const { getUser } = useUser();
    const { user } = getUser();

    return {
      user,
      meta: computed(() => route.meta),
    };
  },
};
</script>
