# delaycall.js

delaycall 是一个 jQuery / Zepto 插件，用于在用户完成某项操作后，延迟指定秒数后自动调动指定函数。如用户输入完内容后，延迟1秒，自动提交表单。

### GitHub Repository
[https://github.com/yzchen0o0/delaycall](https://github.com/yzchen0o0/delaycall "delaycall.js")

### Demo
点击查看[在线演示地址](https://yzchen0o0.github.io/yzchen0o0/ "delaycall Demo")

### Quick Start Guide
#### include
``` html
<script src="./jquery-1.11.3.js"></script>
<script src="./delaycall.js"></script>
```
#### JavaScript
``` javascript
function foo() {
    alert('call foo()!');
}

$(function() {
    $('input').delaycall({
    'func': foo,               // 必填，函数名称
    'times': 1000,             // 选填，延迟时间，单位：毫秒
    'beforeCallClear': true,   // 选填，未执行func前，绑定事件被触发，是否清理之前定义的定时器
    'event': 'blur',           // 选填，触发事件，默认是离开焦点时触发，依据jquery/zepto语法，如 keydown ...
    'justNormalKeyCode': true  // 选填，event -> keydown 时，是否只支持普通按键：英文、数字
    });
});
```
#### Html
``` html
文本框1：<input id="s1"/>&nbsp;&nbsp;文本框2：<input id="s2"/>
```

### My Blog
[blog.chenyuanzhen.com](http://blog.chenyuanzhen.com "倚楼听风雨")