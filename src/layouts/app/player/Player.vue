<template>
  <frosted-glass
    overlay-color="#ffffff52"
    blur-amount="1.6rem"
    class="player"
  >
    <div class="row">
      <div class="col-12 elapsed-time">
        <input
          class="slider"
          type="range"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 song-info">
        <img
          class="album-cover"
          src="@/assets/images/notfound.png"
        />
      </div>
      <div class="col-4 player-buttons">Player Buttons</div>
      <div class="col-4 controller-buttons">Other Controllers</div>
    </div>
  </frosted-glass>
</template>

<style lang="scss" scoped>
.player {
  width: 100%;
  backdrop-filter: blur(5px);

  & * {
    margin: 0;
    padding: 0;
  }
}

.elapsed-time {
  position: relative;
  height: 0.5vh;
}

input[type="range"] {
  appearance: none;
  top: 0;
  position: absolute;
  overflow: hidden;
  height: 0.5vh;
  width: 100%;
  cursor: pointer;
}

::-webkit-slider-runnable-track {
  background: #ddd;
}

::-webkit-slider-thumb {
  appearance: none;
  width: 0; /* 1 */
  height: 0.5vh;
  background: #fff;
  box-shadow: -100vw 0 0 100vw $color1;
}

.album-cover {
  height: 9.5vh;
  width: 9.5vh;
}
</style>
