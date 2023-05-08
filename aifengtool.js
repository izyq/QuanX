
/**

有趣工具箱密码

[rewrite_local]
^https:\/\/ai\.aifengkeji\.com.*check\.aspx$ url script-response-body https://raw.githubusercontent.com/izyq/QuanX/main/aifengtool.js

[mitm]
hostname = *.aifengkeji.com


 */

let body = $response.body;
let obj = JSON.parse(body);

// VIP规则
obj = {};
obj["status"] = 200;
obj["data"] = "ok";


$done({body: JSON.stringify(obj)});