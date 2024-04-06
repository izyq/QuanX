/**

twitter

[rewrite_local]
^https:\/\/twitter\.com.* url script-response-body https://raw.githubusercontent.com/izyq/QuanX/main/aifengtool.js

[mitm]
hostname = twitter.com


 */

var modifiedHeaders = $response.headers;

delete modifiedHeaders['content-security-policy']

$done({ headers : modifiedHeaders});

