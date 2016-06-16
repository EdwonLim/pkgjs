## pkgjs

> pkgjs YourObj -s source.js -o output.js

### 处理结果

```js
(function() {

    // 你的源码 Variable 是你要导出的对象

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function() {
            return Variable;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Variable;
    } else {
        window.Variable = Variable;
    }

})();
```
