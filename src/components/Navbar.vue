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
      <b-navbar-dropdown :label="`${$t('navbar.incentivas')}`" >
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
      <b-navbar-item tag="router-link" :to="{ path: '/enconstruccion/' }">
        <p>{{$t('navbar.eventos')}}</p>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        <p>{{$t('navbar.somos')}}</p>
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }">
        <a class="button is-info is-rounded is-medium" v-if="type !== 'is-info'">
          <p>{{$t('navbar.involucrate')}}</p>
        </a>
        <a class="button is-warning is-rounded is-medium" v-if="type === 'is-info'">
          <p>{{$t('navbar.involucrate')}}</p>
        </a>
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }"> <!-- Para habilitarlo se debe colocar un path-->
        <a class="button navbar-donation is-rounded is-medium" v-if="type !== 'is-warning' && type !== 'is-info'" >
          <p>{{$t('navbar.dona')}}</p>
        </a>
        <a class="button navbar-donation-info is-rounded is-medium" v-if="type === 'is-warning' || type === 'is-info'" >
          <p>{{$t('navbar.dona')}}</p>
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
