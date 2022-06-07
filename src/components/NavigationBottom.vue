<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between items-center h-full">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";

import { NAVIGATION_BOTTOM_ITEMS } from "@/constants/index";
export default {
  setup() {
    const navItems = reactive(NAVIGATION_BOTTOM_ITEMS);
    return { navItems };
  },
};
</script>
