// Random number generator from 0 to 2
function randomNumber () {
    let num = Math.floor(Math.random()*3);
    return num
};

// Possible Messages of your future
let pastMessage = ['You are more than the bad things that have happened to you in the past.', 
'Many Clouds drifted across the skies in your life, but you acquitted yourself very nicely. You should be proud of that!',
 'Your past wasn`t easy , but the lessons you learned are valuable.'];
let presentMessage = ['It`s high time for honesty! It`s time to open every page and not to hide anything anymore.',
 'You are on the right track, so let go of all doubts. Be confident.', 
 'Feel the inspiration running through you and put it to good use.'];
let futureMessage = ['In gratitude, you are looking back at everything you accomplished through hard work. Your future is full of surprises.', 
'There will be more positive action in your life!', 
'A complete turnaround is on its way. Do not move on too fast to new adventures.' ];

function universeSigns (){
    let yourPast= pastMessage[randomNumber()];
    let yourPresent= presentMessage[randomNumber()];
    let yourFuture= futureMessage[randomNumber()];
    console.log(`Welcome and be ready to see what the universe is telling me about you.
${yourPast}${yourPresent}${yourFuture}`);
}

universeSigns();



