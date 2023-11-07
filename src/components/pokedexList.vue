<template>
  <div class="pokedex-list">
    <div class="frame">
      <div class="title">
        <img class="pokeball" src="../assets/pokeball.svg" alt="" />
        <div class="text">pokédex</div>
      </div>
      <div class="filters">
        <div class="searchbar">
          <img class="search" src="../assets/search.svg" alt="" />
          <div class="search-text">search</div>
        </div>
        <div class="sort-button">
          <img class="sort" src="../assets/sort.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="list">
      <div class="row">
        <img class="list-item" src="../assets/image.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokedex-list {
  display: flex;
  width: 360px;
  height: 640px;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  background: var(--identity-primary, #dc0a2d);
}

.frame {
  display: flex;
  padding: 12px 12px 24px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}
.title {
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}
.pokeball {
  width: 24px;
  height: 24px;
}

.text {
  color: var(--grayscale-white, #fff);

  /* Header/Headline */
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
}

.filters {
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}

.searchbar {
  display: flex;
  padding: 8px 16px 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  border-radius: 16px;
  background: var(--grayscale-white, #fff);

  /* Inner Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
}
.search {
  width: 16px;
  height: 16px;
}

.search-text {
  color: var(--grayscale-medium, #666);

  /* Body/Body 3 */
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
}
.sort-button {
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 16px;
  background: var(--grayscale-white, #fff);

  /* Inner Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
}

.sort {
  width: 16px;
  height: 16px;
}

.list {
  display: flex;
  padding: 24px 12px 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 8px;
  background: var(--grayscale-white, #fff);

  /* Inner Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
}

.row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}

.list-item {
  display: flex;
  width: 104px;
  height: 108px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  background: var(--grayscale-white, #fff);

  /* Drop Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
}
</style>
