<template>
    <div class="container">
    <div class="columns is-multiline is-mobile" >
      <div class="column is-3" v-for="item in data" :key="item.name" >
          <img  class="image-bordes" :src="getImgUrl(item.image)" width="60%" >
          <h1 class="title title-style" > {{item.title}}</h1>
          <p class="text-style"> {{item.text}}</p>
          <button class="button is-success style"> Ingresa </button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    data(){
        const data = [
        {'title':'Titulo 1','image':'ninastic.jpg','text':'Aqui debe ir toda la información que sea relevante para el proyecto donde se pueden involucrar'},
        {'title':'Titulo 2','image':'ninastic.jpg','text':'Aqui debe ir toda la información que sea relevante para el proyecto donde se pueden involucrar'},
        {'title':'Titulo 3','image':'ninastic.jpg','text':'Aqui debe ir toda la información que sea relevante para el proyecto donde se pueden involucrar'},
        {'title':'Titulo 4','image':'ninastic.jpg','text':'Aqui debe ir toda la información que sea relevante para el proyecto donde se pueden involucrar'},
           ]
        return {
        data,
        }
        
    },
    methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 0px;
  padding-left: 20px;
}

.image-bordes{
    margin-inline-start: 20%;
    margin-block-end: 7%;
}
.text-style {
  
  margin-inline-start: 14%;
  margin-inline-end: 4%;
 
}
.title-style{
    margin-inline-start: 30%;
}

button.style{
    margin-inline-start: 26%;
    margin-top: 8%;
}
</style>   