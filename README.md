# 判断浏览器类型及版本号

# 安装

```bash
npm i -S browser-type-version

yarn add browser-type-version
```

# 使用

```bash
import getBrowserTypeAndVersion from 'browser-type-version';

console.log(getBrowserTypeAndVersion())

# { type: "Edge", version: "83.0.478.54" }
```

# demo

demo: [http://browser.dongjb.com/](http://browser.dongjb.com/)

# 注意

代码只兼容到 ie9 以上，在 ie9 以下浏览器使用会报错
