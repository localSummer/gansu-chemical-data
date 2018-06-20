<template>
    <div class="annual-train">
        <div class="title">
            <div class="content">
                <div>2017年度培训数据</div>
                <div class="date">2017-1-1~2017-12-31</div>
            </div>
            <img class="title-bg" src="../assets/imgs/user-title.png" alt="">
            <img class="title-bar" src="../assets/imgs/title-bar.png" alt="">
        </div>
        <div class="chart-wrap">
            <Row type="flex" justify="center">
                <Col span="8">
                    <div class="annual-train-one"></div>
                    <p>培训出勤率</p>
                </Col>
                <Col span="8">
                    <div class="annual-train-two"></div>
                    <p>培训通过率</p>
                </Col>
                <Col span="8">
                    <div class="annual-train-three"></div>
                    <p>培训满意度</p>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import {annualTrainOne, annualTrainTwo, annualTrainThree, loadingConfig} from '../utils/chartData';
    import {multiResponseResize} from '../utils/common';
    export default {
        data() {
            return {}
        },
        methods: {
            init(node, data) {
                let chart = document.querySelector(node);
//                chartInstance.setOption(data);
                return this.$echarts.init(chart, 'dark');
            },
            getData(chartInstances) {
                chartInstances.forEach(item => {
                    item.showLoading(loadingConfig)
                });
                this.$http.get(`/api/stat/areainfos?provinceId=1`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstances.forEach(item => {
                            item.hideLoading();
                        });
                        let result = response.data.result;
                        let attendRate = result.AttendRate? result.AttendRate : 0;
                        let passRate = result.PassRate? result.PassRate : 0;
                        let satisfyRate = result.SatisfyRate? result.SatisfyRate : 0;
                        annualTrainOne.title.text = attendRate + '%';
                        annualTrainTwo.title.text = passRate + '%';
                        annualTrainThree.title.text = satisfyRate + '%';
                        annualTrainOne.series[0].data[0].value = attendRate;
                        annualTrainOne.series[0].data[1].value = 100 - attendRate;
                        annualTrainTwo.series[0].data[0].value = passRate;
                        annualTrainTwo.series[0].data[1].value = 100 - passRate;
                        annualTrainThree.series[0].data[0].value = satisfyRate;
                        annualTrainThree.series[0].data[1].value = 100 - satisfyRate;
                        chartInstances[0].setOption(annualTrainOne);
                        chartInstances[1].setOption(annualTrainTwo);
                        chartInstances[2].setOption(annualTrainThree);
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
            let chartOne = this.init('.annual-train-one', annualTrainOne);
            let chartTwo = this.init('.annual-train-two', annualTrainTwo);
            let chartThree = this.init('.annual-train-three', annualTrainThree);
            let chartInstances = [chartOne, chartTwo, chartThree];
            this.getData(chartInstances);
            multiResponseResize(chartInstances, 1.5);
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/px2rem.scss';
    @keyframes pulse {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0.3;
        }

        100% {
            opacity: 1;
        }
    }
    .annual-train {
        margin-right: px2rem(30);
        .title {
            color: #a2e4f4;
            height: px2rem(72);
            line-height: px2rem(71);
            font-size: px2rem(20);
            font-weight: bold;
            padding-left: px2rem(30);
            letter-spacing: 1px;
            position: relative;
            .content {
                display: flex;
                justify-content: space-between;
            }
            .title-bg {
                width: 100%;
                height: px2rem(72);
                position: absolute;
                top: 0;
                left: 0;
            }
            .title-bar {
                position: absolute;
                top: 0;
                right: px2rem(20);
                width: 78%;
                height: px2rem(13);
                animation: pulse 1s linear infinite;
            }
            .date {
                font-size: px2rem(15);
                padding-right: px2rem(40);
            }
        }
        .chart-wrap {
            margin-top: px2rem(3);
            height: px2rem(235);
            border: 1px solid #447d8b;
            padding: px2rem(10);
            background: url("../assets/imgs/bg.png");
            position: relative;
            .annual-train-one, .annual-train-two, .annual-train-three {
                height: px2rem(180);
                width: 100%;
                overflow: hidden;
            }
            p {
                width: 100%;
                text-align: center;
                color: #a2e4f4;
                font-weight: bold;
                font-size: px2rem(18);
            }
        }
    }
</style>
