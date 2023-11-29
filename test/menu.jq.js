(function ($) {
  init($);

  var timer = 0;
  window.addEventListener("resize", function () {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(() => {
      var prevMenuList = this.document.querySelectorAll("[data-shopeo-rm]");
      Array.from(prevMenuList).forEach((node) => {
        node.remove();
      });

      init($);
    }, 0);
  });

  function init($) {
    var thisurl = window.location.href;
    var lang = "cn";
    if (thisurl.indexOf("come-in-ue")) {
      $("#go1").show();
      $("#go2").hide();
      $("#go3").hide();
      if (thisurl.indexOf("/ja/") != -1) lang = "ja";
      if (thisurl.indexOf("/en/") != -1) lang = "en";
      switch (lang) {
        case "cn":
          $("#go1").show();
          $("#go2").hide();
          $("#go3").hide();
          break;

        case "en":
          $("#go1").hide();
          $("#go2").show();
          $("#go3").hide();
          break;

        case "ja":
          $("#go1").hide();
          $("#go2").hide();
          $("#go3").show();
          break;
        default:
          $("#go1").show();
          $("#go2").hide();
          $("#go3").hide();
          break;
      }
    }

    if (thisurl.indexOf("/ja/productcenter/")) {
      $("#gonglvmin").attr("placeholder", "Min");
      $("#gonglvmax").attr("placeholder", "Max");
    }

    if (thisurl.indexOf("/ja/recruitment/recruitment-centre/")) {
    }
    if (window.location.pathname.startsWith("/en/productcenter")) {
      $('li.sf-item-106 > label[for^="sf-input-"]').text("Power Strip");
      $('li.sf-item-47 > label[for^="sf-input-"]').text("Power Strip");
    }

    (function () {
      $("#znbanner").hide();
      $("#enbanner").hide();
      $("#jabanner").hide();

      if (window.location.pathname.startsWith("/en")) {
        $("#enbanner").show();
        return;
      }

      if (window.location.pathname.startsWith("/ja")) {
        $("#jabanner").show();
        return;
      }

      $("#znbanner").show();
    })();

    if (getUrlParam("glmin")) {
      $("#gonglvmin").val(getUrlParam("glmin"));
    }
    if (getUrlParam("glmax")) {
      $("#gonglvmax").val(getUrlParam("glmax"));
    }
    if (getUrlParam("glunit")) {
      $("#gonglvunit option[value='" + getUrlParam("glunit") + "']").attr(
        "selected",
        "selected"
      );
    }

    $(".timer-span").counterUp({
      delay: 4,
      time: 900,
    });

    if (GetUrlRelativePath() == "en" || GetUrlRelativePath() == "ja") {
      var mycontent = $(
        ".language a[data-gt-lang='" + GetUrlRelativePath() + "']"
      ).html();

      $("#current").attr("data-gt-lang", GetUrlRelativePath());
      $("#current").html(mycontent);
    }

    $("#search-filter-form-1136").attr(
      "data-results-url",
      $("#search-filter-form-1136").attr("action")
    );
    $("#search-filter-form-1313").attr(
      "data-results-url",
      $("#search-filter-form-1313").attr("action")
    );

    $(".searchandfilter ul li li").mouseover(function () {
      $(this).css("background", "#e5e5e5");
      $(this).css("color", "#E61926");
    });
    $(".searchandfilter ul li li").mouseout(function () {
      $(this).css("background", "inherit");
      $(this).css("color", "#666");
    });

    $(".language a").click(function () {
      if ($(this).attr("data-gt-lang") != $("#current").attr("data-gt-lang")) {
        $("#current").attr("data-gt-lang", $(this).attr("data-gt-lang"));
        $("#current").html($(this).html());
        var url = window.location.href;
        if (GetUrlRelativePath() == "") {
          window.location.replace(url + "/" + $(this).attr("data-gt-lang"));
        } else if (
          GetUrlRelativePath() == "en" ||
          GetUrlRelativePath() == "ja"
        ) {
          window.location.replace(
            url.replace(
              "/" + GetUrlRelativePath() + "/",
              "/" + $(this).attr("data-gt-lang") + "/"
            )
          );
        } else
          window.location.replace(
            url.replace(
              "/" + GetUrlRelativePath() + "/",
              "/" +
                $(this).attr("data-gt-lang") +
                "/" +
                GetUrlRelativePath() +
                "/"
            )
          );
      }
    });

    $(".dateinput").change(function (e) {
      UpdateUrlParam("year", $(this).val());
    });

    $("#submitbtn").click(function (data) {
      UpdateUrlParam("keyword", $("#keyword").val());
    });

    $("#procount").html($(".e-loop-item").length);
    $(".li-box").hover(
      function () {
        $(this).find(".child-box").stop(true, false).slideDown(400);
      },
      function () {
        $(this).find(".child-box").stop(true, false).slideUp(300);
      }
    );

    $(".nav-tab>a").hover(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $(".pro-ul")
        .eq($(this).index())
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    $(".nav-tab p").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $(".pro-ul")
        .eq($(this).index())
        .addClass("active")
        .siblings()
        .removeClass("active");
    });

    if ($(window).width() < 768) {
      $(".header .language").after(
        '<div data-shopeo-rm class="menu"><span class="span1"></span><span class="span2"></span><span class="span3"></span></div>'
      );

      $(".header .li-box>a").after(
        '<p data-shopeo-rm class="xl-menu"> <span>></span> </p>'
      );
    }
    $(".menu").click(function () {
      $(this).toggleClass("on");
      $(".header").toggleClass("menuOn");
    });

    $("#cancelall").click(function (data) {
      $(":checkbox").prop("checked", false);
      window.location.href = window.location.href.split("?")[0];
    });

    $("#gonglvbtn").click(function (data) {
      $(':checkbox[name="_sft_pa_gonglv[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_pa_gonglv");
    });
    $("#procatbtn").click(function (data) {
      $(':checkbox[name="_sft_product_cat[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_product_cat");
    });

    $("#stylebtn").click(function (data) {
      $(':checkbox[name="_sft_pa_yangshi[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_pa_yangshi");
    });

    $("#dianyabtn").click(function (data) {
      $(':checkbox[name="_sft_pa_dianya[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_pa_dianya");
    });

    $("#anguibtn").click(function (data) {
      $(':checkbox[name="_sft_pa_angui[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_pa_angui");
    });

    $("#yingyongbtn").click(function (data) {
      $(':checkbox[name="_sft_pa_yingyong[]"]').prop("checked", false);
      window.location.href = funcUrlDel("_sft_pa_yingyong");
    });

    var glarray = [];

    $(':checkbox[name="_sft_pa_gonglv[]"]').each(function () {
      glarray.push($(this).val());
    });

    $("#gonglvunit ,#gonglv input").on("change", function () {
      var filterarray = [];
      var glmin = parseInt($("#gonglvmin").val());
      var glmax = parseInt($("#gonglvmax").val());
      var glunit = $("#gonglvunit").val();

      if (glmin > 0 && glmax > 0) {
        $.each(glarray, function (index, e) {
          var val = e.match(/\d+/)[0]; //数字部分
          var unit = e.replace(/\d/g, ""); //单位部分

          if (unit.toLowerCase() == glunit.toLowerCase()) {
            if (val <= glmax && val >= glmin) {
              filterarray.push(e.toLowerCase());
            }
          }
        });

        if (filterarray) {
          var oldparam = parseUrlParams();

          var filterstr = filterarray.join();

          oldparam._sft_pa_gonglv = filterstr;
          oldparam.glmin = glmin;
          oldparam.glmax = glmax;
          oldparam.glunit = glunit;

          window.location.href =
            window.location.href.split("?")[0] +
            "?" +
            buildQueryString(oldparam);
        }
      }
    });
  }

  function funcUrlDel(name) {
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.href.split("?")[1];
    if (query.indexOf(name) > -1) {
      var obj = {};
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("=");
        obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];
      var url =
        baseUrl +
        JSON.stringify(obj)
          .replace(/[\"\{\}]/g, "")
          .replace(/\:/g, "=")
          .replace(/\,/g, "&");

      return url;
    }
  }

  function getUrlParam(key) {
    var url = decodeURI(window.location.toString());
    var arr = url.split("?");
    if (arr.length > 1) {
      var params = arr[1].split("&");
      for (var i = 0; i < params.length; i++) {
        var param = params[i]; //"pid=101"
        if (param.split("=")[0] == key) {
          return param.split("=")[1];
        }
      }
    }
    return null;
  }

  function buildQueryString(params, prefix) {
    var str = [];

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var value = params[key];

        var paramName = prefix ? prefix + "[" + key + "]" : key;

        if (typeof value === "object") {
          str.push(buildQueryString(value, paramName));
        } else {
          str.push(
            encodeURIComponent(paramName) + "=" + encodeURIComponent(value)
          );
        }
      }
    }

    return str.join("&");
  } //移除指定的参数

  function GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");

    var arrUrl2 = arrUrl[1].split("/");
    return arrUrl2[1];
  }

  function UpdateUrlParam(name, val) {
    var thisURL = document.location.href;

    // 如果 url中包含这个参数 则修改
    if (thisURL.indexOf(name + "=") > 0) {
      var v = getUrlParam(name);
      if (v != null) {
        // 是否包含参数
        thisURL = thisURL.replace(name + "=" + v, name + "=" + val);
      } else {
        thisURL = thisURL.replace(name + "=", name + "=" + val);
      }
    } // 不包含这个参数 则添加
    else {
      if (thisURL.indexOf("?") > 0) {
        thisURL = thisURL + "&" + name + "=" + val;
      } else {
        thisURL = thisURL + "?" + name + "=" + val;
      }
    }
    location.href = thisURL;
  }

  function parseUrlParams() {
    var url = document.location.href;
    const params = {};
    const queryString = url.split("?")[1];

    if (queryString) {
      const pairs = queryString.split("&");
      pairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        params[key] = decodeURIComponent(value);
      });
    }

    return params;
  }
})(jQuery);
