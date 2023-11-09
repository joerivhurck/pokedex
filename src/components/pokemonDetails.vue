<script setup lang="ts">

</script>
<template>
  <div class="Pokemon-details">
    <div class="title">
      <img class="arrow-back" src="../assets/Vector.svg" alt="" />
      <div class="pokemon-name">Pokémon Name</div>
      <div class="pokemon-id">#999</div>
    </div>
  </div>
</template>

<style scoped>
.Pokemon-details {
  display: flex;
  width: 360px;
  height: 640px;
  padding: 4px;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 0;
  background: var(--grayscale-wireframe, #b8b8b8);
}

.title {
  display: flex;
  padding: 20px 20px 24px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.arrow-back {
  width: 32px;
  height: 32px;
}

.pokemon-name {
  flex: 1 0 0;

  color: var(--grayscale-white, #fff);

  /* Header/Headline */
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
}

.Pokemon-id {
  color: var(--grayscale-white, #fff);

  /* Header/Subtitle 2 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
}
</style>
