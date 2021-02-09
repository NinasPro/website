<template>
    <div class="background-container container">
        <div class="columns margin">
            <div class="column profile">
                <h1 aling="center">Perfil de nuestros voluntarios</h1>
            </div>
            <div class="column is-half" >
                <ol class="star">
                    <li class="text" v-for="text in data" :key="text.id"> {{text.text}} </li>
                </ol>
            </div>
        </div>
        
    </div>
</template>

<script>
import * as Data from '../data/volunteer.js';
export default {
    data () {
    const data = Data.default.profileData
    return {
      data,
    }
  },
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