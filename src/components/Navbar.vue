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
      <b-navbar-dropdown :label="`${$t('navbar.lang')}`" v-model="lang">
        <b-navbar-item value="es" @click="handleChange('es')">
          Español
        </b-navbar-item>
        <b-navbar-item value="en" @click="handleChange('en')">
          English
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown :label="`${$t('navbar.iniciativas')}`" >
        <b-navbar-item tag="router-link" :to="{ path: '/inspira/' }"  >
          <p>{{$t('navbar.inspira')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/empodera/' }"  > 
          <p>{{$t('navbar.empodera')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/potencia/' }" >
          <p>{{$t('navbar.potencia')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/incentiva/' }" >
          <p>{{$t('navbar.incentiva')}}</p>
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item tag="router-link" :to="{ path: '/eventos/' }">
        <p>{{$t('navbar.events')}}</p>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        <p>{{$t('navbar.somos')}}</p>
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
              {{$t('navbar.involucrate')}}
            </b-button>
          </router-link>
          <router-link :to="{ path: '/donate'}">
            <b-button 
              id="dona-btn" 
              v-bind:class="{ 
                'is-warning':(type !== 'is-warning' && type !== 'is-info'),
                'is-primary':(type === 'is-warning' || type === 'is-info')
              }" rounded outlined>
              {{$t('navbar.dona')}}
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
  data: function(){
    const lang= localStorage.getItem('lang') || 'es';
    return{
      lang:lang
    }
  },
  methods:{
    handleChange(eve){
      localStorage.setItem('lang',eve);
      window.location.reload();
    }
  }
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
