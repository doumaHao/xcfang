
var Main = {
    // 根据id找到对象
    getById: function (id) {
        return document.getElementById(id);
    },
    // 根据标签找到对象
    getByTag: function (tag) {
        return document.getElementsByTagName(tag);
    },
    // 页面跳转
    goto: function (page) {
        window.location.href = page;
    },
    // 弹框
    alert: function () {
        alert(123);
    },
    // 事件绑定
    bind: function (obj, func) {
        // 单一选择
        if (obj.indexOf(" ") == -1 && obj.indexOf(">") == -1) {

        }
        if (obj) {

        }
    }
};
