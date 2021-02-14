<template>
    <div class="background-container container">
        <div class="columns margin">
            <div class="column profile">
                <h1 aling="center">{{$t('volunteer.titleProfile')}}</h1>
            </div>
            <div class="column is-half" >
                <ol class="star">
                    <li class="text" v-for="text in datos" :key="text.id"> {{text.text}} </li>
                </ol>
            </div>
        </div>
        
    </div>
</template>

<script>
import * as Data from '../data/volunteer.js';
import i18n from '../i18n';
export default {
    data () {
    const data = Data.default
    const lang=`${i18n.locale}`
        return {
        data,
        lang,
        }
    },
    computed:
    {
        //data according to language
                datos:function()
                {
                    if(this.lang == "en")
                    {
                        return this.data.en.profileData
                    }
                    else 
                    {
                        return this.event.es.profileData
                    }
                }
    },
}
</script>

<style>
.background-container{
    background-color: #ffa4e5;
    color:white;
    font-size: 1.3em;
    border-radius: 25px;
}
.margin{
    margin-inline-start: 60px;
    margin-inline-end: 50px;
}
.profile{
    margin-inline-end: 20%;
    margin-top: 8%;
    margin-inline-start: 5%;
    font-size: 1.5em;
    font-weight: bold;

}
.text
{
    margin:6% 15% 6% 0%;
}
ol.star {
  list-style-type: circle;
  padding-left: 3rem;
}

</style>