<template>
  <div class="row">
    <div class="container mx-auto pt-16 pb-16">
      <div class="grid grid-cols-1 gap-5 px-1">
        <div
          class="fixed top-14 p-5 left-0 right-0 pl-8 font-bold text-primary text-lg bg-white"
        >
          <i class="t2ico t2ico-wallet"></i>
          <span>Chi tiêu của bạn: </span>
          <span>{{
            total.toLocaleString("vi", { style: "currency", currency: "VND" })
          }}</span>
        </div>
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
              <span class="capitalize">{{
                item.total.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              }}</span>
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
import { ref, onMounted, computed } from "vue";
import { projectFirestore } from "@/configs/firebase";

import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const results = ref([]);
    const { getUser } = useUser();
    const { user } = getUser();
    onMounted(async () => {
      const response = await projectFirestore.collection("transactions").get();
      results.value = response.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((rec) => rec.userId === user.value.uid);
    });

    const total = computed(() =>
      results.value.map((r) => r.total).reduce((a, b) => a + b, 0)
    );
    return { results, total };
  },
};
</script>
