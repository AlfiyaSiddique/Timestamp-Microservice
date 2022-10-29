$("#submit").click(()=>{
    let input = $("#input").val();

    if(input === ''){
      let today = new Date();
      input =  `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    }
    
      fetch("http://localhost:3000/api/"+input)
         .then(res=>{
            return res.json();
         })
         .then(data=>{
            data = JSON.parse(data);
            if(data.hasOwnProperty("error")){
            $("#result").html(`<h3>Invalid Date OR Invalid Date Format</h3>`)

            }else{
            $("#result").html(`<h3>Unix Time: ${data.unix}</h3><h3>UTC Time: ${data.utc}</h3>`)
                
            }
         })
    
})