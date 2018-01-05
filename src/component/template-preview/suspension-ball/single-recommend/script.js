/**
 * Created by xiaojiang on 2017/10/20.
 */
export default {
    props: {
        templateData: ''
    },
    computed: {
        // 正确选项
        correctAnswerOption() {
            return '选项' + (this.templateData.correctAnswerOption + 1);
        },
        // 选中按钮颜色
        chooseButtonColor() {
            return '#' + this.templateData.chooseButtonColor;
        },
        // 选中文字颜色
        chooseTextColor() {
            return '#' + this.templateData.chooseTextColor;
        }
        //
    },
    methods: {
        // 图片数组 type为不同图片对应的字段key
        imgList(type) {
            const imgArr = [];
            this.templateData[type].forEach(item => {
                imgArr.push(item.url);
            });
            console.log('imgArr===============', imgArr);
            return imgArr;
        },
        // 颜色方法
        showColor(type) {
            return '#' + this.templateData[type];
        },
        // toast展示方式
        showToastWay(val) {
            let data = '';
            switch (val) {
                case 0:
                    data = '悬浮球不在，通过Toast展示消息';
                    break;
                case 1:
                    data = '悬浮球不在，不通过Toast展示消息';
                    break;
                case 2:
                    data = '强制使用Toast展示消息';
                    break;
                default:
                    data = '悬浮球不在，通过Toast展示消息';
            }
            return data;
        }
    }
};