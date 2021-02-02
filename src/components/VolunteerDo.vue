<template>
    <div class="container">
    <div class="columns is-multiline is-mobile" >
      <div class="column is-3" v-for="item in data" :key="item.name" >
          <img  class="image-bordes" :src="getImgUrl(item.image)" width="60%" >
          <h1 class="title title-style" > {{item.title}}</h1>
          <ol class="star">
          <li v-for="linea in item.lista" :key="linea">
              {{linea}}
          </li>
          </ol>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    data(){
        const data = [
        {'title':'Titulo 1','image':'ninastic.jpg','lista':['Linea 1','Linea 2','Linea 3']},
        {'title':'Titulo 2','image':'ninastic.jpg','lista':['Linea 1','Linea 2','Linea 3']},
        {'title':'Titulo 3','image':'ninastic.jpg','lista':['Linea 1','Linea 2','Linea 3']},
        {'title':'Titulo 4','image':'ninastic.jpg','lista':['Linea 1','Linea 2','Linea 3']},
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
    border-radius: 50% 50% 50% 50%;
    margin-inline-start: 20px;
    margin-block-end: 20px;
}
ol.star {
  list-style-type: circle;
  padding-left: 3rem;
  margin-inline-start: 20px;
  margin-block-end: 20px;
}
.title-style{
    margin-inline-start: 50px;
    
}
</style>