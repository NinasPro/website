<template>
  <div class="container">
    <div class="title">
      {{title}}
    </div>
    <div class="carousel">
      <b-carousel-list
      v-model="values"
      :data="items"
      :icon-pack="fas"
      :icon-prev="arrow-left"
      :icon-next="arrow-right"
      :icon-size="is-small"
      :items-to-show="perList"
      :items-to-list="increment"
      >
      <template slot="item" slot-scope="props">
          <div>
              <div class="card-image">
                  <figure class="image is-5by4">
                      <img :src="props.list.image">
                  </figure>
              </div>
              <div class="card-content">
                  <strong class="name">{{ props.list.text }}</strong>
              </div>
        </div>            
      </template>
      </b-carousel-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "text": String,
    "title": String,
  },
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

<style scoped>
.card-image {
  padding-top: 15px;
  text-align: center;
}
.title {
  text-align: left;
  font-size: 25px;
  margin-left: 10px;
  margin-top: 20px;
}
.description {
  text-align: left;
  font-size: 14px;
  margin-left: 10px;
}
figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 15px; 
  margin-right: 15px;
}
.card-content {
  text-align: center;
  margin-bottom: 10px;
}
.carousel {
  padding-left: 15px;
}
vue-fontawesome {
  color: black;
}
</style>