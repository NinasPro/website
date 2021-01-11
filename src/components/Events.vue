<template>
<div class="fondo">

    <div >
       <h2 class="title" >
           Próximos eventos
       </h2> 
    </div>
    <div class= "level-right" >
        
        <b-table   class = "eventos" :data="data" :columns="columns" >

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
                    { 'date': '2019-10-15 13:43:27','events': 'Jesse'   },
                    { 'date': '2016-12-15 06:00:53','events': 'John'  },
                    { 'date': '2016-04-26 06:26:28','events': 'Tina'  },
                    { 'date': '2016-04-10 10:28:46','events': 'Clarence' },
                    { 'date': '2016-12-06 14:38:38','events': 'Anne' }
                ]
            return {
                data
                ,
                columns: [
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true,
                        
                    },
                    {
                        field: 'events',
                        label: 'Events',
                    }
                    
                ]
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