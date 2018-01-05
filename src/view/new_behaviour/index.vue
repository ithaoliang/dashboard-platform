<template>

    <div>

        <div class="new-c">
            <div class="mid-third">
                <div class="mid-third-top">
                    <p>用户行为分析</p>

                    <div class="choice">
                        <span>终端</span>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="choice">
                        <span>机型</span>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="choice">
                        <span>版本</span>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="block1">
                        <el-date-picker
                                v-model="value7"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator=" - "
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2">
                        </el-date-picker>
                    </div>
                </div>
                <div id="yhxwfx" class="mid-third-bottom"></div>
                <div class="new-c-type-bottom">
                    <ul class="new-c-list" v-for="(item,index) in pic">
                        <li>
                            <img :src="item.src" alt="">
                            <p>{{ item.msg }}</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="new-c-fenxi">
            <div class="new-fenxi-title">
                <div class="download-icon2">
                    <a href="#">
                        <img src="./image/xiazai.png" alt="">
                    </a>
                </div>
                <p>趋势分析</p>
            </div>
            <div class="new-c-table">
                <table class="fenxi-table-3" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr style="background: rgb(250, 250, 250);">
                        <td>终端</td>
                        <td>机型</td>
                        <td>版本</td>
                        <td>启动次数</td>
                        <td style="width: 200px;">单次使用时长</td>
                        <td style="width: 200px;">人均浏览量</td>
                        <td style="width: 200px;">人均启动次数</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in number">
                        <td>{{item.n1}}</td>
                        <td>{{item.n2}}</td>
                        <td>{{item.n3}}</td>
                        <td>{{item.n4}}</td>
                        <td>{{item.n5}}</td>
                        <td>{{item.n6}}</td>
                        <td>{{item.n7}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="fenye">

                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

