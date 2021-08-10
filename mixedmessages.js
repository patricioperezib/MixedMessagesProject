// Random number generator from 0 to 2
function randomNumber () {
    let num = Math.floor(Math.random()*3);
    return num
};

// Possible Messages of your future
let messageOne = ['Hello!', 'Hi!', 'Hey!'];
let messageTwo = ['I can see that this year', 'I can feel that this month', 'I am quite sure that this week'];
let messageThree = ['you will find true love.', 
'you will find a great job opportunitty.', 
'you will get what you were waiting for so long.' ];

function seeTheFuture (){
    let part1= messageOne[randomNumber()];
    let part2= messageTwo[randomNumber()];
    let part3= messageThree[randomNumber()];
    console.log(`${part1} ${part2} ${part3}`);
}

seeTheFuture();



