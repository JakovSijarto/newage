<template>
    <div>
    <nav :class="{ 'onScroll': !view.topOfPage}" class="px-8  backdrop-blur-sm bg-[#fff] h-full">
      <ul
            id="hamburger-menu"
            :class="{ active: view.isActive,'onScroll': !view.topOfPage}"
            class=" flex justify-center items-center flex-col text-center mt-[17.6em] min-[650px]:hidden w-full absolute"
            
            v-if="view.isActive"
          >
            <li class="min-[650px]:hidden" id="navbar_naslovnica">
              <router-link to="/" tag="button">Home</router-link>
            </li>
            <li class="my-8 min-[650px]:hidden" id="navbar_naslovnica">
              <router-link to="/about" tag="button">About Us</router-link>
            </li>
            <li class="min-[650px]:hidden" id="navbar_naslovnica">
              <router-link to="/contact" tag="button">Contact</router-link>
            </li>
          </ul>
      <div class="flex justify-between  items-center w-[1200px]">
        
          <li><router-link to="/" tag="button"><img src="../../assets/logo_nobg.png" class="w-[186px] max-[470px]:w-[130px]"></router-link></li> 
        <div class="flex justify-between w-[25%] max-[1200px]:w-auto items-center max-[650px]:hidden">
          <li class="transform hover:translate-y-1 transition duration-500 ease-in-out" ><router-link to="/" tag="button">Our work</router-link></li>
          <li class="max-[1200px]:mx-8 transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/about" tag="button">About Us</router-link></li>
          <li class="max-[1200px]:mr-8 transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/contact" tag="button">Services</router-link></li>
          <li class="transform hover:translate-y-1 transition duration-500 ease-in-out"><router-link to="/contact" tag="button">FAQ</router-link></li>
        </div>
        <li class="w-[186px] max-[1200px]:hidden"><router-link to="/contact" tag="button"><div class="border flex justify-center py-2">Contact us</div></router-link></li>

        
        <button
              type="button"
              id="navbar-toggle"
              aria-controls="navbar-menu"
              :class="{ active: view.isActive }"
              class="w-[30px] h-[30px] flex justify-between items-center min-[650px]:hidden"
              @click="showMobile"
            >
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[650px]:hidden z-20" 
                :class="{
                  'rotate-45': view.isActive,
                  ' -translate-y-1.5': !view.isActive,
                }"
              ></span>
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[650px]:hidden z-20"
                :class="{ 'opacity-0': view.isActive }"
              ></span>
              <span
                aria-hidden="true"
                class="bg-[white] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out min-[650px]:hidden z-20"
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
  nav {
  position: fixed;
  z-index: 998;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: transparent; /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(3px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(3px); /* For Safari */
}

.onScroll {
  box-shadow: 0px 2px 0px 0px #181b21;
  background-color: rgba(17, 20, 27, 0.8); /* Semi-transparent background */
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(3px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(3px); /* For Safari */
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

  
  </style>
  