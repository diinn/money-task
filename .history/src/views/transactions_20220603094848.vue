<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li>
            {{ readEmployees() { let employeesData = [];
            db.collection("transactions") .get() .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { employeesData.push({ id: doc.id,
            name: doc.data().name, date: doc.data().date, });
            console.log(doc.id, " => ", doc.data()); }); `<span></span>` return
            employeesData }) .catch((error) => { console.log("Error getting
            documents: ", error); }); } }}
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
