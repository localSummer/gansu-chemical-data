<template>
    <div class="ability">
        <div class="title">
            <span>年度学生能力提升情况</span>
            <img class="title-bg" src="../assets/imgs/user-title.png" alt="">
            <img class="title-bar" src="../assets/imgs/title-bar.png" alt="">
        </div>
        <div class="chart-wrap">
            <div class="chart-ability"></div>
        </div>
    </div>
</template>

<script>
    import {annualAbility, loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {}
        },
        methods: {
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/ablitycond?provinceId=1`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let result = response.data.result;
                        annualAbility.series[0].data = result.map(item => {
                            return {
                                value: item.AbilityRate,
                                name: item.AblityName
                            };
                        });
                        chartInstance.setOption(annualAbility);
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstance.hideLoading();
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart-ability');
            let chartInstance = this.$echarts.init(chart, 'dark');
            this.getData(chartInstance);
//            chartInstance.setOption(annualAbility);
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
    .ability {
        margin-top: px2rem(19);
        margin-right: px2rem(30);
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
            .chart-ability {
                height: px2rem(215);
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>
