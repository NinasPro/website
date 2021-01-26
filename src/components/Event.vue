<template>
    <div class="fondo">
        <div class="columns" v-for="inf in eventos" :key="inf.date" >
            <h1 class="column is-one-third" style="color: white; max-width:500px; margin-top:20px;font-size:20px;font-weight:bold;"  align="center" > {{new Date( inf.date).toLocaleDateString()}} </h1>
            <details class="column" >
                <summary style="color: white;margin-top:20px; font-weight:bold; font-size:20px">{{inf.event}}</summary>
                <article class="media">            
                <div class="media-content">
                    <div class="eventos">
                        <p>
                            {{inf.information}}
                        </p>
                    </div>
                </div>
                </article>
                <button class="button" name="Incripción" title="Inscripción" style="margin-inline-start: 1000px;">
                    Inscríbete
                </button>
            </details>
        </div>
        <button class="button" name="Mas información" title="Mas información" align="right" style="margin-inline-start: 170px;margin-bottom: 20px;margin-top:20px">
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
        computed:
        {
            eventos: function () {
                var datos=[];
                var count=0;
                var array=this.sortJSON(this.data,'date','asc');
                for(let i=0;i<array.length;i++){
                    
                    if(new Date(array[i].date)>new Date && count<3)
                    {
                        datos.push(array[i]);
                        count++;
                    }
                    else if(count>=3)
                    { 
                        return datos;
                    }   
                }
                return datos;
            }
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
        margin-top: 35px;
        margin-inline-start: 4px;
        margin-inline-end: 20px;
        color: white;
        max-width: 780px;
        font-size: 18px;

    }
    .fondo {
        background-color: rgb(5, 161, 117);
        margin: 2rem 0rem 2rem 25rem;
        border-radius: 10px 0px 0px 10px;
    }
    
 
    

</style>