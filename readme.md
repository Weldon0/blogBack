#### 项目名称:blog后台管理系统
###	项目描述:一个博客后台管理系统，管理员可以添加查看删除博客

*	项目模块:
	*	1.管理员注册，登录，登出
	*	2.编辑博客功能
	*	3.管理员信息的查看以及管理员博客列表查看(头像显示在管理员列表中)
	*	4.自己和别的管理员的博客全文查看
	*	5.管理员上传头像

*	技术方案:
	*	1.前端页面主要使用AdminLTE框架基于bootstrap进行搭建。
	*	2.后台服务器主要使用nodejs,express进行搭建.
	*	3.前端页面的跳转渲染使用artTemplate模版进行渲染

*	实现原理:
	*	所有的管理员信息和博客保存在本地,信息的增删改查主要是利用fs模块对本地文件进行处理
	*	服务器从本地获取文件之后，发送给前端页面渲染页面,展示信息

*	目录结构:
	*	admin:存储所有管理员的个人信息
	*	blog:存储所有管理员的博客内容
	*	public:网站主目录
	*	router:存储路由文件
	*	views:视图文件
	*	server.js 入口文件

