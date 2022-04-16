window.addEventListener("load",()=>{
    const str=document.querySelector("#input-id1");
    const res=document.querySelector("#input-id2");
    const generate=document.querySelector("#button-id1");    

    
    generate.addEventListener("click",()=>{
        const hash=CryptoJS.SHA512(str.value);
        res.value=hash.toString(CryptoJS.enc.Hex);
    });
});