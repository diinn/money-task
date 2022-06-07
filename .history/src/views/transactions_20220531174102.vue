<template>
  <div v-for="{ total, note, time } in tranasactions" :key="time" class="">
    <div class="">{{ total }}</div>
    <div class="">{{ note }}</div>
    <div class="">{{ time }}</div>
  </div>
</template>

<script>
import useTransaction from "@/composables/useTransaction";

export default {
  setup() {
    const tranasactions = useTransaction();
    return { tranasactions };
  },
};
</script>
