<template>
  <form @submit.prevent="onSubmit">
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
            </label>
            <div class="flex flex-col border-b border-gray-100 pb-1">
              <span>Tổng</span>
              <input type="text" placeholder="0" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}

    return {
      onSubmit,
    };
  },
};
</script>
