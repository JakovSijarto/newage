<template>
    <div>
    <nav :class="{ 'onScroll': !view.topOfPage}" class="px-8 max-[430px]:bg-[#11141B]">
      <div class="flex justify-between items-center w-[1200px] max-[430px]:absolute max-[430px]:w-[100%]  max-[430px]:px-8 max-[430px]:py-[1rem]" :class="{'bg-color-new':view.isActive}">
          <li><router-link to="/" tag="button"><img src="../../assets/logo.svg" class="w-[64px] "></router-link></li>
        <div class="flex justify-between items-center max-[430px]:hidden ">
          <li class="transform hover:translate-y-1 transition duration-500 ease-in-out" ><router-link to="/" tag="button">Naslovnica</router-link></li>
          <li class="mx-8 transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/about" tag="button">O nama</router-link></li>
          <li class="transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/contact" tag="button">Kontakt</router-link></li>
        </div>
        <ul
            id="hamburger-menu"
            :class="{ active: view.isActive,'onScroll': !view.topOfPage }"
            class=" flex justify-center items-center flex-col text-center mt-64 min-[431px]:hidden mr-8 "
            
            v-if="view.isActive"
          >
            <li class="min-[431px]:hidden" id="navbar_naslovnica">
              <router-link to="/" tag="button">Naslovnica</router-link>
            </li>
            <li class="my-8 min-[431px]:hidden" id="navbar_naslovnica">
              <router-link to="/about" tag="button">O nama</router-link>
            </li>
            <li class="min-[431px]:hidden" id="navbar_naslovnica">
              <router-link to="/contact" tag="button">kontakt</router-link>
            </li>
          </ul>
        <button
              type="button"
              id="navbar-toggle"
              aria-controls="navbar-menu"
              :class="{ active: view.isActive }"
              class="w-[30px] h-[30px] flex justify-between items-center min-[431px]:hidden"
              @click="showMobile"
            >
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[431px]:hidden z-20" 
                :class="{
                  'rotate-45': view.isActive,
                  ' -translate-y-1.5': !view.isActive,
                }"
              ></span>
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[431px]:hidden z-20"
                :class="{ 'opacity-0': view.isActive }"
              ></span>
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[431px]:hidden z-20"
                :class="{
                  '-rotate-45': view.isActive,
                  ' translate-y-1.5': !view.isActive,
                }"
              ></span>
            </button>
           
        
      </div>
      
    </nav>
  </div>
  </template>
  
  <script>
    export default{
      data () {
      return {
        view: {
          topOfPage: true,
          isActive: false
        }
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(){
        if(window.pageYOffset>0){
          if(this.view.topOfPage) this.view.topOfPage = false
        } else {
          if(!this.view.topOfPage) this.view.topOfPage = true
        }
      },
      showMobile(){
        this.view.isActive= !this.view.isActive
      }
      }
    }
  </script> 
  
  <style scoped>
  #hamburger-menu {
    height:30vh;
    transition: all 0.4s ease-in-out;
  }
  .active + #navbar-menu {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    visibility: visible;
  }
  
  .active + #navbar-menu .navbar-links {
    padding: 1em;
  }
  .active {
    transition: all 0.4s ease-in-out;
  }
    nav{
      position: fixed;
      z-index: 998;
      top:0;
      width: 100%;
      height: 100px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease-in-out;
  
    }
    .onScroll{
      box-shadow: 0px 2px 0px 0px #181b21;
      background-color: #11141B;
      transition: all .2s ease-in-out;
    }
    .bg-color-new{
      background-color: #11141B;
    }
    li {
          cursor: pointer;
          font-weight: 700;
          list-style-type: none;
          color: white;
          font-size:14px;
        }
      
     input[type = "checkbox"] {
    display: none;
    visibility: hidden;
  }
  
  .bar {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
  
  .bar span {
    position: absolute;
    width: 35px;
    height: 4px;
    background: #f1faee;
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  }
  
  .bar span.top {
    top: 10px;
  }
  
  .bar span.middle {
    top: 22px;
  }
  
  .bar span.bottom {
    bottom: 2px;
  }
  
  input[type]:checked ~ span.top {
    transform: rotate(45deg);
    transform-origin: top left;
    width: 38px;
    left: 3px;
  }
  
  input[type]:checked ~ span.bottom {
    transform: rotate(-45deg);
    transform-origin: top left;
    width: 38px;
    bottom: -1px;
    box-shadow: 0 0 10px #495057;
  }
  
  input[type]:checked ~ span.middle {
    transform: translateX(-20px);
    opacity: 0;
  }
  .router-link-exact-active {
    border-bottom: 2px solid #ffffff;
  }
  
  </style>
  