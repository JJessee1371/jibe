const superRude = document.getElementById('extra-rude');
const username = document.getElementById('first_name');
const result = document.getElementById('result');

//Insult arrays 
const rudeInsults = [
    'You\'re a gray sprinkle on a rainbow cupcake.',
    'If your brain was dynamite, there wouldn\'t be enough to blow your hat off.',
    'I\'ll never forget the first time we met. But I\'ll keep trying',
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
    'Are you always this stupid or is today a special occasion?'
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
    'I\'d like to see things from your point of view but I can\'t seem to get my head that far up my ass.'
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
