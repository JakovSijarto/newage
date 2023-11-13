<template>
  <Transition name="fade">
    <loader v-if="isLoading"/>
  </Transition>
    <div class="min-h-[100vh] bg-[#0c0f16] overflow-y-hidden">
    <div class="bg-[black] w-full ">
      <video  class="opacity-60 h-[100vh] w-full object-cover " autoplay loop muted plays-inline>
        <source src="../../assets/bg-video.mp4" type="video/mp4">
      </video>
        <div class="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-8">
          <div class="flex w-[1200px] justify-between max-[750px]:justify-center">
            <div class="max-[750px]:text-center" v-motion-roll-left :delay="400">
              <p class="text-[14px] text-[#74D5AF] tracking-[0.3rem] max-[418px]:mt-0">HELLO, WE ARE</p>
              <p class="text-[100px] py-[55px] text-[white] title_font  max-[750px]:w-[auto] max-[860px]:text-[80px] max-[860px]:py-[25px] max-[860px]:leading-[5rem]">NEW AGE</p>
              <p class="text-[20px] text-[white] tracking-[0.4rem]">WEB DESIGN AGENCY</p>
            <ul class="flex mt-[4em] max-[750px]:justify-center">
              <li class="bg-[gray] p-[14px] rounded-full cursor-pointer bg-opacity-25 transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer mr-2"><a href="https://www.instagram.com/newage_development/" target="_blank"><img src="../../assets/ig_icon.svg" alt="" class="w-[24px] h-[24px]"></a></li>
              <li class="bg-[gray] p-[14px] rounded-full cursor-pointer bg-opacity-25 transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"><a href="mailto:jakov.sijarto2@gmail.com?subject=subject&cc=jakov.sijarto2@gmail.com" target="_blank"><img src="../../assets/gmail_icon.svg" alt="" class="w-[24px] h-[24px]"></a></li>
            </ul>
          </div>
        <img src="../../assets/logo.svg" class="max-[750px]:hidden" v-motion-roll-right :delay="400">
          </div>
      </div>
    </div>
    <navbar />
    <section class="w-full flex justify-center">
      <div class="container flex justify-between items-center max-w-[1200px] mx-16  max-[1070px]:mx-0  max-[1070px]:flex-col max-[1070px]:w-[600px] max-[650px]:mx-16 ">
        <div class="flex flex-col text-white mt-32 max-[1070px]:mt-[4em] w-full" v-motion-slide-visible-left :delay="300">
          <div class="flex  max-[600px]:justify-center">
            <span class="absolute bg-[#74D5AF] w-[4px] h-[4px] rounded-full mt-[14px] max-[600px]:ml-[-87px]"></span>
            <span class="absolute bg-[#74D5AF] w-[4px] h-[4px] rounded-full ml-[6px] mt-[14px] max-[600px]:ml-[-75px]"></span>
            <span class="absolute bg-[#74D5AF] w-[4px] h-[4px] rounded-full ml-[6px] mt-[8px] max-[600px]:ml-[-75px]"></span>
            <p class=" Barlow_Condensed text-[1.3rem] ml-[18px] tracking-[2px]">About Us</p>
          </div>
            <p class="text-[2.5rem] leading-[3rem] py-4 font-bold mr-8 max-[600px]:text-center max-[600px]:text-[1.5rem] max-[600px]:mx-0">Our mission is to create the highest quality pages for our clients.</p>
          <p class="text-[#C8C8C8] leading-[2rem] mr-8 max-[600px]:text-center  max-[600px]:text-[12px] max-[600px]:mx-[1rem]">My name is Jakov, I am an experienced programmer with more than 6 years of experience in the industry. With a strong knowledge in various areas of web development, including frontend and backend programming, UX/UI design, I've gained a reputation as an expert in creating high quality and functional web solutions for my clients. </p>
        <div class="max-[600px]:text-center"><router-link to="/contact" tag="button"><button class="text-[14px] tracking-[0.3em] mt-8 bg-[#181B22] py-[6px] half-background pl-[10px]  max-[600px]:py-[2px] ">REACH OUT</button></router-link></div>
        </div>
      <div class="flex justify-center items-center w-full" v-motion-pop :delay="300">
        <div class="flex mt-32 flex-col text-white w-[640px] max-[1150px]:w-[530px] max-[1150px]:mt-16 max-[1150px]:mr-8 max-[600px]:w-[300px] max-[600px]:mr-0  max-[320px]:w-[200px]" >
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">FRONT-END</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px] mb-[80px]"><div class="w-[90%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="90%"></div></div>
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">UI / UX DESIGN</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px] mb-[80px]"><div class="w-[80%] max-[320px]:w-[85%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="80%"></div></div>
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">BACK-END</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px]"><div class="w-[88%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="88%"></div></div>
        </div>
      </div>
      </div>
    </section>

    <section class="flex w-full justify-center mt-[10rem] flex-col items-center  overflow-x-hidden">
      <p class="text-[16px] text-[#74D5AF] tracking-[0.7rem] text-center mx-8 uppercase">best features</p>
      <h1 class="text-[100px] py-[0.5em] naslov_sec2 mt-[25px] max-[400px]:text-[60px]">SERVICES.</h1>
      <div class="flex flex-row w-[1200px] justify-between mt-[4em] mx-16 max-[1250px]:w-[900px] max-[915px]:w-[800px] max-[810px]:flex-col max-[810px]:items-center ">
        <div v-motion-slide-visible-left class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/web_development_icon.svg" alt="" class="w-[51px] h-[50px] mb-[35px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Web Development</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Web development is the process of creating and maintaining web pages using programming languages.</p>
          </div>
        </div>
        <div v-motion-pop-visible class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] mx-16 max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30  ">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/digital_marketing_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Digital Marketing</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Digital marketing is the use of digital channels to promote a product/service.</p>
          </div>
        </div>
        <div v-motion-slide-visible-right class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30  " >
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/graphic_design_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white tracking-[0.1rem] mb-[20px] text-[24px] font-bold text-center">Graphic Design</p>
            <span class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Graphic design is the process of creating visual solutions to communicate ideas.</span>
          </div>
        </div>
      </div>
      <div class="w-full h-[30em] bg-[#11141b] absolute mt-[22.5em] max-[810px]:mt-[75em] max-[370px]:h-[55em] max-[370px]:mt-[65em]"></div>
      <div class="relative z-2 flex flex-row mt-[10em] text-white mx-8 mb-8 max-[370px]:flex-col max-[370px]:mt-[7em]">
        <div class="flex flex-row max-[810px]:flex-col ">
          <div class="flex flex-col text-center border-r-[0.6px] border-white/[.05] max-[370px]:border-0 justify-center items-center pr-16  max-[810px]:px-8 max-[810px]:mb-16 max-[810px]:w-[300px] max-[600px]:w-[200px]">
                <img src="../../assets/happy_clients_icon.svg" alt="" class="w-[70px] h-[70px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 tracking-[2px]">10+</p>
                <p class="text-[15px] ">Happy Clients</p>
            </div>
            <div class="flex flex-col text-center border-r-[0.6px] border-white/[.05] max-[370px]:border-0 justify-center items-center px-16 max-[810px]:px-8 max-[810px]:w-[300px] max-[600px]:w-[200px] max-[370px]:mb-16">
              <img src="../../assets/projects_made_icon.svg" alt="" class="w-[100px] h-[100px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 tracking-[2px]">20+</p>
                <p class="text-[15px]">Finished Projects</p>
            </div>
        </div>
            <div class="flex flex-row max-[810px]:flex-col">
              <div class="flex flex-col text-center border-r-[0.6px] border-white/[.05] justify-center items-center px-16 max-[810px]:px-8 max-[810px]:border-0 max-[810px]:mb-16 max-[810px]:w-[300px] max-[600px]:w-[200px] max-[600px]:mb-[3.4em]">
              <img src="../../assets/programming_languages_icon.svg" alt="" class="w-[70px] h-[70px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 max-[600px]:pb-[20px] tracking-[2px]">4+</p>
                <p class="text-[15px]">Programming Languages</p>
            </div>
            <div class="flex flex-col text-center justify-center items-center pl-16 max-[810px]:px-8 max-[810px]:w-[300px] max-[600px]:w-[200px]">
              <img src="../../assets/years_of_experience_icon.svg" alt="" class="w-[70px] h-[70px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 tracking-[2px]">6+</p>
                <p class="text-[15px]">Years of Experience</p>
            </div>
           </div>
            
      </div>
    </section>
    <section class="w-full overflow-x-hidden pb-32 max-[700px]:pb-8">
      <div class="pt-64 text-center flex justify-center gap-[2em]">
        <div class="flex flex-col text-left mx-16 max-[1200px]:text-center max-[400px]:items-center">
        <p class="text-[16px] text-[#74D5AF] tracking-[0.7rem] pb-8  ">PORTFOLIO</p>
        <h2 class="text-[80px]  naslov_sec2 mt-[25px] max-[400px]:leading-[4rem] max-[400px]:mt-0">OUR WORKS</h2>
      </div>
        <div class="max-[1200px]:absolute ">
          <p class="text-[#0c0f16] big-text ">Portfolio</p>    
        </div>
      </div>
      <div class="w-full flex justify-center items-center max-[900px]:flex-col">
          <div class="text-center mt-16">
          <img src="../../assets/aboutus_home_canisart.png" alt="" loading="lazy">
          <p class="text-white text-[1.5rem] font-bold">Canis Art</p>
          <a href="https://main--exquisite-gelato-0b2f5f.netlify.app/" target="_blank"><button class="mt-8 text-white border py-[6px] px-[20px] animation-contact-button ">Saznajte Više</button></a>
        </div>
        <div class="text-center mt-16">
          <img src="../../assets/aboutus_home_tenisiceonline.png" alt="" loading="lazy">
          <p class="text-white text-[1.5rem] font-bold">Tenisice Online</p>
          <a href="https://tenisiceonline.netlify.app/#/" target="_blank"><button class="mt-8 text-white border py-[6px] px-[20px] animation-contact-button">Saznajte Više</button></a>
        </div>
        <div class="text-center mt-16">
          <img src="../../assets/apsopic.jpeg" alt="">
          <p class="text-white text-[1.5rem] font-bold" loading="lazy">Ap Sopic</p>
          <a href="https://apsopichr.com/#/" target="_blank"><button class="mt-8 text-white border py-[6px] px-[20px] animation-contact-button">Saznajte Više</button></a>
        </div>
      </div>
      
    </section>
    <section class="w-full bg-[#0c0f16] max-h-[20em] flex justify-center items-center overflow-x-hidden mt-[0]" >
      <img src="../../assets/black_bg_contact.jpg" alt="" class="object-fit opacity-[0.1] min-w-full max-h-[20em] relative">
      <div class="absolute flex items-end w-[1200px] justify-between max-[1220px]:w-[800px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:pl-8 max-[820px]:w-[auto]">
        <div v-motion-slide-left>
        <p class="text-[#74D5AF] tracking-[0.3rem] mb-[30px] contact_text_font1 max-[400px]:text-[50vw] uppercase">Let's</p>
        <p class=" bold_text text-[transparent] font-bold  max-[1220px]:leading-[3rem] max-[460px]:text-[10px] contact_text_font2 max-[400px]:leading-[2rem]" style="-webkit-text-stroke: 1px white; ">TALK <span class="  naslov_sec2 bold_text !tracking-[-2px] max-[400px]:!tracking-[2px]" style="text-shadow:none;">ABOUT YOUR PROJECT</span>.</p>
      </div>
      <router-link to="/contact" tag="button"><button v-motion-slide-right class="text-[15px] py-[15px] px-[35px] border-2 border-[white] text-[white] font-bold tracking-[0.2rem]  px-[35px] max-[820px]:mt-8 max-[400px]:mt-[10px] animation-contact-button" @click="modalpop()">REACH OUT</button></router-link>
      </div>
    </section>
    <footer_page />
  </div>
