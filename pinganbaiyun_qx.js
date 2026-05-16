/**
 * 平安白云 - 门禁到期时间延长
 * Quantumult X 脚本
 *
 * [rewrite_local]
 * ^https:\/\/xcx\.pinganbaiyun\.cn\/p_021_health_passport\/api_007_wbyw_002\/get_guard_list_by_phone url script-response-body pinganbaiyun.js
 *
 * [mitm]
 * hostname = xcx.pinganbaiyun.cn
 */

const body = JSON.parse($response.body);

if (Array.isArray(body)) {
  body.forEach(item => {
    if (item.data_list && Array.isArray(item.data_list)) {
      item.data_list.forEach(device => {
        if (device.limitTime) {
          device.limitTime = "2027-05-29";
        }
      });
    }
  });
}

$done({ body: JSON.stringify(body) });