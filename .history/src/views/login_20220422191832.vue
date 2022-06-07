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
              v-model="email"
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
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg tracking-wide"
          >
            Đăng nhập
          </button>

          <!-- loading -->
          <button
            v-else
            type="button"
            class="w-full py-3 text-center bg-primary-second text-white font-bold rounded-lg tracking-wide cursor-not-allowed"
            disabled
          >
            Đang đăng nhập...
          </button>
        </div>
      </form>
      <!-- end: form -->

      <!-- start: error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- end: error -->

      <!-- start: direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn chưa có tài khoản?</span>
        <span class="ml-1 font-bold text-primary">
          <router-link :to="{ name: 'Register', params: {} }"
            >Đăng ký</router-link
          >
        </span>
      </div>
      <!-- end: direction -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
export default {
  setup() {
    const { error, isPending, signin } = useSignIn();

    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signin(email.value, password.value);
    }
    return { email, password, error, isPending, onSubmit };
  },
};
</script>
