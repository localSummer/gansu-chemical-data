<template>
    <div id="app">
        <Row :gutter="19" type="flex">
            <Col span="7">
            <div class="left">
                <UserData></UserData>
                <StudyTime></StudyTime>
                <TrainResource></TrainResource>
            </div>
            </Col>
            <Col span="10">
            <div class="middle">
                <div class="head">
                    <img src="./assets/imgs/title-bg.png" alt="">
                    <h1>甘肃化工安全实训大数据平台</h1>
                </div>
                <SummaryTrain></SummaryTrain>
                <RegionalStatistics></RegionalStatistics>
            </div>
            </Col>
            <Col span="7">
            <div class="right">
                <AnnualTrain></AnnualTrain>
                <AnnualStudent></AnnualStudent>
                <AnnualAbility></AnnualAbility>
            </div>
            </Col>
        </Row>
        <img class="circle circle1" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle2" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle3" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle4" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle5" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle6" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle7" src="./assets/imgs/circle.png" alt="">
        <img class="circle circle8" src="./assets/imgs/circle.png" alt="">
        <img class="circle line" src="./assets/imgs/ling.png" alt="">
    </div>
</template>

<script>
    import UserData from './components/UserData.vue';
    import StudyTime from './components/StudyTime.vue';
    import TrainResource from './components/TrainResource.vue';
    import SummaryTrain from './components/SummaryTrain.vue';
    import AnnualTrain from './components/AnnualTrain.vue';
    import AnnualStudent from './components/AnnualStudent.vue';
    import AnnualAbility from './components/AnnualAbility.vue';
    import RegionalStatistics from './components/RegionalStatistics.vue';

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            UserData,
            StudyTime,
            TrainResource,
            SummaryTrain,
            AnnualTrain,
            AnnualStudent,
            AnnualAbility,
            RegionalStatistics
        }
    }
</script>

<style lang="scss">
    @import "./assets/styles/px2rem.scss";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        border: 1px solid #477f8c;
        min-width: 1440px;
        margin: 0 auto;
        position: relative;
        .circle {
            position: absolute;
            width: px2rem(10);
            height: px2rem(10);
        }
        .circle1 {
            top: px2rem(-6);
            left: px2rem(53);
        }
        .circle2 {
            top: px2rem(98);
            left: px2rem(-6);
        }
        .circle3 {
            top: px2rem(-6);
            right: px2rem(53);
        }
        .circle4 {
            top: px2rem(98);
            right: px2rem(-6);
        }
        .circle5 {
            bottom: px2rem(-6);
            left: px2rem(53);
        }
        .circle6 {
            bottom: px2rem(98);
            left: px2rem(-6);
        }
        .circle7 {
            bottom: px2rem(-6);
            right: px2rem(53);
        }
        .circle8 {
            bottom: px2rem(98);
            right: px2rem(-6);
        }
        .line {
            width: px2rem(759);
            height: px2rem(20);
            bottom: px2rem(-10);
            left: 50%;
            margin-left: px2rem(-379.5);
            right: px2rem(557);
        }
    }

    .left, .right {
        margin-top: px2rem(32);
        margin-bottom: px2rem(32);
    }

    .middle {
        .head {
            margin-top: px2rem(-3);
            text-align: center;
            position: relative;
            img {
                position: absolute;
                width: 100%;
                left: 0;
                height: px2rem(76);
            }
            h1 {
                text-align: center;
                height: px2rem(76);
                line-height: px2rem(73);
                font-size: px2rem(34);
                color: #a2e4f4;
                letter-spacing: 1px;
            }
        }
    }
</style>
