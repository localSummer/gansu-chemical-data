<template>
    <div class="user-data">
        <div class="title">
            <span>
            近五年用户数增长趋势
            </span>
            <img src="../assets/imgs/user-title.png" alt="">
        </div>
        <div class="chart-wrap">
            <div class="chart"></div>
        </div>
    </div>
</template>

<script>
    import {userData, loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {}
        },
        methods: {
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/userthrend?provinceId=1&nyear=5`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let xAxisData = [];
                        let onlineData = [];
                        let localData = [];
                        response.data.result.Online.forEach((item) => {
                            xAxisData.push(item.LogDate);
                            onlineData.push(item.UserNum);
                        });
                        response.data.result.Local.forEach((item) => {
                            localData.push(item.UserNum);
                        });
                        userData.xAxis.data = xAxisData;
                        userData.series[0].data = onlineData;
                        userData.series[1].data = localData;
                        chartInstance.setOption(userData);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart');
            let chartInstance = this.$echarts.init(chart, 'dark');
            this.getData(chartInstance);
//            chartInstance.setOption(userData);
            responseResize(chartInstance, 1.79167);
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/px2rem.scss';

    .user-data {
        margin-left: px2rem(30);
        .title {
            color: #a2e4f4;
            height: px2rem(72);
            line-height: px2rem(71);
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
            .chart {
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>
