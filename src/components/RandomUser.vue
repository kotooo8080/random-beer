<template>
    <div class="random-user">
        <div class="img-box">
            <img
                v-if="isImgVisible"
                :src="imageSrc"
                @load="imageLoaded"
                @error="imageError"
                alt=""
            >
            <div v-if="isImgLoading" id="circles">
                <div id="circle1" class="circles"></div>
                <div id="circle2" class="circles"></div>
                <div id="circle3" class="circles"></div>
            </div>
        </div>
        <div class="user-main-info">
            <div class="name">
                <h3>{{ randomUserData.first_name }}</h3>
                <h3>{{ randomUserData.last_name }}</h3>
            </div>
            <h4 v-if="userAge">{{ userAge }} y.o.</h4>
            <h3 v-if="randomUserData.employment">{{ randomUserData.employment.title }}</h3>
            <h4 v-if="randomUserData.address" class="last-block">{{ randomUserData.address.city }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomUser',

    data() {
        return {
            randomUserData: {
                avatar: '',
                first_name: '',
                last_name: '',
                employment: {
                    title: '',
                    key_skill: ''
                },
            },
            userAge: 0,
            isDataLoaded: false,
            isImgLoading: true,
        }
    },

    computed: {
        imageSrc () {
            return this.randomUserData.avatar
        },
        isImgVisible () {
            return this.isDataLoaded
        },
    },

    created() {
        this.getUser();
    },

    methods: {
        getUser() {
            this.axios.get('https://random-data-api.com/api/users/random_user', {
            }).then((response) => {
                this.randomUserData = response.data;
                if(this.randomUserData.date_of_birth) {
                    this.calculateAge(this.randomUserData.date_of_birth);
                }
                this.isDataLoaded = true
            });
        },

        calculateAge(dateOfBirth) { 
            let newDate = new Date(dateOfBirth);
            let ageDifMs = Date.now() - newDate.getTime();
            let ageDate = new Date(ageDifMs); 
            this.userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        imageLoaded () {
            this.isImgLoading = false
        },

        imageError() {
            this.isDataLoaded = false;
        }
    }
}
</script>