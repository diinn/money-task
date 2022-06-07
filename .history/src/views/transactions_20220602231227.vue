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
// import { projectFirestore } from "@/configs/firebase";
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const { getRecord } = useCollection("transactions");

    function onOutPut() {
      if (getRecord.length >= 1) {
        console.log(getRecord);
      }
      return { onOutPut };
    }
  },
};
</script>
