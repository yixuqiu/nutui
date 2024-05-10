var pl = Object.defineProperty, ml = Object.defineProperties;
var hl = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var Sn = Object.prototype.hasOwnProperty, Tn = Object.prototype.propertyIsEnumerable;
var vt = Math.pow, Wt = (e, t, n) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    Sn.call(t, n) && Wt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      Tn.call(t, n) && Wt(e, n, t[n]);
  return e;
}, pe = (e, t) => ml(e, hl(t));
var It = (e) => typeof e == "symbol" ? e : e + "", Yt = (e, t) => {
  var n = {};
  for (var o in e)
    Sn.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Dt)
    for (var o of Dt(e))
      t.indexOf(o) < 0 && Tn.call(e, o) && (n[o] = e[o]);
  return n;
};
var H = (e, t, n) => (Wt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ge = (e, t, n) => new Promise((o, s) => {
  var l = (r) => {
    try {
      i(n.next(r));
    } catch (f) {
      s(f);
    }
  }, a = (r) => {
    try {
      i(n.throw(r));
    } catch (f) {
      s(f);
    }
  }, i = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(l, a);
  i((n = n.apply(e, t)).next());
});
import { reactive as me, ref as z, defineComponent as ve, useSlots as St, h as Te, openBlock as c, createBlock as J, computed as S, createElementBlock as d, normalizeClass as D, normalizeStyle as V, createElementVNode as g, createTextVNode as ge, unref as ce, createCommentVNode as N, renderSlot as _, provide as Re, inject as Ve, getCurrentInstance as ot, onUnmounted as Ue, Fragment as Z, toDisplayString as L, watchEffect as ct, Transition as Jt, withCtx as ne, withDirectives as Ie, withModifiers as De, vShow as Me, createApp as vl, watch as Q, toRefs as we, resolveComponent as X, Teleport as Kn, mergeProps as dt, createVNode as ee, onMounted as $e, onBeforeUnmount as Qt, Comment as gl, Text as yl, nextTick as _e, renderList as re, normalizeProps as bl, guardReactiveProps as $l, resolveDynamicComponent as ze, onActivated as Tt, toRef as Je, createSlots as Ct, onBeforeMount as jn, readonly as _n, onDeactivated as _t, render as xt, vModelText as wl } from "vue";
class Un {
}
let kl = class extends Un {
  constructor() {
    super(...arguments);
    H(this, "save", "保存");
    H(this, "confirm", "确认");
    H(this, "cancel", "取消");
    H(this, "done", "完成");
    H(this, "noData", "暂无数据");
    H(this, "placeholder", "请输入");
    H(this, "select", "请选择");
    H(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    H(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    H(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    H(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    H(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    H(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    H(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    H(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    H(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    H(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    H(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    H(this, "timeselect", {
      pickupTime: "取件时间"
    });
    H(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    H(this, "skuheader", {
      skuId: "商品编号"
    });
    H(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    H(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    H(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    H(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    H(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    H(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class Cl extends Un {
  constructor() {
    super(...arguments);
    H(this, "save", "Save");
    H(this, "confirm", "Confirm");
    H(this, "cancel", "Cancel");
    H(this, "done", "Done");
    H(this, "noData", "No Data");
    H(this, "placeholder", "Placeholder");
    H(this, "select", "Select");
    H(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    H(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    H(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    H(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    H(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    H(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    H(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    H(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    H(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    H(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    H(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    H(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    H(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    H(this, "skuheader", {
      skuId: "Sku Number"
    });
    H(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    H(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    H(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    H(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    H(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    H(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const en = (e, {
  args: t = [],
  done: n,
  canceled: o
}) => {
  if (e) {
    const s = e(...t);
    qn(s) ? s.then((l) => {
      l ? n(l) : o && o();
    }).catch(() => {
    }) : s ? n() : o && o();
  } else
    n();
}, jt = (e) => {
  if (e === null)
    return "null";
  const t = typeof e;
  if (t === "undefined" || t === "string")
    return t;
  switch (toString.call(e)) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      return e.nodeType !== void 0 ? e.nodeType == 3 ? /\S/.test(e.nodeValue) ? "textnode" : "whitespace" : "element" : "object";
    default:
      return "unknow";
  }
}, Xn = Array.isArray, Sl = (e) => e instanceof Date, Et = (e) => typeof e == "function", Tl = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", qn = (e) => ut(e) && Et(e.then) && Et(e.catch), _l = document, Nn = _l.body, Ut = (e, t) => {
  try {
    return t.split(".").reduce((n, o) => n[o], e);
  } catch (n) {
    return "";
  }
}, Nl = (e, t, n) => {
  const o = Object.assign({}, e), s = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(o).forEach((l) => {
    if (Object.prototype.hasOwnProperty.call(s, l)) {
      const a = jt(s[l]);
      a == "function" && (o[l] = s[l](t)), a == "string" && (o[l] = t[s[l]]);
    } else
      t[l] && (o[l] = t[l]);
  }), o) : e;
}, Gn = (e, t) => (Object.keys(t).forEach((n) => {
  const o = e[n], s = t[n];
  ut(o) && ut(s) ? Gn(o, s) : e[n] = s;
}), e);
function Dl(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ft(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Ze = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Ee = (e, t, n) => Math.min(Math.max(e, t), n), Zn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, Bt = me({
  "zh-CN": new kl(),
  "en-US": new Cl()
});
class Jn {
  static languages() {
    return Bt[this.currentLang.value];
  }
  static use(t, n) {
    n && (Bt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (Bt[t] ? Gn(Bt[t], n) : this.use(t, n));
  }
}
H(Jn, "currentLang", z("zh-CN"));
const Il = /* @__PURE__ */ ve({
  __name: "IconFont",
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  setup(e) {
    var t;
    const n = e, o = "nut-icon", s = St(), l = () => n.name ? n.name.indexOf("/") !== -1 : !1, a = (p) => {
      if (p)
        return isNaN(Number(p)) ? String(p) : p + "px";
    }, i = l();
    let r = Te(
      i ? "img" : n.tag,
      {
        class: i ? `${o}__img` : `${n.fontClassName} ${o} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: a(n.size),
          width: a(n.width || n.size),
          height: a(n.height || n.size)
        },
        src: i ? n.name : ""
      },
      (t = s.default) == null ? void 0 : t.call(s)
    );
    const f = () => r;
    return (p, y) => (c(), J(f));
  }
});
function Bl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
Bl(Il);
const F = (e) => ve({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (l) => {
      if (l)
        return isNaN(Number(l)) ? String(l) : l + "px";
    }, o = S(() => {
      const l = "nut-icon";
      return {
        [t.class]: t.class,
        [l]: !0,
        [l + "-" + t.name]: t.name
      };
    }), s = S(() => {
      const l = {};
      return l.height = n(t.height), l.width = n(t.width), l.color = t.color, l;
    });
    return { classes: o, style: s };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const Ml = F("arrow-down2"), Ll = /* @__PURE__ */ g("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  Ll
];
function Al(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Pl, 6);
}
const El = /* @__PURE__ */ ye(Ml, [["render", Al]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const zl = F("arrow-up2"), Vl = /* @__PURE__ */ g("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hl = [
  Vl
];
function Ol(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Hl, 6);
}
const Rl = /* @__PURE__ */ ye(zl, [["render", Ol]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const Fl = F("check-checked"), Wl = /* @__PURE__ */ g("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Yl = /* @__PURE__ */ g("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Kl(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    Wl,
    ge(","),
    Yl
  ], 6);
}
const jl = /* @__PURE__ */ ye(Fl, [["render", Kl]]), Ul = F("check-disabled"), Xl = /* @__PURE__ */ g("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ql = [
  Xl
];
function Gl(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ql, 6);
}
const Zl = /* @__PURE__ */ ye(Ul, [["render", Gl]]), Jl = F("check-normal"), Ql = /* @__PURE__ */ g("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xl = [
  Ql
];
function es(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xl, 6);
}
const Qn = /* @__PURE__ */ ye(Jl, [["render", es]]), ts = F("Check"), ns = /* @__PURE__ */ g("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), os = [
  ns
];
function ls(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, os, 6);
}
const xn = /* @__PURE__ */ ye(ts, [["render", ls]]), ss = F("checked"), as = /* @__PURE__ */ g("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), is = [
  as
];
function rs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, is, 6);
}
const eo = /* @__PURE__ */ ye(ss, [["render", rs]]), us = F("checklist"), cs = /* @__PURE__ */ g("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ds = [
  cs
];
function fs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ds, 6);
}
const ps = /* @__PURE__ */ ye(us, [["render", fs]]), ms = F("circle-close"), hs = /* @__PURE__ */ g("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vs = [
  hs
];
function gs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vs, 6);
}
const tn = /* @__PURE__ */ ye(ms, [["render", gs]]);
F("clock");
F("close-little");
const ys = F("close"), bs = /* @__PURE__ */ g("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = [
  bs
];
function ws(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, $s, 6);
}
const zt = /* @__PURE__ */ ye(ys, [["render", ws]]), ks = F("comment"), Cs = /* @__PURE__ */ g("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ss = [
  Cs
];
function Ts(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ss, 6);
}
const _s = /* @__PURE__ */ ye(ks, [["render", Ts]]);
F("date");
const Ns = F("del"), Ds = /* @__PURE__ */ g("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Is = [
  Ds
];
function Bs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Is, 6);
}
const to = /* @__PURE__ */ ye(Ns, [["render", Bs]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const Ms = F("down-arrow"), Ls = /* @__PURE__ */ g("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ps = [
  Ls
];
function As(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ps, 6);
}
const no = /* @__PURE__ */ ye(Ms, [["render", As]]);
F("download");
F("dshop");
const Es = F("edit"), zs = /* @__PURE__ */ g("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = [
  zs
];
function Hs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Vs, 6);
}
const Os = /* @__PURE__ */ ye(Es, [["render", Hs]]);
F("eye");
const Rs = F("fabulous"), Fs = /* @__PURE__ */ g("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Ws, 6);
}
const Ks = /* @__PURE__ */ ye(Rs, [["render", Ys]]), js = F("failure"), Us = /* @__PURE__ */ g("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Us
];
function qs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const oo = /* @__PURE__ */ ye(js, [["render", qs]]);
F("find");
F("follow");
F("footprint");
F("github");
F("heart-fill-n");
F("heart-fill");
F("heart-fill1");
F("heart-fill2");
F("heart-fill3");
F("heart-n");
F("heart");
F("heart1");
F("heart2");
F("home");
F("horizontal-n");
F("horizontal");
const Gs = F("image-error"), Zs = /* @__PURE__ */ g("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Js = /* @__PURE__ */ g("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Qs(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Zs,
    ge(","),
    Js
  ], 6);
}
const xs = /* @__PURE__ */ ye(Gs, [["render", Qs]]), ea = F("image"), ta = /* @__PURE__ */ g("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), na = /* @__PURE__ */ g("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function oa(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ta,
    ge(","),
    na
  ], 6);
}
const la = /* @__PURE__ */ ye(ea, [["render", oa]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const sa = F("joy-smile"), aa = /* @__PURE__ */ g("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ia = [
  aa
];
function ra(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, ia, 6);
}
const ua = /* @__PURE__ */ ye(sa, [["render", ra]]), ca = F("left"), da = /* @__PURE__ */ g("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fa = [
  da
];
function pa(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fa, 6);
}
const nn = /* @__PURE__ */ ye(ca, [["render", pa]]), ma = F("link"), ha = /* @__PURE__ */ g("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), va = [
  ha
];
function ga(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, va, 6);
}
const ya = /* @__PURE__ */ ye(ma, [["render", ga]]), ba = F("loading"), $a = /* @__PURE__ */ g("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  $a
];
function ka(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const st = /* @__PURE__ */ ye(ba, [["render", ka]]), Ca = F("loading1"), Sa = /* @__PURE__ */ g("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Sa
];
function _a(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ta, 6);
}
const Na = /* @__PURE__ */ ye(Ca, [["render", _a]]), Da = F("location"), Ia = /* @__PURE__ */ g("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  Ia
];
function Ma(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ba, 6);
}
const La = /* @__PURE__ */ ye(Da, [["render", Ma]]), Pa = F("location2"), Aa = /* @__PURE__ */ g("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ea = [
  Aa
];
function za(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ea, 6);
}
const Va = /* @__PURE__ */ ye(Pa, [["render", za]]);
F("locationg3");
F("lower");
F("marshalling");
const Ha = F("mask-close"), Oa = /* @__PURE__ */ g("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Oa
];
function Fa(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ ye(Ha, [["render", Fa]]);
F("message");
F("microphone");
const Ya = F("minus"), Ka = /* @__PURE__ */ g("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ja = [
  Ka
];
function Ua(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ja, 6);
}
const Xa = /* @__PURE__ */ ye(Ya, [["render", Ua]]);
F("more-s");
const qa = F("more-x"), Ga = /* @__PURE__ */ g("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Za = [
  Ga
];
function Ja(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Za, 6);
}
const Qa = /* @__PURE__ */ ye(qa, [["render", Ja]]);
F("more");
F("my");
F("my2");
const xa = F("notice"), ei = /* @__PURE__ */ g("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, ti, 6);
}
const oi = /* @__PURE__ */ ye(xa, [["render", ni]]);
F("order");
F("people");
const li = F("photograph"), si = /* @__PURE__ */ g("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ai = [
  si
];
function ii(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, ai, 6);
}
const ri = /* @__PURE__ */ ye(li, [["render", ii]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const ui = F("plus"), ci = /* @__PURE__ */ g("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), di = [
  ci
];
function fi(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, di, 6);
}
const pi = /* @__PURE__ */ ye(ui, [["render", fi]]);
F("poweroff-circle-fill");
const mi = F("rect-down"), hi = /* @__PURE__ */ g("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vi = [
  hi
];
function gi(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vi, 6);
}
const yi = /* @__PURE__ */ ye(mi, [["render", gi]]);
F("rect-left");
F("rect-right");
const bi = F("rect-up"), $i = /* @__PURE__ */ g("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wi = [
  $i
];
function ki(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wi, 6);
}
const Ci = /* @__PURE__ */ ye(bi, [["render", ki]]);
F("refresh");
const Si = F("refresh2"), Ti = /* @__PURE__ */ g("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _i = [
  Ti
];
function Ni(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _i, 6);
}
const Di = /* @__PURE__ */ ye(Si, [["render", Ni]]), Ii = F("retweet"), Bi = /* @__PURE__ */ g("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mi = [
  Bi
];
function Li(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mi, 6);
}
const Pi = /* @__PURE__ */ ye(Ii, [["render", Li]]), Ai = F("right"), Ei = /* @__PURE__ */ g("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zi = [
  Ei
];
function Vi(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, zi, 6);
}
const on = /* @__PURE__ */ ye(Ai, [["render", Vi]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const Hi = F("service"), Oi = /* @__PURE__ */ g("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ri = [
  Oi
];
function Fi(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ri, 6);
}
const Wi = /* @__PURE__ */ ye(Hi, [["render", Fi]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Yi = F("star-fill-n"), Ki = /* @__PURE__ */ g("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ji = [
  Ki
];
function Ui(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, ji, 6);
}
const Xi = /* @__PURE__ */ ye(Yi, [["render", Ui]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const qi = F("success"), Gi = /* @__PURE__ */ g("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zi = [
  Gi
];
function Ji(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zi, 6);
}
const Qi = /* @__PURE__ */ ye(qi, [["render", Ji]]), xi = F("tips"), er = /* @__PURE__ */ g("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), tr = [
  er
];
function nr(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, tr, 6);
}
const lo = /* @__PURE__ */ ye(xi, [["render", nr]]), or = F("top"), lr = /* @__PURE__ */ g("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), sr = [
  lr
];
function ar(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, sr, 6);
}
const ir = /* @__PURE__ */ ye(or, [["render", ar]]), rr = F("triangle-down"), ur = /* @__PURE__ */ g("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cr = [
  ur
];
function dr(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, cr, 6);
}
const fr = /* @__PURE__ */ ye(rr, [["render", dr]]), pr = F("triangle-up"), mr = /* @__PURE__ */ g("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hr = [
  mr
];
function vr(e, t, n, o, s, l) {
  return c(), d("svg", {
    class: D(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, hr, 6);
}
const gr = /* @__PURE__ */ ye(pr, [["render", vr]]);
F("uploader");
F("voice");
const yr = { class: "nut-button__wrap" }, Xe = /* @__PURE__ */ ve({
  name: "NutButton",
  __name: "button",
  props: {
    color: { default: "" },
    shape: { default: "round" },
    plain: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "default" },
    size: { default: "normal" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (i) => {
      !n.loading && !n.disabled && o("click", i);
    }, l = S(() => {
      const i = "nut-button";
      return {
        [i]: !0,
        [`${i}--${n.type}`]: n.type,
        [`${i}--${n.size}`]: n.size,
        [`${i}--${n.shape}`]: n.shape,
        [`${i}--plain`]: n.plain,
        [`${i}--block`]: n.block,
        [`${i}--disabled`]: n.disabled,
        [`${i}--loading`]: n.loading
      };
    }), a = S(() => {
      let i = {};
      return n.color && (i = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? i.borderColor = "transparent" : i.borderColor = n.color), i;
    });
    return (i, r) => (c(), d("view", {
      class: D(l.value),
      style: V(a.value),
      onClick: s
    }, [
      g("view", yr, [
        i.loading ? (c(), J(ce(st), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        i.$slots.icon && !i.loading ? _(i.$slots, "icon", { key: 1 }) : N("", !0),
        i.$slots.default ? (c(), d("view", {
          key: 2,
          class: D({ "nut-button__text": i.$slots.icon || i.loading })
        }, [
          _(i.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), pt = (e) => {
  const t = me([]), n = me([]);
  return {
    children: t,
    linkChildren: (s) => {
      Re(e, G({
        unlink: (i) => {
          if (i.proxy) {
            const r = n.indexOf(i);
            r > -1 && n.splice(r, 1);
            const f = t.indexOf(i.proxy);
            r > -1 && t.splice(f, 1);
          }
        },
        link: (i) => {
          i.proxy && (n.push(i), t.push(i.proxy));
        },
        children: t,
        internalChildren: n
      }, s));
    }
  };
}, mt = (e) => {
  const t = Ve(e, null);
  if (t) {
    const n = ot(), { link: o, unlink: s, internalChildren: l } = t;
    o(n), Ue(() => {
      s(n);
    });
    const a = S(() => l.indexOf(n));
    return { parent: t, index: a };
  }
  return {
    parent: t,
    index: S(() => -1)
  };
}, be = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
}, Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
};
function ln() {
  return ot().proxy.$router || null;
}
let gt = 0;
const Dn = "nut-overflow-hidden", br = (e) => [() => {
  if (e())
    try {
      !gt && Nn.classList.add(Dn), gt++;
    } catch (o) {
      console.warn("[NutUI] <useLockScroll>", o);
    }
}, () => {
  if (e() && gt)
    try {
      gt--, !gt && Nn.classList.remove(Dn);
    } catch (o) {
      console.warn("[NutUI] <unlock>", o);
    }
}];
be(Xe);
const $r = {
  key: 0,
  class: "nut-cell__icon"
}, wr = {
  key: 1,
  class: "nut-cell__title"
}, kr = { class: "title" }, Cr = { class: "nut-cell__title-desc" }, sn = /* @__PURE__ */ ve({
  name: "NutCell",
  __name: "cell",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    desc: { default: "" },
    descTextAlign: { default: "right" },
    isLink: { type: Boolean, default: !1 },
    roundRadius: { default: "" },
    center: { type: Boolean, default: !1 },
    size: { default: "normal" },
    to: {},
    replace: { type: Boolean, default: !1 },
    url: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = S(() => {
      const f = "nut-cell";
      return {
        [f]: !0,
        [`${f}--clickable`]: n.isLink || n.to,
        [`${f}--center`]: n.center,
        [`${f}--large`]: n.size === "large"
      };
    }), l = ln(), a = S(() => ({
      borderRadius: Be(n.roundRadius)
    })), i = S(() => ({
      textAlign: n.descTextAlign
    })), r = (f) => {
      o("click", f), n.to && l ? l[n.replace ? "replace" : "push"](n.to) : n.url && (n.replace ? location.replace(n.url) : location.href = n.url);
    };
    return (f, p) => (c(), d("view", {
      class: D(s.value),
      style: V(a.value),
      onClick: r
    }, [
      _(f.$slots, "default", {}, () => [
        f.$slots.icon ? (c(), d("view", $r, [
          _(f.$slots, "icon")
        ])) : N("", !0),
        f.title || f.subTitle || f.$slots.title ? (c(), d("view", wr, [
          f.subTitle ? (c(), d(Z, { key: 0 }, [
            _(f.$slots, "title", {}, () => [
              g("view", kr, L(f.title), 1)
            ]),
            g("view", Cr, L(f.subTitle), 1)
          ], 64)) : _(f.$slots, "title", { key: 1 }, () => [
            ge(L(f.title), 1)
          ])
        ])) : N("", !0),
        f.desc || f.$slots.desc ? (c(), d("view", {
          key: 2,
          class: D(["nut-cell__value", { "nut-cell__value--alone": !f.title && !f.subTitle && !f.$slots.title }]),
          style: V(i.value)
        }, [
          _(f.$slots, "desc", {}, () => [
            ge(L(f.desc), 1)
          ])
        ], 6)) : N("", !0),
        _(f.$slots, "link", {}, () => [
          f.isLink || f.to ? (c(), J(ce(on), {
            key: 0,
            class: "nut-cell__link"
          })) : N("", !0)
        ])
      ])
    ], 6));
  }
});
be(sn);
const Sr = { class: "nut-cell-group" }, Tr = {
  key: 1,
  class: "nut-cell-group__title"
}, _r = {
  key: 3,
  class: "nut-cell-group__desc"
}, Nr = { class: "nut-cell-group__wrap" }, an = /* @__PURE__ */ ve({
  name: "NutCellGroup",
  __name: "cell-group",
  props: {
    title: { default: "" },
    desc: { default: "" }
  },
  setup(e) {
    return (t, n) => (c(), d("view", Sr, [
      t.$slots.title ? _(t.$slots, "title", { key: 0 }) : t.title ? (c(), d("view", Tr, L(t.title), 1)) : N("", !0),
      t.$slots.desc ? _(t.$slots, "desc", { key: 2 }) : t.desc ? (c(), d("view", _r, L(t.desc), 1)) : N("", !0),
      g("view", Nr, [
        _(t.$slots, "default")
      ])
    ]));
  }
});
be(an);
const ht = /* @__PURE__ */ ve({
  name: "NutOverlay",
  __name: "overlay",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 2e3 },
    duration: { default: 0.3 },
    lockScroll: { type: Boolean, default: !0 },
    overlayClass: { default: "" },
    overlayStyle: {},
    closeOnClickOverlay: { type: Boolean, default: !0 }
  },
  emits: ["click", "update:visible"],
  setup(e, { emit: t }) {
    const n = e, o = t, [s, l] = br(() => n.lockScroll), a = S(() => ({
      ["nut-overlay"]: !0,
      [n.overlayClass]: !0
    })), i = S(() => G({
      transitionDuration: `${n.duration}s`,
      zIndex: n.zIndex
    }, n.overlayStyle));
    ct(() => {
      n.visible ? s() : l();
    });
    const r = (f) => {
      o("click", f), n.closeOnClickOverlay && o("update:visible", !1);
    };
    return (f, p) => (c(), J(Jt, { name: "overlay-fade" }, {
      default: ne(() => [
        Ie(g("view", {
          class: D(a.value),
          style: V(i.value),
          onClick: De(r, ["stop"])
        }, [
          _(f.$slots, "default")
        ], 6), [
          [Me, f.visible]
        ])
      ]),
      _: 3
    }));
  }
});
be(ht);
const Nt = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  position: {
    type: String,
    default: "center"
  },
  transition: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: () => ({})
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  teleportDisable: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
}, Dr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function te(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Dr("-" + e), n.install = (o) => {
        o.component(n.name, n);
      }, ve(n);
    }
  };
}
const nt = (e, t) => e ? Te(e, t) : "", rn = (e, t) => {
  let n = document.body;
  const o = e.teleport || "body";
  o != "body" && (Tl(o) ? n = document.querySelector(o) : n = e.teleport);
  const s = document.createElement("view"), l = t.name ? t.name + "-" : "", a = e.id || (/* @__PURE__ */ new Date()).getTime();
  s.id = l + a;
  let i = {};
  Et(t.wrapper) ? i = t.wrapper(n, s) : i = t.wrapper;
  const r = vl(i, e), f = t.components;
  return f && f.forEach((p) => {
    r.use(p);
  }), n.appendChild(s), {
    instance: r.mount(s),
    unmount: () => {
      r.unmount(), n.removeChild(s);
    }
  };
}, { componentName: Ir, create: Br } = te("popup"), so = 2e3;
let In = so;
const Mr = Br({
  components: {
    NutOverlay: ht,
    Close: zt
  },
  props: Nt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    let n;
    const o = me({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), s = S(() => ({
      [Ir]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), l = S(() => G({
      zIndex: o.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = S(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), i = () => {
      n || (n = !0, e.zIndex !== so && (In = Number(e.zIndex)), t("update:visible", !0), o.zIndex = ++In, e.destroyOnClose && (o.showSlot = !0), t("open"));
    }, r = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        o.showSlot = !1;
      }, +e.duration * 1e3));
    }, f = (w) => {
      t("clickPop", w);
    }, p = (w) => {
      w.stopPropagation(), t("clickCloseIcon", w), r();
    }, y = (w) => {
      t("clickOverlay", w), e.closeOnClickOverlay && r();
    }, v = (w) => {
      t("opened", w);
    }, b = (w) => {
      t("closed", w);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && i(), !e.visible && n && r();
      }
    ), ct(() => {
      o.closed = e.closeable;
    }), pe(G({}, we(o)), {
      popStyle: l,
      transitionName: a,
      classes: s,
      onClick: f,
      onClickCloseIcon: p,
      onClickOverlay: y,
      onOpened: v,
      onClosed: b
    });
  }
}), le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function Lr(e, t, n, o, s, l) {
  const a = X("nut-overlay"), i = X("Close");
  return c(), J(Kn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (c(), J(a, dt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : N("", !0),
    ee(Jt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ne(() => [
        Ie(g("view", {
          class: D(e.classes),
          style: V(e.popStyle),
          onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
        }, [
          e.showSlot ? _(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (c(), d("view", {
            key: 1,
            class: D(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...r) => e.onClickCloseIcon && e.onClickCloseIcon(...r))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              ee(i, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [Me, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ae = /* @__PURE__ */ le(Mr, [["render", Lr]]), Pr = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const o = (i) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i))
        return "";
      i = i.toLowerCase(), i.length === 4 && (i = "#" + i.slice(1).split("").map((p) => p + p).join(""));
      const f = [];
      for (let p = 1; p < 7; p += 2)
        f.push(parseInt("0x" + i.slice(p, p + 2)));
      return f.join(",");
    }, s = (i) => (i = i.replace(i.charAt(0), i.charAt(0).toLocaleLowerCase()), i.replace(/([a-z])([A-Z])/g, (r, f, p) => f + "-" + p.toLowerCase())), l = (i) => {
      if (!i)
        return;
      const r = {}, f = i == null ? void 0 : i.primaryColor;
      if (f) {
        const p = o(f);
        r["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${f} 0%, rgba(${p}, 0.15) 100%)`, r["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${f} 0%, rgba(${p}, 0.15) 100%)`, r["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${f} 0%, rgba(${p}, 0.15) 100%)`;
      }
      return Object.keys(i).forEach((p) => {
        r[`--nut-${s(p)}`] = i[p];
      }), r;
    }, a = S(() => l(t.themeVars));
    return () => {
      var i;
      return Te(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: a.value
        },
        (i = n.default) == null ? void 0 : i.call(n)
      );
    };
  }
}), { create: Ar } = te("config-provider"), Er = Ar(Pr("div")), zr = ["src", "data-src", "alt"], Vr = {
  key: 0,
  class: "nut-img-loading"
}, Hr = {
  key: 1,
  class: "nut-img-error"
}, ao = /* @__PURE__ */ ve({
  name: "NutImage",
  __name: "image",
  props: {
    src: {},
    fit: { default: "fill" },
    position: { default: "center" },
    alt: { default: "" },
    width: { default: "" },
    height: { default: "" },
    round: { type: Boolean, default: !1 },
    radius: {},
    showError: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    lazyLoad: { type: Boolean, default: !1 }
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z(!0), l = z(!1), a = S(() => {
      const u = "nut-image";
      return {
        [u]: !0,
        [`${u}-round`]: n.round
      };
    }), i = z(null), r = z(!1), f = z(null), p = () => {
      const u = {
        threshold: [0],
        rootMargin: "0px"
      };
      i.value = new IntersectionObserver((m) => {
        m.forEach((h) => {
          h.isIntersecting && (r.value = !0, i.value.disconnect());
        });
      }, u), f.value && i.value.observe(f.value);
    };
    $e(() => {
      n.lazyLoad && p();
    }), Qt(() => {
      i.value && i.value.disconnect();
    });
    const y = S(() => {
      let u = {};
      return n.width && (u.width = Be(n.width)), n.height && (u.height = Be(n.height)), n.radius !== void 0 && n.radius !== null && (u.overflow = "hidden", u.borderRadius = Be(n.radius)), u;
    }), v = S(() => ({
      objectFit: n.fit,
      objectPosition: n.position
    }));
    Q(
      () => n.src,
      () => {
        l.value = !1, s.value = !0;
      }
    );
    const b = () => {
      l.value = !1, s.value = !1, o("load");
    }, w = () => {
      l.value = !0, s.value = !1, o("error");
    }, C = (u) => {
      o("click", u);
    };
    return (u, m) => (c(), d("div", {
      class: D(a.value),
      style: V(y.value),
      onClick: C
    }, [
      g("img", {
        ref_key: "imgRef",
        ref: f,
        class: "nut-img",
        src: u.lazyLoad ? r.value ? u.src : void 0 : u.src,
        "data-src": u.lazyLoad ? r.value ? void 0 : u.src : void 0,
        alt: u.alt,
        style: V(v.value),
        onLoad: b,
        onError: w
      }, null, 44, zr),
      s.value ? (c(), d("div", Vr, [
        _(u.$slots, "loading", {}, () => [
          ee(ce(la), {
            width: "16px",
            height: "20px",
            name: "image"
          })
        ])
      ])) : N("", !0),
      l.value && !s.value ? (c(), d("div", Hr, [
        _(u.$slots, "error", {}, () => [
          ee(ce(xs), {
            width: "16px",
            height: "20px",
            name: "imageError"
          })
        ])
      ])) : N("", !0)
    ], 6));
  }
});
be(ao);
const { create: Or } = te("layout"), io = Or({});
be(io);
const ro = Symbol("nut-layout"), Bn = "nut-col", uo = /* @__PURE__ */ ve({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Ve(ro), o = S(() => ({
      [Bn]: !0,
      [Bn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), s = S(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (l, a) => (c(), d("view", {
      class: D(o.value),
      style: V(s.value)
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
be(uo);
const Rr = "nut-row", co = /* @__PURE__ */ ve({
  name: "NutRow",
  __name: "row",
  props: {
    type: { default: "" },
    gutter: { default: "" },
    justify: { default: "start" },
    align: { default: "flex-start" },
    flexWrap: { default: "nowrap" }
  },
  setup(e) {
    const t = e;
    Re(ro, t.gutter);
    const n = (s, l) => s ? l ? `nut-row-${s}-${l}` : "" : `nut-row-${l}`, o = S(() => [
      Rr,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (s, l) => (c(), d("view", {
      class: D(o.value)
    }, [
      _(s.$slots, "default")
    ], 2));
  }
});
be(co);
const Fr = /scroll|auto|overlay/i, fo = window;
function Wr(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Xt(e, t = fo) {
  let n = e;
  for (; n && n !== t && Wr(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (Fr.test(o))
      return n;
    n = n.parentNode;
  }
  return t;
}
function po(e, t = fo) {
  const n = z();
  return $e(() => {
    e.value && (n.value = Xt(e.value, t));
  }), n;
}
function Yr(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = ce(e);
  if (Yr(t)) {
    const n = t.innerWidth, o = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
  }
  return t && t.getBoundingClientRect ? t.getBoundingClientRect() : {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
}, { create: Kr } = te("sticky"), jr = Kr({
  props: {
    position: {
      type: String,
      default: "top"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), s = me({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), l = S(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), a = S(() => s.fixed ? { height: `${s.height}px` } : {}), i = S(() => s.fixed ? {
      [e.position]: `${l.value}px`,
      height: `${s.height}px`,
      width: `${s.width}px`,
      transform: s.transform ? `translate3d(0, ${s.transform}px, 0)` : void 0,
      position: s.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), r = () => {
      const f = e.container;
      if (!n.value && !f)
        return;
      const p = Ye(n), y = o.value, v = Ye(y), b = Ye(f);
      s.height = p.height, s.width = p.width;
      const w = () => {
        let u = !1;
        if (e.position === "top")
          u = f ? l.value > p.top && b.bottom > 0 : l.value > p.top;
        else {
          const m = document.documentElement.clientHeight;
          u = f ? b.bottom > 0 && m - l.value - v.height > b.top : m - l.value < p.bottom;
        }
        return u;
      }, C = () => {
        if (f)
          if (e.position === "top") {
            const u = b.bottom - l.value - v.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, m = b.bottom - (u - l.value);
            return m < 0 ? m : 0;
          }
        return 0;
      };
      s.transform = C(), s.fixed = w();
    };
    return Q(
      () => s.fixed,
      (f) => {
        t("change", f);
      }
    ), $e(() => {
      r(), Xt(n.value).addEventListener("scroll", r, !0);
    }), Ue(() => {
      Xt(n.value).removeEventListener("scroll", r);
    }), { rootRef: n, rootStyle: a, stickyRef: o, stickyStyle: i };
  }
});
function Ur(e, t, n, o, s, l) {
  return c(), d("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: V(e.rootStyle)
  }, [
    g("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: V(e.stickyStyle)
    }, [
      _(e.$slots, "default")
    ], 4)
  ], 4);
}
const mo = /* @__PURE__ */ le(jr, [["render", Ur]]), ho = /* @__PURE__ */ ve({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = St(), o = S(() => {
      const s = "nut-divider";
      return t.direction === "horizontal" ? {
        [s]: !0,
        [`${s}-center`]: n.default,
        [`${s}-left`]: t.contentPosition === "left",
        [`${s}-right`]: t.contentPosition === "right",
        [`${s}-dashed`]: t.dashed,
        [`${s}-hairline`]: t.hairline
      } : {
        [s]: !0,
        [`${s}-vertical`]: t.direction === "vertical"
      };
    });
    return (s, l) => (c(), d("view", {
      class: D(o.value)
    }, [
      s.direction === "horizontal" ? _(s.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
be(ho);
const vo = Symbol("grid"), go = /* @__PURE__ */ ve({
  name: "NutGrid",
  __name: "grid",
  props: {
    columnNum: { default: 4 },
    border: { type: Boolean, default: !0 },
    gutter: { default: 0 },
    center: { type: Boolean, default: !0 },
    square: { type: Boolean, default: !1 },
    reverse: { type: Boolean, default: !1 },
    direction: {},
    clickable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { linkChildren: n } = pt(vo);
    n({ props: t });
    const o = S(() => {
      const l = "nut-grid";
      return {
        [l]: !0,
        [`${l}--border`]: t.border && !t.gutter
      };
    }), s = S(() => {
      const l = {};
      return t.gutter && (l.paddingLeft = Be(t.gutter)), l;
    });
    return (l, a) => (c(), d("view", {
      class: D(o.value),
      style: V(s.value)
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
be(go);
const Xr = { class: "nut-grid-item__text" }, yo = /* @__PURE__ */ ve({
  name: "NutGridItem",
  __name: "grid-item",
  props: {
    text: {},
    to: {},
    url: { default: "" },
    replace: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, { parent: s, index: l } = mt(vo), a = (s == null ? void 0 : s.props) || {}, i = S(() => {
      const y = {
        flexBasis: `${100 / +a.columnNum}%`
      };
      return a.square ? y.paddingTop = `${100 / +a.columnNum}%` : a.gutter && (y.paddingRight = Be(a.gutter), l.value >= +a.columnNum && (y.marginTop = Be(a.gutter))), y;
    }), r = S(() => {
      const y = "nut-grid-item__content";
      return {
        [`${y}`]: !0,
        [`${y}--border`]: a.border,
        [`${y}--surround`]: a.border && a.gutter,
        [`${y}--center`]: a.center,
        [`${y}--square`]: a.square,
        [`${y}--reverse`]: a.reverse,
        [`${y}--${a.direction}`]: !!a.direction,
        [`${y}--clickable`]: a.clickable || n.to || n.url
      };
    }), f = ln(), p = (y) => {
      o("click", y), n.to && f ? f[n.replace ? "replace" : "push"](n.to) : n.url && (n.replace ? location.replace(n.url) : location.href = n.url);
    };
    return (y, v) => (c(), d("view", {
      class: "nut-grid-item",
      style: V(i.value),
      onClick: p
    }, [
      g("view", {
        class: D(r.value)
      }, [
        _(y.$slots, "default"),
        g("view", Xr, [
          y.text ? (c(), d(Z, { key: 0 }, [
            ge(L(y.text), 1)
          ], 64)) : _(y.$slots, "text", { key: 1 })
        ])
      ], 2)
    ], 4));
  }
});
be(yo);
const { create: qr, componentName: lt } = te("space"), Gr = qr({
  props: {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    justify: String,
    wrap: Boolean,
    gutter: [Number, String, Array],
    fill: Boolean
  },
  setup(e, { slots: t }) {
    const n = (p) => typeof p == "number" ? p + "px" : p, o = (p) => {
      const y = {};
      if (!e.gutter)
        return y;
      const v = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, b = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return p ? e.wrap ? { marginBottom: b } : {} : (e.direction === "horizontal" && (y.marginRight = v), (e.direction === "vertical" || e.wrap) && (y.marginBottom = b), y);
    }, s = (p = []) => {
      const y = [];
      return p.forEach((v) => {
        Array.isArray(v) ? y.push(...v) : v.type === Z ? y.push(...s(v.children)) : y.push(v);
      }), y.filter(
        (v) => {
          var b;
          return !(v && (v.type === gl || v.type === Z && ((b = v.children) == null ? void 0 : b.length) === 0 || v.type === yl && v.children.trim() === ""));
        }
      );
    }, { direction: l, wrap: a, fill: i, justify: r, align: f } = e;
    return () => {
      var v;
      const p = s((v = t.default) == null ? void 0 : v.call(t)), y = () => p.map((b, w) => Te(
        "div",
        {
          class: `${lt}-item`,
          style: o(w === p.length - 1)
        },
        b
      ));
      return Te(
        "div",
        {
          class: [
            lt,
            l && `${lt}-${l}`,
            f && `${lt}-align-${f}`,
            r && `${lt}-justify-${r}`,
            a && `${lt}-wrap`,
            i && `${lt}-fill`
          ]
        },
        y()
      );
    };
  }
}), Zr = {
  key: 1,
  class: "nut-navbar__text"
}, Jr = { class: "nut-navbar__title" }, Qr = {
  key: 0,
  class: "nut-navbar__text"
}, bo = /* @__PURE__ */ ve({
  name: "NutNavbar",
  __name: "navbar",
  props: {
    leftShow: { type: Boolean, default: !1 },
    title: { default: "" },
    titleIcon: { type: Boolean, default: !1 },
    leftText: { default: "" },
    desc: { default: "" },
    fixed: { type: Boolean, default: !1 },
    safeAreaInsetTop: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !0 },
    zIndex: { default: 10 }
  },
  emits: [
    "clickBack",
    "clickTitle",
    "clickIcon",
    "clickRight",
    // will be deprecated
    "onClickBack",
    "onClickTitle",
    "onClickIcon",
    "onClickRight"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z("auto"), l = z(), a = S(() => {
      const b = "nut-navbar";
      return {
        [b]: !0,
        [`${b}--border`]: n.border,
        [`${b}--fixed`]: n.fixed,
        [`${b}--safe-area-inset-top`]: n.safeAreaInsetTop
      };
    }), i = S(() => n.fixed && n.placeholder ? {
      height: s.value
    } : {}), r = () => {
      if (l.value) {
        const b = l.value.getBoundingClientRect();
        s.value = `${b.height}px`;
      }
    };
    $e(() => {
      n.fixed && n.placeholder && _e(() => {
        r();
      });
    });
    const f = () => {
      o("clickBack"), o("onClickBack");
    }, p = () => {
      o("clickTitle"), o("onClickTitle");
    }, y = () => {
      o("clickIcon"), o("onClickIcon");
    }, v = () => {
      o("clickRight"), o("onClickRight");
    };
    return (b, w) => (c(), d("view", {
      class: "nut-navbar--placeholder",
      style: V(i.value)
    }, [
      g("view", {
        ref_key: "navbarRef",
        ref: l,
        class: D(a.value),
        style: V({ zIndex: b.zIndex })
      }, [
        g("view", {
          class: "nut-navbar__left",
          onClick: f
        }, [
          b.leftShow ? _(b.$slots, "left-show", { key: 0 }, () => [
            ee(ce(nn), {
              height: "12px",
              color: "#979797"
            })
          ]) : N("", !0),
          b.leftText ? (c(), d("view", Zr, L(b.leftText), 1)) : N("", !0),
          _(b.$slots, "left")
        ]),
        g("view", Jr, [
          b.title ? (c(), d("view", {
            key: 0,
            class: "title",
            onClick: p
          }, L(b.title), 1)) : N("", !0),
          b.titleIcon ? (c(), d("view", {
            key: 1,
            class: "icon",
            onClick: y
          }, [
            _(b.$slots, "title-icon", { onClick: y })
          ])) : N("", !0),
          _(b.$slots, "content")
        ]),
        g("view", {
          class: "nut-navbar__right",
          onClick: v
        }, [
          b.desc ? (c(), d("view", Qr, L(b.desc), 1)) : N("", !0),
          _(b.$slots, "right")
        ])
      ], 6)
    ], 4));
  }
});
be(bo);
const Se = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const o = Jn.languages();
  let s = t;
  e && e.startsWith("nut") && (s = `${e.slice(3)}.${t}`);
  const l = Ut(o, s) || Ut(o, t);
  return Et(l) ? l(...n) : l;
}, { create: xr } = te("fixed-nav"), eu = "NutFixedNav", tu = xr({
  components: {
    NutOverlay: ht,
    Left: nn
  },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeColor: {
      default: "",
      type: String
    },
    activeText: {
      default: "",
      type: String
    },
    unActiveText: {
      default: "",
      type: String
    },
    position: {
      default: () => ({
        top: "auto",
        bottom: "auto"
      }),
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  },
  emits: ["update:visible", "selected"],
  setup(e, { emit: t }) {
    const n = Se(eu), o = S(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), s = z(-1);
    return { classes: o, updateValue: (i = !e.visible) => {
      t("update:visible", i);
    }, selected: (i, r) => {
      t("selected", {
        item: i,
        event: r
      }), s.value = i.id;
    }, translate: n, current: s };
  }
}), nu = { class: "nut-fixed-nav__list" }, ou = ["onClick"], lu = ["src"], su = { class: "span" }, au = {
  key: 0,
  class: "b"
}, iu = { class: "text" };
function ru(e, t, n, o, s, l) {
  const a = X("nut-overlay"), i = X("Left");
  return c(), d("view", {
    class: D(e.classes),
    style: V(e.position)
  }, [
    e.overlay ? (c(), J(a, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (r) => e.updateValue(!1))
    }, null, 8, ["visible"])) : N("", !0),
    _(e.$slots, "list", {}, () => [
      g("view", nu, [
        (c(!0), d(Z, null, re(e.navList, (r, f) => (c(), d("view", {
          key: r.id || f,
          class: D(["nut-fixed-nav__list-item", { active: r.id == e.current }]),
          onClick: (p) => e.selected(r, p)
        }, [
          g("img", {
            src: r.icon
          }, null, 8, lu),
          g("view", su, L(r.text), 1),
          r.num ? (c(), d("view", au, L(r.num), 1)) : N("", !0)
        ], 10, ou))), 128))
      ])
    ]),
    g("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (r) => e.updateValue())
    }, [
      _(e.$slots, "btn", {}, () => [
        ee(i, { color: "#fff" }),
        g("view", iu, L(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const uu = /* @__PURE__ */ le(tu, [["render", ru]]), $o = Symbol("nut-menu"), { componentName: cu, create: du } = te("menu"), fu = du({
  components: {
    RectUp: Ci,
    RectDown: yi
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: !1
    },
    titleClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(), n = z(0), o = z(!1), { children: s, linkChildren: l } = pt($o), a = S(() => s.some((b) => b.state.showWrapper)), i = S(() => ({
      [cu]: !0,
      "scroll-fixed": o.value
    })), r = () => {
      if (t.value) {
        const b = Ye(t);
        e.direction === "down" ? n.value = b.bottom : n.value = window.innerHeight - b.top;
      }
    };
    l({ props: e, offset: n });
    const f = (b) => {
      s.forEach((w, C) => {
        C === b ? (r(), w.toggle()) : w.state.showPopup && w.toggle(!1, { immediate: !0 });
      });
    }, p = (b) => Math.max(0, "scrollTop" in b ? b.scrollTop : b.pageYOffset), y = () => {
      const { scrollFixed: b } = e, w = p(window);
      o.value = w > (typeof b == "boolean" ? 30 : Number(b));
    }, v = (b) => {
      let w = "";
      const { titleClass: C } = e;
      return b && (w += "active"), C && (w += ` ${C}`), w;
    };
    return $e(() => {
      const { scrollFixed: b } = e;
      b && window.addEventListener("scroll", y);
    }), Ue(() => {
      const { scrollFixed: b } = e;
      b && window.removeEventListener("scroll", y);
    }), {
      toggleItem: f,
      children: s,
      opened: a,
      classes: i,
      barRef: t,
      getClasses: v
    };
  }
}), pu = ["onClick"], mu = { class: "nut-menu__title-text" }, hu = { class: "nut-menu__title-icon" };
function vu(e, t, n, o, s, l) {
  const a = X("RectUp"), i = X("RectDown");
  return c(), d("view", {
    class: D(e.classes)
  }, [
    g("view", {
      ref: "barRef",
      class: D(["nut-menu__bar", { opened: e.opened }])
    }, [
      (c(!0), d(Z, null, re(e.children, (r, f) => (c(), d("view", {
        key: f,
        class: D(["nut-menu__item", { disabled: r.disabled, active: r.state.showPopup }]),
        style: V({ color: r.state.showPopup ? e.activeColor : "" }),
        onClick: (p) => !r.disabled && e.toggleItem(f)
      }, [
        g("view", {
          class: D(["nut-menu__title", e.getClasses(r.state.showPopup)])
        }, [
          g("view", mu, L(r.renderTitle()), 1),
          g("span", hu, [
            _(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (c(), J(a, { key: 0 })) : (c(), J(i, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, pu))), 128))
    ], 2),
    _(e.$slots, "default")
  ], 2);
}
const gu = /* @__PURE__ */ le(fu, [["render", vu]]), { create: yu } = te("menu-item"), bu = yu({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    modelValue: null,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    NutPopup: Ae,
    Check: xn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = me({
      showPopup: !1,
      showWrapper: !1
    }), { parent: o } = mt($o), s = S(() => o.props.direction === "down" ? {
      top: o.offset.value + "px"
    } : {
      bottom: o.offset.value + "px"
    }), l = S(() => {
      const y = { height: o.offset.value + "px" };
      return o.props.direction === "down" ? pe(G({}, y), { top: "0px" }) : pe(G({}, y), { bottom: "0px" });
    });
    return {
      style: s,
      placeholderElementStyle: l,
      renderTitle: () => {
        var v;
        if (e.title)
          return e.title;
        const y = (v = e.options) == null ? void 0 : v.find((b) => b.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: o,
      toggle: (y = !n.showPopup) => {
        y !== n.showPopup && (n.showPopup = y, y && (n.showWrapper = !0, t("open")));
      },
      onClick: (y) => {
        n.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value));
      },
      handleClose: () => {
        t("close"), n.showWrapper = !1;
      },
      handleClickOutside: () => {
        n.showPopup = !1, t("close");
      }
    };
  }
}), $u = { class: "nut-menu-item__content nut-menu-item__overflow" }, wu = ["onClick"];
function ku(e, t, n, o, s, l) {
  const a = X("Check"), i = X("nut-popup");
  return Ie((c(), d("view", {
    class: "nut-menu-item",
    style: V(e.style)
  }, [
    Ie(g("div", {
      class: "nut-menu-item-placeholder-element",
      style: V(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...r) => e.handleClickOutside && e.handleClickOutside(...r))
    }, null, 4), [
      [Me, e.state.showPopup]
    ]),
    ee(i, dt(e.$attrs, {
      visible: e.state.showPopup,
      "onUpdate:visible": t[1] || (t[1] = (r) => e.state.showPopup = r),
      style: { position: "absolute" },
      "overlay-style": { position: "absolute" },
      position: e.parent.props.direction === "down" ? "top" : "bottom",
      duration: e.parent.props.duration,
      "destroy-on-close": !1,
      overlay: e.parent.props.overlay,
      "lock-scroll": e.parent.props.lockScroll,
      "teleport-disable": !1,
      "close-on-click-overlay": e.parent.props.closeOnClickOverlay,
      onClosed: e.handleClose
    }), {
      default: ne(() => [
        g("view", $u, [
          (c(!0), d(Z, null, re(e.options, (r, f) => (c(), d("view", {
            key: f,
            class: D(["nut-menu-item__option", [{ active: r.value === e.modelValue }]]),
            style: V({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (p) => e.onClick(r)
          }, [
            r.value === e.modelValue ? (c(), d("span", {
              key: 0,
              class: D(["nut-menu-item__span", [r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              _(e.$slots, "icon", {}, () => [
                ee(a, dt({ ref_for: !0 }, e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            g("view", {
              class: D([r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: V({ color: r.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, L(r.text), 7)
          ], 14, wu))), 128)),
          _(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Me, e.state.showWrapper]
  ]);
}
const Cu = /* @__PURE__ */ le(bu, [["render", ku]]), wo = Symbol("nut-tabbar"), ko = /* @__PURE__ */ ve({
  name: "NutTabbar",
  __name: "tabbar",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: !1 },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !1 }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z(), l = z(null), a = z(n.modelValue), i = S(() => ({
      ["nut-tabbar"]: !0,
      "nut-tabbar-bottom": n.bottom,
      "nut-tabbar-safebottom": n.safeAreaInsetBottom
    })), { children: r, linkChildren: f } = pt(wo);
    return f({ props: n, activeIndex: a, changeIndex: (v, b) => {
      a.value = b, o("update:modelValue", b), o("tabSwitch", r[v], b);
    } }), Q(
      () => n.modelValue,
      (v) => {
        a.value = v;
      }
    ), $e(() => {
      n.bottom && n.placeholder && _e(() => {
        var b;
        const v = (b = l.value) == null ? void 0 : b.getBoundingClientRect().height;
        v && (s.value = v);
      });
    }), (v, b) => (c(), d("div", {
      class: D({ "nut-tabbar__placeholder": v.bottom && v.placeholder }),
      style: V({ height: s.value + "px" })
    }, [
      g("view", {
        ref_key: "nutTabbar",
        ref: l,
        class: D(i.value)
      }, [
        _(v.$slots, "default")
      ], 2)
    ], 6));
  }
});
be(ko);
const { create: Su } = te("badge"), Tu = Su({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 1e4
    },
    dot: {
      type: Boolean,
      default: !1
    },
    bubble: {
      type: Boolean,
      default: !1
    },
    hidden: {
      type: Boolean,
      default: !1
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = me({}), n = S(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), o = S(() => {
      if (e.dot)
        return;
      const s = e.value, l = e.max;
      return typeof s == "number" && typeof l == "number" && l < s ? `${l}+` : s;
    });
    return {
      state: t,
      stl: n,
      content: o
    };
  }
}), _u = { class: "nut-badge" }, Nu = ["textContent"];
function Du(e, t, n, o, s, l) {
  return c(), d("view", _u, [
    Ie(g("view", {
      class: "nut-badge__icon",
      style: V(e.stl)
    }, [
      _(e.$slots, "icon")
    ], 4), [
      [Me, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    _(e.$slots, "default"),
    Ie(g("view", {
      class: D(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: V(e.stl),
      textContent: L(e.content)
    }, null, 14, Nu), [
      [Me, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const Co = /* @__PURE__ */ le(Tu, [["render", Du]]), Iu = { class: "nut-tabbar-item_icon-box" }, Bu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Mu = { key: 1 }, Lu = { key: 0 }, So = /* @__PURE__ */ ve({
  name: "NutTabbarItem",
  __name: "tabbar-item",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(e) {
    const t = e, n = ln(), { parent: o, index: s } = mt(wo), l = S(() => {
      var r;
      return ((r = t.name) != null ? r : s.value) === o.activeIndex.value;
    }), a = S(() => l.value ? o.props.activeColor : o.props.unactiveColor), i = () => {
      var f, p, y;
      const r = (f = t.name) != null ? f : s.value;
      if (o.changeIndex(s.value, r), (p = o.children[s.value]) != null && p.href) {
        window.location.href = o.children[s.value].href;
        return;
      }
      if ((y = o.children[s.value]) != null && y.to) {
        const v = o.children[s.value].to;
        v && n ? n.push(v) : location.replace(v);
      }
    };
    return (r, f) => (c(), d("div", {
      class: D(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !l.value }]),
      style: V({
        color: a.value
      }),
      onClick: i
    }, [
      ee(Co, bl($l(r.$attrs)), {
        default: ne(() => [
          g("view", Iu, [
            r.$slots.icon ? (c(), d("div", Bu, [
              _(r.$slots, "icon", { active: l.value })
            ])) : N("", !0),
            r.icon && !r.$slots.icon ? (c(), d("view", Mu, [
              (c(), J(ze(ce(nt)(r.icon)), { class: "nut-popover-item-img" }))
            ])) : N("", !0),
            g("view", {
              class: D(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !r.icon && !r.$slots.icon }])
            }, [
              _(r.$slots, "default", {}, () => [
                r.tabTitle ? (c(), d("view", Lu, L(r.tabTitle), 1)) : N("", !0)
              ])
            ], 2)
          ])
        ]),
        _: 3
      }, 16)
    ], 6));
  }
});
be(So);
const { create: Pu } = te("elevator"), Au = Pu({
  props: {
    height: {
      type: [Number, String],
      default: "200px"
    },
    acceptKey: {
      type: [String],
      default: "title"
    },
    indexList: {
      type: Array,
      default: () => []
    },
    isSticky: {
      type: [Boolean],
      default: !1
    },
    spaceHeight: {
      type: [Number],
      default: 23
    },
    titleHeight: {
      type: [Number],
      default: 35
    }
  },
  emits: ["clickItem", "clickIndex", "change"],
  setup(e, { emit: t, expose: n }) {
    const o = z(null), s = me({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: !1,
      currentIndex: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    }), l = S(() => o.value.clientHeight), a = (u, m) => u.getAttribute("data-" + m), i = (u) => {
      _e(() => {
        !s.listGroup.includes(u) && u != null && s.listGroup.push(u);
      });
    }, r = () => {
      let u = 0;
      s.listHeight.push(u);
      for (let m = 0; m < s.listGroup.length; m++) {
        let h = s.listGroup[m];
        u += Math.floor(h.clientHeight), s.listHeight.push(u);
      }
    }, f = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > s.listHeight.length - 2 && (u = s.listHeight.length - 2), s.codeIndex = u, o.value.scrollTo(0, s.listHeight[u]));
    }, p = (u) => {
      s.scrollStart = !0;
      let m = a(u.target, "index"), h = u.touches[0];
      s.touchState.y1 = h.pageY, s.anchorIndex = +m, s.codeIndex = +m, f(+m);
    }, y = (u) => {
      let m = u.touches[0];
      s.touchState.y2 = m.pageY;
      let h = (s.touchState.y2 - s.touchState.y1) / e.spaceHeight | 0;
      s.codeIndex = s.anchorIndex + h, f(s.codeIndex);
    }, v = () => {
      s.scrollStart = !1;
    }, b = (u, m) => {
      t("clickItem", u, m), s.currentData = m, s.currentKey = u;
    }, w = (u) => {
      t("clickIndex", u);
    }, C = (u) => {
      let h = u.target.scrollTop;
      const $ = s.listHeight;
      s.scrollY = h;
      for (let P = 0; P < $.length - 1; P++) {
        let A = $[P], I = $[P + 1];
        if (s.scrollY >= A && s.scrollY < I) {
          s.currentIndex = P, s.diff = I - s.scrollY;
          return;
        }
      }
      s.currentIndex = $.length - 2;
    };
    return $e(() => {
      o.value && o.value.addEventListener("scroll", C);
    }), n({
      scrollTo: f
    }), Q(
      () => s.listGroup.length,
      () => {
        s.listHeight = [], _e(r);
      }
    ), Q(
      () => s.diff,
      (u) => {
        const m = s.listHeight;
        let h = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        s.scrollY + l.value === m[m.length - 1] && h !== 0 && (h = 0), s.fixedTop !== h && (s.fixedTop = h);
      }
    ), Q(
      () => s.currentIndex,
      (u) => {
        t("change", u);
      }
    ), pe(G({}, we(s)), {
      clientHeight: l,
      setListGroup: i,
      listview: o,
      touchStart: p,
      touchMove: y,
      touchEnd: v,
      handleClickItem: b,
      handleClickIndex: w
    });
  }
}), Eu = { class: "nut-elevator" }, zu = { class: "nut-elevator__list__item__code" }, Vu = ["onClick"], Hu = ["innerHTML"], Ou = { class: "nut-elevator__list__fixed" }, Ru = { class: "nut-elevator__list__fixed-title" }, Fu = { class: "nut-elevator__bars__inner" }, Wu = ["data-index", "onClick"];
function Yu(e, t, n, o, s, l) {
  var a, i;
  return c(), d("view", Eu, [
    g("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: V({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (c(!0), d(Z, null, re(e.indexList, (r) => (c(), d("view", {
        key: r[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        g("view", zu, L(r[e.acceptKey]), 1),
        (c(!0), d(Z, null, re(r.list, (f) => (c(), d("view", {
          key: f.id,
          class: D(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === f.id && e.currentKey === r[e.acceptKey]
          }]),
          onClick: (p) => e.handleClickItem(r[e.acceptKey], f)
        }, [
          e.$slots.default ? _(e.$slots, "default", {
            key: 1,
            item: f
          }) : (c(), d("span", {
            key: 0,
            innerHTML: f.name
          }, null, 8, Hu))
        ], 10, Vu))), 128))
      ]))), 128))
    ], 4),
    Ie(g("view", Ou, [
      g("view", Ru, L((i = (a = e.indexList) == null ? void 0 : a[e.currentIndex]) == null ? void 0 : i[e.acceptKey]), 1)
    ], 512), [
      [Me, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ie((c(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, L(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Me, e.scrollStart]
    ]) : N("", !0),
    g("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
      onTouchmove: t[1] || (t[1] = De((...r) => e.touchMove && e.touchMove(...r), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
    }, [
      g("view", Fu, [
        (c(!0), d(Z, null, re(e.indexList, (r, f) => (c(), d("view", {
          key: r[e.acceptKey],
          class: D(["nut-elevator__bars__inner__item", { active: r[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": f,
          onClick: (p) => e.handleClickIndex(r[e.acceptKey])
        }, L(r[e.acceptKey]), 11, Wu))), 128))
      ])
    ], 32)
  ]);
}
const To = /* @__PURE__ */ le(Au, [["render", Yu]]), { create: Ku } = te("pagination"), ju = "NutPagination", Uu = Ku({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: "multi"
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    pageCount: {
      type: [String, Number],
      default: ""
    },
    totalItems: {
      type: [String, Number],
      default: "0"
    },
    itemsPerPage: {
      type: [String, Number],
      default: "10"
    },
    showPageSize: {
      type: [String, Number],
      default: "5"
    },
    forceEllipses: {
      type: Boolean,
      default: !1
    }
  },
  components: {},
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(ju), { modelValue: o, mode: s, showPageSize: l, forceEllipses: a } = we(e), i = S(() => {
      const { pageCount: y, totalItems: v, itemsPerPage: b } = we(e), w = +y.value || Math.ceil(+v.value / +b.value);
      return Math.max(1, w);
    }), r = (y, v) => {
      y > i.value || y < 1 || (y != o.value && t("update:modelValue", y), v && t("change", y));
    }, f = (y, v, b = !1) => ({ number: y, text: v, active: b }), p = S(() => {
      if (s.value == "simple")
        return;
      let y = [];
      const v = i.value, b = +l.value;
      let w = 1, C = v;
      const u = v > b;
      u && (w = Math.max(o.value - Math.floor(b / 2), 1), C = w + +b - 1, C > v && (C = v, w = C - +b + 1));
      for (var m = w; m <= C; m++) {
        const h = f(m, m, o.value == m);
        y.push(h);
      }
      if (u && b > 0 && a.value) {
        if (w > 1) {
          const h = f(w - 1, "...");
          y.unshift(h);
        }
        if (C < v) {
          const h = f(C + 1, "...");
          y.push(h);
        }
      }
      return y;
    });
    return ct(() => {
      r(o.value, !1);
    }), {
      modelValue: o,
      select: r,
      countRef: i,
      mode: s,
      pages: p,
      forceEllipses: a,
      translate: n
    };
  }
}), Xu = { class: "nut-pagination" }, qu = {
  key: 0,
  class: "nut-pagination-contain"
}, Gu = ["onClick"], Zu = {
  key: 1,
  class: "nut-pagination-contain"
}, Ju = { class: "nut-pagination-simple" };
function Qu(e, t, n, o, s, l) {
  return c(), d("view", Xu, [
    g("view", {
      class: D(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (a) => e.select(e.modelValue - 1, !0))
    }, [
      _(e.$slots, "prev-text", {}, () => [
        ge(L(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (c(), d("view", qu, [
      (c(!0), d(Z, null, re(e.pages, (a, i) => (c(), d("view", {
        key: i + "pagination",
        class: D(["nut-pagination-item", a.active ? "active" : ""]),
        onClick: (r) => e.select(a.number, !0)
      }, [
        _(e.$slots, "page", { item: a }, () => [
          ge(L(a.text), 1)
        ])
      ], 10, Gu))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (c(), d("view", Zu, [
      g("view", Ju, L(e.modelValue) + "/" + L(e.countRef), 1)
    ])) : N("", !0),
    g("view", {
      class: D(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (a) => e.select(e.modelValue + 1, !0))
    }, [
      _(e.$slots, "next-text", {}, () => [
        ge(L(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const xu = /* @__PURE__ */ le(Uu, [["render", Qu]]), Mt = window, ec = typeof window != "undefined";
function tc() {
  return typeof Mt != "undefined" ? Mt.requestAnimationFrame || Mt.webkitRequestAnimationFrame || function(e) {
    Mt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function nc(e) {
  ec ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Oe = tc(), Mn = 10;
function oc(e, t) {
  return e > t && e > Mn ? "horizontal" : t > e && t > Mn ? "vertical" : "";
}
function Qe() {
  const e = z(0), t = z(0), n = z(0), o = z(0), s = z(0), l = z(0), a = z(0), i = z(0), r = z(""), f = () => r.value === "vertical", p = () => r.value === "horizontal", y = () => {
    s.value = 0, l.value = 0, a.value = 0, i.value = 0, r.value = "";
  };
  return {
    move: (w) => {
      const C = w.touches[0];
      s.value = C.clientX - e.value, l.value = C.clientY - t.value, n.value = C.clientX, o.value = C.clientY, a.value = Math.abs(s.value), i.value = Math.abs(l.value), r.value || (r.value = oc(a.value, i.value));
    },
    start: (w) => {
      y(), e.value = w.touches[0].clientX, t.value = w.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: o,
    deltaX: s,
    deltaY: l,
    offsetX: a,
    offsetY: i,
    direction: r,
    isVertical: f,
    isHorizontal: p
  };
}
const lc = (e, t, n, o) => {
  const s = z(), l = z({ width: 0, height: 0 }), a = () => Ge(void 0, null, function* () {
    var v, b;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? o(s).then(
      (w) => {
        l.value.width = w.width || 0, l.value.height = w.height || 0;
      },
      () => {
      }
    ) : (l.value.width = ((v = s.value) == null ? void 0 : v.clientWidth) || 0, l.value.height = ((b = s.value) == null ? void 0 : b.clientHeight) || 0);
  });
  $e(() => {
    setTimeout(() => {
      a();
    }, 100);
  });
  const i = me({
    offset: 0,
    moving: !1
  }), r = Qe();
  let f = "";
  const p = (v, b) => {
    var C;
    let w = v;
    switch (e.direction == "horizontal" ? (f = v > 0 ? "right" : "left", w = Math.abs(w) / l.value.width * 100) : (f = b > 0 ? "bottom" : "top", w = b, w = Math.abs(w) / ((C = l.value) == null ? void 0 : C.height) * 100), w > 85 && (w = 85), f) {
      case "left":
      case "top":
        t.isEnd() && (w = 0, i.moving = !1);
        break;
      case "right":
      case "bottom":
        w = -w, t.isBegin() && (w = 0, i.moving = !1);
        break;
    }
    i.offset = w;
  };
  return { touchMethods: {
    onTouchStart(v) {
      e.swipeable && r.start(v);
    },
    onTouchMove(v) {
      e.swipeable && (r.move(v), i.moving = !0, p(r.deltaX.value, r.deltaY.value), e.direction == "horizontal" && r.isHorizontal() && (v.preventDefault(), v.stopPropagation()), e.direction == "vertical" && r.isVertical() && (v.preventDefault(), v.stopPropagation()));
    },
    onTouchEnd() {
      if (i.moving)
        switch (i.moving = !1, f) {
          case "left":
          case "top":
            i.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            i.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: i, tabsContentRef: s };
}, _o = Symbol("nut-tab");
class sc {
  constructor() {
    H(this, "title", "");
    H(this, "titleSlot");
    H(this, "paneKey", "");
    H(this, "disabled", !1);
  }
}
const { create: ac } = te("tabs"), ic = ac({
  components: { NutSticky: mo, JoySmile: ua },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
    },
    titleScroll: {
      type: Boolean,
      default: !1
    },
    ellipsis: {
      type: Boolean,
      default: !0
    },
    swipeable: {
      type: Boolean,
      default: !1
    },
    autoHeight: {
      type: Boolean,
      default: !1
    },
    background: {
      type: String,
      default: ""
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: !1
    },
    top: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null);
    let s;
    Re(_o, {
      activeKey: S(() => e.modelValue || "0"),
      autoHeight: S(() => e.autoHeight),
      animatedTime: S(() => e.animatedTime)
    });
    const l = z([]), a = (k) => {
      k.forEach((E, T) => {
        var K, oe, W, Y, R, x, U, se, ue;
        let j = E.type;
        if (j = j.name || j, j == "NutTabPane") {
          let fe = new sc();
          if ((K = E.props) != null && K.title || (oe = E.props) != null && oe["pane-key"] || (W = E.props) != null && W.paneKey) {
            let Ce = jt((Y = E.props) == null ? void 0 : Y["pane-key"]), Le = Ce == "number" || Ce == "string" ? String((R = E.props) == null ? void 0 : R["pane-key"]) : null, O = jt((x = E.props) == null ? void 0 : x.paneKey), q = O == "number" || O == "string" ? String((U = E.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (se = E.props) == null ? void 0 : se.title, fe.paneKey = Le || q || String(T), fe.disabled = (ue = E.props) == null ? void 0 : ue.disabled;
          }
          l.value.push(fe);
        } else {
          if (E.children == " ")
            return;
          a(E.children);
        }
      });
    }, i = z(e.modelValue || 0), r = (k) => {
      let E = l.value.findIndex((T) => T.paneKey == k);
      l.value.length == 0 || E == -1 || (i.value = E);
    }, f = S(() => e.titleScroll && e.direction === "vertical"), p = z(), y = z([]), v = (k) => {
      const E = p.value, T = y.value;
      if (!E || !T || !T[i.value])
        return;
      const j = T[i.value];
      let K = 0;
      e.direction === "vertical" ? K = j.offsetTop - E.offsetTop + 10 - (E.offsetHeight - j.offsetHeight) / 2 : K = j.offsetLeft - (E.offsetWidth - j.offsetWidth) / 2, b(E, K, k ? 0 : 0.3, e.direction);
    }, b = (k, E, T, j) => {
      let K = 0;
      const oe = j === "horizontal" ? k.scrollLeft : k.scrollTop, W = T === 0 ? 1 : Math.round(T * 1e3 / 16);
      function Y() {
        j === "horizontal" ? k.scrollLeft += (E - oe) / W : k.scrollTop += (E - oe) / W, ++K < W && Oe(Y);
      }
      Y();
    }, w = (k = ((E) => (E = n.default) == null ? void 0 : E.call(n))()) => {
      l.value = [], k = k == null ? void 0 : k.filter((T) => typeof T.children != "string"), k && k.length && a(k), r(e.modelValue), _e(() => {
        v();
      });
    }, C = (k) => {
      s = k.fixed;
    };
    Q(
      () => {
        var k;
        return (k = n.default) == null ? void 0 : k.call(n);
      },
      (k) => {
        w(k);
      }
    );
    const u = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (k) => {
        if (r(k), v(), s) {
          let E = Ye(o.value).top + u(), T = Math.ceil(E - e.top);
          window.scrollTo({
            top: T,
            behavior: "smooth"
          });
        }
      }
    ), $e(w), Tt(w);
    const m = {
      isBegin: () => i.value == 0,
      isEnd: () => i.value == l.value.length - 1,
      next: () => {
        i.value += 1;
        const k = l.value[i.value].disabled;
        if (m.isEnd() && k) {
          m.prev();
          return;
        }
        if (k && i.value < l.value.length - 1) {
          m.next();
          return;
        }
        m.updateValue(l.value[i.value]);
      },
      prev: () => {
        i.value -= 1;
        const k = l.value[i.value].disabled;
        if (m.isBegin() && k) {
          m.next();
          return;
        }
        if (k && i.value > 0) {
          m.prev();
          return;
        }
        m.updateValue(l.value[i.value]);
      },
      updateValue: (k) => {
        t("update:modelValue", k.paneKey), t("change", k);
      },
      tabChange: (k, E) => {
        t("click", k), !(k.disabled || i.value == E) && (i.value = E, m.updateValue(k));
      },
      setTabItemRef: (k, E) => {
        y.value[E] = k;
      }
    }, { tabsContentRef: h, touchState: $, touchMethods: P } = lc(e, m), A = S(() => {
      let k = i.value * 100;
      $.moving && (k += $.offset);
      let E = {
        transform: e.direction == "horizontal" ? `translate3d(-${k}%, 0, 0)` : `translate3d( 0,-${k}%, 0)`,
        transitionDuration: $.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (E = {}), E;
    }), I = S(() => ({
      background: e.background
    })), B = S(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), M = S(() => {
      if (!e.titleGutter)
        return {};
      const k = Be(e.titleGutter);
      return e.direction === "vertical" ? { paddingTop: k, paddingBottom: k } : { paddingLeft: k, paddingRight: k };
    });
    return G(G({
      navRef: p,
      tabsContentRef: h,
      titles: l,
      contentStyle: A,
      tabsNavStyle: I,
      titleStyle: M,
      tabsActiveStyle: B,
      container: o,
      getScrollY: f,
      onStickyScroll: C
    }, m), P);
  }
}), rc = ["onClick"], uc = ["onClick"];
function cc(e, t, n, o, s, l) {
  const a = X("JoySmile"), i = X("nut-sticky");
  return c(), d("view", {
    ref: "container",
    class: D(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), J(i, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: ne(() => [
        g("view", {
          ref: "navRef",
          class: D(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: V(e.tabsNavStyle)
        }, [
          e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), d(Z, { key: 1 }, re(e.titles, (r, f) => (c(), d("view", {
            key: r.paneKey,
            class: D(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: r.paneKey == e.modelValue,
              disabled: r.disabled
            }]),
            style: V(e.titleStyle),
            onClick: (p) => e.tabChange(r, f)
          }, [
            e.type == "line" ? (c(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: V(e.tabsActiveStyle)
            }, null, 4)) : N("", !0),
            e.type == "smile" ? (c(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: V(e.tabsActiveStyle)
            }, [
              ee(a, { color: e.color }, null, 8, ["color"])
            ], 4)) : N("", !0),
            g("view", {
              class: D(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, L(r.title), 3)
          ], 14, rc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (c(), d("view", {
      key: 1,
      ref: "navRef",
      class: D(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: V(e.tabsNavStyle)
    }, [
      e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), d(Z, { key: 1 }, re(e.titles, (r, f) => (c(), d("view", {
        key: r.paneKey,
        ref_for: !0,
        ref: (p) => e.setTabItemRef(p, f),
        class: D(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: r.paneKey == e.modelValue,
          disabled: r.disabled
        }]),
        style: V(e.titleStyle),
        onClick: (p) => e.tabChange(r, f)
      }, [
        e.type == "line" ? (c(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: V(e.tabsActiveStyle)
        }, null, 4)) : N("", !0),
        e.type == "smile" ? (c(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: V(e.tabsActiveStyle)
        }, [
          ee(a, { color: e.color }, null, 8, ["color"])
        ], 4)) : N("", !0),
        g("view", {
          class: D(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, L(r.title), 3)
      ], 14, uc))), 128))
    ], 6)),
    g("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: V(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r)),
      onTouchmove: t[1] || (t[1] = (...r) => e.onTouchMove && e.onTouchMove(...r)),
      onTouchend: t[2] || (t[2] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
      onTouchcancel: t[3] || (t[3] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
    }, [
      _(e.$slots, "default")
    ], 36)
  ], 2);
}
const No = /* @__PURE__ */ le(ic, [["render", cc]]), { create: dc } = te("tab-pane"), fc = dc({
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    paneKey: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = Ve(_o), n = S(() => ({
      display: (t == null ? void 0 : t.animatedTime.value) == 0 && e.paneKey != (t == null ? void 0 : t.activeKey.value) ? "none" : void 0
    }));
    return pe(G({}, t), {
      paneStyle: n
    });
  }
});
function pc(e, t, n, o, s, l) {
  return c(), d("view", {
    class: D(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: V(e.paneStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const Do = /* @__PURE__ */ le(fc, [["render", pc]]), mc = {
  key: 0,
  class: "nut-indicator--number"
}, hc = {
  key: 1,
  class: "nut-indicator--dot"
}, Io = /* @__PURE__ */ ve({
  name: "NutIndicator",
  __name: "indicator",
  props: {
    size: { default: 3 },
    current: { default: 1 },
    block: { type: Boolean, default: !1 },
    align: { default: "center" },
    fillZero: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const o = "nut-indicator";
      return {
        [o]: !0,
        [`${o}--block`]: t.block,
        [`${o}--align__${t.align}`]: t.block && t.align
      };
    });
    return (o, s) => (c(), d("view", {
      class: D(n.value)
    }, [
      (c(!0), d(Z, null, re(o.size, (l) => (c(), d(Z, { key: l }, [
        l === o.current ? (c(), d("view", mc, L(o.fillZero && ce(Ze)(l) || l), 1)) : (c(), d("view", hc))
      ], 64))), 128))
    ], 2));
  }
});
be(Io);
const { create: vc } = te("side-navbar"), gc = vc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = me({
      count: 1,
      observer: null
    }), o = (l, a = 1) => {
      var i;
      for (let r = 0; r < l.length; r++) {
        let f = l[r];
        (i = f == null ? void 0 : f.children) != null && i[0] && (f.children[0].style.paddingLeft = +e.offset * a + "px", f.className.includes("nut-side-navbar-item") || o(Array.from(f.children[1].children), ++n.count));
      }
      n.count--;
    }, s = () => {
      let l = t.value.childNodes;
      l != null && l.length && (l = Array.from(l).filter((a) => a.nodeType !== 3).map((a) => a), o(l));
    };
    return $e(() => {
      s(), n.observer = new MutationObserver(function() {
        n.count = 1, s();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), pe(G({}, we(n)), {
      list: t
    });
  }
}), yc = { class: "nut-side-navbar" }, bc = { class: "nut-side-navbar__content" }, $c = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function wc(e, t, n, o, s, l) {
  return c(), d("view", yc, [
    g("view", bc, [
      g("view", $c, [
        _(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const kc = /* @__PURE__ */ le(gc, [["render", wc]]), { create: Cc } = te("side-navbar-item"), Sc = Cc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Tc = { class: "nut-side-navbar-item" }, _c = { class: "nut-side-navbar-item__title" };
function Nc(e, t, n, o, s, l) {
  return c(), d("view", Tc, [
    g("span", _c, L(e.title), 1)
  ]);
}
const Dc = /* @__PURE__ */ le(Sc, [["render", Nc]]), { create: Ic } = te("sub-side-navbar"), Bc = Ic({
  props: {
    title: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: !0
    }
  },
  components: { ArrowDown2: El, ArrowUp2: Rl },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = me({
      direction: ""
    }), o = S(() => ({
      height: n.direction ? "0px" : "auto"
    })), s = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return $e(() => {
      n.direction = e.open ? "" : "up";
    }), pe(G({}, we(n)), {
      style: o,
      handleClick: s
    });
  }
}), Mc = { class: "nut-sub-side-navbar" }, Lc = { class: "nut-sub-side-navbar__title__text" }, Pc = { class: "nut-sub-side-navbar__title__icon" };
function Ac(e, t, n, o, s, l) {
  const a = X("ArrowDown2"), i = X("ArrowUp2");
  return c(), d("view", Mc, [
    g("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
    }, [
      g("span", Lc, L(e.title), 1),
      g("span", Pc, [
        e.direction ? (c(), J(i, { key: 1 })) : (c(), J(a, { key: 0 }))
      ])
    ]),
    Ie(g("view", {
      class: D(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: V(e.style)
    }, [
      _(e.$slots, "default")
    ], 6), [
      [Me, !e.direction]
    ])
  ]);
}
const Ec = /* @__PURE__ */ le(Bc, [["render", Ac]]), Bo = Symbol("nut-form"), Mo = Symbol("nut-form-disabled"), Lo = Symbol("nut-form-tip"), qe = (e) => {
  const { parent: t } = mt(Mo);
  return S(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: zc, create: Vc } = te("range"), Hc = Vc({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: !1
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = qe(Je(e, "disabled")), o = z(0);
    let s, l;
    const a = z(), i = z(), r = Qe(), f = S(() => {
      const { marks: W, max: Y, min: R } = e;
      return Object.keys(W).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +Y);
    }), p = S(() => Number(e.max) - Number(e.min)), y = S(() => {
      const W = zc;
      return {
        [W]: !0,
        [`${W}-disabled`]: n.value,
        [`${W}-vertical`]: e.vertical,
        [`${W}-show-number`]: !e.hiddenRange
      };
    }), v = S(() => {
      const W = "nut-range-container";
      return {
        [W]: !0,
        [`${W}-vertical`]: e.vertical
      };
    }), b = S(() => ({
      background: e.inactiveColor
    })), w = S(() => ({
      borderColor: e.buttonColor
    })), C = (W) => !!e.range && Array.isArray(W), u = () => {
      const { modelValue: W, min: Y } = e;
      return C(W) ? `${(W[1] - W[0]) * 100 / p.value}%` : `${(W - Number(Y)) * 100 / p.value}%`;
    }, m = () => {
      const { modelValue: W, min: Y } = e;
      return C(W) ? `${(W[0] - Number(Y)) * 100 / p.value}%` : "0%";
    }, h = S(() => e.vertical ? {
      height: u(),
      top: m(),
      background: e.activeColor,
      transition: i.value ? "none" : void 0
    } : {
      width: u(),
      left: m(),
      background: e.activeColor,
      transition: i.value ? "none" : void 0
    }), $ = (W) => {
      const Y = "nut-range-mark", { modelValue: R, max: x, min: U } = e;
      let se = Number(U), ue = Number(x);
      if (e.range) {
        const [Ce, Le] = R;
        se = Ce, ue = Le;
      } else
        ue = R;
      let fe = W <= +ue && W >= se;
      return {
        [`${Y}-text`]: !0,
        [`${Y}-text-active`]: fe
      };
    }, P = (W) => {
      const { min: Y, vertical: R } = e;
      let x = {
        left: `${(W - Number(Y)) / p.value * 100}%`
      };
      return R && (x = {
        top: `${(W - Number(Y)) / p.value * 100}%`
      }), x;
    }, A = (W) => {
      const { modelValue: Y, max: R, min: x } = e;
      let U = Number(x), se = Number(R);
      if (e.range) {
        const [Ce, Le] = Y;
        U = Ce, se = Le;
      }
      return {
        background: W <= se && W >= U ? e.activeColor : e.inactiveColor
      };
    }, I = (W) => {
      const { min: Y, max: R, step: x } = e;
      return W = Math.max(+Y, Math.min(W, +R)), Math.round(W / +x) * +x;
    }, B = (W, Y) => JSON.stringify(W) === JSON.stringify(Y), M = (W) => W[0] > W[1] ? W.slice(0).reverse() : W, k = (W, Y) => {
      C(W) ? W = M(W).map(I) : W = I(W), B(W, e.modelValue) || t("update:modelValue", W), Y && !B(W, s) && t("change", W);
    }, E = (W) => {
      if (n.value)
        return;
      const { min: Y, modelValue: R } = e, x = Ye(a);
      let U = W.clientX - x.left, se = x.width;
      e.vertical && (U = W.clientY - x.top, se = x.height);
      const ue = Number(Y) + U / se * p.value;
      if (C(R)) {
        const [fe, Ce] = R, Le = (fe + Ce) / 2;
        ue <= Le ? k([ue, Ce], !0) : k([fe, ue], !0);
      } else
        k(ue, !0);
    }, T = (W) => {
      n.value || (r.start(W), l = e.modelValue, C(l) ? s = l.map(I) : s = I(l), i.value = "start");
    }, j = (W) => {
      if (n.value)
        return;
      i.value === "start" && t("dragStart"), r.move(W), i.value = "draging";
      const Y = Ye(a);
      let R = r.deltaX.value, x = Y.width, U = R / x * p.value;
      e.vertical && (R = r.deltaY.value, x = Y.height, U = R / x * p.value), C(s) ? l[o.value] = s[o.value] + U : l = s + U, k(l);
    }, K = () => {
      n.value || (i.value === "draging" && (k(l, !0), t("dragEnd")), i.value = "");
    }, oe = (W) => Xn(e.modelValue) && typeof W == "number" ? e.modelValue[W] : Number(e.modelValue);
    return pe(G({
      root: a,
      classes: y,
      wrapperStyle: b,
      buttonStyle: w,
      onClick: E,
      onTouchStart: T,
      onTouchMove: j,
      onTouchEnd: K
    }, we(e)), {
      barStyle: h,
      curValue: oe,
      buttonIndex: o,
      containerClasses: v,
      markClassName: $,
      marksStyle: P,
      marksList: f,
      tickStyle: A,
      disabled: n
    });
  }
}), Oc = {
  key: 0,
  class: "nut-range-min"
}, Rc = {
  key: 0,
  class: "nut-range-mark"
}, Fc = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], Wc = {
  key: 0,
  class: "number"
}, Yc = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], Kc = {
  key: 0,
  class: "number"
}, jc = {
  key: 1,
  class: "nut-range-max"
};
function Uc(e, t, n, o, s, l) {
  return c(), d("view", {
    class: D(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (c(), d("view", Oc, L(+e.min), 1)),
    g("view", {
      ref: "root",
      style: V(e.wrapperStyle),
      class: D(e.classes),
      onClick: t[9] || (t[9] = De((...a) => e.onClick && e.onClick(...a), ["stop"]))
    }, [
      e.marksList.length > 0 ? (c(), d("view", Rc, [
        (c(!0), d(Z, null, re(e.marksList, (a) => (c(), d("span", {
          key: a,
          class: D(e.markClassName(a)),
          style: V(e.marksStyle(a))
        }, [
          ge(L(a) + " ", 1),
          g("span", {
            class: "nut-range-tick",
            style: V(e.tickStyle(a))
          }, null, 4)
        ], 6))), 128))
      ])) : N("", !0),
      g("view", {
        class: "nut-range-bar",
        style: V(e.barStyle)
      }, [
        e.range ? (c(), d(Z, { key: 0 }, re([0, 1], (a) => g("view", {
          key: a,
          role: "slider",
          class: D({
            "nut-range-button-wrapper-left": a == 0,
            "nut-range-button-wrapper-right": a == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(a),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (i) => {
              typeof a == "number" && (e.buttonIndex = a), e.onTouchStart(i);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...i) => e.onTouchMove && e.onTouchMove(...i), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...i) => e.onTouchEnd && e.onTouchEnd(...i), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...i) => e.onTouchEnd && e.onTouchEnd(...i), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (i) => i.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: V(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), d("view", Wc, L(e.curValue(a)), 1))
          ], 4))
        ], 42, Fc)), 64)) : (c(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (a) => {
              e.onTouchStart(a);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...a) => e.onTouchMove && e.onTouchMove(...a), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (a) => a.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: V(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), d("view", Kc, L(e.curValue()), 1))
          ], 4))
        ], 40, Yc))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (c(), d("view", jc, L(+e.max), 1))
  ], 2);
}
const Po = /* @__PURE__ */ le(Hc, [["render", Uc]]), { create: Xc } = te("searchbar"), qc = "NutSearchbar", Gc = Xc({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    maxLength: {
      type: [String, Number],
      default: "9999"
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Object,
      default: () => tn
    },
    background: {
      type: String,
      default: ""
    },
    inputBackground: {
      type: String,
      default: ""
    },
    focusStyle: {
      type: Object,
      default: () => ({})
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "change",
    "update:modelValue",
    "blur",
    "focus",
    "clear",
    "search",
    "clickInput",
    "clickLeftIcon",
    "clickRightIcon"
  ],
  setup(e, { emit: t }) {
    const n = qe(Je(e, "disabled")), o = Se(qc), s = me({
      active: !1
    }), l = S(() => ({
      background: e.background
    })), a = S(() => ({
      background: e.inputBackground
    })), i = (h) => {
      let P = h.target.value;
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), t("update:modelValue", P, h), t("change", P, h);
    }, r = z({}), f = (h) => {
      let P = h.target.value;
      s.active = !0, r.value = e.focusStyle, t("focus", P, h);
    }, p = (h) => {
      setTimeout(() => {
        s.active = !1;
      }, 0);
      let P = h.target.value;
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), r.value = {}, t("blur", P, h);
    }, y = (h) => {
      t("update:modelValue", "", h), t("change", "", h), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, b = (h) => {
      t("clickInput", h);
    }, w = (h) => {
      t("clickLeftIcon", e.modelValue, h);
    }, C = (h) => {
      t("clickRightIcon", e.modelValue, h);
    }, u = S(() => ({
      textAlign: e.inputAlign
    })), m = z(null);
    return $e(() => {
      e.autofocus && m.value.focus();
    }), pe(G({
      renderIcon: nt,
      inputsearch: m
    }, we(s)), {
      valueChange: i,
      valueFocus: f,
      valueBlur: p,
      handleClear: y,
      handleSubmit: v,
      searchbarStyle: l,
      inputSearchbarStyle: a,
      focusCss: r,
      translate: o,
      clickInput: b,
      leftIconClick: w,
      rightIconClick: C,
      styleSearchbar: u,
      disabled: n
    });
  }
}), Zc = {
  key: 0,
  class: "nut-searchbar__search-label"
}, Jc = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, Qc = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], xc = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, ed = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function td(e, t, n, o, s, l) {
  return c(), d("view", {
    class: D(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: V(e.searchbarStyle)
  }, [
    e.label ? (c(), d("span", Zc, L(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (c(), d("view", Jc, [
      _(e.$slots, "leftout")
    ])) : N("", !0),
    g("view", {
      class: D(["nut-searchbar__search-input", e.shape]),
      style: V(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (c(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...a) => e.leftIconClick && e.leftIconClick(...a))
      }, [
        _(e.$slots, "leftin")
      ])) : N("", !0),
      g("view", {
        class: D(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        g("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
        }, [
          g("input", {
            ref: "inputsearch",
            class: D(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: V(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...a) => e.clickInput && e.clickInput(...a)),
            onInput: t[2] || (t[2] = (...a) => e.valueChange && e.valueChange(...a)),
            onFocus: t[3] || (t[3] = (...a) => e.valueFocus && e.valueFocus(...a)),
            onBlur: t[4] || (t[4] = (...a) => e.valueBlur && e.valueBlur(...a))
          }, null, 46, Qc)
        ], 32)
      ], 2),
      g("view", {
        class: D(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ie((c(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...a) => e.handleClear && e.handleClear(...a))
        }, [
          e.$slots["clear-icon"] ? _(e.$slots, "clear-icon", { key: 0 }) : (c(), J(ze(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Me, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (c(), d("view", xc, [
          _(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (c(), d("view", ed, [
      _(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const nd = /* @__PURE__ */ le(Gc, [["render", td]]), Pt = (e, t, n) => e.map((o) => {
  const { value: s = "value", text: l = "text", children: a = "children" } = n, v = o, { [s]: i, [l]: r, [a]: f } = v, p = Yt(v, [It(s), It(l), It(a)]), y = pe(G({
    loading: !1
  }, p), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: i,
    text: r,
    children: f,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Pt(y.children, y, n)), y;
}), Ao = (e, t) => {
  let n = 0, o;
  for (; (o = e[n++]) && t(o) !== !0; )
    o.children && o.children.length && Ao(o.children, t);
}, od = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, ld = (e, t) => {
  const n = G(G({}, od), t || {}), { topId: o, idKey: s, pidKey: l, sortKey: a } = n;
  let i = [], r = {};
  return e.forEach((f) => {
    f = G({}, f);
    const { [s]: p, [l]: y } = f, v = r[y] = r[y] || [];
    !i.length && y === o && (i = v), v.push(f), f.children = r[p] || (r[p] = []);
  }), a && Object.keys(r).forEach((f) => {
    r[f].length > 1 && r[f].sort((p, y) => p[a] - y[a]);
  }), r = null, i;
};
class Ln {
  constructor(t, n) {
    H(this, "nodes");
    H(this, "config");
    this.config = G({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Pt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Pt(t, n, this.config) : this.nodes = Pt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return Ao(this.nodes, (o) => {
      if (o.value === t)
        return n = o, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let o = this.nodes;
    for (; o && o.length; ) {
      const s = o.find((l) => l.value === t[l.level]);
      if (!s)
        break;
      n.push(s), o = s.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: o, children: s } = t, l = Array.isArray(s) && !!s.length;
    return o || !l && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: s } = t;
    return Array.isArray(s) && !!s.length;
  }
}
const { create: sd } = te("cascader-item"), ad = sd({
  components: {
    Loading: st,
    Checklist: ps,
    NutTabs: No,
    NutTabPane: Do
  },
  props: {
    visible: Boolean,
    modelValue: Array,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    convertConfig: Object
  },
  emits: ["update:modelValue", "change", "pathChange"],
  setup(e, { emit: t }) {
    const n = Se(), o = S(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), s = z(0), l = z(!1), a = z(e.modelValue), i = z(new Ln([], {})), r = z([]), f = S(() => o.value.lazy && !!o.value.lazyLoad), p = /* @__PURE__ */ new Map();
    let y;
    const v = () => Ge(this, null, function* () {
      p.clear(), r.value = [], s.value = 0, l.value = !1, y = null;
      let { options: h } = e;
      o.value.convertConfig && (h = ld(h, o.value.convertConfig)), i.value = new Ln(h, {
        value: o.value.valueKey,
        text: o.value.textKey,
        children: o.value.childrenKey
      }), f.value && !i.value.nodes.length && (yield w({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), r.value = [{ nodes: i.value.nodes, selectedNode: null }], b();
    }), b = () => Ge(this, null, function* () {
      const h = a.value;
      if (h === void 0 || !i.value.nodes.length)
        return;
      if (h.length === 0) {
        s.value = 0, r.value = [{ nodes: i.value.nodes, selectedNode: null }];
        return;
      }
      let $ = h;
      if (f.value && Array.isArray(h) && h.length) {
        $ = [];
        let P = i.value.nodes.find((A) => A.value === h[0]);
        if (P) {
          $ = [P.value], l.value = !0;
          const A = yield h.slice(1).reduce((I, B) => Ge(this, null, function* () {
            var E;
            const M = yield I;
            yield w(M);
            const k = (E = M == null ? void 0 : M.children) == null ? void 0 : E.find((T) => T.value === B);
            return k && $.push(B), Promise.resolve(k);
          }), Promise.resolve(P));
          yield w(A), l.value = !1;
        }
      }
      $.length && h === e.modelValue && i.value.getPathNodesByValue($).map((A, I) => {
        s.value = I, u.handleNode(A, !0);
      });
    }), w = (h) => Ge(this, null, function* () {
      if (!h)
        return;
      if (!o.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (i.value.isLeaf(h, f.value) || i.value.hasChildren(h, f.value))
        return;
      h.loading = !0;
      const $ = h.root ? null : h;
      let P = p.get(h);
      P || (P = new Promise((I) => {
        var B, M;
        (M = (B = o.value).lazyLoad) == null || M.call(B, h, I);
      }), p.set(h, P));
      const A = yield P;
      Array.isArray(A) && A.length > 0 ? i.value.updateChildren(A, $) : h.leaf = !0, h.loading = !1, p.delete(h);
    }), C = (h) => {
      const $ = h.map((P) => P.value);
      a.value = $, t("change", $, h), t("update:modelValue", $, h);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, $) {
        return Ge(this, null, function* () {
          const { disabled: P, loading: A } = h;
          if (!(!$ && P || !r.value[s.value])) {
            if (i.value.isLeaf(h, f.value)) {
              if (h.leaf = !0, r.value[s.value].selectedNode = h, r.value = r.value.slice(0, h.level + 1), !$) {
                const I = r.value.map((B) => B.selectedNode);
                C(I), t("pathChange", I);
              }
              return;
            }
            if (i.value.hasChildren(h, f.value)) {
              const I = h.level + 1;
              if (r.value[s.value].selectedNode = h, r.value = r.value.slice(0, I), r.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), s.value = I, !$) {
                const B = r.value.map((M) => M.selectedNode);
                t("pathChange", B);
              }
              return;
            }
            y = h, !A && (yield w(h), y === h && (r.value[s.value].selectedNode = h, u.handleNode(h, $)));
          }
        });
      },
      handleTabClick(h) {
        y = null, s.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, $) {
        var P;
        return ((P = h == null ? void 0 : h.selectedNode) == null ? void 0 : P.value) === $.value;
      }
    };
    return Q(
      [o, () => e.options],
      () => {
        v();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (h) => {
        h !== a.value && (a.value = h, b());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(a.value) && a.value.length > 0 && b();
      }
    ), G({ panes: r, initLoading: l, tabsCursor: s }, u);
  }
}), id = {
  role: "menu",
  class: "nut-cascader-pane"
}, rd = ["aria-checked", "aria-disabled", "onClick"], ud = { class: "nut-cascader-item__title" }, cd = /* @__PURE__ */ g("view", { class: "nut-cascader-pane" }, null, -1);
function dd(e, t, n, o, s, l) {
  const a = X("Loading"), i = X("Checklist"), r = X("nut-tab-pane"), f = X("nut-tabs");
  return c(), J(f, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (p) => e.tabsCursor = p),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: ne(() => [
      !e.initLoading && e.panes.length ? (c(!0), d(Z, { key: 0 }, re(e.panes, (p, y) => (c(), J(r, {
        key: y,
        title: e.formatTabTitle(p)
      }, {
        default: ne(() => [
          g("view", id, [
            (c(!0), d(Z, null, re(p.nodes, (v) => (c(), d("view", {
              key: v.value,
              class: D(["nut-cascader-item", { active: e.isSelected(p, v), disabled: v.disabled }]),
              "aria-checked": e.isSelected(p, v),
              "aria-disabled": v.disabled || void 0,
              role: "menuitemradio",
              onClick: (b) => e.handleNode(v, !1)
            }, [
              g("view", ud, L(v.text), 1),
              v.loading ? (c(), J(a, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), J(i, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, rd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (c(), J(r, {
        key: 1,
        title: "Loading..."
      }, {
        default: ne(() => [
          cd
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const fd = /* @__PURE__ */ le(ad, [["render", dd]]), { create: pd } = te("cascader"), md = pd({
  components: {
    NutCascaderItem: fd,
    NutPopup: Ae
  },
  props: pe(G({}, Nt), {
    modelValue: Array,
    visible: Boolean,
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    convertConfig: Object
  }),
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(e, { emit: t }) {
    const n = z(e.modelValue), o = S({
      get() {
        return e.visible;
      },
      set(a) {
        t("update:visible", a);
      }
    }), s = (a, i) => {
      n.value = a, o.value = !1, t("change", a, i), t("update:modelValue", a);
    }, l = (a) => {
      t("pathChange", a);
    };
    return Q(
      () => e.modelValue,
      (a) => {
        a !== n.value && (n.value = a);
      }
    ), {
      onChange: s,
      onPathChange: l,
      innerValue: n,
      innerVisible: o
    };
  }
}), hd = ["innerHTML"];
function vd(e, t, n, o, s, l) {
  const a = X("nut-cascader-item"), i = X("nut-popup");
  return e.poppable ? (c(), J(i, {
    key: 0,
    visible: e.innerVisible,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.innerVisible = r),
    position: "bottom",
    "pop-class": "nut-cascader__popup",
    round: "",
    closeable: e.closeable,
    "destroy-on-close": !1,
    "close-icon-position": e.closeIconPosition,
    "z-index": e.zIndex
  }, {
    default: ne(() => [
      e.title ? (c(), d("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, hd)) : N("", !0),
      ee(a, {
        "model-value": e.innerValue,
        options: e.options,
        lazy: e.lazy,
        "lazy-load": e.lazyLoad,
        "value-key": e.valueKey,
        "text-key": e.textKey,
        "children-key": e.childrenKey,
        "convert-config": e.convertConfig,
        visible: e.innerVisible,
        onChange: e.onChange,
        onPathChange: e.onPathChange
      }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
    ]),
    _: 1
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (c(), J(a, {
    key: 1,
    "model-value": e.innerValue,
    options: e.options,
    lazy: e.lazy,
    "lazy-load": e.lazyLoad,
    "value-key": e.valueKey,
    "text-key": e.textKey,
    "children-key": e.childrenKey,
    "convert-config": e.convertConfig,
    visible: e.innerVisible,
    onChange: e.onChange,
    onPathChange: e.onPathChange
  }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
}
const gd = /* @__PURE__ */ le(md, [["render", vd]]), de = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(e, t, n) {
    const s = (/* @__PURE__ */ new Date(e + "/" + t + "/" + n)).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][s];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(e, t) {
    let o = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return o == 0 && (o = 7), o;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(e) {
    return e = Number(e), (e > 9 ? "" : "0") + e;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(e, t) {
    t = t || "-";
    const n = e.getFullYear(), o = this.getNumTwoBit(e.getMonth() + 1), s = this.getNumTwoBit(e.getDate());
    return [n, o, s].join(t);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(e) {
    e = e || 0;
    let t = /* @__PURE__ */ new Date();
    const n = e * (1e3 * 60 * 60 * 24);
    return t = new Date(t.getTime() + n), this.date2Str(t);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(e, t) {
    const n = new Date(e.replace("-", "/").replace("-", "/")), o = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= o);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), o = new Date(t).getTime();
    return n == o;
  },
  getMonthWeek: function(e, t, n, o = 0) {
    const s = new Date(Number(e), parseInt(t) - 1, Number(n));
    let l = s.getDay();
    const a = s.getDate();
    let i = 6 - l;
    return o !== 0 && (l = l == 0 ? 7 : l, i = 7 - l), Math.ceil((a + i) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, o = 0) {
    const s = new Date(Number(e), parseInt(t) - 1, Number(n)), l = new Date(Number(e), 0, 1), a = Math.round((s.valueOf() - l.valueOf()) / 864e5);
    return Math.ceil((a + (l.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, o = 0) {
    const s = new Date(Number(e), parseInt(t) - 1, Number(n)), l = s.getTime();
    let a = s.getDay();
    if (o === 0) {
      const r = l - a * 864e5, f = l + (6 - a) * 864e5, p = this.date2Str(new Date(r)), y = this.date2Str(new Date(f));
      return [p, y];
    } else {
      a = a == 0 ? 7 : a;
      const i = 24 * 60 * 60 * 1e3, r = l - (a - 1) * i, f = l + (7 - a) * i, p = this.date2Str(new Date(r)), y = this.date2Str(new Date(f));
      return [p, y];
    }
  },
  formatResultDate: function(e) {
    const t = [...e.split("-")];
    return t[2] = de.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = de.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: yd } = te("calendar-item"), bd = "NutCalendarItem", $d = yd({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array],
      default: ""
    },
    startDate: {
      type: String,
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const s = Se(bd), l = s("weekdays").map((O, q) => ({
      day: O,
      weekend: q === 0 || q === 6
    })), a = z([...l.slice(e.firstDayOfWeek, 7), ...l.slice(0, e.firstDayOfWeek)]), i = z(null), r = z(null), f = z(null), p = z(null), y = z(0), v = S(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), b = S(() => n.btn), w = S(() => n["top-info"]), C = S(() => n["bottom-info"]), u = me({
      yearMonthTitle: "",
      defaultRange: [],
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "nut-calendar__day",
      startData: "",
      endData: "",
      isRange: e.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      monthsNum: 0
    }), m = (O) => O.split("-"), h = (O) => de.isEqual(u.currDate[0], O), $ = (O) => de.isEqual(u.currDate[1], O), P = (O) => {
      var q, ae;
      return ((q = u.currDate) == null ? void 0 : q.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((ie) => de.isEqual(ie, O)) : !1;
    }, A = (O, q) => q.curData[0] + "-" + q.curData[1] + "-" + de.getNumTwoBit(+O.day), I = (O, q, ae) => {
      const ie = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && ie.push("weekend");
      const he = A(O, q), { type: Pe } = e;
      return O.type == "curr" ? de.isEqual(u.currDate, he) || (Pe == "range" || Pe == "week") && (h(he) || $(he)) || Pe == "multiple" && P(he) ? ie.push(`${u.dayPrefix}--active`) : u.propStartDate && de.compareDate(he, u.propStartDate) || u.propEndDate && de.compareDate(u.propEndDate, he) || e.disabledDate && e.disabledDate(he) ? ie.push(`${u.dayPrefix}--disabled`) : (Pe == "range" || Pe == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && de.compareDate(u.currDate[0], he) && de.compareDate(he, u.currDate[1]) && ie.push(`${u.dayPrefix}--choose`) : ie.push(`${u.dayPrefix}--disabled`), ie;
    }, B = () => {
      const { type: O } = e;
      if (O == "range" && u.chooseData.length == 2 || O != "range") {
        let q = u.chooseData.slice(0);
        if (O == "week") {
          if (u.chooseData.length !== 2)
            return;
          q = {
            weekDate: [k(u.chooseData[0]), k(u.chooseData[1])]
          };
        }
        t("choose", q), e.poppable && t("update");
      }
    }, M = (O, q, ae = !1) => {
      var ie, he;
      if (!I(O, q).includes(`${u.dayPrefix}--disabled`)) {
        const { type: Pe } = e;
        let [Fe, Ke] = q.curData, ke = [...q.curData];
        if (ke[2] = de.getNumTwoBit(Number(O.day)), ke[3] = `${ke[0]}-${ke[1]}-${ke[2]}`, ke[4] = de.getWhatDay(+ke[0], +ke[1], +ke[2]), Pe == "multiple")
          if (((ie = u.currDate) == null ? void 0 : ie.length) > 0) {
            let Ne;
            (he = u.currDate) == null || he.forEach((We, He) => {
              We == ke[3] && (Ne = He);
            }), ae ? u.chooseData.push([...ke]) : Ne !== void 0 ? (u.currDate.splice(Ne, 1), u.chooseData.splice(Ne, 1)) : (u.currDate.push(ke[3]), u.chooseData.push([...ke]));
          } else
            u.currDate = [ke[3]], u.chooseData = [[...ke]];
        else if (Pe == "range") {
          let Ne = Object.values(u.currDate).length;
          Ne == 2 || Ne == 0 ? u.currDate = [ke[3]] : de.compareDate(u.currDate[0], ke[3]) ? Array.isArray(u.currDate) && u.currDate.push(ke[3]) : Array.isArray(u.currDate) && u.currDate.unshift(ke[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...ke]] : de.compareDate(u.chooseData[0][3], ke[3]) ? u.chooseData = [...u.chooseData, [...ke]] : u.chooseData = [[...ke], ...u.chooseData];
        } else if (Pe == "week") {
          let Ne = de.getWeekDate(Fe, Ke, O.day, e.firstDayOfWeek);
          u.propStartDate && de.compareDate(Ne[0], u.propStartDate) && Ne.splice(0, 1, u.propStartDate), u.propEndDate && de.compareDate(u.propEndDate, Ne[1]) && Ne.splice(1, 1, u.propEndDate), u.currDate = Ne, u.chooseData = [de.formatResultDate(Ne[0]), de.formatResultDate(Ne[1])];
        } else
          u.currDate = ke[3], u.chooseData = [...ke];
        if (!ae) {
          let Ne = u.chooseData;
          Pe == "week" && (Ne = {
            weekDate: [
              k(u.chooseData[0]),
              k(u.chooseData[1])
            ]
          }), t("select", Ne), (e.isAutoBackFill || !e.poppable) && B();
        }
      }
    }, k = (O) => {
      let [q, ae, ie] = O;
      return {
        date: O,
        monthWeekNum: de.getMonthWeek(q, ae, ie, e.firstDayOfWeek),
        yearWeekNum: de.getYearWeek(q, ae, ie, e.firstDayOfWeek)
      };
    }, E = (O) => {
      const q = O == "prev" ? u.monthsData[0] : u.monthsData[u.monthsData.length - 1];
      let ae = parseInt(q.curData[0]), ie = parseInt(q.curData[1].toString().replace(/^0/, ""));
      switch (O) {
        case "prev":
          ie == 1 && (ae -= 1), ie = ie == 1 ? 12 : --ie;
          break;
        case "next":
          ie == 12 && (ae += 1), ie = ie == 12 ? 1 : ++ie;
          break;
      }
      return [ae + "", de.getNumTwoBit(ie), de.getMonthDays(String(ae), String(ie)) + ""];
    }, T = (O, q, ae) => {
      let { year: ie, month: he } = ae;
      return q == "prev" && O >= 7 && (O -= 7), Array.from(Array(O), (Pe, Fe) => ({
        day: String(Fe + 1),
        type: q,
        year: ie,
        month: he
      }));
    }, j = (O, q, ae, ie) => {
      O = O - e.firstDayOfWeek;
      let { year: he, month: Pe } = ae;
      return q == "prev" && O >= 7 && (O -= 7), Array.from(Array(ie), (Ke, ke) => ({
        day: String(ke + 1),
        type: q,
        year: he,
        month: Pe
      })).slice(ie - O);
    }, K = (O, q) => {
      const ae = de.getMonthPreDay(+O[0], +O[1]);
      let ie = Number(O[1]) - 1, he = Number(O[0]);
      ie <= 0 && (ie = 12, he += 1);
      const Pe = de.getMonthDays(String(O[0]), String(O[1])), Fe = de.getMonthDays(he + "", ie + ""), Ke = {
        year: O[0],
        month: O[1]
      }, ke = {
        curData: O,
        title: s("monthTitle", Ke.year, Ke.month),
        monthData: [
          ...j(
            ae,
            "prev",
            { month: String(ie), year: String(he) },
            Fe
          ),
          ...T(Pe, "curr", Ke)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      ke.cssHeight = 39 + (ke.monthData.length > 35 ? 384 : 320);
      let Ne = 0;
      u.monthsData.length > 0 && (Ne = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), ke.cssScrollHeight = Ne, q == "next" ? (!u.endData || !de.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${de.getMonthDays(u.endData[0], u.endData[1])}`,
        `${O[0]}-${O[1]}-${O[2]}`
      )) && u.monthsData.push(ke) : !u.startData || !de.compareDate(
        `${O[0]}-${O[1]}-${O[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift(ke) : u.unLoadPrev = !0;
    }, oe = () => {
      let O = e.startDate ? e.startDate : de.getDay(0), q = e.endDate ? e.endDate : de.getDay(365);
      u.propStartDate = O, u.propEndDate = q, u.startData = m(O), u.endData = m(q), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(u.startData[0]),
        month: Number(u.startData[1])
      }, ie = {
        year: Number(u.endData[0]),
        month: Number(u.endData[1])
      };
      let he = ie.month - ae.month;
      ie.year - ae.year > 0 && (he = he + 12 * (ie.year - ae.year)), he <= 0 && (he = 1), K(u.startData, "next");
      let Pe = 1;
      do
        K(E("next"), "next");
      while (Pe++ < he);
      if (u.monthsNum = he, e.type == "range" && Array.isArray(u.currDate))
        u.currDate.length > 0 && (O && de.compareDate(u.currDate[0], O) && u.currDate.splice(0, 1, O), q && de.compareDate(q, u.currDate[1]) && u.currDate.splice(1, 1, q), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], He = {};
          u.currDate.forEach((je) => {
            O && !de.compareDate(je, O) && q && !de.compareDate(q, je) && (Object.hasOwnProperty.call(He, je) || (We.push(je), He[je] = je));
          }), u.currDate = [...We], u.defaultData = [...m(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, He, je] = m(u.currDate[0]), Ft = de.getWeekDate(We, He, je, e.firstDayOfWeek);
          u.currDate = Ft, O && de.compareDate(u.currDate[0], O) && u.currDate.splice(0, 1, O), q && de.compareDate(q, u.currDate[1]) && u.currDate.splice(1, 1, q), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])];
        }
      } else
        u.currDate && (O && de.compareDate(u.currDate, O) ? u.currDate = O : q && !de.compareDate(u.currDate, q) && (u.currDate = q), u.defaultData = [...m(u.currDate)]);
      let Fe = 0, Ke = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, He) => {
        We.title == s("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = He), (e.type == "range" || e.type == "week") && We.title == s("monthTitle", u.defaultData[3], u.defaultData[4]) && (Ke = He);
      }), R(he, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (M({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), M({ day: u.defaultData[5], type: "curr" }, u.monthsData[Ke], !0)) : e.type == "week" ? M({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let He = m(We), je = u.currentIndex;
        u.monthsData.forEach((Ft, fl) => {
          Ft.title == s("monthTitle", He[0], He[1]) && (je = fl);
        }), M({ day: He[2], type: "curr" }, u.monthsData[je], !0);
      }) : M({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let ke = u.monthsData[u.monthsData.length - 1], Ne = ke.cssHeight + ke.cssScrollHeight;
      Oe(() => {
        i != null && i.value && (r != null && r.value) && (p != null && p.value) && (y.value = i.value.clientHeight, r.value.style.height = `${Ne}px`, i.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(Ne / (he + 1));
    };
    o({
      scrollToDate: (O) => {
        de.compareDate(O, u.propStartDate) ? O = u.propStartDate : de.compareDate(O, u.propEndDate) || (O = u.propEndDate);
        let q = m(O);
        u.monthsData.forEach((ae, ie) => {
          if (ae.title == s("monthTitle", q[0], q[1]) && i.value) {
            let he = u.monthsData[ie].cssScrollHeight - i.value.scrollTop;
            if (e.toDateAnimation) {
              let Pe = 0, Fe = setInterval(() => {
                if (Pe++, i.value) {
                  let Ke = he / 10;
                  i.value.scrollTop = i.value.scrollTop + Ke;
                }
                Pe >= 10 && (clearInterval(Fe), i.value && (i.value.scrollTop = u.monthsData[ie].cssScrollHeight));
              }, 40);
            } else
              i.value.scrollTop = u.monthsData[ie].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        i != null && i.value && (i.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }
    });
    const R = (O, q) => {
      O >= 3 ? q > 0 && q < O ? u.defaultRange = [q - 1, q + 3] : q == 0 ? u.defaultRange = [q, q + 4] : q == O && (u.defaultRange = [q - 2, q + 2]) : u.defaultRange = [0, O + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, x = (O, q) => (e.type == "range" || e.type == "week") && O.type == "curr" && I(O, q).includes("nut-calendar__day--active"), U = (O, q) => x(O, q) && h(A(O, q)), se = (O, q) => u.currDate.length >= 2 && $(A(O, q)) ? x(O, q) : !1, ue = () => {
      if (u.currDate.length >= 2)
        return de.isEqual(u.currDate[0], u.currDate[1]);
    }, fe = (O) => {
      const q = `${O.year}-${O.month}-${Number(O.day) < 10 ? "0" + O.day : O.day}`;
      return de.isEqual(q, de.date2Str(/* @__PURE__ */ new Date()));
    }, Ce = (O) => {
      if (u.monthsData.length <= 1)
        return;
      const q = O.target.scrollTop;
      let ae = Math.floor(q / u.avgHeight);
      if (ae == 0)
        q >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < u.monthsNum - 1)
        q >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1), q < u.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const ie = Math.round(q + y.value);
        ie < u.monthsData[ae].cssScrollHeight + u.monthsData[ae].cssHeight && q > u.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= u.monthsNum && ie >= u.monthsData[ae + 1].cssScrollHeight + u.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && q < u.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      u.currentIndex !== ae && (u.currentIndex = ae, R(u.monthsNum, ae)), u.yearMonthTitle = u.monthsData[ae].title;
    }, Le = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), oe();
    };
    return $e(() => {
      oe();
    }), Q(
      () => e.defaultValue,
      (O) => {
        O && e.poppable && Le();
      }
    ), pe(G(G({
      weeks: a,
      compConthsData: v,
      showTopBtn: b,
      topInfo: w,
      bottomInfo: C,
      rangeTip: ue,
      mothsViewScroll: Ce,
      getClass: I,
      isStartTip: U,
      isEndTip: se,
      chooseDay: M,
      isCurrDay: fe,
      confirm: B,
      months: i
    }, we(u)), we(e)), {
      translate: s,
      monthsPanel: r,
      weeksPanel: f,
      viewArea: p
    });
  }
}), wd = { class: "nut-calendar__header" }, kd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Cd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Sd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Td = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, _d = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, Nd = { class: "nut-calendar__month-title" }, Dd = { class: "nut-calendar__days" }, Id = ["onClick"], Bd = { class: "nut-calendar__day-value" }, Md = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, Ld = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, Pd = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, Ad = {
  key: 4,
  class: "nut-calendar__day-tip"
}, Ed = {
  key: 0,
  class: "nut-calendar__footer"
};
function zd(e, t, n, o, s, l) {
  return c(), d("view", {
    class: D(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    g("view", wd, [
      e.showTitle ? (c(), d("view", kd, L(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (c(), d("view", Cd, [
        _(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (c(), d("view", Sd, L(e.yearMonthTitle), 1)) : N("", !0),
      g("view", Td, [
        (c(!0), d(Z, null, re(e.weeks, (a, i) => (c(), d("view", {
          key: i,
          class: D(["nut-calendar__weekday", { weekend: a.weekend }])
        }, L(a.day), 3))), 128))
      ], 512)
    ]),
    g("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...a) => e.mothsViewScroll && e.mothsViewScroll(...a))
    }, [
      g("view", _d, [
        g("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: V({ transform: `translateY(${e.translateY}px)` })
        }, [
          (c(!0), d(Z, null, re(e.compConthsData, (a, i) => (c(), d("view", {
            key: i,
            class: "nut-calendar__month"
          }, [
            g("view", Nd, L(a.title), 1),
            g("view", Dd, [
              g("view", {
                class: D(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (c(!0), d(Z, null, re(a.monthData, (r, f) => (c(), d("view", {
                  key: f,
                  class: D(["nut-calendar__day", e.getClass(r, a, f)]),
                  onClick: (p) => e.chooseDay(r, a)
                }, [
                  g("view", Bd, [
                    _(e.$slots, "day", {
                      date: r.type == "curr" ? r : ""
                    }, () => [
                      ge(L(r.type == "curr" ? r.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (c(), d("view", Md, [
                    _(e.$slots, "top-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (c(), d("view", Ld, [
                    _(e.$slots, "bottom-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(r) ? (c(), d("view", Pd, L(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(r, a) ? (c(), d("view", {
                    key: 3,
                    class: D(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, L(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(r, a) ? (c(), d("view", Ad, L(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, Id))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (c(), d("view", Ed, [
      _(e.$slots, "footer-info", { date: e.chooseData }, () => [
        g("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...a) => e.confirm && e.confirm(...a))
        }, L(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const Vd = /* @__PURE__ */ le($d, [["render", zd]]), { create: Hd } = te("calendar"), Od = Hd({
  components: {
    NutCalendarItem: Vd,
    NutPopup: Ae
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !1
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const s = S({
      get() {
        return e.visible;
      },
      set($) {
        t("update:visible", $);
      }
    }), l = S(() => n.btn), a = S(() => n["top-info"]), i = S(() => n.day), r = S(() => n["bottom-info"]), f = S(() => n["footer-info"]), p = z(null);
    o({
      scrollToDate: ($) => {
        var P;
        (P = p.value) == null || P.scrollToDate($);
      },
      initPosition: () => {
        var $;
        ($ = p.value) == null || $.initPosition();
      }
    });
    const b = () => {
      t("update:visible", !1);
    }, w = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: s,
      closePopup: () => {
        w();
      },
      opened: () => {
        var $;
        ($ = p.value) == null || $.initPosition();
      },
      update: b,
      close: w,
      select: ($) => {
        t("select", $);
      },
      choose: ($) => {
        w(), t("choose", $);
      },
      calendarRef: p,
      showTopBtn: l,
      topInfo: a,
      dayInfo: i,
      bottomInfo: r,
      footerInfo: f
    };
  }
});
function Rd(e, t, n, o, s, l) {
  const a = X("nut-calendar-item"), i = X("nut-popup");
  return e.poppable ? (c(), J(i, dt({
    key: 0,
    visible: e.visible,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.visible = r),
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onOpened: e.opened
  }), {
    default: ne(() => [
      ee(a, {
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        "confirm-text": e.confirmText,
        "start-text": e.startText,
        "end-text": e.endText,
        "show-today": e.showToday,
        "show-title": e.showTitle,
        "show-sub-title": e.showSubTitle,
        "to-date-animation": e.toDateAnimation,
        "first-day-of-week": e.firstDayOfWeek,
        "disabled-date": e.disabledDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose,
        onSelect: e.select
      }, Ct({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: ne(() => [
            _(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: ne((r) => [
            _(e.$slots, "day", {
              date: r.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: ne((r) => [
            _(e.$slots, "top-info", {
              date: r.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: ne((r) => [
            _(e.$slots, "bottom-info", {
              date: r.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: ne((r) => [
            _(e.$slots, "footer-info", {
              date: r.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (c(), J(a, {
    key: 1,
    ref: "calendarRef",
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "confirm-text": e.confirmText,
    "start-text": e.startText,
    "end-text": e.endText,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    "show-title": e.showTitle,
    "show-sub-title": e.showSubTitle,
    "to-date-animation": e.toDateAnimation,
    "show-today": e.showToday,
    "first-day-of-week": e.firstDayOfWeek,
    "disabled-date": e.disabledDate,
    onUpdate: e.update,
    onClose: e.close,
    onChoose: e.choose,
    onSelect: e.select
  }, Ct({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: ne(() => [
        _(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: ne((r) => [
        _(e.$slots, "day", {
          date: r.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: ne((r) => [
        _(e.$slots, "top-info", {
          date: r.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: ne((r) => [
        _(e.$slots, "bottom-info", {
          date: r.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const Fd = /* @__PURE__ */ le(Od, [["render", Rd]]), Wd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
    })
  ]
), Yd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
    })
  ]
), Kd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), jd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), tt = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, qt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Pn = (e) => Array.isArray(e) ? e.map((t) => tt(t)) : e ? [tt(e)] : [], Ud = (e) => Array.isArray(e) ? e.map((t) => qt(t)) : e ? [qt(e)] : [], Xd = (e, t, n) => {
  let o = t - 1, s = e;
  o <= 0 && (o = 12, s -= 1);
  let l = de.getMonthPreDay(e, t);
  l -= n, l >= 7 && (l -= 7);
  const a = de.getMonthDays(`${s}`, `${o}`);
  return Array.from(Array(a), (r, f) => ({
    type: "prev",
    year: s,
    month: o,
    date: f + 1
  })).slice(a - l);
}, qd = (e, t) => {
  const n = de.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (o, s) => ({
    type: "current",
    year: e,
    month: t,
    date: s + 1
  }));
}, Gd = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), o = (n.getDay() + 7 - t) % 7;
  return [
    tt(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * o)),
    tt(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - o)))
  ];
}, Zd = (e, t) => {
  const n = e.year, o = e.month, s = [...Xd(n, o, t), ...qd(n, o)], l = s.length, a = e.month === 12 ? e.year + 1 : e.year, i = e.month === 12 ? 1 : e.month + 1;
  for (let r = 1; r <= 42 - l; r++)
    s.push({
      type: "next",
      year: a,
      month: i,
      date: r
    });
  return s;
}, et = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, at = (e, t) => et(e, t) === 0, Jd = { class: "nut-calendarcard" }, Qd = { class: "nut-calendarcard-header" }, xd = { class: "nut-calendarcard-header-left" }, ef = { class: "nut-calendarcard-header-title" }, tf = { class: "nut-calendarcard-header-right" }, nf = { class: "nut-calendarcard-content" }, of = { class: "nut-calendarcard-days" }, lf = { class: "nut-calendarcard-days" }, sf = ["onClick"], af = { class: "nut-calendarcard-day-top" }, rf = { class: "nut-calendarcard-day-inner" }, uf = { class: "nut-calendarcard-day-bottom" }, An = "NutCalendarCard", Eo = /* @__PURE__ */ ve({
  name: An,
  __name: "calendar-card",
  props: {
    type: { default: "single" },
    firstDayOfWeek: { default: 0 },
    modelValue: { default: null },
    startDate: { default: null },
    endDate: { default: null },
    disableDay: { type: Function, default: () => !1 }
  },
  emits: ["update:modelValue", "change", "dayClick", "pageChange"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, l = Se(An), i = z((() => {
      let I = new Date(Date.now());
      const B = o.modelValue;
      return Array.isArray(B) ? B.length && (I = B[0]) : B && (I = B), {
        year: I.getFullYear(),
        month: I.getMonth() + 1
      };
    })()), r = z([]), f = S(() => {
      const I = l("weekdays").map((B, M) => ({
        name: B,
        key: M
      }));
      return [...I.slice(o.firstDayOfWeek, 7), ...I.slice(0, o.firstDayOfWeek)];
    }), p = z(o.modelValue ? Pn(o.modelValue) : []);
    ct(() => {
      const I = o.modelValue ? Pn(o.modelValue) : [];
      p.value = I;
    });
    const y = (I) => {
      if (p.value = I, o.type === "single") {
        const B = qt(I[0]);
        s("update:modelValue", B), s("change", B);
      } else if (o.type === "multiple" || o.type === "range" || o.type === "week") {
        const B = Ud(I);
        s("update:modelValue", B), s("change", B);
      }
    };
    ct(() => {
      const I = Zd(i.value, o.firstDayOfWeek);
      r.value = I, s("pageChange", i.value);
    });
    const v = (I) => !!(o.disableDay && o.disableDay(I) || o.startDate && Number(et(I, tt(o.startDate))) < 0 || o.endDate && Number(et(I, tt(o.endDate))) > 0), b = (I) => {
      if (o.type === "single" || o.type === "multiple") {
        for (const B in p.value)
          if (at(I, p.value[B]))
            return !0;
      } else if (o.type === "range" && p.value.length === 1 && at(p.value[0], I))
        return !0;
      return !1;
    }, w = (I) => (o.type === "range" || o.type === "week") && p.value.length === 2 && at(I, p.value[0]), C = (I) => (o.type === "range" || o.type === "week") && p.value.length === 2 && at(I, p.value[1]), u = (I) => {
      if ((o.type === "range" || o.type === "week") && p.value.length === 2) {
        const B = et(p.value[0], I), M = et(I, p.value[1]);
        if (B && B < 0 && M && M < 0)
          return !0;
      }
      return !1;
    }, m = (I) => {
      const B = new Date(I.year, I.month - 1, I.date).getDay();
      return B === 0 || B === 6;
    }, h = (I) => {
      if (v(I))
        return ["disabled"];
      const B = [];
      return I.type === "current" && (b(I) && B.push("active"), w(I) && B.push("start"), C(I) && B.push("end"), u(I) && B.push("mid"), m(I) && B.push("weekend")), B;
    }, $ = (I, B) => {
      if (o.startDate) {
        const M = et(
          {
            year: I,
            month: B,
            date: 31
          },
          tt(o.startDate)
        );
        if (M && M < 0)
          return;
      }
      if (o.endDate) {
        const M = et(
          {
            year: I,
            month: B,
            date: 1
          },
          tt(o.endDate)
        );
        if (M && M > 0)
          return;
      }
      i.value = {
        year: I,
        month: B
      };
    }, P = (I = 1) => {
      const B = i.value.year * 12 + i.value.month;
      let M = (B + I) % 12;
      M === 0 && (M = 12);
      const k = Math.floor((B + I - M) / 12);
      $(k, M);
    }, A = (I) => {
      if (!(I.type === "prev" || I.type === "next" || v(I)))
        switch (s("dayClick", I), o.type) {
          case "single": {
            p.value[0] && at(p.value[0], I) ? y([]) : y([I]);
            break;
          }
          case "multiple": {
            const B = p.value.find((M) => at(M, I));
            y(B ? p.value.filter((M) => M !== B) : [...p.value, I]);
            break;
          }
          case "range": {
            const B = p.value.length;
            if (B === 0 || B === 2)
              y([I]);
            else if (B === 1) {
              const M = et(p.value[0], I);
              M == null ? y([]) : M < 0 ? y([p.value[0], I]) : y([I, p.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (p.value.length === 2 || p.value.length === 0) {
              const [B, M] = Gd(I, o.firstDayOfWeek);
              y([B, M]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: P,
      jumpTo: $
    }), (I, B) => Ie((c(), d("div", Jd, [
      g("div", Qd, [
        g("div", xd, [
          g("div", {
            class: "double-left",
            onClick: B[0] || (B[0] = (M) => P(-12))
          }, [
            ee(ce(Kd))
          ]),
          g("div", {
            class: "left",
            onClick: B[1] || (B[1] = (M) => P(-1))
          }, [
            ee(ce(Wd))
          ])
        ]),
        g("div", ef, L(ce(l)("monthTitle", i.value.year, i.value.month)), 1),
        g("div", tf, [
          g("div", {
            class: "right",
            onClick: B[2] || (B[2] = (M) => P(1))
          }, [
            ee(ce(Yd))
          ]),
          g("div", {
            class: "double-right",
            onClick: B[3] || (B[3] = (M) => P(12))
          }, [
            ee(ce(jd))
          ])
        ])
      ]),
      g("div", nf, [
        g("div", of, [
          (c(!0), d(Z, null, re(f.value, (M) => (c(), d("div", {
            key: M.name,
            class: D(["nut-calendarcard-day header", M.key === 0 || M.key === 6 ? "weekend" : ""])
          }, L(M.name), 3))), 128))
        ]),
        g("div", lf, [
          (c(!0), d(Z, null, re(r.value, (M) => (c(), d("div", {
            key: `${M.year}-${M.month}-${M.date}`,
            class: D(["nut-calendarcard-day", [M.type, ...h(M)]]),
            onClick: (k) => A(M)
          }, [
            g("div", af, [
              _(I.$slots, "top", { day: M })
            ]),
            g("div", rf, [
              _(I.$slots, "default", { day: M }, () => [
                ge(L(M.date), 1)
              ])
            ]),
            g("div", uf, [
              _(I.$slots, "bottom", { day: M })
            ])
          ], 10, sf))), 128))
        ])
      ])
    ], 512)), [
      [Me, r.value.length > 0]
    ]);
  }
});
be(Eo);
const zo = Symbol("nut-checkbox"), { create: cf, componentName: xe } = te("checkbox"), df = cf({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
      // button
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = qe(Je(e, "disabled")), s = Ve(zo, null), l = me({
      partialSelect: e.indeterminate
    }), a = S(() => !!s), i = S(() => a.value ? s.value.value.includes(e.label) : e.modelValue), r = S(() => a.value && s.disabled.value ? s.disabled.value : o.value), f = S(() => !!e.modelValue), p = S(() => r.value ? "nut-checkbox__icon--disable" : l.partialSelect ? "nut-checkbox__icon--indeterminate" : i.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let y = "";
    const v = (m, h) => {
      y = "click", t("update:modelValue", m), t("change", m, h);
    };
    Q(
      () => e.modelValue,
      (m) => {
        y == "click" ? y = "" : t("change", m);
      }
    );
    const b = () => {
      const { iconSize: m } = e, h = {
        CheckNormal: n.icon ? n.icon : Qn,
        Checked: n.checkedIcon ? n.checkedIcon : eo,
        CheckDisabled: n.indeterminate ? n.indeterminate : Zl
      }, $ = l.partialSelect ? h.CheckDisabled : i.value ? h.Checked : h.CheckNormal, P = Be(m);
      return Te($, {
        width: P,
        height: P,
        size: P,
        class: p.value
      });
    }, w = () => {
      var m;
      return Te(
        "view",
        {
          class: `${xe}__label ${r.value ? `${xe}__label--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, C = () => {
      var m;
      return Te(
        "view",
        {
          class: `${xe}__button ${i.value && `${xe}__button--active`} ${r.value ? `${xe}__button--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, u = () => {
      var m, h;
      if (!r.value) {
        if (f.value && l.partialSelect) {
          l.partialSelect = !1, v(f.value, (m = n.default) == null ? void 0 : m.call(n)[0].children);
          return;
        }
        if (v(!f.value, (h = n.default) == null ? void 0 : h.call(n)[0].children), a.value) {
          const $ = s.value.value, P = s.max.value, { label: A } = e, I = $.indexOf(A);
          I > -1 ? $.splice(I, 1) : I <= -1 && ($.length < P || !P) && $.push(A), s.updateValue($);
        }
      }
    };
    return $e(() => {
      a.value && s.link(ot());
    }), Qt(() => {
      a.value && s.unlink(ot());
    }), Q(
      () => e.indeterminate,
      (m) => {
        l.partialSelect = m;
      }
    ), () => Te(
      "view",
      {
        class: `${xe} ${xe}--${e.shape} ${e.textPosition === "left" ? `${xe}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? C() : [b(), w()]]
    );
  }
}), { create: ff, componentName: pf } = te("checkbox-group"), mf = ff({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { slots: t, emit: n, expose: o }) {
    const s = me({
      children: []
    }), l = (p) => {
      p.proxy && s.children.push(p.proxy);
    }, a = (p) => {
      p.proxy && (s.children = s.children.filter((y) => y !== p.proxy));
    }, i = (p) => {
      n("update:modelValue", p), n("change", p);
    }, r = (p) => {
      const y = [];
      p && s.children.forEach((v) => {
        v != null && v.disabled || y.push(v == null ? void 0 : v.label);
      }), n("update:modelValue", y);
    }, f = () => {
      const p = s.children.filter((y) => y != null && y.disabled ? !1 : !e.modelValue.includes(y.label)).map((y) => y.label);
      n("update:modelValue", p);
    };
    return Re(zo, {
      value: S(() => e.modelValue),
      disabled: S(() => e.disabled),
      max: S(() => e.max),
      updateValue: i,
      link: l,
      unlink: a
    }), Q(
      () => e.modelValue,
      (p) => {
        n("change", p);
      }
    ), o({ toggleAll: r, toggleReverse: f }), () => {
      var p;
      return Te(
        "view",
        {
          class: pf
        },
        (p = t.default) == null ? void 0 : p.call(t)
      );
    };
  }
}), hf = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, vf = (e, t) => {
  const n = me({
    formattedColumns: e.columns
  }), o = S(() => G(G({}, hf), e.fieldNames)), s = z([]), l = S(() => {
    const u = o.value;
    return p.value.map((m, h) => {
      const $ = m.findIndex((P) => P[u.value] === s.value[h]);
      return $ === -1 ? 0 : $;
    });
  }), a = z([]), i = (u) => {
    u && a.value.length < p.value.length && a.value.push(u);
  }, r = S(() => {
    const u = o.value;
    return p.value.map((m, h) => m.find(($) => $[u.value] === s.value[h]) || m[0]);
  }), f = S(() => {
    const u = n.formattedColumns[0], m = o.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (m.children in u)
        return "cascade";
    }
    return "single";
  }), p = S(() => {
    let u = [];
    switch (f.value) {
      case "multiple":
        u = n.formattedColumns;
        break;
      case "cascade":
        u = y(n.formattedColumns, s.value ? s.value : []);
        break;
      default:
        u = [n.formattedColumns];
        break;
    }
    return u;
  }), y = (u, m) => {
    const h = [], $ = o.value;
    let P = {
      text: "",
      value: "",
      [$.children]: u
    }, A = 0;
    for (; P && P[$.children]; ) {
      const I = P[$.children], B = m[A];
      let M = I.findIndex((k) => k[$.value] === B);
      M === -1 && (M = 0), P = P[$.children][M], A++, h.push(I);
    }
    return h;
  }, v = () => {
    t("cancel", {
      selectedValue: s.value,
      selectedOptions: r.value
    });
  }, b = (u, m) => {
    var $;
    const h = o.value;
    if (m && Object.keys(m).length) {
      if (s.value = s.value ? s.value : [], f.value === "cascade") {
        s.value[u] = ($ = m[h.value]) != null ? $ : "";
        let P = u, A = m;
        for (; A && A[h.children] && A[h.children][0]; )
          s.value[P + 1] = A[h.children][0][h.value], P++, A = A[h.children][0];
        A && A[h.children] && A[h.children].length === 0 && (s.value = s.value.slice(0, P + 1));
      } else
        s.value[u] = Object.prototype.hasOwnProperty.call(m, h.value) ? m[h.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: s.value,
        selectedOptions: r.value
      });
    }
  }, w = () => {
    const u = o.value;
    s.value && !s.value.length && p.value.forEach((m) => {
      s.value.push(m[0][u.value]);
    }), t("confirm", {
      selectedValue: s.value,
      selectedOptions: r.value
    });
  }, C = (u, m) => JSON.stringify(u) === JSON.stringify(m);
  return Q(
    () => e.modelValue,
    (u) => {
      C(u, s.value) || (s.value = u);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    s,
    (u) => {
      C(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), pe(G({}, we(n)), {
    columnsType: f,
    columnsList: p,
    columnFieldNames: o,
    cancel: v,
    changeHandler: b,
    confirm: w,
    defaultValues: s,
    defaultIndexes: l,
    pickerColumn: a,
    swipeRef: i,
    selectedOptions: r,
    isSameValue: C
  });
}, { create: gf } = te("picker-column"), yf = gf({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    },
    // 特殊环境判断
    taro: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = Qe(), o = me({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20
    }), s = z(null), l = z(!1), a = z(0), i = z(0), r = 200, f = 300, p = 15, y = S(() => ({
      transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${a.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), v = S(() => {
      const { optionHeight: k } = e;
      return {
        transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${o.scrollDistance}px, 0)`,
        top: `calc(50% - ${+k / 2}px)`,
        height: `${k}px`
      };
    }), b = (k) => `transform: rotate3d(1, 0, 0, ${-o.rotation * k}deg) translate3d(0px, 0px, 104px)`, w = S(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), C = (k) => {
      if (n.start(k), l.value && !e.taro) {
        const E = s.value, { transform: T } = window.getComputedStyle(E);
        if (e.threeDimensional) {
          const j = Math.floor(parseInt(a.value) / 360), K = +T.split(", ")[5], oe = +T.split(", ")[6] < 0 ? 180 : 0, W = j * 360 + Math.acos(K) / Math.PI * 180 + oe;
          o.scrollDistance = -Math.abs((W / o.rotation - 1) * +e.optionHeight);
        } else
          o.scrollDistance = +T.slice(7, T.length - 1).split(", ")[5];
      }
      ft(k, !0), o.touchParams.startY = n.deltaY.value, o.touchParams.startTime = Date.now(), o.transformY = o.scrollDistance;
    }, u = (k) => {
      n.move(k), n.isVertical() && (l.value = !0, ft(k, !0)), o.touchParams.lastY = n.deltaY.value;
      let E = o.touchParams.lastY - o.touchParams.startY;
      A(E);
    }, m = () => {
      o.touchParams.lastY = n.deltaY.value, o.touchParams.lastTime = Date.now();
      let k = o.touchParams.lastY - o.touchParams.startY, E = o.touchParams.lastTime - o.touchParams.startTime;
      if (E <= f && Math.abs(k) > p) {
        const T = h(k, E);
        A(T, "end", +e.swipeDuration);
        return;
      } else
        A(k, "end");
      setTimeout(() => {
        n.reset(), l.value = !1;
      }, 0);
    }, h = (k, E) => (k = Math.abs(k / E) / 3e-3 * (k < 0 ? -1 : 1), k), $ = (k) => k >= o.currIndex + 8 || k <= o.currIndex - 8, P = (k = 0, E, T = r, j) => {
      E === "end" ? i.value = T : i.value = 0, a.value = j, o.scrollDistance = k;
    }, A = (k, E, T) => {
      const { optionHeight: j } = e;
      let K = k + o.transformY;
      if (E === "end") {
        K > 0 && (K = 0), K < -(e.column.length - 1) * +j && (K = -(e.column.length - 1) * +j);
        let oe = Math.round(K / +j) * +j, W = `${(Math.abs(Math.round(oe / +j)) + 1) * o.rotation}deg`;
        P(oe, E, T, W), o.currIndex = Math.abs(Math.round(oe / +j)) + 1;
      } else {
        let oe = 0, W = (-K / +j + 1) * o.rotation;
        const Y = (e.column.length + 1) * o.rotation, R = 0;
        oe = Ee(W, R, Y), R < oe && oe < Y && (P(K, null, void 0, oe + "deg"), o.currIndex = Math.abs(Math.round(K / +j)) + 1);
      }
    }, I = () => {
      t("change", e.column[o.currIndex - 1]);
    }, B = (k) => {
      const { column: E } = e;
      let T = E.findIndex((K) => K[e.fieldNames.value] === e.value);
      o.currIndex = T === -1 ? 1 : T + 1;
      let j = T === -1 ? 0 : T * +e.optionHeight;
      k && I(), A(-j);
    }, M = () => {
      l.value = !1, i.value = 0, I();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (o.transformY = 0, B(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        o.transformY = 0, B(!1);
      },
      {
        deep: !0
      }
    ), $e(() => {
      B(!0);
    }), pe(G(G({}, we(o)), we(e)), {
      setRollerStyle: b,
      isHidden: $,
      roller: s,
      onTouchStart: C,
      onTouchMove: u,
      onTouchEnd: m,
      touchRollerStyle: y,
      touchTileStyle: v,
      setMove: A,
      stopMomentum: M,
      pxCheck: Be,
      maskStyles: w
    });
  }
});
function bf(e, t, n, o, s, l) {
  return c(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[2] || (t[2] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: V(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...a) => e.stopMomentum && e.stopMomentum(...a))
    }, [
      (c(!0), d(Z, null, re(e.column, (a, i) => {
        var r;
        return c(), d(Z, {
          key: (r = a[e.fieldNames.value]) != null ? r : i
        }, [
          a && a[e.fieldNames.text] && e.threeDimensional ? (c(), d("view", {
            key: 0,
            class: D(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(i + 1),
              [a[e.fieldNames.className]]: a[e.fieldNames.className]
            }]),
            style: V(e.setRollerStyle(i + 1))
          }, L(a[e.fieldNames.text]), 7)) : N("", !0),
          a && a[e.fieldNames.text] && !e.threeDimensional ? (c(), d("view", {
            key: 1,
            class: D(["nut-picker-roller-item-tile", {
              [a[e.fieldNames.className]]: a[e.fieldNames.className]
            }]),
            style: V({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, L(a[e.fieldNames.text]), 7)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    g("view", {
      class: "nut-picker-roller-mask",
      style: V(e.maskStyles)
    }, null, 4)
  ], 32);
}
const $f = /* @__PURE__ */ le(yf, [["render", bf]]), wf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: ""
  },
  okText: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => []
  },
  threeDimensional: {
    type: Boolean,
    default: !1
  },
  swipeDuration: {
    type: [Number, String],
    default: 1e3
  },
  showToolbar: {
    type: Boolean,
    default: !0
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7
  },
  optionHeight: {
    type: [Number, String],
    default: 36
  },
  fieldNames: {
    type: Object,
    default: () => ({})
  }
}, { create: kf } = te("picker"), Cf = "NutPicker", Sf = kf({
  components: {
    NutPickerColumn: $f
  },
  props: wf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(Cf), { changeHandler: o, confirm: s, defaultValues: l, columnsList: a, columnsType: i, columnFieldNames: r, cancel: f } = vf(
      e,
      t
    ), p = z([]), y = (w) => {
      w && p.value.length < a.value.length && p.value.push(w);
    }, v = S(() => {
      const w = {};
      return w.height = `${+e.visibleOptionNum * +e.optionHeight}px`, w["--lineHeight"] = `${+e.optionHeight}px`, w;
    });
    return {
      columnsType: i,
      columnsList: a,
      columnFieldNames: r,
      cancel: f,
      changeHandler: o,
      confirmHandler: () => {
        p.value.length > 0 && p.value.forEach((w) => {
          w.stopMomentum();
        }), s();
      },
      defaultValues: l,
      translate: n,
      pickerColumn: p,
      swipeRef: y,
      columnStyle: v
    };
  }
}), Tf = { class: "nut-picker" }, _f = {
  key: 0,
  class: "nut-picker__bar"
}, Nf = { class: "nut-picker__title" };
function Df(e, t, n, o, s, l) {
  const a = X("nut-picker-column");
  return c(), d("div", Tf, [
    e.showToolbar ? (c(), d("view", _f, [
      g("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...i) => e.cancel && e.cancel(...i))
      }, L(e.cancelText || e.translate("cancel")), 1),
      g("view", Nf, L(e.title), 1),
      g("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...i) => e.confirmHandler && e.confirmHandler(...i))
      }, L(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    _(e.$slots, "top"),
    g("view", {
      class: "nut-picker__column",
      style: V(e.columnStyle)
    }, [
      (c(!0), d(Z, null, re(e.columnsList, (i, r) => (c(), d("view", {
        key: r,
        class: "nut-picker__columnitem"
      }, [
        ee(a, {
          ref_for: !0,
          ref: e.swipeRef,
          column: i,
          "columns-type": e.columnsType,
          "field-names": e.columnFieldNames,
          value: e.defaultValues && e.defaultValues[r],
          "three-dimensional": e.threeDimensional,
          "swipe-duration": e.swipeDuration,
          "visible-option-num": e.visibleOptionNum,
          "option-height": e.optionHeight,
          onChange: (f) => {
            e.changeHandler(r, f);
          }
        }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
      ]))), 128))
    ], 4),
    _(e.$slots, "default")
  ]);
}
const Vo = /* @__PURE__ */ le(Sf, [["render", Df]]), { create: If } = te("date-picker"), En = (/* @__PURE__ */ new Date()).getFullYear();
function Kt(e) {
  return Sl(e) && !isNaN(e.getTime());
}
const Bf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, Mf = If({
  components: {
    NutPicker: Vo
  },
  props: {
    modelValue: null,
    title: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    isShowChinese: {
      type: Boolean,
      default: !1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(En - 10, 0, 1),
      validator: Kt
    },
    maxDate: {
      type: Date,
      default: () => new Date(En + 10, 11, 31),
      validator: Kt
    },
    formatter: {
      type: Function,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    filter: Function,
    showToolbar: {
      type: Boolean,
      default: !0
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    }
  },
  emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = me({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), o = (u) => {
      Kt(u) || (u = e.minDate);
      let m = Math.max(u.getTime(), e.minDate.getTime());
      return m = Math.min(m, e.maxDate.getTime()), new Date(m);
    };
    function s(u, m) {
      return 32 - new Date(u, m - 1, 32).getDate();
    }
    const l = (u, m) => {
      const h = u == "min" ? e.minDate : e.maxDate, $ = h.getFullYear();
      let P = 1, A = 1, I = 0, B = 0;
      u === "max" && (P = 12, A = s(m.getFullYear(), m.getMonth() + 1), I = 23, B = 59);
      let M = B;
      return m.getFullYear() === $ && (P = h.getMonth() + 1, m.getMonth() + 1 === P && (A = h.getDate(), m.getDate() === A && (I = h.getHours(), m.getHours() === I && (B = h.getMinutes(), m.getMinutes() === B && (M = h.getSeconds()))))), {
        [`${u}Year`]: $,
        [`${u}Month`]: P,
        [`${u}Date`]: A,
        [`${u}Hour`]: I,
        [`${u}Minute`]: B,
        [`${u}Seconds`]: M
      };
    }, a = S(() => {
      const { maxYear: u, maxDate: m, maxMonth: h, maxHour: $, maxMinute: P, maxSeconds: A } = l("max", n.currentDate), { minYear: I, minDate: B, minMonth: M, minHour: k, minMinute: E, minSeconds: T } = l("min", n.currentDate);
      return w([
        {
          type: "year",
          range: [I, u]
        },
        {
          type: "month",
          range: [M, h]
        },
        {
          type: "day",
          range: [B, m]
        },
        {
          type: "hour",
          range: [k, $]
        },
        {
          type: "minute",
          range: [E, P]
        },
        {
          type: "seconds",
          range: [T, A]
        }
      ]);
    }), i = S(() => a.value.map((m, h) => p(m.range[0], m.range[1], y(m.type), m.type, h))), r = ({
      columnIndex: u,
      selectedValue: m,
      selectedOptions: h
    }) => {
      let $ = [];
      m.forEach((M) => {
        $.push(M);
      }), e.type == "month-day" && $.length < 3 && $.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && $.length < 3 && $.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const P = Number($[0]), A = Number($[1]) - 1, I = Math.min(Number($[2]), s(Number($[0]), Number($[1])));
      let B = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        B = new Date(P, A, I);
      else if (e.type === "datetime")
        B = new Date(P, A, I, Number($[3]), Number($[4]));
      else if (e.type === "datehour")
        B = new Date(P, A, I, Number($[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        B = new Date(n.currentDate);
        const M = B.getFullYear(), k = B.getMonth(), E = B.getDate();
        B = new Date(M, k, E, Number($[0]), Number($[1]), Number($[2] || 0));
      }
      n.currentDate = o(B), t("change", { columnIndex: u, selectedValue: m, selectedOptions: h });
    }, f = (u, m) => {
      const { formatter: h, isShowChinese: $ } = e;
      let P = null;
      if (h)
        P = h(u, { text: Ze(m, 2), value: Ze(m, 2) });
      else {
        const A = Ze(m, 2), I = $ ? Bf[u] : "";
        P = { text: A + I, value: A };
      }
      return P;
    }, p = (u, m, h, $, P) => {
      const A = [];
      let I = 0;
      for (; u <= m; )
        A.push(f($, u)), $ === "minute" ? u += e.minuteStep : u++, u <= Number(h) && I++;
      return n.selectedValue[P] = A[I].value, e.filter ? e.filter($, A) : A;
    }, y = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, v = (u) => {
      t("cancel", u);
    }, b = (u) => {
      t("confirm", u);
    }, w = (u) => {
      switch (e.type) {
        case "date":
          u = u.slice(0, 3);
          break;
        case "datetime":
          u = u.slice(0, 5);
          break;
        case "time":
          u = u.slice(3, 6);
          break;
        case "year-month":
          u = u.slice(0, 2);
          break;
        case "month-day":
          u = u.slice(1, 3);
          break;
        case "datehour":
          u = u.slice(0, 4);
          break;
        case "hour-minute":
          u = u.slice(3, 5);
          break;
      }
      return u;
    }, C = (u) => {
      const m = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return w(m.map((h) => String(h)));
    };
    return jn(() => {
      n.currentDate = o(e.modelValue);
    }), Q(
      () => e.modelValue,
      (u) => {
        const m = o(u);
        JSON.stringify(m) === JSON.stringify(n.currentDate) || (n.currentDate = m, n.selectedValue = C(m));
      }
    ), Q(
      () => n.currentDate,
      (u) => {
        JSON.stringify(u) === JSON.stringify(e.modelValue) || t("update:modelValue", u);
      }
    ), Q(
      () => e.title,
      (u) => {
        n.title = u;
      }
    ), pe(G({}, we(n)), {
      changeHandler: r,
      closeHandler: v,
      confirm: b,
      columns: i
    });
  }
});
function Lf(e, t, n, o, s, l) {
  const a = X("nut-picker");
  return c(), J(a, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.selectedValue = i),
    "ok-text": e.okText,
    "cancel-text": e.cancelText,
    columns: e.columns,
    title: e.title,
    "three-dimensional": e.threeDimensional,
    "swipe-duration": e.swipeDuration,
    "show-toolbar": e.showToolbar,
    "visible-option-num": e.visibleOptionNum,
    "option-height": e.optionHeight,
    onCancel: e.closeHandler,
    onChange: e.changeHandler,
    onConfirm: e.confirm
  }, {
    top: ne(() => [
      _(e.$slots, "top")
    ]),
    default: ne(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const Pf = /* @__PURE__ */ le(Mf, [["render", Lf]]), Af = ["min", "max", "disabled", "readonly", "value"], Vt = /* @__PURE__ */ ve({
  name: "NutInputNumber",
  inheritAttrs: !1,
  __name: "input-number",
  props: {
    modelValue: { default: 0 },
    inputWidth: { default: "" },
    buttonSize: { default: "" },
    min: { default: 1 },
    max: { default: 9999 },
    step: { default: 1 },
    decimalPlaces: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = qe(Je(n, "disabled")), l = S(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: s.value
      };
    }), a = (u) => Number(u).toFixed(Number(n.decimalPlaces)), i = (u) => {
      const m = u.target;
      o("update:modelValue", m.value, u), o("change", m.value, u);
    }, r = (u, m) => {
      let h = a(u);
      o("update:modelValue", h, m), Number(n.modelValue) !== Number(h) && o("change", h, m);
    }, f = (u = Number(n.modelValue)) => u < Number(n.max) && !s.value, p = (u = Number(n.modelValue)) => u > Number(n.min) && !s.value, y = (u) => {
      if (s.value)
        return;
      o("reduce", u);
      let m = Number(n.modelValue) - Number(n.step);
      p() && m >= Number(n.min) ? r(m, u) : (r(Number(n.min), u), o("overlimit", u, "reduce"));
    }, v = (u) => {
      if (s.value)
        return;
      o("add", u);
      let m = Number(n.modelValue) + Number(n.step);
      f() && m <= Number(n.max) ? r(m, u) : (r(Number(n.max), u), o("overlimit", u, "add"));
    }, b = (u) => {
      s.value || n.readonly || o("focus", u);
    }, w = (u) => {
      if (s.value || n.readonly)
        return;
      const m = u.target;
      let h = Number(m.value);
      h < Number(n.min) ? h = Number(n.min) : h > Number(n.max) && (h = Number(n.max)), r(h, u), o("blur", u);
    }, C = (u) => {
      let m = Number(u);
      return m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), m;
    };
    return Q(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = C(n.modelValue);
        u !== Number(n.modelValue) && r(u, {});
      }
    ), (u, m) => (c(), d("view", {
      class: D(l.value)
    }, [
      g("view", {
        class: D(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !p() }]),
        onClick: y
      }, [
        _(u.$slots, "left-icon", {}, () => [
          ee(ce(Xa), {
            width: ce(Be)(u.buttonSize),
            height: ce(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      g("input", dt({ type: "number" }, u.$attrs, {
        min: u.min,
        max: u.max,
        style: { width: ce(Be)(u.inputWidth), height: ce(Be)(u.buttonSize) },
        disabled: ce(s),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: i,
        onBlur: w,
        onFocus: b
      }), null, 16, Af),
      g("view", {
        class: D(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !f() }]),
        onClick: v
      }, [
        _(u.$slots, "right-icon", {}, () => [
          ee(ce(pi), {
            width: ce(Be)(u.buttonSize),
            height: ce(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
be(Vt);
function zn(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function Ef(e, t = !0, n = !0) {
  t ? e = zn(e, ".", /\./g) : e = e.split(".")[0], n ? e = zn(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
function zf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const Vf = { class: "nut-input-value" }, Hf = { class: "nut-input-inner" }, Of = {
  key: 0,
  class: "nut-input-left-box"
}, Rf = { class: "nut-input-box" }, Ff = {
  key: 0,
  class: "nut-input-word-limit"
}, Wf = { class: "nut-input-word-num" }, Yf = { class: "nut-input-right-box" }, un = /* @__PURE__ */ ve({
  name: "NutInput",
  __name: "input",
  props: {
    type: { default: "text" },
    modelValue: { default: "" },
    placeholder: { default: "" },
    inputAlign: { default: "left" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxLength: { default: "" },
    clearable: { type: Boolean, default: !1 },
    clearSize: { default: "14" },
    border: { type: Boolean, default: !0 },
    formatTrigger: { default: "onChange" },
    formatter: {},
    showWordLimit: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    confirmType: { default: "done" },
    error: { type: Boolean, default: !1 },
    showClearIcon: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, l = qe(Je(o, "disabled")), a = z(!1), i = z(), r = () => {
      var T;
      return String((T = o.modelValue) != null ? T : "");
    }, f = (T) => Te("input", G({}, zf(T))), p = me({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), y = S(() => {
      const T = "nut-input";
      return {
        [T]: !0,
        [`${T}--disabled`]: l.value,
        [`${T}--required`]: o.required,
        [`${T}--error`]: o.error,
        [`${T}--border`]: o.border
      };
    }), v = S(() => ({
      textAlign: o.inputAlign
    })), b = (T) => {
      if (!T.target.composing) {
        let K = T.target.value;
        o.maxLength && K.length > Number(o.maxLength) && (K = K.slice(0, Number(o.maxLength))), w(K);
      }
    }, w = (T, j = "onChange") => {
      var K;
      if (["number", "digit"].includes(o.type)) {
        const oe = o.type === "number";
        T = Ef(T, oe, oe);
      }
      o.formatter && j === o.formatTrigger && (T = o.formatter(T)), ((K = i == null ? void 0 : i.value) == null ? void 0 : K.value) !== T && (i.value.value = T), T !== o.modelValue && s("update:modelValue", T);
    }, C = (T) => {
      l.value || o.readonly || (a.value = !0, s("focus", T));
    }, u = (T) => {
      if (l.value || o.readonly)
        return;
      setTimeout(() => {
        a.value = !1;
      }, 200);
      let K = T.target.value;
      o.maxLength && K.length > Number(o.maxLength) && (K = K.slice(0, Number(o.maxLength))), w(r(), "onBlur"), s("blur", T);
    }, m = (T) => {
      T.stopPropagation(), !l.value && (s("update:modelValue", "", T), s("clear", "", T));
    }, h = () => {
      p.validateFailed && (p.validateFailed = !1, p.validateMessage = "");
    }, $ = (T) => {
      l.value || s("clickInput", T);
    }, P = (T) => {
      s("click", T);
    }, A = ({ target: T }) => {
      T.composing = !0;
    }, I = ({ target: T }) => {
      T.composing && (T.composing = !1, T.dispatchEvent(new Event("input")));
    };
    Q(
      () => o.modelValue,
      () => {
        w(r()), h();
      }
    ), $e(() => {
      w(r(), o.formatTrigger);
    });
    const B = () => {
      var T;
      (T = i.value) == null || T.focus();
    }, M = () => {
      var T;
      (T = i.value) == null || T.blur();
    }, k = () => {
      var T;
      (T = i.value) == null || T.select();
    }, E = (T) => {
      T.key === "Enter" && s("confirm", T);
    };
    return t({
      focus: B,
      blur: M,
      select: k
    }), (T, j) => (c(), d("view", {
      class: D(y.value),
      onClick: P
    }, [
      g("view", Vf, [
        g("view", Hf, [
          T.$slots.left ? (c(), d("view", Of, [
            _(T.$slots, "left")
          ])) : N("", !0),
          g("view", Rf, [
            (c(), J(ze(f(T.type)), {
              ref_key: "inputRef",
              ref: i,
              class: "input-text",
              style: V(v.value),
              maxlength: T.maxLength,
              placeholder: T.placeholder,
              disabled: ce(l),
              readonly: T.readonly,
              value: T.modelValue,
              "format-trigger": T.formatTrigger,
              autofocus: T.autofocus,
              enterkeyhint: T.confirmType,
              onInput: b,
              onFocus: C,
              onBlur: u,
              onClick: $,
              onChange: I,
              onCompositionend: I,
              onCompositionstart: A,
              onKeyup: E
            }, null, 40, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint"])),
            T.showWordLimit && T.maxLength ? (c(), d("view", Ff, [
              g("span", Wf, L(r() ? r().length : 0), 1),
              ge("/" + L(T.maxLength), 1)
            ])) : N("", !0)
          ]),
          T.clearable && !T.readonly ? Ie((c(), d("view", {
            key: 1,
            class: "nut-input-clear-box",
            onClick: m
          }, [
            _(T.$slots, "clear", {}, () => [
              ee(ce(Wa), dt({ class: "nut-input-clear" }, T.$attrs, {
                size: T.clearSize,
                width: T.clearSize,
                height: T.clearSize
              }), null, 16, ["size", "width", "height"])
            ])
          ], 512)), [
            [Me, (a.value || T.showClearIcon) && r().length > 0]
          ]) : N("", !0),
          g("view", Yf, [
            _(T.$slots, "right")
          ])
        ])
      ])
    ], 2));
  }
});
be(un);
const Ho = Symbol("nut-radio"), cn = /* @__PURE__ */ ve({
  name: "NutRadio",
  __name: "radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    shape: { default: "round" },
    label: { type: [String, Number, Boolean], default: "" },
    iconSize: { default: "" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, n = qe(Je(t, "disabled")), o = Ve(Ho, null), s = S(() => o.label.value === t.label), l = S(() => n.value ? "nut-radio__icon--disable" : s.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), a = S(() => Be(t.iconSize)), i = S(() => ({
      "nut-radio__label": !0,
      "nut-radio__label--disabled": n.value
    })), r = S(() => ({
      "nut-radio__button": !0,
      "nut-radio__button--active": s.value,
      [`nut-radio__button--${t.size}`]: !0,
      "nut-radio__button--disabled": t.disabled
    })), f = () => {
      s.value || n.value || o.updateValue(t.label);
    }, p = S(() => o.position.value === "left"), y = S(() => ({
      "nut-radio": !0,
      [`nut-radio--${t.shape}`]: !0,
      "nut-radio--reverse": p.value
    }));
    return (v, b) => (c(), d("div", {
      class: D(y.value),
      onClick: f
    }, [
      v.shape === "button" ? (c(), d("div", {
        key: 0,
        class: D(r.value)
      }, [
        _(v.$slots, "default")
      ], 2)) : (c(), d(Z, { key: 1 }, [
        s.value ? _(v.$slots, "checkedIcon", { key: 0 }, () => [
          ee(ce(jl), {
            width: a.value,
            height: a.value,
            class: D(l.value)
          }, null, 8, ["width", "height", "class"])
        ]) : _(v.$slots, "icon", { key: 1 }, () => [
          ee(ce(Qn), {
            width: a.value,
            height: a.value,
            class: D(l.value)
          }, null, 8, ["width", "height", "class"])
        ]),
        g("div", {
          class: D(i.value)
        }, [
          _(v.$slots, "default")
        ], 2)
      ], 64))
    ], 2));
  }
});
be(cn);
const dn = /* @__PURE__ */ ve({
  name: "NutRadioGroup",
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    direction: { default: "vertical" },
    textPosition: { default: "right" }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (l) => {
      o("update:modelValue", l);
    };
    return Re(Ho, {
      label: _n(S(() => n.modelValue)),
      position: _n(S(() => n.textPosition)),
      updateValue: s
    }), Q(
      () => n.modelValue,
      (l) => {
        o("change", l);
      }
    ), (l, a) => (c(), d("div", {
      class: D(["nut-radio-group", `nut-radio-group--${l.direction}`])
    }, [
      _(l.$slots, "default")
    ], 2));
  }
});
be(dn);
const Kf = ["id"], jf = { class: "nut-rate-item__icon--full" }, Uf = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Xf = {
  key: 1,
  class: "nut-rate-item__icon--half"
}, fn = /* @__PURE__ */ ve({
  name: "NutRate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => Xi },
    size: {},
    activeColor: { default: "" },
    voidColor: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    allowHalf: { type: Boolean, default: !1 },
    touchable: { type: Boolean, default: !0 },
    spacing: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Math.random().toString(36).slice(-8), l = qe(Je(n, "disabled")), a = z([]), i = (b) => {
      o("update:modelValue", b), o("change", b);
    }, r = (b, w) => {
      if (l.value || n.readonly)
        return;
      let C = 0;
      w === 1 && n.modelValue === w ? C = 0 : (C = w, n.allowHalf && b == 2 && (C -= 0.5)), i(C);
    }, f = (b, w, C) => {
      let u = 0;
      for (let m = w.value.length - 1; m >= 0; m--) {
        const h = w.value[m];
        if (b > h.offsetLeft) {
          C ? u = m + (b > h.offsetLeft + h.clientWidth / 2 ? 1 : 0.5) : u = m + 1;
          break;
        }
      }
      return u;
    }, p = Qe(), y = (b) => {
      !n.touchable || n.readonly || p.start(b);
    }, v = (b) => {
      n.touchable && (p.move(b), p.isHorizontal() && a.value && (b.preventDefault(), i(f(p.moveX.value, a, n.allowHalf))));
    };
    return (b, w) => (c(), d("view", {
      class: "nut-rate",
      onTouchstart: y,
      onTouchmove: v
    }, [
      (c(!0), d(Z, null, re(Number(b.count), (C) => (c(), d("view", {
        id: "rateRefs-" + ce(s) + C,
        key: C,
        ref_for: !0,
        ref_key: "rateRefs",
        ref: a,
        class: "nut-rate-item",
        style: V(C < Number(b.count) ? { marginRight: ce(Be)(b.spacing) } : {})
      }, [
        g("view", jf, [
          (c(), J(ze(
            ce(nt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: C <= Number(b.modelValue) ? b.activeColor : b.voidColor
            })
          ), {
            class: D(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": ce(l) || C > Number(b.modelValue) }]),
            onClick: (u) => r(1, C)
          }, null, 8, ["class", "onClick"]))
        ]),
        b.allowHalf && Number(b.modelValue) + 1 > C ? (c(), d("view", Uf, [
          (c(), J(ze(
            ce(nt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: C <= Number(b.modelValue) + 1 ? b.activeColor : b.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: (u) => r(2, C)
          }, null, 8, ["onClick"]))
        ])) : b.allowHalf && Number(b.modelValue) + 1 < C ? (c(), d("view", Xf, [
          (c(), J(ze(ce(nt)(b.customIcon, { width: b.size, height: b.size, size: b.size, color: b.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: (u) => r(2, C)
          }, null, 8, ["onClick"]))
        ])) : N("", !0)
      ], 12, Kf))), 128))
    ], 32));
  }
});
be(fn);
const { create: qf } = te("short-password"), Gf = "NutShortPassword", Zf = qf({
  components: {
    NutPopup: Ae,
    Tips: lo
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    length: {
      type: [String, Number],
      // 4～6
      default: 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
  setup(e, { emit: t }) {
    const n = Se(Gf), o = z(e.modelValue), s = S(() => r(Number(e.length))), l = z(e.visible), a = (p) => {
      p.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (p) => {
        l.value = p;
      }
    ), Q(
      () => e.modelValue,
      (p) => {
        o.value = p, String(p).length === s.value && t("complete", p);
      }
    );
    const i = () => {
      t("update:visible", !1), t("close");
    }, r = (p) => Math.min(Math.max(4, p), 6);
    return {
      comLen: s,
      realInput: o,
      onTouchStart: a,
      range: r,
      close: i,
      onTips: () => {
        t("tips");
      },
      show: l,
      translate: n
    };
  }
}), Jf = { class: "nut-short-password-title" }, Qf = { class: "nut-short-password-subtitle" }, xf = { class: "nut-short-password-wrapper" }, ep = {
  key: 0,
  class: "nut-short-password__item-icon"
}, tp = { class: "nut-short-password__message" }, np = { class: "nut-short-password--error" }, op = {
  key: 0,
  class: "nut-short-password--forget"
};
function lp(e, t, n, o, s, l) {
  const a = X("tips"), i = X("nut-popup");
  return c(), d("view", null, [
    ee(i, {
      visible: e.show,
      "onUpdate:visible": t[2] || (t[2] = (r) => e.show = r),
      style: {
        padding: "30px 24px 20px 24px",
        borderRadius: "12px",
        textAlign: "center",
        top: "45%"
      },
      closeable: !0,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "teleport-disable": !1,
      "lock-scroll": e.lockScroll,
      onClickCloseIcon: e.close,
      onClickOverlay: e.close
    }, {
      default: ne(() => [
        g("view", Jf, L(e.title || e.translate("title")), 1),
        g("view", Qf, L(e.desc || e.translate("desc")), 1),
        g("div", xf, [
          g("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r))
          }, [
            (c(!0), d(Z, null, re(new Array(e.comLen), (r, f) => (c(), d("view", {
              key: f,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > f ? (c(), d("view", ep)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        g("view", tp, [
          g("view", np, L(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), d("view", op, [
            ee(a, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            g("view", {
              onClick: t[1] || (t[1] = (...r) => e.onTips && e.onTips(...r))
            }, L(e.tips || e.translate("tips")), 1)
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const sp = /* @__PURE__ */ le(Zf, [["render", lp]]), ap = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], ip = {
  key: 0,
  class: "nut-textarea__limit"
}, Vn = "NutTextarea", Oo = /* @__PURE__ */ ve({
  name: Vn,
  __name: "textarea",
  props: {
    modelValue: { default: "" },
    textAlign: {},
    limitShow: { type: Boolean, default: !1 },
    maxLength: { default: "" },
    rows: { default: "2" },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autosize: { type: [Boolean, Object], default: !1 },
    autofocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = qe(Je(n, "disabled")), l = Se(Vn), a = z(null), i = S(() => {
      const m = "nut-textarea";
      return {
        [m]: !0,
        [`${m}--disabled`]: s.value
      };
    }), r = S(() => ({
      textAlign: n.textAlign
    })), f = (m) => {
      const h = a.value;
      h && h.style && (h.style.height = typeof m == "number" ? `${m}px` : m);
    }, p = () => {
      if (f("auto"), a.value) {
        let m = a.value.scrollHeight;
        if (typeof n.autosize == "object") {
          const { maxHeight: h, minHeight: $ } = n.autosize;
          h !== void 0 && (m = Math.min(m, h)), $ !== void 0 && (m = Math.max(m, $));
        }
        m && f(m);
      }
    };
    $e(() => {
      n.modelValue && y(String(n.modelValue)), n.autosize && _e(p);
    }), Q(
      () => n.modelValue,
      () => {
        n.autosize && _e(p);
      }
    );
    const y = (m, h) => {
      n.maxLength && m.length > Number(n.maxLength) && (m = m.substring(0, Number(n.maxLength))), o("update:modelValue", m, h), o("change", m, h);
    }, v = (m) => {
      const h = m.target;
      if (!h.composing) {
        let $ = h.value;
        n.maxLength && $.length > Number(n.maxLength) && ($ = $.slice(0, Number(n.maxLength))), y(h.value, m);
      }
    }, b = (m) => {
      s.value || n.readonly || o("focus", m);
    }, w = (m) => {
      if (s.value || n.readonly)
        return;
      const $ = m.target.value;
      y($, m), o("blur", { value: $, event: m });
    }, C = ({ target: m }) => {
      const h = m;
      h.composing = !0;
    }, u = ({ target: m }) => {
      const h = m;
      h.composing && (h.composing = !1, h.dispatchEvent(new Event("input")));
    };
    return (m, h) => (c(), d("view", {
      class: D(i.value)
    }, [
      g("textarea", {
        ref_key: "textareaRef",
        ref: a,
        class: "nut-textarea__textarea",
        style: V(r.value),
        rows: m.rows,
        disabled: ce(s),
        readonly: m.readonly,
        value: m.modelValue,
        maxlength: m.maxLength,
        placeholder: m.placeholder || ce(l)("placeholder"),
        autofocus: m.autofocus,
        onInput: v,
        onBlur: w,
        onFocus: b,
        onChange: u,
        onCompositionend: u,
        onCompositionstart: C
      }, null, 44, ap),
      m.limitShow ? (c(), d("view", ip, L(m.modelValue ? m.modelValue.length : 0) + "/" + L(m.maxLength), 1)) : N("", !0)
    ], 2));
  }
});
be(Oo);
class rp {
  constructor() {
    H(this, "url", "");
    H(this, "name", "file");
    H(this, "fileType", "image");
    H(this, "formData");
    H(this, "sourceFile");
    H(this, "method", "post");
    H(this, "xhrState", 200);
    H(this, "timeout", 30 * 1e3);
    H(this, "headers", {});
    H(this, "withCredentials", !1);
    H(this, "onStart");
    H(this, "taroFilePath");
    H(this, "onProgress");
    H(this, "onSuccess");
    H(this, "onFailure");
    H(this, "beforeXhrUpload");
  }
}
let up = class {
  constructor(t) {
    H(this, "options");
    this.options = t;
  }
  upload() {
    var o;
    const t = this.options, n = new XMLHttpRequest();
    if (n.timeout = t.timeout, n.upload) {
      n.upload.addEventListener(
        "progress",
        (s) => {
          var l;
          (l = t.onProgress) == null || l.call(t, s, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var s, l;
        n.readyState === 4 && (n.status == t.xhrState ? (s = t.onSuccess) == null || s.call(t, n.responseText, t) : (l = t.onFailure) == null || l.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [s, l] of Object.entries(t.headers))
        n.setRequestHeader(s, l);
      (o = t.onStart) == null || o.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class cp {
  constructor() {
    H(this, "status", "ready");
    H(this, "message", "");
    H(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    H(this, "name");
    H(this, "url");
    H(this, "type");
    H(this, "path");
    H(this, "percentage", 0);
    H(this, "formData", {});
  }
}
const dp = { class: "nut-progress" }, pn = /* @__PURE__ */ ve({
  name: "NutProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    size: { default: "base" },
    status: { default: "text" },
    strokeWidth: {},
    textInside: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    strokeColor: {},
    textColor: {},
    textBackground: {},
    isShowPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      if (t.strokeWidth)
        return t.strokeWidth + "px";
    }), o = S(() => Number(t.percentage) >= 100 ? 100 : Number(t.percentage)), s = S(() => ({
      width: o.value + "%",
      background: t.strokeColor || ""
    })), l = S(() => ({
      color: t.textColor || ""
    }));
    return (a, i) => (c(), d("div", dp, [
      g("div", {
        class: D(["nut-progress-outer", [a.showText && !a.textInside ? "nut-progress-outer-part" : "", a.size ? "nut-progress-" + a.size : ""]]),
        style: V({ height: n.value })
      }, [
        g("div", {
          class: D(["nut-progress-inner", a.status === "active" ? "nut-active" : ""]),
          style: V(s.value)
        }, null, 6),
        a.showText && a.textInside && !a.$slots.default ? (c(), d("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: V({
            lineHeight: n.value,
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`,
            background: a.textBackground || a.strokeColor
          })
        }, [
          g("span", {
            style: V(l.value)
          }, L(o.value) + L(a.isShowPercentage ? "%" : ""), 5)
        ], 4)) : N("", !0),
        a.showText && a.textInside && a.$slots.default ? (c(), d("div", {
          key: 1,
          class: "nut-progress-slot",
          style: V({
            position: "absolute",
            top: "50%",
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`
          })
        }, [
          _(a.$slots, "default")
        ], 4)) : N("", !0)
      ], 6),
      a.showText && !a.textInside ? (c(), d("div", {
        key: 0,
        class: "nut-progress-text",
        style: V({ lineHeight: n.value })
      }, [
        a.status === "text" || a.status === "active" ? (c(), d("span", {
          key: 0,
          style: V(l.value)
        }, L(o.value) + L(a.isShowPercentage ? "%" : ""), 5)) : a.status === "icon" ? _(a.$slots, "icon-name", { key: 1 }, () => [
          ee(ce(eo), {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : N("", !0)
      ], 4)) : N("", !0)
    ]));
  }
});
be(pn);
const { create: fp } = te("uploader"), pp = "NutUploader", mp = fp({
  components: {
    NutProgress: pn,
    Photograph: ri,
    Failure: oo,
    Loading: st,
    Del: to,
    Link: ya
  },
  props: {
    name: { type: String, default: "file" },
    url: { type: String, default: "" },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1e3 * 30 },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: !0 },
    // picture、list
    listType: { type: String, default: "picture" },
    isDeletable: { type: Boolean, default: !0 },
    method: { type: String, default: "post" },
    capture: { type: Boolean, default: !1 },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: !0 },
    accept: { type: String, default: "*" },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autoUpload: { type: Boolean, default: !0 },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function,
      default: () => !0
    },
    onChange: { type: Function }
  },
  emits: [
    "start",
    "progress",
    "oversize",
    "success",
    "failure",
    "change",
    "delete",
    "update:fileList",
    "fileItemClick"
  ],
  setup(e, { emit: t }) {
    const n = qe(Je(e, "disabled")), o = Se(pp), s = z(e.fileList), l = z([]);
    Q(
      () => e.fileList,
      () => {
        s.value = e.fileList;
      }
    );
    const a = () => {
      let h = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: n.value
      };
      return e.capture && (h.capture = "camera", h.accept || (h.accept = "image/*")), Te("input", h);
    }, i = (h) => {
      h.value = "";
    }, r = (h) => {
      t("fileItemClick", { fileItem: h });
    }, f = (h, $) => {
      const P = new rp();
      P.url = e.url, P.formData = h.formData, P.timeout = e.timeout * 1, P.method = e.method, P.xhrState = e.xhrState, P.headers = e.headers, P.withCredentials = e.withCredentials, P.beforeXhrUpload = e.beforeXhrUpload;
      try {
        P.sourceFile = h.formData.get(e.name);
      } catch (I) {
        console.warn("[NutUI] <Uploader> formData.get(name)", I);
      }
      P.onStart = (I) => {
        h.status = "ready", h.message = o("readyUpload"), p($), t("start", I);
      }, P.onProgress = (I, B) => {
        h.status = "uploading", h.message = o("uploading"), h.percentage = (I.loaded / I.total * 100).toFixed(0), t("progress", { event: I, option: B, percentage: h.percentage });
      }, P.onSuccess = (I, B) => {
        h.status = "success", h.message = o("success"), t("success", {
          responseText: I,
          option: B,
          fileItem: h
        }), t("update:fileList", s.value);
      }, P.onFailure = (I, B) => {
        h.status = "error", h.message = o("error"), t("failure", {
          responseText: I,
          option: B,
          fileItem: h
        });
      };
      let A = new up(P);
      e.autoUpload ? A.upload() : l.value.push(
        new Promise((I) => {
          I(A);
        })
      );
    }, p = (h = -1) => {
      h > -1 ? l.value.splice(h, 1) : (l.value = [], s.value = [], t("update:fileList", s.value));
    }, y = () => {
      Promise.all(l.value).then((h) => {
        h.forEach(($) => $.upload());
      });
    }, v = (h) => {
      h.forEach(($, P) => {
        const A = new FormData();
        for (const [B, M] of Object.entries(e.data))
          A.append(B, M);
        A.append(e.name, $);
        const I = me(new cp());
        if (I.name = $.name, I.status = "ready", I.type = $.type, I.formData = A, I.message = o("waitingUpload"), f(I, P), e.isPreview && $.type.includes("image")) {
          const B = new FileReader();
          B.onload = (M) => {
            I.url = M.target.result, s.value.push(I);
          }, B.readAsDataURL($);
        } else
          s.value.push(I);
      });
    }, b = (h) => {
      const $ = e.maximum * 1, P = e.maximize * 1, A = new Array();
      h = h.filter((B) => B.size > P ? (A.push(B), !1) : !0), A.length && t("oversize", A);
      let I = h.length + s.value.length;
      return I > $ && h.splice(h.length - (I - $)), h;
    }, w = (h, $) => {
      s.value.splice($, 1), t("delete", {
        file: h,
        fileList: s.value,
        index: $
      });
    }, C = (h, $) => {
      n.value || (p($), en(e.beforeDelete, {
        args: [h, s.value],
        done: () => w(h, $)
      }));
    }, u = (h) => {
      if (e.disabled || n.value)
        return;
      const $ = h.target;
      let { files: P } = $;
      e.beforeUpload ? e.beforeUpload(P).then((A) => m(A)) : m(P), t("change", {
        fileList: s.value,
        event: h
      }), e.clearInput && i($);
    }, m = (h) => {
      const $ = b(new Array().slice.call(h));
      v($);
    };
    return {
      onChange: u,
      onDelete: C,
      fileList: s,
      fileItemClick: r,
      clearUploadQueue: p,
      submit: y,
      renderInput: a
    };
  }
}), hp = { class: "nut-uploader" }, vp = {
  key: 0,
  class: "nut-uploader__slot"
}, gp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, yp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, bp = { class: "nut-uploader__preview__progress__msg" }, $p = ["onClick"], wp = ["src", "onClick"], kp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, Cp = ["onClick"], Sp = { class: "file__name_tips" }, Tp = { class: "tips" }, _p = {
  key: 1,
  class: "nut-uploader__preview-list"
}, Np = ["onClick"], Dp = { class: "file__name_tips" };
function Ip(e, t, n, o, s, l) {
  const a = X("Failure"), i = X("Loading"), r = X("Link"), f = X("Del"), p = X("nut-progress"), y = X("Photograph");
  return c(), d("view", hp, [
    e.$slots.default ? (c(), d("view", vp, [
      _(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), J(ze(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (c(!0), d(Z, null, re(e.fileList, (v, b) => {
      var w;
      return c(), d("view", {
        key: v.uid,
        class: D(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), d("view", gp, [
          v.status != "success" ? (c(), d("view", yp, [
            v.status != "ready" ? (c(), d(Z, { key: 0 }, [
              v.status == "error" ? (c(), J(a, {
                key: 0,
                color: "#fff"
              })) : (c(), J(i, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            g("view", bp, L(v.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (c(), d("view", {
            key: 1,
            class: "close",
            onClick: (C) => e.onDelete(v, b)
          }, [
            _(e.$slots, "delete-icon", {}, () => [
              ee(a)
            ])
          ], 8, $p)) : N("", !0),
          (w = v == null ? void 0 : v.type) != null && w.includes("image") && v.url ? (c(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: v.url,
            onClick: (C) => e.fileItemClick(v)
          }, null, 8, wp)) : (c(), d("view", kp, [
            g("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (C) => e.fileItemClick(v)
            }, [
              g("view", Sp, L(v.name), 1)
            ], 8, Cp)
          ])),
          g("view", Tp, L(v.name), 1)
        ])) : e.listType == "list" ? (c(), d("view", _p, [
          g("view", {
            class: D(["nut-uploader__preview-img__file__name", [v.status]]),
            onClick: (C) => e.fileItemClick(v)
          }, [
            ee(r, { class: "nut-uploader__preview-img__file__link" }),
            g("view", Dp, L(v.name), 1),
            e.isDeletable ? (c(), J(f, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: De((C) => e.onDelete(v, b), ["stop"])
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, Np),
          v.status == "uploading" ? (c(), J(p, {
            key: 0,
            size: "small",
            percentage: v.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : N("", !0)
        ])) : N("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (c(), d("view", {
      key: 1,
      class: D(["nut-uploader__upload", [e.listType]])
    }, [
      _(e.$slots, "upload-icon", {}, () => [
        ee(y, { color: "#808080" })
      ]),
      (c(), J(ze(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const Bp = /* @__PURE__ */ le(mp, [["render", Ip]]), { create: Mp } = te("number-keyboard"), Lp = "NutNumberKeyboard", Pp = Mp({
  components: {
    NutPopup: Ae
  },
  props: {
    confirmText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    customKey: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: !1
    },
    popClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input", "delete", "close", "blur", "confirm", "update:modelValue", "update:visible"],
  setup(e, { emit: t }) {
    const n = Se(Lp), o = z(void 0), s = z(e.visible), l = z();
    function a() {
      const { customKey: m } = e;
      let h = {
        id: "lock",
        type: "lock"
      }, $ = Array.isArray(m) ? m : [m];
      return $.length === 1 && (h = {
        id: $[0],
        type: "custom"
      }), [...i(), h, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function i() {
      const m = [];
      for (let h = 1; h <= 9; h++)
        m.push({ id: h, type: "number" });
      return e.randomKeys ? m.sort(() => Math.random() > 0.5 ? 1 : -1) : m;
    }
    function r() {
      const m = i(), { customKey: h } = e;
      let $ = Array.isArray(h) ? h : [h];
      return $.length > 2 && ($ = [$[0], $[1]]), $.length == 2 && e.title && e.type != "rightColumn" && ($ = [$[0]]), $.length === 1 ? e.title && e.type != "rightColumn" ? m.push({ id: $[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : m.push({ id: 0, type: "number" }, { id: $[0], type: "custom" }) : $.length === 2 && m.push(
        { id: $[0], type: "custom" },
        { id: 0, type: "number" },
        { id: $[1], type: "custom" }
      ), m;
    }
    const f = S(() => e.type == "rightColumn" || e.title != "" ? r() : a()), p = () => {
      e.visible && t("blur");
    }, y = (m) => {
      const h = l.value;
      h && !h.contains(m.target) && p();
    };
    Q(
      () => e.visible,
      (m) => {
        s.value = m, m ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function v(m, h) {
      h.stopPropagation(), o.value = m.id, (m.type == "number" || m.type == "custom") && (t("input", m.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + m.id)), m.type == "lock" && C(), m.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function b(m) {
      m.stopPropagation();
    }
    function w(m) {
      m.preventDefault(), o.value = void 0;
    }
    function C() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: o,
      defaultKey: a,
      closeBoard: C,
      confirm: () => {
        t("confirm");
      },
      onTouchEnd: w,
      onTouchMove: b,
      onTouchstart: v,
      keysList: f,
      genCustomKeys: r,
      getBasicKeys: i,
      root: l,
      show: s,
      translate: n
    };
  }
}), Ap = { ref: "root" }, Ep = { class: "nut-number-keyboard" }, zp = {
  key: 0,
  class: "nut-number-keyboard__header"
}, Vp = { class: "nut-number-keyboard__title" }, Hp = { class: "nut-number-keyboard__body" }, Op = { class: "nut-number-keyboard__keys" }, Rp = ["onTouchstart"], Fp = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, Wp = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, Yp = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, Kp = { class: "nut-key__wrapper" }, jp = /* @__PURE__ */ g("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), Up = [
  jp
];
function Xp(e, t, n, o, s, l) {
  const a = X("nut-popup");
  return c(), d("div", Ap, [
    ee(a, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (i) => e.show = i),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: ne(() => [
        g("div", Ep, [
          e.title ? (c(), d("div", zp, [
            g("h3", Vp, L(e.title), 1),
            e.type == "default" ? (c(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (i) => e.closeBoard())
            }, L(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          g("div", Hp, [
            g("div", Op, [
              (c(!0), d(Z, null, re(e.keysList, (i) => (c(), d("div", {
                key: "key" + i.id,
                class: D([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": i.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                g("div", {
                  class: D([
                    "nut-key",
                    { "nut-key--active": i.id == e.clickKeyIndex },
                    { "nut-key--lock": i.type == "lock" },
                    { "nut-key--delete": i.type == "delete" }
                  ]),
                  onTouchstart: (r) => e.onTouchstart(i, r),
                  onTouchmove: t[1] || (t[1] = (r) => e.onTouchMove(r)),
                  onTouchend: t[2] || (t[2] = (r) => e.onTouchEnd(r))
                }, [
                  i.type == "number" || i.type == "custom" ? (c(), d(Z, { key: 0 }, [
                    ge(L(i.id), 1)
                  ], 64)) : N("", !0),
                  i.type == "lock" ? (c(), d("img", Fp)) : N("", !0),
                  i.type == "delete" ? (c(), d("img", Wp)) : N("", !0)
                ], 42, Rp)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), d("div", Yp, [
              g("div", Kp, [
                g("div", {
                  class: D(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (i) => e.onTouchstart({ id: "delete", type: "delete" }, i)),
                  onTouchmove: t[4] || (t[4] = (i) => e.onTouchMove(i)),
                  onTouchend: t[5] || (t[5] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
                }, Up, 34)
              ]),
              g("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (...i) => e.confirm && e.confirm(...i))
              }, [
                g("div", {
                  class: D(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, L(e.confirmText || e.translate("done")), 3)
              ])
            ])) : N("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const qp = /* @__PURE__ */ le(Pp, [["render", Xp]]), mn = /* @__PURE__ */ ve({
  name: "NutForm",
  __name: "form",
  props: {
    modelValue: { default: () => ({}) },
    rules: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    labelPosition: { default: "left" },
    starPosition: { default: "left" }
  },
  emits: ["validate"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, { children: l, linkChildren: a } = pt(Bo);
    a({ props: o });
    const { linkChildren: i } = pt(Mo);
    i({ props: o });
    const r = S(() => me({}));
    Re(Lo, r);
    const f = () => {
      Object.keys(r.value).forEach((u) => {
        r.value[u] = "";
      });
    }, p = () => {
      f();
    };
    Q(
      () => o.modelValue,
      () => {
        f();
      },
      { immediate: !0 }
    );
    const y = () => {
      const u = [];
      return l.forEach((m) => {
        u.push({
          prop: m == null ? void 0 : m.prop,
          rules: (m == null ? void 0 : m.rules) || []
        });
      }), u;
    }, v = (u) => {
      u.message && s("validate", u), r.value[u.prop] = u.message;
    }, b = (u) => Ge(this, null, function* () {
      const { rules: m = [], prop: h } = u, $ = (M) => new Promise((k, E) => {
        try {
          v(M), k(M);
        } catch (T) {
          E(T);
        }
      });
      h || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const P = Ut(o.modelValue, h || "");
      v({ prop: h, message: "" });
      const A = o.rules || {}, I = [...(A == null ? void 0 : A[h]) || [], ...m];
      for (; I.length; ) {
        const B = I.shift(), { validator: k } = B, E = Yt(B, ["validator"]), { required: T, regex: j, message: K } = E, oe = { prop: h, message: K || "" };
        if (T && !P && P !== 0 || j && !j.test(String(P)))
          return $(oe);
        if (k) {
          const W = k(P, E);
          if (qn(W))
            try {
              if ((yield W) === !1)
                return $(oe);
            } catch (Y) {
              return $({ prop: h, message: Y });
            }
          else if (!W)
            return $(oe);
        }
      }
      return Promise.resolve(!0);
    }), w = (u = "") => new Promise((m, h) => {
      try {
        const P = y().map((A) => u && u !== A.prop ? Promise.resolve(!0) : b(A));
        Promise.all(P).then((A) => {
          A = A.filter((B) => B !== !0);
          const I = { valid: !0, errors: [] };
          A.length && (I.valid = !1, I.errors = A), m(I);
        });
      } catch ($) {
        h($);
      }
    });
    return t({
      submit: () => (w(), !1),
      reset: p,
      validate: w
    }), (u, m) => (c(), d("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      ee(ce(an), null, {
        default: ne(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
be(mn);
const Gp = { class: "nut-cell__value nut-form-item__body" }, hn = /* @__PURE__ */ ve({
  name: "NutFormItem",
  inheritAttrs: !1,
  __name: "form-item",
  props: {
    prop: { default: "" },
    label: { default: "" },
    rules: { default: () => [] },
    required: { type: Boolean, default: !1 },
    showErrorMessage: { type: Boolean, default: !0 },
    showErrorLine: { type: Boolean, default: !0 },
    labelWidth: {},
    labelAlign: {},
    errorMessageAlign: {},
    bodyAlign: {},
    labelPosition: {},
    starPosition: {}
  },
  setup(e) {
    const t = e, { parent: n } = mt(Bo), o = S(() => {
      var v;
      const p = (v = n.props) == null ? void 0 : v.rules;
      let y = !1;
      for (const b in p)
        Object.prototype.hasOwnProperty.call(p, b) && b === t.prop && Array.isArray(p[b]) && (y = p[b].some((w) => w.required));
      return t.required || t.rules.some((b) => b.required) || y;
    }), s = S(() => {
      const p = n.props.labelPosition, y = t.labelPosition ? t.labelPosition : p;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), l = S(() => {
      const p = n.props.starPosition, y = t.starPosition ? t.starPosition : p;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), a = Ve(Lo), i = S(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), r = S(() => ({
      textAlign: t.bodyAlign
    })), f = S(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (p, y) => (c(), J(ce(sn), {
      class: D(["nut-form-item", [{ error: ce(a)[p.prop], line: p.showErrorLine }, p.$attrs.class, s.value]]),
      style: V(p.$attrs.style)
    }, {
      default: ne(() => [
        p.label || p.$slots.label ? (c(), d("view", {
          key: 0,
          class: D(["nut-cell__title nut-form-item__label", { required: o.value, [l.value]: l.value }]),
          style: V(i.value)
        }, [
          _(p.$slots, "label", {}, () => [
            ge(L(p.label), 1)
          ])
        ], 6)) : N("", !0),
        g("view", Gp, [
          g("view", {
            class: "nut-form-item__body__slots",
            style: V(r.value)
          }, [
            _(p.$slots, "default")
          ], 4),
          ce(a)[p.prop] && p.showErrorMessage ? (c(), d("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: V(f.value)
          }, L(ce(a)[p.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
be(hn);
const Ro = Symbol("nut-swipe"), vn = /* @__PURE__ */ ve({
  name: "NutSwipe",
  __name: "swipe",
  props: {
    name: { default: "" },
    touchMoveStopPropagation: { type: Boolean, default: !1 },
    touchMovePreventDefault: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, l = (k) => {
      var E;
      return ((E = k.value) == null ? void 0 : E.getBoundingClientRect().width) || 0;
    }, a = z(!1), i = z(), r = S(() => l(i)), f = z(), p = S(() => l(f)), y = Ve(Ro, null);
    Q(
      () => {
        var k;
        return (k = y == null ? void 0 : y.name) == null ? void 0 : k.value;
      },
      (k) => {
        o.name !== k && y && y.lock && m();
      }
    );
    const v = z(!1);
    let b = "", w = "";
    const C = me({
      offset: 0,
      moving: !1
    }), u = (k = "") => {
      y && y.update(o.name), v.value = !0, k && (C.offset = k === "left" ? -p.value : r.value), s("open", {
        name: o.name,
        position: b || k
      });
    }, m = () => {
      C.offset = 0, v.value && (v.value = !1, s("close", {
        name: o.name,
        position: b
      }));
    }, h = (k, E, T) => {
      T ? k.stopPropagation() : m(), s("click", E);
    }, $ = S(() => ({
      transform: `translate3d(${C.offset}px, 0, 0)`
    })), P = (k) => {
      b = k > 0 ? "right" : "left";
      let E = k;
      switch (b) {
        case "left":
          v.value && w === b ? E = -p.value : E = Math.abs(k) > p.value ? -p.value : k;
          break;
        case "right":
          v.value && w === b ? E = r.value : E = Math.abs(k) > r.value ? r.value : k;
          break;
      }
      C.offset = E;
    }, A = Qe(), I = (k) => {
      o.disabled || A.start(k);
    }, B = (k) => {
      o.disabled || (A.move(k), A.isHorizontal() && (a.value = !0, C.moving = !0, P(A.deltaX.value), o.touchMovePreventDefault && k.preventDefault(), o.touchMoveStopPropagation && k.stopPropagation()));
    }, M = () => {
      if (C.moving) {
        switch (C.moving = !1, w = b, b) {
          case "left":
            Math.abs(C.offset) <= p.value / 2 ? m() : (C.offset = -p.value, u());
            break;
          case "right":
            Math.abs(C.offset) <= r.value / 2 ? m() : (C.offset = r.value, u());
            break;
        }
        setTimeout(() => {
          a.value = !1;
        }, 0);
      }
    };
    return t({
      open: u,
      close: m
    }), (k, E) => (c(), d("view", {
      class: "nut-swipe",
      style: V($.value),
      onTouchstart: I,
      onTouchmove: B,
      onTouchend: M,
      onTouchcancel: M
    }, [
      g("view", {
        ref_key: "leftRef",
        ref: i,
        class: "nut-swipe__left",
        onClick: E[0] || (E[0] = (T) => h(T, "left", !0))
      }, [
        _(k.$slots, "left")
      ], 512),
      g("view", {
        class: "nut-swipe__content",
        onClick: E[1] || (E[1] = (T) => h(T, "content", a.value))
      }, [
        _(k.$slots, "default")
      ]),
      g("view", {
        ref_key: "rightRef",
        ref: f,
        class: "nut-swipe__right",
        onClick: E[2] || (E[2] = (T) => h(T, "right", !0))
      }, [
        _(k.$slots, "right")
      ], 512)
    ], 36));
  }
});
be(vn);
const Fo = /* @__PURE__ */ ve({
  name: "NutSwipeGroup",
  __name: "swipe-group",
  props: {
    lock: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = z(null), o = z("");
    return Re(Ro, {
      update: (l) => {
        o.value = l;
      },
      lock: t.lock,
      name: o
    }), (l, a) => (c(), d("div", {
      ref_key: "swipeGroupRef",
      ref: n,
      class: "nut-swipe-group"
    }, [
      _(l.$slots, "default")
    ], 512));
  }
});
be(Fo);
const { create: Zp } = te("action-sheet"), Jp = Zp({
  components: {
    NutPopup: Ae,
    Loading: st
  },
  props: pe(G({}, Nt), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    closeAbled: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["cancel", "close", "choose", "update:visible"],
  setup(e, { emit: t }) {
    return {
      slotDefault: !!St().default,
      isHighlight: (i) => e.chooseTagValue && e.chooseTagValue === i[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (i, r) => {
        !i.disable && !i.loading && (t("choose", i, r), t("update:visible", !1));
      },
      close: (i) => {
        e.closeAbled && (t("close", i), t("update:visible", !1));
      }
    };
  }
}), Qp = { class: "nut-action-sheet" }, xp = {
  key: 0,
  class: "nut-action-sheet__title"
}, e1 = { key: 1 }, t1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, n1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, o1 = ["onClick"], l1 = { key: 1 }, s1 = { class: "nut-action-sheet__subdesc" };
function a1(e, t, n, o, s, l) {
  const a = X("Loading"), i = X("nut-popup");
  return c(), J(i, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      g("view", Qp, [
        e.title ? (c(), d("view", xp, L(e.title), 1)) : N("", !0),
        _(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (c(), d("view", e1, [
          e.description ? (c(), d("view", t1, L(e.description), 1)) : N("", !0),
          e.menuItems.length ? (c(), d("view", n1, [
            (c(!0), d(Z, null, re(e.menuItems, (r, f) => (c(), d("view", {
              key: f,
              class: D(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": r.disable,
                "nut-action-sheet__item--loading": r.loading
              }]),
              style: V({ color: e.isHighlight(r) || r.color }),
              onClick: (p) => e.chooseItem(r, f)
            }, [
              r.loading ? (c(), J(a, { key: 0 })) : (c(), d("view", l1, L(r[e.optionTag]), 1)),
              g("view", s1, L(r[e.optionSubTag]), 1)
            ], 14, o1))), 128))
          ])) : N("", !0),
          e.cancelTxt ? (c(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...r) => e.cancelActionSheet && e.cancelActionSheet(...r))
          }, L(e.cancelTxt), 1)) : N("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const i1 = /* @__PURE__ */ le(Jp, [["render", a1]]), Wo = /* @__PURE__ */ ve({
  name: "NutBacktop",
  __name: "backtop",
  props: {
    bottom: { default: 20 },
    right: { default: 10 },
    elId: { default: "body" },
    distance: { default: 200 },
    zIndex: { default: 10 },
    isAnimation: { type: Boolean, default: !0 },
    duration: { default: 1e3 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z(!1), l = z(0), a = z(window), i = z(0), r = z(!1), f = S(() => ({
      ["nut-backtop"]: !0,
      show: s.value
    })), p = S(() => ({
      right: `${n.right}px`,
      bottom: `${n.bottom}px`,
      zIndex: n.zIndex
    }));
    function y() {
      a.value instanceof Window ? l.value = a.value.scrollY : l.value = a.value.scrollTop, s.value = l.value >= n.distance;
    }
    function v(h = 0) {
      a.value instanceof Window ? window.scrollTo(0, h) : a.value.scrollTop = h;
    }
    function b() {
      let h = Oe(function $() {
        var P = n.duration - Math.max(0, i.value - +/* @__PURE__ */ new Date() + n.duration), A = P * -l.value / n.duration + l.value;
        v(A), h = Oe($), (P == n.duration || A == 0) && nc(h);
      });
    }
    function w() {
      a.value.addEventListener("scroll", y, !1), a.value.addEventListener("resize", y, !1);
    }
    function C() {
      a.value.removeEventListener("scroll", y, !1), a.value.removeEventListener("resize", y, !1);
    }
    function u(h) {
      i.value = +/* @__PURE__ */ new Date(), n.isAnimation && n.duration > 0 ? b() : v(), o("click", h);
    }
    function m() {
      n.elId && document.getElementById(n.elId) && (a.value = document.getElementById(n.elId)), w();
    }
    return $e(() => {
      n.distance == 0 && (s.value = !0), m();
    }), Ue(() => {
      C();
    }), Tt(() => {
      r.value && (r.value = !1, m());
    }), _t(() => {
      r.value = !0, C();
    }), (h, $) => (c(), d("div", {
      class: D(f.value),
      style: V(p.value),
      onClick: De(u, ["stop"])
    }, [
      _(h.$slots, "default", {}, () => [
        ee(ce(ir), {
          width: "19px",
          height: "19px",
          class: "nut-backtop-main"
        })
      ])
    ], 6));
  }
});
be(Wo);
const { create: r1 } = te("drag"), u1 = r1({
  props: {
    attract: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      })
    }
  },
  setup(e) {
    const t = z(), n = me({
      keepAlive: !1,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    function o() {
      const f = document.documentElement;
      n.elWidth = t.value.offsetWidth, n.elHeight = t.value.offsetHeight, n.screenWidth = f.clientWidth || 375, n.screenHeight = f.clientHeight || 667;
    }
    function s(f) {
      n.boundary.left ? +f.style.left.split("px")[0] > n.boundary.left ? (f.style.left = +f.style.left.split("px")[0] - 10 + "px", Oe(() => {
        s(f);
      })) : f.style.left = `${n.boundary.left}px` : +f.style.left.split("px")[0] > 10 ? (f.style.left = +f.style.left.split("px")[0] - 10 + "px", Oe(() => {
        s(f);
      })) : f.style.left = "0px";
    }
    function l(f, p) {
      p - parseInt(f.style.left.split("px")[0]) > 10 ? (f.style.left = parseInt(f.style.left.split("px")[0]) + 10 + "px", Oe(() => {
        l(f, p);
      })) : f.style.left = p + "px";
    }
    function a(f) {
      f.preventDefault();
      const p = f.currentTarget;
      if (f.targetTouches.length === 1) {
        const y = f.targetTouches[0];
        n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const v = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > v ? n.xPum = v : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (p.style.left = n.xPum + "px"), e.direction != "x" && (p.style.top = n.yPum + "px");
      }
    }
    function i(f) {
      const p = f.currentTarget;
      let v = f.changedTouches[0].clientX;
      const b = n.screenWidth - n.elWidth - n.boundary.right;
      v > b ? v = b : v < n.boundary.left ? v = n.boundary.left : v = v < n.screenWidth / 2 ? n.boundary.left : b, e.direction != "y" && e.attract && (v < n.screenWidth / 2 ? Oe(() => {
        s(p);
      }) : Oe(() => {
        l(p, b);
      })), e.direction != "x" && (p.style.top = n.yPum + "px");
    }
    function r(f) {
      const p = f.currentTarget, y = f.touches[0], v = f.targetTouches[0];
      n.startTop = p.offsetTop, n.startLeft = p.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return $e(() => {
      o(), n.boundary = e.boundary;
    }), Tt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), _t(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", r), t.value.removeEventListener("touchmove", a), t.value.removeEventListener("touchend", i);
    }), {
      myDrag: t,
      touchStart: r,
      touchMove: a,
      touchEnd: i
    };
  }
});
function c1(e, t, n, o, s, l) {
  return c(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (a) => e.touchStart(a)),
    onTouchmove: t[1] || (t[1] = (a) => e.touchMove(a)),
    onTouchend: t[2] || (t[2] = (a) => e.touchEnd(a))
  }, [
    _(e.$slots, "default")
  ], 544);
}
const d1 = /* @__PURE__ */ le(u1, [["render", c1]]), { create: f1 } = te("dialog"), p1 = "NutDialog", m1 = f1({
  inheritAttrs: !1,
  components: {
    NutPopup: Ae,
    NutButton: Xe
  },
  props: pe(G({}, Nt), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: [String, Object],
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelAutoClose: {
      type: Boolean,
      default: !0
    },
    okAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
    },
    footerDirection: {
      type: String,
      default: "horizontal"
      // vertical
    },
    customClass: {
      type: String,
      default: ""
    },
    popStyle: {
      type: Object
    },
    beforeClose: Function
  }),
  emits: ["update", "update:visible", "ok", "cancel", "opened", "closed"],
  setup(e, { emit: t }) {
    const n = Se(p1), o = z(e.visible);
    $e(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        l("page");
      });
    }), Q(
      () => e.visible,
      (p) => {
        o.value = p, p && t("opened");
      }
    );
    const s = (p) => {
      t("update", p), t("update:visible", p);
    }, l = (p) => {
      en(e.beforeClose, {
        args: [p],
        done: () => {
          o.value = !1, s(!1), t("closed");
        }
      });
    }, a = () => {
      t("cancel"), e.cancelAutoClose && (o.value = !1, l("cancel"));
    }, i = () => {
      t("ok"), e.okAutoClose && l("ok");
    }, r = () => {
      e.closeOnClickOverlay && l("");
    }, f = S(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: l,
      onCancel: a,
      onOk: i,
      showPopup: o,
      onClickOverlay: r,
      contentStyle: f,
      translate: n
    };
  }
}), h1 = {
  key: 0,
  class: "nut-dialog__header"
}, v1 = ["innerHTML"];
function g1(e, t, n, o, s, l) {
  const a = X("nut-button"), i = X("nut-popup");
  return c(), J(i, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.showPopup = r),
    teleport: e.teleport,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    "pop-class": e.popClass,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    style: V(e.popStyle),
    round: "",
    "z-index": e.zIndex,
    onClickOverlay: e.onClickOverlay,
    onClickCloseIcon: e.closed
  }, {
    default: ne(() => [
      g("view", {
        class: D(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (c(), d("view", h1, [
          e.$slots.header ? _(e.$slots, "header", { key: 0 }) : (c(), d(Z, { key: 1 }, [
            ge(L(e.title), 1)
          ], 64))
        ])) : N("", !0),
        g("view", {
          class: "nut-dialog__content",
          style: V(e.contentStyle)
        }, [
          e.$slots.default ? _(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (c(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, v1)) : (c(), J(ze(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (c(), d("view", {
          key: 1,
          class: D(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? _(e.$slots, "footer", { key: 0 }) : (c(), d(Z, { key: 1 }, [
            e.noCancelBtn ? N("", !0) : (c(), J(a, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: ne(() => [
                ge(L(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? N("", !0) : (c(), J(a, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: ne(() => [
                ge(L(e.okText || e.translate("confirm")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 64))
        ], 2))
      ], 2)
    ]),
    _: 3
  }, 8, ["visible", "teleport", "lock-scroll", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const gn = /* @__PURE__ */ le(m1, [["render", g1]]);
class y1 {
  constructor() {
    H(this, "title", "");
    H(this, "content", "");
    H(this, "cancelText", "");
    H(this, "okText", "");
    H(this, "textAlign", "center");
    H(this, "customClass", "");
    H(this, "overlayStyle", {});
    H(this, "overlayClass", "");
    H(this, "popStyle", {});
    H(this, "popClass", "");
    H(this, "teleport", "body");
    H(this, "id", (/* @__PURE__ */ new Date()).getTime());
    H(this, "footerDirection", "horizontal");
    // 使用横纵方向 可选值 horizontal、vertical
    // function
    H(this, "onUpdate");
    H(this, "onOk");
    H(this, "onCancel");
    H(this, "onOpened");
    H(this, "onClosed");
    H(this, "beforeClose");
    H(this, "visible", !0);
    H(this, "noFooter", !1);
    H(this, "noOkBtn", !1);
    H(this, "noCancelBtn", !1);
    H(this, "okBtnDisabled", !1);
    H(this, "closeOnPopstate", !1);
    H(this, "closeOnClickOverlay", !0);
    H(this, "lockScroll", !0);
    H(this, "cancelAutoClose", !0);
    H(this, "okAutoClose", !0);
  }
}
class b1 {
  constructor(t) {
    H(this, "options", new y1());
    H(this, "instance");
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "dialog",
      components: [Ae, Xe, ht],
      wrapper: (s, l) => ({
        setup() {
          return n.onUpdate = (a) => {
            a === !1 && _e(() => {
              o();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${l.id}`, () => Te(gn, n);
        }
      })
    });
  }
}
const $1 = function(e) {
  return new b1(e);
};
$1.install = (e) => {
  e.use(gn);
};
const { create: w1 } = te("infinite-loading"), k1 = "NutInfiniteLoading", C1 = w1({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadTxt: {
      type: String,
      default: ""
    },
    loadMoreTxt: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scrollChange", "loadMore", "update:modelValue"],
  components: {
    Loading: st
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(k1), s = z(), l = po(s), a = me({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), i = (b) => b ? b.offsetTop + i(b.offsetParent) : 0, r = () => {
      let b = 0, w = 0, C = "down";
      if (l.value == window) {
        const u = Zn();
        s.value && (b = i(s.value) + s.value.offsetHeight - u - window.innerHeight), w = u;
      } else {
        const { scrollHeight: u, clientHeight: m, scrollTop: h } = l.value;
        b = u - m - h, w = h;
      }
      return a.beforeScrollTop > w ? C = "up" : C = "down", a.beforeScrollTop = w, t("scrollChange", w), b <= e.threshold && C == "down";
    }, f = () => {
      Oe(() => {
        if (!r() || !e.hasMore || a.isInfiniting)
          return !1;
        a.isInfiniting = !0, t("update:modelValue", !0), _e(() => t("loadMore"));
      });
    }, p = () => {
      l.value && l.value.addEventListener("scroll", f, e.useCapture);
    }, y = () => {
      l.value && l.value.removeEventListener("scroll", f, e.useCapture);
    };
    $e(() => {
      p();
    }), Ue(() => {
      y();
    });
    const v = z(!1);
    return Tt(() => {
      v.value && (v.value = !1, p());
    }), _t(() => {
      v.value = !0, y();
    }), Q(
      () => e.modelValue,
      (b) => {
        b || (a.isInfiniting = !1);
      }
    ), pe(G({
      scroller: s
    }, we(a)), {
      translate: o,
      slots: n
    });
  }
}), S1 = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, T1 = { class: "nut-infinite__container" }, _1 = { class: "nut-infinite__bottom" }, N1 = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, D1 = { class: "nut-infinite__bottom-box__text" }, I1 = { class: "nut-infinite__bottom-tips" };
function B1(e, t, n, o, s, l) {
  const a = X("Loading");
  return c(), d("view", S1, [
    g("view", T1, [
      _(e.$slots, "default")
    ]),
    g("view", _1, [
      e.isInfiniting ? (c(), d("view", N1, [
        _(e.$slots, "loading", {}, () => [
          _(e.$slots, "loading-icon", {}, () => [
            ee(a, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          g("view", D1, L(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : _(e.$slots, "finished", { key: 1 }, () => [
        g("view", I1, L(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const M1 = /* @__PURE__ */ le(C1, [["render", B1]]), { create: L1 } = te("pull-refresh"), P1 = "NutPullRefresh", A1 = L1({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    pullingTxt: {
      type: String,
      default: ""
    },
    loosingTxt: {
      type: String,
      default: ""
    },
    loadingTxt: {
      type: String,
      default: ""
    },
    completeTxt: {
      type: String,
      default: ""
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },
    pullDistance: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 0.3
    },
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "refresh", "update:modelValue"],
  components: { Loading: st },
  setup(e, { emit: t, slots: n }) {
    const o = Se(P1), s = Qe(), l = z(), a = po(l), i = me({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), r = S(() => {
      switch (i.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || o("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || o("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || o("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || o("complete");
      }
      return "";
    }), f = S(() => ({
      transitionDuration: `${e.duration}s`,
      transform: i.distance ? `translate3d(0,${i.distance}px, 0)` : ""
    })), p = S(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Be(e.headHeight)), h;
    }), y = (h) => {
      const $ = +(e.pullDistance || e.headHeight);
      let P = h;
      return h > $ && (h < $ * 2 ? P = (h + $) / 2 : P = $ + h / 4), Math.round(P);
    }, v = (h, $, P) => {
      const A = +(e.pullDistance || e.headHeight);
      i.distance = h, $ ? i.status = "loading" : P ? i.status = "complete" : h === 0 ? i.status = "normal" : h < A ? i.status = "pulling" : i.status = "loosing", t("change", { status: i.status, distance: h });
    }, b = () => i.status !== "loading" && i.status !== "complete", w = () => a.value == window ? Zn() == 0 : a.value && a.value.scrollTop == 0, C = (h) => {
      b() && (w() ? (s.start(h), i.isPullRefresh = !0) : (i.distance = 0, i.isPullRefresh = !1));
    }, u = (h) => {
      if (b()) {
        s.move(h);
        const { deltaY: $ } = s;
        s.isVertical() && $.value > 0 && i.isPullRefresh && (h.preventDefault(), v(y($.value)));
      }
    }, m = () => {
      i.isPullRefresh && b() && s.deltaY.value && (i.status === "loosing" ? (v(+e.headHeight, !0), t("update:modelValue", !0), _e(() => t("refresh"))) : v(0)), setTimeout(() => {
        s.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? v(+e.headHeight, !0) : (e.completeDuration === 0 && v(0), v(+e.headHeight, !1, !0), setTimeout(() => {
          v(0);
        }, e.completeDuration));
      }
    ), pe(G({
      scroller: l
    }, we(i)), {
      touchStart: C,
      touchMove: u,
      touchEnd: m,
      getStyle: f,
      translate: o,
      slots: n,
      getHeightStyle: p,
      getPullStatus: r
    });
  }
}), E1 = { class: "nut-pull-refresh-container-topbox-text" };
function z1(e, t, n, o, s, l) {
  const a = X("Loading");
  return c(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
    onTouchmove: t[1] || (t[1] = (...i) => e.touchMove && e.touchMove(...i)),
    onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
  }, [
    g("div", {
      class: "nut-pull-refresh-container",
      style: V(e.getStyle)
    }, [
      g("div", {
        class: "nut-pull-refresh-container-topbox",
        style: V(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (c(), J(a, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        g("div", E1, L(e.getPullStatus), 1),
        e.status == "pulling" ? _(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? _(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? _(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? _(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      _(e.$slots, "default")
    ], 4)
  ], 544);
}
const V1 = /* @__PURE__ */ le(A1, [["render", z1]]), { create: H1 } = te("notify"), O1 = H1({
  components: {
    NutPopup: Ae
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "top"
    },
    teleportDisable: {
      type: Boolean,
      default: !0
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = () => {
      e.onClick && e.onClick();
    };
    let o = null;
    const s = () => {
      o && clearTimeout(o), o = null;
    }, l = () => {
      t("update:visible", !1);
    }, a = z(!1), i = Q(
      () => e.visible,
      (f) => {
        a.value = e.visible;
        const p = e.duration;
        f && p && (o = setTimeout(() => {
          l();
        }, p));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      s(), i && i(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: a };
  }
});
function R1(e, t, n, o, s, l) {
  const a = X("nut-popup");
  return c(), J(a, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (i) => e.isShowPopup = i),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      g("div", {
        class: D(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: V({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...i) => e.clickCover && e.clickCover(...i))
      }, [
        e.$slots.default ? _(e.$slots, "default", { key: 0 }) : (c(), d(Z, { key: 1 }, [
          ge(L(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Ht = /* @__PURE__ */ le(O1, [["render", R1]]), Gt = {
  type: "base",
  visible: !0,
  msg: "",
  color: void 0,
  background: void 0,
  duration: 3e3,
  className: "",
  onClose: Function,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: "",
  unmount: new Function()
};
let it = [], wt = [];
const Yo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    wt = wt.filter((n) => n.id !== e), it = it.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    it.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), wt = [], it = [];
}, F1 = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = wt.find((s) => s.id === e.id);
    n ? e = G(G(G({}, Gt), n), e) : e = G(G({}, Gt), e);
    const o = ee(Ht, e);
    return xt(o, t), o.component.data;
  }
}, yt = (e) => {
  e.unmount = Yo;
  let t;
  if (e.id) {
    if (t = e.id, it.find((l) => l === e.id))
      return F1(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Gt), e), e.id = t, it.push(e.id), wt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const s = ee({
    setup() {
      return e.teleport = `#notify-${e.id}`, $e(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => Te(Ht, e);
    }
  });
  document.body.appendChild(n), xt(s, n);
}, bt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, u3 = {
  text(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Yo();
  },
  install(e) {
    e.use(Ht);
  }
}, W1 = { class: "nut-switch-button" }, Ko = /* @__PURE__ */ ve({
  name: "NutSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    activeText: { default: "" },
    inactiveText: { default: "" },
    activeValue: { type: [String, Number, Boolean], default: !0 },
    inactiveValue: { type: [String, Number, Boolean], default: !1 },
    loading: { type: Boolean, default: !1 },
    disable: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = S(() => n.disabled || n.disable), l = qe(s), a = S(() => n.modelValue === n.activeValue), i = S(() => {
      const y = "nut-switch";
      return {
        [y]: !0,
        [a.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${y}-disabled`]: l.value,
        [`${y}-base`]: !0
      };
    }), r = S(() => ({
      backgroundColor: a.value ? n.activeColor : n.inactiveColor
    }));
    let f = "";
    const p = (y) => {
      if (n.loading || l.value)
        return;
      const v = a.value ? n.inactiveValue : n.activeValue;
      f = "click", o("update:modelValue", v), o("change", v, y);
    };
    return Q(
      () => n.modelValue,
      (y) => {
        f == "click" ? f = "" : o("change", y);
      }
    ), (y, v) => (c(), d("view", {
      class: D(i.value),
      style: V(r.value),
      onClick: p
    }, [
      g("view", W1, [
        y.loading ? _(y.$slots, "icon", { key: 0 }, () => [
          ee(ce(Na), {
            name: "loading",
            color: y.activeColor
          }, null, 8, ["color"])
        ]) : N("", !0),
        y.activeText ? (c(), d(Z, { key: 1 }, [
          Ie(g("view", { class: "nut-switch-label open" }, L(y.activeText), 513), [
            [Me, a.value]
          ]),
          Ie(g("view", { class: "nut-switch-label close" }, L(y.inactiveText), 513), [
            [Me, !a.value]
          ])
        ], 64)) : N("", !0)
      ])
    ], 6));
  }
});
be(Ko);
const { create: Y1 } = te("toast"), K1 = Y1({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: {
      type: Object,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
    },
    coverColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    let n;
    const o = me({
      mounted: !1
    });
    $e(() => {
      o.mounted = !0;
    });
    const s = () => {
      n && (clearTimeout(n), n = null);
    }, l = () => {
      o.mounted = !1;
    }, a = () => {
      s(), e.duration && (n = window.setTimeout(() => {
        l();
      }, e.duration));
    }, i = () => {
      e.closeOnClickOverlay && (l(), t("close"));
    };
    e.duration && a(), Q(
      () => e.duration,
      (v) => {
        v && a();
      }
    );
    const r = S(() => e.type !== "text" ? !0 : e.icon !== null), f = S(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": r.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), p = S(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: o,
      hide: l,
      clickCover: i,
      hasIcon: r,
      toastBodyClass: f,
      toastIconWrapperClass: p,
      onAfterLeave: () => {
        var v;
        s(), (v = e.unmount) == null || v.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: nt
    };
  }
}), j1 = {
  key: 1,
  class: "nut-toast-title"
}, U1 = ["innerHTML"];
function X1(e, t, n, o, s, l) {
  return c(), J(Jt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: ne(() => [
      Ie(g("view", {
        class: D(e.toastBodyClass),
        style: V({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...a) => e.clickCover && e.clickCover(...a))
      }, [
        g("view", {
          class: "nut-toast-inner",
          style: V({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (c(), d("view", {
            key: 0,
            class: D(e.toastIconWrapperClass)
          }, [
            (c(), J(ze(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (c(), d("div", j1, L(e.title), 1)) : N("", !0),
          g("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, U1)
        ], 4)
      ], 6), [
        [Me, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ot = /* @__PURE__ */ le(K1, [["render", X1]]), Zt = {
  msg: "",
  id: "",
  duration: 2e3,
  // 显示时间(毫秒)
  center: !0,
  // 未实现
  type: "text",
  title: "",
  customClass: "",
  bottom: "30px",
  size: "base",
  iconSize: "20",
  icon: null,
  textAlignCenter: !0,
  // 未实现
  loadingRotate: !0,
  // 未实现
  bgColor: "",
  onClose: null,
  // 未实现
  unmount: null,
  cover: !1,
  // 透明遮罩层 // 未实现
  coverColor: "",
  // 未实现
  closeOnClickOverlay: !1
  // 未实现
};
let rt = [], kt = [];
const jo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    kt = kt.filter((n) => n.id !== e), rt = rt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    rt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), kt = [], rt = [];
}, q1 = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = kt.find((s) => s.id === e.id);
    n ? e = G(G(G({}, Zt), n), e) : e = G(G({}, Zt), e);
    const o = ee(Ot, e);
    return xt(o, t), Uo;
  }
}, $t = (e) => {
  e.unmount = jo;
  let t;
  if (e.id) {
    if (t = e.id, rt.find((n) => n === e.id))
      return q1(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Zt), e), e.id = t, rt.push(e.id), kt.push(e), rn(e, {
    wrapper: Ot
  }), Uo;
}, Lt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Uo = {
  text(e, t = {}) {
    return Lt(e), $t(pe(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: Qi }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: oo }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: lo }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return $t(pe(G({
      icon: st
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    jo(e);
  },
  install(e) {
    e.use(Ot);
  }
}, Xo = Symbol("nut-audio"), { create: G1 } = te("audio"), Z1 = G1({
  props: {
    url: {
      type: String,
      default: ""
    },
    // 静音
    muted: {
      type: Boolean,
      default: !1
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: !1
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: !1
    },
    // 是否预加载音频
    preload: {
      type: String,
      default: "auto"
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default: 0
    },
    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default: "progress"
    }
  },
  components: {
    Service: Wi,
    NutRange: Po
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), s = me({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: e.muted,
      playing: e.autoplay,
      handPlaying: !1
    });
    $e(() => {
      var C = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let u = 0; u < C.length; u++)
          document.addEventListener(C[u], () => {
            document.hidden ? o.value.pause() : s.playing && setTimeout(() => {
              o.value.play();
            }, 200);
          });
      } catch (u) {
        console.log(u.message);
      }
    });
    const l = (C) => {
      const u = o.value;
      e.autoplay && u && u.paused && u.play(), s.second = u.duration, s.duration = w(u.duration), t("canPlay", C);
    }, a = (C) => {
      s.currentTime = parseInt(C.target.currentTime);
    }, i = () => {
      s.currentTime > 0 && s.currentTime--, o.value.currentTime = s.currentTime, t("fastBack", s.currentTime);
    }, r = () => {
      const C = o.value;
      s.playing ? (C.pause(), s.handPlaying = !1) : (C.play(), s.handPlaying = !0), s.playing = !s.playing, t("play", s.playing);
    }, f = () => {
      s.currentTime++, o.value.currentTime = s.currentTime, t("forward", s.currentTime);
    }, p = (C) => {
      s.currentDuration = w(C), s.percent = C / s.second * 100;
    }, y = () => {
      s.playing = !1, t("ended");
    }, v = (C) => {
      const u = o.value;
      u.currentTime = s.second * C / 100, t("changeProgress", u.currentTime);
    }, b = () => {
      s.hanMuted = !s.hanMuted, t("mute", s.hanMuted);
    }, w = (C) => {
      if (!C)
        return "00:00:00";
      let u = parseInt(C), m = Math.floor(u / 3600), h = Math.floor((u - m * 3600) / 60), $ = u - m * 3600 - h * 60, P = "";
      return P += ("0" + m.toString()).slice(-2) + ":", P += ("0" + h.toString()).slice(-2) + ":", P += ("0" + $.toString()).slice(-2), P;
    };
    return Q(
      () => s.currentTime,
      (C) => {
        p(C);
      }
    ), Re(Xo, {
      children: [],
      props: e,
      audioData: s,
      handleMute: b,
      forward: f,
      fastBack: i,
      changeStatus: r
    }), pe(G(G({}, we(e)), we(s)), {
      audioRef: o,
      fastBack: i,
      forward: f,
      changeStatus: r,
      progressChange: v,
      audioEnd: y,
      onTimeupdate: a,
      handleMute: b,
      onCanplay: l,
      slots: n
    });
  }
}), J1 = { class: "nut-audio" }, Q1 = {
  key: 0,
  class: "nut-audio__progress"
}, x1 = { class: "nut-audio__time" }, em = { class: "nut-audio__bar" }, tm = /* @__PURE__ */ g("div", { class: "nut-audio__button--custom" }, null, -1), nm = { class: "nut-audio__time" }, om = {
  key: 1,
  class: "nut-audio__icon"
}, lm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function sm(e, t, n, o, s, l) {
  const a = X("nut-range"), i = X("Service");
  return c(), d("div", J1, [
    e.type == "progress" ? (c(), d("div", Q1, [
      g("div", x1, L(e.currentDuration), 1),
      g("div", em, [
        ee(a, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.percent = r),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            tm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      g("div", nm, L(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (c(), d("div", om, [
      g("div", {
        class: D(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
      }, [
        e.playing ? (c(), J(i, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), J(i, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (c(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? _(e.$slots, "default", { key: 3 }) : N("", !0),
    g("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: e.type == "controls",
      src: e.url,
      preload: e.preload,
      autoplay: e.autoplay,
      loop: e.loop,
      muted: e.hanMuted,
      onTimeupdate: t[3] || (t[3] = (...r) => e.onTimeupdate && e.onTimeupdate(...r)),
      onCanplay: t[4] || (t[4] = (...r) => e.onCanplay && e.onCanplay(...r)),
      onEnded: t[5] || (t[5] = (...r) => e.audioEnd && e.audioEnd(...r))
    }, null, 40, lm)
  ]);
}
const am = /* @__PURE__ */ le(Z1, [["render", sm]]), { create: im } = te("audio-operate"), rm = "NutAudioOperate", um = im({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: Xe
  },
  emits: ["click"],
  setup(e) {
    const t = Se(rm), n = Ve(Xo), o = me(n), s = z(St().default);
    return pe(G(G({}, we(e)), we(o)), { customSlot: s, translate: t });
  }
}), cm = { class: "nut-audio-operate" };
function dm(e, t, n, o, s, l) {
  const a = X("nut-button");
  return c(), d("div", cm, [
    e.type == "back" ? (c(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...i) => e.fastBack && e.fastBack(...i))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(L(e.translate("back")), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "play" ? (c(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(L(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "forward" ? (c(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...i) => e.forward && e.forward(...i))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge("快进")
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "mute" ? (c(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...i) => e.handleMute && e.handleMute(...i))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(L(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      _(e.$slots, "default")
    ])) : N("", !0)
  ]);
}
const fm = /* @__PURE__ */ le(um, [["render", dm]]), qo = Symbol("nut-avatar"), { create: pm } = te("avatar"), mm = pm({
  props: {
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup(e) {
    const { size: t, shape: n, bgColor: o, color: s } = we(e), l = ["large", "normal", "small"], a = Ve(qo, null), i = z(null), r = S(() => {
      var y, v;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = a == null ? void 0 : a.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((v = a == null ? void 0 : a.props) == null ? void 0 : v.shape) || "round"}`]: !0
      };
    }), f = S(() => {
      var p, y;
      return {
        width: t.value in l ? "" : `${t.value}px`,
        height: t.value in l ? "" : `${t.value}px`,
        backgroundColor: `${o.value}`,
        color: `${s.value}`,
        marginLeft: (p = a == null ? void 0 : a.props) != null && p.span ? `${(y = a == null ? void 0 : a.props) == null ? void 0 : y.span}px` : ""
      };
    });
    return {
      classes: r,
      styles: f,
      avatarRef: i
    };
  }
});
function hm(e, t, n, o, s, l) {
  return c(), d("view", {
    ref: "avatarRef",
    style: V(e.styles),
    class: D(e.classes)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const yn = /* @__PURE__ */ le(mm, [["render", hm]]), { create: vm } = te("avatar-group"), gm = vm({
  components: {
    NutAvatar: yn
  },
  props: {
    maxContent: {
      type: String,
      default: ""
    },
    maxCount: {
      type: [Number, String],
      default: ""
    },
    maxBgColor: {
      type: String,
      default: "#eee"
    },
    maxColor: {
      type: String,
      default: "#666"
    },
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    span: {
      type: [String, Number],
      default: "-8"
    },
    zIndex: {
      type: String,
      default: "left"
    }
  },
  setup(e) {
    const t = z(null), n = z(99), o = z(), s = S(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), l = (i) => {
      let r = 0;
      i && i.$el && (i = i.$el);
      const f = i.children;
      if (e.zIndex === "right")
        for (let p = 0; p < Number(e.maxCount); p++) {
          const y = f[p];
          y.style.zIndex = `${99 - p}`;
        }
      for (let p = Number(e.maxCount); p < f.length; p++) {
        const y = f[p];
        y.className.includes("avater-fold") || (y.style.display = "none", r++);
      }
      n.value = r;
    }, a = (i) => {
      const r = { attributes: !1, childList: !0, subtree: !0 }, f = function(y) {
        let v = !1;
        for (let b of y)
          if (b.type === "childList") {
            v = !0;
            break;
          }
        v && l(i);
      }, p = new MutationObserver(f);
      return p.observe(i, r), p;
    };
    return $e(() => {
      e.maxCount && _e(() => {
        let i = ce(t);
        i && i.$el && (i = i.$el), l(i), o.value = a(i);
      });
    }), Ue(() => {
      var i;
      (i = o.value) == null || i.disconnect();
    }), Re(qo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: s,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function ym(e, t, n, o, s, l) {
  const a = X("nut-avatar");
  return c(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: V(e.styles)
  }, [
    _(e.$slots, "default"),
    e.foldCount > 0 ? (c(), J(a, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: V({ magrinLeft: `${e.span}px` })
    }, {
      default: ne(() => [
        ge(L(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : N("", !0)
  ], 4);
}
const bm = /* @__PURE__ */ le(gm, [["render", ym]]);
var At = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(At || {});
function $m(e, t, n) {
  let o = 0, s = e.length - 1, l = null;
  for (; o <= s; ) {
    l = Math.floor((o + s) / 2);
    const a = e[l], i = n(a, t);
    if (i === 1)
      return l;
    i === 2 ? o = l + 1 : i === 3 && (s = l - 1);
  }
  return l;
}
const { create: wm } = te("list"), km = wm({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ["scrollUp", "scrollDown", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, o = z(null), s = z(null), l = z(null), a = me({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), i = S(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), r = S(() => Math.ceil(i.value / e.height)), f = S(() => Math.min(a.originStartIndex + r.value + e.bufferSize, a.list.length)), p = S(() => a.list.slice(a.start, f.value)), y = () => {
      if (l.value)
        return `translate3d(0, ${a.start >= 1 ? a.cachePositions[a.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      a.cachePositions = [];
      for (let m = 0; m < a.list.length; ++m)
        a.cachePositions[m] = {
          index: m,
          height: e.height,
          top: m * e.height,
          bottom: (m + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, b = () => {
      let m = l.value.childNodes;
      m = Array.from(m).filter((B) => B.nodeType === 1);
      const h = m[0];
      m.forEach((B, M) => {
        if (!B)
          return;
        const k = Ye(B), { height: E } = k, j = a.cachePositions[M + a.start].height - E;
        j && (a.cachePositions[M + a.start].bottom -= j, a.cachePositions[M + a.start].height = E, a.cachePositions[M + a.start].dValue = j);
      });
      let $ = 0;
      h && ($ = a.start);
      const P = a.cachePositions.length;
      let A = a.cachePositions[$].dValue;
      a.cachePositions[$].dValue = 0;
      for (let B = $ + 1; B < P; ++B) {
        const M = a.cachePositions[B];
        a.cachePositions[B].top = a.cachePositions[B - 1].bottom, a.cachePositions[B].bottom = a.cachePositions[B].bottom - A, M.dValue !== 0 && (A += M.dValue, M.dValue = 0);
      }
      const I = a.cachePositions[P - 1].bottom;
      a.phantomHeight = I;
    }, w = (m = 0) => {
      let h = $m(
        a.cachePositions,
        m,
        (P, A) => {
          const I = P.bottom;
          return I === A ? At.eq : I < A ? At.lt : At.gt;
        }
      );
      return a.cachePositions[h].bottom < m && (h += 1), h;
    }, C = () => {
      a.originStartIndex = 0, a.start = 0, a.scrollTop = 0, o.value.scrollTop = 0, v(), a.phantomHeight = e.height * a.list.length;
    }, u = () => {
      var P;
      const m = (P = o.value) == null ? void 0 : P.scrollTop, { originStartIndex: h } = a, $ = w(m);
      $ !== h && (a.originStartIndex = $, a.start = Math.max(a.originStartIndex - e.bufferSize, 0), f.value >= a.list.length - 1 && t("scrollBottom")), t(m > a.scrollTop ? "scrollUp" : "scrollDown", m), a.scrollTop = m;
    };
    return v(), Q(
      () => e.listData,
      (m) => {
        if (a.list = m.slice(), a.list.length === m.length)
          v(), b();
        else {
          C();
          return;
        }
      }
    ), Q(
      () => a.start,
      () => {
        l.value && a.list.length > 0 && b();
      }
    ), pe(G({}, we(a)), {
      list: o,
      phantom: s,
      actualContent: l,
      getTransform: y,
      visibleData: p,
      getContainerHeight: i,
      handleScrollEvent: u
    });
  }
});
function Cm(e, t, n, o, s, l) {
  return c(), d("div", {
    ref: "list",
    class: "nut-list",
    style: V({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...a) => e.handleScrollEvent && e.handleScrollEvent(...a))
  }, [
    g("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: V({ height: e.phantomHeight + "px" })
    }, null, 4),
    g("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: V({ transform: e.getTransform() })
    }, [
      (c(!0), d(Z, null, re(e.visibleData, (a, i) => (c(), d("div", {
        key: a,
        class: "nut-list-item"
      }, [
        _(e.$slots, "default", {
          item: a,
          index: i + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Sm = /* @__PURE__ */ le(km, [["render", Cm]]), Tm = { viewBox: "0 0 100 100" }, _m = ["id"], Nm = ["offset", "stop-color"], Dm = ["d", "stroke-width"], Im = ["d", "stroke", "stroke-linecap", "stroke-width"], Bm = { class: "nut-circle-progress__text" }, Go = /* @__PURE__ */ ve({
  name: "NutCircleProgress",
  __name: "circle-progress",
  props: {
    progress: { default: 0 },
    strokeWidth: { default: 5 },
    radius: { default: 50 },
    strokeLinecap: { default: "round" },
    color: { default: "#fa2c19" },
    pathColor: { default: "#d9d9d9" },
    clockwise: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = Math.random().toString(36).slice(-8), o = S(() => {
      const r = t.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${r} 0 90 a 45 45 0 1, ${r} 0 -90`;
    }), s = S(() => ut(t.color) ? `url(#${n})` : t.color), l = S(() => {
      let r = 283, f = r * Number(t.progress) / 100;
      return {
        stroke: ut(t.color) ? `url(#${n})` : t.color,
        strokeDasharray: `${f}px ${r}px`
      };
    }), a = S(() => ({
      stroke: t.pathColor
    })), i = S(() => {
      if (!ut(t.color))
        return;
      let r = t.color;
      const f = Object.keys(r).sort((y, v) => parseFloat(y) - parseFloat(v));
      let p = [];
      return f.map((y) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = y, v.value = r[y], p.push(v);
      }), p;
    });
    return (r, f) => (c(), d("div", {
      class: "nut-circle-progress",
      style: V({ height: Number(r.radius) * 2 + "px", width: Number(r.radius) * 2 + "px" })
    }, [
      (c(), d("svg", Tm, [
        g("defs", null, [
          g("linearGradient", {
            id: ce(n),
            x1: "100%",
            y1: "0%",
            x2: "0%",
            y2: "0%"
          }, [
            (c(!0), d(Z, null, re(i.value, (p, y) => (c(), d("stop", {
              key: y,
              offset: p.key,
              "stop-color": p.value
            }, null, 8, Nm))), 128))
          ], 8, _m)
        ]),
        g("path", {
          class: "nut-circle-progress__path",
          style: V(a.value),
          d: o.value,
          fill: "none",
          "stroke-width": r.strokeWidth
        }, " > ", 12, Dm),
        g("path", {
          class: "nut-circle-progress__hover",
          style: V(l.value),
          d: o.value,
          fill: "none",
          stroke: s.value,
          "stroke-linecap": r.strokeLinecap,
          "stroke-width": r.strokeWidth
        }, null, 12, Im)
      ])),
      g("div", Bm, [
        _(r.$slots, "default", {}, () => [
          g("div", null, L(r.progress) + "%", 1)
        ])
      ])
    ], 4));
  }
});
be(Go);
const { create: Mm } = te("noticebar"), Lm = Mm({
  props: {
    direction: {
      type: String,
      default: "across"
    },
    list: {
      type: Array,
      default: () => []
    },
    standTime: {
      type: Number,
      default: 1e3
    },
    complexAm: {
      type: Boolean,
      default: !1
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ""
    },
    closeMode: {
      type: Boolean,
      default: !1
    },
    wrapable: {
      type: Boolean,
      default: !1
    },
    leftIcon: { type: Boolean, default: !0 },
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: null
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function(e) {
      return e.item.props.style = e.style, e.item.key = e.key, Te(e.item);
    },
    Notice: oi,
    CircleClose: tn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), s = z(null), l = me({
      wrapWidth: 0,
      firstRound: !0,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: !0,
      animationClass: "",
      animate: !1,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: !1,
      isCanScroll: null,
      showNotica: !0
    }), a = S(() => l.isCanScroll == null ? e.wrapable : !l.isCanScroll && !e.wrapable), i = S(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": a.value,
      [l.animationClass]: !0
    })), r = S(() => {
      let B = {};
      return e.color && (B.color = e.color), e.background && (B.background = e.background), e.direction == "vertical" && (B.height = `${e.height}px`), B;
    }), f = S(() => ({
      animationDelay: (l.firstRound ? e.delay : 0) + "s",
      animationDuration: l.duration + "s",
      transform: `translateX(${l.firstRound ? 0 : l.wrapWidth + "px"})`
    })), p = S(() => {
      let B = {};
      if (e.complexAm)
        B = {
          transform: `translateY(${l.distance}px)`
        };
      else if (l.animate) {
        let M = ~~(e.height / e.speed / 4);
        B = {
          transition: `all ${M == 0 ? ~~(e.height / e.speed) : M}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return B;
    });
    Q(
      () => e.text,
      () => {
        y();
      }
    ), Q(
      () => e.list,
      (B) => {
        l.scrollList = [].concat(B);
      }
    );
    const y = () => {
      l.showNoticebar != !1 && setTimeout(() => {
        if (!o.value || !s.value)
          return;
        const B = o.value.getBoundingClientRect().width, M = s.value.getBoundingClientRect().width;
        l.isCanScroll = e.scrollable == null ? M > B : e.scrollable, l.isCanScroll ? (l.wrapWidth = B, l.offsetWidth = M, l.duration = M / e.speed, l.animationClass = "play") : l.animationClass = "";
      }, 0);
    }, v = (B) => {
      t("click", B);
    }, b = (B) => {
      e.closeMode && (l.showNoticebar = !e.closeMode), t("close", B);
    }, w = (B) => {
      l.firstRound = !1, t("acrossEnd", B), setTimeout(() => {
        l.duration = (l.offsetWidth + l.wrapWidth) / e.speed, l.animationClass = "play-infinite";
      }, 0);
    }, C = () => {
      u(), l.timer = setInterval(u, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, u = () => {
      l.animate = !0, setTimeout(
        () => {
          l.scrollList.push(l.scrollList[0]), l.scrollList.shift(), l.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, m = () => {
      l.timer = setInterval(
        () => {
          let B = 100;
          for (let M = 0; M < B; M++)
            h(M, !(M < B - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (B, M) => {
      setTimeout(() => {
        l.distance -= e.height / 100, M && (l.scrollList.push(l.scrollList[0]), l.scrollList.shift(), l.distance = 0);
      }, B * e.speed);
    }, $ = (B) => {
      t("click", B);
    }, P = () => {
      e.closeMode && (l.showNoticebar = !e.closeMode), t("close", l.scrollList[0]);
    };
    $e(() => {
      e.direction == "vertical" ? (n.default ? (A(), I()) : l.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? m() : C();
      }, e.standTime)) : y();
    });
    const A = () => {
      n.default && (l.scrollList = [].concat(n.default()[0].children));
    }, I = () => {
      setTimeout(() => {
        var B = new MutationObserver(() => {
          l.showNotica = !1, setTimeout(() => {
            l.showNotica = !0;
          }), A();
        });
        const M = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        M && B.observe(M, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return Tt(() => {
      l.keepAlive && (l.keepAlive = !1);
    }), _t(() => {
      l.keepAlive = !0, clearInterval(l.timer);
    }), Ue(() => {
      clearInterval(l.timer);
    }), pe(G({}, we(l)), {
      isEllipsis: a,
      barStyle: r,
      contentStyle: f,
      horseLampStyle: p,
      wrap: o,
      content: s,
      handleClick: v,
      onClickIcon: b,
      onAnimationEnd: w,
      go: $,
      handleClickIcon: P,
      slots: n,
      pxCheck: Be,
      wrapContentClass: i
    });
  }
}), Pm = { class: "nut-noticebar" }, Am = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Em = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, zm = { class: "showNotica" }, Vm = { class: "nut-noticebar-custom-item" }, Hm = ["onClick"];
function Om(e, t, n, o, s, l) {
  const a = X("Notice"), i = X("CircleClose"), r = X("ScrollItem");
  return c(), d("view", Pm, [
    e.direction == "across" ? Ie((c(), d("view", {
      key: 0,
      class: D(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: V(e.barStyle),
      onClick: t[3] || (t[3] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      e.leftIcon ? (c(), d("view", Am, [
        _(e.$slots, "left-icon", {}, () => [
          ee(a, { size: "16px" })
        ])
      ])) : N("", !0),
      g("view", Em, [
        g("view", {
          ref: "content",
          class: D(e.wrapContentClass),
          style: V(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...f) => e.onAnimationEnd && e.onAnimationEnd(...f)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...f) => e.onAnimationEnd && e.onAnimationEnd(...f))
        }, [
          _(e.$slots, "default", {}, () => [
            ge(L(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (c(), d("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...f) => e.onClickIcon && e.onClickIcon(...f), ["stop"]))
      }, [
        e.$slots["right-icon"] ? _(e.$slots, "right-icon", { key: 0 }) : (c(), J(i, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [Me, e.showNoticebar]
    ]) : N("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (c(), d("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: V(e.barStyle)
    }, [
      e.slots.default ? (c(), d(Z, { key: 0 }, [
        g("view", {
          class: "nut-noticebar__vertical-list",
          style: V(e.horseLampStyle)
        }, [
          g("div", zm, [
            (c(!0), d(Z, null, re(e.scrollList, (f, p) => (c(), J(r, {
              key: p,
              style: V({ height: e.height + "px", "line-height": e.height + "px" }),
              item: f
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        g("view", Vm, [
          _(e.$slots, "default")
        ])
      ], 64)) : (c(), d("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: V(e.horseLampStyle)
      }, [
        (c(!0), d(Z, null, re(e.scrollList, (f, p) => (c(), d("li", {
          key: p,
          class: "nut-noticebar__vertical-item",
          style: V({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (y) => e.go(f)
        }, L(f), 13, Hm))), 128))
      ], 4)),
      g("view", {
        class: "go",
        onClick: t[4] || (t[4] = (f) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        _(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), J(i, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const Rm = /* @__PURE__ */ le(Lm, [["render", Om]]), Fm = { class: "nut-empty" }, Wm = ["src"], Ym = { class: "nut-empty__description" }, Hn = "NutEmpty", Zo = /* @__PURE__ */ ve({
  name: Hn,
  __name: "empty",
  props: {
    image: { default: "empty" },
    imageSize: { default: "" },
    description: { default: "" }
  },
  setup(e) {
    const t = e, n = Se(Hn), o = {
      empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
      error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
      network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
    }, s = S(() => t.imageSize ? {
      width: Be(t.imageSize),
      height: Be(t.imageSize)
    } : {}), l = S(() => t.image.startsWith("https://") || t.image.startsWith("http://") || t.image.startsWith("//") ? t.image : o[t.image]), a = S(() => t.description || n("noData"));
    return (i, r) => (c(), d("view", Fm, [
      g("view", {
        class: "nut-empty__box",
        style: V(s.value)
      }, [
        _(i.$slots, "image", {}, () => [
          l.value ? (c(), d("img", {
            key: 0,
            class: "nut-empty__box--img",
            src: l.value
          }, null, 8, Wm)) : N("", !0)
        ])
      ], 4),
      _(i.$slots, "description", {}, () => [
        g("view", Ym, L(a.value), 1)
      ]),
      _(i.$slots, "default")
    ]));
  }
});
be(Zo);
function On(e, t) {
  let n = null, o = Date.now();
  return function(...s) {
    const l = Date.now(), a = t - (l - o);
    n && clearTimeout(n), a <= 0 ? (e(...s), o = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: Km } = te("video"), jm = "NutVideo", Um = Km({
  props: {
    source: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {
        autoplay: !1,
        // 是否自动播放
        volume: 0.5,
        poster: "",
        loop: !1,
        controls: !0,
        muted: !1,
        // 是否静音
        disabled: !1,
        // 禁止操作
        playsinline: !1,
        // 行内展示
        touchPlay: !1,
        preload: ""
      },
      required: !0
    },
    model: {
      type: String,
      default: ""
    }
  },
  components: {},
  emits: ["click", "play", "pause", "playend", "time"],
  setup(e, { emit: t, expose: n }) {
    const o = Se(jm), s = me({
      videoElm: null,
      initial: !0,
      // 控制封面的显示
      showToolbox: !1,
      // 控制控制器和标题的显示
      // 视频容器元素
      player: {
        $player: null,
        pos: null
      },
      // progress进度条元素
      progressBar: {
        progressElm: null,
        // 进度条DOM对象
        pos: null
      },
      // video控制显示设置
      videoSet: {
        loaded: 0,
        // 缓存长度
        displayTime: "00:00",
        // 进度时间
        totalTime: "00:00",
        // 总时间
        progress: {
          width: 0,
          // 进度条长度
          current: 0
          // 进度条当前位置
        }
      },
      state: {
        controlShow: !0,
        vol: 0.5,
        // 音量
        currentTime: 0,
        // 当前时间
        fullScreen: !1,
        playing: !1,
        // 是否正在播放
        isLoading: !1,
        isEnd: !1,
        isError: !1,
        isMuted: !1
      },
      showTouchMask: !1
    }), l = z(null), a = S(() => e.options.disabled);
    Q(
      () => e.source,
      (T) => {
        T.src && _e(() => {
          s.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (T) => {
        s.state.isMuted = T ? T.muted : !1;
      },
      { immediate: !0 }
    );
    const i = () => {
      s.videoElm = l.value, e.options.autoplay && setTimeout(() => {
        s.videoElm.play();
      }, 200), e.options.touchPlay && (s.showTouchMask = !0), e.options.playsinline && (s.videoElm.setAttribute("playsinline", e.options.playsinline), s.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), s.videoElm.setAttribute("x5-video-player-type", "h5-page"), s.videoElm.setAttribute("x5-video-player-fullscreen", !1)), C(), s.showToolbox ? r() : (s.videoElm.addEventListener("play", () => {
        s.state.playing = !0, t("play", s.videoElm);
      }), s.videoElm.addEventListener("pause", () => {
        s.state.playing = !1, t("pause", s.videoElm);
      }), s.videoElm.addEventListener("ended", b), s.videoElm.addEventListener("timeupdate", On(v, 1e3)));
    }, r = () => {
      const T = l.value, j = l.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      s.player.$player = T, s.progressBar.progressElm = j, s.progressBar.pos = j.getBoundingClientRect(), s.videoSet.progress.width = Math.round(j.getBoundingClientRect().width);
    }, f = () => {
      if (e.options.autoplay && e.options.disabled)
        return s.state.playing = !0, !1;
      if (s.state.playing = !s.state.playing, s.videoElm)
        if (s.state.playing)
          try {
            setTimeout(() => {
              s.videoElm.play();
            }, 200), s.videoElm.addEventListener("progress", () => {
              y();
            }), s.videoElm.addEventListener("timeupdate", On(v, 1e3)), s.videoElm.addEventListener("ended", b), t("play", s.videoElm);
          } catch (T) {
            w();
          }
        else
          s.videoElm.pause(), t("pause", s.videoElm);
    }, p = (T) => {
      var j = Math.floor(T / 3600);
      +j < 10 && (j = "0" + j);
      var K = Math.floor(T % 3600 / 60);
      +K < 10 && (K = "0" + K);
      var oe = Math.round(T % 3600 % 60);
      +oe < 10 && (oe = "0" + oe);
      var W = "";
      return j != 0 ? W = j + ":" + K + ":" + oe : W = K + ":" + oe, W;
    }, y = () => {
      s.videoSet.loaded && (s.videoSet.loaded = s.videoElm.buffered.end(0) / s.videoElm.duration * 100);
    }, v = () => {
      const T = s.videoElm.currentTime / s.videoElm.duration;
      s.videoSet.progress.current = Math.round(s.videoSet.progress.width * T), s.videoSet.totalTime = p(s.videoElm.duration), s.videoSet.displayTime = p(s.videoElm.currentTime), t("time", s.videoSet.displayTime, s.videoSet.totalTime);
    }, b = () => {
      s.state.playing = !1, s.state.isEnd = !0, s.videoSet.displayTime = "00:00", s.videoSet.progress.current = 0, s.videoElm.currentTime = 0, t("playend", s.videoElm);
    }, w = () => {
      s.state.isError = !0;
    }, C = () => {
      s.state.vol = e.options.volume;
    }, u = () => {
      s.state.isMuted = !s.state.isMuted, s.videoElm.muted = s.state.isMuted;
    }, m = () => {
    }, h = (T) => {
      let K = T.targetTouches[0].pageX - s.progressBar.pos.left;
      K <= 0 && (K = 0), K >= s.videoSet.progress.width && (K = s.videoSet.progress.width), s.videoSet.progress.current = K;
      let oe = s.videoSet.progress.current / s.videoSet.progress.width;
      s.videoElm.duration && P(oe, s.videoElm.duration);
    }, $ = (T) => {
      let K = T.changedTouches[0].pageX - s.progressBar.pos.left;
      s.videoSet.progress.current = K;
      let oe = K / s.videoSet.progress.width;
      s.videoElm.duration && P(oe, s.videoElm.duration);
    }, P = (T, j) => {
      s.videoElm.currentTime = Math.floor(T * j);
    }, A = () => {
      s.state.isError = !1, i();
    }, I = () => {
      s.state.fullScreen ? (s.state.fullScreen = !1, document.webkitCancelFullScreen()) : (s.state.fullScreen = !0, s.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: f,
      pause: () => {
        s.state.playing = !1, s.videoElm.pause(), t("pause", s.videoElm);
      },
      stop: () => {
        b(), s.videoElm.pause();
      },
      muted: () => {
        s.state.isMuted = !0, s.videoElm.muted = !0;
      },
      unmuted: () => {
        s.state.isMuted = !1, s.videoElm.muted = !1;
      }
    }), $e(() => {
      i();
    }), pe(G(G({
      root: l
    }, we(e)), we(s)), {
      handleError: w,
      isDisabled: a,
      play: f,
      handleMuted: u,
      touchSlidSrart: m,
      touchSlidMove: h,
      touchSlidEnd: $,
      retry: A,
      fullScreen: I,
      translate: o
    });
  }
}), Xm = {
  ref: "videocon",
  class: "nut-video"
}, qm = ["muted", "autoplay", "loop", "poster", "controls", "preload"], Gm = ["src", "type"], Zm = { class: "nut-video-controller__now" }, Jm = { class: "nut-video-controller__progress" }, Qm = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, xm = /* @__PURE__ */ g("div", { class: "nut-video-controller__ball-move" }, null, -1), eh = [
  xm
], th = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, nh = { class: "nut-video-controller__total" }, oh = { class: "nut-video-error" }, lh = { class: "nut-video-error-tip" };
function sh(e, t, n, o, s, l) {
  return c(), d("div", Xm, [
    g("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...a) => e.handleError && e.handleError(...a))
    }, [
      g("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, Gm)
    ], 40, qm),
    e.showToolbox && !e.isDisabled ? (c(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...a) => e.play && e.play(...a))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Ie((c(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...a) => e.play && e.play(...a))
    }, null, 512)), [
      [Me, !e.state.playing]
    ]) : N("", !0),
    Ie(g("div", {
      class: D(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      g("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...a) => e.play && e.play(...a))
      }),
      g("div", Zm, L(e.videoSet.displayTime), 1),
      g("div", Jm, [
        g("div", Qm, [
          g("div", {
            class: "buffered",
            style: V({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          g("div", {
            class: "nut-video-controller__ball",
            style: V({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((a) => e.touchSlidMove(a), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((a) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((a) => e.touchSlidEnd(a), ["stop"]))
          }, eh, 36),
          g("div", th, null, 512)
        ], 512)
      ]),
      g("div", nh, L(e.videoSet.totalTime), 1),
      g("div", {
        class: D(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...a) => e.handleMuted && e.handleMuted(...a))
      }, null, 2),
      g("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...a) => e.fullScreen && e.fullScreen(...a))
      })
    ], 2), [
      [Me, e.showToolbox && !e.isDisabled]
    ]),
    Ie(g("div", oh, [
      g("p", lh, L(e.translate("errorTip")), 1),
      g("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...a) => e.retry && e.retry(...a))
      }, L(e.translate("clickRetry")), 1)
    ], 512), [
      [Me, e.state.isError]
    ])
  ], 512);
}
const bn = /* @__PURE__ */ le(Um, [["render", sh]]), Jo = Symbol("nut-steps"), Qo = /* @__PURE__ */ ve({
  name: "NutSteps",
  __name: "steps",
  props: {
    direction: { default: "horizontal" },
    current: { default: "0" },
    progressDot: { type: Boolean, default: !1 }
  },
  emits: ["clickStep"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = S(() => {
      const i = "nut-steps";
      return {
        [i]: !0,
        [`${i}-${n.direction}`]: !0,
        [`${i}-dot`]: !!n.progressDot
      };
    }), { linkChildren: l } = pt(Jo);
    return l({ props: n, onEmit: (i) => {
      o("clickStep", i);
    } }), (i, r) => (c(), d("view", {
      class: D(s.value)
    }, [
      _(i.$slots, "default")
    ], 2));
  }
});
be(Qo);
const ah = { class: "nut-step-head" }, ih = /* @__PURE__ */ g("view", { class: "nut-step-line" }, null, -1), rh = { class: "nut-step-icon-inner" }, uh = {
  key: 0,
  class: "nut-step-inner"
}, ch = { class: "nut-step-main" }, dh = { class: "nut-step-title" }, fh = {
  key: 0,
  class: "nut-step-content"
}, ph = ["innerHTML"], xo = /* @__PURE__ */ ve({
  name: "NutStep",
  __name: "step",
  props: {
    title: { default: "" },
    content: { default: "" }
  },
  setup(e) {
    const { index: t, parent: n } = mt(Jo), o = S(() => {
      const i = t.value + 1;
      return i < +n.props.current ? "finish" : i === +n.props.current ? "process" : "wait";
    }), s = S(() => n.props.progressDot), l = S(() => {
      const i = "nut-step";
      return {
        [i]: !0,
        [`${i}-${o.value}`]: !0
      };
    }), a = () => {
      n.onEmit(t.value + 1);
    };
    return (i, r) => (c(), d("view", {
      class: D(l.value),
      onClick: a
    }, [
      g("view", ah, [
        ih,
        g("view", {
          class: D(["nut-step-icon", [s.value ? "" : "is-icon"]])
        }, [
          g("view", rh, [
            _(i.$slots, "icon", {}, () => [
              s.value ? N("", !0) : (c(), d("view", uh, L(ce(t) + 1), 1))
            ])
          ])
        ], 2)
      ]),
      g("view", ch, [
        g("view", dh, [
          _(i.$slots, "title", {}, () => [
            g("span", null, L(i.title), 1)
          ])
        ]),
        i.content || i.$slots.content ? (c(), d("view", fh, [
          _(i.$slots, "content", {}, () => [
            g("span", { innerHTML: i.content }, null, 8, ph)
          ])
        ])) : N("", !0)
      ])
    ], 2));
  }
});
be(xo);
const el = Symbol("nut-swiper"), { create: mh, componentName: Rn } = te("swiper"), hh = mh({
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    direction: {
      type: String,
      default: "horizontal"
      // horizontal and vertical
    },
    paginationVisible: {
      type: Boolean,
      default: !1
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    loop: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    autoPlay: {
      type: [Number, String],
      default: 0
    },
    initPage: {
      type: [Number, String],
      default: 0
    },
    touchable: {
      type: Boolean,
      default: !0
    },
    isPreventDefault: {
      type: Boolean,
      default: !0
    },
    isStopPropagation: {
      type: Boolean,
      default: !0
    },
    paginationUnselectedColor: {
      type: String,
      default: "#ddd"
    }
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const s = z(), l = me({
      active: 0,
      num: 0,
      rect: null,
      width: 0,
      height: 0,
      moving: !1,
      offset: 0,
      touchTime: 0,
      autoplayTimer: null,
      children: [],
      childrenVNode: [],
      style: {}
    }), a = Qe(), i = S(() => e.direction === "vertical"), r = S(() => {
      const R = Rn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: i.value
      };
    }), f = S(() => {
      const R = Rn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: i.value
      };
    }), p = S(() => i.value ? a.deltaY.value : a.deltaX.value), y = S(() => a.direction.value === e.direction), v = S(() => l.children.length), b = S(() => l[i.value ? "height" : "width"]), w = S(() => v.value * b.value), C = S(() => l.rect ? (i.value ? l.rect.height : l.rect.width) - b.value * v.value : 0), u = S(() => (l.active + v.value) % v.value), m = () => {
      let R = 0;
      R = l.offset, l.style = {
        transitionDuration: `${l.moving ? 0 : e.duration}ms`,
        transform: `translate${i.value ? "Y" : "X"}(${R}px)`,
        [i.value ? "height" : "width"]: `${b.value * v.value}px`,
        [i.value ? "width" : "height"]: `${i.value ? l.width : l.height}px`
      };
    }, h = (R) => {
      var ue;
      let x = [];
      const U = l.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((fe) => fe.children && Array.isArray(fe.children)), se.forEach((fe) => {
        x = x.concat(fe.children);
      }), !U)
        l.childrenVNode = x.slice(), R.proxy && l.children.push(R.proxy);
      else if (U > x.length)
        l.children = l.children.filter((fe) => R.proxy !== fe);
      else if (U < x.length) {
        for (let fe = 0; fe < U; fe++)
          if (x[fe].key !== l.childrenVNode[fe].key) {
            R.proxy && l.children.splice(fe, 0, R.proxy), R.vnode && l.childrenVNode.splice(fe, 0, R.vnode);
            break;
          }
        U !== x.length && (R.proxy && l.children.push(R.proxy), R.vnode && l.childrenVNode.push(R.vnode));
      } else
        l.childrenVNode = x.slice(), R.proxy && l.children.push(R.proxy);
    }, $ = (R, x = 0) => {
      let U = R * b.value;
      e.loop || (U = Math.min(U, -C.value));
      let se = x - U;
      return e.loop || (se = Ee(se, C.value, 0)), se;
    }, P = (R) => {
      const { active: x } = l;
      return R ? e.loop ? Ee(x + R, -1, v.value) : Ee(x + R, 0, v.value - 1) : x;
    }, A = ({ pace: R = 0, offset: x = 0, isEmit: U = !1 }) => {
      if (v.value <= 1)
        return;
      const { active: se } = l, ue = P(R), fe = $(ue, x);
      if (e.loop) {
        if (l.children[0] && fe !== C.value) {
          const Ce = fe < C.value;
          l.children[0].setOffset(Ce ? w.value : 0);
        }
        if (l.children[v.value - 1] && fe !== 0) {
          const Ce = fe > 0;
          l.children[v.value - 1].setOffset(Ce ? -w.value : 0);
        }
      }
      l.active = ue, l.offset = fe, U && se !== l.active && t("change", u.value), m();
    }, I = () => {
      l.moving = !0, l.active <= -1 && A({ pace: v.value }), l.active >= v.value && A({ pace: -v.value });
    }, B = () => {
      l.autoplayTimer && clearTimeout(l.autoplayTimer);
    }, M = (R) => {
      I(), a.reset(), Oe(() => {
        Oe(() => {
          l.moving = !1, A({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, k = () => {
      M(-1);
    }, E = () => {
      M(1);
    }, T = (R) => {
      I(), a.reset(), Oe(() => {
        l.moving = !1;
        let x;
        e.loop && v.value === R ? x = l.active === 0 ? 0 : R : x = R % v.value, A({
          pace: x - l.active,
          isEmit: !0
        });
      });
    }, j = () => {
      +e.autoPlay <= 0 || v.value <= 1 || (B(), l.autoplayTimer = setTimeout(() => {
        E(), j();
      }, Number(e.autoPlay)));
    }, K = (R = +e.initPage) => {
      B(), l.rect = s.value.getBoundingClientRect(), R = Math.min(v.value - 1, R), l.width = e.width ? +e.width : l.rect.width, l.height = e.height ? +e.height : l.rect.height, l.active = R, l.offset = $(l.active), l.moving = !0, m(), j();
    }, oe = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (a.start(R), l.touchTime = Date.now(), B(), I());
    }, W = (R) => {
      e.touchable && l.moving && (a.move(R), y.value && A({
        offset: p.value
      }));
    }, Y = () => {
      if (!e.touchable || !l.moving)
        return;
      const R = p.value / (Date.now() - l.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(p.value) > +(b.value / 2).toFixed(2)) && y.value) {
        let U = 0;
        const se = i.value ? a.offsetY.value : a.offsetX.value;
        e.loop ? U = se > 0 ? p.value > 0 ? -1 : 1 : 0 : U = -Math[p.value > 0 ? "ceil" : "floor"](p.value / b.value), A({
          pace: U,
          isEmit: !0
        });
      } else
        p.value && A({ pace: 0 });
      l.moving = !1, m(), j();
    };
    return Re(el, {
      props: e,
      size: b,
      relation: h
    }), o({
      prev: k,
      next: E,
      to: T
    }), _t(() => {
      B();
    }), Qt(() => {
      B();
    }), Q(
      () => e.initPage,
      (R) => {
        _e(() => {
          K(Number(R));
        });
      }
    ), Q(
      () => e.height,
      () => {
        _e(() => {
          K();
        });
      }
    ), Q(
      () => l.children.length,
      () => {
        _e(() => {
          K();
        });
      }
    ), Q(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? j() : B();
      }
    ), {
      state: l,
      classesInner: r,
      classesPagination: f,
      container: s,
      activePagination: u,
      onTouchStart: oe,
      onTouchMove: W,
      onTouchEnd: Y
    };
  }
});
function vh(e, t, n, o, s, l) {
  return c(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[1] || (t[1] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[2] || (t[2] = (...a) => e.onTouchEnd && e.onTouchEnd(...a)),
    onTouchcancel: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      class: D(e.classesInner),
      style: V(e.state.style)
    }, [
      _(e.$slots, "default")
    ], 6),
    _(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (c(), d("view", {
      key: 0,
      class: D(e.classesPagination)
    }, [
      (c(!0), d(Z, null, re(e.state.children.length, (a, i) => (c(), d("i", {
        key: i,
        style: V({
          backgroundColor: e.activePagination === i ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: D({ active: e.activePagination === i })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const $n = /* @__PURE__ */ le(hh, [["render", vh]]);
function gh(e) {
  const t = ot();
  t && Object.assign(t.proxy, e);
}
const { create: yh } = te("swiper-item"), bh = yh({
  setup() {
    const e = Ve(el);
    e.relation(ot());
    const t = me({
      offset: 0
    }), n = S(() => {
      const s = {}, l = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (s[l === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (s.transform = `translate${l === "horizontal" ? "X" : "Y"}(${t.offset}px)`), s;
    }), o = (s) => {
      t.offset = s;
    };
    return Ue(() => {
      e.relation(ot(), "unmount");
    }), gh({ setOffset: o }), {
      style: n
    };
  }
});
function $h(e, t, n, o, s, l) {
  return c(), d("view", {
    class: "nut-swiper-item",
    style: V(e.style)
  }, [
    _(e.$slots, "default")
  ], 4);
}
const wn = /* @__PURE__ */ le(bh, [["render", $h]]), wh = ["innerHTML"], kh = ["innerHTML"], Fn = "nut-price", Rt = /* @__PURE__ */ ve({
  name: "NutPrice",
  __name: "price",
  props: {
    price: { default: 0 },
    needSymbol: { type: Boolean, default: !0 },
    symbol: { default: "&yen;" },
    decimalDigits: { default: 2 },
    thousands: { type: Boolean, default: !1 },
    position: { default: "before" },
    size: { default: "normal" },
    strikeThrough: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = S(() => ({
      [Fn]: !0,
      [`${Fn}--strike`]: t.strikeThrough
    })), o = S(() => t.needSymbol ? t.symbol : ""), s = (i) => String(i).indexOf(".") > 0, l = (i) => (Number(i) == 0 && (i = 0), s(i) ? (i = Number(i).toFixed(t.decimalDigits), i = typeof i.split(".") == "string" ? i.split(".") : i.split(".")[0]) : i = i.toString(), t.thousands ? (i || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : i), a = (i) => {
      Number(i) == 0 && (i = 0), s(i) ? (i = Number(i).toFixed(t.decimalDigits), i = typeof i.split(".") == "string" ? 0 : i.split(".")[1] ? i.split(".")[1] : 0) : i = 0;
      const r = "0." + i, f = Number(r).toFixed(t.decimalDigits);
      return String(f).substring(2, f.length);
    };
    return (i, r) => (c(), d("view", {
      class: D(n.value)
    }, [
      i.needSymbol && i.position === "before" ? (c(), d("view", {
        key: 0,
        class: D(["nut-price--symbol", `nut-price--symbol-${i.size}`]),
        innerHTML: o.value
      }, null, 10, wh)) : N("", !0),
      g("view", {
        class: D(`nut-price--${i.size}`)
      }, L(l(i.price)), 3),
      i.decimalDigits != 0 ? (c(), d("view", {
        key: 1,
        class: D(`nut-price--decimal-${i.size}`)
      }, ".", 2)) : N("", !0),
      g("view", {
        class: D(`nut-price--decimal-${i.size}`)
      }, L(a(i.price)), 3),
      i.needSymbol && i.position === "after" ? (c(), d("view", {
        key: 2,
        class: D(["nut-price--symbol", `nut-price--symbol-${i.size}`]),
        innerHTML: o.value
      }, null, 10, kh)) : N("", !0)
    ], 2));
  }
});
be(Rt);
const tl = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Ch } = te("image-preview-item"), Sh = Ch({
  props: pe(G({}, tl), {
    image: {
      type: Object,
      default: () => ({})
    },
    video: {
      type: Object,
      default: () => ({})
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    contentClose: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "scale"],
  components: {
    NutVideo: bn,
    NutSwiperItem: wn
  },
  setup(e, { emit: t }) {
    const n = me({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), o = Qe(), s = S(() => {
      const { rootWidth: k, rootHeight: E } = e, T = E / k;
      return n.imageRatio > T;
    }), l = S(() => {
      const k = e.image;
      if (k && k.src) {
        const { scale: E, moveX: T, moveY: j, moving: K, zooming: oe } = n, W = {
          transitionDuration: oe || K ? "0s" : ".3s"
        };
        if (E !== 1) {
          const Y = T / E, R = j / E;
          W.transform = `scale(${E}, ${E}) translate(${Y}px, ${R}px)`;
        }
        return W;
      }
      return {};
    }), a = S(() => {
      if (n.imageRatio) {
        const { rootWidth: k, rootHeight: E } = e, T = s.value ? E / n.imageRatio : k;
        return Math.max(0, (n.scale * T - k) / 2);
      }
      return 0;
    }), i = S(() => {
      if (n.imageRatio) {
        const { rootWidth: k, rootHeight: E } = e, T = s.value ? E : k * n.imageRatio;
        return Math.max(0, (n.scale * T - E) / 2);
      }
      return 0;
    }), r = (k) => {
      const { naturalWidth: E, naturalHeight: T } = k.target;
      n.imageRatio = T / E;
    }, f = () => {
      p(1), n.moveX = 0, n.moveY = 0;
    }, p = (k) => {
      k = Ee(k, +e.minZoom, +e.maxZoom + 1), k !== n.scale && (n.scale = k, t("scale", {
        scale: k,
        index: e.initNo
      }));
    }, y = () => {
      const k = n.scale > 1 ? 1 : 2;
      p(k), n.moveX = 0, n.moveY = 0;
    }, v = (k) => Math.sqrt(vt(k[0].clientX - k[1].clientX, 2) + vt(k[0].clientY - k[1].clientY, 2));
    let b, w, C, u, m, h, $;
    const P = (k) => {
      const { touches: E } = k, { offsetX: T } = o;
      o.start(k), $ = E.length, b = n.moveX, w = n.moveY, h = Date.now(), n.moving = $ === 1 && n.scale !== 1, n.zooming = $ === 2 && !T.value, n.zooming && (C = n.scale, u = v(k.touches));
    }, A = (k) => {
      const { touches: E } = k;
      if (o.move(k), (n.moving || n.zooming) && ft(k, !0), n.moving) {
        const { deltaX: T, deltaY: j } = o, K = T.value + b, oe = j.value + w;
        n.moveX = Ee(K, -a.value, a.value), n.moveY = Ee(oe, -i.value, i.value);
      }
      if (n.zooming && E.length === 2) {
        const T = v(E), j = C * T / u;
        p(j);
      }
    }, I = () => {
      if ($ == 1 && e.video && e.video.source || $ > 1)
        return;
      const { offsetX: k, offsetY: E } = o, T = Date.now() - h, j = 250, K = 5;
      k.value < K && E.value < K && T < j && (m ? (clearTimeout(m), m = null, y()) : m = setTimeout(() => {
        e.contentClose && t("close"), m = null;
      }, j));
    }, B = (k) => {
      let E = !1;
      (n.moving || n.zooming) && (E = !0, n.moving && b === n.moveX && w === n.moveY && (E = !1), k.touches.length || (n.zooming && (n.moveX = Ee(n.moveX, -a.value, a.value), n.moveY = Ee(n.moveY, -i.value, i.value), n.zooming = !1), n.moving = !1, b = 0, w = 0, C = 1, n.scale < 1 && f(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ft(k, E), I(), o.reset();
    }, M = () => {
      t("close");
    };
    return Q(() => e.initNo, f), Q(
      () => e.show,
      (k) => {
        k || f();
      }
    ), pe(G({}, we(n)), {
      onTouchStart: P,
      onTouchMove: A,
      onTouchEnd: B,
      getDistance: v,
      imageStyle: l,
      imageLoad: r,
      closeSwiper: M
    });
  }
}), Th = ["src"];
function _h(e, t, n, o, s, l) {
  const a = X("nut-video"), i = X("nut-swiper-item");
  return c(), J(i, { onClick: e.closeSwiper }, {
    default: ne(() => [
      g("view", {
        style: V(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...r) => e.onTouchStart && e.onTouchStart(...r)),
        onTouchmove: t[2] || (t[2] = (...r) => e.onTouchMove && e.onTouchMove(...r)),
        onTouchend: t[3] || (t[3] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
        onTouchcancel: t[4] || (t[4] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
      }, [
        e.image && e.image.src ? (c(), d("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...r) => e.imageLoad && e.imageLoad(...r))
        }, null, 40, Th)) : N("", !0),
        e.video && e.video.source ? (c(), J(a, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : N("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const Nh = /* @__PURE__ */ le(Sh, [["render", _h]]), { create: Dh } = te("image-preview"), Ih = Dh({
  props: pe(G({}, tl), {
    images: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: !0 },
    paginationVisible: { type: Boolean, default: !1 },
    paginationColor: { type: String, default: "#fff" },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: "body" },
    teleportDisable: { ype: Boolean, default: !1 },
    closeable: {
      type: Boolean,
      default: !1
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
      // top-right  top-left
    },
    beforeClose: Function,
    isLoop: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "change"],
  components: {
    ImagePreviewItem: Nh,
    CircleClose: tn,
    NutPopup: Ae,
    NutSwiper: $n
  },
  setup(e, { emit: t }) {
    const n = z(), o = me({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), s = S(() => {
      const p = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${p}-right` : `${p}-left`}`;
    }), l = S(() => Xn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), a = (p) => {
      p !== o.active && (o.active = p, t("change", o.active));
    }, i = () => {
      en(e.beforeClose, {
        args: [o.active],
        done: () => r()
      });
    }, r = () => {
      o.showPop = !1, t("close");
    }, f = () => {
      if (n.value) {
        const p = Ye(n.value);
        o.rootHeight = p.height, o.rootWidth = p.width;
      }
    };
    return Q(
      () => e.show,
      (p) => {
        o.showPop = p, p && (a(e.initNo), _e(() => {
          f();
        }));
      }
    ), Q(
      () => e.initNo,
      (p) => {
        p != o.active && a(p);
      }
    ), $e(() => {
      a(e.initNo);
    }), pe(G({
      swipeRef: n
    }, we(o)), {
      onClose: i,
      mergeImages: l,
      setActive: a,
      iconClasses: s
    });
  }
}), Bh = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, Mh = {
  key: 0,
  class: "nut-image-preview-index"
};
function Lh(e, t, n, o, s, l) {
  const a = X("image-preview-item"), i = X("nut-swiper"), r = X("CircleClose"), f = X("nut-popup");
  return c(), J(f, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (p) => e.showPop = p),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: ne(() => [
      g("view", Bh, [
        e.showPop ? (c(), J(i, {
          key: 0,
          "auto-play": e.autoplay,
          class: "nut-image-preview-swiper",
          loop: e.isLoop,
          "is-prevent-default": !1,
          direction: "horizontal",
          "init-page": e.initNo,
          "pagination-visible": e.paginationVisible,
          "pagination-color": e.paginationColor,
          onChange: e.setActive
        }, {
          default: ne(() => [
            (c(!0), d(Z, null, re(e.mergeImages, (p, y) => (c(), J(a, {
              key: y,
              video: y < e.videos.length ? p : {},
              image: y >= e.videos.length ? p : {},
              "root-height": e.rootHeight,
              "root-width": e.rootWidth,
              show: e.showPop,
              "init-no": e.active + 1,
              "content-close": e.contentClose,
              "max-zoom": e.maxZoom,
              "min-zoom": e.minZoom,
              onClose: e.onClose
            }, null, 8, ["video", "image", "root-height", "root-width", "show", "init-no", "content-close", "max-zoom", "min-zoom", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : N("", !0)
      ], 512),
      e.showIndex ? (c(), d("view", Mh, L(e.active + 1) + " / " + L(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (c(), d("view", {
        key: 1,
        class: D(e.iconClasses),
        onClick: t[0] || (t[0] = (...p) => e.onClose && e.onClose(...p))
      }, [
        _(e.$slots, "close-icon", {}, () => [
          ee(r, { color: "#ffffff" })
        ])
      ], 2)) : N("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const kn = /* @__PURE__ */ le(Ih, [["render", Lh]]);
class Ph {
  constructor() {
    H(this, "show", !1);
    H(this, "images", []);
    H(this, "videos", []);
    H(this, "contentClose", !0);
    H(this, "initNo", 0);
    H(this, "paginationVisible", !1);
    H(this, "paginationColor", "");
    H(this, "autoplay", 0);
    H(this, "isWrapTeleport", !1);
    H(this, "showIndex", !0);
    H(this, "closeable", !1);
    H(this, "closeIcon", "circle-close");
    H(this, "closeIconPosition", "top-right");
    H(this, "beforeClose");
    H(this, "maxZoom", 3);
    H(this, "minZoom", 1 / 3);
    H(this, "isLoop", !0);
    H(this, "teleport", "body");
  }
}
class Ah {
  constructor(t) {
    H(this, "options", new Ph());
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "image-preview",
      components: [Ae, bn, $n, wn, ht],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, _e(() => {
              o();
            });
          }, Te(kn, n));
        }
      })
    });
  }
}
const Eh = (e) => new Ah(e);
Eh.install = (e) => {
  e.use(kn);
};
function zh(e) {
  const t = ot();
  t && Object.assign(t.proxy, e);
}
const { create: Vh } = te("countup"), Hh = Vh({
  props: {
    initNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 1
    },
    toFixed: {
      type: Number,
      default: 0
    },
    during: {
      type: Number,
      default: 1e3
    },
    startFlag: {
      type: Boolean,
      default: !0
    },
    // 数字滚动
    numWidth: {
      type: Number,
      default: 20
    },
    numHeight: {
      type: Number,
      default: 20
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    // 自定义图片
    customBgImg: {
      type: String,
      default: ""
    },
    customSpacNum: {
      type: Number,
      default: 0
    },
    customChangeNum: {
      type: Number,
      default: 1
    },
    // 抽奖
    type: {
      type: String,
      default: ""
    },
    machineNum: {
      type: Number,
      default: 3
    },
    machinePrizeNum: {
      type: Number,
      default: 0
    },
    machinePrizeLevel: {
      type: Number,
      default: 0
    },
    machineTurnMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scrollEnd"],
  setup(e, { emit: t }) {
    const n = z(null), o = z([]), s = (M) => {
      M && o.value.push(M);
    }, l = me({
      valFlag: !1,
      current: 0,
      sortFlag: "add",
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0,
      // 正整数
      pointNum: 0,
      // 小数位
      numberVal: 0,
      // 数字
      num_total_len: 0,
      // 数字长度
      relNum: 0,
      // 去除小数点
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      // machineTransition: 'none',
      finshMachine: 0,
      notPrize: [],
      typeMachine: ""
    }), { startFlag: a, scrolling: i, customBgImg: r, type: f } = me(e);
    Q(
      () => e.customChangeNum,
      () => {
        y(), u(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (M) => {
        l.prizeLevelTrun = M;
      }
    ), Q(
      () => e.initNum,
      (M) => {
        l.current = M, l.valFlag = !1, p();
      }
    ), Q(
      () => e.endNum,
      () => {
        l.current = e.initNum, l.valFlag = !1, p();
      }
    );
    const p = () => {
      if (l.valFlag)
        return !1;
      a && (i || r ? f != "machine" && u() : (C(), setTimeout(() => {
        l.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(l.timer)), l.timer = null;
    }, v = (M, k, E) => {
      const T = (M.toString().split(".")[1] || "").length, j = (k.toString().split(".")[1] || "").length, K = Math.pow(10, Math.max(T, j));
      return E == "-" ? Number((M * K - k * K).toFixed(0)) / K : Number((M * K + k * K).toFixed(0)) / K;
    }, b = (M) => {
      let { num_total_len: k, pointNum: E, initDigit1: T, initDigit2: j, sortFlag: K } = l, oe = K == "add" || K == "equal" ? String(j)[M - (k - E)] : 10 - Number(String(j)[M - (k - E)]), W = K == "add" || K == "equal" ? String(T)[M] : 10 - Number(String(T)[M]), Y = M > k - E - 1 ? -oe * 100 + "%" : M <= String(T).length - 1 ? -W * 100 + "%" : 0;
      return Y == "-1000%" && (Y = 0), Y;
    }, w = (M) => {
      let { num_total_len: k, pointNum: E, initDigit1: T, initDigit2: j } = l, K = String(j)[M - (k - E)];
      return M > k - E - 1 ? K || 0 : M <= String(T).length - 1 ? String(T)[M] : 0;
    }, C = () => {
      let { endNum: M, initNum: k, speed: E, toFixed: T } = e, j = setInterval(() => {
        if (k > M)
          if (Number(l.current) <= M || Number(l.current) <= E)
            l.current = M.toFixed(T), clearInterval(j), t("scrollEnd"), l.valFlag = !1;
          else {
            let K = parseFloat(String(l.current)) - parseFloat(String(E));
            l.current = K.toFixed(T);
          }
        else if (Number(l.current) >= M)
          l.current = M.toFixed(T), clearInterval(j), t("scrollEnd"), l.valFlag = !1;
        else {
          let K = parseFloat(String(l.current)) + parseFloat(String(E));
          l.current = K.toFixed(T);
        }
      }, e.during);
    }, u = (M) => {
      let { initNum: k, endNum: E, toFixed: T, customBgImg: j } = e;
      j && (k = e.customChangeNum);
      let K, oe, W, Y;
      k != 0 ? (T != 0 && (k = Number(k.toFixed(T))), String(k).indexOf(".") > -1 ? (K = String(k).split(".")[0].length, oe = String(k).split(".")[1].length) : (K = String(k).length, oe = 0)) : (K = 1, oe = 0), E != 0 ? (T != 0 && (E = Number(E.toFixed(T))), String(E).indexOf(".") > -1 ? (W = String(E).split(".")[0].length, Y = String(E).split(".")[1].length) : (W = String(E).length, Y = 0)) : (W = 1, Y = 0);
      let R = K >= W ? K : W, x = oe >= Y ? oe : Y;
      l.num_total_len = R + x, l.pointNum = x, k > E ? (l.sortFlag = "reduce", l.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], l.totalCount = v(k, E, "-"), l.numberVal = Number(String(k))) : k < E ? (l.sortFlag = "add", l.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], l.totalCount = v(E, k, "-"), l.numberVal = Number(String(E))) : l.sortFlag = "equal";
      var U = 1;
      for (let ue = 0; ue < l.pointNum; ue++)
        U *= 10;
      var se = l.numberVal * U;
      if (l.relNum = se, T != 0 && (l.pointNum = String(l.numberVal).split(".")[1] ? String(l.numberVal).split(".")[1].length : 0, l.num_total_len = String(se).length), String(k).indexOf(".") > -1) {
        let ue = String(k).split(".");
        l.initDigit1 = Number(ue[0]), l.initDigit2 = Number(ue[1]);
      } else
        l.initDigit1 = k, l.initDigit2 = 0;
      i && !j ? _e(() => {
        if (l.sortFlag == "equal")
          return !1;
        let ue = o.value[l.num_total_len - 1];
        m(ue);
      }) : M !== 0 && P();
    }, m = (M) => {
      y();
      var k = 1;
      l.pointNum != 0 && (k = 1 / Math.pow(10, l.pointNum)), l.timer = setInterval(() => {
        h(M), l.totalCount = v(l.totalCount, k, "-"), l.totalCount <= 0 && (y(), t("scrollEnd"), l.valFlag = !1);
      }, e.during);
    }, h = (M) => {
      let k = M.getAttribute("turn-number"), E;
      if (l.sortFlag == "add" ? E = parseInt(String(k)) + 1 : E = parseInt(String(k)) - 1 >= 0 ? parseInt(String(k)) - 1 : 9, M.setAttribute("turn-number", String(E)), (M.style.transition == "none 0s ease 0s" || E == 1 || !M.style.transition) && (M.style.transition = `all linear ${e.during}ms`), E == 10 || l.sortFlag == "reduce" && E == 0) {
        var T = null;
        M.style.top = `-${l.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`, M.setAttribute("turn-number", "0"), T = setTimeout(() => {
          T && clearTimeout(T), M.style.transition = "none", M.style.top = "0", $(M, E);
        }, 0.975 * e.during);
      } else
        M.style.top = `-${l.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`;
      M.style.top == "-100%" && l.sortFlag == "reduce" && h(M.previousSibling);
    }, $ = (M, k) => {
      setTimeout(() => {
        k == 10 && M.previousSibling && h(M.previousSibling);
      }, 200);
    }, P = () => {
      _e(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), l.valFlag = !1;
        });
      });
    }, A = () => {
      for (l.notPrize = []; l.notPrize.length < 3; ) {
        var M = Math.floor(Math.random() * e.machinePrizeNum + 1);
        l.notPrize.indexOf(M) == -1 && l.notPrize.push(M);
      }
    };
    zh({ machineLuck: () => {
      const M = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let k = e.numHeight * e.machinePrizeNum;
      l.prizeLevelTrun < 0 && A();
      for (let E = 0; E < e.machineNum; E++)
        setTimeout(() => {
          let T = k * (E + 1 + parseFloat(String(M)));
          l.prizeYPrev.length != 0 && (l.prizeY[E] = l.prizeYPrev[E]);
          let j = l.prizeYPrev[E] ? l.prizeYPrev[E] : 0, K = T + j + (e.machinePrizeNum - l.prizeLevelTrun + 1) * e.numHeight + (k - j);
          l.prizeLevelTrun < 0 && (K += e.numHeight * l.notPrize[E]), B(
            E,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            K,
            j
          );
        }, 500 * E);
    } });
    const B = (M, k, E) => {
      let T = setInterval(() => {
        if (E <= k)
          E += 10, l.prizeY[M] = parseFloat(String(E));
        else if (clearInterval(T), T = null, l.finshMachine += 1, l.prizeY[M] = k, l.finshMachine == e.machineNum) {
          let j = e.numHeight * e.machinePrizeNum;
          l.prizeYPrev = [], JSON.parse(JSON.stringify(l.prizeY)).forEach((oe) => {
            let W = oe;
            for (; W > j; )
              W -= j;
            l.prizeYPrev.push(W);
          }), setTimeout(() => {
            l.finshMachine = 0, l.prizeLevelTrun < 0 ? (t("scrollEnd", !1), l.valFlag = !1) : (t("scrollEnd", !0), l.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return $e(() => {
      l.current = e.initNum, _e(() => {
        p();
      });
    }), Ue(() => {
      y(), l.timer = null;
    }), pe(G(G({}, we(l)), we(me(e))), {
      runNumberImg: n,
      setRef: s,
      topNumber: b,
      turnNumber: w
    });
  }
}), Oh = { class: "nut-countup" }, Rh = ["turn-number"];
function Fh(e, t, n, o, s, l) {
  return c(), d("view", Oh, [
    e.customBgImg != "" ? (c(), d(Z, { key: 0 }, [
      e.type == "machine" ? (c(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: V({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Z, null, re(e.machineNum, (a, i) => (c(), d("view", {
          key: "mImg" + i,
          class: "nut-countup__machine-item",
          style: V({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[i] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), d("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: V({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Z, null, re(e.num_total_len, (a, i) => (c(), d("view", {
          key: "cImg" + i,
          class: "nut-countup__numberimg__item",
          style: V({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (i > e.num_total_len - e.pointNum - 1 ? i == e.num_total_len - e.pointNum ? i * 1.5 : i * 1.3 : i) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[i] * e.numHeight + e.customSpacNum * +String(e.relNum)[i]) + "px",
            transition: "all linear " + e.during / 10 + "ms"
          })
        }, null, 4))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: V({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4))
    ], 64)) : (c(), d(Z, { key: 1 }, [
      e.scrolling ? (c(), d("view", {
        key: 0,
        class: "nut-countup__number",
        style: V({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (c(!0), d(Z, null, re(e.num_total_len, (a, i) => (c(), d("view", {
          ref_for: !0,
          ref: (r) => e.setRef(r),
          key: a,
          class: "nut-countup__number-item",
          style: V({
            top: e.topNumber(i),
            left: e.numWidth * (i > e.num_total_len - e.pointNum - 1 ? i * 1.1 : i) + "px"
          }),
          "turn-number": e.turnNumber(i)
        }, [
          (c(!0), d(Z, null, re(e.to0_10, (r, f) => (c(), d("view", {
            key: "dote" + f,
            class: "nut-countup__number-item__span",
            style: V({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, L(r), 5))), 128))
        ], 12, Rh))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: V({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4)) : (c(), d(Z, { key: 1 }, [
        ge(L(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const Wh = /* @__PURE__ */ le(Hh, [["render", Fh]]), Yh = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, Kh = (e, t) => {
  let { h: n, m: o, s, ms: l } = e;
  const { d: a } = e;
  if (t.includes("DD") ? t = t.replace("DD", Ze(a)) : n += Number(a) * 24, t.includes("HH") ? t = t.replace("HH", Ze(n)) : o += Number(n) * 60, t.includes("mm") ? t = t.replace("mm", Ze(o)) : s += Number(o) * 60, t.includes("ss") ? t = t.replace("ss", Ze(s)) : l += Number(s) * 1e3, t.includes("S")) {
    const i = Ze(l, 3).toString();
    t.includes("SSS") ? t = t.replace("SSS", i) : t.includes("SS") ? t = t.replace("SS", i.slice(0, 2)) : t.includes("S") && (t = t.replace("S", i.slice(0, 1)));
  }
  return t;
}, Wn = (e, t, n) => {
  const o = e, s = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  }, l = 1e3, a = 60 * l, i = 60 * a, r = 24 * i;
  return o > 0 && (s.d = o >= l ? Math.floor(o / r) : 0, s.h = Math.floor(o % r / i), s.m = Math.floor(o % i / a), s.s = Math.floor(o % a / l), s.ms = Math.floor(o % l)), n == "custom" ? s : Kh(G({}, s), t);
}, jh = { class: "nut-countdown" }, Uh = ["innerHTML"], nl = /* @__PURE__ */ ve({
  name: "NutCountdown",
  __name: "countdown",
  props: {
    modelValue: {},
    paused: { type: Boolean, default: !1 },
    startTime: { default: "" },
    endTime: { default: "" },
    millisecond: { type: Boolean, default: !1 },
    format: { default: "HH:mm:ss" },
    autoStart: { type: Boolean, default: !0 },
    time: { default: 0 }
  },
  emits: [
    "input",
    "update:modelValue",
    "end",
    "restart",
    "paused",
    // will be deprecated
    "onEnd",
    "onRestart",
    "onPaused"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, l = z(0), a = z(null), i = z(!o.paused && o.autoStart), r = z(Date.now()), f = z(0), p = S(() => Wn(l.value, o.format)), y = () => {
      r.value = Number(o.endTime), f.value = Date.now() - Yh(o.startTime), i.value || (i.value = !0), v();
    }, v = () => {
      window !== void 0 && (a.value = requestAnimationFrame(() => {
        if (i.value) {
          const u = Date.now() - f.value, m = Math.max(r.value - u, 0);
          l.value = m, m || (i.value = !1, w(), s("end"), s("onEnd")), m > 0 && v();
        }
      }));
    }, b = () => {
      !i.value && !o.autoStart && (i.value = !0, r.value = Date.now() + Number(l.value), v(), s("restart", l.value), s("onRestart", l.value));
    }, w = () => {
      cancelAnimationFrame(a.value), i.value = !1, s("paused", l.value), s("onPaused", l.value);
    };
    return t({
      start: b,
      pause: w,
      reset: () => {
        o.autoStart || (w(), l.value = Number(o.time));
      }
    }), jn(() => {
      o.autoStart ? y() : l.value = Number(o.time);
    }), Q(
      () => l.value,
      (u) => {
        const m = Wn(u, o.format, "custom");
        s("update:modelValue", m), s("input", m);
      }
    ), Q(
      () => o.paused,
      (u, m) => {
        m ? (i.value || (i.value = !0, r.value = Date.now() + Number(l.value), v()), s("restart", l.value), s("onRestart", l.value)) : i.value && w();
      }
    ), Q(
      () => o.endTime,
      () => {
        y();
      }
    ), Q(
      () => o.startTime,
      () => {
        y();
      }
    ), (u, m) => (c(), d("view", jh, [
      _(u.$slots, "default", {}, () => [
        g("view", {
          class: "nut-countdown__content",
          innerHTML: p.value
        }, null, 8, Uh)
      ])
    ]));
  }
});
be(nl);
const Cn = /* @__PURE__ */ ve({
  name: "NutTag",
  __name: "tag",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    mark: { type: Boolean, default: !1 },
    closeable: { type: Boolean, default: !1 }
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = S(() => {
      const r = "nut-tag";
      return {
        [r]: !0,
        [`${r}--${n.type}`]: n.type,
        [`${r}--plain`]: n.plain,
        [`${r}--round`]: n.round,
        [`${r}--mark`]: n.mark
      };
    }), l = S(() => {
      const r = {};
      return n.textColor ? r.color = n.textColor : n.color && n.plain && (r.color = n.color), n.plain ? (r.background = "#fff", r.borderColor = n.color) : n.color && (r.background = n.color), r;
    }), a = (r) => {
      o("close", r);
    }, i = (r) => {
      o("click", r);
    };
    return (r, f) => (c(), d("view", {
      class: D(s.value),
      style: V(l.value),
      onClick: i
    }, [
      _(r.$slots, "default"),
      r.closeable ? (c(), J(ce(zt), {
        key: 0,
        class: "nut-tag--close",
        width: "12px",
        height: "12px",
        onClick: De(a, ["stop"])
      })) : N("", !0)
    ], 6));
  }
});
be(Cn);
const { create: Xh } = te("popover"), qh = Xh({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: { type: Boolean, default: !1 },
    list: { type: Array, default: [] },
    theme: { type: String, default: "light" },
    location: { type: String, default: "bottom" },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: "" },
    showArrow: { type: Boolean, default: !0 },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: !1 },
    overlayClass: { type: String, default: "" },
    overlayStyle: { type: Object },
    closeOnClickOverlay: { type: Boolean, default: !0 },
    closeOnClickAction: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    targetId: { type: String, default: "" },
    bgColor: { type: String, default: "" }
  },
  emits: ["update", "update:visible", "close", "choose", "open"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), s = z(e.visible), l = z(), a = z({
      width: 0,
      height: 0
    }), i = S(() => {
      const m = "nut-popover-arrow", h = e.location, $ = h.split("-")[0];
      return `${m} ${m}-${$} ${m}--${h}`;
    }), r = S(() => {
      const m = {}, { bgColor: h, arrowOffset: $, location: P } = e, A = P.split("-")[0], I = P.split("-")[1], B = 16;
      return h && (m[`border${f(A)}Color`] = h), e.arrowOffset != 0 && (["bottom", "top"].includes(A) && (I || (m.left = `calc(50% + ${$}px)`), I == "start" && (m.left = `${B + $}px`), I == "end" && (m.right = `${B - $}px`)), ["left", "right"].includes(A) && (I || (m.top = `calc(50% - ${$}px)`), I == "start" && (m.top = `${B - $}px`), I == "end" && (m.bottom = `${B + $}px`))), m;
    }), f = (m) => (m = m.toLowerCase(), m = m.replace(/\b\w+\b/g, (h) => h.substring(0, 1).toUpperCase() + h.substring(1)), m), p = S(() => {
      const m = {};
      if (!l.value)
        return {};
      const h = a.value.width, $ = a.value.height, { width: P, height: A, left: I, top: B, right: M } = l.value, { location: k, offset: E } = e, T = k == null ? void 0 : k.split("-")[0], j = k == null ? void 0 : k.split("-")[1];
      let K = 0, oe = 0;
      if (Array.isArray(E) && (E == null ? void 0 : E.length) === 2 && (K += Number(E[1]), oe += Number(E[0])), P) {
        if (["bottom", "top"].includes(T)) {
          const W = T === "bottom" ? A + K : -($ + K);
          m.top = `${B + W}px`, j || (m.left = `${-(h - P) / 2 + I + oe}px`), j === "start" && (m.left = `${I + oe}px`), j === "end" && (m.left = `${M + oe}px`);
        }
        if (["left", "right"].includes(T)) {
          const W = T === "left" ? -(h + K) : P + K;
          m.left = `${I + W}px`, j || (m.top = `${B - $ / 2 + A / 2 - 4 + oe}px`), j === "start" && (m.top = `${B + oe}px`), j === "end" && (m.top = `${B + A + oe}px`);
        }
      }
      return m;
    }), y = () => {
      var h, $, P, A;
      const m = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      l.value = {
        width: m.width,
        height: m.height,
        left: m.left,
        top: m.top + Math.max(((h = document.documentElement) == null ? void 0 : h.scrollTop) || 0, (($ = document.body) == null ? void 0 : $.scrollTop) || 0),
        right: m.right
      }, a.value = {
        height: (P = o.value) == null ? void 0 : P.clientHeight,
        width: (A = o.value) == null ? void 0 : A.clientWidth
      };
    };
    $e(() => {
      setTimeout(() => {
        y();
      }, 300);
    }), Q(
      () => e.visible,
      (m) => {
        s.value = m, m ? (window.addEventListener("touchstart", u, !0), _e(() => {
          y();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const v = (m) => {
      t("update", m), t("update:visible", m);
    }, b = () => {
      v(!e.visible), t("open");
    }, w = () => {
      t("update:visible", !1), t("close");
    }, C = (m, h) => {
      !m.disabled && t("choose", m, h), e.closeOnClickAction && w();
    }, u = (m) => {
      const h = n.value, $ = o.value;
      let P = h && !h.contains(m.target);
      if (e.targetId) {
        const A = document.querySelector(`#${e.targetId}`);
        P = A && !A.contains(m.target);
      }
      P && $ && !$.contains(m.target) && e.closeOnClickOutside && w();
    };
    return {
      showPopup: s,
      openPopover: b,
      popoverArrow: i,
      closePopover: w,
      chooseItem: C,
      popoverRef: n,
      popoverContentRef: o,
      getRootPosition: p,
      popoverArrowStyle: r,
      renderIcon: nt
    };
  }
}), Gh = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, Zh = ["onClick"], Jh = { class: "nut-popover-menu-item-name" };
function Qh(e, t, n, o, s, l) {
  const a = X("nut-popup");
  return c(), d(Z, null, [
    e.targetId ? N("", !0) : (c(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...i) => e.openPopover && e.openPopover(...i))
    }, [
      _(e.$slots, "reference")
    ], 512)),
    (c(), J(Kn, { to: "body" }, [
      g("div", {
        class: D(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: V(e.getRootPosition)
      }, [
        ee(a, {
          visible: e.showPopup,
          "onUpdate:visible": t[1] || (t[1] = (i) => e.showPopup = i),
          "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
          style: V({ background: e.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: e.overlay,
          duration: e.duration,
          "overlay-style": e.overlayStyle,
          "overlay-class": e.overlayClass,
          "close-on-click-overlay": e.closeOnClickOverlay
        }, {
          default: ne(() => [
            g("div", Gh, [
              e.showArrow ? (c(), d("div", {
                key: 0,
                class: D(e.popoverArrow),
                style: V(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              _(e.$slots, "content"),
              (c(!0), d(Z, null, re(e.list, (i, r) => (c(), d("div", {
                key: r,
                class: D([i.className, i.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((f) => e.chooseItem(i, r), ["stop"])
              }, [
                i.icon ? (c(), J(ze(e.renderIcon(i.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                g("div", Jh, L(i.name), 1)
              ], 10, Zh))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const ol = /* @__PURE__ */ le(qh, [["render", Qh]]), xh = { key: 0 }, e0 = {
  key: 1,
  class: "nut-skeleton"
}, t0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, n0 = { class: "nut-skeleton-content" }, ll = /* @__PURE__ */ ve({
  name: "NutSkeleton",
  __name: "skeleton",
  props: {
    width: { default: "100px" },
    height: { default: "15px" },
    animated: { type: Boolean, default: !1 },
    avatar: { type: Boolean, default: !1 },
    avatarShape: { default: "round" },
    avatarSize: { default: "50px" },
    loading: { type: Boolean, default: !0 },
    round: { type: Boolean, default: !1 },
    row: { default: "1" },
    title: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const l = "avatarClass";
      return {
        [l]: !0,
        [`${l}--${t.avatarShape}`]: t.avatarShape
      };
    }), o = (l) => ({
      [l]: !0,
      [`${l}--round`]: t.round
    }), s = S(() => ({
      width: t.avatarSize,
      height: t.avatarSize
    }));
    return (l, a) => l.loading ? (c(), d("view", e0, [
      l.animated ? (c(), d("view", t0)) : N("", !0),
      g("view", n0, [
        l.avatar ? (c(), J(yn, {
          key: 0,
          class: D(n.value),
          shape: l.avatarShape,
          style: V(s.value)
        }, null, 8, ["class", "shape", "style"])) : N("", !0),
        g("view", {
          class: "nut-skeleton-content__line",
          style: V({ width: l.width })
        }, [
          l.title ? (c(), d("view", {
            key: 0,
            class: D(o("nut-skeleton-blockTitle")),
            style: V({ height: l.height })
          }, null, 6)) : N("", !0),
          (c(!0), d(Z, null, re(Number(l.row), (i) => (c(), d("view", {
            key: i,
            class: D(o("nut-skeleton-blockLine")),
            style: V({ height: l.height })
          }, null, 6))), 128))
        ], 4)
      ])
    ])) : (c(), d("view", xh, [
      _(l.$slots, "default")
    ]));
  }
});
be(ll);
const sl = Symbol("nut-collapse"), o0 = { class: "nut-collapse" }, al = /* @__PURE__ */ ve({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z(n.modelValue || (n.accordion ? "" : []));
    Q(
      () => n.modelValue,
      (r) => {
        s.value = r;
      }
    );
    const l = (r, f, p = !0) => {
      s.value = r, o("update:modelValue", r), o("change", r, f, p);
    };
    return Re(sl, {
      updateVal: (r) => {
        if (n.accordion)
          s.value === r ? l("", r, !1) : l(r, r, !0);
        else if (Array.isArray(s.value))
          if (s.value.includes(r)) {
            const f = s.value.filter((p) => p !== r);
            l(f, r, !1);
          } else {
            const f = s.value.concat([r]);
            l(f, r, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (r) => n.accordion ? s.value === r : Array.isArray(s.value) ? s.value.includes(r) : !1
    }), (r, f) => (c(), d("view", o0, [
      _(r.$slots, "default")
    ]));
  }
});
be(al);
const l0 = { class: "nut-collapse-item__title-main" }, s0 = { class: "nut-collapse-item__title-main-value" }, a0 = ["innerHTML"], i0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, r0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, u0 = ["innerHTML"], c0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, d0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, il = /* @__PURE__ */ ve({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => no },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), o = z(null), s = Ve(sl), l = S(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: t.border
      };
    }), a = S(() => s ? s.isExpanded(t.name) : !1), i = z(a.value ? "auto" : "0px"), r = () => {
      s && s.updateVal(t.name);
    }, f = () => {
      a.value && (i.value = "auto");
    }, p = () => {
      i.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var b;
          const v = (b = o.value) == null ? void 0 : b.offsetHeight;
          i.value = v ? `${v}px` : "auto";
        });
      });
    }, y = () => {
      var b;
      const v = (b = o.value) == null ? void 0 : b.offsetHeight;
      i.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          i.value = "0px";
        });
      });
    };
    return Q(a, (v) => {
      v ? p() : y();
    }), (v, b) => (c(), d("view", {
      class: D(l.value)
    }, [
      g("view", {
        class: D(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": v.disabled }]),
        onClick: r
      }, [
        g("view", l0, [
          g("view", s0, [
            v.$slots.title ? _(v.$slots, "title", { key: 0 }) : (c(), d("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: v.title
            }, null, 8, a0)),
            v.label ? (c(), d("view", i0, L(v.label), 1)) : N("", !0)
          ])
        ]),
        v.$slots.value ? (c(), d("view", r0, [
          _(v.$slots, "value")
        ])) : (c(), d("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: v.value
        }, null, 8, u0)),
        g("view", {
          class: D(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": a.value }]),
          style: V({ transform: "rotate(" + (a.value ? v.rotate : 0) + "deg)" })
        }, [
          v.$slots.icon ? _(v.$slots, "icon", { key: 0 }) : (c(), J(ze(ce(nt)(v.icon)), { key: 1 }))
        ], 6)
      ], 2),
      v.$slots.extra ? (c(), d("view", c0, [
        g("div", d0, [
          _(v.$slots, "extra")
        ])
      ])) : N("", !0),
      g("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: V({
          willChange: "height",
          height: i.value
        }),
        onTransitionend: f
      }, [
        g("view", {
          ref_key: "contentRef",
          ref: o,
          class: "nut-collapse__item-wrapper__content"
        }, [
          _(v.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
be(il);
const f0 = ve({
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return () => Te("view", {}, e.slots[0] ? e.slots[0](e.record) : e.slots[1](e.record));
  }
}), { create: p0 } = te("table"), m0 = "NutTable", h0 = p0({
  components: {
    RenderColumn: f0,
    DownArrow: no
  },
  props: {
    bordered: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sorter"],
  setup(e, { emit: t }) {
    const n = Se(m0), o = me({
      curData: e.data
    }), s = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), l = (y) => y.stylehead ? y.stylehead : "", a = (y) => y.stylecolumn ? y.stylecolumn : "", i = (y) => e.columns.filter((v) => v.key === y)[0], r = (y) => {
      const v = e.columns.filter((b) => b.key === y);
      return v[0].stylecolumn ? v[0].stylecolumn : "";
    }, f = (y) => {
      y.sorter && (t("sorter", y), o.curData = typeof y.sorter == "function" ? o.curData.sort(y.sorter) : y.sorter === "default" ? o.curData.sort() : o.curData);
    }, p = () => e.columns.map((y) => [y.key, y.render]);
    return Q(
      () => e.data,
      (y) => {
        o.curData = y.slice();
      }
    ), pe(G({}, we(o)), {
      cellClasses: s,
      getColumnItem: i,
      getColumnItemStyle: r,
      handleSorterClick: f,
      sortDataItem: p,
      translate: n,
      stylehead: l,
      stylecolumn: a
    });
  }
}), v0 = { class: "nut-table" }, g0 = { class: "nut-table__main__head" }, y0 = { class: "nut-table__main__head__tr" }, b0 = ["onClick"], $0 = { class: "nut-table__main__body" }, w0 = { key: 1 }, k0 = {
  key: 0,
  class: "nut-table__nodata"
}, C0 = {
  key: 0,
  class: "nut-table__nodata__text"
}, S0 = {
  key: 1,
  class: "nut-table__summary"
}, T0 = ["innerHTML"];
function _0(e, t, n, o, s, l) {
  const a = X("DownArrow"), i = X("RenderColumn");
  return c(), d("view", v0, [
    g("view", {
      class: D(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      g("view", g0, [
        g("view", y0, [
          (c(!0), d(Z, null, re(e.columns, (r) => (c(), d("span", {
            key: r.key,
            class: D(["nut-table__main__head__tr__th", e.cellClasses(r)]),
            style: V(r.stylehead),
            onClick: (f) => e.handleSorterClick(r)
          }, [
            ge(L(r.title) + " ", 1),
            _(e.$slots, "icon"),
            !e.$slots.icon && r.sorter ? (c(), J(a, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, b0))), 128))
        ])
      ]),
      g("view", $0, [
        (c(!0), d(Z, null, re(e.curData, (r) => (c(), d("view", {
          key: r,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), d(Z, null, re(e.sortDataItem(), ([f, p]) => (c(), d("span", {
            key: f,
            class: D(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(f))]),
            style: V(e.getColumnItemStyle(f))
          }, [
            typeof r[f] == "function" || typeof p == "function" ? (c(), J(i, {
              key: 0,
              slots: [p, r[f]],
              record: r
            }, null, 8, ["slots", "record"])) : (c(), d("view", w0, L(r[f]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (c(), d("view", k0, [
      g("div", {
        class: D(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        _(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (c(), d("div", C0, L(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), d("view", S0, [
      g("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, T0)
    ])) : N("", !0)
  ]);
}
const N0 = /* @__PURE__ */ le(h0, [["render", _0]]), D0 = { class: "nut-animate" }, rl = /* @__PURE__ */ ve({
  name: "NutAnimate",
  __name: "animate",
  props: {
    type: {},
    show: { type: Boolean, default: !1 },
    action: { default: "" },
    loop: { type: Boolean, default: !1 },
    duration: { default: 500 }
  },
  emits: ["click", "animate"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = z(n.action === "initial" || n.show === !0 || n.loop), l = S(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: s.value,
      loop: n.loop
    })), a = () => {
      s.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.value = !0;
        });
      });
    }, i = (r) => {
      n.action === "click" && (a(), o("click", r), o("animate"));
    };
    return Q(
      () => n.show,
      (r) => {
        r && (a(), o("animate"));
      }
    ), (r, f) => (c(), d("view", D0, [
      g("view", {
        class: D(l.value),
        style: V({
          animationDuration: r.duration ? `${r.duration}ms` : void 0
        }),
        onClick: i
      }, [
        _(r.$slots, "default")
      ], 6)
    ]));
  }
});
be(rl);
const { create: I0 } = te("ellipsis"), B0 = I0({
  props: {
    content: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "end"
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    expandText: {
      type: String,
      default: ""
    },
    collapseText: {
      type: String,
      default: ""
    },
    symbol: {
      type: String,
      default: "..."
    },
    lineHeight: {
      type: [Number, String],
      default: "20"
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = z(null);
    let o = null, s = 0;
    const l = z(), a = me({
      exceeded: !1,
      // 是否超出
      expanded: !1
      // 是否折叠
    });
    Q(
      () => e.content,
      (w, C) => {
        w != C && i();
      }
    ), $e(() => {
      i();
    });
    const i = () => {
      if (!n.value)
        return;
      const w = window.getComputedStyle(n.value);
      o = document.createElement("div"), Array.prototype.slice.apply(w).forEach((m) => {
        o.style.setProperty(m, w.getPropertyValue(m));
      }), o.style.position = "fixed", o.style.left = "999999px", o.style.top = "999999px", o.style.zIndex = "-1000", o.style.height = "auto", o.style.minHeight = "auto", o.style.maxHeight = "auto", o.style.textOverflow = "clip", o.style.whiteSpace = "normal", o.style.webkitLineClamp = "unset", o.style.display = "block";
      const u = y(w.lineHeight === "normal" ? e.lineHeight : w.lineHeight);
      s = Math.floor(
        u * (Number(e.rows) + 0.5) + y(w.paddingTop) + y(w.paddingBottom)
      ), o.innerText = e.content, document.body.appendChild(o), r();
    }, r = () => {
      if (o.offsetHeight <= s)
        a.exceeded = !1, document.body.removeChild(o);
      else {
        a.exceeded = !0;
        const w = e.content.length, C = Math.floor((0 + w) / 2), u = e.direction === "middle" ? p([0, C], [C, w]) : f(0, w);
        l.value = u, document.body.removeChild(o);
      }
    }, f = (w, C) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (C - w <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, w) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(C, m)
        };
      const h = Math.round((w + C) / 2);
      return e.direction === "end" ? o.innerText = e.content.slice(0, h) + e.symbol + u : o.innerText = u + e.symbol + e.content.slice(h, m), o.offsetHeight <= s ? e.direction === "end" ? f(h, C) : f(w, h) : e.direction === "end" ? f(w, h) : f(h, C);
    }, p = (w, C) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (w[1] - w[0] <= 1 && C[1] - C[0] <= 1)
        return {
          leading: e.content.slice(0, w[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(C[1], m)
        };
      const h = Math.floor((w[0] + w[1]) / 2), $ = Math.ceil((C[0] + C[1]) / 2);
      return o.innerText = e.content.slice(0, h) + e.symbol + u + e.symbol + e.content.slice($, m), o.offsetHeight <= s ? p([h, w[1]], [C[0], $]) : p([w[0], h], [$, C[1]]);
    }, y = (w) => {
      if (!w)
        return 0;
      const C = w.match(/^\d*(\.\d*)?/);
      return C ? Number(C[0]) : 0;
    }, v = (w) => {
      w == 1 ? (a.expanded = !0, t("change", "expand")) : (a.expanded = !1, t("change", "collapse"));
    }, b = () => {
      t("click");
    };
    return pe(G({}, we(a)), { root: n, ellipsis: l, clickHandle: v, handleClick: b });
  }
}), M0 = { key: 0 }, L0 = { key: 1 }, P0 = { key: 2 };
function A0(e, t, n, o, s, l) {
  return c(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    e.exceeded ? N("", !0) : (c(), d("view", M0, L(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), d("view", L0, [
      ge(L(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((a) => e.clickHandle(1), ["stop"]))
      }, L(e.expandText), 1)) : N("", !0),
      ge(L(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (c(), d("view", P0, [
      ge(L(e.content) + " ", 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((a) => e.clickHandle(2), ["stop"]))
      }, L(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const E0 = /* @__PURE__ */ le(B0, [["render", A0]]), ul = /* @__PURE__ */ ve({
  name: "NutWatermark",
  __name: "watermark",
  props: {
    gapX: { default: 24 },
    gapY: { default: 48 },
    zIndex: { default: 2e3 },
    width: { default: 120 },
    height: { default: 64 },
    rotate: { default: -22 },
    image: {},
    imageWidth: { default: 120 },
    imageHeight: { default: 64 },
    content: { default: "" },
    fontColor: { default: "rgba(0,0,0,.15)" },
    fontStyle: { default: "normal" },
    fontFamily: { default: "PingFang SC" },
    fontWeight: { default: "normal" },
    fontSize: { default: 14 },
    fullPage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = z(""), o = S(() => {
      const l = "nut-watermark";
      return {
        [l]: !0,
        [`${l}-full-page`]: t.fullPage
      };
    }), s = () => {
      const l = document.createElement("canvas"), a = window.devicePixelRatio, i = l.getContext("2d"), r = `${(t.gapX + t.width) * a}px`, f = `${(t.gapY + t.height) * a}px`, p = t.width * a, y = t.height * a;
      if (l.setAttribute("width", r), l.setAttribute("height", f), i) {
        if (t.image) {
          i.translate(p / 2, y / 2), i.rotate(Math.PI / 180 * Number(t.rotate));
          const v = new Image();
          v.crossOrigin = "anonymous", v.referrerPolicy = "no-referrer", v.src = t.image, v.onload = () => {
            i.drawImage(
              v,
              -t.imageWidth * a / 2,
              -t.imageHeight * a / 2,
              t.imageWidth * a,
              t.imageHeight * a
            ), i.restore(), n.value = l.toDataURL();
          };
        } else if (t.content) {
          i.textBaseline = "middle", i.textAlign = "center", i.translate(p / 2, y / 2), i.rotate(Math.PI / 180 * Number(t.rotate));
          const v = Number(t.fontSize) * a;
          i.font = `${t.fontStyle} normal ${t.fontWeight} ${v}px/${y}px ${t.fontFamily}`, i.fillStyle = t.fontColor, Array.isArray(t.content) ? t.content.map((b, w) => {
            i.fillText(b, 0, (w - 1) * v);
          }) : i.fillText(t.content, 0, 0), i.restore(), n.value = l.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    return ct(() => {
      s();
    }), (l, a) => (c(), d("view", {
      class: D(o.value),
      style: V({
        zIndex: l.zIndex,
        backgroundSize: `${l.gapX + l.width}px`,
        backgroundImage: `url('${n.value}')`
      })
    }, null, 6));
  }
});
be(ul);
const z0 = { class: "nut-trend-arrow" }, cl = /* @__PURE__ */ ve({
  name: "NutTrendArrow",
  __name: "trend-arrow",
  props: {
    rate: { default: 0 },
    digits: { default: 2 },
    showSign: { type: Boolean, default: !1 },
    showZero: { type: Boolean, default: !1 },
    arrowLeft: { type: Boolean, default: !1 },
    syncTextColor: { type: Boolean, default: !0 },
    textColor: { default: "#333" },
    riseColor: { default: "#fa2c19" },
    dropColor: { default: "#64b578" }
  },
  setup(e) {
    const t = e, n = S(() => t.rate > 0), o = S(() => {
      const l = Math.abs(t.rate);
      return !t.showZero && t.rate === 0 ? "--" : `${t.showSign && t.rate !== 0 ? n.value ? "+" : "-" : ""}${Dl(
        Number(l),
        t.digits
      )}%`;
    }), s = S(() => ({
      color: t.rate === 0 ? t.textColor : t.syncTextColor ? n.value ? t.riseColor : t.dropColor : t.textColor
    }));
    return (l, a) => (c(), d("view", z0, [
      l.arrowLeft ? N("", !0) : (c(), d("span", {
        key: 0,
        class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
        style: V(s.value)
      }, L(o.value), 5)),
      Number(l.rate) !== 0 && n.value ? _(l.$slots, "up-icon", { key: 1 }, () => [
        ee(ce(gr), { color: l.riseColor }, null, 8, ["color"])
      ]) : N("", !0),
      Number(l.rate) !== 0 && !n.value ? _(l.$slots, "down-icon", { key: 2 }, () => [
        ee(ce(fr), { color: l.dropColor }, null, 8, ["color"])
      ]) : N("", !0),
      l.arrowLeft ? (c(), d("span", {
        key: 3,
        class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
        style: V(s.value)
      }, L(o.value), 5)) : N("", !0)
    ]));
  }
});
be(cl);
const { create: V0 } = te("tour"), H0 = V0({
  components: {
    NutPopover: ol,
    Close: zt
  },
  props: {
    modelValue: { type: Boolean, default: !1 },
    type: {
      type: String,
      default: "step"
    },
    steps: {
      type: Array,
      default: () => []
    },
    location: {
      type: String,
      default: "bottom"
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: "下一步"
    },
    prevStepTxt: {
      type: String,
      default: "上一步"
    },
    completeTxt: {
      type: String,
      default: "完成"
    },
    mask: {
      type: Boolean,
      default: !0
    },
    offset: {
      type: Array,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    maskWidth: {
      type: [Number, String],
      default: ""
    },
    maskHeight: {
      type: [Number, String],
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    showPrevStep: {
      type: Boolean,
      default: !0
    },
    showTitleBar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "close"],
  setup(e, { emit: t }) {
    const n = me({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), o = z({}), s = S(() => "nut-tour"), l = S(() => {
      const { offset: p, maskWidth: y, maskHeight: v } = e, { width: b, height: w, left: C, top: u } = o.value, m = [C + b / 2, u + w / 2], h = Number(y || b), $ = Number(v || w);
      return {
        width: `${h + +p[1] * 2}px`,
        height: `${$ + +p[0] * 2}px`,
        top: `${m[1] - $ / 2 - +p[0]}px`,
        left: `${m[0] - h / 2 - +p[1]}px`
      };
    }), a = (p) => {
      p == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, _e(() => {
        n.showPopup = !0, i();
      }), t("change", n.active);
    }, i = () => {
      const p = document.querySelector(`#${e.steps[n.active].target}`), y = Ye(p);
      o.value = y;
    }, r = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, f = () => {
      e.closeOnClickOverlay && r();
    };
    return $e(() => {
      n.active = 0, i();
    }), Q(
      () => e.modelValue,
      (p) => {
        p && i(), n.active = 0, n.showTour = p, n.showPopup = p;
      }
    ), pe(G({}, we(n)), {
      classes: s,
      maskStyle: l,
      changeStep: a,
      close: r,
      handleClickMask: f
    });
  }
}), O0 = {
  key: 0,
  class: "nut-tour-content"
}, R0 = {
  key: 0,
  class: "nut-tour-content-top"
}, F0 = { class: "nut-tour-content-inner" }, W0 = { class: "nut-tour-content-bottom" }, Y0 = { class: "nut-tour-content-bottom-init" }, K0 = { class: "nut-tour-content-bottom-operate" }, j0 = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, U0 = { class: "nut-tour-content-inner" };
function X0(e, t, n, o, s, l) {
  const a = X("Close"), i = X("nut-popover");
  return c(), d("div", {
    class: D(e.classes)
  }, [
    Ie(g("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...r) => e.handleClickMask && e.handleClickMask(...r))
    }, null, 512), [
      [Me, e.showTour]
    ]),
    (c(!0), d(Z, null, re(e.steps, (r, f) => (c(), d("div", {
      key: f,
      style: { height: "0" }
    }, [
      f == e.active ? (c(), d(Z, { key: 0 }, [
        e.showTour ? (c(), d("div", {
          key: 0,
          id: "nut-tour-popid",
          class: D(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: V(e.maskStyle)
        }, null, 6)) : N("", !0),
        ee(i, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (p) => e.showPopup = p),
          location: r.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: r.popoverOffset || [0, 12],
          "arrow-offset": r.arrowOffset || 0
        }, {
          content: ne(() => [
            _(e.$slots, "default", {}, () => [
              e.type == "step" ? (c(), d("div", O0, [
                e.showTitleBar ? (c(), d("div", R0, [
                  g("div", {
                    onClick: t[1] || (t[1] = (...p) => e.close && e.close(...p))
                  }, [
                    ee(a, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                g("div", F0, L(r.content), 1),
                g("div", W0, [
                  g("div", Y0, L(e.active + 1) + "/" + L(e.steps.length), 1),
                  g("div", K0, [
                    _(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (p) => e.changeStep("prev"))
                      }, L(e.prevStepTxt), 1)) : N("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (c(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...p) => e.close && e.close(...p))
                    }, L(e.completeTxt), 1)) : N("", !0),
                    _(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (p) => e.changeStep("next"))
                      }, L(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (c(), d("div", j0, [
                g("div", U0, L(r.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const q0 = /* @__PURE__ */ le(H0, [["render", X0]]), { create: G0 } = te("address"), Z0 = "NutAddress", J0 = G0({
  components: {
    NutPopup: Ae,
    NutElevator: To,
    Location: La,
    Location2: Va,
    Check: xn,
    Close: zt,
    Left: nn
  },
  inheritAttrs: !1,
  props: pe(G({}, Nt), {
    modelValue: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: ""
    },
    province: {
      type: Array,
      default: () => []
    },
    city: {
      type: Array,
      default: () => []
    },
    // 市
    country: {
      type: Array,
      default: () => []
    },
    // 县
    town: {
      type: Array,
      default: () => []
    },
    // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: !0
    },
    existAddress: {
      type: Array,
      default: () => []
    },
    existAddressTitle: {
      type: String,
      default: ""
    },
    customAndExistTitle: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: "200px"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(e, { emit: t }) {
    const n = Se(Z0), o = z(null), s = z(null), l = z(e.visible), a = z(e.type), i = z(0), r = z(0), f = z(["province", "city", "country", "town"]), p = z(null), y = z([0, 0, 0, 0]), v = me([]), b = S(() => {
      switch (i.value) {
        case 0:
          return e.province;
        case 1:
          return e.city;
        case 2:
          return e.country;
        default:
          return e.town;
      }
    }), w = (Y) => {
      if (!Array.isArray(Y))
        throw new TypeError("params muse be array.");
      if (!Y.length)
        return [];
      Y.forEach((x) => {
        if (!x.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return Y = Y.sort((x, U) => x.title.localeCompare(U.title)), Y.forEach((x) => {
        const U = R.findIndex((se) => se.title === x.title);
        U <= -1 ? R.push({
          title: x.title,
          list: [].concat(x)
        }) : R[U].list.push(x);
      }), R;
    };
    let C = z([]), u = me({});
    const m = z("self"), h = z(20), $ = () => {
      v[0] = e.province || [], v[1] = e.city || [], v[2] = e.country || [], v[3] = e.town || [];
      const Y = e.modelValue, R = Y.length;
      if (R > 0) {
        if (i.value = R - 1, b.value.length == 0) {
          i.value = 0;
          return;
        }
        for (let x = 0; x < R; x++) {
          let U = v[x];
          C.value[x] = U.filter((se) => se.id == Y[x])[0];
        }
        A();
      }
    }, P = (Y, R) => Y && Y.name || i.value < R && Y ? Y.name : e.columnsPlaceholder[R] || n("select"), A = () => {
      M(), _e(() => {
        const Y = s.value && s.value.getElementsByClassName("active")[0];
        if (Y) {
          const R = Y.offsetLeft;
          h.value = R || 20;
        }
      });
    }, I = (Y) => {
      var U;
      const R = i.value;
      r.value = i.value;
      const x = {
        custom: f.value[R]
      };
      C.value[R] = Y, C.value.splice(R + 1, C.value.length - (R + 1)), x.value = Y, ((U = v[R + 1]) == null ? void 0 : U.length) > 0 ? (i.value = R + 1, A(), x.next = f.value[i.value]) : (T(), t("update:modelValue")), t("change", x);
    }, B = (Y, R) => {
      r.value = i.value, P(Y, R) && (i.value = R, A());
    }, M = () => {
      const Y = p.value, R = r.value, x = y.value[i.value];
      Y != null && Y.scrollTop && (y.value[R] = Y == null ? void 0 : Y.scrollTop), _e(() => {
        Y == null || Y.scrollTo({
          top: x,
          behavior: "auto"
        });
      });
    }, k = (Y) => {
      const R = e.existAddress;
      let x = {};
      R.forEach((U) => {
        U && U.selectedAddress && (x = U), U.selectedAddress = !1;
      }), Y.selectedAddress = !0, u = Y, t("selected", x, Y, R), T();
    }, E = () => {
      C.value = [], i.value = 0, A();
    }, T = (Y = "self") => {
      m.value = Y == "cross" ? "cross" : "self", l.value = !1;
    }, j = () => {
      m.value = "mask";
    }, K = () => {
      const Y = {
        addressIdStr: "",
        addressStr: "",
        province: C.value[0],
        city: C.value[1],
        country: C.value[2],
        town: C.value[3]
      }, R = {
        data: {},
        type: a.value
      };
      ["custom", "custom2"].includes(a.value) ? ([0, 1, 2, 3].forEach((x) => {
        const U = C.value[x];
        Y.addressIdStr += `${x ? "_" : ""}${U && U.id || 0}`, Y.addressStr += U && U.name || "";
      }), R.data = Y) : R.data = u, E(), m.value == "self" ? t("close", R) : t("closeMask", { closeWay: m }), t("update:visible", !1);
    }, oe = () => {
      const Y = a.value;
      a.value = Y == "exist" ? "custom" : "exist", E(), t("switchModule", { type: a.value });
    }, W = (Y, R) => {
      I(R);
    };
    return Q(
      () => e.visible,
      (Y) => {
        l.value = Y;
      }
    ), Q(
      () => l.value,
      (Y) => {
        Y && $();
      }
    ), pe(G({
      showPopup: l,
      privateType: a,
      tabIndex: i,
      tabName: f,
      selectedRegion: C,
      switchModule: oe,
      closeWay: m,
      close: K,
      getTabName: P,
      nextAreaList: I,
      regionLine: o,
      tabRegion: s,
      lineDistance: h,
      changeRegionTab: B,
      selectedExist: k,
      clickOverlay: j,
      handClose: T,
      handleElevatorItem: W,
      initCustomSelected: $
    }, we(e)), {
      translate: n,
      regionList: b,
      transformData: w,
      scrollDom: p
    });
  }
}), Q0 = { class: "nut-address" }, x0 = { class: "nut-address__header" }, ev = { class: "nut-address__header__title" }, tv = {
  key: 0,
  class: "nut-address__custom"
}, nv = {
  ref: "tabRegion",
  class: "nut-address__region"
}, ov = ["onClick"], lv = {
  key: 0,
  class: "active nut-address__region-item"
}, sv = {
  key: 0,
  class: "nut-address__detail"
}, av = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, iv = ["onClick"], rv = {
  key: 1,
  class: "nut-address__elevator-group"
}, uv = {
  key: 1,
  class: "nut-address__exist"
}, cv = { class: "nut-address__exist-group" }, dv = { class: "nut-address__exist-group-list" }, fv = ["onClick"], pv = { class: "nut-address__exist-item-info" }, mv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, hv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, vv = { class: "nut-address__exist-item-info-bottom" }, gv = { class: "nut-address__exist-choose-btn" };
function yv(e, t, n, o, s, l) {
  const a = X("Left"), i = X("Close"), r = X("Check"), f = X("nut-elevator"), p = X("Location2"), y = X("nut-popup");
  return c(), J(y, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (v) => e.showPopup = v),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (v) => e.closeWay = "self")
  }, {
    default: ne(() => [
      g("view", Q0, [
        g("view", x0, [
          g("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            _(e.$slots, "back-icon", {}, () => [
              Ie(ee(a, { size: "14px" }, null, 512), [
                [Me, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          g("view", ev, L(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          g("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (v) => e.handClose("cross"))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              ee(i, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), d("view", tv, [
          g("view", nv, [
            (c(!0), d(Z, null, re(e.selectedRegion, (v, b) => (c(), d("view", {
              key: b,
              class: D(["nut-address__region-item", b == e.tabIndex ? "active" : ""]),
              onClick: (w) => e.changeRegionTab(v, b)
            }, [
              g("view", null, L(e.getTabName(v, b)), 1)
            ], 10, ov))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), d("view", lv, [
              g("view", null, L(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            g("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: V({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), d("view", sv, [
            g("ul", av, [
              (c(!0), d(Z, null, re(e.regionList, (v, b) => {
                var w, C;
                return c(), d("li", {
                  key: b,
                  class: D(["nut-address__detail-item", ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == v.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(v)
                }, [
                  g("div", null, [
                    ((C = e.selectedRegion[e.tabIndex]) == null ? void 0 : C.id) == v.id ? _(e.$slots, "icon", { key: 0 }, () => [
                      ee(r, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(" " + L(v.name), 1)
                  ])
                ], 10, iv);
              }), 128))
            ], 512)
          ])) : (c(), d("view", rv, [
            ee(f, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), d("view", uv, [
          g("div", cv, [
            g("ul", dv, [
              (c(!0), d(Z, null, re(e.existAddress, (v, b) => (c(), d("li", {
                key: b,
                class: D(["nut-address__exist-group-item", v.selectedAddress ? "active" : ""]),
                onClick: (w) => e.selectedExist(v)
              }, [
                v.selectedAddress ? N("", !0) : _(e.$slots, "unselected-icon", { key: 0 }, () => [
                  ee(p, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                v.selectedAddress ? _(e.$slots, "icon", { key: 1 }, () => [
                  ee(r, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                g("div", pv, [
                  v.name ? (c(), d("div", mv, L(v.name), 1)) : N("", !0),
                  v.phone ? (c(), d("div", hv, L(v.phone), 1)) : N("", !0),
                  g("div", vv, [
                    g("view", null, L(v.provinceName + v.cityName + v.countyName + v.townName + v.addressDetail), 1)
                  ])
                ])
              ], 10, fv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            g("div", gv, L(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        _(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const bv = /* @__PURE__ */ le(J0, [["render", yv]]), { create: $v } = te("barrage"), wv = $v({
  name: "barrage",
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!St().default;
    let o = z(document.createElement("div")), s = z(document.createElement("div")), l = null;
    const a = z(e.danmu), i = z(e.rows), r = z(e.top), f = z(0), p = e.speeds, y = z(0);
    $e(() => {
      v(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (w(), f.value = 0, b("hidden")) : document.visibilityState === "visible" && v();
      });
    }), Ue(() => {
      a.value = [], w();
    });
    const v = () => {
      y.value = o.value.offsetWidth, n && b("init"), setTimeout(() => {
        var h;
        (h = o.value) == null || h.style.setProperty("--move-distance", `-${y.value}px`), u();
      }, 300);
    }, b = (h) => {
      var I;
      const $ = document.getElementsByClassName("slotBody" + t);
      let P = ((I = $ == null ? void 0 : $[0]) == null ? void 0 : I.children) || [];
      const A = [];
      P && Array.from(P).forEach((B) => {
        h == "init" ? (B.style.opacity = "0", A.push(B)) : (B.classList = "", B.style = {});
      }), h == "init" && (a.value = A);
    }, w = () => {
      l && (clearTimeout(l), l = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (a.value = [...h]);
      }
    );
    const C = (h) => {
      const $ = f.value % a.value.length;
      !e.loop && f.value === a.value.length ? a.value.splice(a.value.length, 0, h) : a.value.splice($, 0, h);
    }, u = () => {
      w(), l = setTimeout(() => {
        m();
      }, e.frequency);
    }, m = () => {
      var P;
      const h = e.loop ? f.value % a.value.length : f.value;
      let $ = document.createElement("view");
      n && typeof a.value[h] == "object" ? ($ = a.value[h], (P = $ == null ? void 0 : $.classList) == null || P.add("nut-barrage__item")) : ($.innerHTML = a.value[h], $.classList.add("nut-barrage__item"), s.value.appendChild($)), _e(() => {
        var I;
        const A = $.offsetHeight;
        if ((I = $ == null ? void 0 : $.classList) == null || I.add("move"), $.style.animationDuration = `${p}ms`, $.style.top = h % i.value * (A + r.value) + 20 + "px", $.style.opacity = "1", !n) {
          const B = $.offsetWidth;
          $.style.width = B + 20 + "px";
        }
        $.addEventListener("animationend", () => {
          n ? $.classList.remove("move") : s.value.removeChild($);
        }), !(!e.loop && f.value >= a.value.length - 1) && (f.value++, f.value >= a.value.length && (f.value = 0), $.removeEventListener("animationend", () => {
        }), u());
      });
    };
    return { classTime: t, danmuList: a, dmBody: o, dmContainer: s, add: C };
  }
}), kv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function Cv(e, t, n, o, s, l) {
  return c(), d("div", kv, [
    g("div", {
      ref: "dmContainer",
      class: D(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (c(), d("div", {
        key: 0,
        class: D(["slotBody", "slotBody" + e.classTime])
      }, [
        _(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const Sv = /* @__PURE__ */ le(wv, [["render", Cv]]), { create: Tv } = te("signature"), _v = "NutSignature", Nv = Tv({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: () => document.getElementsByTagName("body")[0].className.indexOf("nut-theme-dark") == -1 ? "#000" : "#fff"
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: ""
    }
  },
  components: {
    NutButton: Xe
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = Se(_v), o = z(null), s = z(null), l = S(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), a = me({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), i = () => {
      let m = document.createElement("canvas");
      return !!(m.getContext && m.getContext("2d"));
    }, r = () => {
      o.value.addEventListener(a.events[0], f, !1);
    }, f = (m) => {
      m.preventDefault(), a.ctx.beginPath(), a.ctx.lineWidth = e.lineWidth, a.ctx.strokeStyle = e.strokeStyle, t("start"), o.value.addEventListener(a.events[1], p, !1), o.value.addEventListener(a.events[2], y, !1), o.value.addEventListener(a.events[3], v, !1);
    }, p = (m) => {
      m.preventDefault();
      let h = a.isSupportTouch ? m.touches[0] : m;
      t("signing", h);
      let $ = o.value.getBoundingClientRect(), P = h.clientX - $.left, A = h.clientY - $.top;
      a.ctx.lineTo(P, A), a.ctx.stroke();
    }, y = (m) => {
      m.preventDefault(), t("end"), o.value.removeEventListener(a.events[1], p, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, v = (m) => {
      m.preventDefault(), o.value.removeEventListener(a.events[1], p, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, b = () => {
      o.value.addEventListener(a.events[2], y, !1), a.ctx.clearRect(0, 0, a.canvasWidth, a.canvasHeight), a.ctx.closePath(), t("clear");
    }, w = () => {
      u(o.value);
    }, C = (m) => {
      if (!m)
        return !0;
      var h = document.createElement("canvas");
      return h.width = m.width, h.height = m.height, (m == null ? void 0 : m.toDataURL()) == h.toDataURL();
    }, u = (m) => {
      let h;
      switch (e.type) {
        case "png":
          h = m.toDataURL("image/png");
          break;
        case "jpg":
          h = m.toDataURL("image/jpeg", 0.8);
          break;
      }
      const $ = C(m) ? "请绘制签名" : m, P = C(m) ? "" : h;
      t("confirm", $, P);
    };
    return $e(() => {
      i() && (a.ctx = o.value.getContext("2d"), a.canvasWidth = s.value.offsetWidth, a.canvasHeight = s.value.offsetHeight, r());
    }), pe(G({}, we(a)), { canvas: o, wrap: s, isCanvasSupported: i, confirm: w, clear: b, classes: l, translate: n });
  }
}), Dv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Iv = ["height", "width"], Bv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Mv(e, t, n, o, s, l) {
  const a = X("nut-button");
  return c(), d("div", {
    class: D(e.classes)
  }, [
    g("div", Dv, [
      Ie(g("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Iv), [
        [Me, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (c(), d("p", Bv, L(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    ee(a, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (i) => e.clear())
    }, {
      default: ne(() => [
        ge(L(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    ee(a, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (i) => e.confirm())
    }, {
      default: ne(() => [
        ge(L(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Lv = /* @__PURE__ */ le(Nv, [["render", Mv]]), { create: Pv } = te("time-select"), Av = "NutTimeSelect", Ev = Pv({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: {
      type: Boolean,
      defalut: !1
    },
    height: {
      type: [String],
      default: "20%"
    },
    title: {
      type: String,
      default: ""
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => []
    },
    lockScroll: {
      type: [Boolean],
      default: !0
    },
    teleportDisable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "select"],
  setup: (e, { emit: t }) => {
    const n = Se(Av), o = S(() => ({
      width: "100%",
      height: e.height
    })), s = S(() => e.currentKey), l = S(() => e.currentTime), a = () => {
      t("update:visible", !1), t("select", l.value);
    };
    return Re("currentKey", s), Re("currentTime", l), {
      popStyle: o,
      close: a,
      translate: n
    };
  }
}), zv = { class: "nut-time-select" }, Vv = { class: "nut-time-select__title" }, Hv = { class: "nut-time-select__title__fixed" }, Ov = { key: 0 }, Rv = { class: "nut-time-select__content" }, Fv = { class: "nut-time-select__content__pannel" }, Wv = { class: "nut-time-select__content__detail" };
function Yv(e, t, n, o, s, l) {
  const a = X("nut-popup");
  return c(), J(a, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": e.teleportDisable,
    visible: e.visible,
    style: V(e.popStyle),
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.close,
    onClickCloseIcon: e.close
  }, {
    default: ne(() => [
      g("view", zv, [
        g("view", Vv, [
          g("view", Hv, [
            e.$slots.title ? _(e.$slots, "title", { key: 1 }) : (c(), d("span", Ov, L(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        g("view", Rv, [
          g("view", Fv, [
            _(e.$slots, "pannel")
          ]),
          g("view", Wv, [
            _(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Kv = /* @__PURE__ */ le(Ev, [["render", Yv]]), { componentName: jv, create: Uv } = te("time-pannel"), Xv = Uv({
  name: "timepannel",
  props: {
    name: {
      type: String,
      default: ""
    },
    pannelKey: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ["change"],
  setup: (e, { emit: t }) => {
    const n = Ve("currentKey"), o = me({
      currentKey: n
    }), s = S(() => ({
      [jv]: !0,
      "nut-time-pannel--curr": o.currentKey == e.pannelKey
    })), l = (a) => {
      t("change", a);
    };
    return pe(G({}, we(o)), {
      classes: s,
      handlePannel: l
    });
  }
});
function qv(e, t, n, o, s, l) {
  return c(), d("view", {
    class: D(e.classes),
    onClick: t[0] || (t[0] = (a) => e.handlePannel(e.pannelKey))
  }, L(e.name), 3);
}
const Gv = /* @__PURE__ */ le(Xv, [["render", qv]]), { create: Zv } = te("time-detail"), Jv = Zv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Ve("currentKey"), o = Ve("currentTime"), s = me({
      currentKey: n,
      currentTime: o
    }), l = (r) => {
      let f = s.currentTime.find((p) => p.key == s.currentKey);
      if (f)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": f.list.filter((p) => p === r).length > 0
        };
    }, a = S(() => e.times.find((r) => r.key == s.currentKey).list), i = (r) => {
      t("select", r);
    };
    return pe(G({}, we(s)), {
      getClass: l,
      renderData: a,
      handleTime: i
    });
  }
}), Qv = { class: "nut-time-detail" }, xv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, eg = { class: "nut-time-detail__detail__list" }, tg = ["onClick"];
function ng(e, t, n, o, s, l) {
  return c(), d("view", Qv, [
    g("view", xv, [
      g("view", eg, [
        (c(!0), d(Z, null, re(e.renderData, (a) => (c(), d("view", {
          key: a,
          class: D(e.getClass(a)),
          onClick: (i) => e.handleTime(a)
        }, L(a), 11, tg))), 128))
      ])
    ])
  ]);
}
const og = /* @__PURE__ */ le(Jv, [["render", ng]]), { create: lg } = te("sku-header"), sg = "NutSkuHeader", ag = lg({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Rt
  },
  setup(e, { slots: t }) {
    const n = Se(sg);
    return {
      getSlots: (s) => t[s],
      translate: n
    };
  }
}), ig = { class: "nut-sku-header" }, rg = ["src"], ug = { class: "nut-sku-header-right" }, cg = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function dg(e, t, n, o, s, l) {
  const a = X("nut-price");
  return c(), d("view", ig, [
    g("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, rg),
    g("view", ug, [
      e.getSlots("sku-header-price") ? _(e.$slots, "sku-header-price", { key: 0 }) : (c(), J(a, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? _(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), d("view", cg, L(e.translate("skuId")) + " : " + L(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const fg = /* @__PURE__ */ le(ag, [["render", dg]]), { create: pg } = te("sku-select"), mg = pg({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = z([]);
    return Q(
      () => e.sku,
      (s) => {
        n.value = [].slice.call(s);
      },
      { deep: !0 }
    ), $e(() => {
      e.sku.length > 0 && (n.value = [].slice.call(e.sku));
    }), {
      skuInfo: n,
      changeSaleChild: (s, l, a, i) => {
        s.checkFlag || s.disable || t("selectSku", {
          sku: s,
          skuIndex: l,
          parentSku: a,
          parentIndex: i
        });
      }
    };
  }
}), hg = { class: "nut-sku-select" }, vg = { class: "nut-sku-select-item-title" }, gg = { class: "nut-sku-select-item-skus" }, yg = ["onClick"];
function bg(e, t, n, o, s, l) {
  return c(), d("view", hg, [
    (c(!0), d(Z, null, re(e.skuInfo, (a, i) => (c(), d("view", {
      key: a.id,
      class: "nut-sku-select-item"
    }, [
      g("view", vg, L(a.name), 1),
      g("view", gg, [
        (c(!0), d(Z, null, re(a.list, (r, f) => (c(), d("view", {
          key: r.name,
          class: D(["nut-sku-select-item-skus-sku", [{ active: !r.disable && r.active }, { disable: r.disable }]]),
          onClick: (p) => e.changeSaleChild(r, f, a, i)
        }, L(r.name), 11, yg))), 128))
      ])
    ]))), 128))
  ]);
}
const $g = /* @__PURE__ */ le(mg, [["render", bg]]), { create: wg } = te("sku-stepper"), kg = wg({
  props: {
    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // stepper 前文案提示
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: "购买数量"
    }
  },
  emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
  components: {
    NutInputNumber: Vt
  },
  setup(e, { emit: t }) {
    const n = z(e.stepperMin);
    return $e(() => {
      n.value = e.stepperMin;
    }), {
      goodsCount: n,
      add: (r) => {
        t("add", r);
      },
      reduce: (r) => {
        t("reduce", r);
      },
      overlimit: (r, f) => {
        t("overLimit", {
          action: f,
          value: parseInt(n.value + "")
        });
      },
      getExtraText: () => {
        const { stepperExtraText: r } = e;
        if (r)
          return r === !0 ? "" : r == null ? void 0 : r();
      },
      changeStepper: (r) => {
        n.value = r, t("changeStepper", r);
      }
    };
  }
}), Cg = { class: "nut-sku-stepper" }, Sg = { class: "nut-sku-stepper-title" }, Tg = ["innerHTML"], _g = { class: "nut-sku-stepper-count" };
function Ng(e, t, n, o, s, l) {
  const a = X("nut-input-number");
  return c(), d("view", Cg, [
    g("view", Sg, L(e.stepperTitle), 1),
    g("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, Tg),
    g("view", _g, [
      ee(a, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.goodsCount = i),
        min: e.stepperMin,
        max: e.stepperMax,
        onAdd: e.add,
        onReduce: e.reduce,
        onOverlimit: e.overlimit,
        onChange: e.changeStepper
      }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
    ])
  ]);
}
const Dg = /* @__PURE__ */ le(kg, [["render", Ng]]), { create: Ig } = te("sku-operate"), Bg = Ig({
  props: {
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: "立即购买"
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: "加入购物车"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
  setup(e, { emit: t, slots: n }) {
    return {
      getBtnDesc: (a) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[a],
      clickBtnOperate: (a) => {
        t("clickBtnOperate", a);
      },
      getSlots: (a) => n[a]
    };
  }
}), Mg = {
  key: 0,
  class: "nut-sku-operate"
}, Lg = {
  key: 0,
  class: "nut-sku-operate-desc"
}, Pg = {
  key: 1,
  class: "nut-sku-operate-btn"
}, Ag = ["onClick"];
function Eg(e, t, n, o, s, l) {
  return e.btnOptions.length > 0 ? (c(), d("view", Mg, [
    e.btnExtraText ? (c(), d("view", Lg, L(e.btnExtraText), 1)) : N("", !0),
    _(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (c(), d("view", Pg, [
      (c(!0), d(Z, null, re(e.btnOptions, (a, i) => (c(), d("view", {
        key: i,
        class: D([`nut-sku-operate-btn-${a}`, "nut-sku-operate-btn-item"]),
        onClick: (r) => e.clickBtnOperate(a)
      }, L(e.getBtnDesc(a)), 11, Ag))), 128))
    ]))
  ])) : N("", !0);
}
const zg = /* @__PURE__ */ le(Bg, [["render", Eg]]), { create: Vg } = te("sku"), Hg = "NutSku", Og = Vg({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    sku: {
      type: Array,
      default: []
    },
    goods: {
      type: Object,
      default: {}
    },
    // stepper 最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    // stepper 最小值
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: ""
    },
    // stepper 前面文案
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: ""
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: ""
    },
    // 确定文案
    confirmText: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:visible",
    "selectSku",
    "changeStepper",
    "clickBtnOperate",
    "clickCloseIcon",
    "clickOverlay",
    "close",
    "reduce",
    "add",
    "overLimit"
  ],
  components: {
    SkuHeader: fg,
    SkuSelect: $g,
    SkuStepper: Dg,
    SkuOperate: zg,
    NutPopup: Ae
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(Hg), s = z(e.visible), l = z(e.stepperMin);
    Q(
      () => e.visible,
      (C) => {
        s.value = C;
      }
    ), Q(
      () => s.value,
      (C) => {
        C == !1 && w();
      }
    );
    const a = (C) => n[C], i = (C) => {
      t("selectSku", C);
    }, r = (C) => {
      l.value = C, t("changeStepper", C);
    }, f = (C) => {
      t("add", C);
    }, p = (C) => {
      t("reduce", C);
    }, y = (C) => {
      t("overLimit", C);
    }, v = (C) => {
      t("clickBtnOperate", {
        type: C,
        value: l.value
      });
    }, b = (C) => {
      C == "icon" && t("clickCloseIcon"), C == "overlay" && t("clickOverlay"), C == "close" && t("close"), s.value = !1;
    }, w = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: s,
      closePopup: b,
      selectSku: i,
      changeStepper: r,
      stepperOverLimit: y,
      clickBtnOperate: v,
      add: f,
      reduce: p,
      getSlots: a,
      translate: o
    };
  }
}), Rg = { class: "nut-sku" }, Fg = { class: "nut-sku-content" };
function Wg(e, t, n, o, s, l) {
  const a = X("sku-header"), i = X("SkuSelect"), r = X("sku-stepper"), f = X("sku-operate"), p = X("nut-popup");
  return c(), J(p, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (y) => e.showPopup = y),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = (y) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = (y) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = (y) => e.closePopup("close"))
  }, {
    default: ne(() => [
      g("view", Rg, [
        _(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (c(), J(a, {
          key: 0,
          goods: e.goods
        }, Ct({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: ne(() => [
              _(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: ne(() => [
              _(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        g("view", Fg, [
          _(e.$slots, "sku-select-top"),
          _(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (c(), J(i, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          _(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? N("", !0) : (c(), J(r, {
            key: 1,
            goods: e.goods,
            "stepper-title": e.stepperTitle || e.translate("buyNumber"),
            "stepper-max": e.stepperMax,
            "stepper-min": e.stepperMin,
            "stepper-extra-text": e.stepperExtraText,
            onAdd: e.add,
            onReduce: e.reduce,
            onChangeStepper: e.changeStepper,
            onOverLimit: e.stepperOverLimit
          }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])),
          _(e.$slots, "sku-stepper-bottom")
        ]),
        ee(f, {
          "btn-extra-text": e.btnExtraText,
          "btn-options": e.btnOptions,
          "buy-text": e.buyText || e.translate("buyNow"),
          "add-cart-text": e.addCartText || e.translate("addToCart"),
          "confirm-text": e.confirmText || e.translate("confirm"),
          onClickBtnOperate: e.clickBtnOperate
        }, Ct({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: ne(() => [
              _(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const Yg = /* @__PURE__ */ le(Og, [["render", Wg]]), { create: Kg } = te("card"), jg = Kg({
  components: {
    NutPrice: Rt,
    NutTag: Cn
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    vipPrice: {
      type: String,
      default: ""
    },
    shopDesc: {
      type: String,
      default: ""
    },
    delivery: {
      type: String,
      default: ""
    },
    shopName: {
      type: String,
      default: ""
    },
    isNeedPrice: {
      type: Boolean,
      default: !0
    }
  }
}), Ug = { class: "nut-card" }, Xg = { class: "nut-card__left" }, qg = ["src"], Gg = { class: "nut-card__right" }, Zg = { class: "nut-card__right__title" }, Jg = {
  key: 0,
  class: "nut-card__right__price"
}, Qg = { class: "nut-card__right__other" }, xg = { class: "nut-card__right__shop" }, ey = { class: "nut-card__right__shop__name" };
function ty(e, t, n, o, s, l) {
  const a = X("nut-price"), i = X("nut-tag");
  return c(), d("div", Ug, [
    g("div", Xg, [
      g("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, qg)
    ]),
    g("div", Gg, [
      g("div", Zg, L(e.title), 1),
      _(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), d("div", Jg, [
        _(e.$slots, "price", {}, () => [
          ee(a, { price: e.price }, null, 8, ["price"])
        ]),
        _(e.$slots, "origin", {}, () => [
          ee(a, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      g("div", Qg, [
        _(e.$slots, "shop-tag", {}, () => [
          ee(i, { type: "danger" }, {
            default: ne(() => [
              ge(L(e.shopDesc), 1)
            ]),
            _: 1
          }),
          ee(i, { plain: "" }, {
            default: ne(() => [
              ge(L(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      g("div", xg, [
        g("div", ey, L(e.shopName), 1),
        _(e.$slots, "footer")
      ])
    ])
  ]);
}
const ny = /* @__PURE__ */ le(jg, [["render", ty]]), { create: oy } = te("ecard"), ly = "NutEcard", sy = oy({
  components: {
    NutInputNumber: Vt
  },
  props: {
    chooseText: {
      type: String,
      default: ""
    },
    otherValueText: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      default: () => []
    },
    cardAmountMin: {
      type: Number,
      default: 1
    },
    cardAmountMax: {
      type: Number,
      default: 9999
    },
    cardBuyMin: {
      type: Number,
      default: 1
    },
    cardBuyMax: {
      type: Number,
      default: 9999
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: "¥"
    }
  },
  emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(ly), o = z(null), s = z(null), l = z(""), a = z(e.cardAmountMin), i = z(e.modelValue), r = (v, b) => {
      o.value = b, a.value = e.cardAmountMin, s.value = v.price, t("change", v), t("update:modelValue", v.price);
    }, f = (v) => {
      let w = v.target.value.replace(/[^\d]/g, "");
      l.value = w, s.value = w, Number(w) > e.cardAmountMax && (l.value = e.cardAmountMax, s.value = e.cardAmountMax), Number(w) < e.cardAmountMin && (l.value = e.cardAmountMin, s.value = e.cardAmountMin), t("inputChange", Number(l.value)), t("update:modelValue", Number(l.value));
    }, p = () => {
      o.value = "input", a.value = e.cardAmountMin, s.value = l.value, t("update:modelValue", l.value), t("inputClick");
    }, y = (v) => {
      a.value = v, t("changeStep", a.value, s.value);
    };
    return Q(
      () => e.modelValue,
      (v) => {
        i.value = v;
      }
    ), {
      handleClick: r,
      changeStep: y,
      change: f,
      inputClick: p,
      stepValue: a,
      currentIndex: o,
      inputValue: l,
      money: i,
      translate: n
    };
  }
}), ay = { class: "nut-ecard" }, iy = { class: "nut-ecard__title" }, ry = { class: "nut-ecard__list" }, uy = ["onClick"], cy = { class: "nut-ecard__list__input--con" }, dy = ["placeholder"], fy = { class: "nut-ecard__list__step" };
function py(e, t, n, o, s, l) {
  const a = X("nut-input-number");
  return c(), d("view", ay, [
    g("view", iy, L(e.chooseText || e.translate("chooseText")), 1),
    g("view", ry, [
      (c(!0), d(Z, null, re(e.dataList, (i, r) => (c(), d("view", {
        key: r,
        class: D(["nut-ecard__list__item", e.currentIndex == r ? "active" : ""]),
        onClick: (f) => e.handleClick(i, r)
      }, L(i.price), 11, uy))), 128)),
      g("view", {
        class: D(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...i) => e.inputClick && e.inputClick(...i))
      }, [
        g("view", null, L(e.otherValueText || e.translate("otherValueText")), 1),
        g("view", cy, [
          Ie(g("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i))
          }, null, 40, dy), [
            [wl, e.inputValue]
          ]),
          ge(" " + L(e.suffix), 1)
        ])
      ], 2),
      g("view", fy, [
        g("view", null, L(e.suffix) + L(e.money), 1),
        ee(a, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (i) => e.stepValue = i),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const my = /* @__PURE__ */ le(sy, [["render", py]]), { create: hy } = te("address-list-item"), vy = "NutAddressList", gy = hy({
  components: { Del: to, Edit: Os },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = Se(vy);
    return {
      delClick: (a) => {
        t("delIcon", a, e.item), a.stopPropagation();
      },
      editClick: (a) => {
        t("editIcon", a, e.item), a.stopPropagation();
      },
      contentsClick: (a) => {
        t("clickItem", a, e.item), a.stopPropagation();
      },
      translate: n
    };
  }
}), yy = { class: "nut-address-list-item__info" }, by = { class: "nut-address-list-item__info-contact" }, $y = { class: "nut-address-list-item__info-contact-name" }, wy = { class: "nut-address-list-item__info-contact-tel" }, ky = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, Cy = { class: "nut-address-list-item__info-handle" }, Sy = { class: "nut-address-list-item__addr" };
function Ty(e, t, n, o, s, l) {
  const a = X("Del"), i = X("Edit");
  return c(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...r) => e.contentsClick && e.contentsClick(...r))
  }, [
    g("div", yy, [
      g("div", by, [
        _(e.$slots, "content-top", {}, () => [
          g("div", $y, L(e.item.addressName), 1),
          g("div", wy, L(e.item.phone), 1),
          e.item.defaultAddress ? (c(), d("div", ky, L(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      g("div", Cy, [
        _(e.$slots, "content-icon", {}, () => [
          ee(a, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          ee(i, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    g("div", Sy, [
      _(e.$slots, "content-addr", {}, () => [
        ge(L(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Yn = /* @__PURE__ */ le(gy, [["render", Ty]]), { create: _y } = te("address-list-general"), Ny = _y({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
  components: {
    ItemContents: Yn,
    NutButton: Xe,
    NutSwipe: vn
  },
  setup(e, { emit: t }) {
    const n = () => Te(Yn, {
      item: e.item,
      onDelIcon(A) {
        a(A);
      },
      onEditIcon(A) {
        i(A);
      },
      onClickItem(A) {
        r(A);
      }
    });
    let o = null;
    const s = z(!1), l = z(!1), a = (A) => {
      t("delIcon", A, e.item), A.stopPropagation();
    }, i = (A) => {
      t("editIcon", A, e.item), A.stopPropagation();
    }, r = (A) => {
      s.value || (t("clickItem", A, e.item), A.stopPropagation());
    }, f = (A) => {
      t("longDel", A, e.item), A.stopPropagation();
    }, p = (A) => {
      o = 0, l.value = !0, t("longDown", A, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: l,
      clickItem: r,
      editClick: i,
      delClick: a,
      delLongClick: f,
      holddownstart: (A) => {
        o = setTimeout(() => {
          p(A);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(o);
      },
      holddownend: () => {
        clearTimeout(o);
      },
      copyCLick: (A) => {
        t("longCopy", A, e.item), A.stopPropagation();
      },
      hideMaskClick: () => {
        l.value = !1;
      },
      setDefault: (A) => {
        t("longSet", A, e.item), A.stopPropagation();
      },
      maskClick: (A) => {
        o != 0 && (l.value = !1), A.stopPropagation(), A.preventDefault();
      },
      swipeDelClick: (A) => {
        t("swipeDel", A, e.item), A.stopPropagation();
      },
      swipestart: () => {
        s.value = !1;
      },
      swipemove: () => {
        s.value = !0;
      }
    };
  }
}), Dy = {
  key: 0,
  class: "nut-address-list-general"
}, Iy = { class: "nut-address-list-swipe" };
function By(e, t, n, o, s, l) {
  const a = X("nut-button"), i = X("nut-swipe");
  return e.swipeEdition ? (c(), J(i, { key: 1 }, {
    right: ne(() => [
      _(e.$slots, "swipe-right-btn", {}, () => [
        ee(a, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: ne(() => [
            ge("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: ne(() => [
      g("div", Iy, [
        (c(), J(ze(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": ne(() => [
            _(e.$slots, "content-info")
          ]),
          "content-icon": ne(() => [
            _(e.$slots, "content-icons")
          ]),
          "content-addr": ne(() => [
            _(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (c(), d("div", Dy, [
    (c(), J(ze(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": ne(() => [
        _(e.$slots, "content-info")
      ]),
      "content-icon": ne(() => [
        _(e.$slots, "content-icons")
      ]),
      "content-addr": ne(() => [
        _(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (c(), d("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...r) => e.maskClick && e.maskClick(...r))
    }, [
      _(e.$slots, "longpress-all", {}, () => [
        g("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...r) => e.copyCLick && e.copyCLick(...r))
        }, " 复制地址 "),
        g("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...r) => e.setDefault && e.setDefault(...r))
        }, " 设置默认 "),
        g("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...r) => e.delLongClick && e.delLongClick(...r))
        }, " 删除地址 ")
      ])
    ])) : N("", !0),
    e.showMaskRef ? (c(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...r) => e.hideMaskClick && e.hideMaskClick(...r))
    })) : N("", !0)
  ]));
}
const My = /* @__PURE__ */ le(Ny, [["render", By]]), { create: Ly } = te("address-list"), Py = "NutAddressList", Ay = Ly({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    },
    showBottomButton: {
      type: Boolean,
      default: !0
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell: My,
    NutButton: Xe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = Se(Py), o = z([]), s = me({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), l = () => {
      Object.keys(e.dataOptions).length > 0 && (o.value = e.data.map((w) => Nl(s, w, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => l(),
      { deep: !0 }
    );
    const a = (w, C) => {
      t("delIcon", w, C), w.stopPropagation();
    }, i = (w, C) => {
      t("editIcon", w, C), w.stopPropagation();
    }, r = (w, C) => {
      t("clickItem", w, C), w.stopPropagation();
    }, f = (w, C) => {
      t("longCopy", w, C), w.stopPropagation();
    }, p = (w, C) => {
      t("longSet", w, C), w.stopPropagation();
    }, y = (w, C) => {
      t("longDel", w, C), w.stopPropagation();
    }, v = (w, C) => {
      t("swipeDel", w, C), w.stopPropagation();
    }, b = (w) => {
      t("add", w), w.stopPropagation();
    };
    return $e(() => {
      l();
    }), {
      clickDelIcon: a,
      clickEditIcon: i,
      clickContentItem: r,
      clickLongCopy: f,
      clickLongSet: p,
      clickLongDel: y,
      clickSwipeDel: v,
      addAddress: b,
      dataArray: o,
      translate: n
    };
  }
}), Ey = { class: "nut-address-list" };
function zy(e, t, n, o, s, l) {
  const a = X("general-shell"), i = X("nut-button");
  return c(), d("div", Ey, [
    (c(!0), d(Z, null, re(e.dataArray, (r, f) => (c(), J(a, {
      key: f,
      item: r,
      "long-press": e.longPress,
      "swipe-edition": e.swipeEdition,
      onDelIcon: e.clickDelIcon,
      onEditIcon: e.clickEditIcon,
      onClickItem: e.clickContentItem,
      onSwipeDel: e.clickSwipeDel,
      onLongCopy: e.clickLongCopy,
      onLongSet: e.clickLongSet,
      onLongDel: e.clickLongDel
    }, Ct({
      "content-info": ne(() => [
        _(e.$slots, "item-infos", { item: r })
      ]),
      "content-icons": ne(() => [
        _(e.$slots, "item-icon", { item: r })
      ]),
      "content-addrs": ne(() => [
        _(e.$slots, "item-addr", { item: r })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: ne(() => [
          _(e.$slots, "longpress-btns", { item: r })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: ne(() => [
          _(e.$slots, "swipe-right", { item: r })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (c(), d("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...r) => e.addAddress && e.addAddress(...r))
    }, [
      ee(i, {
        block: "",
        type: "danger"
      }, {
        default: ne(() => [
          ge(L(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : N("", !0)
  ]);
}
const Vy = /* @__PURE__ */ le(Ay, [["render", zy]]), { create: Hy } = te("category"), Oy = Hy({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 左侧导航栏
    category: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: t }) {
    const n = z(0), o = z(!1);
    return {
      getChildList: (l) => {
        n.value = l, t("change", l);
      },
      checkIndex: n,
      categoryLeft: o
    };
  }
}), Ry = { class: "nut-category" }, Fy = { class: "nut-category__cateList" }, Wy = { key: 0 }, Yy = ["onClick"];
function Ky(e, t, n, o, s, l) {
  return c(), d("div", Ry, [
    g("div", Fy, [
      e.type == "classify" || e.type == "text" ? (c(), d("div", Wy, [
        (c(!0), d(Z, null, re(e.category, (a, i) => (c(), d("div", {
          key: i,
          class: "nut-category__cateListLeft"
        }, [
          g("div", {
            class: D([e.checkIndex == i ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (r) => e.getChildList(i)
          }, L(a.catName), 11, Yy)
        ]))), 128))
      ])) : N("", !0),
      _(e.$slots, "default")
    ])
  ]);
}
const jy = /* @__PURE__ */ le(Oy, [["render", Ky]]), { create: Uy } = te("category-pane"), Xy = Uy({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 右侧导航数据
    categoryChild: {
      type: Array,
      default: () => []
    },
    // 模式传入自定义数据
    customCategory: {
      type: Array,
      default: () => []
    }
  },
  setup(e, { emit: t }) {
    return {
      onChange: (o) => {
        t("onChange", o);
      }
    };
  }
}), qy = { class: "nut-category-pane" }, Gy = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, Zy = { class: "nut-category-pane__childTitle" }, Jy = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, Qy = ["onClick"], xy = ["src"], e2 = { class: "nut-category-pane__skuImg" }, t2 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, n2 = { class: "nut-category-pane__childTitle" }, o2 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, l2 = ["onClick"], s2 = { class: "nut-category-pane__skuName" }, a2 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, i2 = ["onClick"];
function r2(e, t, n, o, s, l) {
  return c(), d("div", qy, [
    e.type == "classify" ? (c(), d("div", Gy, [
      (c(!0), d(Z, null, re(e.categoryChild, (a, i) => (c(), d("div", { key: i }, [
        g("div", Zy, L(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), d("div", Jy, [
          (c(!0), d(Z, null, re(a.childCateList, (r, f) => (c(), d("div", {
            key: f,
            class: "nut-category-pane__childItem",
            onClick: (p) => e.onChange(r)
          }, [
            g("img", {
              class: "nut-category-pane__childImg",
              src: r.backImg
            }, null, 8, xy),
            g("div", e2, L(r == null ? void 0 : r.catName), 1)
          ], 8, Qy))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (c(), d("div", t2, [
      (c(!0), d(Z, null, re(e.categoryChild, (a, i) => (c(), d("div", { key: i }, [
        g("div", n2, L(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), d("div", o2, [
          (c(!0), d(Z, null, re(a.childCateList, (r, f) => (c(), d("div", {
            key: f,
            class: "nut-category-pane__childItem",
            onClick: (p) => e.onChange(r)
          }, [
            g("div", s2, L(r == null ? void 0 : r.catName), 1)
          ], 8, l2))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (c(), d("div", a2, [
      (c(!0), d(Z, null, re(e.customCategory, (a, i) => (c(), d("div", {
        key: i,
        class: "nut-category-pane__skuName",
        onClick: (r) => e.onChange(a)
      }, L(a == null ? void 0 : a.catName), 9, i2))), 128))
    ])) : N("", !0)
  ]);
}
const u2 = /* @__PURE__ */ le(Xy, [["render", r2]]), { create: c2 } = te("comment-header"), d2 = c2({
  components: {
    NutRate: fn
  },
  props: {
    type: {
      type: String,
      default: "default"
      // default，complex
    },
    info: {
      type: Object,
      default: () => {
      }
    },
    labels: {
      type: Function,
      default: () => ""
    }
  },
  emits: ["handleClick"],
  setup(e, { emit: t }) {
    return { handleClick: () => {
      t("handleClick");
    } };
  }
}), f2 = { class: "nut-comment-header__user" }, p2 = { class: "nut-comment-header__user-avter" }, m2 = ["src"], h2 = { class: "nut-comment-header__user-score" }, v2 = {
  key: 0,
  class: "nut-comment-header__time"
};
function g2(e, t, n, o, s, l) {
  const a = X("nut-rate");
  return c(), d("view", null, [
    e.info ? (c(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
    }, [
      g("view", f2, [
        g("view", p2, [
          e.info.avatar ? (c(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, m2)) : N("", !0)
        ]),
        e.type == "default" ? (c(), d("view", {
          key: 0,
          class: D([`nut-comment-header__user-${e.type}`])
        }, [
          g("view", {
            class: D([`nut-comment-header__user-${e.type}-name`])
          }, [
            g("span", null, L(e.info.nickName), 1),
            _(e.$slots, "labels")
          ], 2),
          g("view", h2, [
            ee(a, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (i) => e.info.score = i),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (c(), d("view", {
          key: 1,
          class: D([`nut-comment-header__user-${e.type}`])
        }, [
          g("span", {
            class: D([`nut-comment-header__user-${e.type}-name`])
          }, L(e.info.nickName), 3),
          _(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (c(), d("view", v2, L(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (c(), d("view", {
      key: 1,
      class: D([`nut-comment-header__${e.type}-score`])
    }, [
      ee(a, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (i) => e.info.score = i),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      g("i", {
        class: D([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      g("view", {
        class: D([`nut-comment-header__${e.type}-score-size`])
      }, L(e.info.size), 3)
    ], 2)) : N("", !0)
  ]);
}
const y2 = /* @__PURE__ */ le(d2, [["render", g2]]), { create: b2 } = te("comment-images"), $2 = b2({
  props: {
    type: {
      type: String,
      default: "one"
      // one multi
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  components: { Right: on },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), o = z(1), s = z([]);
    return Q(
      () => [e.videos, e.images],
      (a) => {
        a[0].length > 0 && a[0].forEach((i) => {
          i.type = "video";
        }), s.value = a[0].concat(a[1]);
      },
      { deep: !0 }
    ), $e(() => {
      e.videos.length > 0 && e.videos.forEach((a) => {
        a.type = "video";
      }), s.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: o, showImages: (a, i) => {
      const { videos: r, images: f } = e, p = a == "img" ? i - r.length : i;
      t("clickImages", {
        type: a,
        index: p,
        value: a == "img" ? f[p] : r[p]
      });
    }, totalImages: s };
  }
}), w2 = ["onClick"], k2 = ["src"], C2 = /* @__PURE__ */ g("view", { class: "nut-comment-images__play" }, null, -1), S2 = ["onClick"], T2 = ["src"], _2 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function N2(e, t, n, o, s, l) {
  const a = X("Right");
  return c(), d("view", {
    class: D(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), d(Z, null, re(e.videos, (i, r) => (c(), d("view", {
      key: i.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (f) => e.showImages("video", r)
    }, [
      g("img", {
        src: i.mainUrl
      }, null, 8, k2),
      C2
    ], 8, w2))), 128)),
    (c(!0), d(Z, null, re(e.images, (i, r) => (c(), d(Z, {
      key: i.id
    }, [
      e.type == "multi" && e.videos.length + r < 9 || e.type != "multi" ? (c(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (f) => e.showImages("img", r + e.videos.length)
      }, [
        g("img", {
          src: i.smallImgUrl ? i.smallImgUrl : i.imgUrl
        }, null, 8, T2),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + r > 7 ? (c(), d("view", _2, [
          g("span", null, "共 " + L(e.totalImages.length) + " 张", 1),
          ee(a, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, S2)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const D2 = /* @__PURE__ */ le($2, [["render", N2]]), { create: I2 } = te("comment-bottom"), B2 = "NutComment", M2 = I2({
  props: {
    type: {
      type: String,
      default: "base"
      // simple，base，complex
    },
    info: {
      type: Object,
      default: () => ({})
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: { Fabulous: Ks, Comment: _s, MoreX: Qa },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = Se(B2), o = z(!1), s = z([]);
    return $e(() => {
      const i = ["replay", "like", "more"];
      e.operation && e.operation.forEach((r) => {
        i.includes(r) && s.value.push(r);
      });
    }), { showPopver: o, operate: (i) => {
      i == "more" && (o.value = !o.value), t("clickOperate", i);
    }, mergeOp: s, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), L2 = { class: "nut-comment-bottom" }, P2 = { key: 0 }, A2 = { class: "nut-comment-bottom__cpx" }, E2 = ["onClick"];
function z2(e, t, n, o, s, l) {
  const a = X("Fabulous"), i = X("Comment"), r = X("MoreX");
  return c(), d("view", L2, [
    g("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      e.type != "complex" ? (c(), d("span", P2, L(e.info.size), 1)) : N("", !0)
    ]),
    g("view", A2, [
      (c(!0), d(Z, null, re(e.mergeOp, (f, p) => (c(), d("view", {
        key: p,
        class: D(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${f}`]),
        onClick: (y) => e.operate(f)
      }, [
        f != "more" ? (c(), d(Z, { key: 0 }, [
          g("span", null, L(e.info[f]), 1),
          f == "like" ? (c(), J(a, { key: 0 })) : (c(), J(i, { key: 1 }))
        ], 64)) : N("", !0),
        f == "more" ? (c(), d(Z, { key: 1 }, [
          ee(r),
          e.showPopver ? (c(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (y) => e.operate("popover"))
          }, L(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, E2))), 128))
    ])
  ]);
}
const V2 = /* @__PURE__ */ le(M2, [["render", z2]]), { create: H2 } = te("comment"), O2 = "NutComment", R2 = H2({
  props: {
    headerType: {
      type: String,
      default: "default"
      // 头部展示风格 default，complex
    },
    imagesRows: {
      type: String,
      default: "one"
      // 'one'  'multi'
    },
    ellipsis: {
      type: [String, Number, Boolean],
      default: !1
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },
    info: {
      type: Object,
      default: () => ({})
    },
    follow: {
      type: Object,
      default: () => ({})
    },
    labels: {
      type: Function,
      default: () => ""
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: {
    CommentHeader: y2,
    CommentImages: D2,
    CommentBottom: V2,
    Right: on
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = Se(O2);
    return { conEllipsis: S(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (i) => {
      t("clickOperate", i);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (i) => {
      t("clickImages", i);
    }, translate: n };
  }
}), F2 = {
  key: 0,
  class: "nut-comment"
}, W2 = ["innerHTML"], Y2 = { class: "nut-comment__follow-title" }, K2 = { class: "nut-comment__follow-com" };
function j2(e, t, n, o, s, l) {
  const a = X("comment-header"), i = X("comment-images"), r = X("Right"), f = X("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), d("view", F2, [
    ee(a, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: ne(() => [
        _(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    _(e.$slots, "feature"),
    g("view", {
      class: "nut-comment__main",
      style: V(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p)),
      innerHTML: e.info.content
    }, null, 12, W2),
    ee(i, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (c(), d("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      g("view", Y2, L(e.translate("additionalReview", e.follow.days)), 1),
      g("view", K2, L(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (c(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (p) => e.clickImages(e.follow.images))
      }, [
        ge(L(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        ee(r, { width: "12px" })
      ])) : N("", !0)
    ])) : N("", !0),
    ee(f, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    _(e.$slots, "comment-shop-reply")
  ])) : N("", !0);
}
const U2 = /* @__PURE__ */ le(R2, [["render", j2]]), X2 = { class: "nut-invoice" }, q2 = {
  key: 0,
  class: "nut-invoice__submit"
}, dl = /* @__PURE__ */ ve({
  name: "NutInvoice",
  __name: "invoice",
  props: {
    data: { default: () => [] },
    formValue: { default: () => {
    } },
    submit: { type: Boolean, default: !0 }
  },
  emits: ["submit", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = t, o = z(), s = () => {
      o.value.validate().then(({ valid: l, errors: a }) => {
        n("submit", l, a);
      });
    };
    return (l, a) => (c(), d("div", X2, [
      ee(ce(mn), {
        ref_key: "formRef",
        ref: o,
        "model-value": l.formValue
      }, {
        default: ne(() => [
          (c(!0), d(Z, null, re(l.data, (i, r) => (c(), J(ce(hn), {
            key: r,
            label: i.label,
            required: i.required,
            rules: i.rules,
            prop: i.formItemProp
          }, {
            default: ne(() => [
              i.type === "radio" ? (c(), J(ce(dn), {
                key: 0,
                modelValue: l.formValue[i.formItemProp],
                "onUpdate:modelValue": (f) => l.formValue[i.formItemProp] = f
              }, {
                default: ne(() => [
                  (c(!0), d(Z, null, re(i.radioLabel, (f, p) => (c(), J(ce(cn), {
                    key: p,
                    shape: "button",
                    label: f.label
                  }, {
                    default: ne(() => [
                      ge(L(f.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])) : (c(), J(ce(un), {
                key: 1,
                modelValue: l.formValue[i.formItemProp],
                "onUpdate:modelValue": (f) => l.formValue[i.formItemProp] = f,
                class: "nut-input-text",
                placeholder: i.placeholder,
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
            ]),
            _: 2
          }, 1032, ["label", "required", "rules", "prop"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]),
      l.submit ? (c(), d("div", q2, [
        ee(ce(Xe), {
          type: "primary",
          block: "",
          onClick: s
        }, {
          default: ne(() => [
            ge("提交审批")
          ]),
          _: 1
        })
      ])) : N("", !0)
    ]));
  }
});
be(dl);
const { create: G2 } = te("avatar-cropper"), Z2 = G2({
  components: {
    NutButton: Xe,
    Refresh2: Di,
    Retweet: Pi
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String,
      default: "bottom"
    },
    editText: {
      type: String,
      default: "编辑"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    shape: {
      type: String,
      default: "square"
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t, expose: n }) {
    const o = me({
      visible: !1,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      displayWidth: 0,
      displayHeight: 0
    }), s = {
      img: new Image(),
      // 规定要使用的图像
      sx: 0,
      // 开始剪切的 x 坐标位置
      sy: 0,
      // 开始剪切的 y 坐标位置
      swidth: 0,
      // 被剪切区域的宽度
      sheight: 0,
      // 被剪切区域的高度
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    }, l = z(G({}, s)), a = z(), i = z(), r = z(), f = window.devicePixelRatio || 1, p = Qe(), y = S(() => o.angle === 90 || o.angle === 270), v = S(() => {
      const { swidth: U } = l.value, se = U / f + "px";
      return {
        width: se,
        height: se
      };
    }), b = S(() => {
      const { displayWidth: U, scale: se } = o, { swidth: ue, height: fe } = l.value;
      return y.value ? Math.max(0, (fe * se - ue) / 2) : Math.max(0, (U * se - ue) / 2);
    }), w = S(() => {
      const { displayWidth: U, scale: se } = o, { swidth: ue, height: fe } = l.value;
      return y.value ? Math.max(0, (U * se - ue) / 2) : Math.max(0, (fe * se - ue) / 2);
    }), C = (U) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (fe) => se(fe.target.result), ue.readAsDataURL(U);
    }), u = (U) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = U;
    }), m = () => {
      const { img: U, width: se, height: ue, x: fe, y: Ce, swidth: Le } = l.value, { moveX: O, moveY: q, scale: ae } = o, ie = i.value;
      if (!ie)
        return;
      const he = ie.getContext("2d");
      ie.width = o.displayWidth, ie.height = o.displayHeight, he.clearRect(0, 0, ie.width, ie.height), he.fillStyle = "#666", he.fillRect(0, 0, ie.width, ie.height), he.fillStyle = "#000", he.fillRect(e.space * f, (ie.height - Le) / 2, Le, Le), he.translate(ie.width / 2 + O, ie.height / 2 + q), he.rotate(Math.PI / 180 * o.angle), he.scale(ae, ae), he.drawImage(U, fe, Ce, se, ue);
    }, h = (U) => {
      const se = Ye(a.value), { width: ue, height: fe } = se, Ce = o.displayWidth = ue * f, Le = o.displayHeight = fe * f;
      let O = G({}, s);
      const { width: q, height: ae } = U;
      O.img = U;
      const ie = ae > q, he = ie ? q / ae : ae / q;
      O.width = Ce, O.height = ie ? Ce / he : Ce * he, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = Ce - e.space * 2 * f, O.sheight = ie ? O.swidth / he : O.swidth * he, O.sx = e.space * f, O.sy = (Le - O.swidth) / 2, l.value = O, o.defScale = O.swidth / (ie ? O.width : O.height), P();
    }, $ = (U) => Ge(this, null, function* () {
      o.visible = !0;
      const se = U.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const fe = yield C(ue[0]), Ce = yield u(fe);
      h(Ce), m();
    }), P = () => {
      A(o.defScale), o.moveX = 0, o.moveY = 0, o.angle = 0;
    }, A = (U) => {
      U = Ee(U, 0.3, +e.maxZoom + 1), U !== o.scale && (o.scale = U);
    }, I = (U) => Math.sqrt(vt(U[0].clientX - U[1].clientX, 2) + vt(U[0].clientY - U[1].clientY, 2));
    let B, M, k, E, T;
    const j = (U) => {
      const { touches: se } = U, { offsetX: ue } = p;
      p.start(U), T = se.length, B = o.moveX, M = o.moveY, o.moving = T === 1, o.zooming = T === 2 && !ue.value, o.zooming && (k = o.scale, E = I(U.touches));
    }, K = (U) => {
      const { touches: se } = U;
      if (p.move(U), (o.moving || o.zooming) && ft(U, !0), o.moving) {
        const { deltaX: ue, deltaY: fe } = p, Ce = ue.value * o.scale + B, Le = fe.value * o.scale + M;
        o.moveX = Ee(Ce, -b.value, b.value), o.moveY = Ee(Le, -w.value, w.value);
      }
      if (o.zooming && se.length === 2) {
        const ue = I(se), fe = k * ue / E;
        A(fe);
      }
    }, oe = (U) => {
      let se = !1;
      (o.moving || o.zooming) && (se = !(o.moving && B === o.moveX && M === o.moveY), U.touches.length || (o.zooming && (o.moveX = Ee(o.moveX, -b.value, b.value), o.moveY = Ee(o.moveY, -w.value, w.value), o.zooming = !1), o.moving = !1, B = 0, M = 0, k = o.defScale, o.scale < o.defScale && P(), o.scale > e.maxZoom && (o.scale = +e.maxZoom))), ft(U, se), p.reset();
    }, W = () => {
      o.angle = 0;
    }, Y = () => {
      if (o.angle === 270) {
        o.angle = 0;
        return;
      }
      o.angle += 90;
    }, R = (U = !0) => {
      o.visible = !1, P(), r.value.value = "", U && t("cancel");
    }, x = () => {
      const U = i.value, { sx: se, sy: ue, swidth: fe } = l.value, Ce = fe, Le = fe, O = document.createElement("canvas"), q = O.getContext("2d");
      O.width = Ce, O.height = Le, U && q.drawImage(U, se, ue, Ce, Le, 0, 0, Ce, Le);
      const ae = O.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => o.scale,
      () => {
        m();
      }
    ), Q(
      () => o.angle,
      () => {
        Math.abs(o.moveX) > b.value && (o.moveX = b.value), Math.abs(o.moveY) > w.value && (o.moveY = w.value), m();
      }
    ), Q(
      () => o.moveX,
      () => {
        m();
      }
    ), Q(
      () => o.moveY,
      () => {
        m();
      }
    ), n({
      cancel: R,
      reset: W,
      rotate: Y,
      confirm: x
    }), pe(G({}, we(o)), {
      cropperPopupRef: a,
      canvasRef: i,
      inputImageRef: r,
      highlightStyle: v,
      inputImageChange: $,
      reset: W,
      rotate: Y,
      cancel: R,
      confirm: x,
      onTouchStart: j,
      onTouchMove: K,
      onTouchEnd: oe
    });
  }
}), J2 = ["data-edit-text"], Q2 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, x2 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, e3 = {
  key: 1,
  class: "flex-sb"
};
function t3(e, t, n, o, s, l) {
  const a = X("nut-button"), i = X("Refresh2"), r = X("Retweet");
  return c(), d(Z, null, [
    g("div", {
      class: D(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      _(e.$slots, "default"),
      g("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...f) => e.inputImageChange && e.inputImageChange(...f))
      }, null, 544)
    ], 10, J2),
    Ie(g("div", Q2, [
      g("canvas", x2, null, 512),
      g("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...f) => e.onTouchStart && e.onTouchStart(...f)),
        onTouchmove: t[2] || (t[2] = (...f) => e.onTouchMove && e.onTouchMove(...f)),
        onTouchend: t[3] || (t[3] = (...f) => e.onTouchEnd && e.onTouchEnd(...f)),
        onTouchcancel: t[4] || (t[4] = (...f) => e.onTouchEnd && e.onTouchEnd(...f))
      }, [
        g("div", {
          class: D(["highlight", { highlight__round: e.shape === "round" }]),
          style: V(e.highlightStyle)
        }, null, 6)
      ], 32),
      g("div", {
        class: D(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? _(e.$slots, "toolbar", { key: 0 }) : (c(), d("div", e3, [
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (f) => e.cancel())
          }, [
            ee(a, { type: "danger" }, {
              default: ne(() => [
                ge(L(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...f) => e.reset && e.reset(...f))
          }, [
            ee(i, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...f) => e.rotate && e.rotate(...f))
          }, [
            ee(r, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...f) => e.confirm && e.confirm(...f))
          }, [
            ee(a, { type: "success" }, {
              default: ne(() => [
                ge(L(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Me, e.visible]
    ])
  ], 64);
}
const n3 = /* @__PURE__ */ le(Z2, [["render", t3]]);
function o3(e) {
  [Xe, sn, an, ht, Ae, Er, ao, io, uo, co, mo, ho, go, yo, Gr, bo, uu, gu, Cu, ko, So, To, xu, No, Do, Io, kc, Dc, Ec, Po, nd, gd, Fd, Eo, df, mf, Pf, Vt, un, cn, dn, fn, Vo, sp, Oo, Bp, qp, mn, hn, vn, Fo, i1, Wo, d1, gn, M1, V1, Ht, Ko, Ot, am, fm, yn, bm, Sm, pn, Go, Rm, Zo, bn, Qo, xo, $n, wn, Rt, kn, Wh, nl, Co, Cn, ol, ll, al, il, N0, rl, E0, ul, cl, q0, bv, Sv, Lv, Kv, Gv, og, Yg, ny, my, Vy, jy, u2, U2, dl, n3].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const l3 = "4.3.7", c3 = { install: o3, version: l3 };
export {
  i1 as ActionSheet,
  bv as Address,
  Vy as AddressList,
  rl as Animate,
  am as Audio,
  fm as AudioOperate,
  yn as Avatar,
  n3 as AvatarCropper,
  bm as AvatarGroup,
  Wo as Backtop,
  Co as Badge,
  Sv as Barrage,
  Xe as Button,
  Fd as Calendar,
  Eo as CalendarCard,
  ny as Card,
  gd as Cascader,
  jy as Category,
  u2 as CategoryPane,
  sn as Cell,
  an as CellGroup,
  df as Checkbox,
  mf as CheckboxGroup,
  Go as CircleProgress,
  uo as Col,
  al as Collapse,
  il as CollapseItem,
  U2 as Comment,
  Er as ConfigProvider,
  nl as Countdown,
  Wh as Countup,
  Pf as DatePicker,
  gn as Dialog,
  ho as Divider,
  d1 as Drag,
  my as Ecard,
  To as Elevator,
  E0 as Ellipsis,
  Zo as Empty,
  uu as FixedNav,
  mn as Form,
  hn as FormItem,
  go as Grid,
  yo as GridItem,
  ao as Image,
  kn as ImagePreview,
  Io as Indicator,
  M1 as InfiniteLoading,
  un as Input,
  Vt as InputNumber,
  dl as Invoice,
  io as Layout,
  Sm as List,
  Jn as Locale,
  gu as Menu,
  Cu as MenuItem,
  bo as Navbar,
  Rm as Noticebar,
  Ht as Notify,
  qp as NumberKeyboard,
  ht as Overlay,
  xu as Pagination,
  Vo as Picker,
  ol as Popover,
  Ae as Popup,
  Rt as Price,
  pn as Progress,
  V1 as PullRefresh,
  cn as Radio,
  dn as RadioGroup,
  Po as Range,
  fn as Rate,
  co as Row,
  nd as Searchbar,
  sp as ShortPassword,
  kc as SideNavbar,
  Dc as SideNavbarItem,
  Lv as Signature,
  ll as Skeleton,
  Yg as Sku,
  Gr as Space,
  xo as Step,
  Qo as Steps,
  mo as Sticky,
  Ec as SubSideNavbar,
  vn as Swipe,
  Fo as SwipeGroup,
  $n as Swiper,
  wn as SwiperItem,
  Ko as Switch,
  Do as TabPane,
  ko as Tabbar,
  So as TabbarItem,
  N0 as Table,
  No as Tabs,
  Cn as Tag,
  Oo as Textarea,
  og as TimeDetail,
  Gv as TimePannel,
  Kv as TimeSelect,
  Ot as Toast,
  q0 as Tour,
  cl as TrendArrow,
  Bp as Uploader,
  bn as Video,
  ul as Watermark,
  c3 as default,
  o3 as install,
  $1 as showDialog,
  Eh as showImagePreview,
  u3 as showNotify,
  Uo as showToast,
  l3 as version
};
