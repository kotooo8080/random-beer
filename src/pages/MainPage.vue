<template>
    <div class="main-page">
        <page-header />
        <div class="page-info">
            <div class="user-data">
                <h3 class="block-name">Random user</h3>
                <random-user />
            </div>
            <div class="beer-data">
                <h3 class="block-name">Random beer</h3>
                <random-beer />
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import RandomUser from '@/components/RandomUser.vue';
import RandomBeer from '@/components/RandomBeer.vue';

export default {
    name: 'MainPage',

    components: { 
        PageHeader,
        RandomUser,
        RandomBeer 
    },

    data() {
        return {

        }
    },

    created() {
    },

    methods: {
    }

}
</script>