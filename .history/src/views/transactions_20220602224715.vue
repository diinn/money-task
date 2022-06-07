<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <ul>
          <li>
            <span>Ngày tạo: </span>
            <span>31/05/2022</span>
          </li>
          <li>
            <span>Tổng tiền: </span>
            <span>20.000</span>
          </li>
          <li>
            <span>Tiêu đề: </span>
            <span>Ăn uống</span>
          </li>
          <li>
            <span>Với: </span>
            <span>Thanh Điền</span>
          </li>
          <li>
            <span>Tại: </span>
            <span>Căn tin</span>
          </li>
          <li>
            <span>Ghi chú: </span>
            <span>hihi</span>
          </li>
          <!-- <div class="w-full h-full overflow-hidden">
            <img
              class="w-full h-auto object-cover"
              src="https://unsplash.com/photos/PMiWXTw7StQ"
              alt=""
            />
          </div> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
export default {
  setup() {
    async function getRecord() {
      const response = await projectFirestore.collection("transactions").get();
      console.log(response.docs);
      const dataRecord = response.docs.map((doc) => {
        return doc.data();
      });
      console.log(dataRecord);
    }
    getRecord();
  },
};
</script>
