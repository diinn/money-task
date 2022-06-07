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
      <div
        v-if="user"
        class="flex justify-center items-center font-bold text-2xl text-primary mt-3"
      >
        {{ user.displayName }}
      </div>
      <p
        v-if="user"
        class="flex justify-center items-center font-semibold text-gray-400 mt-1"
      >
        {{ user.email }}
      </p>
    </div>
  </div>
  <!-- end: info -->

  <!-- start: menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">Danh mục</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="profileOption in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end: menu -->
</template>

<script>
import { useUser } from "@/composables/useUser";
import { reactive } from "vue";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const profileOptions = reactive([
      {
        name: "Ví của tôi",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Công cụ",
        icon: "t2ico-ticket-star",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Thông tin",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);

    return { user, profileOptions };
  },
};
</script>
