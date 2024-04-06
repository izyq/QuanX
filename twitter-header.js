/**

twitter

[rewrite_local]
^https:\/\/twitter\.com.* url script-response-header https://github.com/izyq/QuanX/raw/main/twitter-headers.js

[mitm]
hostname = twitter.com


 */

var modifiedHeaders = $response.headers;

delete modifiedHeaders['content-security-policy']

$done({ headers : modifiedHeaders});
