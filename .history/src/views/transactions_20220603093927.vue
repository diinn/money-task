<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li>
            {{ render(h) { }, function getRecord() {
            db.collection("transactions") .add({ category: category, location:
            location }) .then(() => { `<span> x </span>` }) } }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { projectFirestore } from "@/configs/firebase";

import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const { getRecord } = useCollection("transactions");

    async function onGetData() {
      await getRecord();
    }

    return { onGetData };

    //getRecord();
  },
};
</script>
