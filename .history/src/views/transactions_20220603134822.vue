<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li v-for="item in results" :key="item.id">
            <p>{{ item.category }}</p>
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
    const results = ref([]);
    onMounted(async () => {
      const response = await projectFirestore.collection("transactions").get();
      results.value = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    // const records = computed(() => {
    //   return results;
    // });

    return { results };
  },
};
</script>
