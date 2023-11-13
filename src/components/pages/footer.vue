<template>
    <footer class="">
      <div class="w-full flex min-h-[30em] max-[800px]:min-h-[35em] bg-[#151921] half-bg flex justify-center items-center overflow-x-hidden">
        <div class=" flex justify-between items-center w-[1300px] max-[800px]:flex-col ">
          <div class="ml-8 max-[800px]:flex max-[800px]:flex-col max-[800px]:min-w-[30em] max-[800px]:mx-8 max-[800px]:my-8 max-[800px]:min-w-[368px] max-[390px]:min-w-[auto]">
            <img src="../../assets/logo.svg" alt="" class="h-[55px] w-[50px] mb-[1.5rem] ">
            <p class="font-bold text-[white] text-[12px] mb-[5px]">Email: <a href="mailto:jakov.sijarto2@gmail.com?subject=subject&cc=jakov.sijarto2@gmail.com" target="_blank" class="font-normal ml-[10px]">jakov.sijarto2@gmail.com</a></p> 
            <p class="font-bold text-[white] text-[12px]">Mobitel: <a href="tel:+385917292812" class="font-normal ml-[10px]">(+385) 91 729 2812</a></p> 
            <ul class="flex mt-6">
              <li class="p-[14px] rounded-full cursor-pointer transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer mr-2" style="background: rgba(255, 255, 255, 0.01);"><a href="https://www.instagram.com/newage_development/" target="_blank"><img src="../../assets/ig_icon.svg" alt="" class="w-[18px] h-[18px] "></a></li>
              <li class="p-[14px] rounded-full cursor-pointer transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer" style="background: rgba(255, 255, 255, 0.01);"><a href="mailto:jakov.sijarto2@gmail.com?subject=subject&cc=jakov.sijarto2@gmail.com"><img src="../../assets/gmail_icon.svg" alt="" class="w-[18px] h-[18px]"></a></li>
            </ul>
          </div>
          <div class="min-w-[30em] mr-8  max-[800px]:mx-8 max-[800px]:mb-[2em] max-[800px]:min-w-[auto]">
            <p class="text-[11px] tracking-[0.4em] pl-[8px] text-white Barlow_Condensed py-[3px] mb-[30px]" style="background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 10%,  transparent 10%,	transparent 100%);">NEWSLETTER</p>
            <p class="text-[12px] mb-[10px] text-[#999]">Subscribe to our newsletter!</p>
            <form action="" class="flex flex-row mb-[50px] max-[370px]:flex-col">
              <input type="email" name="" id="" class="p-[15px] w-full b-0 text-white" style="background: rgba(255, 255, 255, 0.01);">
              <button type="submit" @click="refresh_page" class="py-[15px] px-[30px] b-0 text-[#75dab4] tracking-[1px] text-[13px] max-[370px]:mt-[1em] max-[370px]:rounded-[6%] transition-footer-button" style="background: rgba(255, 255, 255, 0.02);">SUBSCRIBE</button>
            </form>

          </div>
        </div>
      </div>

        <div class="w-full h-[3em] bg-[#0c0f16] flex justify-center items-center">
          <p class="text-white">
            © 2023 NewAge
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