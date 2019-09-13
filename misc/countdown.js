window.onload = function () {
  countDown();
  function addZero(i) {
      return i < 10 ? "0" + i : i + "";
  }
  function countDown() {
    const nowtime = new Date();
    const endtime = new Date("2019/03/16,17:57:00");
    const lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    let d = parseInt(lefttime / (24*60*60))
    let h = parseInt(lefttime / (60 * 60) % 24);
    let m = parseInt(lefttime / 60 % 60);
    let s = parseInt(lefttime % 60);
    d = addZero(d)
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    document.querySelector(".count").innerHTML = `活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
    if (lefttime <= 0) {
        document.querySelector(".count").innerHTML = "活动已结束";
        return;
    }
    setTimeout(countDown, 1000);
  }
}
