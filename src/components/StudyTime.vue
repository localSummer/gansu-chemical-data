<template>
    <div class="study">
        <div class="title">
      <span>
        近五年学习时长趋势
      </span>
            <img class="title-bg" src="../assets/imgs/user-title.png" alt="">
            <img class="title-bar" src="../assets/imgs/title-bar.png" alt="">
        </div>
        <div class="chart-wrap">
            <div class="chart-study"></div>
        </div>
    </div>
</template>

<script>
    import {studyData, loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {}
        },
        methods: {
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/learningdaythrend?provinceId=1&nyear=5`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let xAxisData = [];
                        let onlineData = [];
                        let localData = [];
                        response.data.result.Online.forEach((item) => {
                            xAxisData.push(item.LogDate);
                            onlineData.push(item.LearningDays);
                        });
                        response.data.result.Local.forEach((item) => {
                            localData.push(item.LearningDays);
                        });
                        studyData.xAxis.data = xAxisData;
                        studyData.series[0].data = onlineData;
                        studyData.series[1].data = localData;
                        chartInstance.setOption(studyData);
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstance.hideLoading();
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart-study');
            let chartInstance = this.$echarts.init(chart, 'dark');
            this.getData(chartInstance);
//            chartInstance.setOption(studyData);
            responseResize(chartInstance, 1.79167);
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
    .study {
        margin-top: px2rem(19);
        margin-left: px2rem(30);
        .title {
            color: #a2e4f4;
            height: px2rem(72);
            line-height: px2rem(72);
            font-size: px2rem(20);
            font-weight: bold;
            padding-left: px2rem(30);
            letter-spacing: 1px;
            position: relative;
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
        }
        .chart-wrap {
            margin-top: px2rem(3);
            height: px2rem(235);
            border: 1px solid #447d8b;
            padding: px2rem(10);
            background: url("../assets/imgs/bg.png");
            .chart-study {
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>
