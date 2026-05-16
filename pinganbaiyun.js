/**
 * 平安白云 - 门禁到期时间延长
 * 适用平台: Surge / Quantumult X
 */

// 检查是否存在响应体
if (typeof $response !== "undefined" && $response.body) {
  try {
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
  } catch (e) {
    console.log("平安白云脚本解析失败: " + e);
    $done({});
  }
} else {
  $done({});
}