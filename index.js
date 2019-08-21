// 事件防抖-后置
function debounceAfter(func, timestamp) {
  let time;
  return function() {
    clearTimeout(time);
    time = setTimeout(func, timestamp);
  };
}
// 事件防抖-前置
function debounceBefore(func, timestamp) {
  let time;
  return function() {
    clearTimeout(time);
    if (!time) {
      func();
    }
    time = setTimeout(() => {
      time = null;
    }, timestamp);
  };
}
// 事件节流
function throttle(func, timestamp) {
  let time;
  return function() {
    if (time) {
      return;
    }
    func();
    time = setTimeout(() => {
      time = null;
    }, timestamp);
  };
}
// 计算rem 设计稿：100px = 1rem 用于纯css场景，没有预处理的情况
function rem() {
  document.body.parentNode.style.fontSize = `${(document.body.clientWidth /
    750) *
    100}px`;
}
