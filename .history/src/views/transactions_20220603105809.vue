<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul id="exp-1">
          <li v-for="{ index, item } in items" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
import AppVue from "../App.vue";

// import useCollection from "@/composables/useCollection";
var exp1 = new AppVue({
  el: "#exp-1",
  data: {
    items: ["ccc"],
  },
});
exp1;
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
