/**
 * Created by zhang on 2017/8/1.
 */
console.log('环境 :===', process.env);
// process.env = 'test';
// 模板和url的对应关系


// 全局的提示信息
export const globalMsg = {
    deleteMsg: '是否确认删除？',
    revertMsg: '撤回后，活动状态将变为待提交状态，是否确认撤回？',
    offShelf: '下架后，活动状态将变为已下架状态，是否确认下架？'
};

// 全局的input长度
export const maxL = 30;