(function(){
  try{
    if(!window.gsap||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("[data-rv]").forEach(function(el,i){
      var wrap=document.createElement("div");wrap.className="rv";
      var block=document.createElement("i");block.style.background=el.getAttribute("data-rv");
      el.parentNode.insertBefore(wrap,el);wrap.appendChild(el);wrap.appendChild(block);
      gsap.set(el,{opacity:0});
      var inHero=!!el.closest(".hero");
      var tl=gsap.timeline({defaults:{ease:"expo.inOut"},delay:inHero?0.2+i*0.15:0,
        scrollTrigger:inHero?null:{trigger:wrap,start:"top 88%",once:true}});
      tl.to(block,{scaleX:1,duration:0.7})
        .set(el,{opacity:1},"<0.35")
        .to(block,{scaleX:0,duration:0.7,transformOrigin:"right center"},"<0.28");
    });
  }catch(e){document.querySelectorAll("[data-rv]").forEach(function(el){el.style.opacity=1;});}
})();