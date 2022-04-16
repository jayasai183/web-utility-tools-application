window.addEventListener("load",()=>{
       const epoch=document.querySelector("#h2t");
       const human=document.querySelector("#t2h");
       const convert=document.querySelector("#button-id1");
       const input=document.querySelector("#input-id1");
       const output=document.querySelector("#input-id2");
       const list=document.querySelector(".list-class");
       const unixTime = document.querySelector('.epoch-time');
       const humanTime= document.querySelector("#h-time");


       setInterval(() => {
        const unixDate = new Date();
        unixTime.innerHTML = Math.floor(unixDate.getTime() / 1000);
        }, 1000);

        setInterval(() => {
                const humanDate = new Date();
                humanTime.innerHTML = humanDate.toLocaleTimeString();
                }, 1000);

          
        list.addEventListener('input',()=>{
                if(epoch.checked){
                      input.placeholder="Enter the time in format YYYY/MM/DD/HH/mm/ss";
                }
                if(human.checked){
                      input.placeholder="Enter the Epoch time";
                }
        });
        
        convert.addEventListener('click', () => {
                if(epoch.checked){
                        const timeArr=input.value.split("/");
                        const date=new Date(timeArr[0],timeArr[1]-1,timeArr[2],timeArr[3],timeArr[4],timeArr[5]);
                        output.value= date.getTime()/1000;
                  }
                  if(human.checked){
                        const ts = parseInt(input.value, 10);
                        const dateVal = new Date(ts * 1000);
                        output.value = dateVal.toLocaleString();
                  }
        });
    
});



