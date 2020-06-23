<template>
  <section class="section" :style="style">
     <div class="flex-center position-ref" :style="style">
        <div class="content">
          <Logo/>
          <div class="title">
              <span class="micro"><span class="anim-t">m</span><span class="anim-t">i</span><span class="anim-t">c</span><span class="anim-t">r</span><span class="anim-t">o</span></span><span class="anim-t">c</span><span class="anim-t">e</span><span class="anim-t">p</span><span class="anim-t">t</span> <span class="education">Education</span>
          </div>
          <p class="sub anim-sb">Concepts and beyond</p>
          <section>
            <el-row class="anim-buttons">
              <nuxt-link to="/register">
                <el-button type="primary" round size="small">Register Now</el-button>
              </nuxt-link>
              <nuxt-link to="/school">
                <el-button type="success" round size="small">Let's Explore</el-button>
              </nuxt-link>
            </el-row>
          </section>
        </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data(){
    return{
      style:{
        height:null,
      }
    }
  },
  mounted(){
   this.getWindowHeight();
  },
  methods:{
    goToSchool(){
      this.$router.push('/school');
    },
    getWindowHeight(){
      this.style.height=(Number(window.innerHeight)-100)+'px';
    },

  }
}
</script>

<style>
.anim-buttons{
  animation: turnbuttons 0.5s linear forwards 4s;
  transform: rotateX(90deg);
}
@keyframes turnbuttons {
  100% {
    transform: rotateX(360deg);

  }
}
.anim-sb{
  animation: turnsub 1s linear forwards 3s;
  transform: rotateX(90deg);
}
@keyframes turnsub {
  100% {
    transform: rotateX(0deg);

  }
}

.anim-t{
  font-size:5px;
  display: inline-block;
  animation: turnt 2s linear forwards 1s;
  transform: rotateX(90deg);
}
@keyframes turnt {
  100% {
    transform: rotateX(0deg);
    margin-left:0px;
    font-size:48px;
  }
}

.justify-content-center{
  justify-content:center;
}
.micro{
  color:#F05340;
}
.sub{
  font-weight: 500;
  font-size: 14px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-top:-8px;
}
  section{
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      font-weight: 200;
      margin: 0;
  }



  .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
  }

  .position-ref {
      position: relative;
  }

  .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
  }

  .content {
      text-align: center;
  }

  .title {
      font-size: 48px;
      color:#3b8070;

  }

  .links > a {
      color: #636b6f;
      padding: 0 5px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;

  }
  .education{
    font-size: 14px;
    font-weight: 600;
    color: #35495e;
  }

</style>
