<template>
  <form @submit.prevent="onSubmit">
    <!-- start: main from -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >VND</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Tổng</span>
                <input
                  id="total"
                  class="text-3xl text-dark w-full outline-none mt-1"
                  type="number"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-primary"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Tiêu đề"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100">
                <input
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Ghi chú"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">
                  {{ new Date().toLocaleString() }}
                </div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">Ví của tôi</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- end: main from -->

    <div v-if="!isMoreDetails" class="row mt-8">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        Thêm thông tin
      </button>
    </div>

    <!-- start: more details -->
    <template v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="flex items-center flex-none w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Tại"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div
                  class="flex items-center flex-none w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100">
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Với"
                    v-model="withPerson"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- start: upload photos -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold">Thêm ảnh</div>
                  <input
                    id="file"
                    type="file"
                    class="hidden"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red">{{ errorFile.value }}</div>
      </div>
      <!-- end: upload photos -->
    </template>
    <!-- end: more details -->

    <button type="submit" class="bg-primary text-white">
      ADD TESTING BUTTON
    </button>
  </form>
</template>

<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";

import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const withPerson = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      const selected = event.target.files[0];

      const typesOfFile = ["image/png", "image/jpg"];

      if (selected && typesOfFile.includes(selected.type)) {
        file.value = selected;
        console.log(file.value);
      } else {
        file.value = null;
        errorFile.value = "Vui lòng chọn ảnh có định dạng PNG hoặc JPG!";
        console.log(errorFile.value);
      }
    }

    async function onSubmit() {
      const { user } = getUser();

      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        location: location.value,
        withPerson: withPerson.value,
      };

      await addRecord(transaction);

      console.log(error);
      console.log("created");
    }

    return {
      isMoreDetails,
      total,
      category,
      note,
      time,
      location,
      withPerson,
      errorFile,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>
