<template>
    <div class="min-h-[100vh] bg-[#0c0f16] overflow-y-hidden ">

      <div class="h-[100vh] relative">
    <video autoplay muted loop id="bg-video" class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="../../assets/bg-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay-content flex justify-center items-center w-[50%] h-full px-8">
      <!-- Logo on the left -->
      <ul class="absolute h-[200px] bg-transparent shadow-custom">
    <li class="text-[5rem] leading-[1.5rem] mb-[20px] text-white text-outline font-semibold">NEW AGE</li>
    <li class="pt-5 pb-8 text-white" >where the magic happens.</li>
    <li class="text-white border py-2 px-4 flex flex-row items-center w-[180px] rounded-r-[40px]">Talk to us <span class="pl-2"><img src="../../assets/contactphone.svg" alt="" class="w-[32px] h-[32px]"></span></li>
</ul>
    </div>
  </div>
  <navbar />   
<div class="text-center text-white">
  <p class="text-[4rem] leading-[1.5rem] Barlow_Condensed pt-20 pb-8 font-bold">Our Work</p>
  <p class="">People who have new-age website are always up-to-date</p>
  <div class="h-full flex flex-col justify-start items-center w-full pt-24">
    <ul class="flex flex-row w-[1200px]">
      <li class=" h-[300px] w-full flex flex-col items-center justify-center  blur-effect">
        <img src="../../assets/fo4a.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          Fo4a.eu
          <img src="../../assets/click.svg" alt="" class="w-[24px] h-[24px] ml-3">
        </div>
      </li>
      <li class=" h-[300px] w-full flex flex-col items-center justify-center mx-12 blur-effect">
        <img src="../../assets/canisart.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          CanisArt.com
          <img src="../../assets/click.svg" alt="" class="w-[24px] h-[24px] ml-3">
        </div>
      </li>
      <li class=" h-[300px] w-full flex flex-col items-center justify-center  blur-effect">
        <img src="../../assets/apsopic.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          APSopic.com 
          <img src="../../assets/click.svg" alt="" class="w-[24px] h-[24px] ml-3">
        </div>
      </li>
    </ul>
    <ul class="flex flex-row justify-between w-[1200px] gap-12 py-12 ">
      <li class=" h-[300px] w-full flex flex-col items-center justify-center  blur-effect">
        <img src="../../assets/cleaning-club.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          CleaningClub.com
          <img src="../../assets/click.svg" alt="" class="w-[24px] h-[24px] ml-3">
        </div>
      </li>
      <li class=" h-[300px] w-full flex flex-col items-center justify-center  blur-effect">
        <img src="../../assets/pizzerija.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          Pizzeria <span class="text-[10px] pl-2">(template)</span>
        </div>
      </li>
      <li class=" h-[300px] w-full flex flex-col items-center justify-center  blur-effect">
        <img src="../../assets/Putnička agencija.png" class="h-[100%] object-cover" alt="">
        <div class="flex flex-row py-4">
          Travel agency <span class="text-[10px] pl-2">(template)</span>
        </div>
      </li>
    </ul>
</div>
</div>

<div class="mt-24 text-white text-center flex flex-col items-center  bg-[#0a0d13]">
  <p class="pt-20 mb-6 border-b border-[#74D5AF]">about us</p>
  <p class="text-[4rem] leading-[1.5rem] Barlow_Condensed pb-4 font-bold">Our Story</p>
  <div class="flex items-center justify-center gap-[7em] py-16">
      <img src="../../assets/aboutusglobe.png" alt="" class="w-[300px]">
  <p class="text-left text-[14px] w-[500px]">
      Hi there, I'm Filip, a passionate Web Designer and Developer from Serbia. My super trio when it comes to building websites are Figma, Webflow and Shopify. Together, let's bring your dream website to life – a website/store that trdivy embodies your brand, expanding your reach and driving conversions. With a focus on client satisfaction, I'll leverage my knowledge to ensure your success. Grow your online presence with a stunning, functional, and unique website tailored to your goals. Partner with me today and let's work together towards your business growth!
      <br>
      <button class="mt-8 border py-2 px-6">CONTACT US</button>
    </p>
    
  </div>
</div>

<div class="pt-18 text-white text-center flex flex-col items-center">
  <p class="pt-20 mb-6 border-b border-[#74D5AF]">services</p>
  <p class="text-[4rem] leading-[1.5rem] Barlow_Condensed pb-8 font-bold">What we do</p>
  <div class="flex items-center justify-center gap-[7em] w-[1000px] py-16">
    <div class="border w-[50%] h-[500px] relative pl-8 text-left pt-8">
      <div class="absolute bottom-0 right-0 flex p-2">
        <img src="../../assets/vueicon.svg" alt="" class="w-12 h-12">
        <img src="../../assets/tailwind.svg" alt="" class="w-12 h-12">
      </div>
      <div class="flex flex-row items-center">
        <img src="../../assets/websitecreation.svg" alt="">
        <p class="text-[23px] pl-4 font-bold">Web Development</p>
      </div>
      <ul class="text-[20px]">
        <li class="pt-6 text-[16px] pb-2">Features:</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-8 h-8">On page SEO</li>
        <li class="flex items-center gap-2 py-4"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Web-Shop</li>
        <li class="flex items-center gap-2 pb-4"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Hosting</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Responsive design</li>
      </ul>
    </div>
    <div class="border w-[50%] h-[500px] relative pl-8 text-left pt-8">
      <div class="absolute bottom-0 right-0 flex p-2">
        <img src="../../assets/vf.png" alt="" class="h-12">
      </div>
      <div class="flex flex-row items-center">
        <img src="../../assets/ailogo.svg" alt="">
        <p class="text-[23px] pl-4 font-bold">AI Automation</p>
      </div>
      <ul class="text-[20px]">
        <li class="pt-6 text-[16px] pb-2">Features:</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Lead Capture & CRM Integration</li>
        <li class="flex items-center gap-2 py-4"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Support Ticket Management</li>
        <li class="flex items-center gap-2 pb-4"><img src="../../assets/star.svg" alt="" class="w-8 h-8">Appointment Setting Build</li>
      </ul>
    </div>
  </div>
