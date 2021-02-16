<template>
    <div class="columns">
        <slot v-if="type === 'left'">
            <div class="column info-img" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                <img :class="type" :src="getImgUrl(image)">
            </div>
        </slot>
        
        <div class="column is-6-desktop"> 
            <div class="info-text">
                <h1 class="title"> {{titulo}} </h1>
                <h2 class="subtitle"> {{text}} </h2>
                <router-link :to="path" class="button is-info is-rounded">
                    {{boton}} 
                </router-link>
            </div>
        </div>
        
        <slot v-if="type === 'right'">
            <div :class="`column info-img ${type}`" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                <img :class="type" :src="getImgUrl(image)">
            </div>
        </slot>
    </div>
</template>

<script>

export default {
    props: {
        "type": String,
        "image" : String,
        "text" : String,
        "boton" : String,
        "format" :String,
        "titulo":String,
        "path" : String,
    },
    methods: {
        getImgUrl(value) {
            return require(`@/assets/${value}`)
        }
    }
}

</script>

<style lang="scss" scoped>
    .info-text { 
        text-align: left;
        padding: 25% 25%;

        .title {
            font-size: 30px;
        }

        .subtitle {
            font-size: 18px;
        }
    }

    .info-img {
        max-height: 700px;

        &.right {
            text-align: right; 
        }

        img {
            object-fit: cover;
            width: 100%;
            max-height: inherit;
            padding: 30px 0px;

            &.right {
                border-radius: 1000px 0px 0px 1000px;
            }

            &.left{
                border-radius: 0px 1000px 1000px 0px;
            } 
        }
    }

@media only screen and (max-device-width: 1220px) {
    .info-text {
        padding: 30px 30px;
    }

    .info-img {
        img {
            width: 90%;
        }
    }
}
</style>