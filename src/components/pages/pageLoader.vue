<script>
    export default{
        data(){
            return{
                isLoaded:false
            }
        },
        mounted(){
            document.onreadystatechange = () => {
                if(document.readyState == "complete"){
                    this.isLoaded = !this.isLoaded;
                }
                
            }
            this.isLoaded = false
        }
    }
</script>

<template>
    <div class="main-loader" v-if="!isLoaded">
		
	
    </div>
</template>

<style scoped>
    .main-loader{
        display:flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        height: 100vh;
        background-color: rgb(190, 190, 190);
        z-index: 999;
    }


</style>