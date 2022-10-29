setInterval(() => { 
   let today = new Date();
    let endDay = new Date("2038-01-19");
    let years = endDay.getFullYear()-today.getFullYear();  

    setInterval(() => {
        if(years < 2){
            let month = (12-today.getMonth())+endDay.getMonth();
            let days = (endDay.getTime()-today.getTime())/(1000*60*60*24);
            $("#endTime").text(`${years} Years  ${month} Months  ${days} Days`);
          
        }else{
            $("#endTime").text(`${years} Years`);
        }
    }, 1000);

    $("#timer").text(new Date().getTime());   
   
}, 1); //