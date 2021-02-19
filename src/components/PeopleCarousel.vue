<template>
  <div class="container">
    <div>
      <b-carousel-list
      v-model="values"
      :data="items"
      :arrow="arrow"
      :arrow-hover="arrowHover"
      icon-size="is-medium"
      :items-to-show="perList"
      :items-to-list="increment"
      :has-drag="drag"
      >
      <template slot="item" slot-scope="props">
          <div>
              <div class="card-image">
                  <figure>
                      <img :src="props.list.image">
                  </figure>
              </div>
              <div class="card-content">
                  <h1 class="title">{{ props.list.text }}</h1>
                  <p class="subtitle">Cargo</p>
                  <p class="description">Historia para saber que el lo que se necesita a ver si esto se agranda y se pone mejor </p>
              </div>
        </div>            
      </template>
      </b-carousel-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      arrowHover: true,
      values: 1,
      perList: 4,
      increment: 1,
      drag: true,
      repeat: false,
      items: [
        {title: 'Slide 1',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
        {title: 'Slide 2',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
        {title: 'Slide 3',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
        {title: 'Slide 4',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
        {title: 'Slide 5',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
        {title: 'Slide 6',
        image: 'https://picsum.photos/400',
        text:'Jazmine Maldonado'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.card-image {
  padding-top: 15px;
  text-align: center;

  figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 15px; 
  margin-right: 15px;

    img{
    border-radius: 150px 150px;
    height: 150px;
    }
  }
}


.card-content {
  text-align: center;
  margin-bottom: 10px;

  .title {
  text-align: center;
  font-size: 20px;
  margin-left: 10px;
  }
  .subtitle{
    text-align: center;
    font-size: 18px;
    margin-left: 10px;
  }

  .description {
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
  }
}

vue-fontawesome {
  color: black;
}
</style>