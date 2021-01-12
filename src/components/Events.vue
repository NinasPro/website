<template>
<div class="fondo">

    <div >
       <h2 class="title" >
           Próximos eventos
       </h2> 
    </div>
    <div class= "level-right" >
        
        <b-table class="eventos" :data="isEmpty ? [] : data">
            <template scope="props">
                <b-table-column field="id" label="ID" width="40" numeric sortable>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="date" label="Fecha">
                    {{ props.row.date }}
                </b-table-column>

                <b-table-column field="event" label="Evento">
                    {{ props.row.event }}
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
                    { 'id':1, 'date': '2019-10-15 13:43:27', 'event': 'Jesse'},
                    { 'id':2, 'date': '2016-12-15 06:00:53', 'event': 'John'},
                    { 'id':3, 'date': '2016-04-26 06:26:28', 'event': 'Tina'},
                    { 'id':4, 'date': '2016-04-10 10:28:46', 'event': 'Clarence'},
                    { 'id':5, 'date': '2016-12-06 14:38:38', 'event': 'Anne'}
                ]
            
            return {
                data,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
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