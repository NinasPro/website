<template>
    <div class="background-container container">
        <div class="columns margin">
            <div class="column profile">
                <h1 aling="center">Perfil de nuestros voluntarios</h1>
            </div>
            <div class="column is-half" >
                <ol class="star">
                    <li class="text"> Esto es un texto de prueba, para luego ser reemplazado </li>
                    <li class="text"> Estamos viendo el tamaño de las letras y el espacio que puede tomar cada una de estas </li>
                    <li class="text"> Esperando texto </li>
                    <li class="text"> Esperando texto </li>
                    <li class="text"> Esperando texto </li>
                    <li class="text"> Esperando texto </li>
                </ol>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.background-container{
    background-color: #ffa4e5;
    color:white;
    font-size: 1.3em;
    border-radius: 25px;
}
.margin{
    margin-inline-start: 60px;
    margin-inline-end: 50px;
}
.profile{
    margin-inline-end: 20%;
    margin-top: 8%;
    margin-inline-start: 5%;
    font-size: 1.5em;
    font-weight: bold;

}
.text
{
    margin:6% 15% 6% 0%;
}
ol.star {
  list-style-type: circle;
  padding-left: 3rem;
}

</style>