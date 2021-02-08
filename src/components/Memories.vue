<template>

   <div id="memories" class="memorie-container">
        <p class="title" align="center"> Memorias</p>
        <div class="columns memoria-style" v-for="memorie in data" :key="memorie.title">
            <p class="title column" align="left">{{memorie.title}}</p>
            <a class="button column is-one-fifth" :href="memorie.url" target="_blank"> <vue-fontawesome :icon="['fas', 'file-pdf']"/> {{memorie.title}} </a>
        </div>
        
    </div>
</template>

<script>

import * as Memories from '../data/memories.js';

export default {
    data(){
    const data = Memories.default.data
        return{
            data,
        }
    },
}
</script>
    
<style scoped>
.memorie-container{
    background-color:#fdca36 ;
    padding-top: 4%;
    padding-bottom: 4%;
    margin-bottom: 5%;
}

.memoria-style{
    margin-left: 15%;
    margin-right: 16%;
    margin-top: 4%;
    margin-bottom: 2%;
    border-color: black;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    
}

</style>