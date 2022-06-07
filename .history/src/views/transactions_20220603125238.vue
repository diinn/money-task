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
import { projectFirestore } from "@/configs/firebase";
// import useCollection from "@/composables/useCollection";
export default {
  async setup() {
    // const { getRecord } = useCollection("transactions");

    const response = await projectFirestore.collection("transactions").get();
    // const result = response.docs.map((doc) => {
    //   return { ...doc.data(), id: doc.id };
    // });

    console.log(response.docs.data);

    return { response };
  },
};
</script>
