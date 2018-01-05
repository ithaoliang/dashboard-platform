import storage from '../../common/storage';
// import menuData from '../menuData';
import common from '../../common/common';
import logo from './img/logo.png';
import logo2 from './img/logo2.png';
import footerImg from './img/sanjiao.png';
import menuData from '../menuData';

function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}
function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += ' ' + cName;
    }
}
function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
    }
}

export default {
    created() {
        // console.log('1111111111111',this.$bus);
        this.$bus.$on('collapsed', () => {
            this.collapsed = !this.collapsed;
        });
    },
    data() {
        return {
            collapsed: false,
            paths: [],
            lastPath: '',
            items: menuData,
            images: {
                logo,
                logo2,
                footerImg
            }
        };
    },
    mounted() {
        // this.items = common.store.getMenuData();
        this.initPaths();
    },
    methods: {
        initPaths() {
            let subs = [];
            this.items.forEach(item => {
                if (item.subs) {
                    subs = subs.concat(item.subs);
                } else {
                    subs = subs.concat([item]);
                }
            });
            this.paths = subs.map(item => item.index);
        },
        getIndexArray(subs) {
            const items = subs.map(item => item.index);
            return items;
        },
        showMenu(i, status) {
            this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
            this.$refs.menuCollapsed.getElementsByClassName('submenu-title-' + i)[0].style.background = status ? '#1c2633' : 'transparent';
        },
        showStatus(index, key, status) {
            const el = this.$refs.menuCollapsed.getElementsByClassName('submenu-title-' + index + key)[0];
            const classList = el.getAttribute('class');
            if (classList.indexOf('is-path') > -1) return false;
            if (status) {
                addClass(el, 'is-active');
            } else {
                removeClass(el, 'is-active');
            }
        },
        toPath(path) {
            //let elements = this.$refs.menuCollapsed.getElementsByClassName('lc-menu-item');
            //elements = Array.prototype.slice.call(elements, 0);
            //elements.forEach(item => {
            //    if (hasClass(item, 'is-active')) {
            //        removeClass(item, 'is-active');
            //    }
            //});
            this.$router.push(path);
        }
    },
    computed: {
        onRoutes() {
            const currentPath = this.$route.path;
            if (this.$route.meta && this.$route.meta.menuPath) {
                return this.$route.meta.menuPath;
            }
            return currentPath;
        }
    }
};
