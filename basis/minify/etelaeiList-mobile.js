gsap.registerPlugin(ScrollTrigger);let titleMain=document.querySelectorAll(".Title-main");titleMain.forEach((t=>{gsap.to(t.querySelector("h1"),{y:0,scrollTrigger:{trigger:t,start:"top 60%",end:"bottom bottom"}}),gsap.to(t.querySelector(".line"),{width:"60px",scrollTrigger:{trigger:t,start:"top 60%",end:"bottom bottom"}})}));let EtalaeiItem=document.querySelectorAll(".EtalaeiItem");EtalaeiItem.forEach((t=>{gsap.to(t,{opacity:1,y:0,stagger:.5,scrollTrigger:{trigger:t,start:"top 80%",end:"bottom bottom"}})}));