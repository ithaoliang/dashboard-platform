/**
 * Created by xiaojiang on 2017/7/20.
 */
import server from '../../api/audit-management/audit-preview';
import CsCard from '../../component/custom-card/index.vue';
import common from '../../common/common';
export default {
    components: {CsCard},
    data() {
        return {
            auditCode: this.$route.query.code,
            cardWidth: 82,
            id: this.$route.query.id || 556,
            detail: this.$route.query.detail,
            detailData: {
                activityList: []
            },
            detailDataFlag: false,
            loading: true
        };
    },
    props: {
        routeProp: {
            type: Object,
        }
    },
    created() {
        // debugger
        if (this.$route.query.id) {
            console.log(this.$route.query.id)
            console.log('检查子组件路由')
            const id = this.$route.query.id;
            // 通过活动id获取活动信息
            this.getActivityDetail(id);
        }
    },
    methods: {
        // 获取活动详情
        async getActivityDetail(id) {
            const res = await server.getAuditDetail(id);
            if (res.data.data !== null) {
                this.detailData = res.data.data;
                this.detailDataFlag = true;
                /* 获取资源位集合id即nicheGroupId*/
                const nicheGroupId = this.detailData.nicheGroupId;
                this.$emit('someMethodsd', nicheGroupId)
                /* 获取workflowId*/
                // const nicheGroup = await server.getWorkflowId(nicheGroupId);
                // debugger;
                // const flowId = nicheGroup.data.data.flowId;
                // this.formData.workflowId = nicheGroup.data.data.flowId;
                /* 获取活动流程进度 */
                const workflowRes = await server.getWorkflowByActivityId(id);
                if (workflowRes.data.data === null) {
                    return false;
                }
                this.activityProcessData = workflowRes.data.data;
                this.formData.workflowId = workflowRes.data.data.workflowNew.id;
                this.loading = false;
                /* resource_level_audit_todo:10:1*/
            }
        },
        // 活动时间格式化
        detailTimeFormmat() {
            const startTime = common.format(this.detailData.startTime, 'yyyy-MM-dd HH:mm');
            const endTime = common.format(this.detailData.endTime, 'yyyy-MM-dd HH:mm');
            return `${startTime}-${endTime}`;
        },
        listTimeFormmat(data) {
            return common.format(data, 'yyyy-MM-dd HH:mm');
        },
        // 呈现位设备列表
        activityNicheResourceList(data) {
            const list = [];
            // debugger;
            data.activityNicheResources.forEach(item => {
                list.push(item.name);
            });
            if (list.length > 5) {
                return list.slice(1, 5).join(', ');
            }
            return list.join(', ');
        },
        // push呈现位时活动时间处理的处理
        activityPushTime(data) {
            const startTime = common.format(data.activityPushe.pushTime, 'yyyy-MM-dd HH:mm');
            const endTime = common.format(data.activityPushe.pushEndTime, 'yyyy-MM-dd HH:mm');
            return `${startTime}-${endTime}`;
        },
        // 商品名称 flag 0 1 2 3 4分别对应商品名称 商品图片 商品描述  商品跳转url 二维码描述
        goodsInfo(data, flag) {
            const temp = JSON.parse(data.productMaterial.externalContent);
            const name = temp.commodityName;
            const desc = temp.commodityDescribe;
            const imgList = [];
            const linkUrl = temp.linkUrl;
            const qrCodeDescribe = temp.qrCodeDescribe;
            temp.imgList.forEach(item => {
                if (item.url) {
                    imgList.push(item.url);
                }
            });
            switch (flag) {
                case 0 :
                    return name;
                case 1 :
                    return imgList;
                case 2 :
                    return desc;
                case 3 :
                    return linkUrl;
                case 4 :
                    return qrCodeDescribe;
            }
        },
        // 活动状态
        activityStatus() {
            const type = this.detailData.status;
            switch (type) {
                case 1 :
                    return '待提交';
                case 2 :
                    return '待审核';
                case 3 :
                    return '审核通过';
                case 4 :
                    return '已上架';
                case 5 :
                    return '驳回';
                case 6 :
                    return '活动结束';
            }
        },
        // 活动列表的设备处理
        activityDevicesList(data) {
            if (data.activityDevices.length !== 0) {
                const list = [];
                data.activityDevices.forEach(item => {
                    list.push(item.sn);
                });
                return list.join(', ');
            }
            if (data.activityResources.length !== 0) {
                const list = [];
                data.activityDevices.forEach(item => {
                    list.push(item.name);
                });
                return list.join(', ');
            }
            if (data.activityResources.length === 0 && data.activityDevices.length === 0) {
                return '全部设备';
            }
        },
        // 活动的兴趣即用户画像
        activityLabelsList(data) {
            if (data.activityLabels.length !== 0) {
                const list = [];
                data.activityLabels.forEach(item => {
                    list.push(item.name);
                });
                return list.join(', ');
            }
            return '暂无';
        },
        // 活动列表的地域处理
        activityAreaList(data) {
            const list = [];
            // debugger;
            data.activityAreas.forEach(item => {
                list.push(item.name);
            });
            if (list.length > 5) {
                return list.slice(1, 5).join(', ');
            }
            return list.join(', ');
        },
        // 呈现设备 1,2,3
        /* 投放用户群的拥有设备*/
        displayDevicesOne(data) {
            if (data.activityDevices.length !== 0) {
                const list = [];
                data.activityDevices.forEach(item => {
                    list.push(item.sn);
                });
                return list.join(', ');
            } else {
                return '';
            }
        },
        /* 呈现位置的呈现设备*/
        displayDevicesTwo(data) {
            return data.nicheResource;
        },
        /* 呈现位置*/
        displayResourceType(data) {
            switch (parseInt(data.nicheType)) {
                case 3:
                    return 'push呈现位';
                case 2:
                    return '视频呈现位';
                case 1:
                    return '普通呈现位';
            }
        },
        /* 活动投放方式的呈现设备*/
        displayDevicesThree(data) {
            if (data.activityResources.length !== 0) {
                const list = [];
                data.activityResources.forEach(item => {
                    list.push(item.name);
                });
                return list.slice(1, 4).join(', ');
            } else {
                return '';
            }
        },
        // 视频埋点范围的类型
        buriedType() {
            const type = this.detailData.activityType;
            switch (type) {
                case 1 :
                    return '全部视频';
                case 2 :
                    return '部分视频';
                case 3 :
                    return '视频分类';
            }
        },
        // 埋点视频/时间
        buriedVedioTime() {
            let tempStr = '';
            switch (this.detailData.activityType) {
                case 1 :
                    if (this.detailData.activityBurieds.length !== 0) {
                        return `全部视频 (${this.detailData.activityBurieds[0].playTime})`;
                    } else {
                        return '全部视频(暂无时间)';
                    }
                case 2 :
                    if (this.detailData.activityBurieds.length !== 0) {
                        this.detailData.activityBurieds.forEach(item => {
                            const videoName = item.videoName;
                            const startNum = item.minNumber;
                            const endNum = item.maxNumber;
                            tempStr += `${videoName} 第${startNum}-${endNum}集 (${item.playTime}s)`;
                        });
                        return tempStr;
                    }
                    return '暂无';
                case 3 :
                    return '视频分类';
            }

        },
        // 活动列表的视频埋点范围
        buriedArea(data) {
            let tempStr = '';
            console.log('802============', data);
            if (data.activityBurieds.length !== 0) {
                switch (data.activityType) {
                    case 1 :
                        return '全部视频';
                    case 2 :
                        if (data.activityBurieds.length != 0) {
                            data.activityBurieds.forEach(item => {
                                const videoName = item.videoName;
                                const startNum = item.minNumber;
                                const endNum = item.maxNumber;
                                tempStr += `${videoName} 第${startNum}-${endNum}集 `;
                            });
                            return tempStr;
                        }
                        return '';
                    case 3 :
                        let videoType = '';
                        data.activityBurieds.forEach(item => {
                            videoType += item.channel;
                        });
                        return videoType;
                }
            } else {
                return '暂无';
            }

        },
        // 判断服务类型
        serviceType(data) {
            if (data.externalContent === null) {
                return '现有服务';
            } else {
                return '自定义服务';
            }
        },
        // 视频埋点时间
        buriedTime(data) {
            let tempTime = '';
            if (data.activityBurieds.length !== 0) {
                switch (data.activityType) {
                    case 2 :
                        if (data.activityBurieds.length !== 0) {
                            data.activityBurieds.forEach(item => {
                                let timePart = item.playTime;
                                tempTime += `${tempTime}s `;
                            });
                            return tempTime;
                        }
                        return '';
                    default :
                        return data.activityBurieds[0].playTime;
                }
            } else {
                return '暂无';
            }
        }
    },
    // 返回
    computed: {
        isHiddenNext() {
            return this.processData.one_audit === 1 && this.formData.result === 1;
        }
    }
};