import Vue from 'vue';
import App from './App';
import router from './router';
// promise兼容ie，处理axios菜蔬
import 'babel-polyfill';
// 初始化全局http回调
import {init} from './common/request.js';

// 主题
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';// 默认主题
import './main.less';


Vue.use(ElementUI);

Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
console.log('============================================');
console.log('执行了main代码');

const vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});

init({
    success(res) {

        // vm.$message.success('操作成功');
    },
    error(err) {

    }
});

