## 项目集成

1. 全局重置样式 => src/assets/style/common/reset.css
2. 支持 sass 语法写 css
3. 封装了一些常用的弹性盒子的 class
4. 使用 nProgress，支持页面跳转时，顶部显示进度条的过度效果
5. 集成 axios 并简单封装通用请求函数
6. 集成 Vuex 
7. 集成轻量级本地数据库 lowdb，更好的操作本地缓存的工具

## 项目规范

#### 目录结构
```javascript
├── node_modules  // 依赖包                      
├── static  // 静态资源目录不会被webpack编译      
├── config // 环境变量
├── src                        
│   ├── assets  // 存放公共图片，css，js
│   ├────└── images
│   ├────└── style
│   ├────└── js
│   ├── components  // 非路由组件目录
│   ├────└── common   // 非路由组件的全局公共组件
│   ├── router  // 路由目录
│   ├────└── index.js   // 路由入口，只负责入口，路由钩子，不负责具体的路由代码
│   ├────└── route  // 路由文件夹，其下分模块，对路由进行管理
│   ├── service   // 请求数据层文件
│   ├────└── api  // 接口定义层文件，分模块去定义
│   ├────└── request.js   // （axios）请求封装层，包括请求拦截
│   ├── store  // vuex
│   ├────└── modules  // 开启命名空间，分模块处理
│   ├────└── index.js   // vuex入口文件
│   ├── pages   // 路由组件，分模块，其模块与非路由组件中一一对应
│   ├── directive   // 全局自定义指令层
│   ├── filtres   // 全局自定义过滤层
│   ├── utils   // 全局自定义工具层
│   ├── App.vue   // 项目路由入口
│   ├── main.js   // 入口文件  
│   ├── .eslintrc.js  // eslint配置
│   ├── .gitignore  // git忽略文件
│   ├── package.json  // 安装文件
│   ├── babel.config.js   // babel配置
│   ├── postcss.config.js  // css-loader配置
│   ├── README.md   // 项目介绍
```

#### 文件夹命名
文件夹命名采用小驼峰命名
```javascript
For example: routerSpirit | testExamples
```

#### 组件命名
组件名始终是大驼峰命名，根组件 App 除外。
```javascript
For example: PlayBackground | ListMusic
```

#### 无状态组件/基础组件
定义：不接收参数，不处理逻辑，只用于展示状态的组件
Base 前缀 + 大驼峰命名
```javascript
For example: BaseBackButton | BaseTip
```

#### 与父组件紧密耦合的组件
应在其前缀中展示父组件的命名，以表示其紧密的耦合性
```javascript
For example: 
PlayProgress -> DetailPlayProgress
MusicDesc -> DetailMusicDesc
```

#### 组件名中的单词顺序
组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。
```javascript
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

#### 模板中的组件名
PascalCase 帕斯卡命名法，即开头大写的驼峰
```javascript
For example: <PlayControl /> | <MusicPlayList />
```

#### 路由命名
path使用全小写，多个单词用 - 分开，name与path保持一致
先写name，再写path，component，meta
For example: 
```javascript
{
  name: "home-detail",
  path: "/home-detail",
  component: () => import("@/views/HomeDetail"),
  meta: {}
}
```

#### 请求命名
所有定义的接口以api开头小驼峰命名，尽量语义化，不要简写
For example: 
```javascript
export const apiHomeList = (pageInfo) => {
  return ajax('/web/app/list.do', { pageInfo });
}
```

#### class命名
Class 和 ID 的命名应该语义化，通过看名字就知道是干嘛的；全部小写，多个单词用连接线 - 连接
For example:
```css
.test-header{
  font-size: 20px;
}
```

#### 全局状态管理
应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。

#### 注意空行，别让代码看起来像是堆在一起，可读性很差

#### filters 方法命名
加前缀 flt 使用驼峰式命名
for example: fltTimeFormat