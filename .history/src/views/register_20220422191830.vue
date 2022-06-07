<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Họ và Tên</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border outline-none"
              type="text"
              placeholder="Nhập họ tên của bạn"
              v-model="fullName"
            />
          </label>
        </div>
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
            Đăng ký
          </button>

          <!-- loading -->
          <button
            v-else
            type="button"
            class="w-full py-3 text-center bg-primary-second text-white font-bold rounded-lg tracking-wide cursor-not-allowed"
            disabled
          >
            Đang đăng ký...
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
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

export default {
  setup() {
    const { error, isPending, signup } = useSignUp();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
    }
    return { fullName, email, password, error, isPending, onSubmit };
  },
};
</script>
