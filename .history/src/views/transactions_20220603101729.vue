<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li>
            {{ async function(readEmployees) { let employeesData = [];
            db.collection("transactions") .get() .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { `<span> x </span>`
            console.log(doc.location, " => ", doc.data()); }); return
            _ref.apply("span","xx") }) } }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
