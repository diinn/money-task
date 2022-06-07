<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li v-for="{ result, index } in results" :key="index">
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
import { ref, onMounted, computed } from "vue";
export default {
  setup() {
    const results = ref([]);
    onMounted(async () => {
      const response = await projectFirestore.collection("transactions").get();
      results.value = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    const records = computed(() => {
      return results;
    });

    return { results };
  },
};
</script>
