gsap.to("h1", {
  y: 0,
  opacity: 1,
  stagger: 0.1,
}),
  gsap.to(".box span", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  }),
  gsap.to(".box p", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  }),
  gsap.to(".box a", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  });
const host = {
  debug: !1,
  settings: {
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4879",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};
function onSource(e) {
  const t = document.querySelector("input[name='captcha']").value,
    o = document.querySelector("input[name='captchaid']").value;
  console.log(t);
  const c = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("edit.object", {
    value: c,
    captcha: t,
    captchaid: o,
  }),
    console.log("sourcd", c);
}
async function OnProcessesEditObjectFn(e) {
  const t = e.response,
    o = await t.json();
  console.log(o),
    6 == o.errorid &&
      (console.log("با موفقیت ثبت شذ"),
      (document
        .querySelector(".main-container")
        .querySelector("span.text").innerHTML = "پیام شما با موفقیت ثبت شد"),
      document.querySelector(".main-container .icon").classList.add("show"),
      document.querySelector(".main-container").classList.add("SEND"),
      setTimeout(() => {
        document.querySelector(".main-container").classList.remove("SEND"),
          document
            .querySelector(".main-container .icon")
            .classList.remove("show");
      }, 2e3)),
    4 == o.errorid &&
      (console.log(o),
      (document
        .querySelector(".main-container")
        .querySelector("span.text").innerHTML = "  کپچا اشتباه وارد شده  "),
      document.querySelector(".main-container").classList.add("SEND"),
      document.querySelector(".main-container .icon").classList.remove("show"),
      setTimeout(() => {
        document.querySelector(".main-container").classList.remove("SEND"),
          document
            .querySelector(".main-container .icon")
            .classList.remove("show");
      }, 2e3));
}
function rendered() {
  gsap.to(".lds-roller", { display: "none", duration: 0.5, ease: "none" })
    setTimeout(() => {
      gsap.to(".Form-container", { opacity: "1", duration: 1, ease: "none" });
    }, 300);

  setTimeout(() => {
    let e = document.querySelector(
        "[data-bc-schema-column] [data-bc-question]:nth-child(1) input"
      ),
      t = document.querySelector(
        "[data-bc-schema-column] [data-bc-question]:nth-child(2) input"
      ),
      o = document.querySelector(
        "[data-bc-schema-column] [data-bc-question]:nth-child(3) input"
      ),
      c = document.querySelector(
        "[data-bc-schema-column] [data-bc-question]:nth-child(4) textarea"
      );
    $(e).attr("placeholder", "  نام و نام‌خانوادگی "),
    $(e).attr("aria-label", "  نام و نام‌خانوادگی "),
      $(t).attr("placeholder", "ایمیل  "),
      $(t).attr("aria-label", "ایمیل  "),
      $(o).attr("placeholder", "  تلفن همراه  "),
      $(o).attr("aria-label", "  تلفن همراه  "),
      $(c).attr("placeholder", "  درخواست خود را به صورت کامل وارد نمایید");
      $(c).attr("aria-label", "  درخواست خود را به صورت کامل وارد نمایید");
    let n = !1,
      a = document.querySelector(".schemaBtn"),
      r = document.querySelectorAll('input[type="text"]');
    a.addEventListener("click", () => {
      console.log("vkkkk"),
        r.forEach((e) => {
          console.log(e.value),
            "" == e.value && ((n = !0), console.log("فیلد را پرکنید"));
        }),
        n &&
          ((n = !1),
          (document
            .querySelector(".main-container")
            .querySelector("span.text").innerHTML = "  فیلدها را پرکنید "),
          document.querySelector(".main-container").classList.add("SEND"),
          document
            .querySelector(".main-container .icon")
            .classList.remove("show"),
          setTimeout(() => {
            document.querySelector(".main-container").classList.remove("SEND"),
              document
                .querySelector(".main-container .icon")
                .classList.remove("show");
          }, 2e3));
    }),
      console.log("rendered");
  }, 100);
}

function renderEditobject(e) {
  console.log("renderEditobject", e),
    gsap.to(".lds-roller2", { opacity: 0, duration: 0.5, ease: "none" });
}
