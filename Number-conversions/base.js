window.addEventListener("load",()=>{
    const b2d=document.querySelector("#b2d");
    const b2o=document.querySelector("#b2o");
    const b2h=document.querySelector("#b2h");
    const d2b=document.querySelector("#d2b");
    const d2o=document.querySelector("#d2o");
    const d2h=document.querySelector("#d2h");
    const o2b=document.querySelector("#o2b");
    const o2d=document.querySelector("#o2d");
    const o2h=document.querySelector("#o2h");
    const h2b=document.querySelector("#h2b");
    const h2o=document.querySelector("#h2o");
    const h2d=document.querySelector("#h2d");
    const list=document.querySelector(".list-class");
    const convert=document.querySelector("#button-id1");
    const input=document.querySelector("#input-id1");
    const output=document.querySelector("#input-id2");
    

    list.addEventListener('input',()=>{
    if(b2d.checked){
        input.placeholder="Enter the Number in Binary format";
     }
     if(b2o.checked){
        input.placeholder="Enter the Number in Binary format";
     }
     if(b2h.checked){
         input.placeholder="Enter the Number in Binary format";
     }
     if(d2b.checked){
         input.placeholder="Enter the Number in Decimal format";
     }
     if(d2o.checked){
         input.placeholder="Enter the Number in Decimal format";
     }
     if(d2h.checked){
         input.placeholder="Enter the Number in Decimal format";
     }
     if(o2b.checked){
         input.placeholder="Enter the Number in Octal format";
     }
     if(o2d.checked){
         input.placeholder="Enter the Number in Octal format";
     }
     if(o2h.checked){
         input.placeholder="Enter the Number in Octal format";
     }
     if(h2b.checked){
        input.placeholder="Enter the Number in Hex format";
        
     }
     if(h2d.checked){
         input.placeholder="Enter the Number in Hex format";
     }
     if(h2o.checked){
         input.placeholder="Enter the Number in Hex format";
     }
});
        
     convert.addEventListener('click', () => {
            if(b2d.checked){
               pholder='Enter the Number in Binary format';
               inputVal=parseInt(input.value,2);
               output.value=inputVal.toString(10);
            }
            if(b2o.checked){
                input.placeholder="Enter the Number in Binary format";
                inputVal=parseInt(input.value,2);
                output.value=inputVal.toString(8);
            }
            if(b2h.checked){
                input.placeholder="Enter the Number in Binary format";
               inputVal=parseInt(input.value,2);
               output.value=inputVal.toString(16).toUpperCase();
            }
            if(d2b.checked){
                input.placeholder="Enter the Number in Decimal format";
               inputVal=parseInt(input.value,10);
               output.value=inputVal.toString(2);
            }
            if(d2o.checked){
                input.placeholder="Enter the Number in Decimal format";
               inputVal=parseInt(input.value,10);
               output.value=inputVal.toString(8);
            }
            if(d2h.checked){
                input.placeholder="Enter the Number in Decimal format";
               inputVal=parseInt(input.value,10);
               output.value=inputVal.toString(16).toUpperCase();
            }
            if(o2b.checked){
                input.placeholder="Enter the Number in Octal format";
               inputVal=parseInt(input.value,8);
               output.value=inputVal.toString(2);
            }
            if(o2d.checked){
                input.placeholder="Enter the Number in Octal format";
               inputVal=parseInt(input.value,8);
               output.value=inputVal.toString(10);
            }
            if(o2h.checked){
                input.placeholder="Enter the Number in Octal format";
               inputVal=parseInt(input.value,8);
               output.value=inputVal.toString(16).toUpperCase();
            }
            if(h2b.checked){
                input.placeholder="Enter the Number in Hex format";
               inputVal=parseInt(input.value,16);
               output.value=inputVal.toString(2);
            }
            if(h2d.checked){
                input.placeholder="Enter the Number in Hex format";
               inputVal=parseInt(input.value,16);
               output.value=inputVal.toString(10);
            }
            if(h2o.checked){
                input.placeholder="Enter the Number in Hex format";
               inputVal=parseInt(input.value,16);
               output.value=inputVal.toString(8);
            }
        });
    
});



