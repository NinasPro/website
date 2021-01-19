<template>
    <div class="fondo">
        <div class="columns" v-for="inf in sortJSON(data, 'date', 'asc')" :key="inf.date" >
            <h1 class="column is-one-third" style="color: white; max-width:500px; margin-top:20px;font-size:20px;font-weight:bold;"  align="center" v-if="comparar(new  Date(inf.date),fechaActual) === 'si' "> {{new Date( inf.date).toLocaleDateString()}} </h1>
            <details class="column" v-if="comparar(new  Date(inf.date),fechaActual) === 'si'">
                            <summary style="color: white;margin-top:20px; font-weight:bold; font-size:20px">{{inf.event}}</summary>
                            <article class="media">
                                
                                <div class="media-content">
                                    <div class="eventos">
                                        <p>
                                            <br>
                                            {{inf.information}}
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <div class = "level-right">
                            <button class="button" name="Mas información" title="Mas información">
                                Inscríbete
                            </button>
                            </div>
                        </details>
            <div class = "level-right">
            
            </div>
        </div>
        <button class="button" name="Mas información" title="Mas información" align="right" style="margin-inline-start: 1500px;margin-bottom: 20px;">
                Ver todos
        </button>
    </div>
</template>


<script>
    import * as myModule from '../data/events.js';
    
    export default {
        data() {
            const data = myModule.default.data;
            var fechaActual= new Date;
            return {
                data,
                fechaActual, 
                count:1,
            }
        },
        methods: {
            comparar(fecha1,fechaactual){
                    if(fecha1>fechaactual)
                    {
                        return "si"
                    }
                    else
                    { 
                        return "no"
                    }
            },
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


            
            
        }
    }
    
</script>

<style >
    .button {
      padding: 0px 50px;
      font-weight: bold;
      background-color:white;
      color: rgb(5, 161, 117);
      border-radius: 25px 25px 25px 25px;
      
      
    }
    .eventos {
        margin: 3rem 6rem 0rem 0.25rem;
        background-color: rgb(5, 161, 117);
        color: white;
        columns: "*,2*";
        max-width: 250px;
        border: 0px solid rgb(5, 161, 117);

    }
    .fondo {
        background-color: rgb(5, 161, 117);
        margin: 2rem 0rem 2rem 25rem;
        border-radius: 10px 0px 0px 10px;
    }
    
 
    

</style>