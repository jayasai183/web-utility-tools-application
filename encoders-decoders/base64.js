window.addEventListener("load",()=>{
    const str=document.querySelector("#input-id1");
    const res=document.querySelector("#input-id2");
    const encode=document.querySelector("#button-id1");    
    const decode=document.querySelector("#button-id2");    

    
    encode.addEventListener("click",()=>{
        res.value=btoa(str.value);
    });

    decode.addEventListener("click",()=>{
        res.value=atob(str.value);
    });
    });
    
    
    