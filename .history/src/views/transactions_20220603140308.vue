<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul v-for="item in results" :key="item.id">
          <li>
            <div class="">
              <span>Ngày tạo: </span>
              <span class="">{{ new Date(item.time) }}</span>
            </div>
            <div class="">
              <span>Tiêu đề: </span>
              <span class="capitalize">{{ item.category }}</span>
            </div>
            <div class="">
              <span>Tổng tiền: </span>
              <span class="capitalize">{{ item.total }}</span>
            </div>
            <div class="">
              <img :src="item.thumbnail" />
            </div>
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
