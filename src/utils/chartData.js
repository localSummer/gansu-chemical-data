import echarts from 'echarts';
import {map} from './mapData';

export const loadingConfig = {
    text: '',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(0, 0, 0, 0.3)',
    zlevel: 0
};

export const userData = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        data: ['在线', '本地']
    },
    grid: {
        top: 26,
        left: 14,
        right: 14,
        bottom: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [2014, 2015, 2016, 2017, 2018],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#447d8b'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#94d1e0'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '用户数',
        minInterval: 1000,
        nameTextStyle: {
            color: '#94d1e0',
        },
        nameLocation: 'end',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#447d8b'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#94d1e0'
            }
        }
    },
    series: [{
        name: '在线',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: ['2000', '3000', '2000', '2800', '1500'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(82, 87, 48,0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(82, 87, 48,0.8)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    }, {
        name: '本地',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: ['2000', '1200', '2400', '1800', '3500'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(114, 149, 113, 0.6)'
                }, {
                    offset: 1,
                    color: 'rgba(76, 102, 80, 0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#58c8da'
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    }]
};

export const studyData = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        data: ['在线', '本地']
    },
    grid: {
        top: 26,
        left: 14,
        right: 14,
        bottom: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ["2014", "2015", "2016", "2017", "2018"],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#447d8b'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#94d1e0'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '学习时长',
        minInterval: 1000,
        nameTextStyle: {
            color: '#94d1e0',
        },
        nameLocation: 'end',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#447d8b'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#94d1e0'
            }
        }
    },
    series: [{
        name: '在线',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: ['2000', '2800', '3200', '2400', '2600'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(82, 87, 48,0.6)'
                }, {
                    offset: 1,
                    color: 'rgba(82, 87, 48,0.6)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    }, {
        name: '本地',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: ['2000', '1200', '2200', '1800', '3200'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(76, 102, 80, 0.6)'
                }, {
                    offset: 1,
                    color: 'rgba(76, 102, 80, 0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#58c8da'
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    }]
};

export const trainData = {
    color: ['#41aec5', '#cdc455', '#74ae4e', '#c63c5d', '#137794'],
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['数字教材', '技能训练', '实训软件', '硬件实训', '拓展资源']
    },
    calculable: true,
    grid: {
        top: 56,
        left: 14,
        right: 14,
        bottom: 10,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2014', '2015', '2016', '2017', '2018']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '资源数',
            nameTextStyle: {
                color: '#94d1e0',
            },
            nameLocation: 'end',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#447d8b'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#94d1e0'
                }
            }
        }
    ],
    series: [
        {
            name: '数字教材',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '技能训练',
            type: 'bar',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '实训软件',
            type: 'bar',
            data: [150, 232, 201, 154, 190]
        },
        {
            name: '硬件实训',
            type: 'bar',
            data: [98, 77, 101, 99, 40]
        },
        {
            name: '拓展资源',
            type: 'bar',
            barGap: 0,
            data: [340, 332, 321, 334, 330]
        },
    ]
};

