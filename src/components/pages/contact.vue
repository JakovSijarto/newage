<template>
      <Transition name="fade">
    <loader v-if="isLoading"/>
  </Transition>
    <div class="w-full min-h-[100vh] bg-[#0c0f16]">
       <navbar/>
       <section class="h-[80vh] max-[380px]:h-[90vh] fixed top-0 left-0 w-full bg-[#0c0f16]">
            <div class="fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-[-1] max-[300px]:top-[45%]">
                <p class="text-[#0c0f16] big-text ">Contact</p>
                <div class="absolute top-[-4em] max-[680px]:w-[510px] max-[530px]:w-auto max-[680px]:mx-8 max-[300px]:text-center">
                      <div v-motion-pop :delay="300" class="text-[60px] tracking-[2px] Barlow_Condensed font-semibold leading-[6rem] text-white max-[680px]:text-[40px] max-[680px]:leading-[3rem] max-[300px]:mb-[5px]">
                      <p v-motion-pop :delay="600" class="text-[35px] font-light Barlow_Condensed text-[#75dab4] leading-[1.4rem] ">Let's</p>
                      TALK ABOUT YOUR PROJECT
                    </div>
                    <p v-motion-pop :delay="500" class="text-[#c8c8c8] text-[15px] font-light leading-[2rem]">Please feel free to ask me any questions and to discuss our future development.</p>
                </div>
            </div>
       </section>
       <section class="h-[70em] bg-[#0c0f16] w-full relative z-3 mt-[70vh] flex justify-center items-start max-[630px]:h-[90em] max-[280px]:h-[100em]">
        <form ref="form" @submit.prevent="sendEmail" class="w-[1200px] mt-[10em] mx-[20px]">
          <p class="font-bold mb-[50px] leading-[1.4rem] text-[30px] text-white">Reach Out.</p>
          <div class="flex justify-between max-[630px]:flex-col ">
            <div class="w-[49%] max-[630px]:w-full">
              <input type="text" name="user_name" placeholder="Name" class="" required v-model="ime">
            </div>
            <div class="w-[49%] max-[630px]:w-full max-[630px]:mt-[16px]">
              <input type="text" name="user_name" placeholder="Surname" required v-model="prezime">
            </div>
          </div>
          <div class="flex justify-between max-[630px]:flex-col">
            <div class="w-[49%] max-[630px]:w-full my-[1rem]">
              <input type="email" name="user_email" placeholder="Email" required v-model="email">
            </div>
            <div class="w-[49%] max-[630px]:w-full my-[1rem] max-[630px]:mb-[16px] max-[630px]:mt-[0px]">
              <input type="tel" name="user_tel" placeholder="Telephone" required v-model="telefon">
            </div>
          </div>
            <input type="text" name="user_url" placeholder="Website (Optional)" required  v-model="stranica">
            <p class="text-white text-[24px] uppercase tracking-[3px] Barlow_Condensed  mt-8">Interested In</p>
            <div class="flex justify-between w-[600px] my-4 max-[630px]:w-auto  max-[630px]:flex-col  text-white">
              <div class="flex flex-col">
                <div class="inline-flex my-4">
                  <input type="checkbox" name="zainteresirani" value="Dizajn i izrada nove web stranice" class="max-w-[20px]">
                  <p class="text-[#999] ml-4">Design and layout of the new website</p>
                </div>  
              <div class="inline-flex">
                <input type="checkbox" name="zainteresirani" value="Izrada web aplikacije" class="max-w-[20px]">
                <p class="text-[#999] ml-4">Creating a web application</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="inline-flex my-4">
                <input type="checkbox" name="zainteresirani" value="Redizajn postojećeg weba" class="max-w-[20px]">
                <p class="text-[#999] ml-4">Redesign of the current website</p>
              </div>
              <div class="inline-flex">
                <input type="checkbox" name="zainteresirani" value="Custom rješenje" class="max-w-[20px]">
                <p class="text-[#999] ml-4">Custom</p>
              </div>
              
            </div>
            </div>
            
            
            <p class="text-white text-[24px] uppercase tracking-[3px] Barlow_Condensed mt-8">BUDGET <span class="text-[16px]">( +FEE )</span></p>
            <div class="flex justify-between w-[600px] max-[630px]:w-auto max-[630px]:flex-col text-white my-4">
              <div class="flex flex-col " required>
                <div class="inline-flex my-4">
                  <input type="radio" name="money" value="Manje od 100" class="">
                  <p class="text-[#999] ml-4">Less than 100€</p>
                </div>
                <div class="inline-flex">
                  <input type="radio" name="money" value="200 do 500" class="">
                  <p class="text-[#999] ml-4">200€ - 500€</p>
                </div>  
            </div>
            <div class="flex flex-col">
              <div class="inline-flex my-4">
                <input type="radio" name="money" value="500 do 1000" class="">
                <p class="text-[#999] ml-4">500€ - 1000€</p>
              </div>
              <div class="inline-flex">
                <input type="radio" name="money" value="vise od 1000" class="">
                <p class="text-[#999] ml-4">More Than 1000€</p>
              </div>
                
            </div>
            </div>
            <textarea name="message" placeholder="Message" v-model="poruka" class="mt-[30px] p-[15px] min-h-[200px] text-[white] bg-transparent max-h-[250px] mb-[1rem]" style="border: 1px solid rgba(255, 255, 255, 0.3);"></textarea>
            <input type="submit" value="Send" class="float-right h-[50px] cursor-pointer"> 
        </form>
       </section>
       <footer_page class="relative z-3"/>
    </div>
</template>
<script setup>
  import navbar from './navbar.vue';
  import footer_page from './footer.vue'; 
  import loader from './pageLoader.vue'
</script>
<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export default {
  data(){
    return{
      ime:"",
      prezime:"",
      email:"",
      telefon:"",
      stranica:"",
      poruka:"",
      checked:"",
      isLoading: true
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_clwuk55', 'template_8k7mdkr', this.$refs.form, '6y58hytHJtD9eVBSB')
        .then((result) => {
             console.log('SUCCESS!', result.text);
            swal({title: "Uspješno!", text: "Hvala Na poruci", type: 
"success"}).then(function(){ 
   location.reload();
   }
);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        
    },

  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
    window.scroll({
  top: 0, 
  left: 0, 
    });
  } 
}
</script>
<style scoped>
.big-text{
  -webkit-text-stroke: 1px white;
  font-size: max(20vw, 20%, 10rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
}
@media only screen and (max-width: 700px){
	.big-text{
  font-size: 20vw;
}
}
input {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.display-input { display: inline-block; }
.display-input2 { display: none; }

@media (max-width: 320px) { 
  .display-input { display: none; }
  .display-input2 { display: inline-block; 
  width: 100%;}
}
label {
  float: left;
  color:white;
}

input, textarea {
  width: 100%;
  resize: vertical;
}
input[type=submit] {
  font-size: 15px;
  border:1px solid white;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 200px;
  padding: 12px 35px;
  transition: 0.6s all ease-in;
}

input[type=radio],input[type=checkbox]{
width:30px;
accent-color: #75dab4;
}

input[type=text],[type=email],[type=tel]{
  color: #fff;
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>