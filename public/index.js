$("#submit").click(()=>{
    let input = $("#input").val();
    
      fetch(`https://Timestamp-Microservice.alfiyasiddique.repl.co/api/${input}`)
         .then(res=>{
            return res.json();
         })
         .then(data=>{
            if(data.hasOwnProperty("error")){
            $("#result").html(`<h3>Invalid Date OR Invalid Date Format</h3>`)

            }else{
            $("#result").html(`<h3>Unix Time: ${data.unix}</h3><h3>UTC Time: ${data.utc}</h3>`)
                
            }
         })
    
})
