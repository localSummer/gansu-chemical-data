<template>
    <div class="train">
        <div class="title">
            <span>
            近五年培训资源增长趋势
            </span>
            <img class="title-bg" src="../assets/imgs/user-title.png" alt="">
            <img class="title-bar" src="../assets/imgs/title-bar.png" alt="">
        </div>
        <div class="chart-wrap">
            <div class="chart-train"></div>
        </div>
    </div>
</template>

<script>
    import {trainData,loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {}
        },
        methods: {
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/trainresthrend?provinceId=1&nyear=5`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let result = response.data.result;
                        trainData.legend.data = result.map((item) => {
                            return item.ResName;
                        });
                        trainData.xAxis[0].data = result[0].ResYearList.map((item) => {
                            return item.LogDate;
                        });
                        trainData.series = result.map((item) => {
                            return {
                                name: item.ResName,
                                type: 'bar',
                                barGap: 0,
                                data: item.ResYearList.map((yearData) => {
                                    return yearData.ResNum;
                                })
                            };
                        });
                        chartInstance.setOption(trainData);
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstance.hideLoading();
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart-train');
            let chartInstance = this.$echarts.init(chart, 'dark');
            this.getData(chartInstance);
//            chartInstance.setOption(trainData);
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
    .train {
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
                right: px2rem(16);
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
            .chart-train {
                height: px2rem(215);
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>
