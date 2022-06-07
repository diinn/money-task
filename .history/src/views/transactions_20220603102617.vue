<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li id="li">
            {{ async function(readEmployees) { let employeesData = [];
            db.collection("transactions") .get() .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { console.log(doc.location, " => ",
            doc.data());`<span> x </span>` }) }) } }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { projectFirestore } from "@/configs/firebase";
function call() {
  document.getElementById("demo").innerHTML = 77;
}
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
