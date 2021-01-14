<template >
    
        
        <div >
            <img :class="type" :src="getImgUrl(image)" :align="type"> 
            <h1 class ="title titul"  align="center" > 
                <div v-for="code in text.split('<br>')" :key=code>{{code}} </div>
            </h1>
            <button class="button is-info " style="float:right;"> {{a}} </button>
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
    .titul
    {
        padding: 200px 150px 80px ;
    }
    .color
    {
        color: indigo;
    }
    .center{
        text-align: center;
    }
</style>