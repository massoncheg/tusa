// import axios from 'axios' ;
window.onload = function () {
  const container = document.getElementById("container");
  const fp1 = document.querySelector("#frame-piece-1");
  const fp2 = document.querySelector("#frame-piece-2");
  const fp3 = document.querySelector("#frame-piece-3");
  const fp4 = document.querySelector("#frame-piece-4");
  
  if (container) {
    
    let contWidth = container.offsetWidth
    let contHeight = container.offsetHeight

    container.addEventListener("mousemove", (e) => {
      let tX
      let tY 

      e.offsetX <= contWidth/2 ? 
      tX = (contWidth/2 - e.offsetX)*0.1
      :
      tX = -(e.offsetX - contWidth/2)*0.1
      
      e.offsetY <= contHeight/2 ? 
      tY = (contHeight/2 - e.offsetY)*0.1
      :
      tY = -(e.offsetY - contHeight/2)*0.1
      
      fp1.style.transform = `translate(${tX}px, ${tY}px)`
      fp2.style.transform = `translate(${-tX}px, ${-tY}px)`
      fp3.style.transform = `translate(${tX}px, ${-tY}px)`
      fp4.style.transform = `translate(${-tX}px, ${tY}px)`
    });
  }
}