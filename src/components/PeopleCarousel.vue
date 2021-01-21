<template>
  <div class="container">
    <div class="title">
      {{title}}
    </div>
    <b-carousel-list
    v-model="values"
    :data="items"
    :arrow="arrow"
    :arrow-hover="arrowHover"
    :icon-pack="fa"
    :icon-size="is-medium"
    :items-to-show="perList"
    :items-to-list="increment"
    :repeat="repeat"
    :has-drag="drag"/>
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
      repeat: true,
      items: [
        {title: 'Slide 1',
        image: 'https://picsum.photos/400'},
        {title: 'Slide 2',
        image: 'https://picsum.photos/400'},
        {title: 'Slide 3',
        image: 'https://picsum.photos/400'},
        {title: 'Slide 4',
        image: 'https://picsum.photos/400'},
        {title: 'Slide 5',
        image: 'https://picsum.photos/400'},
        {title: 'Slide 6',
        image: 'https://picsum.photos/400'},
      ]
    }
  }
}
</script>

<style scoped>
.card-image {
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
.columns, .content{
  text-align: center;
  padding-left: 10px;
}
figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 20px;
}
</style>