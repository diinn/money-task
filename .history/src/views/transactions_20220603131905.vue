<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <h1>{{ result }}</h1>
          <!-- <li v-for="{ userId, transaction } in transactions" :key="userId">
            <p>{{ transaction.category }}</p>
            <p>{{ transaction.thumbnail }}</p>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
// import useCollection from "@/composables/useCollection";
import { ref, reactive, onMounted } from "vue";
export default {
  setup() {
    // const { getRecord } = useCollection("transactions");
    const result = ref(null);
    const temp = reactive({
      name: "Thanh",
      phone: "123",
    });
    onMounted(async () => {
      const response = await projectFirestore.collection("transactions").get();
      result.value = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    // const response = await projectFirestore.collection("transactions").get();
    // result.value = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return { result, temp };
  },
};
</script>
