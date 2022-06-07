<template>
  <div v-for="{ total, note, time } in tranasactions" :key="time" class="">
    <div class="">{{ total }}</div>
    <div class="">{{ note }}</div>
    <div class="">{{ time }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";

import useCollection from "@/composables/useCollection";

import useStorage from "@/composables/useStorage";

export default {
  setup() {},
};
</script>
