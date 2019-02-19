# vue-cli3 使用总结

* vue create hello  // 创建一个项目
* vue add router // 安装 vue-router 插件
* vue add vuex // 安装 vuex 插件
* vue inspect // 可查看webpack全部配置
* vue inspect > output.js // 在根目录生成一个output.js 文件存放webpack的全部配置
* vue inspect module.rules.0 // 查看配置的第一条规则
* vue inspect --rules // 查看所有的规则名称
* vue inspect --plugins // 查看所有的插件名称
* vue inpect --rule css // 查看对应规则配置
* vue inpect --plugin html // 查看对应插件的配置
* .env .env.local .env.development .env.production 文件用来存放各个模式下的全局环境变量