export const summaryOne = {
    backgroundColor: 'transparent',
    title: {
        text: '56%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#fef064",
            fontSize: 20
        }
    },
    color: ['#fef064', '#0e4552', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['65%', '75%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 56,
            name: '01'
        }, {
            value: 44,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['85%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const summaryTwo = {
    backgroundColor: 'transparent',
    title: {
        text: '83%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#fef064",
            fontSize: 20
        }
    },
    color: ['#fef064', '#0e4552', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['65%', '75%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 75,
            name: '01'
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['85%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const summaryThree = {
    backgroundColor: 'transparent',
    title: {
        text: '25%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#fef064",
            fontSize: 20
        }
    },
    color: ['#fef064', '#0e4552', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['65%', '75%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 75,
            name: '01'
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['85%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const summaryFour = {
    backgroundColor: 'transparent',
    title: {
        text: '60%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#fef064",
            fontSize: 20
        }
    },
    color: ['#fef064', '#0e4552', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['65%', '75%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 75,
            name: '01'
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['85%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const annualTrainOne = {
    backgroundColor: 'transparent',
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#a2e4f4",
            fontSize: 28
        }
    },
    color: ['#fef064', '#a2e4f4', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 80,
            name: '01'
        }, {
            value: 20,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['80%', '85%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const annualTrainTwo = {
    backgroundColor: 'transparent',
    title: {
        text: '90%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#a2e4f4",
            fontSize: 28
        }
    },
    color: ['#74ae4e', '#a2e4f4', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 90,
            name: '01'
        }, {
            value: 10,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['80%', '85%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    },
    ]
};

export const annualTrainThree = {
    backgroundColor: 'transparent',
    title: {
        text: '70%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'bold',
            color: "#a2e4f4",
            fontSize: 28
        }
    },
    color: ['#c63c5d', '#a2e4f4', '#0e4552'],
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        data: [{
            value: 70,
            name: '01'
        }, {
            value: 30,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#0e4552',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }

        ]
    }, {
        name: 'Line 2',
        type: 'pie',
        animation: false,
        clockWise: false,
        radius: ['80%', '85%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
            }
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        data: [{
            value: 100,
            name: '02',
            itemStyle: {
                emphasis: {
                    color: '#313443'
                }
            }
        }, {
            value: 0,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                }
            }
        }

        ]
    }]
};

export const annualStudent = {
    backgroundColor: 'transparent',
    radar: [
        {
            indicator: [
                {text: '理论学习', max: 100},
                {text: '职业素养', max: 100},
                {text: '安全辨识', max: 100},
                {text: '团队协作', max: 100},
                {text: '信息处理', max: 100},
                {text: '技术运用', max: 100},
                {text: '解决问题', max: 100},
            ],
            center: ['50%', '54%'],
            radius: '70%',
            shape: 'circle',
            nameGap: 5,
            name: {
                textStyle: {
                    color: '#a2e4f4',
                    fontSize: 13,
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#447d8b',
                    opacity: 0.5,
                    width: 1
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#447d8b',
                    opacity: 0.2
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#189cbb',
                    type: "dashed",
                }
            }
        },
    ],
    series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [
                {
                    value: [60, 73, 85, 40, 50, 40, 30],
                    name: '年度学生画像'
                }
            ],
            symbolSize: 3,
            itemStyle: {
                normal: {
                    borderColor: '#ffc72b',
                    borderWidth: 1,
                }
            },
            lineStyle: {
                normal: {
                    color: "#ffc72b",
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: '#ffc72b',
                    opacity: 0.5
                }
            }
        },
    ]
};

export const annualAbility = {
    color: ['#d3e269', '#6ec175', '#2193b1', '#3a9ab0'],
    backgroundColor: 'transparent',
    series: [
        {
            name: '年度学生能力提升',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '优秀'},
                {value: 310, name: '良好'},
                {value: 234, name: '中等'},
                {value: 135, name: '偏差'}
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: '#a2e4f4',
                        formatter: '{b} {d}%'
                    }
                },
                labelLine: {show: true}
            }
        }
    ]
};

export const regionalChart = function (dataValue) {
    echarts.registerMap('gansu', map);
    /*let data = [
        {name: '化工虚拟园区', value: [96.2622, 40.4517]},
        {name: '化工虚拟园区', value: [103.0188, 38.1061]},
        {name: '化工安全实训基地', value: [103.5901, 36.3043]},
        {name: '化工虚拟园区', value: [105.304, 33.5632]},
    ];*/
    let data = dataValue;
    let options = {
        backgroundColor: 'transparent',
        geo: {
            show: true,
            map: 'gansu',
            aspectScale: 0.75,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            layoutCenter: ['50%', '50%'],
            layoutSize: 500,
            itemStyle: {
                normal: {
                    areaColor: '#5f9ca8',
                    borderColor: '#3e88ae',
                },
                emphasis: {
                    areaColor: '#55bdd3',
                }
            }
        },
        series: [
            {
                name: 'credit_pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fef064'
                    }
                }
            },
            {
                type: 'map',
                map: 'gansu',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: 40,
                itemStyle: {
                    normal: {
                        color: '#fef064', //标志颜色
                    }
                },
                zlevel: 6,
                data: data,
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: data,
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: (params) => {
                            return params.name.replace(/\d*$/, '');
                        },
                        position: 'bottom',
                        show: true,
                        textStyle: {
                            color: '#fef064',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9',
                    }
                },
                zlevel: 1
            },

        ]
    };
    return options;
};
