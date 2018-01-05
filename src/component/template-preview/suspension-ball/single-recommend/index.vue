<template>
    <div>
        <el-row class="template-item">
            <el-col style="width: 180px">消息预览图片：</el-col>
            <el-col :span="16">
                <img v-for="item in imgList('picurl')" :src="item" alt="" style="max-width: 200px">
            </el-col>
        </el-row>
        <el-row class="template-item">
            <el-col style="width: 180px">是否用toast显示：</el-col>
            <el-col :span="16">
                <span>{{showToastWay(templateData.forcetoast)}}</span>
            </el-col>
        </el-row>
        <template v-if="templateData.forcetoast != 1">
            <el-row class="template-item">
                <el-col style="width: 180px">是否直接显示消息：</el-col>
                <el-col :span="16">
                    <span>{{templateData.showbrief === 1 ? '不直接显示，需用户点击后出现' : '直接显示消息，无需用户点击后出现'}}</span>
                </el-col>
            </el-row>
            <el-row class="template-item">
                <el-col style="width: 180px">是否显示消息预览：</el-col>
                <el-col :span="16">
                    <div>{{templateData.showbrief == 1 ? '显示' : '不显示'}}</div>
                </el-col>
            </el-row>
            <el-row class="template-item" v-if="templateData.showbrief == 1">
                <el-col style="width: 180px">消息预览展示方式：</el-col>
                <el-col :span="16">
                    <span>{{templateData.directshowbrief == 0 ? 'hover显示预览（鼠标移上去之后显示预览）' : '直接显示预览'}}</span>
                </el-col>
            </el-row>
            <el-row class="template-item">
                <el-col style="width: 180px">消息停留时间：</el-col>
                <el-col :span="16">
                    <span>{{templateData.msgtime == '' ? '永久显示' : templateData.msgtime}}</span>
                    <span v-if="templateData.msgtime !== ''">分</span>
                </el-col>
            </el-row>
        </template>
        <el-row class="template-item">
            <el-col style="width: 180px">跳转展示图片：</el-col>
            <el-col :span="16">
                <img v-for="item in imgList('redirectImg')" :src="item" alt="" style="max-width: 200px">
            </el-col>
        </el-row>
        <el-row class="template-item" v-if="templateData.redirectUrl !== ''">
            <el-col style="width: 180px">跳转URL：</el-col>
            <el-col :span="16">
                <span>{{templateData.redirectUrl}}</span>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./script.js"></script>
<style scoped lang="less" src="./style.less"></style>