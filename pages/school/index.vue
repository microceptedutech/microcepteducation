<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <nuxt-link to="/">
        <li class="navbar-brand logo-image">
            <img src="~/assets/images/microcept_edu.png" alt="alternative">
        </li>
        </nuxt-link>
        <i class="fas fa-bars toggle-bars" @click="toggleTopMenu"></i>
        <div class="collapse navbar-collapse" :class="{'show':showMenu}" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item" @click="toggleTopMenu">
                    <span class="nav-link page-scroll">
                        <nuxt-link to="/school"><span style="color:#191970;">
                    Home</span></nuxt-link>
                    </span>

                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#services"><span style="color:#191970;">Courses</span></a>
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#materials"><span style="color:#191970;">Materials</span></a>
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#contact"><span style="color:#191970;">Contact</span></a>
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <span class="nav-link page-scroll">
                        <nuxt-link to="/register"><span style="color:#191970;">Register Now</span></nuxt-link>
                    </span>
                </li>
            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a target="_blank" href="https://www.facebook.com/Microcept-Education-105035154597805">
                        <i class="fas fa-circle fa-stack-2x facebook"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav>
    <div class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="image-container" style="margin-top:50px;">
                        <img  src="~/assets/images/school.png" alt="alternative" width="100%">
                         <el-row class="">
                          <nuxt-link to="/register">
                            <el-button type="primary" round size="small">Register Now</el-button>
                          </nuxt-link>
                        </el-row>
                        <div class="offer-text-box mt-4">
                        গতানুগতিক শিক্ষা পদ্ধতিৰ পৰিৱৰ্তে নতুন দৃষ্টিভংগীৰে সুপৰিকল্পিত শিক্ষাৰ এক নিৰ্ভৰযোগ্য প্ৰতিষ্ঠান ।
                        </div>
                        <div class="offer-text-box">
                        প্ৰত্যেক গোটত নিৰ্বাচিত দুজনকৈ ছাত্ৰ-ছাত্ৰীৰ বাবে বিনামূলীয়া শিক্ষাৰ ব্যৱস্থা ।
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="text-container">
                        <h4><span style="color:#F05340;">Micro</span><span style="color:#3b8070;">cept</span> Education</h4>
                        <img src="~/assets/images/radhakrishna.jpg" width="100%" style="margin-top:16px;">
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <h5 class="text-center">আমাৰ নিৰ্দেশক</h5>
                      </div>
                    </div>
                    <div class="row p-4">
                      <div class="col-md-4 p-2">
                        <div class="card service-card">
                            <img src="~/assets/images/udipta1.jpg" width="100%">
                            <div class="card-body p-1 pt-2 text-center">
                                <h6 class="card-title" style="font-size:12px;">Udipta Gogoi <br> (উদীপ্ত গগৈ) <br> <span style="font-size:10px;">B.E (ETC)</span></h6>
                                <h6 style="font-size:10px;"></h6>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-4 p-2">
                        <div class="card service-card">
                            <img src="~/assets/images/puspa.jpg" width="100%">
                            <div class="card-body p-1 pt-2 text-center">
                                <h6 style="font-size:12px;">Puspa Plawan Gogoi <br> (পুস্প প্লাৱন গগৈ) <br> <span style="font-size:10px;">Pursuing M.Sc in Physics</span></h6>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-4 p-2">
                        <div class="card service-card">
                            <img src="~/assets/images/trajit.jpg" width="100%">
                            <div class="card-body p-1 pt-2 text-center">
                                <h6 class="card-title" style="font-size:12px;">Trajit Sonowal <br>(ত্ৰজিৎ সোনোৱাল) <br> <span style="font-size:10px;">M.Sc in Physics</span></h6>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div id="materials" class="cards-1" >
        <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h5 class="text-center">মাইক্ৰচেপ্ত শিক্ষণ সহায়ক সামগ্ৰী</h5>
                <div class="card p-2" style="width:100%;">
                  <div class="card-body">
                    <ul class="list-style-none float-left">
                      <li v-for="(material,index) in materials" :key="index">
                        <a target="_blank" class="link" :href="base_url+material.file"><span style="font-size:12px"> {{index+1}}. {{material.name}}</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h5 class="text-center">জাননী</h5>
                <div class="card p-2" style="width:100%;">
                  <div class="card-body">
                    <p class="float-left notice" v-for="(notice,index) in notices" :key="index">
                      <span class="text-info float-left"><span class="badge badge-pill badge-success" v-if="notice.is_new">New</span> {{notice.notice}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div id="services" class="cards-1" >
        <div class="container">
            <div class="row mb-4">
              <div class="col-md-12">
                <h5 class="text-center">বৰ্তমান আগবঢ়াই থকা পাঠ্যক্ৰম সমূহ  </h5>
              </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="card service-card">
                        <img class="card-image" src="~/assets/images/class_provide.png" alt="alternative">
                        <div class="card-body">
                            <h5 class="card-title">অষ্টম শ্ৰেণী</h5>
                            <h6>(সাধাৰণ গণিত, সাধাৰণ বিজ্ঞান)</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card service-card">
                        <img class="card-image" src="~/assets/images/class_provide.png" alt="alternative">
                        <div class="card-body">
                            <h5 class="card-title">নৱম শ্ৰেণী</h5>
                            <h6>(সাধাৰণ গণিত, সাধাৰণ বিজ্ঞান)</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card service-card">
                        <img class="card-image" src="~/assets/images/class_provide.png" alt="alternative">
                        <div class="card-body">
                            <h5 class="card-title">দশম শ্ৰেণী</h5>
                            <h6>(সাধাৰণ গণিত, সাধাৰণ বিজ্ঞান)</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card service-card">
                        <img class="card-image" src="~/assets/images/class_provide.png" alt="alternative">
                        <div class="card-body">
                            <h5 class="card-title">একাদশ শ্ৰেণী</h5>
                            <h6>(গণিত, পদাৰ্থ বিজ্ঞান)</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card service-card">
                        <img class="card-image" src="~/assets/images/class_provide.png" alt="alternative">
                        <div class="card-body">
                            <h5 class="card-title">দ্বাদশ শ্ৰেণী</h5>
                            <h6>(গণিত, পদাৰ্থ বিজ্ঞান)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="register" class="form-1">
        <div class="container">
            <div class="row mb-4">
            <h5 class="mx-auto" style="margin-bottom:14px;"><span style="color:#F05340;">Micro</span><span style="color:#3b8070;">cept</span> Education কিয় ?</h5>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="">
                        <div class="offer-text-box">
                          অৰ্হতাসম্পন্ন শিক্ষকৰ দ্বাৰা শিক্ষাদান ।
                        </div>
                        <div class="offer-text-box">
                          সম্পূৰ্ণ ডিজিটেল ক্লাছ ৰোমৰ ব্যৱস্থা ।
                        </div>
                        <div class="offer-text-box">
                          অনলাইন আৰু অফলাইন দুয়ো মাধ্যমৰ দ্বাৰা শিক্ষাদান ।
                        </div>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">
                  <div>
                    <div class="offer-text-box">
                          পৰীক্ষাৰ বাবে বিশেষভাৱে প্ৰস্তুত কৰা Mock Test .
                    </div>
                    <div class="offer-text-box">
                      পাঠ্যক্ৰমৰ লগতে কেৰিয়াৰ গাইড ।
                    </div>
                  </div>
                </div>
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div>
    <div id="contact" class="form-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>যোগাযোগৰ ঠিকনা</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li><i class="fas fa-map-marker-alt"></i>লেঙেৰী বেটনী গাওঁ , পিন - ৭৮৬৬১৬ ,ডাক - লেঙেৰী বজাৰ</li>
                        <li style="font-weight:600;"><i class="fas fa-phone"></i><a class="turquoise" href="tel:9101177123">9101177123, 7002156143</a></li>
                        <li style="font-weight:600;"><i class="fas fa-envelope"></i><a class="turquoise" href="mailto:educationmicrocept@gmail.com">educationmicrocept@gmail.com</a></li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">
                    <div >
                        <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=lengeri%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">
                      Designed and Developed by <a href="https://microcept.in/"> <span style="color:#F05340;">Micro</span><span style="color:#3b8070;">cept</span> Technologies </a><br>
                      Copyright © 2020 <span style="color:#F05340;">Micro</span><span style="color:#3b8070;">cept</span> Education . All Rights Reserved .
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
        showMenu:false,
        name:'',
        email:'',
        phone:'',
        message:'Write your message',
        error:'',
        success:'',
        users:[],
        materials:[],
        notices:[],
        base_url:'',
    }
   },
   mounted(){
     this.loadMaterials();
     this.loadNotices();
   },
   methods:{
     loadNotices(){
       this.$axios.get("https://azworker.com/public/api/microcept_education/notices")
      .then(response => {
        this.notices  = response.data.notices;
      })
     },
     loadMaterials(){
      this.$axios.get("https://azworker.com/public/api/microcept_education/materials")
      .then(response => {
        this.base_url = response.data.base_url;
        this.materials  = response.data.materials;
      })
     },
    toggleTopMenu(){
        this.showMenu = !this.showMenu;
    },

   }
}
</script>

<style scoped>
@media only screen and (min-width: 990px) {
    .toggle-bars{display:none; }
}

.tag-div{
    background-color:black;
    color:#00FF00;
    font-weight:700!important;
    padding:0px 8px 0px 8px;
    margin-top:16px;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

h1 {
  font-family: Roboto, sans-serif;
}
.justify-content-center{
  justify-content:center!important;
  }
.simple{
    color:#409EFF;
}
.amazing{
    color:#67C23A;
}
.service-card{
    min-width:100%;
    min-height: 220px;
}
  .offer-text-box{
    background-color:#409EFF;
    color:white;
    font-weight:600;
    padding:12px 12px 12px 12px;
    text-align:center;
    margin-bottom:30px;
  }
.language-card{
  width:80px;
  margin-bottom:14px;
  margin-left:14px!important;
  height:80px;
  float:left;
}
.list-style-none{
  list-style-type: none;
}
.link{
   text-decoration: underline;
}
.notice{
  text-align: left;
}
</style>
