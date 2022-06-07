<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li v-for="{ userId, transaction } in transactions" :key="userId">
            <p>{{ transaction.category }}</p>
            <p>{{ transaction.thumbnail }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const { getRecord } = useCollection("transactions");

    async function onGetData() {
      return await getRecord();
    }

    console.log(onGetData());

    return { onGetData };
  },
};
</script>
