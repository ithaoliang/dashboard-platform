<template>

<div>
    <div class="hello">
        <div class="type">
        <span>终端</span><el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
               <div class="block">
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

    <div class="fenxi-ana-gk">
                <div class="fenxi-pic-gk">
                    <div class="fenxi-pic-left-gk">
                        <p>当期</p>
                        <p>上期</p>
                    </div>
                    <div class="fenxi-pic-right-gk">
                        <ul class="fenxi-list-gk">
                            <li v-for="(item,index) in listData">
                                <img :src="item.src" alt="">
                                <div class="word-gk">
                                    <p class="s1">{{item.title1}}</p>
                                    <p class="s2">{{item.num1}}</p>
                                    <p class="s3">{{item.num2}}</p>
                                    <div class="zj">
                                        <img :src="item.src1" alt="">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mid-third">
                        <div class="mid-third-top">
                            <p>全端新增用户趋势</p>
                            <div class="choice">
                                    <span>终端</span><el-select v-model="value" placeholder="请选择">
                                        <el-option
                                          v-for="item in options"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                        </el-option>
                                      </el-select>
                                    </div>
                            <a href="#"><img src="./image/xq.png" alt=""></a>
                        </div>
                        <div id="xzyh" class="mid-third-bottom"></div>
                    </div>

             <div class="mid-third">
                        <div class="mid-third-top">
                            <p>全端用户行为分析</p>
                            <div class="choice">
                               <span>终端</span><el-select v-model="value" placeholder="请选择">
                               <el-option
                                  v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                               </el-option>
                               </el-select>
                            </div>
                            <a href="#"><img src="./image/xq.png" alt=""></a>
                        </div>
                        <div id="yhxwfx" class="mid-third-bottom"></div>
                    </div>

            <div class="mid-five">
                        <div class="mid-five-left">
                            <div class="mid-five-title">
                                <p>全端活跃用户分析</p>
                            </div>
                            <div id="hyyhfx" class="mid-five-content">

                            </div>
                        </div>
                        <div class="mid-five-right">
                            <div class="mid-five-title">
                                <p>全端各端用户构成</p>
                            </div>
                            <div id="gdyhgc" class="mid-five-content">

                            </div>
                        </div>
                    </div>

            <div class="mid-third">
                        <div class="mid-third-top">
                            <p>各端在线用户数</p>
                            <div class="choice">
                                                           <span>终端</span><el-select v-model="value" placeholder="请选择">
                                                           <el-option
                                                              v-for="item in options"
                                                               :key="item.value"
                                                               :label="item.label"
                                                               :value="item.value">
                                                           </el-option>
                                                           </el-select>
                                                        </div>
                            <a href="#"><img src="./image/xq.png" alt=""></a>
                        </div>
                        <div id="gdazqs" class="mid-third-bottom"></div>
                    </div>
                    
</div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

