interface IAjax {
  url: string;
  methods?: string;
  data?: Object;
  success: Function;
  fail: Function;
}

const Noop = function () {};

/**
 * ajax
 * @param options
 */
export function ajax(options: IAjax) {
  const xhr = new XMLHttpRequest();
  let { url, methods, data, success, fail } = options;
  methods = methods || "GET";
  success = success || Noop;
  fail = fail || Noop;

  if (methods === "GET") {
    url += "?" + getQueryData(data);
  }

  xhr.open(methods, url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(xhr.responseText);
    }
  };

  xhr.onerror = function () {
    fail(xhr);
  };

  if (methods === "POST") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }

  xhr.send(methods === "GET" ? null : getQueryData(data));
}

/**
 * 获取带有 query 的 url
 * @param url
 * @param data
 */
function getQueryData(data: Object | undefined): string {
  if (!data) return "";

  let query = "";
  for (const key in data) {
    query += query ? `&${key}=${data[key]}` : `${key}=${data[key]}`;
  }

  return query;
}

// 测试
ajax({
  url: "//www.baidu.com",
  methods: "POST",
  data: { name: "zs", age: 18 },
  success(data) {
    console.log("success = ", data);
  },
  fail(error) {
    console.log("error = ", error);
  },
});
