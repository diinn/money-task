<template>
  <div class="row">
    <div class="container mx-auto pt-16 pb-16">
      <div class="grid grid-cols-1 gap-5 px-1">
        <ul
          v-for="item in results"
          :key="item.id"
          class="rounded-lg bg-blue-50 px-8 py-4"
        >
          <li>
            <div class="">
              <span>Ngày tạo: </span>
              <span class="">{{
                item.time.toDate().toLocaleDateString()
              }}</span>
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
              <span>Tại: </span>
              <span class="capitalize">{{ item.location }}</span>
            </div>
            <div class="">
              <span>Với: </span>
              <span class="capitalize">{{ item.withPerson }}</span>
            </div>
            <div class="">
              <span>Ghi chú: </span>
              <span class="capitalize">{{ item.note }}</span>
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
import { ref, onMounted } from "vue";
import { projectFirestore } from "@/configs/firebase";

import { projectAuth } from "@/configs/firebase";

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
    const user = ref(projectAuth.currentUser);

    console.log(user.value);

    return { results };
  },
};
</script>
