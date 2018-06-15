<template>
    <div class="train">
        <div class="title">
            <span>
            近五年培训资源增长趋势
            </span>
            <img src="../assets/imgs/user-title.png" alt="">
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
                        let count = 0;
                        studyData.legend.data = result.map((item) => {
                            return item.ResName;
                        });
                        studyData.xAxis[0].data = result[0].ResYearList.map((item) => {
                            return item.LogDate;
                        });
                        while (count < result.length) {
                            studyData.series[count].data = result[count].ResYearList.map((item) => {
                                return item.ResNum;
                            });
                            count++;
                        }
                        chartInstance.setOption(studyData);
                    }
                }).catch((err) => {
                    console.log(err);
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
            img {
                width: 100%;
                height: px2rem(72);
                position: absolute;
                top: 0;
                left: 0;
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
