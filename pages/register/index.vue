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
                    <a class="nav-link page-scroll" href="#contact"><span style="color:#191970;">Contact</span></a>
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
    <div id="register" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="">

                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-12">
                        <h5 class="ml-4">ৰেজিষ্টাৰ কৰিবৰ বাবে তলৰ ফৰ্ম খন ভৰ্তি কৰক </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-container">
                            <form id="requestForm"  data-focus="false">
                                <input type="hidden" name="form-name" value="school" />
                                <div class="form-group">
                                    <input type="text" class="form-control-input form-control-sm"  v-model="name" placeholder="নাম" required>
                                    <small class="text-danger" v-if="errors.name">{{errors.name}}</small>
                                </div>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">শ্ৰেণী</label>
                                  <select v-model="academic_class" class="form-control form-control-sm" id="exampleFormControlSelect1">
                                    <option>VIII</option>
                                    <option>IX</option>
                                    <option>X</option>
                                    <option value="XI">XI(Science)</option>
                                    <option value="XII">XII(Science)</option>
                                  </select>
                                  <small class="text-danger" v-if="errors.class">{{errors.class}}</small>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control-input form-control-sm" id="rphone" placeholder="ফোন নং" v-model="mobile" required>
                                    <small class="text-danger" v-if="errors.mobile">{{errors.mobile}}</small>
                                </div>
                                <div class="form-group">
                                    <label for="subject">বিষয়</label>
                                    <textarea class="form-control-input" v-model="subject" rows="5" cols="50">

                                    </textarea>
                                    <small class="text-danger" v-if="errors.subject">{{errors.subject}}</small>
                                </div>
                                <div class="form-group">
                                    <button type="button" @click="submitForm" class="form-control-submit-button" >ৰেজিষ্টাৰ</button>
                                </div>
                                <div class="form-message">
                                    <div class="alert alert-success" role="alert" v-if="success">

                                    </div>
                                    <div class="alert alert-danger" role="alert" v-if="error">

                                    </div>
                                </div>
                            </form>
                        </div>
                      </div>
                    </div>
                    <div class="row" v-if="is_submitted">
                      <div class="col-md-9">
                        <div class="alert alert-success ml-4" role="alert">
                          Registered successfully . <br>
                          অভিনন্দন । অপোনাৰ ৰেজিষ্ট্ৰেচন সম্পুৰ্ণ হৈছে ।
                        </div>
                      </div>
                    </div>
                </div> <!-- end of col -->
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
                        <li style="font-weight:600;"><i class="fas fa-phone"></i><a class="turquoise" href="tel:9101177123">+91 9101177123</a></li>
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
        mobile:'',
        academic_class:'',
        subject:'',
        errors:'',
        success:'',
        users:[],
        is_submitting:false,
        is_submitted:false,
    }
   },
   mounted(){

   },
   methods:{
    toggleTopMenu(){
        this.showMenu = !this.showMenu;
    },
    submitForm(){
      this.is_submitting = true;
      var formdata = new FormData();
      formdata.append('name', this.name);
      formdata.append('class', this.academic_class);
      formdata.append('mobile', this.mobile);
      formdata.append('subject', this.subject);
      this.$axios.post("https://azworker.com/public/api/microcept_education/register",formdata)
      .then(response => {
          this.is_submitting = false;
          this.is_submitted = true;
      })
      .catch(error => {
        if(error.response.data){
          this.errors = error.response.data.errors;
        }
        this.is_submitting = false;
      });
    }
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
</style>
