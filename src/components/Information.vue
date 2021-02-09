<template >

    <div v-if="type === 'left'">
        <div class="columns">
            <div class="column">
                <img :class="type" :src="getImgUrl(image)" :align="type">
            </div>
            <div class="column "> 
                <h1 class="title style-title-right" align="left" > {{titulo}}</h1>
                <div class =" style-text-right"  align="left">{{text}} </div>
                <router-link :to="Path" class="button-information button is-info is-rounded is-medium" style=" margin-inline-start: 15%;">
                     {{boton}} 
                </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="columns">
            <div class="column"> 
                <h1 class="title style-title-left" align="left"> {{titulo}}</h1>
                <div class =" style-text-left"  align="left" >{{text}} </div>
                <router-link :to="Path" class="button-information button is-success is-rounded is-medium " style="margin-inline-start: 25%;">
                    {{boton}}
                </router-link> 
            </div>
            <div class="column">
                <img :class="type" :src="getImgUrl(image)" :align="type">
            </div>
            
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
        width: 100%;
        height: 75%;
        object-fit: cover;
        margin: 2rem 0rem 2rem 20rem;
    }
    .style-title-left{
        font-size: 2.5em; 
        margin-inline-start: 25%; 
        margin-top:14.5%; 
        line-height: 1.5;
    }
    .style-text-left{
        font-size: 1.65em; 
        padding: 1% 0.5% ; 
        margin-inline-start: 25%; 
        margin-inline-end: 14.5%; 
        line-height: 1.5;
        margin-bottom: 2%;
    }
    .left{
        border-radius: 0px 1000px 1000px 0px;
        width: 100%;
        height: 75%;
        object-fit: cover;
        margin: 2rem 0rem 2rem 0rem;
    } 
    .style-title-right{
        font-size: 2.5em; 
        padding: 15% 0.2% 0%; 
        line-height: 1.5; 
        margin-inline-end: 25%; 
        margin-inline-start: 15%;
    }
    .style-text-right{
        font-size: 1.65em; 
        padding: 1% 0.5% ; 
        line-height: 1.5; 
        margin-inline-end: 25%; 
        margin-inline-start: 15%;
        margin-bottom: 2%;
    }
    
    
</style>