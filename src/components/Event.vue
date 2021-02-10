<template>
    <div class="container">
        <div class="columns column-style contenedor" v-for="event in data" :key="event">
            <div class="column is-2">
                <img class="img-style" src="@/assets/ninastic.jpg">
            </div>
            <div class="column margin-information">
                <h6>
                    <vue-fontawesome :icon="['fas', 'map-marker-alt']"/> {{event.locale}}
                    <vue-fontawesome :icon="['fas', 'clock']"/> {{new Date(event.date).toLocaleTimeString()}}
                    <vue-fontawesome :icon="['fas', 'calendar-alt']"/> {{new Date( event.date).toLocaleDateString()}}
                </h6>
                <h1 class="title margin-information">  {{event.event}} </h1>
                <p class="margin-information"> {{event.information}} </p>
                <a class="button is-danger margin-information is-rounded is-medium" :href="event.link" > Inscribirme </a>
            </div>
        </div>
    </div>
    
</template>
<script>
import * as Events from '../data/events.js';
export default {
    data() {
        const data = Events.default.data;
        return {
            data,
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
        },
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
    border-color: black;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    margin-bottom: 2%;
}


</style>