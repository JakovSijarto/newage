<template>
    <div class="min-h-[100vh] bg-[#0c0f16] overflow-y-hidden">
    <div class="bg-[black] w-full ">
      <video  class="opacity-60 h-[100vh] w-full object-cover " autoplay loop muted plays-inline>
        <source src="../../assets/bg-video.mp4" type="video/mp4">
      </video>
        <div class="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-8">
          <div class="flex w-[1200px] justify-between max-[750px]:justify-center">
            <div class="max-[750px]:text-center" v-motion-roll-left :delay="400">
              <p class="text-[14px] text-[#74D5AF] tracking-[0.3rem] max-[418px]:mt-32">HELLO, WE ARE</p>
              <p class="text-[100px] py-[55px] text-[white] title_font  max-[750px]:w-[auto] max-[860px]:text-[80px] max-[860px]:py-[25px] max-[860px]:leading-[5rem]">NEW AGE</p>
              <p class="text-[20px] text-[white] tracking-[0.4rem]">SMMA AGENCY</p>
            <ul class="flex mt-[4em] max-[750px]:justify-center">
              <li class="bg-[gray] p-[14px] rounded-full cursor-pointer bg-opacity-25 transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"><a href="https://www.instagram.com/newage_agency_/"><img src="../../assets/ig_icon.svg" alt="" class="w-[24px] h-[24px]"></a></li>
              <li class="bg-[gray] p-[14px] rounded-full mx-2 cursor-pointer bg-opacity-25 transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"><img src="../../assets/fb_icon.svg" alt="" class="w-[24px] h-[24px]"></li>
              <li class="bg-[gray] p-[14px] rounded-full cursor-pointer bg-opacity-25 transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"><a href="mailto:newage@agencycroatia.com?subject=subject&cc=newage@agencycroatia.com"><img src="../../assets/gmail_icon.svg" alt="" class="w-[24px] h-[24px]"></a></li>
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
            <p class="text-[2.5rem] leading-[3rem] py-4 font-bold mr-8 max-[600px]:text-center max-[600px]:text-[1.5rem] max-[600px]:mx-0">My mission is design develop the best Websites around.</p>
          <p class="text-[#C8C8C8] leading-[2rem] mr-8 max-[600px]:text-center  max-[600px]:text-[12px] max-[600px]:mx-[1rem]">Hello! I’m Alex Smith. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.</p>
        <div class="max-[600px]:text-center"><button class="text-[14px] tracking-[0.3em] mt-8 bg-[#181B22] py-[6px] half-background pl-[10px]  max-[600px]:py-[2px] ">DOWNLOAD RESUME</button></div>
      </div>
      <div class="flex justify-center items-center w-full" v-motion-pop :delay="300">
        <div class="flex mt-32 flex-col text-white w-[640px] max-[1150px]:w-[530px] max-[1150px]:mt-16 max-[1150px]:mr-8 max-[600px]:w-[300px] max-[600px]:mr-0  max-[320px]:w-[200px]" >
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">DEVELOPMENT</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px] mb-[80px]"><div class="w-[90%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="90%"></div></div>
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">UI / UX DESIGN</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px] mb-[80px]"><div class="w-[80%] max-[320px]:w-[85%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="80%"></div></div>
              <p class="Barlow_Condensed text-[13px] pb-[4px] tracking-[2px]">GRAPHIC DESIGN</p>
            <div class="relative bg-[white] bg-opacity-[0.05] h-[7px]"><div class="w-[88%] bg-[#74D5AF] h-full absolute opacity-1 tooltip" data-value="88%"></div></div>
        </div>
      </div>
      </div>
    </section>

    <section class="flex w-full justify-center mt-[10rem] flex-col items-center  overflow-x-hidden">
      <p class="text-[16px] text-[#74D5AF] tracking-[0.7rem] text-center mx-8">BEST FEATURES</p>
      <h1 class="text-[100px] py-[0.5em] naslov_sec2 mt-[25px] max-[400px]:text-[60px]">SERVICES.</h1>
      <div class="flex flex-row w-[1200px] justify-between mt-[4em] mx-16 max-[1250px]:w-[900px] max-[915px]:w-[800px] max-[810px]:flex-col max-[810px]:items-center ">
        <div v-motion-slide-visible-left class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/web_development_icon.svg" alt="" class="w-[51px] h-[50px] mb-[35px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Web Development</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</p>
          </div>
        </div>
        <div v-motion-pop-visible class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[810px]:mb-[50px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30  ">
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/digital_marketing_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white mb-[15px] tracking-[0.1rem] text-[24px] font-bold text-center leading-[2rem]">Digital Marketing</p>
            <p class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</p>
          </div>
        </div>
        <div v-motion-slide-visible-right class="max-w-[350px] h-[330px] bg-[#151921] flex justify-center items-center flex-col relative z-[2] max-[1250px]:max-w-[250px] max-[1250px]:h-[380px] max-[810px]:max-w-[800px] max-[810px]:max-h-[300px] max-[600px]:max-w-[350px] max-[370px]:max-w-[200px] hover:bg-[#21242B] hover:transition hover:ease-in-out hover:delay-10 transition ease-in-out delay-30  " >
          <div class="p-[60px] flex justify-center items-center flex-col max-[1250px]:p-[0px] max-[1250px]:px-[20px]">
            <img src="../../assets/graphic_design_icon.svg" alt="" class="w-[51px] h-[50px] mb-[40px] max-[370px]:mb-[20px]">
            <p class="bold_text text-white tracking-[0.1rem] mb-[20px] text-[24px] font-bold text-center">Graphic Design</p>
            <span class="text-[15px] text-[#C8C8C8] text-center leading-[1.8rem]">Tempore corrupti temporibus fuga  earum asperiores fugit laudantium.</span>
          </div>
          
        </div>
      </div>
      <div class="w-full h-[38em] bg-[#11141b] absolute mt-[30em] max-[810px]:mt-[75em] max-[370px]:h-[55em] max-[370px]:mt-[65em]"></div>
      <div class="relative z-2 flex flex-row mt-[10em] text-white mx-8 mb-8 max-[370px]:flex-col max-[370px]:mt-[7em]">
        <div class="flex flex-row max-[810px]:flex-col ">
          <div class="flex flex-col text-center border-r-[0.6px] border-white/[.05] max-[370px]:border-0 justify-center items-center pr-16  max-[810px]:px-8 max-[810px]:mb-16 max-[810px]:w-[300px] max-[600px]:w-[200px]">
                <img src="../../assets/happy_clients_icon.svg" alt="" class="w-[70px] h-[70px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 tracking-[2px]">10+</p>
                <p class="text-[15px] ">Happy Clients</p>
            </div>
            <div class="flex flex-col text-center border-r-[0.6px] border-white/[.05] max-[370px]:border-0 justify-center items-center px-16 max-[810px]:px-8 max-[810px]:w-[300px] max-[600px]:w-[200px] max-[370px]:mb-16">
              <img src="../../assets/projects_made_icon.svg" alt="" class="w-[100px] h-[100px] absolute opacity-[.05]">
                <p class="Barlow_Condensed text-[35px] pb-8 tracking-[2px]">120+</p>
                <p class="text-[15px]">Completed Projects</p>
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
                <p class="text-[15px]">Years Of Experience</p>
            </div>
           </div>
            
      </div>
    </section>
    <section class="w-full overflow-x-hidden pb-32 max-[700px]:pb-8">
      <div class="pt-64 text-center flex justify-center gap-[2em]">
        <div class="flex flex-col text-left mx-16 max-[1200px]:text-center max-[400px]:items-center">
        <p class="text-[16px] text-[#74D5AF] tracking-[0.7rem] pb-8  ">PORTFOLIO</p>
        <h2 class="text-[80px]  naslov_sec2 mt-[25px] max-[400px]:leading-[4rem] max-[400px]:mt-0">OUR WORKS</h2>
        <div class="mt-32 text-white font-bold max-w-[400px] background-custom rounded-full flex justify-center max-[1200px]:mt-16 max-[400px]:flex-col max-[400px]:rounded-[10%]  max-[400px]:max-w-[214px]">
          <button class="tracking-[0.1rem]" @click="all">All</button>
          <span class="absolute bg-[#74D5AF] w-[8px] h-[8px] rounded-full mt-[8px] ml-[9.5em] max-[400px]:mt-[-4em] max-[400px]:ml-[3.2em] max-[400px]:w-[15px]  max-[400px]:h-[3px]  max-[400px]:rounded-full"></span>
          <button class="mx-16 tracking-[0.1rem] max-[400px]:mx-0  max-[400px]:my-8 relative z-999" @click="restaurants_pics">Restaurants</button>
          <span class="absolute bg-[#74D5AF] w-[8px] h-[8px] rounded-full mt-[8px] ml-[-13.3em]  max-[400px]:ml-[3.2em]  max-[400px]:mt-[3.3em] max-[400px]:w-[15px]  max-[400px]:h-[3px]  max-[400px]:rounded-full"></span>
          <button class="tracking-[0.1rem]" @click="other_pics">Other</button>
        </div>
      </div>
        <div class="max-[1200px]:absolute ">
          <p class="text-[#0c0f16] big-text ">Portfolio</p>    
        </div>
      </div>

      <div class="grid place-content-center mt-16 mx-8  overflow-x-hidden" >
          <div class="w-full relative grid grid-cols-2 gap-4 place-content-center gap-x-[6rem] max-[800px]:gap-x-[2.5rem] max-[700px]:gap-x-[0rem] max-[700px]:grid-cols-1">
            <div class="text-center mt-[100px] max-[700px]:my-[50px] ">
              <div class="overflow-hidden" v-if="restaurants" v-motion-slide-left>
              <img src="../../assets/test_photo1.svg" alt="" class="cursor-pointer w-[500px] h-[600px] object-cover max-[900px]:h-[333px] max-[700px]:w-[440px] max-[700px]:h-[560px] transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer">
            </div>
              <p class="text-white text-[18px] font-bold pt-[2em] pb-[7px]" v-motion-slide-top :delay="300">Creativity Rest</p>
              <p class="text-[#999]" v-motion-slide-bottom :delay="400">Lorem, ipsum dolor.</p>
            </div>

            <div class="text-center max-[700px]:my-[50px] ">
              <div class="overflow-hidden" v-if="other" v-motion-slide-right>
                <img src="../../assets/test_photo2.svg" alt="" class="cursor-pointer w-[500px] h-[600px] object-cover max-[900px]:h-[333px] max-[700px]:w-[440px] max-[700px]:h-[560px] transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer">
              </div>
                <p class="text-white text-[18px] font-bold pt-8 pb-[7px]" v-motion-slide-top :delay="300">Creativity Demand</p>
                <p class="text-[#999]" v-motion-slide-bottom :delay="400">Lorem, ipsum dolor.</p>
            </div>
            <div class="text-center mt-[50px] max-[700px]:my-[50px] ">
              <div class="overflow-hidden" v-if="restaurants" v-motion-slide-left>
                <img src="../../assets/test_photo3.svg" alt="" class="cursor-pointer w-[500px] h-[600px] object-cover max-[900px]:h-[333px] max-[700px]:w-[440px] max-[700px]:h-[560px] transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer">
              </div>
                <p class="text-white text-[18px] font-bold pt-8 pb-[7px]" v-motion-slide-top :delay="300">Creativity Rest</p>
                <p class="text-[#999]" v-motion-slide-bottom :delay="400">Lorem, ipsum dolor.</p>
            </div>
            <div class="text-center max-[700px]:my-[50px] ">
              <div class="overflow-hidden" v-if="other" v-motion-slide-right>
                <img src="../../assets/test_photo4.svg" alt="" class="cursor-pointer w-[500px] h-[600px] object-cover max-[900px]:h-[333px] max-[700px]:w-[440px] max-[700px]:h-[560px] transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer">
              </div>
                <p class="text-white text-[18px] font-bold pt-8 pb-[7px]" v-motion-slide-top :delay="300">Creativity Other</p>
                <p class="text-[#999]" v-motion-slide-bottom :delay="400">Lorem, ipsum dolor.</p>
            </div>
          </div>
      </div>
    </section>
  -->
    <section class="w-full bg-[#0c0f16] max-h-[20em] flex justify-center items-center overflow-x-hidden" >
      <img src="../../assets/black_bg_contact.jpg" alt="" class="object-fit opacity-[0.1] min-w-full max-h-[20em] relative">
      <div class="absolute flex items-end w-[1200px] justify-between max-[1220px]:w-[800px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:pl-8 max-[820px]:w-[auto]">
        <div v-motion-slide-left>
        <p class="text-[#74D5AF] tracking-[0.3rem] mb-[30px] contact_text_font1 max-[400px]:text-[50vw]">LET'S TALK</p>
        <p class=" bold_text text-[transparent] font-bold  max-[1220px]:leading-[3rem] max-[460px]:text-[10px] contact_text_font2 max-[400px]:leading-[2rem]" style="-webkit-text-stroke: 1px white; ">ABOUT YOUR <span class="  naslov_sec2 bold_text !tracking-[-2px] max-[400px]:!tracking-[2px]" style="text-shadow:none;">NEXT PROJECT</span>.</p>
      </div>
      <button v-motion-slide-right class="text-[15px] py-[15px] px-[35px] border-2 border-[white] text-[white] font-bold tracking-[0.2rem]  px-[35px] max-[820px]:mt-8 max-[400px]:mt-[10px] animation-contact-button" @click="modalpop()"><router-link to="/contact" tag="button">Get In Touch</router-link></button>
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

 export default{
    data(){
      return{
        restaurants:true,
        other:true
    };
  },
    methods: {
      all(){
        this.restaurants = true
        this.other = true
      },
      other_pics(){
        this.restaurants = false
        this.other = true
      },
      restaurants_pics(){
        this.restaurants = true
        this.other = false
      }
    }
    } 
  
</script>
<style>

.transition-footer-button:hover{
  color:white;
  transition:all 0.5s ease-in;
}
.animation-contact-button, .transition-footer-button{
    transition:all 0.5s ease-in;
  }
  .animation-contact-button:hover{
    background-color: #fff;
    color:black;
    transition:all 0.2s ease-in;

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