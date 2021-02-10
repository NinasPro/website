<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container" >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
         src="@/assets/logo.png"
         alt="Corporación Niñas Pro"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-dropdown label="Iniciativas" >
        <b-navbar-item tag="router-link" :to="{ path: '/inspira/' }"  >
          Proyecto Inspira
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/empodera/' }"  > 
          Proyecto Empodera
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/potencia/' }" >
          Proyecto Potencia
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/incentiva/' }" >
          Proyecto Incentiva
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="router-link" :to="{ path: '/eventos/' }">
        Eventos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }">
        <a class="button is-info is-rounded is-medium" v-if="type !== 'is-info'">
          Involucrate
        </a>
        <a class="button is-warning is-rounded is-medium" v-if="type === 'is-info'">
          Involucrate
        </a>
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }"> <!-- Para habilitarlo se debe colocar un path-->
        <a class="button navbar-donation is-rounded is-medium" v-if="type !== 'is-warning' && type !== 'is-info'" >
          Dona
        </a>
        <a class="button navbar-donation-info is-rounded is-medium" v-if="type === 'is-warning' || type === 'is-info'" >
          Dona
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    "type": String,
  },
};
</script>

<style lang="scss" scoped>

.navbar-item {
  font-size: 20px;
  font-weight: bold;
  padding: 0px 40px;
  

  img {
    height: 7rem;
    margin-top: 1rem;
    max-height: 10rem;
    
  }

}
.navbar-donation{
  background: transparent;
  border-color: #fdca36;
  border-width: 5px; 
  color:#fdca36;
}
.navbar-donation-info{  
  background: transparent;
  border-color: #2b88f7;
  border-width: 5px; 
  color:#2b88f7;
}



</style>
