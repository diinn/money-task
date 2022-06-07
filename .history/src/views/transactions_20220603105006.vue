<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul id="">
          <li v-for="{ item } in items" :key="userId">
            <span getRecord() ref="myDiv">{{ category }}</span>
            <span>{{ total }}</span>
            <span>{{ time }}</span>
            <span>{{ location }}</span>
            <span>{{ withPerson }}</span>
            <span>{{ note }}</span>
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
  setup() {
    // const { getRecord } = useCollection("transactions");

    // async function onGetData() {
    //   await getRecord();
    // }

    // return { onGetData };

    async function getRecord() {
      const response = await projectFirestore.collection("transactions").get();
      console.log(response.docs);
      const dataRecord = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(dataRecord);
    }

    getRecord();
  },
};
</script>
