<script setup lang="ts">
import labelStats from './labelStats.vue'
import deviderFrames from './deviderFrames.vue'
import dataStats from './dataStats.vue'
import chartStats from './chartStats.vue'
</script>
<template>
  <div class="flex-start flex gap-2 self-stretch">
    <div class="flex flex-col items-start pr-0">
      <labelStats :labelName="'HP'"></labelStats>
      <labelStats :labelName="'ATK'"></labelStats>
      <labelStats :labelName="'DEF'"></labelStats>
      <labelStats :labelName="'SATK'"></labelStats>
      <labelStats :labelName="'SDEF'"></labelStats>
      <labelStats :labelName="'SPD'"></labelStats>
    </div>
    <deviderFrames />
    <div class="flex flex-col items-start pl-0">
      <dataStats :data="'999'" />
      <dataStats :data="'999'" />
      <dataStats :data="'999'" />
      <dataStats :data="'999'" />
      <dataStats :data="'999'" />
      <dataStats :data="'999'" />
    </div>
    <div class="chart flex flex-col items start">
     <chartStats/>
     <chartStats/>
     <chartStats/>
     <chartStats/>
     <chartStats/>
     <chartStats/>
    </div>
  </div>
</template>

<style scoped>
.chart{
  flex: 1 0 0;  
}
</style>