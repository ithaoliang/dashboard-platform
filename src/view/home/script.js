/**
 * Created by Lzhang on 2017/12/11.
 */
var echarts = require('echarts');
export default {
    data () {
        return {
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

            listData:[{
                src:require("./image/bfa.png"),
                title1:"内容播放数（CV）",
                num1:"23,326,231",
                num2:"22,333",
                src1:require("./image/up.png"),
            },{
                src:require("./image/dlfw.png"),
                title1:"独立访客（UV）",
                num1:"23,326,2",
                num2:"22,333",
                src1:require("./image/down.png"),
            },{
                src:require("./image/hyyh.png"),
                title1:"活跃用户数",
                num1:"23,326,1",
                num2:"22,33",
                src1:require("./image/down.png"),
            },{
                src:require("./image/xyh.png"),
                title1:"新增用户数",
                num1:"23,36,231",
                num2:"22,33",
                src1:require("./image/up.png"),
            },{
                src:require("./image/ljyh.png"),
                title1:"累计用户数",
                num1:"2,326,231",
                num2:"2,333",
                src1:require("./image/up.png"),
            },]

        }
    },
    computed: {},
    mounted() {
        // // this.home.changeCount();
        //  this.changeCount()
        var myChart = echarts.init(document.getElementById('yhxwfx'));
        myChart.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                //axisPointer: {
                // type: 'cross',
                //label: {
                // backgroundColor: '#6a7985'
                // }
                // }
            },
            legend: {
                top: 36,
                itemGap: 62,
                data: [{name: '人均浏览量', icon: 'emptyCircle'}, {name: '人均启动次数', icon: 'emptyCircle'}, {
                    name: '单次使用时长',
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
                    name: '人均浏览量',
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
                    name: '人均启动次数',
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
                    name: '单次使用时长',
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
                }]
        });
        var myChartyhxwfx = echarts.init(document.getElementById('xzyh'));
        myChartyhxwfx.setOption({
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
        var myCharthyyhfx = echarts.init(document.getElementById('hyyhfx'));
        myCharthyyhfx.setOption({
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                show: false,
                data: ['30日活跃用户', '7日活跃用户', '3日活跃用户', '日活跃用户']
            },
            calculable: true,
            color: ['#f89fcc', '#baa5f5', '#89c6fe', '#84ddff',],
            series: [
                {
                    name: '漏斗图',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: [
                        {value: 20, name: '日活跃用户'},
                        {value: 40, name: '3日活跃用户'},
                        {value: 60, name: '7日活跃用户'},
                        {value: 80, name: '30日活跃用户'}
                    ]
                }
            ]
        });
        var myChartgdyhgc = echarts.init(document.getElementById('gdyhgc'));
        myChartgdyhgc.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                top: 36,
                orient: 'horizontal',
                x: 'center',
                itemGap: 62,
                data: [{name: 'PAD', icon: 'circle'}, {name: 'TV', icon: 'circle'}, {
                    name: 'PC',
                    icon: 'circle'
                }, {name: 'PHONE', icon: 'circle'}]
            },
            color: ['#f7e17c', '#f89fcc', '#84ddff', '#baa5f5'],
            series: [
                {
                    name: '客户端',
                    type: 'pie',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: 'PAD'},
                        {value: 310, name: 'TV'},
                        {value: 234, name: 'PC'},
                        {value: 135, name: 'PHONE'}
                    ]
                }
            ]
        });
        var myChartgdazqs = echarts.init(document.getElementById('gdazqs'));
        myChartgdazqs.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'item',
                // axisPointer: {
                // type: 'cross',
                // label: {
                //   backgroundColor: '#6a7985'
                // }
                // }
            },
            legend: {
                top: 36,
                itemGap: 62,
                data: [{name: 'PAD', icon: 'circle'}, {name: 'TV', icon: 'circle'}, {
                    name: 'PC',
                    icon: 'circle'
                }, {name: 'PHONE', icon: 'circle'}]
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
                    data: ['周一', '周二', '周三', '周四', '周五']
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
                    name: '总人数',
                    type: 'bar',
                    xAxisIndex: 0,
                    silent: true,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: '#ecf3fe'
                            }, {
                                offset: 0,
                                color: '#fafcff'
                            }]),
                            barBorderRadius: 0,//设置圆角
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    barWidth: '20%',
                    barGap: '100%',
                    data: [500, 500, 500, 500, 500]
                },
                {
                    name: 'PAD',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#f7e17c',
                            lineStyle: {
                                width: 3,
                                color: '#f7e17c'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#f7e17c' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(247,225,124,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }

                    },
                    data: [120, 132, 101, 134, 90]
                },
                {
                    name: 'TV',
                    type: 'line',
                    smooth: true,
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
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'PC',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#84ddff',
                            lineStyle: {
                                width: 3,
                                color: '#84ddff'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#84ddff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(123,134,156,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'PHONE',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#baa5f5',
                            lineStyle: {
                                width: 3,
                                color: '#baa5f5'
                            }
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#baa5f5' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(186, 165, 245 ,0.25)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    data: [154, 190, 330, 410, 113]
                }
            ]
        });
    },
    methods: {}
}