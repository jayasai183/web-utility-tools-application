window.addEventListener("load",()=>{
      const red=document.querySelector("#red");
      const green=document.querySelector("#green");
      const blue=document.querySelector("#blue");
      const box=document.querySelector(".box-class");
      const hexVal=document.querySelector(".hex-value-class");
      const convertBtn=document.querySelector(".converter");

      convertBtn.addEventListener("click",()=>{
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexVal.value);
            if(result){
                var r= parseInt(result[1], 16);
                var g= parseInt(result[2], 16);
                var b= parseInt(result[3], 16); 
            } 
            box.style.backgroundColor=hexVal.value;
            red.value=r;
            blue.value=b;
            green.value=g;
      });
});
      