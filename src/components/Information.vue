<template >
    
        
        
            <div v-if="type === 'left'">
                <div class="columns">
                <div class="column">
                <img :class="type" :src="getImgUrl(image)" :align="type"></div>
                <div class="column is-one-quarte"> 
                    <h1 class ="title style-title"  align="center"  > 
                        <div v-for="code in text.split('<br>')" :key=code>{{code}} </div>
                    </h1>
                    <button class="button is-info " style="float:right;"> {{a}} </button>
                </div>
                </div>
            </div>
            <div v-else>
                <div class="columns">
                <div class="column is-one-quarte"> 
                <h1 class ="title style-title"  align="center"  > 
                    <div v-for="code in text.split('<br>')" :key=code>{{code}} </div>
                </h1>
                <button class="button is-success " style="float:right;"> {{a}} </button>
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
      "a" : String,
      "format" :String,
      /*"Path" : String,*/
  },
  
  data () {
    const data = [
        {'image':'@/assets/ninastic.jpg'}
    ]
    return {
      data,
    }
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
        margin: 2rem 0rem 2rem 0rem;
    }
    .left{
        border-radius: 0px 1000px 1000px 0px;
        width: 1300px;
        height: 450px;
        margin: 2rem 0rem 2rem 0rem;
    }
    .style-title
    {
        padding: 120px 2px ;
    }
    .color
    {
        color: indigo;
    }
    
</style>