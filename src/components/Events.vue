<template>
<div class="fondo">

    <div >
       <h2 class="title" >
           Próximos eventos
       </h2> 
    </div>
    <div class= "level-right" >
        
        <b-table class="eventos" 
            :data="isEmpty ? [] : data"
            default-sort="date"
            >
            <template slot-scope="props">

                <b-table-column field="date" label="Fecha" sortable>
                    {{new Date( props.row.date).toLocaleDateString() }}
                </b-table-column>

                <b-table-column field="event" label="Evento" sortable>
                    <template v-if="showDetailIcon">
                        {{ props.row.event }}
                    </template>
                    <template v-else>
                    <a @click=información>
                        <details>
                            <summary>{{props.row.event}}</summary>
                            <article class="media">
                                
                                <div class="media-content">
                                    <div class="content">
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
        Mas información
    </button>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            const data = [
                    { 'date': '2019-10-15 13:43:27', 'event': 'Jesse', 'information': "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ornare magna eros, eu pellentesque tortor vestibulum ut."},
                    { 'date': '2016-12-15 06:00:53', 'event': 'John', 'information':'Esta es una prueba para ver si se ve la informacion correspondiente'},
                    { 'date': '2016-04-26 06:26:28', 'event': 'Tina','information': 'Esto es una prueba'},
                    { 'date': '2016-04-10 10:28:46', 'event': 'Clarence', 'information': 'Esto es una prueba'},
                    { 'date': '2016-12-06 14:38:38', 'event': 'Anne','information': 'Esto es una prueba'}
                ]
            
            return {
                data,
            }
        },
        methods:
        {
            ordenarfechas(data) {
                return data.sort((a,b) => new Date(a.date).getTime() > new Date(b.date).getTime());
            }
        }
    }
</script>

<style>
    .button {
      padding: 0px 50px;
      margin: 2rem 6rem 2rem 0.25rem;
      font-weight: bold;
      background-color: rgb(228, 126, 228);
      color: white;
    }
    .eventos {
        margin: 3rem 6rem 0rem 0.25rem;
    }
    .fondo {
        background-color: rgb(52, 243, 227);
    }
    

</style>