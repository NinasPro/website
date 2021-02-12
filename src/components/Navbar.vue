<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container ninaspro-navbar" >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
         src="@/assets/logo.png"
         alt="Corporación Niñas Pro"
        />
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-dropdown label="Iniciativas" >
        <b-navbar-item tag="router-link" :to="{ path: '/inspira/' }">
          Proyecto Inspira
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/empodera/' }"> 
          Proyecto Empodera
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/potencia/' }">
          Proyecto Potencia
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/incentiva/' }">
          Proyecto Incentiva
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="router-link" :to="{ path: '/eventos/' }">
        Eventos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link :to="{ path: '/voluntariado'}">
            <b-button 
              id="involucrate-btn" 
              v-bind:class="{ 
                'is-info':(type !== 'is-info'), 
                'is-warning':(type == 'is-info')
              }" rounded>
              Involúcrate
            </b-button>
          </router-link>
          <router-link :to="{ path: '/somos'}">
            <b-button 
              id="dona-btn" 
              v-bind:class="{ 
                'is-warning':(type !== 'is-warning' && type !== 'is-info'),
                'is-primary':(type === 'is-warning' || type === 'is-info')
              }" rounded outlined>
              Dona
            </b-button>
          </router-link>
        </div>
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

.ninaspro-navbar {

  .navbar-brand {
    padding: 0px;

    img {
      height: 5rem;
      margin-top: 1rem;
      max-height: 5rem;
    }
  }

  .navbar-item {
    font-size: 18px;
    font-weight: bold;
    padding: 1rem 1.25rem;

    #involucrate-btn {
      margin-right: 20px;
    }

    #dona-btn {
      border-width: 4px;
    }
  }
}

@media only screen and (max-device-width: 1220px) {
  
  .ninaspro-navbar {
    
    .navbar-brand {
     
      img {
        height: 1.5rem;
        margin-top: 0rem;
        max-height: 1.5rem;
      }
    }
    
  }
}

</style>
