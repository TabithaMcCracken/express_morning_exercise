// Import required modules and creating Express app
const express = require("express");
const app = express();
const port = 3000;

// Greeting
app.get("/greeting", (req, res)=>{
    res.send("Hello Stranger")
})

// Greeting with name
app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`
    <h1>Personalized Greeting</h1>
    <h3>Wow! Hello there ${name}</h3>
    `)
  });

  // Tip Percentage
app.get("/tip/:total/:tipPercentage", (req, res)=>{
    total = req.params.total;
    percentage = req.params.tipPercentage;
    tipAmount = total * (percentage /100)
    res.send(`
    <h1>Your total Bill: $ ${total}</h1>
    <h1>You desired tip percentage: ${percentage}%</h1>
    <h1>You should tip: $ ${tipAmount}</h1>
    `)
})

// Magic 8 Ball
const response_list = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
]
    
app.get("/magic/:question", (req,res)=>{
    userQuestion = req.params.question;
   const randomIndex = Math.floor(Math.random() * userQuestion.length);
    let response = response_list[randomIndex]
    res.send(`
    <h1>${userQuestion}</h1>
    <h1>${response}</h1>
    `)
})

//Start the server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
  });