function onSource(e){const t=document.querySelector("input[name='captcha']").value,o=document.querySelector("input[name='captchaid']").value,a=JSON.stringify(e.source?.rows[0]);$bc.setSource("edit.object",{value:a,captcha:t,captchaid:o})}async function OnProcessesEditObjectFn(e){const t=e.response,o=await t.json();6==o.errorid&&(document.querySelector(".main-container").querySelector("span.text").innerHTML="پیام شما با موفقیت ثبت شد",document.querySelector(".main-container .icon").classList.add("show"),document.querySelector(".main-container").classList.add("SEND"),setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND"),document.querySelector(".main-container .icon").classList.remove("show")}),2e3)),4==o.errorid&&(document.querySelector(".main-container").querySelector("span.text").innerHTML="  کپچا اشتباه وارد شده  ",document.querySelector(".main-container").classList.add("SEND"),document.querySelector(".main-container .icon").classList.remove("show"),setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND"),document.querySelector(".main-container .icon").classList.remove("show")}),2e3))}function rendered(){gsap.to(".lds-roller",{display:"none",duration:.5,ease:"none"}),setTimeout((()=>{gsap.to(".Form-container",{opacity:"1",duration:1,ease:"none"})}),300),setTimeout((()=>{let e=document.querySelector("[data-bc-schema-column] [data-bc-question]:nth-child(1) input"),t=document.querySelector("[data-bc-schema-column] [data-bc-question]:nth-child(2) input"),o=document.querySelector("[data-bc-schema-column] [data-bc-question]:nth-child(3) input"),a=document.querySelector("[data-bc-schema-column] [data-bc-question]:nth-child(4) textarea");$(e).attr("placeholder","  نام و نام‌خانوادگی "),$(e).attr("aria-label","  نام و نام‌خانوادگی "),$(t).attr("placeholder","ایمیل  "),$(t).attr("aria-label","ایمیل  "),$(o).attr("placeholder","  تلفن همراه  "),$(o).attr("aria-label","  تلفن همراه  "),$(a).attr("placeholder","  درخواست خود را به صورت کامل وارد نمایید"),$(a).attr("aria-label","  درخواست خود را به صورت کامل وارد نمایید");let c=!1,n=document.querySelector(".schemaBtn"),r=document.querySelectorAll('input[type="text"]');n.addEventListener("click",(()=>{r.forEach((e=>{""==e.value&&(c=!0)})),c&&(c=!1,document.querySelector(".main-container").querySelector("span.text").innerHTML="  فیلدها را پرکنید ",document.querySelector(".main-container").classList.add("SEND"),document.querySelector(".main-container .icon").classList.remove("show"),setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND"),document.querySelector(".main-container .icon").classList.remove("show")}),2e3))}))}),100)}function renderEditobject(e){gsap.to(".lds-roller2",{opacity:0,duration:.5,ease:"none"})}gsap.to("h1",{y:0,opacity:1,stagger:.1}),gsap.to(".box span",{y:0,opacity:1,stagger:.1}),gsap.to(".box p",{y:0,opacity:1,stagger:.1}),gsap.to(".box a",{y:0,opacity:1,stagger:.1});