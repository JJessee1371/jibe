const superRude = document.getElementById('extra-rude');
const username = document.getElementById('first_name');
const result = document.getElementById('result');

//Insult arrays 
const rudeInsults = [
    'You\'re a gray sprinkle on a rainbow cupcake.',
    'If your brain was dynamite, there wouldn\'t be enough to blow your hat off.',
    'I\'ll never forget the first time we met. But I\'ll keep trying.',
    'Hold still. I\'m trying to imagine you with a personality.',
    'It\'s impossible to underestimate you.',
    'I thought of you today, it reminded me to take out the trash.',
    'Someday you\'ll go far, and I really hope you stay there.',
    'You bring so much joy! You know, when you leave the room. But, still.',
    'The last time I saw something like you, I flushed.',
    'Roses are red violets are blue, God made me pretty, what happened to you?',
    'Please shut your mouth when you\'re talking to me.',
    'Your mind is on vacation but your mouth is working overtime.',
    'Shock me. Say something intelligent.',
    'I don\'t know what your problem is, but I bet it\'s hard to pronounce.',
    'How did you get here?? Who left your cage open??',
    'Are you always this stupid or is today a special occasion?',
    'You\'re the reason God created the middle finger.',
    'NSYNC said it best, BYE BYE BYE!.',
    'You have miles to go before you reach mediocre.',
    'I\'m glad to see you\'re not letting education get in the way of your ignorance.',
    'You\'re about as useful as a screen door on a submarine.',
    'Mister Rogers would be disappointed in you.',
    'May both sides of your pillow be uncomfortably warm.',
    'You have a face only a mother could love.',
    'I\'m sorry I hurt your feelings when I called you stupid. I really thought you already knew.',
    'People like you are the reason God doesn\'t talk to us anymore.',
    'Everyone has a right to be stupid. But you are abusing the privelege.',
    'Sorry, didn\'t mean to push your buttons. I was just looking for mute.',
    'You are as useless as the \'ueue\' in queue.',
    'I would challenge you to a battle of wits, but I see you are unarmed.',
    'You\'re dumber than snake mittens.',
    'I hope you step on a lego.',
    '8 planets, 7 seas, 7 continents, 809 islands, 196 countries, 8,000,000,000 people, and I was unfortunate enough to meet you.',
    'If I\'ve said anything to offend you, it was purely intentional.'
];

const superRudeInsults = [
    'Don\'t be ashamed of who you are. That\'s your parents\' job.',
    'You are the human version of period cramps.',
    'Don\'t worry - the first 40 years of childhood are the hardest.',
    'I love what you\'ve done with your hair! How do you get it to come out of your nostrils like that??',
    'Somewhere out there is a tree tirelessly producing oxygen for you. You owe it an apology.',
    '*Thumbs down*',
    'Your birth certificate is an apology letter from the condom factory.',
    'You\'re so fake that Barbie got jealous.',
    'If I wanted to kill myself, I\'d climb to your ego and jump to your IQ.',
    'Stop trying to be a smart ass. You\'re just an ass.',
    'Keep rolling your eyes, maybe you\'ll find a brain back there.',
    'I\'d like to see things from your point of view but I can\'t seem to get my head that far up my ass.',
    'You have your entire life to be an idiot, why not take today off?',
    'You look so great. Not at all gross today.',
    'You\'re the reason the gene pool needs a life guard.',
    'You\'ve got something on your chin...No, the third one down.',
    'In the land of the witless, you would be ruler.',
    'I don\'t have the patience, or crayons, to explain anyting to you today.',
    'I find the fact that you\'ve lived this long both surprising and disappointing.',
    'Were you born this stupid or did you take lessons?',
    'You fear success, but you really have nothing to worry about.',
    'Shit happens. I mean...look at you.',
    'I\'ve met some pricks in my time, but you my friend, are the f*cking cactus.',
    'I would love to insult you, but I\'m afraid I won\'t do as well as nature did.',
    'Your inferiority complex is fully justified.',
    'Why waste your time playing hard to get when you\'re already so hard to want?',
    'God wasted a perfectly good asshole when he put teeth in your mouth.',
];

//Select random option from the arrays
function findRegInsult(user) {
    let randomInsult = rudeInsults[Math.floor(Math.random() * rudeInsults.length)];
    result.textContent = `Hey ${user}! ${randomInsult}`;
};

function findSuperRudeInsult(user) {
    let randomInsult = superRudeInsults[Math.floor(Math.random() * superRudeInsults.length)];
    result.textContent = `Hey ${user}! ${randomInsult}`;
};


document.getElementById('insult-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let user = username.value;
    if(!user) {
        alert('Listen here you... I need your name in order to insult you properly!');
        return;
    }

    if(superRude.checked) {
        findSuperRudeInsult(user);
    } else {
        findRegInsult(user);
    }
});
