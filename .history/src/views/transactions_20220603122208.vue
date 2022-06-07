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
// import useCollection from "@/composables/useCollection";
// import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";
export default {
  setup() {
    // const { getRecord } = useCollection("transactions");

    async function getRecord() {
      const response = await projectFirestore.collection("transactions").get();
      const dataRecord = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return dataRecord;
    }

    return { getRecord };
  },
};
</script>
