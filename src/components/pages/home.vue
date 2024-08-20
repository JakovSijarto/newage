<template>
    <div class="min-h-[100vh] bg-[#0c0f16] overflow-y-hidden " id="totp">

      <div class="h-[100vh] relative">
    <video autoplay muted loop id="bg-video" class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="../../assets/bg-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay-content flex justify-center items-center w-[50%] max-[800px]:w-full h-full px-4 sm:px-8">
      <!-- Logo on the left -->
      <ul class="absolute h-auto bg-transparent shadow-custom text-center  max-[800px]:flex max-[800px]:items-center max-[800px]:flex-col">
        <li class="text-[2.5rem] sm:text-[5rem] leading-[1.2rem] mb-[10px] sm:mb-[20px] text-white text-outline font-semibold">NEW AGE</li>
        <li class="pt-2 sm:pt-5 pb-4 sm:pb-8 text-white text-left max-[800px]:text-center">where the magic happens.</li>
        <li  v-scroll-to="'#contact'" class="text-white border cursor-pointer  py-2 px-4 flex flex-row items-center w-[180px] rounded-r-[20px] max-[800px]:rounded-r-[0px] max-[800px]:w-[150px]">
          Talk to us 
          <span class="pl-2">
            <img src="../../assets/contactphone.svg" alt="" class="w-[20px] sm:w-[32px] h-[20px] sm:h-[32px]">
          </span>
        </li>
      </ul>
    </div>
  </div>
  <navbar />   

  <div class="text-center text-white">
  <p id="our_work" class="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-tight sm:leading-tight md:leading-tight Barlow_Condensed pt-8 sm:pt-16 md:pt-24 pb-4 sm:pb-6 md:pb-8 font-bold">
    Our Work
  </p>
  <p class="px-4 sm:px-8 md:px-0 text-[14px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto">
    People who have new-age websites are always up-to-date
  </p>
  
  <div class="flex flex-col items-center w-full pt-8 sm:pt-16 md:pt-24 space-y-8">
    
    <!-- First row of items -->
    <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-[1200px] px-4 sm:px-8 md:px-0">
      <a href="https://fo4a.eu/" class="flex flex-col items-center border rounded-lg">
        <div class="overflow-hidden rounded-lg shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/fo4a.png" class="h-full w-full object-cover rounded-lg" alt="Fo4a.eu">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          Fo4a.eu
          <img src="../../assets/click.svg" alt="Click icon" class="ml-2 md:ml-3 w-[18px] sm:w-[20px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[24px]">
        </div>
      </a>

      <a href="https://www.groomingstudio-canisart.hr/" class="flex flex-col items-center border rounded-lg">
        <div class="overflow-hidden rounded-lg shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/canisart.png" class="h-full w-full object-cover rounded-lg" alt="CanisArt.com">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          CanisArt.com
          <img src="../../assets/click.svg" alt="Click icon" class="ml-2 md:ml-3 w-[18px] sm:w-[20px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[24px]">
        </div>
      </a>

      <a href="https://apsopichr.com/#/" class="flex flex-col items-center border rounded-lg">
        <div class="overflow-hidden rounded-lg shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/apsopic.png" class="h-full w-full object-cover rounded-lg" alt="APSopic.com">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          APSopic.com
          <img src="../../assets/click.svg" alt="Click icon" class="ml-2 md:ml-3 w-[18px] sm:w-[20px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[24px]">
        </div>
      </a>
    </ul>

    <!-- Second row of items -->
    <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6  w-full max-w-[1200px] px-4 sm:px-8 md:px-0">
      <a href="https://jakovsijarto.github.io/cleaning_club/" class="flex flex-col items-center border rounded-lg">
        <div class="overflow-hidden rounded-lg shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/cleaning-club.png" class="h-full w-full object-cover rounded-lg" alt="CleaningClub.com">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          CleaningClub.com
          <img src="../../assets/click.svg" alt="Click icon" class="ml-2 md:ml-3 w-[18px] sm:w-[20px] md:w-[24px] h-[18px] sm:h-[20px] md:h-[24px]">
        </div>
      </a>

      <li class="flex flex-col items-center border rounded-lg">
        <div class="overflow-hidden rounded-lg shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/pizzerija.png" class="h-full w-full object-cover rounded-lg" alt="Pizzeria">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          Pizzeria <span class="text-[10px] sm:text-[12px] md:text-[14px] pl-1">(template)</span>
        </div>
      </li>

      <li class="flex flex-col items-center border rounded-lg ">
        <div class="overflow-hidden shadow-lg w-full h-[180px] sm:h-[240px] md:h-[300px]">
          <img src="../../assets/pa.png" class="h-full w-full object-cover rounded-lg" alt="Travel agency">
        </div>
        <div class="flex items-center justify-center py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px]">
          Travel agency <span class="text-[10px] sm:text-[12px] md:text-[14px] pl-1">(template)</span>
        </div>
      </li>
    </ul>
  </div>
