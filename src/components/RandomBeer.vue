<template>
    <div class="random-beer">
        <div class="beer-main-info">
            <h4 class="brand">{{ randomBeerData.brand }}</h4>
            <h3>{{ randomBeerData.name }}</h3>
            <h4 class="alco">{{ randomBeerData.alcohol }}</h4>
            <h3 class="style">{{ randomBeerData.style }}</h3>
        </div>
        <img src="../assets/img/beer.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'RandomBeer',

    data() {
        return {
            randomBeerData: {}
        }
    },

    created() {
        this.getBeer();
    },

    methods: {
        getBeer() {
            this.axios.get('https://random-data-api.com/api/beer/random_beer', {
            }).then((response) => {
                console.log('response');
                console.log(response.data);
                this.randomBeerData = response.data;
            });
        },
    }
}
</script>