<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--one" />
    <div class="Triangle Triangle--two" />
    <div class="Triangle Triangle--five" />
    <div class="Triangle Triangle--six" />
    <div class="Triangle Triangle--three" />
    <div class="Triangle Triangle--four" />
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  top: 60px;
  left: 35px;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #F05340;
}
/*t1 #F05340
t2 #41B883*/
.Triangle--two {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 1.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #41B883;
}
.Triangle--five {
  top: 80px;
  left: 35px;
  animation: goright 0.5s linear forwards 1.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #34495E;
}
.Triangle--six {
  top: 100px;
  left: 35px;
  animation: goright 0.5s linear forwards 1.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #409EFF;
}
.Triangle--three {
  top: 120px;
  left: 45px;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid white;
}

.Triangle--four {
  top: 120px;
  left: 45px;
  animation: gorightf 0.5s linear forwards 1.5s;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid white;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
@keyframes gorightf {
  100% {
    left: 80px;
  }
}
</style>
