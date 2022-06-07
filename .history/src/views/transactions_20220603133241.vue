<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <h1>{{ results }}</h1>
          <li v-for="{ id, result } in transactions" :key="id">
            <p>{{ result.category }}</p>
            <p>{{ result.thumbnail }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const results = ref(null);
    onMounted(async () => {
      const response = await projectFirestore.collection("transactions").get();
      results.value = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return { results };
  },
};
</script>
