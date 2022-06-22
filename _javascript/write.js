const write = ()=>{
    const writeArea = document.querySelector(".write-area");
    const text = "Yrllan Brandão";
    const splitedText = text.split("");




    writeArea.innerHTML = "";

  

        splitedText.forEach((element,index)=>{

            setTimeout(()=>{
    
                writeArea.innerHTML += element;
    
            }, 300 * index)
            
        
        })
 

   
    


}
write()
setInterval(()=>{

    write()

}, 6000)