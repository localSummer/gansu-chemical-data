<template>
    <div class="summary">
        <div class="title">
            <div>综合实训数据</div>
            <div class="date">2018-3-15</div>
        </div>
        <div class="wrap">
            <div class="one">
                <img src="../assets/imgs/side.png" alt="">
                <Row type="flex" align="middle">
                    <Col span="14">
                        <h3>总培训次数（人次）</h3>
                        <h4 v-text="tranTimes"></h4>
                    </Col>
                    <Col span="10">
                        <div class="bg" v-if="isLoaded"></div>
                        <div class="chart-one"></div>
                    </Col>
                </Row>
            </div>
            <div class="two">
                <img src="../assets/imgs/side.png" alt="">
                <Row type="flex" align="middle">
                    <Col span="14">
                        <h3>用户总数（个）</h3>
                        <h4 v-text="userNum"></h4>
                    </Col>
                    <Col span="10">
                        <div class="bg" v-if="isLoaded"></div>
                        <div class="chart-two"></div>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="wrap">
            <div class="three">
                <img src="../assets/imgs/side.png" alt="">
                <Row type="flex" align="middle">
                    <Col span="14">
                        <h3>总学习时长（分钟）</h3>
                        <h4 v-text="learningMinute"></h4>
                    </Col>
                    <Col span="10">
                        <div class="bg" v-if="isLoaded"></div>
                        <div class="chart-three"></div>
                    </Col>
                </Row>
            </div>
            <div class="four">
                <img src="../assets/imgs/side.png" alt="">
                <Row type="flex" align="middle">
                    <Col span="14">
                        <h3>总培训通过人数</h3>
                        <h4 v-text="userPassNum"></h4>
                    </Col>
                    <Col span="10">
                        <div class="bg" v-if="isLoaded"></div>
                        <div class="chart-four"></div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import {summaryOne, summaryTwo, summaryThree, summaryFour, loadingConfig} from '../utils/chartData';
    import {multiResponseResize} from '../utils/common';
    export default {
        data() {
            return {
                tranTimes: 0,
                userNum: 0,
                learningMinute: 0,
                userPassNum: 0,
                isLoaded: false,
                timer: null
            }
        },
        methods: {
            init(node, data) {
                let chart = document.querySelector(node);
//                chartInstance.setOption(data);
                return this.$echarts.init(chart, 'dark');
            },
            getData(chartInstances) {
                this.isLoaded = false;
                chartInstances.forEach(item => {
                    item.showLoading(loadingConfig)
                });
                this.$http.get(`api/stat/nowsummary?provinceId=1`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstances.forEach(item => {
                            item.hideLoading();
                        });
                        let result = response.data.result;
                        this.tranTimes = result.TranTimes;
                        this.userNum = result.UserNum;
                        this.learningMinute = result.LearningMinute;
                        this.userPassNum = result.UserPassNum;
                        summaryOne.title.text = result.TranTimesRatio + '%';
                        summaryTwo.title.text = result.UserNumRatio + '%';
                        summaryThree.title.text = result.LearningMinuteRatio + '%';
                        summaryFour.title.text = result.UserPassNumRatio + '%';
                        summaryOne.series[0].data[0].value = result.TranTimesRatio;
                        summaryOne.series[0].data[1].value = 100 - result.TranTimesRatio;
                        summaryTwo.series[0].data[0].value = result.UserNumRatio;
                        summaryTwo.series[0].data[1].value = 100 - result.UserNumRatio;
                        summaryThree.series[0].data[0].value = result.LearningMinuteRatio;
                        summaryThree.series[0].data[1].value = 100 - result.LearningMinuteRatio;
                        summaryFour.series[0].data[0].value = result.UserPassNumRatio;
                        summaryFour.series[0].data[1].value = 100 - result.UserPassNumRatio;
                        chartInstances[0].setOption(summaryOne);
                        chartInstances[1].setOption(summaryTwo);
                        chartInstances[2].setOption(summaryThree);
                        chartInstances[3].setOption(summaryFour);
                        this.isLoaded = true;
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstances.forEach(item => {
                        item.hideLoading();
                    });
                });
            }
        },
        mounted() {
            let chartOne = this.init('.chart-one', summaryOne);
            let chartTwo = this.init('.chart-two', summaryTwo);
            let chartThree = this.init('.chart-three', summaryThree);
            let chartFour = this.init('.chart-four', summaryFour);
            let chartInstances = [chartOne, chartTwo, chartThree, chartFour];
            this.getData(chartInstances);
            /*this.timer = setInterval(() => {
                this.getData(chartInstances);
            }, 5000);*/
            multiResponseResize(chartInstances, 0.81667);
        },
        beforeDestroy() {
            this.timer && clearInterval(this.timer);
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/px2rem.scss';
    @-webkit-keyframes change {
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .summary {
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
            display: flex;
            justify-content: space-between;
            .date {
                font-style: italic;
            }
        }
        .wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: px2rem(9);
            &>div {
                width: 49%;
                border: 1px solid #0e4552;
                height: px2rem(100);
                position: relative;
                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    height: px2rem(99);
                }
                h3 {
                    font-size: px2rem(18);
                    margin-top: px2rem(14);
                    color: #a2e4f4;
                    padding-left: px2rem(16);
                }
                h4 {
                    font-size: px2rem(40);
                    color: #fef064;
                    padding-left: px2rem(16);
                }
                .chart-one, .chart-two, .chart-three, .chart-four {
                    width: px2rem(98);
                    height: px2rem(98);
                }
            }
        }
        .bg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: px2rem(98);
            background: url("../assets/imgs/loading.png") center center no-repeat;
            animation:change 2s linear infinite;
        }
    }
</style>
