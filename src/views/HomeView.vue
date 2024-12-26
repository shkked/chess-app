<template>
  <main>
    <h1 class="text-3xl font-bold text-center text-white mt-10">
      Chess App
    </h1>
    <div class="grid grid-cols-8 mt-10 game-field border-2 border-gray-800">
      <div
          v-for="(row, rowIndex) in 8"
          :key="rowIndex"
          class="w-full h-full flex"
      >
        <div
            v-for="(col, colIndex) in 8"
            :key="colIndex"
            :class="[
          'w-full h-full',
          (rowIndex + colIndex) % 2 === 0 ? 'bg-black' : 'bg-white'
        ]"
        ></div>
      </div>
    </div>
  </main>
</template>

<script setup>

</script>

<style>
.game-field{
  width: 600px;
  height: 600px;

}
</style>
