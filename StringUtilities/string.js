window.addEventListener("load",()=>{
    const lower=document.querySelector("#lower");
    const upper=document.querySelector("#upper");
    const reverse=document.querySelector("#reverse");
    const character=document.querySelector("#character");
    const word=document.querySelector("#word");
    const go=document.querySelector("#button-id1");
    const input=document.querySelector("#input-id1");
    const output=document.querySelector("#input-id2");

        go.addEventListener('click', () => {
            if(lower.checked){
               output.value=input.value.toLowerCase();
            }
            if(upper.checked){
                    output.value = input.value.toUpperCase();
            }
            if(reverse.checked){
                    output.value = input.value.split('').reverse().join('');
            }
            if(character.checked){
                    output.value = parseInt(input.value.length, 10);
            }
            if(word.checked){
                    output.value = parseInt(input.value.split(' ').length, 10);
            }
        });
    
});



