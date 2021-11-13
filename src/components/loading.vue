<template>
  <div id="loader-wrapper">
    <div id="loader">
      <div class="logo">
        <img id="logo" src="../assets/images/logo.png" alt="الکا" />
        <h1>شرکت فنی و مهندسی <span class="highlight">الکا</span></h1>
        <span style="color:#aaa">درحال بارگذاری</span>

      </div>
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use 'sass:math';

.sk-folding-cube {
  $cubeCount: 4;
  $animationDuration: 2.4s;
  $delayRange: math.div($animationDuration,2);
  $spinkit-spinner-margin: 10;
  $spinkit-size: 70;

  margin: $spinkit-spinner-margin;
  width: $spinkit-size;
  height: $spinkit-size;
  position: relative;
  transform: rotateZ(45deg);

  .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
  }

  .sk-cube:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    animation: sk-foldCubeAngle $animationDuration infinite linear both;
    transform-origin: 100% 100%;
  }

  // Rotation / angle
  @for $i from 2 through $cubeCount {
    .sk-cube#{$i} {
      transform: scale(1.1) rotateZ(90deg * ($i - 1));
    }
  }

  @for $i from 2 through $cubeCount {
    .sk-cube#{$i}:before {
      animation-delay: math.div($delayRange , $cubeCount * ($i - 1));
    }
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

#loader-wrapper #loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
  z-index: 1001;

  
  .sk-folding-cube {
    position: relative;
    top: 50%;
  }
}

.loaded #loader {
  display: none;
}
</style>