<template>
        <div class="sidebar" :class="{collapsed:collapsed}">
            <!--导航菜单 折叠前-->

            <div v-show="!collapsed"  class="sidebar-normal-child">
                <div class="lc-menu-container" ref="menu">
                    <img class="menu-img-logo" :src="images.logo">
                    <!--<div class="lc-menu-scroll">-->
                    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
                        <template v-for="(item, index) in items" v-if="item.subs.length !== 0">
                            <template v-if="item.subs">
                                <el-submenu :index="item.index">
                                    <template slot="title" style="padding-left: 16px"><i
                                            :class="[item.icon,'iconfont']"></i><span :class="{'submenu-active': getIndexArray(item.subs).indexOf(onRoutes)> -1}">{{ item.title }}</span></template>
                                    <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                                        <span class="point"></span>
                                        {{subItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.index">
                                    <i :class="[item.icon,'iconfont']"></i>{{ item.title }}


                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                    <!--</div>-->
                </div>
            </div>
        </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