</template>
<script setup>
  import navbar from './navbar.vue';
  import footer_page from './footer.vue'; 
  import loader from './pageLoader.vue'
</script>

<script>
 export default{
    data(){
      return{
        isLoading: true
    };
  },
    methods: {
    },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
    window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth',
    });
  } 
  }

  
</script>
<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.animation-contact-button, .transition-footer-button{
    transition:all 0.5s ease-in;
  }


.Barlow_Condensed{
  font-family: 'Barlow Condensed', sans-serif;
}
.bold_text{
  font-family: 'Poppins', sans-serif;
}
.contact_text_font2{
    font-size: max(1vw, 100%, 3rem);
  }
  @media only screen and (max-width: 400px){
	.contact_text_font1{
    font-size:3vw;
    margin-bottom: 0;
  }
  .contact_text_font2{
    font-size:8vw;
    margin-bottom: 0;
  }
}
.naslov_sec2{
  text-shadow: 0 8px rgb(255 255 255 / 5%);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 4px;
    color:white;
    font-family: 'Barlow Condensed', sans-serif;
}
.half-bg{
    background: linear-gradient(
    to right,
    rgb(21,25,33) 0%,
    rgb(21,25,33) 50%,
    rgb(17,20,27) 50%, 	
    rgb(17,20,27) 100%
  );
  }
  @media only screen and (max-width: 1050px){
    .half-bg{
    background: linear-gradient(
    to right,
    rgb(21,25,33) 0%,
    rgb(21,25,33) 100%,
    rgb(21,25,33) 50%, 	
    rgb(21,25,33) 100%
  );
  }
  }
  .big-text{
  -webkit-text-stroke: 1px white;
  font-size: max(2vw, 50%, 10rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    opacity: .5;
}
@media only screen and (max-width: 700px){
	.big-text{
  font-size: 20vw;
}
}
@media (hover:hover){
.transition-footer-button:hover{
  color:white;
  transition:all 0.5s ease-in;
}  .animation-contact-button:hover{
    background-color: #fff;
    color:black;
    transition:all 0.2s ease-in;

  }
}
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
/* For Firefox */
progress::-moz-progress-bar {
  background-color: #74D5AF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
		}

		/* For Chrome or Safari */
		progress::-webkit-progress-value {
			background-color: #74D5AF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
		}

		/* For IE10 */
		progress {
			background-color: #74D5AF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
		}
  .message-icon{
    font-size:40px;
    color:#74D5AF;
    margin-bottom:5px;
  }
  .half-background{
    background: linear-gradient(
    to right,
    rgb(24,27,34) 0%,
    rgb(24,27,34) 40%,
    rgb(12,15,22) 40%, 	
    rgb(12,15,22) 100%
  );
  }

  .tooltip::before{
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #75dab4;
    position: absolute;
    right: 15px;
    bottom: 14px;
  }
  .tooltip::after{
    content: attr(data-value);
    position: absolute;
    right: 10px;
    top: -52px;
    padding: 7px 15px;
    border-radius: 5px;
    background: #75dab4;
    color: #111;
    font-size: 12px;
    font-weight: 600;
  }
  .background-custom{
    background: rgba(255, 255, 255, 0.02);
    padding:15px 30px;
  }
  .contact_text_font1{
    font-size: max(0.4vw, 100%, 0.4vw)
  }


</style>