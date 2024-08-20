<template>
    <footer class="">
      <div class="w-full flex min-h-[30em] max-[800px]:min-h-[35em] bg-[#151921] half-bg flex justify-center items-center overflow-x-hidden">
        <div class=" flex justify-between items-center w-[1300px] max-[800px]:flex-col ">
          <div class="max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:min-w-[30em] max-[800px]:min-w-[368px] max-[390px]:min-w-[auto]">
            <img src="../../assets/logo_nobg.png" alt="" class="object-fit w-[250px] h-[250px]">
            
          </div>
          <div class="min-w-[30em] mr-8  max-[800px]:mx-8 max-[800px]:mb-[2em] max-[800px]:min-w-[auto]">
            
            <ul class="flex mt-6 flex-col text-white gap-[10px] text-[14px] text-center items-center">
              <li class="cursor-pointer" v-scroll-to="'#about_us'" >About Me</li>
              <li class="cursor-pointer" v-scroll-to="'#our_work'">Our Work</li>
              <li class="cursor-pointer" v-scroll-to="'#services'">Services</li>
              <li class="cursor-pointer" v-scroll-to="'#faq'">FAQ</li>
              <li class="cursor-pointer pb-12" v-scroll-to="'#totp'">Top of the page</li>
              <ul class="w-[120px] flex gap-[0.5em] flex-row justify-center">
                <li class="p-[14px] rounded-full cursor-pointer transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer " style="background: rgba(255, 255, 255, 0.01);"><a href="https://www.instagram.com/newage_eu/" target="_blank"><img src="../../assets/ig_icon.svg" alt="" class="w-[18px] h-[18px] "></a></li>
                <li class="p-[14px] rounded-full cursor-pointer transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer" style="background: rgba(255, 255, 255, 0.01);"><a href="mailto:jakov.sijarto2@gmail.com"><img src="../../assets/gmail_icon.svg" alt="" class="w-[18px] h-[18px]"></a></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

        <div class="w-full h-[3em] bg-[#0c0f16] flex justify-center items-center">
          <p class="text-white">
            © 2024 NewAge
          </p>
        </div>
    </footer>
</template>

<script>

  export default{
    methods: {
      refresh_page(){
        window.location.reload();
      }
    }
  }
</script>