const answers = [
    'Maybe.', 'Outlook not so good', 'I really dont think so.',
    'There is a good chance.', 'Why are you asking me?',
    'do not ask me that', 'what do YOU think?','Yes.', 'Sure, why not.',
    'I guess anything is possible.',
]

document.getElementById('answerButton').onclick = function () {
    var answer = answers[Math.floor(Math.random() * answers.length)];
        document.getElementById('answerContainer').innerHTML = answer;
    };