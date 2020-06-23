
<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <nuxt-link to="/">
          <li class="navbar-brand logo-image" ><img src="~/assets/images/microcept_logo.png" alt="alternative"></li>
        </nuxt-link>
        <!-- Mobile Menu Toggle Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            
        </button>
        <i class="fas fa-bars toggle-bars" @click="toggleTopMenu"></i>
       
        <!-- end of mobile menu toggle button -->

        <div class="collapse navbar-collapse" id="navbarsExampleDefault" :class="{'show':showMenu}">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" @click="toggleTopMenu">
                    <span class="nav-link page-scroll">
                      <nuxt-link to="/">
                       <span style="color:#191970;">Home</span> <span class="sr-only">(current)</span>
                      </nuxt-link>
                    </span>  
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <span class="nav-link page-scroll">
                        <nuxt-link to="/school"><span style="color:#191970;">
                    Microcept School</span></nuxt-link>
                    </span>
                  
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#services"><span style="color:#191970;">Services</span></a>
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#register"><span style="color:#191970;">Book Now</span></a>
                </li>
                <li class="nav-item" @click="toggleTopMenu">
                    <a class="nav-link page-scroll" href="#contact"><span style="color:#191970;">Contact</span></a>
                </li>
            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a href="https://www.facebook.com/Microcept-Technologies-and-Education-114942293281555/?view_public_for=114942293281555">
                        <i class="fas fa-circle fa-stack-2x facebook"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x twitter"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav> <!-- end of navbar -->
    <!-- end of navigation -->


    <!-- Header -->
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h4>We build <span class="turquoise">Amazing</span> Websites</h4>
                            <p  class="text-box">We build Powerfull and Interactive web applications using cutting edge technologies . If you have an existing business , let us help you take it online .With our services and facilities , you can have your own one of a kind website .</p>
                            <a class="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                    <div class="col-lg-6">
                        <div class="image-container">
                            <img class="img-fluid" src="~/assets/images/header-teamwork.svg" alt="alternative">
                        </div> <!-- end of image-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of header-content -->
    </header> <!-- end of header -->
    <!-- end of header -->


    <div class="slider-1">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5>What We Provide</h5> 
                    <p class="text-box">Our websites are equipped with the latest of technologies giving you a responsive , feature rich and powerful website . Our team utilizes the latest cutting edge technologies in web development , thus ensuring that your website will have no issue with speed or compatibility on any device your consumer is using . With our technology and resource , we also keep in mind the creative aspect of web designing thus providing you with a unique website for your purpose which can attract more consumers</p>
                </div>
                <div class="col-lg-6">
                    <el-carousel indicator-position="outside">
                      <el-carousel-item >
                        <img src="~/assets/images/offer1.png" width="100%">
                      </el-carousel-item>
                      <el-carousel-item >
                        <img src="~/assets/images/foodshop.png" width="100%">
                      </el-carousel-item>
                      <el-carousel-item >
                        <img src="~/assets/images/dashboard.png" width="100%">
                      </el-carousel-item>
                      <!-- <el-carousel-item >
                        <img src="~/assets/images/shop.png" width="100%">
                      </el-carousel-item> -->
                      <el-carousel-item >
                        <img src="~/assets/images/resturant.png" width="100%">
                      </el-carousel-item>
                    </el-carousel>
                </div>
            </div> 
        </div> 
    </div> 
 


    <!-- Services -->
    <div id="services" class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3>Our Services </h3>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
              <div class="col-md-4">
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/webdesign.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title">Web Design and Development</h5>
                        <section class="text-box">
                            <li style="font-weight:600;">Ecommerce</li>
                            <li style="font-weight:600;">Static Website</li>
                            <li style="font-weight:600;">Single Page Application</li>
                        </section>
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/hosting.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title">Hosting and Domain Registration</h5>
                        <section class="text-box">
                            <li style="font-weight:600;">Shared Hosting </li>
                            <li style="font-weight:600;">Cloud Hosting</li>
                            <li style="font-weight:600;">Domain Name Registration</li>
                        </section>
                    </div>
                </div>
              </div>
              <div class="col-md-4"> 
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/socialmedia.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title">Social Media Marketing and Publicity</h5>
                        <section class="text-box">
                            <li style="font-weight:600;">Instagram</li>
                            <li style="font-weight:600;">Facebook</li>
                            <li style="font-weight:600;">Others</li>
                        </section>
                    </div>
                </div>
              </div> <!-- end of col -->
              
            </div> <!-- end of row -->
            <div class="row">
              <div class="col-md-4 ">
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/graphics.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title">Graphics Design</h5>
                        <section class="text-box">
                            <li style="font-weight:600;">Logo Design</li>
                            <li style="font-weight:600;">Tagline</li>
                        </section>
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/business.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title">Business Growth Plan</h5>
                        <section class="text-box">
                            <li style="font-weight:600;">Consultancy</li>
                            <li style="font-weight:600;">Planning and Strategy</li>
                        </section>
                    </div>
                </div>
              </div>
              <div class="col-md-4"> 
                <div class="card service-card">
                    <img class="card-image" src="~/assets/images/mobile.svg" alt="alternative">
                    <div class="card-body">
                        <h5 class="card-title"><span style="color:grey;">Mobile Apps (Coming Soon)</span> </h5>
                        
                        <p>We are working for best to come out</p>
                    </div>
                </div>
              </div>
            </div> 
        </div> <!-- end of container -->
    </div> <!-- end of cards-1 -->
    <!-- end of services -->
    <!-- Details 1 -->
    <div class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h4>Design And Plan Your Business Growth With Us</h4>
                        <p style="font-weight:500;" class="text-box">Use our staff and our expertise to design and plan your business growth strategy. <span style="color:#F05340;">micro</span><span style="color:#3b8070;">cept</span> business team is eager to advise you on the best opportunities that you should look into</p>
                        
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">
                    <div class="image-container">
                        <img class="img-fluid" src="~/assets/images/details-1-office-worker.svg" alt="alternative">
                    </div> <!-- end of image-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-1 -->
    <!-- end of details 1 -->
    <div id="register" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="">
                        <h4>Fill The Following Form To Request A Service</h4>
                        <p><span style="color:#F05340;">micro</span><span style="color:#3b8070;">cept</span> is using the latest and most advanced Technologies to create Feature rich , Powerfull and Interactive Web apps . Submit the form and our Team will contact you as soon as possible .</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-check"></i>
                                <div class="media-body"><strong class="blue">Get a Nice Website</strong> and increase your online presence</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-check"></i>
                                <div class="media-body"><strong class="blue">Automate your marketing</strong> activities and get results today</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-check"></i>
                                <div class="media-body"><strong class="blue">Interact with all your</strong> targeted customers at a personal level</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-check"></i>
                                <div class="media-body"><strong class="blue">Convince them to buy</strong> your company's awesome products</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-check"></i>
                                <div class="media-body"><strong class="blue">Save precious time</strong> and invest it where you need it the most</div>
                            </li>
                        </ul>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">

                    <!-- Request Form -->
                    <div class="form-container">
                        <form id="requestForm"  data-focus="false" name="Technology" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success">
                            <input type="hidden" name="form-name" value="Technology" />
                            <div class="form-group">
                                <input type="text" class="form-control-input form-control-sm" name="name" placeholder="Name" required>
                               <!--  <label class="label-control" for="rname">Full name</label> -->
                               <!--  <div class="help-block with-errors"></div> -->
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input form-control-sm" id="remail" placeholder="Email" name="email" required>
                                
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input form-control-sm" id="rphone" placeholder="Phone" name="phone" required>
                                
                            </div>
                            <div class="form-group">
                                <textarea class="form-control-input" name="message" rows="5" cols="50">
                                    
                                </textarea>
                            </div>
                           <!--  <div class="form-group checkbox">
                                <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required>I agree with Evolo's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                <div class="help-block with-errors"></div>
                            </div> -->
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button" >REQUEST</button>
                            </div>
                            <div class="form-message">
                                <div class="alert alert-success" role="alert" v-if="success">
                                  
                                </div>
                                <div class="alert alert-danger" role="alert" v-if="error">
                                   
                                </div>
                            </div>
                        </form>
                    </div> <!-- end of form-container -->
                    <!-- end of request form -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div>
    <!-- Contact -->
    <div id="contact" class="form-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Contact Information</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li class="address">Don't hesitate to give us a call</li>
                        <li><i class="fas fa-map-marker-alt"></i>Hatigaon , Guwahati , Assam , India</li>
                        <li style="font-weight:600;"><i class="fas fa-phone"></i><a class="turquoise" href="tel:9101177123">+91 9101177123</a></li>
                        <li style="font-weight:600;"><i class="fas fa-envelope"></i><a class="turquoise" href="mailto:microcepttechnologies@gmail.com">microcepttechnologies@gmail.com</a></li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">
                    <div >
                        <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=meghmallar%20housing%20complex&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form-2 -->
    
    <!-- end of contact -->
    <!-- Copyright -->
    <div class="copyright">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <h6> Some of the Technologies we are using </h6>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-2">
                  <img src="~/assets/images/vuejslogo.png" height="50px;">
                </div> 
                <div class="col-md-2">
                  <img src="~/assets/images/laravellogo2.png" height="50px;">
                </div>
                <div class="col-md-2">
                  <img src="~/assets/images/bootstraplogo.png" height="50px;">
                </div>
                <div class="col-md-2">
                  <img src="~/assets/images/nslogo.png" height="50px;">
                </div>
                <div class="col-md-2">
                  <img src="~/assets/images/nuxtjslogo.svg" height="50px;">
                </div>
                <div class="col-md-2">
                  <img src="~/assets/images/axioslogo.png" height="50px;">
                </div>
            </div> <!-- enf of row -->
        </div> <!-- end of container -->
    </div> <!-- end of copyright --> 
   
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © <span style="color:#F05340;">micro</span><span style="color:#3b8070;">cept</span> 2019 . All Rights Reserved . Contact : <i class="fas fa-phone"></i> <a class="turquoise" href="tel:9101177123">+91 9101177123</a> <i class="fas fa-envelope"></i> <a class="turquoise" href="mailto:microcepttechnologies@gmail.com"> microcepttechnologies@gmail.com</a></p>
                </div> <!-- end of col -->
            </div> <!-- enf of row -->
        </div> <!-- end of container -->
    </div> <!-- end of copyright --> 
    <!-- end of copyright -->
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
    }
   },
   methods:{
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
.text-box{
font-weight:500; text-align: justify;
-moz-text-align-last: left; 
text-align-last: left;
}

h1 {
  font-family: 'Nunito', sans-serif;
}
.justify-content-center{
  justify-content:center!important;
  }
  .service-card{
    min-width:100%;
  }
  .text-container{
    font-family: 'Nunito', sans-serif;
    font-weight:600!important;
  }
</style>
