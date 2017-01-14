function makeRequest(data, timeout = 0, callback = function() {}) {
  return {
    data: data,
    timeout: timeout,
    callback: callback
  }
}

console.log(makeRequest({}));
console.log(makeRequest({}, 100, function() { alert("Test"); }));

