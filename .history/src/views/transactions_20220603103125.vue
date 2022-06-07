<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li id="li" call()></li>
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
call();
// import useCollection from "@/composables/useCollection";
</script>
