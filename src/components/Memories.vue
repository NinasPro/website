<template>
    <div class="memories-container">
        <div class="container">
            <p class="title" align="center"> Memorias </p>
            <div class="columns memories-item is-vcentered" v-for="(memorie, i) in data" :key="i">
                <div class="column" align="left">
                    <p class="memories-item-name"> {{memorie.title}} </p>
                </div>
                <div class="column is-one-fifth">
                    <b-button tag="a" 
                        :href="memorie.url" 
                        target="_blank"
                        rounded> 
                        <vue-fontawesome :icon="['fas', 'file-pdf']"/> 
                        Ver PDF
                    </b-button>
                </div>
            </div>   
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
    
<style lang="scss" scoped>
.memories-container {
    background-color:#fdca36 ;
    padding: 50px 0;
    margin: 30px 0 0 0;

    .memories-item {
        margin: 20px 20%;
        border-bottom: 1px #363636 solid; 
        
        .memories-item-name {
            font-size: 20px;
            font-weight: bold;
        }
    }
}

</style>