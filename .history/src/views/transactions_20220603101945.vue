<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li>
            {{ async function(readEmployees) { let employeesData = [];
            db.collection("transactions") .get() .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { `<span> x </span>`
            console.log(doc.location, " => ", doc.data()); }) }) } }}
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
