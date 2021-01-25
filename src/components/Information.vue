<template >
            <div v-if="type === 'left'">
                <div class="columns">
                <div class="column">
                <img :class="type" :src="getImgUrl(image)" :align="type"></div>
                <div class="column is-one-quarte"> 
                    <h1 class="title style-title-right" align="left" > {{titulo}}
                    </h1>
                    <h1 class =" style-text-right"  align="left" > 
                        <div v-for="code in text.split('<br>')" :key=code>{{code}} </div>
                    </h1>
                    <router-link :to="Path">
                    <button class="button-information button is-info " style=" margin-inline-start: 192px;"> {{boton}} </button>
                    </router-link>
                </div>
                </div>
            </div>
            <div v-else>
                <div class="columns">
                <div class="column is-one-quarte"> 
                    <h1 class="title style-title-left" align="left"> {{titulo}}
                    </h1>
                    <h1 class =" style-text-left"  align="left" > 
                        <div v-for="code in text.split('<br>')" :key=code>{{code}} </div>
                    </h1>
                     <router-link :to="Path">
                        <button class="button-information button is-success " style="margin-inline-start: 385.226px; " > {{boton}} </button>
                     </router-link> 
                </div>
                <div class="column">
                <img :class="type" :src="getImgUrl(image)" :align="type"></div>
            
            </div>
        </div> 
        
  
    
</template>

<script>

export default {
  props:
  {
      "type": String,
      "image" : String,
      "text" : String,
      "boton" : String,
      "format" :String,
      "titulo":String,
      "Path" : String,
  },
  
  data () {

  }
  ,
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  }
  

}
</script>

<style>
    .right{
        border-radius: 1000px 0px 0px 1000px;
        width: 1300px;
        height: 450px;
        object-fit: cover;
        margin: 2rem 0rem 2rem 20rem;
    }
    .style-title-right{
        font-size: 2.5em; 
        padding: 120px 2px 0px; 
        line-height: 1.5; 
        margin-left: 192px; 
    }
    .style-text-right{
        font-size: 1.65em; 
        padding: 20px 2px ; 
        line-height: 1.5; 
        margin-inline-end: 385.226px; 
        margin-inline-start: 192px;
    }

    .left{
        border-radius: 0px 1000px 1000px 0px;
        width: 1300px;
        height: 450px;
        object-fit: cover;
        margin: 2rem 0rem 2rem 0rem;
    } 
    .style-title-left{
        font-size: 2.5em; 
        margin-inline-start: 385.226px; 
        margin-top:120px; 
        line-height: 1.5;
    }
    .style-text-left{
        font-size: 1.65em; 
        padding: 20px 2px ; 
        margin-inline-start: 385.226px; 
        margin-inline-end: 120px; 
        line-height: 1.5;
    }
    
</style>