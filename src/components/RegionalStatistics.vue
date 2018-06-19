<template>
    <div class="regional">
        <div class="title">
            <div>园区实训数据</div>
        </div>
        <div class="chart-wrap">
            <img class="side" src="../assets/imgs/side2.png" alt="">
            <div class="head">
                <p :style="{left: left + '%'}">
                    <img src="../assets/imgs/game.png" alt="">
                    2017年成功举办甘肃省化工安全技能大赛等12项赛事
                </p>
            </div>
            <div class="chart-regional"></div>
            <div class="statistics">
                <div class="tabs">
                    <span :class="{activeTab: activeTab === 0}" @click="updateActiveTab(0)">HSE实训中心</span>
                    <span :class="{activeTab: activeTab === 1}" @click="updateActiveTab(1)">化工原理装置区</span>
                    <span :class="{activeTab: activeTab === 2}" @click="updateActiveTab(2)">理化实验室</span>
                </div>
                <Row>
                    <Col span="8" class="tab-content">
                    <img class="img1" src="../assets/imgs/tab1.png" alt="">
                        当月培训时长
                        <span v-text="tabs[this.activeTab]['one']"></span>
                        小时
                    </Col>
                    <Col span="8" class="tab-content">
                        <img class="img2" src="../assets/imgs/tab2.png" alt="">
                        当年培训时长
                        <span v-text="tabs[this.activeTab]['two']"></span>
                        小时
                    </Col>
                    <Col span="8" class="tab-content">
                        <img class="img3" src="../assets/imgs/tab3.png" alt="">
                        累计培训时长
                        <span v-text="tabs[this.activeTab]['three']"></span>
                        小时
                    </Col>
                </Row>
            </div>
            <div class="tool animated slideInUp" v-if="data.length > 0">
                <img src="../assets/imgs/tool-tip.png" alt="">
                <div class="header" v-text="data[active]['name']"></div>
                <div class="tool-content">
                    <img :src="data[active]['img']" alt="">
                    <div v-text="data[active]['content']"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {regionalChart, loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {
                activeTab: 0,
                active: 0,
                data: [
                    {
                        name: '化工虚拟园区',
                        img: '/static/images/park1.jpg',
                        content: '化工园区是现代化学工业为适应资源或原料转换，顺应大型化、集约化、最优化、经营国际化和效益最大化发展趋势的产物。'
                    },
                    {
                        name: '化工虚拟园区',
                        img: '/static/images/park2.jpg',
                        content: '化工园区是现代化学工业为适应资源或原料转换，顺应大型化、集约化、最优化、经营国际化和效益最大化发展趋势的产物。'
                    },
                    {
                        name: '化工安全实训基地',
                        img: '/static/images/base.png',
                        content: '化工园区是现代化学工业为适应资源或原料转换，顺应大型化、集约化、最优化、经营国际化和效益最大化发展趋势的产物。'
                    },
                    {
                        name: '化工虚拟园区',
                        img: '/static/images/park3.jpg',
                        content: '化工园区是现代化学工业为适应资源或原料转换，顺应大型化、集约化、最优化、经营国际化和效益最大化发展趋势的产物。'
                    }
                ],
                city: ['酒泉市', '武威市', '兰州市', '陇南市'],
                tabs: [
                    {
                        one: 0,
                        two: 0,
                        three: 0
                    },
                    {
                        one: 0,
                        two: 0,
                        three: 0
                    },
                    {
                        one: 0,
                        two: 0,
                        three: 0
                    }
                ],
                timerOne: null,
                timerTwo: null,
                left: 100,
                leftTimer: null
            }
        },
        methods: {
            updateActiveTab(num) {
                this.activeTab = num;
            },
            handleSelectMap(chartInstance, type, name) {
                chartInstance.dispatchAction({
                    type,
                    name
                });
            },
            loopContent(chartInstance) {
                this.handleSelectMap(chartInstance, 'geoSelect', this.city[0]);
                this.timerOne = setInterval(() => {
                    if (this.active === 3) {
                        this.active = 0;
                        this.handleSelectMap(chartInstance, 'geoUnSelect', this.city[3]);
                        this.handleSelectMap(chartInstance, 'geoSelect', this.city[this.active]);
                    } else {
                        this.active = this.active + 1;
                        this.handleSelectMap(chartInstance, 'geoUnSelect', this.city[this.active - 1]);
                        this.handleSelectMap(chartInstance, 'geoSelect', this.city[this.active]);
                    }
                }, 5000);
            },
            loopTabs() {
                this.timerTwo = setInterval(() => {
                    if (this.activeTab === 2) {
                        this.activeTab = 0;
                    } else {
                        this.activeTab = this.activeTab + 1;
                    }
                }, 5000);
            },
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/areainfos?provinceId=1`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let result = response.data.result;
                        let data = [];
                        result.forEach((item, index) => {
                            data.push({
                                name: item.AreaName,
                                value: [item.AreaMapX, item.AreaMapY]
                            });
                        });
                        /*获取城市名称*/
                        this.city = result.map(item => {
                            return item.CityName;
                        });
                        this.data = result.map(item => {
                            return {
                                name: item.AreaName,
                                img: item.AreaImgUrl,
                                content: item.AreaIntro
                            };
                        });
                        this.tabs = result.map(item => {
                            return {
                                one: item.MonthTrainHour,
                                two: item.YearTrainHour,
                                three: item.TotalTrainHour
                            };
                        });
                        this.$nextTick(() => {
                            chartInstance.setOption(regionalChart(data));
                            this.loopContent(chartInstance);
                            this.loopTabs();
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstance.hideLoading();
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart-regional');
            let chartInstance = this.$echarts.init(chart, 'dark');
//            chartInstance.setOption(regionalChart());
            this.getData(chartInstance);
//            this.loopContent(chartInstance);
//            this.loopTabs();
            this.leftTimer = setInterval(() => {
                if (this.left <= -50) {
                    this.left = 100;
                } else {
                    this.left = this.left - 0.1;
                }
            }, 20);
            responseResize(chartInstance, 3.86667);
        },
        beforeDestroy() {
            this.timerOne && clearInterval(this.timerOne);
            this.timerTwo && clearInterval(this.timerTwo);
            this.leftTimer && clearInterval(this.leftTimer);
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/px2rem.scss';

    .regional {
        margin-top: px2rem(20);
        .title {
            color: #a2e4f4;
            font-size: px2rem(18);
            font-weight: bold;
            padding-left: px2rem(11);
            padding-right: px2rem(11);
            letter-spacing: 1px;
            line-height: px2rem(29);
            border-top: 1px solid #0e4552;
            border-bottom: 1px solid #0e4552;
        }
        .chart-wrap {
            margin-top: px2rem(9);
            height: px2rem(598);
            border: 1px solid #447d8b;
            padding: px2rem(10);
            background: url("../assets/imgs/bg.png");
            position: relative;
            .side {
                position: absolute;
                top: 0;
                right: 0;
            }
            .head {
                position: relative;
                overflow: hidden;
                border-bottom: 1px solid #0e4552;
                color: #a2e4f4;
                font-weight: bold;
                height: px2rem(30);
                line-height: px2rem(30);
                font-size: px2rem(14);
                margin: 0 px2rem(39);
                p {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: px2rem(376);
                }
                img {
                    position: static;
                    vertical-align: middle;
                    width: px2rem(40);
                    height: px2rem(14);
                    display: inline-block;
                    margin-right: px2rem(4);
                }
            }
            .chart-regional {
                margin-top: px2rem(10);
                margin-bottom: px2rem(10);
                height: px2rem(464);
                width: 100%;
                overflow: hidden;
            }
            .tabs {
                border-bottom: 2px solid #447d8b;
                margin-left: px2rem(-10);
                margin-right: px2rem(-10);
                span {
                    display: inline-block;
                    text-align: center;
                    padding: 0 px2rem(15);
                    color: #6895a1;
                    font-weight: bold;
                    font-size: px2rem(14);
                    line-height: px2rem(31);
                    cursor: pointer;

                }
                span.activeTab {
                    color: #a2e4f4;
                    background: #0e2830;
                    border-top: 2px solid #225c69;
                }
            }
            .tab-content {
                text-align: center;
                font-weight: bold;
                line-height: px2rem(39);
                font-size: px2rem(14);
                color: #a2e4f4;
                span {
                    color: #fef064;
                    font-size: px2rem(16);
                }
                .img1 {
                    display: inline-block;
                    vertical-align: middle;
                    width: px2rem(14);
                    height: px2rem(14);
                }
                .img2 {
                    display: inline-block;
                    vertical-align: middle;
                    width: px2rem(9);
                    height: px2rem(8);
                }
                .img3 {
                    display: inline-block;
                    vertical-align: middle;
                    width: px2rem(10);
                    height: px2rem(12);
                }
            }
            .tool {
                position: absolute;
                bottom: px2rem(82);
                left: px2rem(10);
                width: px2rem(431);
                height: px2rem(305);
                img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
                .header {
                    position: absolute;
                    color: #fff;
                    height: px2rem(60);
                    line-height: px2rem(60);
                    font-size: px2rem(20);
                    font-weight: bold;
                    padding-left: px2rem(30);
                    letter-spacing: 1px;
                }
                .tool-content {
                    position: absolute;
                    top: px2rem(57);
                    left: 0;
                    right: 0;
                    bottom: 0;
                    div {
                        position: absolute;
                        padding: px2rem(10);
                        font-size: px2rem(16);
                        line-height: px2rem(26);
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: px2rem(268);
                        background-color: rgba(77, 128, 149, 0.8);
                        border-bottom-right-radius: px2rem(15);
                    }
                }
            }
        }
    }
</style>
