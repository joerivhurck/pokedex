<template>
  <div class="charts flex h-4 flex-col items-start justify-center self-stretch">
    <div class="value flex items-start self-stretch rounded pr-0">
      <div class="rectangle h-1 self-stretch bg-wire"></div>
    </div>
    <div class="background  flex-shrink-0 self-stretch rounded bg-wire opacity-[0.2]"></div>
  </div>
</template>

<style scoped>
.charts {
  gap: -4px;
}

.rectangle {
  flex: 1 0 0;
}
</style>
