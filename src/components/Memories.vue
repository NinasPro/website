<template>

   <div id="memories" class="memorie-container">
        <p class="title" align="center"> {{$t('footer.memory')}}</p>
        <div class="columns memoria-style" v-for="memorie in datos" :key="memorie.title">
            <p class="title column" align="left">{{memorie.title}}</p>
            <div class="column is-one-fifth">
                <a class="button  is-rounded is-medium" :href="memorie.url" target="_blank"> <vue-fontawesome :icon="['fas', 'file-pdf']"/> {{memorie.title}} </a>
            </div>
        </div>
        
    </div>
</template>

<script>

import * as Memories from '../data/memories.js';
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
        datos: function(){
            if(this.lang == "en")
            {
            return this.data.en.data
            }
            else 
            {
            return this.data.es.data
            }
            
        }
    }
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