<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li cid="li" call()>
            {{ async function(readEmployees) { let employeesData = [];
            db.collection("transactions") .get() .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { console.log(doc.location, " =>
            ",`<span> x </span>` doc.data()); }) }) } }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { projectFirestore } from "@/configs/firebase";
function call() {
  document.getElementById("li").innerHTML = 77;
}
call();
</script>