</div>

  <div id="about_us" class="mt-12 sm:mt-24 text-white text-center flex flex-col items-center bg-[#0a0d13] px-4 sm:px-0">
    <p  class="pt-10 sm:pt-20 mb-4 sm:mb-6 border-b border-[#74D5AF] max-w-[200px]">
      about us
    </p>
    <p class="text-[2rem] sm:text-[4rem] leading-[1.2rem] sm:leading-[1.5rem] Barlow_Condensed pb-2 sm:pb-4 font-bold">
      Our Story
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[7em] py-8 sm:py-16">
      <img src="../../assets/aboutusglobe.png" alt="Globe image" class="w-[150px] sm:w-[300px]">
      <p class="text-left text-[12px] sm:text-[14px] w-full sm:w-[500px]">
        Hi there, I'm Jakov, a dedicated web designer and developer at NewAge Agency. My expertise lies in creating exceptional websites using Vue, Tailwind, and Voiceflow. At NewAge, we're committed to transforming your vision into a reality, delivering a website or online store that perfectly represents your brand, enhances your visibility, and drives conversions. With a strong emphasis on client satisfaction, I'll utilize my skills to ensure your project's success. Elevate your online presence with a beautiful, functional, and uniquely tailored website that aligns with your business goals. Partner with NewAge Agency today, and let's work together to drive your business growth!
        <br>
        <button v-scroll-to="'#contact'" class="mt-4 sm:mt-8 border py-2 px-4 sm:px-6 animation-button">CONTACT US</button>
      </p>
    </div>
  </div>

  <div id="services" class="pt-8 text-white text-center flex flex-col items-center">
  <p class="pt-12 sm:pt-20 mb-6 border-b border-[#74D5AF]">services</p>
  <p class="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-[1.2rem] sm:leading-[1.5rem] Barlow_Condensed pb-6 sm:pb-8 font-bold">
    What we do
  </p>
  <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[7em] w-full max-w-[1000px] py-8 sm:py-12 md:py-16 px-4">
    
    <!-- Web Development Section -->
    <div class="border w-full md:w-[48%] h-auto md:h-[500px] relative p-6 sm:pl-8 sm:pt-8 text-left max-[400px]:h-[350px]">
      <div class="absolute bottom-0 right-0 flex p-2">
        <img src="../../assets/vueicon.svg" alt="" class="w-10 h-10 sm:w-12 sm:h-12">
        <img src="../../assets/tailwind.svg" alt="" class="w-10 h-10 sm:w-12 sm:h-12 ml-2">
      </div>
      <div class="flex flex-row items-center">
        <img src="../../assets/websitecreation.svg" alt="">
        <p class="text-[18px] sm:text-[20px] md:text-[23px] pl-4 font-bold">Web Development</p>
      </div>
      <ul class="text-[16px] sm:text-[18px] md:text-[20px]">
        <li class="pt-4 sm:pt-6 text-[14px] sm:text-[16px] pb-2">Features:</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">On page SEO</li>
        <li class="flex items-center gap-2 py-2 sm:py-4"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Web-Shop</li>
        <li class="flex items-center gap-2 pb-2 sm:pb-4"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Hosting</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Responsive design</li>
      </ul>
    </div>

    <!-- AI Automation Section -->
    <div class="border w-full md:w-[48%] h-auto md:h-[500px] relative p-6 sm:pl-8 sm:pt-8 text-left max-[400px]:h-[350px]">
      <div class="absolute bottom-0 right-0 flex p-2">
        <img src="../../assets/vf.png" alt="" class="h-10 sm:h-12">
      </div>
      <div class="flex flex-row items-center">
        <img src="../../assets/ailogo.svg" alt="">
        <p class="text-[18px] sm:text-[20px] md:text-[23px] pl-4 font-bold">AI Automation</p>
      </div>
      <ul class="text-[16px] sm:text-[18px] md:text-[20px]">
        <li class="pt-4 sm:pt-6 text-[14px] sm:text-[16px] pb-2">Features:</li>
        <li class="flex items-center gap-2"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Lead Capture & CRM Integration</li>
        <li class="flex items-center gap-2 py-2 sm:py-4"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Support Ticket Management</li>
        <li class="flex items-center gap-2 pb-2 sm:pb-4"><img src="../../assets/star.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8">Appointment Setting Build</li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-[#0a0d13] text-center flex flex-col items-center text-white pb-16 sm:pb-24" id="contact">
    <p class="pt-10 sm:pt-20 mb-4 sm:mb-8 border-b border-[#74D5AF] ">contact us</p>
    <p class="text-[3rem] sm:text-[4rem] leading-[1.2rem] sm:leading-[1.5rem] Barlow_Condensed pb-4 sm:pb-8 font-bold pt-6">Get In Touch</p>
    <p class="text-[12px] sm:text-[14px] pb-8 sm:pb-12 w-[90%] sm:w-[70%] mx-auto py-4 ">If you have any type of questions or concerns feel free to reach out, there are no stupid questions :)</p>
    <div class="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[1200px] mx-auto p-4 sm:p-6 border shadow-md">
      <form @submit.prevent="handleSubmit" class="w-full flex flex-col items-center py-6 sm:py-12">
        <div class="flex flex-col sm:flex-row w-full sm:w-[80%] gap-4 sm:gap-12 justify-between">
          <div class="mb-4 text-left w-full">
            <label for="name" class="block text-[16px] sm:text-[20px] pb-2 text-white">Name</label>
            <input type="text" id="name" placeholder="Ex. Jakov Sijarto" v-model="form.name" class="w-full px-3 py-2 border rounded-md h-[48px] sm:h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4 text-left w-full">
            <label for="email" class="block text-[16px] sm:text-[20px] pb-2 text-white">Email Address</label>
            <input type="email" id="email" placeholder="Ex. contact@jakovsijarto.com" v-model="form.email" class="w-full px-3 py-2 border rounded-md h-[48px] sm:h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row w-full sm:w-[80%] gap-4 sm:gap-12 justify-between pt-4">
          <div class="mb-4 text-left w-full">
            <label for="phone" class="block text-[16px] sm:text-[20px] pb-2 text-white">Phone Number</label>
            <input type="tel" id="phone" placeholder="Ex. +0917292812" v-model="form.phone" class="w-full px-3 py-2 border rounded-md h-[48px] sm:h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4 text-left w-full">
            <label for="subject" class="block text-[16px] sm:text-[20px] pb-2 text-white">Subject</label>
            <input type="text" id="subject" placeholder="Ex. New Project" v-model="form.subject" class="w-full px-3 py-2 border rounded-md h-[48px] sm:h-[58px] border-white bg-[#0A0D13] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div class="mb-4 text-left pt-4 w-full sm:w-[80%]">
          <label for="message" class="block text-[16px] sm:text-[20px] pb-2 text-white">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Type your message here..." class="w-full px-3 py-2 border rounded-md h-[120px] sm:h-[160px] focus:outline-none border-white bg-[#0A0D13] focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button type="submit" @click="handleReset" class="px-4 py-2 text-white rounded-md bg-backdrop w-full sm:w-auto animation-button">Send</button>
          <a href="tel:+0917292812" class="px-4 py-2 cursor-pointer text-white rounded-md bg-backdrop w-full sm:w-auto animation-button">+091 729 2812</a>
        </div>
      </form>
    </div>
  </div>

  <div id="faq" class="w-full sm:w-[90%] lg:w-[80%] xl:w-[1200px] mx-auto p-4 sm:p-6 text-white rounded-lg shadow-md py-12 sm:py-32">
    <h2 class="text-center pb-4 ">faq</h2>
    <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Have a Question?</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-2 sm:mb-4">
      <button @click="toggleAnswer(index)" class="w-full text-left text-base sm:text-lg text-white py-2 border pl-4 sm:pl-6">
        {{ faq.question }}
        <span class="float-right mr-4 sm:mr-6 px-2 rounded-lg bg-white text-black">
          {{ faq.isOpen ? '-' : '+' }}
        </span>
      </button>
      <div v-if="faq.isOpen" class="text-white border p-2 pl-4 sm:pl-6 py-4 sm:py-6">
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
          question: 'How long does it take to develop a full website?',
          answer: "The timeline varies based on the complexity and requirements of each project. Whether you need just development or both design and development plays a role. Simple development tasks can be completed in as little as one or two days, while more intricate development spanning multiple pages might take from a week to 10 days. If you're looking for the full package – both design and development – due to my commitment to ensuring quality over speed, it could take up to a 3 weeks. However, I always prioritize delivering a top-notch product within a reasonable timeframe. After we discuss your specific needs, I'll be able to provide a more precise estimate.",
          isOpen: false,
        },
        {
          question: "How much it will cost?",
          answer: "The cost of a website is shaped by various elements. Key among them is the selection of services—be it Web Design, Development, SEO, or all three of them. The number of pages and the timeframe you have in mind can also influence the price. If you're supplying content, it might affect the cost differently than if I assist in its creation. Features, from specialized functionalities to custom animations, and the need for custom coding, can adjust the pricing. Integrations with tools like Google Ads or Mailchimp also factor in. Given these considerations, it's best to discuss your specific needs for a precise quote. Rest assured, I aim to offer value at competitive prices.",
          isOpen: false,
        },
        {
          question: "Will my website be adjusted for every device?",
          answer: "Absolutely! Your website will be designed responsively, ensuring it looks and functions seamlessly on every device, from desktops to smartphones and tablets.",
          isOpen: false,
        },
        {
          question: "How do you ensure the website you create is unique to my brand?",
          answer: "I believe in a collaborative approach. By understanding your brand's values, goals, and audience, I craft a website that's a true digital extension of your brand. Each project is a blend of your vision and my expertise.",
          isOpen: false,
        },
        {
          question: "How do you handle post-launch support or updates?",
          answer: "Client satisfaction is my top priority. After launching, I offer a period of post-launch support to address any tweaks or issues. For long-term updates or maintenance, we can discuss a separate agreement that fits your needs.",
          isOpen: false,
        },
        {
          question: "How do we get started?",
          answer: "Reach out to me through the contact form on this website or drop me a message via phone number. I'm excited to discuss your project and see how we can bring your digital dreams to life!",
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
.bg-backdrop{
  box-shadow: 0px 2px 0px 0px #181b21;
  background-color: rgba(17, 20, 27, 0.1); /* Semi-transparent background */
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(3px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(3px); /* For Safari */
}
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