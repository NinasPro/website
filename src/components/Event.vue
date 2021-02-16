<template>
    <div class="container">
        <div class="columns column-style contenedor" v-for="event in eventos" :key="event">
            <div class="column is-2">
                <img class="img-style" src="@/assets/ninastic.jpg">
            </div>
            <div class="column margin-information">
                <h6>
                    <span class="detail-item"><vue-fontawesome :icon="['fas', 'map-marker-alt']"/> {{event.locale}}</span>
                    <span class="detail-item"><vue-fontawesome :icon="['fas', 'clock']"/> {{new Date(event.date).toLocaleTimeString()}}</span>
                    <span class="detail-item"><vue-fontawesome :icon="['fas', 'calendar-alt']"/> {{new Date( event.date).toLocaleDateString()}}</span>
                </h6>
                <h1 class="title margin-information">  {{event.event}} </h1>
                <p class="margin-information"> {{event.information}} </p>
                <a class="button is-primary margin-information is-rounded is-medium" :href="event.link" > {{$t('event.signUp')}} </a>
            </div>
        </div>
    </div>
    
</template>
<script>
import * as Events from '../data/events.js';
var moment = require('moment')
import i18n from '../i18n'
export default {
    data() {
        const event = Events.default;
        const lang=`${i18n.locale}`
        return {
            moment:moment,
            event,
            lang
        }
    },
    methods: {
            sortJSON(data, key, orden) {
            return data.sort(function (a, b) {
                var x = a[key],
                y = b[key];

                if (orden === 'asc') {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }

                if (orden === 'desc') {
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                }
                });
            
            },
            //data according to language
            datos() {
                if(this.lang == "en") {
                    return this.event.en.events
                } else {
                    return this.event.es.events
                }
            }      
        },
    computed:
        {
            eventos: function () {
                var datos=[];
                var array=this.sortJSON(this.datos(),'date','asc');
                for(let i=0;i<array.length;i++){
                    if(new Date(array[i].date)>new Date)
                    {
                        datos.push(array[i]);
                    }
                    else {
                        for(let day=2;day<=7;day++)
                        {
                            if((moment(array[i].date).fromNow()).includes(`${day} days ago`) ||  ((moment(array[i].date).fromNow()).includes('a day ago'))){
                                datos.push(array[i]);
                                break;
                            }
                        }
                        
                    } 
                }
                return datos;
            }
        }
}
</script>
<style scoped>
.img-style{
    border-radius: 50%;
    margin-inline-end: 5%;
}
.column-style{
    margin-top: 2%;
}
.margin-information{
    margin-top: 1.2%;
}

.contenedor{
    border-color: #dbdbdb;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    margin-bottom: 2%;
    padding-bottom: 1.5%;
}

.detail-item{
    padding-right: 20px;
}


</style>
