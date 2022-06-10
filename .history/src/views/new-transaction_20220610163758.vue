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
                <div class="flex flex-1 border-b border-gray-100">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Tại"
                    v-model="location"
                  />
                  <button class="bg-primary text-white" @click="getLocation">
                    Lấy vị trí
                  </button>
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
              <label
                for="file"
                class="flex items-center text-primary font-bold"
              >
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold" @click="OnPickImg">
                    Thêm ảnh
                  </div>
                  <input
                    id="file"
                    type="file"
                    class="hidden"
                    @change="onChangeFile"
                  />
                </div>
                <div>
                  <img :src="thumbnail" alt="" srcset="" />
                </div>
                <button @click="delImg">xoas</button>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red my-3 pl-2">{{ errorFile }}</div>
      </div>
      <!-- end: upload photos -->
    </template>
    <!-- end: more details -->

    <div class="flex w-full justify-center mt-3">
      <button
        type="submit"
        class="bg-primary text-white font-bold px-4 py-2 rounded"
      >
        Thêm
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";

import useCollection from "@/composables/useCollection";

import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const { url, uploadFile } = useStorage("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const withPerson = ref("");
    const thumbnail = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      const selected = event.target.files[0];

      const typesOfFile = ["image/png", "image/jpg", "image/jpeg"];

      if (selected && typesOfFile.includes(selected.type)) {
        file.value = selected;
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          thumbnail.value = fileReader.result;
        });
        fileReader.readAsDataURL(selected);
      } else {
        file.value = null;
        errorFile.value = "Vui lòng chọn ảnh có định dạng PNG, JPG hoặc JPEG!";
      }
    }

    function delImg() {
      thumbnail.value = "";
      file.value = null;
    }

    function getLocation() {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            location.value = `${position.coords.latitude} + ${position.coords.longitude}`;
            // var { data } = await axios.get(
            //   "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            //     position.coords.latitude +
            //     "," +
            //     position.coords.longitude +
            //     "&key={yourAPIKey}"
            // );
            // if (data.error_message) {
            //   console.log(data.error_message);
            // } else {
            //   location.value = data.results[0].formatted_address;
            // }
          },
          (error) => {
            console.log(error.message);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }

    async function onSubmit() {
      if (file.value) await uploadFile(file.value);

      const { user } = getUser();

      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        location: location.value,
        withPerson: withPerson.value,
        thumbnail: url.value,
      };

      await addRecord(transaction);

      console.log(error);
      console.log("Created");
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
      getLocation,
      delImg,
      thumbnail,
    };
  },
};
</script>
