var icattoPage = {
  toPage: function() {
      console.log("执行跳转");
      var e = document.querySelectorAll(".page-number")
        , t = parseInt(e[e.length - 1].innerHTML)
        , n = document.getElementById("toPageText")
        , a = parseInt(n.value);
      if (!isNaN(a) && a > 0 && "0" !== ("" + a)[0] && a <= t) {
          var s = 1 == a ? "/" : "/page/" + a + "/#content-inner";
          document.getElementById("toPageButton").href = s
      }
  },
  listenToPageInputPress() {
      var e = document.getElementById("toPageText")
        , t = document.getElementById("toPageButton");
      e && (e.addEventListener("keydown", (e=>{
          13 === e.keyCode && (icattoPage.toPage(),
          pjax.loadUrl(t.href))
      }
      )),
      e.addEventListener("input", (function() {
          "" === e.value || "0" === e.value ? t.classList.remove("haveValue") : t.classList.add("haveValue");
          var n = document.querySelectorAll(".page-number")
            , a = +n[n.length - 1].innerHTML;
          +document.getElementById("toPageText").value > a && (e.value = a)
      }
      )))
  }
}
icattoPage.listenToPageInputPress();

// 自定页数跳转
setInterval(() => {
  // let create_time = Math.round(new Date('2021-10-15 00:00:00').getTime() / 1000); //在此行修改建站时间
  // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
  let create_time = Math.round(new Date('2023/08/23 11:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h) {
      return h > 9 ? h : '0' + h;
  }
  if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
  }
  if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
  }
  if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
  }
  if (second >= 0) {
      time[4] = nol(second);
  }
  let currentTimeHtml = ""
  if (time[0] != 0) {
      currentTimeHtml += time[0] + ' YEAR '
  }
  currentTimeHtml += time[1] + '天' + time[2] +'时' + time[3] +'分' + time[4]+'秒';
  document.getElementById("runtimeshow").innerHTML = currentTimeHtml;
}, 1000);