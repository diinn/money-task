<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li v-for="transaction in transactions" :key="id"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
export default {
  setup() {
    async function getRecord() {
      const response = await projectFirestore.collection("transactions").get();
      console.log(response.docs);
      const dataRecord = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(dataRecord);
    }
    getRecord();
    return { transaction };
  },
};
</script>
