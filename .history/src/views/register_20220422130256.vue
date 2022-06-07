<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit="onSubmit">
        <div class="row">
          <label for="fullName">
            <span class="font-semibold">Họ và Tên</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1"
              type="text"
              placeholder="Nhập họ tên của bạn"
            />
          </label>
        </div>
        <div class="row">
          <label for="email">
            <span class="font-semibold">Địa chỉ email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1"
              type="email"
              placeholder="Nhập email của bạn"
            />
          </label>
        </div>
        <div class="row">
          <label for="password">
            <span class="font-semibold">Mật khẩu</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1"
              type="text"
              placeholder="Nhập mật khẩu của bạn"
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
