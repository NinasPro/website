<template>
    <div class="memories-container">
        <div class="container">
            <p class="title" align="center"> {{$t('footer.memory')}} </p>
            <div class="columns memories-item is-vcentered" v-for="(memorie, i) in datos" :key="i">
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

import * as Memories from '../data/about.js';
import i18n from '../i18n'

export default {
    data(){
    const lang=`${i18n.locale}`
    const data = Memories.default
        return{
            data,
            lang,
        }
    },
    computed:
    {
        //data according to language
        datos: function(){
            if(this.lang == "en") {
                return this.data.en.memory
            } else {
                return this.data.es.memory
            }
            
        }
    }
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
