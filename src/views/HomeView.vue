<template>
  <main>
    <h1 class="text-3xl font-bold text-center text-white mt-10">
      Chess App
    </h1>
    <div class="grid mt-10 grid-cols-8 w-100 h-100 border-4 border-gray-700">
      <div
          v-for="row in rows"
          :key="row"
        >
          <div
            v-for="col in cols"
            :key="col + '-' + row"
            class="w-10 h-10 flex items-center justify-center text-lg font-bold"
            :class="(row + col) % 2 === 0 ? 'bg-gray-100' : 'bg-gray-700 text-white'"
          >
            <ChessPiece>
              <SvgIcon name="black-knight" width="40" height="40" />
              <SvgIcon name="white-rook" />
            </ChessPiece>
            <!-- {{ String.fromCharCode(97 + col) + (8 - row) }} -->
          </div>
    </div>
  </div>
  </main>
</template>

<script setup>
import ChessPiece from '../components/ChessPiece.vue';
import SvgIcon from '@/components/SvgIcon.vue';
const rows = Array.from({ length: 8 }, (_, i) => i);
const cols = Array.from({ length: 8 }, (_, i) => i);
</script>

<style>
.game-field{
  width: 600px;
  height: 600px;

}
</style>
