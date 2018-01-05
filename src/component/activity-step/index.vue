<template>
    <div class="preview-content">
        <div class="progress-wrap">
            <div class="progress-hd">
                <div class="progress-common" @click="handleRoute(0)">
                    <img class="active-img" src="./img/step06-active.png" alt="">
                    <div class="progress-desc">
                        <p class="color-blue01">选择投放用户群</p>
                    </div>
                </div>
                <div class="progress-arrow" :class="{'hide-overflow': activityStep === 1}">
                    <img v-if="activityStep != 1" src="./img/progress-arrow.png" alt="">
                    <img v-else="" src="./img/unactive-line.png" alt="">
                </div>
                <div class="progress-common">
                    <img class="active-img" src="./img/step07-active.png" @click="handleRoute(1)" alt="" v-if="activityStep != 1">
                    <img v-else="" src="./img/step07.png" alt="">
                    <div class="progress-desc">
                        <p :class="{'color-blue01': activityStep != 1}">选择活动形式</p>
                    </div>
                </div>
                <div class="progress-arrow" :class="{'hide-overflow': activityStep === 2 || activityStep === 1}">
                    <img v-if="activityStep == 3" src="./img/progress-arrow.png" alt="">
                    <img v-else="" src="./img/unactive-line.png" alt="">
                </div>
                <div class="progress-common">
                    <img class="active-img" v-if="activityStep == 3" src="./img/step08-active.png" alt="">
                    <img v-else="" src="./img/step08.png" alt="">
                    <div class="progress-desc width190">
                        <p :class="{'color-blue01': activityStep == 3}">预览提交</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

