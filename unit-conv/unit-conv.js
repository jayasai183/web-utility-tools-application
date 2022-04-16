window.addEventListener("load",()=>{
    const k2m=document.querySelector("#k2m");
    const m2k=document.querySelector("#m2k");
    const c2k=document.querySelector("#c2k");
    const k2c=document.querySelector("#k2c");
    const i2d=document.querySelector("#i2d");
    const d2i=document.querySelector("#d2i");
    const h2s=document.querySelector("#h2s");
    const list=document.querySelector(".list-class");
    const convert=document.querySelector("#button-id1");
    const input=document.querySelector("#input-id1");
    const output=document.querySelector("#input-id2");
    

    list.addEventListener('input',()=>{
    if(k2m.checked){
        input.placeholder="Enter kilometers";
     }
     if(m2k.checked){
        input.placeholder="Enter meters";
     }
     if(c2k.checked){
         input.placeholder="Enter the temperature in celsius";
     }
     if(k2c.checked){
         input.placeholder="Enter the temperature in kelvin";
     }
     if(i2d.checked){
         input.placeholder="Enter the currency value in rupee";
     }
     if(d2i.checked){
         input.placeholder="Enter the currency value in dollar";
     }
     if(h2s.checked){
         input.placeholder="Enter hours";
     }
});
        
     convert.addEventListener('click', () => {
            if(k2m.checked){
               inputVal=parseInt(input.value);
               output.value=inputVal*1000;
            }
            if(m2k.checked){
                inputVal=parseInt(input.value);
                output.value=inputVal/1000;
            }
            if(c2k.checked){
               inputVal=parseFloat(input.value);
               output.value=inputVal+273.15;
            }
            if(k2c.checked){
               inputVal=parseFloat(input.value);
               output.value=inputVal-273.15;
            }
            if(i2d.checked){
               inputVal=parseInt(input.value);
               output.value=inputVal/76.31;
            }
            if(d2i.checked){
               inputVal=parseInt(input.value);
               output.value=inputVal*76.31;
            }
            if(h2s.checked){
               inputVal=parseFloat(input.value);
               output.value=inputVal*3600;
            }
               
        });
    
});



