/**
 * 延时调用函数插件
 * 
 * http://
 * 
 * Released under the MIT license
 * 
 * Creator: yzChen
 * Date: 2016-9-19
 */
+(function($) {
    // 判断是否是 jquery / zepto 插件
    if (!$) {
        throw new Error('jQuery or Zepto not found!');
    }

    // 延时调用函数定义 
    $.fn.delaycall = function (options) {

        // 可配参数定义
        var settings = $.extend({
            'func': null,               // 函数名称
            'times': 1000,            // 延迟时间，单位：毫秒
            'beforeCallClear': true,  // 未执行func前，绑定事件被触发，是否清理之前定义的定时器
            'event': 'blur',         // 触发事件，默认是离开焦点时触发，依据jquery/zepto语法，如 keydown ...
            'justNormalKeyCode': true // event -> keydown 时，是否只支持普通按键：英文、数字
        }, options);

        // 调用函数未定义
        if(!settings.func) {
            throw new Error('delaycall options func not found!');
        }

        // 定时器变量
        var ___sto;

        // 绑定事件
        $(this).bind(settings.event, function (event) {

            // 按键事件，判断是否只支持普通按键
            if('keydown' == settings.event && true === settings.justNormalKeyCode) {
                var ___ekc = event.keyCode;
                if(!((___ekc >= 48 && ___ekc <= 57) || (___ekc >= 65 && ___ekc <= 90) || (___ekc >= 96 && ___ekc <= 105))) {
                    return;
                }
            }

            // 定时器清理
            if(true === settings.beforeCallClear) {
                clearTimeout(___sto);
            }

            // 延迟指定秒数后，调用函数
            ___sto = setTimeout(settings.func, settings.times);
        });
    }

})(window.jQuery || window.Zepto);