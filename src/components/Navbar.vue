<template>
  
  <b-navbar :transparent="true" :type="type" wrapper-class="container ninaspro-navbar" centered>
    
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
         src="@/assets/logo.png"
         alt="Corporación Niñas Pro"
        />
      </b-navbar-item>
    </template>
    
    <template #start>
      <!-- <b-navbar-dropdown class="condensed" :label="`${$t('navbar.initiatives')}`" :boxed="true">
        <b-navbar-item tag="router-link" :to="{ path: '/inspira' }">
          <p>{{$t('navbar.inspire')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/incentiva' }">
          <p>{{$t('navbar.incentive')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/empodera' }">
          <p>{{$t('navbar.empower')}}</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/potencia' }">
          <p>{{$t('navbar.boost')}}</p>
        </b-navbar-item>
      </b-navbar-dropdown> -->

      <b-navbar-item tag="router-link" :to="{ path: '/' }" href="#projects" v-smooth-scroll>
        <p>{{$t('navbar.initiatives')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/' }" href="#information" v-smooth-scroll>
        <p>{{$t('navbar.about')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/' }" href="#events" v-smooth-scroll>
        <p>{{$t('navbar.events')}}</p>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/' }" href="#collaborators" v-smooth-scroll>
        <p>{{$t('navbar.alliances')}}</p>
      </b-navbar-item>

      <!-- <b-navbar-item tag="a" href="https://blog.ninaspro.cl">
        <p>{{$t('navbar.news')}}</p>
      </b-navbar-item> -->

    </template>

    <template #end>
      <b-navbar-dropdown :label="`${$t('navbar.lang')}`" v-model="lang">
        <b-navbar-item value="es" @click="handleChange('es')">
          español
        </b-navbar-item>
        <b-navbar-item value="en" @click="handleChange('en')">
          english
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link :to="{ path: '/voluntariado'}">
            <b-button 
              id="involucrate-btn" 
              v-bind:class="{ 
                'is-info':(type !== 'is-info'), 
                'is-warning':(type == 'is-info')
              }" rounded>
              {{$t('navbar.involved')}}
            </b-button>
          </router-link>
          
          <a href="https://yodono.cl/institucion/546/ninas_pro">
            <b-button 
              id="dona-btn" 
              v-bind:class="{ 
                'is-warning':(type !== 'is-warning' && type !== 'is-info'),
                'is-primary':(type === 'is-warning' || type === 'is-info')
              }" rounded>
              {{$t('navbar.donate')}}
            </b-button>
          </a>
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

    img {
      position: absolute;
      max-width: 8rem;
      max-height: 5rem;
      height: 5rem;
      top: 1rem;
    } 
  }

  .navbar-start {
    margin-left: 8rem;

    .condensed {
      padding-right: 0;
    }
  }

  .navbar-item {
    font-size: 16px;
    font-weight: bold;
    padding: 1rem 0.80rem;

    #involucrate-btn {
      margin-right: 20px;
      border-width: 4px;
    }

    #dona-btn {
      border-width: 4px;
    }
  }
}

@media only screen and (max-device-width: 1220px) {

  .navbar-brand {

    img {
      position: absolute;
      max-width: 7rem;
      max-height: 4rem;
      height: 4rem;
      top: 1rem;
    }
  }
}

</style>
