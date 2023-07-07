/******************************

脚本功能：证件照相馆-美颜证件照——解锁VIP
下载地址：https://is.gd/QCct8l

*******************************

[rewrite_local]

^https:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/izyq/QuanX/main/zhengjianzhao.js

[mitm] 

hostname = appss.rhinoxlab.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "success" : true,
  "result" : {
    "mobile" : "15988888888",
    "registerTime" : "2023-03-09 21:03:59",
    "vipExpireDays" : 7,
    "nickname" : "U2303784141",
    "dataId" : "10167836703880764475",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ],
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "type" : "VIP",
    "inviteCode" : "dVWdrPKt",
    "vipExpireTime" : "2028-03-17 10:59:59"
  },
  "returnCode" : "200",
  "timeOut" : false
}



$done({body : JSON.stringify(objc)});