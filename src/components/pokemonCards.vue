<script setup lang="ts">
 defineProps<{
  sprite : string,
  name : string
  id : number
}>()


</script>

<template>
  <div class="row flex items-start gap-2 self-stretch">
    <div
      class="item-list flex h-[108px] w-[104px] cursor-pointer flex-col items-center justify-between rounded-lg  bg-white drop-shadow"
    >
      <div
        class="number flex items-start justify-end gap-2 self-stretch px-2 pb-0 pt-1 text-right font-poppins text-[8px]/3 font-normal text-medium"
      >
        {{ id }}
      </div>
      <div
        class="pokemon-name flex items-start justify-center self-stretch rounded-[7px] bg-background px-2 pb-1 pt-6 font-poppins text-[10px]/4 font-normal text-dark"
      >
       {{ name}}
      </div>
      <img class="silhoutte absolute" :src="sprite" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
