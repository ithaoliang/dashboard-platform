export default {
    props: {
        activityStep: {
            type: [Number, String],
            required: true
        },
        fromStepTwo: {
            type: [Number, String],
            required: false
        }
    },
    mounted() {
        // console.log(this.id);
    },
    methods: {
        handleRoute(step) {
            if (step) {
                this.$router.push({
                    path: '/choose_activity_type',
                    query: {
                        id: this.$route.query.id
                    }
                });
            } else {
                this.$router.push({
                    path: '/choose_user_group',
                    query: {
                        id: this.$route.query.id,
                        fromStepTwo: this.fromStepTwo
                    }
                });
            }
        }
    }
};
