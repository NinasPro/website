<template>
    <div class="fondo block">
        <div class="columns" v-for="inf in eventos" :key="inf.date" >
            <h1 class="column block style-text"  align="center" > {{new Date( inf.date).toLocaleDateString()}} </h1>
            <details class="column block" >
                <summary class="style-text">{{inf.event}}</summary>
                <article class="media">            
                <div class="media-content">
                    <div class="eventos">
                        <p>
                            {{inf.information}}
                        </p>
                    </div>
                </div>
                </article>
                <a class="button inscribete is-rounded is-medium" name="Incripción" title="Inscripción" :href=inf.link>
                    Inscríbete
                </a>
            </details>
        </div>
        <router-link class="button ver-mas block is-rounded is-medium" name="Mas información" title="Mas información" align="right" to='/eventos/'>
                Ver todos
        </router-link>
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

<style lang="scss" >
    .button {
      padding: 0% 5%;
      font-weight: bold;
      background-color:white;
      color: rgb(5, 161, 117);
      border-radius: 25px 25px 25px 25px; 
    }

    .inscribete{
          margin-inline-start: 70%;
      }

    .ver-mas{
            margin-inline-start: 16%;
            margin-bottom: 3%;
            
        }
    .eventos {
        margin-top: 3%;
        margin-inline-start: 1%;
        margin-inline-end: 3%;
        color: white;
        font-size: 1em;

    }
    .fondo {
        background-color: rgb(5, 161, 117);
        margin: 5% 0% 5% 25%;
        border-radius: 10px 0px 0px 10px;
    }

    .style-text{
        color: white;
        margin-top:1%; 
        font-weight:bold; 
        font-size:150%;
    }
    
 
    

</style>