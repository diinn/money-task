<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit="onSubmit">
        <div class="row">
          <label for="fullName">
            <span class="font-semibold">Họ và Tên</span>
            <input
              class="px-4 py-3 rounded-lg border-gray-100 mt-1"
              type="text"
              placeholder="Nhập họ tên của bạn"
            />
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
