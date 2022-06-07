<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Địa chỉ email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border outline-none"
              type="email"
              placeholder="Nhập email của bạn"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Mật khẩu</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border outline-none"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <!-- end: form -->

      <!-- start: direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn đã có tài khoản?</span>
        <span class="ml-1 font-bold text-primary">
          <router-link :to="{ name: 'Login', params: {} }"
            >Đăng nhập</router-link
          >
        </span>
      </div>
      <!-- end: direction -->
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
