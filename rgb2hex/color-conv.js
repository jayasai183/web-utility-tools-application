window.addEventListener("load",()=>{
      const red=document.querySelector("#red");
      const green=document.querySelector("#green");
      const blue=document.querySelector("#blue");
      const box=document.querySelector(".box-class");
      const hexVal=document.querySelector(".hex-value-class");
      const convertBtn=document.querySelector(".converter");

      convertBtn.addEventListener("click",()=>{
            const redHex=parseInt(red.value).toString(16).toUpperCase();
            const redVal=redHex.length==1? "0"+redHex :redHex;
            const greenHex=parseInt(green.value).toString(16).toUpperCase();
            const greenVal=greenHex.length==1? "0"+greenHex :greenHex;
            const blueHex=parseInt(blue.value).toString(16).toUpperCase();
            const blueVal=blueHex.length==1? "0"+blueHex :blueHex;
            hexVal.value="#"+redVal+greenVal+blueVal;
            box.style.backgroundColor=hexVal.value;
      })
});