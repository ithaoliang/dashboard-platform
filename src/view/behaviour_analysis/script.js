/**
 * Created by Lzhang on 2017/12/11.
 */
var echarts = require('echarts');
export default {
    data () {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,

            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: '',

            options: [{
                value: '选项1',
                label: '电视'
            }, {
                value: '选项2',
                label: 'pad'
            }, {
                value: '选项3',
                label: 'pc'
            }, {
                value: '选项4',
                label: 'phone'
            }],
            value: '',

            pic:[{
                src:require("./image/k1.png"),
                msg:"K1"
            },{
                src:require("./image/k2.png"),
                msg:"K2"
            },{
                src:require("./image/k3.png"),
                msg:"K3"
            },{
                src:require("./image/a1.png"),
                msg:"A1"
            },{
                src:require("./image/a2.png"),
                msg:"A2"
            },{
                src:require("./image/a3.png"),
                msg:"A3"
            },{
                src:require("./image/s1.png"),
                msg:"S1"
            },{
                src:require("./image/s2.png"),
                msg:"S2"
            },{
                src:require("./image/s3.png"),
                msg:"S3"
            },],

            number:[{
                n1:"1",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"2",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"3",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"4",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"5",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"6",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"7",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"8",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"9",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },{
                n1:"10",
                n2:"18911234567",
                n3:"pad",
                n4:"2016/09/12 21:00 2016/09/13 00:00",
                n5:"25min",
                n6:"4",
            },]

        }
    },
    computed: {},
    mounted() {
        // // this.home.changeCount();
        //  this.changeCount()
        var myChart = echarts.init(document.getElementById('xzyh'));
        myChart.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                //axisPointer: {
                // type: 'cross',
                // label: {
                //    backgroundColor: '#6a7985'
                // }
                // }
            },
            legend: {
                top: 36,
                itemGap: 62,
                data: [{name: '新增用户', icon: 'emptyCircle'}, {name: '新增游客', icon: 'emptyCircle'}, {
                    name: '新增注册用户',
                    icon: 'emptyCircle'
                }]
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                top: '30%',
                containLabel: true
            },
            xAxis: [
                {
                    axisLine: {show: false},
                    axisTick: {show: false},
                    offset: 20,
                    type: 'category',
                    boundaryGap: true,
                    data: ['2017/6/1', '2017/6/2', '2017/6/3', '2017/6/4', '2017/6/5', '2017/6/6', '2017/6/7', '2017/6/8', '2017/6/9', '2017/6/10', '2017/6/11', '2017/6/12', '2017/6/13', '2017/6/14']
                }
            ],
            yAxis: [
                {
                    axisLine: {show: false},
                    axisTick: {show: false},
                    offset: 6,
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '新增用户',
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#80beff',
                            lineStyle: {
                                width: 3,
                                color: '#80beff'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#80beff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(128,190,255,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }

                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 189]
                },
                {
                    name: '新增游客',
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#cabaf7',
                            lineStyle: {
                                width: 3,
                                color: '#cabaf7'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#cabaf7' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(202,186,247,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }

                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330, 310, 176]
                },
                {
                    name: '新增注册用户',
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#f89fcc',
                            lineStyle: {
                                width: 3,
                                color: '#f89fcc'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#f89fcc' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(248,159,204,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }

                    },
                    data: [150, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330, 410, 113]
                }
            ]
        });
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}