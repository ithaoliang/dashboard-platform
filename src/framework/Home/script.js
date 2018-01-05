import vHeader from '../Header/index.vue';
import vSidebar from '../Sidebar/index.vue';
import common from '../../common/common';
import storage from '../../common/storage.js';
import {fetch} from '../../common/request';

let timer;
export default {
    created() {
        this.$bus.$on('collapsed', () => {
            this.collapsed = !this.collapsed;
        });
    },
    mounted() {

    },
    destroyed() {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        vHeader, vSidebar
    }
};
