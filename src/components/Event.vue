<template>
    <div class="container">
        <div class="columns event-item" v-for="(event, i) in eventos" :key="i">
            <div class="column is-2">
                <b-image ratio="1by1" :src="getImgUrl(event.image)" :rounded="true"></b-image>
            </div>
            <div class="column">
                <div>
                    <span class="event-detail-item">
                        <vue-fontawesome :icon="['fas', 'map-marker-alt']"/> 
                        {{event.locale}}
                    </span>
                    <span class="event-detail-item">
                        <vue-fontawesome :icon="['fas', 'clock']"/>
                        {{new Date(event.date).toLocaleTimeString(
                            [], 
                            { hour: '2-digit', minute: '2-digit' }
                        )}}
                    </span>
                    <span class="event-detail-item">
                        <vue-fontawesome :icon="['fas', 'calendar-alt']"/>
                        {{new Date( event.date).toLocaleDateString(
                            undefined, 
                            {year: 'numeric', month: 'long', day: 'numeric' 
                        })}}
                    </span>
                </div>
                <h1 class="title"> {{event.event}} </h1>
                <p> {{event.information}} </p>
                <b-button tag="a" :href="event.link" class="is-primary is-rounded" :disabled="event.link === ''" target="_blank">
                    <div v-if="event.link !== ''">
                        {{$t('event.signUp')}}
                    </div>
                    <div v-else>
                        {{$t('event.soon')}}
                    </div>
                </b-button>
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
            },
            getImgUrl(value) {
                return require(`@/assets/${value}`)
            }     
    },
    computed:
        {
            eventos: function () {
                var datos=[];
                var array=this.sortJSON(this.datos(),'date','asc');
                for(let i=0;i<array.length;i++){
                    if(new Date(array[i].date)>new Date){
                        datos.push(array[i]);
                    } else {
                        for(let day=2;day<=7;day++) {
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

<style lang="scss" scoped>
.event-item{
    border-bottom: 1px #dbdbdb solid;
    margin: 20px 30px;
    padding: 20px 0px;

    .event-detail-item {
        padding-right: 20px;
    }

    .title {
        margin: 10px 0px;
    }

    p {
        margin: 10px 0px 20px 0px;
    }
}
</style>
