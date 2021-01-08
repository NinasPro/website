<template>
    <section>
        <b-carousel-list
           
             v-model="images"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"
            :items-to-show="perList"
            :items-to-list="increment"
            :repeat="repeat"
            :has-drag="drag"
            :has-grayscale="gray"
            :has-opacity="opacity" 
            >
            
            
        </b-carousel-list>
        <!--<b-carousel :pause-hover="false" :pause-info="false">
        <b-carousel-item v-for="(item, i) in items" :key="i">
        <section :class="`hero is-medium ${type}`">
            <div class="hero-body">
            <div class="container">
                <div class="columns is-8">
            
                <div class="has-ratio">
                    <img @click-link="item.image"
                    :src="item.image"
                    :height="200"
                    :width="250"
                    
                    />
                </div>
                </div>
            </div>
            </div>
        </section>
        </b-carousel-item>
    </b-carousel>-->
    </section>
</template>

<script>
export default {
    props: {
      "type": String,
    },
    data() {
        return {
            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            values: 1,
            perList: 4,
            increment: 1,
            repeat: false,
            item :0,
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://picsum.photos/100/50'
                },
                {
                    title: 'Slide 3',
                    image: 'https://picsum.photos/100/50'
                },
                {
                    title: 'Slide 4',
                    image: 'https://escudouchile.files.wordpress.com/2012/06/escudo-universidad-de-chile-color-22.png'
                },
                /*{
                    title: 'Slide 5',
                    image: 'uchile1.png'
                }*/
                {
                    title: 'Slide 6',
                    image: 'https://ninaspro.cl/wp-content/uploads/2019/03/LogoNi%C3%B1asProCropped.png'
                },
                {
                    title: 'Slide 7',
                    image: 'https://picsum.photos/id/6/1230/500'
                },
                {
                    title: 'Slide 8',
                    image: 'https://picsum.photos/id/7/1230/500'
                }
            ]
        }
    },
    methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
    }
}
</script>

<style lang="scss" scoped>

</style>
