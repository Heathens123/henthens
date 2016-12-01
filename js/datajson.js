
var data=[

	{
		aid:"1",
		Interface:"接口描述",
		children:[
				{gid:"1",name:"接口描述",state:"Interface_description"}
		]
	},
	{
		aid:"2",
		Interface:"图像接口",
		children:[
				{gid:"1",name:"获取图片",state:"Get_pictures1"},
				{gid:"2",name:"保存图片到相册",state:"save_pictures"},
				{gid:"3",name:"缓存图片",state:"Get_pictures2"}
		]
	},
	{
		aid:"3",
		Interface:"数据库接口",
		children:[
				{gid:"1",name:"执行数据库语句executeSQL",state:"executeSQL"},
				{gid:"2",name:"执行SQL查询语句 executeQuery",state:"executeQuery"}
		]
	},
	{
		aid:"4",
		Interface:"系统提示",
		children:[
				{gid:"1",name:"alert",state:"alert"},
				{gid:"2",name:"confirm",state:"confirm"},
				{gid:"3",name:"prompt",state:"prompt"},
				{gid:"4",name:"beep",state:"beep"},
				{gid:"5",name:"shake",state:"shake"}
			]
	},
	{
		aid:"5",
		Interface:"用户信息",
		children:[
				{gid:"1",name:"获取用户信息",state:"getValue"},
				{gid:"2",name:"设置全局数据setValueForKey",state:"setValueForKey"},
				{gid:"3",name:"重新登录",state:"reLogin"}
				
			]
	},
	{
		aid:"6",
		Interface:"信息提示，Loading",
		children:[
				{gid:"1",name:"信息提示",state:"showInfo"},
				{gid:"2",name:"Loading",state:"Loading"},
				{gid:"3",name:"hideLoading",state:"hideLoading"}
				
			]
	},
	{
		aid:"7",
		Interface:"蓝牙接口说明",
		children:[
				{gid:"1",name:"蓝牙管理器初始化接口 initialize",state:"Bluetooth_initialize"},
				{gid:"2",name:"开始扫描蓝牙设备 startScan",state:"Bluetooth_startScan"},
				{gid:"3",name:"停止扫描蓝牙设备 stopScan",state:"Bluetooth_stopScan"},
				{gid:"4",name:"恢复连接配对成功的设备 retrieveConnected",state:"B_retrieveConnected"},
				{gid:"5",name:"连接设备 connect",state:"B_connect"},
				{gid:"6",name:"重新连接以前连接过的设备reconnect",state:"B_reconnect"},
				{gid:"7",name:"断开蓝牙连接 disconnect",state:"B_disconnect"},
				{gid:"8",name:"关闭蓝牙连接 close",state:"B_close"},
				{gid:"9",name:"获取蓝牙信息discover",state:"B_discover"},
				{gid:"10",name:"获取蓝牙设备的服务services",state:"B_services"},
				{gid:"11",name:"获取设备的某个服务的特征characteristics",state:"B_characteristics"},
				{gid:"12",name:"获取某个服务的描述 descriptors",state:"B_descriptors"},
				{gid:"13",name:"读取特定服务的特征 read",state:"B_read"},
				{gid:"14",name:"订阅某个服务的特征subscribe",state:"B_subscribe"},
				{gid:"15",name:"取消订阅某个特征unsubscribe",state:"B_unsubscribe"},
				{gid:"16",name:"向某个服务的特征写入数据 write",state:"B_write"},
				{gid:"17",name:"向某个服务的特征写入数据 writeQ",state:"B_writeQ"},
				{gid:"18",name:"获取特定特征的描述 readDescriptor",state:"B_readDescriptor"},
				{gid:"19",name:"向特定的描述写入值writeDescriptor",state:"B_writeDescriptor"},
				{gid:"20",name:"获取蓝牙设备的信号值 rssi",state:"B_rssi"},
				{gid:"21",name:"获取蓝牙管理器是否初始化 isInitialized",state:"B_isInitialized"},
				{gid:"22",name:"获取设备蓝牙是否开启 isEnabled",state:"B_isEnabled"},
				{gid:"23",name:"设备是否正在扫描外设 isScanning",state:"B_isScanning"},
				{gid:"24",name:"数据解析示例",state:"B_Data_analysis"}
				
			]
	},
	{
		aid:"8",
		Interface:"打开新页面",
		children:[
				{gid:"1",name:"打开应用内子页面",state:"openWebInApp"},
				{gid:"2",name:"关闭页面",state:"closeH5App"},
			]
	},
	{
		aid:"9",
		Interface:"支付",
		children:[
				{gid:"1",name:"请求支付",state:"requestPayment"},
				
			]
	},
	{
		aid:"10",
		Interface:"调试方法",
		children:[
				{gid:"1",name:"调试方法",state:"Application"},
				
			]
	}
]
	

var servData=[
	{
		sid:"1",
		Conthtml:"概述",
		Child:[
				{nid:"1",state:"Summary",name:"概述"}
			]
	},
	{
		sid:"2",
		Conthtml:"接入流程",
		Child:[
				{nid:"1",state:"Procedures",name:"接入流程"}
			]
	},
	
	{
		sid:"3",
		Conthtml:"开放接口",
		Child:[
				{nid:"1",state:"Application",name:"应用授权"},
				{nid:"2",state:"UserInfo",name:"用户信息"},
				{nid:"3",state:"UserBind",name:"用户绑定"},
				{nid:"4",state:"DataUpload",name:"数据同步"},
				{nid:"5",state:"Increment",name:"增值业务"},
				{nid:"6",state:"authority",name:"用户权益"},
				{nid:"7",state:"Addtimes",name:"按次收费"}
			]
	}
	
];
