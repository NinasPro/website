<template>
<div class="fondo">

    
    <div>
        
        <b-table  class="column is-11
is-offset-1" 
            :data="isEmpty ? [] : data"
            default-sort="date"
            :per-page="perPage"
            :bordered=false
            paginated
            
            >
            <template slot-scope="props" >
                <b-table-column  class="eventos" field="date" label="Fecha" sortable centered header-class="eventos" width="100px" >
                    {{new Date( props.row.date).toLocaleDateString() }}
                </b-table-column>

                <b-table-column class="eventos" field="event" label="Evento"  header-class="eventos" width="300px" >
                    <template v-if="showDetailIcon">
                        {{ props.row.event }}
                    </template>
                    <template v-else>
                    <a @click=información>
                        <details >
                            <summary class="titulo">{{props.row.event}}</summary>
                            <article class="media">
                                
                                <div class="media-content">
                                    <div class="eventos">
                                        <p>
                                            <br>
                                            {{props.row.information}}
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
                    </a>
                    </template>
                </b-table-column>  
            </template>
        </b-table>
    </div>
    <div class = "level-right">
    <button class="button" name="Mas información" title="Mas información">
        Ver todos
    </button>
    </div>
</div>
</template>


<script>
    import * as myModule from '../data/events.js';
    
    export default {
        data() {
            const data = myModule.default.data

            return {
                data,
                perPage:2,
                
                
            }
        }
    }
</script>

<style >
    .button {
      padding: 0px 50px;
      margin: 2rem 6rem 2rem 0.25rem;
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
    .titulo{
        color: white;
    }
    
 
    

</style>