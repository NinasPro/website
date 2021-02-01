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
      <b-navbar-item tag="router-link" :to="{ path: '/enconstruccion/' }">
        Eventos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }">
        <button class="button is-info navbar-involucrate" v-if="type !== 'is-info'">
          Involucrate
        </button>
        <button class="button is-warning navbar-involucrate" v-if="type === 'is-info'">
          Involucrate
        </button>
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" > <!-- Para habilitarlo se debe colocar un path-->
        <button class="button navbar-donation" v-if="type !== 'is-warning' && type !== 'is-info'" >
          Dona
        </button>
        <button class="button navbar-donation-info" v-if="type === 'is-warning' || type === 'is-info'" >
          Dona
        </button>
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
  margin-top:40px; 
  width: 50px; 
  margin:0px 0px; 
  background: transparent;
  border-color: #fdca36;
  border-width: 5px; 
  color:#fdca36;
}
.navbar-donation-info{
  margin-top:40px; 
  width: 50px; 
  margin:0px 0px; 
  background: transparent;
  border-color: #2b88f7;
  border-width: 5px; 
  color:#2b88f7;
}

.navbar-involucrate{
  margin-top:40px; 
  margin:0px 0px;
}


</style>