</div>
<div class="bg-[#0a0d13] text-center flex flex-col items-center text-white pb-24">
  <p class="pt-20 mb-8 border-b border-[#74D5AF] w-[100px]">contact us</p>
  <p class="text-[4rem] leading-[1.5rem] Barlow_Condensed pb-8 font-bold">Get In Touch</p>
  <p class="text-[14px] pb-12">If you have any type of questions or concerns feel free to reach out, there is no stupid questions :)</p>
  <div class=" mx-auto p-6 border shadow-md w-[1200px] flex justify-center">
    <form @submit.prevent="handleSubmit" class="w-full flex flex-col items-center py-12">
      <div class="flex w-[80%] gap-12 justify-between">
        <div class="mb-4 text-left w-full">
        <label for="name" class="block text-[20px] pb-2 text-white">Name</label>
        <input type="text" id="name" placeholder="Ex. Jakov Sijarto" v-model="form.name" class="w-full px-3 py-2 border rounded-md h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="mb-4 text-left w-full">
        <label for="email" class="block text-[20px] pb-2 text-white">Email Address</label>
        <input type="email" id="email" placeholder="Ex. contact@jakovsijarto.com" v-model="form.email" class="w-full px-3 py-2 border rounded-md h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      </div>
      <div class="flex w-[80%] gap-12 justify-between pt-4">
        <div class="mb-4 text-left w-full">
        <label for="phone" class="block text-[20px] pb-2 text-white">Phone Number</label>
        <input type="tel" id="phone" placeholder="Ex. +0917292812" v-model="form.phone" class="w-full px-3 py-2 border rounded-md h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="mb-4 text-left w-full">
        <label for="subject" class="block text-[20px] pb-2 text-white">Subject</label>
        <input type="text" id="subject" placeholder="Ex. New Project" v-model="form.subject" class="w-full px-3 py-2 border h-[58px] rounded-md border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      </div>
      
      <div class="mb-4 text-left pt-4 w-[80%] ">
        <label for="message" class="block text-[20px] pb-2 text-white">Message</label>
        <textarea id="message" v-model="form.message" placeholder="Type your message here..." class="w-full px-3 py-2 border rounded-md h-[160px] focus:outline-none border-white bg-[#0A0D13] focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <div class="pb-2">
        <button type="button" @click="handleReset" class="px-4 py-2 bg-gray-500 text-white rounded-md mr-2">Send message</button>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">+0917292812</button>
      </div>
    </form>
  </div>
</div>

<div class="w-[1200px] mx-auto p-6 text-white rounded-lg shadow-md py-32">
  <h2 class="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
  <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
    <button @click="toggleAnswer(index)" class="w-full text-left text-lg text-white py-2 border pl-6">
      {{ faq.question }}
      <span class="float-right mr-6 px-2 rounded-lg bg-white text-black">
        {{ faq.isOpen ? '-' : '+' }}
      </span>
    </button>
    <div v-if="faq.isOpen" class="text-white border p-2 pl-6">
      {{ faq.answer }}
    </div>
  </div>
</div>
 
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
        faqs: [
        {
          question: 'What is your return policy?',
          answer: 'You can return any item within 30 days of purchase if you are not satisfied with it.',
          isOpen: false,
        },
        {
          question: 'How long does shipping take?',
          answer: 'Shipping typically takes 5-7 business days, depending on your location.',
          isOpen: false,
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we offer international shipping to select countries. Shipping fees may apply.',
          isOpen: false,
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order has been shipped, you will receive an email with a tracking number and a link to track your order.',
          isOpen: false,
        },
        {
          question: 'Can I change or cancel my order?',
          answer: 'You can change or cancel your order within 24 hours of placing it by contacting our customer support.',
          isOpen: false,
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept Visa, MasterCard, American Express, and PayPal.',
          isOpen: false,
        },
      ],
        isLoading: true,
        form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    };
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
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
    handleSubmit() {
      alert('Form submitted with: ' + JSON.stringify(this.form));
      // Handle form submission logic here
    },
    handleReset() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }
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

.blur-effect {
  box-shadow: 0px 2px 0px 0px #131518;
  background-color: rgba(17, 20, 27, 0.8); /* Semi-transparent background */
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(3px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(3px); /* For Safari */
}
</style>