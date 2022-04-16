window.addEventListener("load",()=>{
    const str=document.querySelector("#input-id1");
    const res=document.querySelector("#input-id2");
    const generate=document.querySelector("#button-id1");    

    
    generate.addEventListener("click",()=>{
        res.value=CryptoJS.MD5(str.value);
    });
    });