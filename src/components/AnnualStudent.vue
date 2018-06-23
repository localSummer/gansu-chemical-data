<template>
    <div class="annual-student">
        <div class="title">
            <span>年度学生画像</span>
            <img class="title-bg" src="../assets/imgs/user-title.png" alt="">
            <img class="title-bar" src="../assets/imgs/title-bar.png" alt="">
        </div>
        <div class="chart-wrap">
            <Row type="flex" justify="center">
                <Col span="14">
                    <div class="chart-student"></div>
                </Col>
                <Col span="10" class="content">
                    <div class="description">
                        <div class="child">
                            <span>
                                <i v-text="activeDay"></i>
                                <span>天</span>
                            </span>
                            <span>年度累计活跃天数</span>
                        </div>
                        <div class="child">
                            <span>
                                <i v-text="studyDays"></i>
                                <span>小时</span>
                            </span>
                            <span>年度累计学时</span>
                        </div>
                        <div class="child">
                            <span v-text="abilityIndex"></span>
                            <span>年度能力指数</span>
                        </div>
                        <div class="child">
                            <span>
                                <i v-text="subjectNum"></i>
                                <span>项</span>
                            </span>
                            <span>年度累计实训科目</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import {annualStudent, loadingConfig} from '../utils/chartData';
    import {responseResize} from '../utils/common';
    export default {
        data() {
            return {
                activeDay: 0,
                studyDays: 0,
                subjectNum: 0,
                abilityIndex: 0
            }
        },
        methods: {
            getData(chartInstance) {
                chartInstance.showLoading(loadingConfig);
                this.$http.get(`/api/stat/userportrait?provinceId=1`).then((response) => {
                    if (response.data.returncode === 0) {
                        chartInstance.hideLoading();
                        let result = response.data.result;
                        this.activeDay = result.ActiveDay? result.ActiveDay: 0;
                        this.studyDays = result.StudyDays? result.StudyDays : 0;
                        this.subjectNum = result.SubjectNum? result.SubjectNum : 0;
                        this.abilityIndex = result.AblityIndex? result.AblityIndex : 0;
                        annualStudent.radar[0].indicator = result.UserPortraits.map(item => {
                            return {
                                text: item.ResName,
                                max: 100
                            };
                        });
                        annualStudent.series[0].data[0].value = result.UserPortraits.map(item => {
                            return item.ResScore;
                        });
                        chartInstance.setOption(annualStudent);
                    }
                }).catch((err) => {
                    console.log(err);
                    chartInstance.hideLoading();
                });
            }
        },
        mounted() {
            let chart = document.querySelector('.chart-student');
            let chartInstance = this.$echarts.init(chart, 'dark');
            this.getData(chartInstance);
//            chartInstance.setOption(annualStudent);
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
    .annual-student {
        margin-top: px2rem(19);
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
            position: relative;
            .chart-student {
                height: px2rem(215);
                width: 100%;
                overflow: hidden;
            }
            .content {
                padding: px2rem(15) 0;
            }
            .description {
                width: 100%;
                height: 100%;
                border-left: 1px solid #447d8b;
                padding: 0 0 0 px2rem(10);
            }
            .child {
                display: flex;
                justify-content:space-between;
                border-bottom: 1px solid #447d8b;
                line-height: px2rem(40);
                i {
                    font-style: normal;
                }
                span:first-child {
                    color: #fef064;
                    font-weight: bold;
                    font-size: px2rem(20);
                    span {
                        color: #fef064;
                        font-size: px2rem(14);
                    }
                }
                span:last-child {
                    color: #a2e4f4;
                    font-size: px2rem(14);
                }
            }
        }
    }
</style>
