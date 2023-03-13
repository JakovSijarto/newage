<template>
    <div class="min-h-[100vh] bg-[#0c0f16] overflow-y-hidden ">
        <nav class="w-full">
            <navbar/>
            <img src="../../assets/aboutus_hero.svg" alt="" class="h-[80vh] w-full object-cover opacity-20">
            <div class="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[white]">
                <h1 v-motion-pop :delay="300" class="text-[75px] max-[680px]:text-center max-[680px]:leading-[5rem]">About Us</h1>
                <div v-motion-pop :delay="600" class="flex justify-center items-center pt-16">
                    <p class="text-[17px] pr-8 transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/" tag="button">Home</router-link></p> 
                    /
                    <p class="text-[17px] text-[#75dab4] pl-8 transform hover:translate-y-1 transition duration-500 ease-in-out cursor-pointer">About Us</p>
                </div>
            </div>
        </nav>
        <section class="w-full flex justify-center items-center flex-col overflow-x-hidden">
            <div class="flex items-center w-[1200px] justify-between flex-col py-[120px] max-[950px]:pb-[0] max-[330px]:w-auto">
                <div class="flex justify-between w-[1200px] max-[1250px]:w-auto max-[600px]:flex-col max-[330px]:w-auto max-[330px]:px-[5px] max-[330px]:text-center"> 
                    <p v-motion-slide-left class="text-[30px] font-bold text-[white] max-[1250px]:pr-8 max-[950px]:pr-0">Who We Are?</p>
                    <p v-motion-slide-right class="text-[#C8C8C8] text-[15px] font-light flex max-w-[700px] max-[1250px]:pl-8 max-[950px]:max-w-[500px] max-[730px]:max-w-[300px] max-[600px]:pl-0 max-[600px]:pt-8 max-[330px]:w-auto max-[330px]:text-center">Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla consequatur nobis nemo doloremque tempore velit laboriosam veritatis sed nisi! dolor sit amet consectetur adipisicing e. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit id minus sed perspiciatis nihil harum nisi, non consectetur commodi iusto nesciunt quam vitae? Tempora.</p>
                </div>
            </div>
            <div class="flex flex-row w-[1200px] justify-between mt-[4em] mx-16 max-[1250px]:w-[900px] max-[915px]:w-[800px] max-[810px]:flex-col max-[810px]:items-center pb-[120px]">
        <div  v-motion-slide-visible-left class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30 cursor-pointer">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/web_development_icon.svg" alt="" class="w-[51px] h-[50px] mb-[35px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Web Development</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</p>
          </div>
        </div>
        <div v-motion-pop-visible class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30 cursor-pointer">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/digital_marketing_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Digital Marketing</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</p>
          </div>
        </div>
        <div v-motion-slide-visible-right class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30 cursor-pointer" >
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/graphic_design_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px]">
            <p class="bold_text text-white tracking-[0.1rem] mb-[20px] text-[24px] font-bold text-center">Graphic Design</p>
            <span class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</span>
          </div>
          
        </div>
      </div>
        </section>
        <section class="w-full flex justify-center flex-col items-center overflow-x-hidden">
            <div  class="absolute z-20 flex justify-between items-center w-[1200px] max-[1230px]:w-[1000px] max-[1030px]:flex-col max-[1030px]:w-full">
                <p v-motion-slide-visible-top :delay="600" class="text-[45px] font-bold w-[600px] text-white leading-[4rem]  mt-[-6em] max-[1030px]:mt-[-7em] max-[1030px]:mb-[2em]  max-[1030px]:ml-[-2em] max-[720px]:ml-0  max-[720px]:text-[30px]  max-[720px]:w-[500px] max-[610px]:mt-[-14em] max-[530px]:w-auto max-[530px]:mx-8">So that's us. There is no other way to put it.</p>
                <div v-motion-slide-visible-bottom class="w-[470px] h-[520px] bg-[#75dab4] py-[80px] px-[40px] max-[1030px]:w-[690px]  max-[1030px]:h-[487px] max-[720px]:w-[510px] max-[720px]:h-[507px] max-[530px]:w-[400px] max-[415px]:w-[300px] max-[415px]:h-[680px] max-[320px]:w-[250px] max-[320px]:px-[20px] max-[320px]:py-[10px] max-[320px]:h-[550px]">
                    <p class="mb-[10px] text-[12px] font-light tracking-[4px] text-[#0c0f16]">OUR HAPPY CLIENTS</p>
                    <p class="text-[#0c0f16] text-[30px] font-bold max-[320px]:text-[25px]">What Client's Say?</p>
                    <div class="" >
                        <carousel :items-to-show="1" :wrapAround="true" autoplay="2000" transition="800" :wrap-around="true">
                        <slide v-for="slide in 3" :key="slide">
                            <div>
                                <p class="mt-[60px] max-[320px]:mt-[20px] pb-[30px] mb-[30px] text-[#333] text-[17px] leading-[2rem] text-left font-light" style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);">{{ slide_content[slide] }}</p>
                                <div class="flex items-center">
                                    <img src="" alt="" class="w-[70px] h-[60px] rounded-full object-fit">
                                    <div class="text-left ml-[15px]">
                                        <p class="text-[#0c0f16] tracking-[2px] mb-[2px] uppercase font-bold">{{ slide_name[slide] }}</p>
                                        <p class="text-[#0c0f16] font-light text-[13px]">{{ slide_proffesion[slide] }}</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <template #addons>
                            <pagination />
                        </template>
                    </carousel>
                    </div>
                    
                </div>
            </div>
            <img src="../../assets/aboutus_testimonials.svg" alt="" class="max-h-[35em] w-full object-cover opacity-20 max-[1030px]:min-h-[1000px] max-[610px]:min-h-[800px] max-[415px]:min-h-[1000px]">
            <div class="w-full py-[50px] bg-[#11141B] ">
                <div class="flex justify-center items-center ">
                <div class="flex justify-start text-white w-[1200px] items-center max-[1230px]:w-[1000px] max-[1030px]:justify-center max-[1030px]:w-full max-[610px]:flex-col ">
                    <div v-motion-slide-visible-left :delay="600" class="flex flex-row items-center mr-32 max-[1230px]:mr-8 max-[1030px]:mr-32 max-[610px]:mr-0 max-[610px]:mb-16">
                        <svg class="CircularProgressbar " viewBox="0 0 120 100" data-test-id="CircularProgressbar">
                        <path class="CircularProgressbar-trail" style="stroke:#0f1218;stroke-dasharray:307.8760800517997px 307.8760800517997px;stroke-dashoffset:0px" d="
                                M 50,50
                                m 0,-49
                                a 49,49 0 1 1 0,98
                                a 49,49 0 1 1 0,-98
                        " stroke-width="2" fill-opacity="0">
                        </path>
                        <path class="CircularProgressbar-path" style="stroke:#75dab4;stroke-dasharray:307.8760800517997px 307.8760800517997px;stroke-dashoffset:30.787608005179962px" d="
                                M 50,50
                                m 0,-49
                                a 49,49 0 1 1 0,98
                                a 49,49 0 1 1 0,-98
                        " stroke-width="2" fill-opacity="0">
                        </path>
                        <text class="CircularProgressbar-text" style="fill:#ffffff;font-size:16px" x="35" y="55">90%</text>
                    </svg>
                        <div>
                            <p>Project</p>
                            <p>Consulting</p>
                        </div>
                    </div>
                    <div class="flex flex-row items-center" v-motion-slide-visible-right>
                        <svg class="CircularProgressbar " viewBox="0 0 120 100" data-test-id="CircularProgressbar"><path class="CircularProgressbar-trail" style="stroke:#0f1218;stroke-dasharray:307.8760800517997px 307.8760800517997px;stroke-dashoffset:0px" d="
                                M 50,50
                                m 0,-49
                                a 49,49 0 1 1 0,98
                                a 49,49 0 1 1 0,-98
                        " stroke-width="2" fill-opacity="0">
                        </path>
                        <path class="CircularProgressbar-path" style="stroke:#75dab4;stroke-dasharray:307.8760800517997px 307.8760800517997px;stroke-dashoffset:76.96902001294993px" d="
                                M 50,50
                                m 0,-49   
                                a 49,49 0 1 1 0,98
                                a 49,49 0 1 1 0,-98
                        " stroke-width="2" fill-opacity="0">
                        </path>
                        <text class="CircularProgressbar-text" style="fill:#ffffff;font-size:16px" x="35" y="55">75%</text></svg>
                        <div>
                            <p>Project</p>
                            <p>Consulting</p>
                        </div>
                    </div>
                </div>
                </div> 
            </div>
        </section>
        <section class="w-full h-[60em] flex justify-center items-center max-[1065px]:h-[100em] max-[730px]:h-[80em]">
            <div class="flex justify-center items-center flex-row max-[1065px]:flex-col max-[540px]:mx-8">
                <img src="../../assets/temp_aboutus.svg" alt="" v-motion-slide-visible-left class="w-[500px] h-[600px] pr-[15px] max-[1065px]:pr-0 max-[1065px]:mb-[60px] max-[1065px]:w-[700px] max-[1065px]:h-[800px] max-[730px]:w-[500px] max-[730px]:h-[600px] max-[540px]:w-auto max-[540px]:mb-0 max-[540px]:h-auto">
                <div v-motion-slide-visible-right :delay="200" class="pl-[40px] text-white max-[1065px]:mt-[60px] max-[1065px]:flex max-[1065px]:flex-col max-[1065px]:justify-start max-[1065px]:w-[700px] max-[1065px]:pl-0 max-[730px]:w-[500px] max-[540px]:w-auto  ">
                    <p class="text-[40px] leading-[1.5rem] mb-[20px] Barlow_Condensed font-black ">About us.</p>
                    <p v-motion-slide-visible-bottom :delay="200" class="text-[#c8c8c8] text-[15px] font-light leading-[2rem] w-[500px] max-[1065px]:w-auto">Our creative Adagency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players.</p>
                    <li class="list-none">
                        <ul class="pb-[30px] mt-[25px]" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                            <h6 class="mb-[5px] leading-[1.5rem] text-[18px] font-medium flex items-center"><span class="span_number w-[30px]">1</span> Our Mission</h6>
                            <p class="pl-[45px] text-[13px] font-light leading-[2rem] text-[#c8c8c8]" v-motion-slide-visible-right :delay="400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </ul>
                        <ul class="pb-[30px] mt-[25px]" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                            <h6 class="mb-[5px] leading-[1.5rem] text-[18px] font-medium flex items-center"><span class="span_number w-[30px]">2</span> Our Goals</h6>
                            <p class="pl-[45px] text-[13px] font-light leading-[2rem] text-[#c8c8c8]" v-motion-slide-visible-right :delay="400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </ul>
                        <ul class="pb-[30px] mt-[25px]">
                            <h6 class="mb-[5px] leading-[1.5rem] text-[18px] font-medium flex items-center"><span class="span_number w-[30px]">3</span> Why Us?</h6>
                            <p class="pl-[45px] text-[13px] font-light leading-[2rem] text-[#c8c8c8]" v-motion-slide-visible-right :delay="400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </ul>
                    </li>
                </div>
            </div>
        </section>
        <section class="w-full bg-[#0c0f16] max-h-[20em] flex justify-center items-center overflow-x-hidden" >
      <img src="../../assets/black_bg_contact.jpg" alt="" class="object-fit opacity-[0.1] min-w-full max-h-[20em] relative">
      <div class="absolute flex items-end w-[1200px] justify-between max-[1220px]:w-[800px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:pl-8 max-[820px]:w-[auto]">
        <div v-motion-slide-visible-left>
        <p class="text-[#74D5AF] tracking-[0.3rem] mb-[30px] contact_text_font1 max-[400px]:text-[50vw]">LET'S TALK</p>
        <p class=" bold_text text-[transparent] font-bold  max-[1220px]:leading-[3rem] max-[460px]:text-[10px] contact_text_font2 max-[400px]:leading-[2rem] max-[400px]:pr-8" style="-webkit-text-stroke: 1px white; ">ABOUT YOUR <span class="  naslov_sec2 bold_text" style="text-shadow:none; letter-spacing: -2px;">NEXT PROJECT</span>.</p>
      </div>
      <button v-motion-slide-visible-right class="text-[15px] py-[15px] px-[35px] border-2 border-[white] text-[white] font-bold tracking-[0.2rem] max-[1220px]:py-[5px] px-[35px] max-[820px]:mt-8 max-[400px]:mt-[10px] animation-contact-button" @click="modalpop()"><router-link to="/contact" tag="button">Get In Touch!</router-link></button>
      </div>
    </section>
    <footer_page />
    </div>
</template>
<script setup>
    import navbar from './navbar.vue';
    import footer_page from './footer.vue';
</script>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
        slide_content:["","Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae aspernatur reiciendis ad officiis, blanditiis tempora optio impedit aut illo?"
                        ,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae aspernatur reiciendis ad officiis, blanditiis tempora optio impedit aut illo?"
                        ,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae aspernatur reiciendis ad officiis, blanditiis tempora optio impedit aut illo?"],
        slide_name:["","Elon Musk","Mark Zuckerberg","Warren Buffet"],
        slide_proffesion:["","CEO, Zagreb","Co-Founder, Varaždin","Director, Split"],
        slide_images:["../../assets/businessman1.svg"]
    }
  }
}
</script>

<style scoped>
.carousel__pagination{
    justify-content: flex-end;
}
.CircularProgressbar{
    width:140px;
}
.span_number{
    display:block;
    color: #75dab4;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
    border: 1px solid #75dab4;
    border-radius: 50%;
    margin-right: 10px;
}
</style>