# no-vue3-cron

![CocoaPods](https://img.shields.io/npm/dt/no-vue3-cron.svg)
![CocoaPods](https://img.shields.io/npm/v/no-vue3-cron.svg)

这是一个 cron 表达式生成插件,基于 vue3.0 与 element-plus 实现
[demo](https://nonone.cc/no-vue3-cron/)

## vue3-cron
参考[vue3-cron](https://github.com/sugdove/vue3-cron)实现，加入了cron回显


## 项目地址

- github : https://github.com/wuchuanpeng/no-vue3-cron

- github 项目启动: 1.npm install 2.npm run serve

## 依赖

- Vue 3.0.0+
- elementplus

## 安装方式

```
npm install no-vue3-cron
```

## 全局引入方式

```javascript
//前置配置
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
//全局引入
import noVue3Cron from 'no-vue3-cron'
import 'no-vue3-cron/lib/noVue3Cron.css' // 引入样式
const app = createApp(App)
app
  .use(ElementPlus)
  .use(noVue3Cron)
  .mount('#app') //使用方式：<noVue3Cron></noVue3Cron>
```

## 局部引入方式

```javascript
//局部引入
import { noVue3Cron } from 'no-vue3-cron'
import 'no-vue3-cron/lib/noVue3Cron.css' // 引入样式
export default {
  template: '<noVue3Cron/>',
  components: { noVue3Cron },
}
```

## 示例

```vue
<template>
  <div class="cron">
    <h1>no-vue3-cron</h1>
    <el-input v-model="state.cron" placeholder="cron表达式...">
      <template #append>
        <el-popover :visible="state.cronPopover" width="700px" trigger="click">
            <noVue3Cron
                :cron-value="state.cron"
                @change="changeCron"
                @close="state.cronPopover=false"
                max-height="400px"
                i18n="cn"
            ></noVue3Cron>
            <template #reference>
                <el-button @click="state.cronPopover = !state.cronPopover">设置</el-button>
            </template>
        </el-popover>
      </template>
    </el-input>
  </div>
</template>

<script>
import { reactive,defineComponent } from 'vue'
import { noVue3Cron } from 'no-vue3-cron'
import 'no-vue3-cron/lib/noVue3Cron.css'
export default defineComponent ({
  name: "App",
  setup(){
      const state = reactive({
          cronPopover: false,
          cron: ''
      })
      const changeCron = (val) => {
          if(typeof(val) !== 'string') return false
          state.cron = val
      }

      return {
          state,
          changeCron,
      }
  }
});
</script>

<style lang="scss" scoped>
.cron {
  width: 700px;
  margin: 0 auto;
  margin-top: 100px;
  h1 {
    font-size: 50px;
    text-align: center;
  }
}
</style>
```

在示例中我使用了 es6(es2015)语法,你可能需要引入 babel-polyfill 才能正常运行,或者你也可以用 es5 的写法

## 参数

- i18n

  - 参数 `{String} language` 目前仅支持`en|cn`

  国际化支持

- max-height

  - 参数 `{String} height`

  设定 no-vue3-cron 的 max-height, 默认没有该属性

- cron-value

  - 参数 `{String} cron-value`

  设定 no-vue3-cron 的 默认显示值, 用于回显
## 事件

- change(cronText)

  - 参数：`{String} cronText` cron 表达式的值

  当 corn 表达式的值发生变化变化时触发

- close()

  - 参数：无

  当点击 corn 表达式选择框取消按钮时触发

## 联系方式

邮箱 : i@nonone.cc

欢迎大家关注我做的网站: http://www.nonone.cc/

如果对您有帮助, 欢迎 star

有任何问题请发 Issues 或者邮箱联系我-.- 谢谢!
