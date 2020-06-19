# 判断浏览器类型及版本号

# 安装

```bash
npm i -S seentao-browser-type

yarn seentao-browser-type
```

# 使用

```bash
import getBrowserTypeAndVersion from 'seentao-browser-type';

console.log(getBrowserTypeAndVersion())

# { type: "Edge", version: "83.0.478.54" }
```

# 注意

代码只兼容到 ie9 以上，在 ie9 以下浏览器使用会报错
