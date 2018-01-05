<template>
    <div>
        <progress-panel :activityStep="2"></progress-panel>
    </div>
</template>
<style scoped lang="less"></style>
<script>
    import activityStep from './index.vue';
    export default {
        components: {
            activityStep
        },
        data() {
            return {
                value: '',
                id: 67,
                items: [
                    {label: '日啊', value: '2 '},
                    {label: '风景', value: '3'},
                    {label: '蛋疼', value: '4'}
                ]
            };
        }
    };
</script>