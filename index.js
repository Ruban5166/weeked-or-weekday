
import express from 'express';

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const currentDay = new Date();
    const toDay = currentDay.getDay();
    console.log(toDay);
    let type = "a weekday"
    let adv = "Its time work hard"




    if(toDay === 0 || toDay === 6){

        type = " a Weekend"
        adv  = "It's time to have some fun"
    }

    res.render("index.ejs",{
        dayType: type,
        dayAdvice:adv
    });
});


app.listen(port,()=>{
    console.log(`Listing on ${port}`);
    
})