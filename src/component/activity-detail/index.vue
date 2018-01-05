<template>
    <div>
        <!--活动基本信息-->
        <div v-if="detailDataFlag" :loading="loading">
            <cs-card title="活动基本信息">
                <div class="preview-content">
                    <div class="activity-base-wrap">
                        <div class="base-left">
                            <div class="mgn-btn20">
                                <span class="pad-r20">活动名称:</span>
                                <span class="pad-r20">{{detailData.activityName || '暂无'}}</span>
                            </div>
                            <div class="mgn-btn20">
                                <span class="pad-r20">活动状态:</span>
                                <span class="pad-r20 color-blue01">{{activityStatus()}}</span>
                                <!--<span class="pad-r20 color-blue01">待审核</span>-->
                            </div>
                        </div>
                        <div class="base-right">
                            <div class="mgn-btn20">
                                <span class="pad-r20">活动目的:</span>
                                <span class="pad-r20">{{detailData.target || '转化率'}}</span>
                            </div>
                            <div class="mgn-btn20">
                                <span class="pad-r20">审核编号:</span>
                                <span class="pad-r20">{{auditCode || '201708080506'}}</span>
                            </div>

                        </div>
                    </div>

                    <table style="width: 100%">
                        <tbody>
                        <tr>
                            <td class="table-left bg-grey01">投放用户群</td>
                            <td>
                                <div class="table-right-content">
                                    <div class="content-part-wrap">
                                        <div class="sub-body">
                                            <div class="part-item">
                                                <span>投放地域：</span>
                                                <!--pass-->
                                                <span>{{activityAreaList(detailData) || '北京 石家庄 南京'}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>画像标签：</span>
                                                <!--pass-->
                                                <span>{{activityLabelsList(detailData) || '金融 购物'}}</span>
                                            </div>
                                            <div class="part-item" style="margin-bottom: 0">
                                                <span>拥有设备：</span>
                                                <!--pass-->
                                                <span>{{activityDevicesList(detailData) || '全部设备'}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-left bg-grey01">活动形式</td>
                            <td>
                                <div class="table-right-content">
                                    <div class="content-part-wrap line01">
                                        <div class="sub-title">
                                            <span class="fontW10">活动模板</span>
                                        </div>
                                        <div class="sub-body">
                                            <div class="part-item">
                                                <span>活动模板名称：</span>
                                                <!--pass-->
                                                <span>{{detailData.productModule.name || '边看边买'}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-part-wrap line01">
                                        <div class="sub-title">
                                            <span class="fontW10">呈现位置</span>
                                        </div>
                                        <div class="sub-body">
                                            <div class="part-item">
                                                <span>呈现设备：</span>
                                                <!--pass-->
                                                <span>{{detailData.nicheResource || '全部'}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>呈现位置：</span>
                                                <!--pass-->
                                                <span>{{displayResourceType(detailData)}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-part-wrap line01">
                                        <div class="sub-title">
                                            <span class="fontW10">活动投放方式</span>
                                        </div>
                                        <!--三种投放方式-->
                                        <!--视频呈现位投放方式-->
                                        <div class="sub-body" v-if="detailData.nicheType == 2">
                                            <div class="part-item">
                                                <span>视频埋点范围：</span>
                                                <span>{{buriedType() || '全部'}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>埋点时间：</span>
                                                <span>{{buriedTime(detailData) || '30s'}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>活动有效期：</span>
                                                <span>{{detailTimeFormmat()}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>呈现设备：</span>
                                                <span>{{detailData.activityNicheResourceList.join(', ')}}</span>
                                            </div>
                                        </div>
                                        <!--push呈现位投放方式-->
                                        <div class="sub-body" v-if="detailData.nicheType == 3">
                                            <div class="part-item">
                                                <span>推送策略：</span>
                                                <span>{{detailData.activityPushe.pushIntervals == 1 ? '单次推送' : '重复推送'}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>活动时间：</span>
                                                <span>{{detailTimeFormmat(detailData)}}</span>
                                            </div>
                                            <div class="part-item" v-if="detailData.activityPushe.pushIntervals == 2">
                                                <span>重复频率：</span>
                                                <span>{{detailData.activityPushe.strategy}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>重复时间：</span>
                                                <span>{{activityPushTime(detailData)}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>投放设备：</span>
                                                <span>{{activityNicheResourceList(detailData)}}</span>
                                            </div>
                                        </div>
                                        <!--普通呈现位投放方式-->
                                        <div class="sub-body" v-if="detailData.nicheType == 1">
                                            <div class="part-item">
                                                <span>活动有效期：</span>
                                                <span>{{detailTimeFormmat()}}</span>
                                            </div>
                                            <div class="part-item">
                                                <span>呈现设备：</span>
                                                <span>{{activityNicheResourceList(detailData)}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-part-wrap">
                                        <div class="sub-title">
                                            <span class="fontW10">服务</span>
                                        </div>
                                        <div class="sub-body">
                                            <div class="part-item">
                                                <span>服务类型：</span>
                                                <span>{{serviceType(detailData)}}</span>
                                            </div>
                                            <div v-if="detailData.externalContent != null">
                                                <div class="part-item">
                                                    <span>商品名称：</span>
                                                    <span v-if="true">商品名称</span>
                                                    <span>{{goodsInfo(detailData, 0)}}</span>
                                                </div>
                                                <div class="part-item">
                                                    <span>商品描述：</span>
                                                    <!--<span v-if="true">明星同款</span>-->
                                                    <span>{{goodsInfo(detailData, 2)}}</span>
                                                </div>
                                                <div class="part-item">
                                                    <span>商品图片</span>
                                                    <!--<img src="../imgs/step03-active.png" alt="">-->
                                                    <img style="max-width: 200px" v-for="item in goodsInfo(detailData, 1)" :src="item" alt="">
                                                </div>
                                                <div class="part-item" style="margin-bottom: 0">
                                                    <span>商品跳转URL：</span>
                                                    <!--<span>暂无</span>-->
                                                    <span>{{goodsInfo(detailData, 3)}}</span>
                                                </div>
                                            </div>
                                            <div v-else="">
                                                <div class="part-item" style="margin-bottom: 0">
                                                    <span>服务名称：</span>
                                                    <!--<span>{{detailData.waiter.name || '暂无'}}</span>-->
                                                    <span>{{detailData.waiter.name}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-left bg-grey01">预计覆盖范围</td>
                            <td>
                                <div class="content-part-wrap">
                                    <div class="table-right-content">
                                        <div class="sub-body">
                                            <div class="part-item" style="margin-bottom: 0">
                                                <span>预计覆盖：</span>
                                                <span>365435位用户</span>
                                                <!--<span>{{detailData.countDevice}}</span>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </cs-card>
            <!--活动期内资源位使用情况-->
            <cs-card title="活动期内呈现位使用情况">
                <div class="preview-content">
                    <el-table :data="detailData.activityList">
                        <el-table-column
                                label="活动"
                                prop="activityName">
                        </el-table-column>
                        <el-table-column
                                label="活动时间"
                                prop="">
                            <template scope="scope">
                                <div>{{listTimeFormmat(scope.row.startTime)}}</div>
                                <div>{{listTimeFormmat(scope.row.endTime)}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="投放用户群"
                                prop="">
                            <template scope="scope">
                                <div>设备: {{activityDevicesList(scope.row)}}</div>
                                <div>用户标签：{{activityLabelsList(scope.row)}}</div>
                                <div>地域: {{activityAreaList(scope.row)}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="投放方式"
                                prop="">
                            <template scope="scope">
                                <div>埋点范围：{{buriedArea(scope.row)}}</div>
                                <div>呈现设备：{{scope.row.nicheResource}}</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </cs-card>
        </div>
    </div>
</template>
<style lang="less" scoped src="./style.less"></style>
<script src="./script.js"></script>