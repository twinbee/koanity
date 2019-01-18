/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Koanity';
const GET_FACT_MESSAGE = "Here's your koan: ";
const HELP_MESSAGE = 'You can say tell me a koan, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    "A Cup of Tea. Nan-in, a Japanese master during the Meiji era, received a university professor who came to inquire about Zen." +
    " Nan-in served tea. He poured his visitors cup full, and then kept on pouring. The professor watched the overflow until he no longer" +
    " could restrain himself. It is overfull. No more will go in!. Like this cup, Nan-in said, you are full of your own opinions and " +
    "speculations. How can I show you Zen unless you first empty your cup?",

    "Obedience. The master Bankeis talks were attended not only by Zen students but by persons of all ranks and sects. He never quoted sutras" +
    " not indulged in scholastic dissertations. Instead, his words were spoken directly from his heart to the hearts of his listeners. His" +
    " large audience angered a priest of the Nichiren sect because the adherents had left to hear about Zen. The self-centered Nichiren " +
    "priest came to the temple, determined to have a debate with Bankei. Hey, Zen teacher! he called out. Wait a minute. Whoever respects you" +
    " will obey what you say, but a man like myself does not respect you. Can you make me obey you? Come up beside me and I will show you, " +
    "said Bankei. Proudly the priest pushed his way through the crowd to the teacher. Bankei smiled. Come over to my left side. The priest " +
    "obeyed. No, said Bankei, we may talk better if you are on the right side. Step over here. The priest proudly stepped over to the right. " +
    "You see, observed Bankei, you are obeying me and I think you are a very gentle person. Now sit down and listen. ",
    
    "Announcement. Tanzan wrote sixty postal cards on the last day of his life, and asked an attendent to mail them. Then he passed away." +
    "The cards read:    I am departing from this world.,,,,This is my last announcement.,,,,,,,,Tanzan,,,,,,, July 27, 1892",
    
    "The Last Poem of Hoshin.  The Zen Master Hoshin lived in China many years. Then he returned to the northeastern part of Japan, where" +
    " he taught his disciples. When he was getting very old, he told them a story he had heard in China. This is the story:     " +
    " One year on the twenty-fifth of December, Tokufu, who was very old, said to his disciples: I am not going to be alive next year " +
    "so you fellows should treat me well this year.      The pupils thought he was joking, but since he was a great-hearted teacher each " +
    "of them in turn treated him to a feast on succeeding days of the departing year.      On the eve of the new year, Tokufu concluded: " +
    "You have been good to me. I shall leave tomorrow afternoon when the snow has stopped.      The disciples laughed, thinking he was " +
    "aging and talking nonsense since the night was clear and without snow. But at midnight snow began to fall, and the next day they did" +
    " not find their teacher about. They went to the meditation hall. There he had passed on.   Hoshin, who related this story, told his " +
    "disciples: It is not necessary for a Zen master to predict his passing, but if he really wishes to do so, he can.  Can you? " +
    "someone asked.  Yes, answered Hoshin. I will show you what I can do seven days from now.  None of the disciples believed him, and " +
    "most of them had even forgotten the conversation when Hoshin called them together.  Seven days ago, he remarked, I said I was going " +
    "to leave you. It is customary to write a farewell poem, but I am neither a poet or a calligrapher. Let one of you inscribe my last " +
    "words.  His followers thought he was joking, but one of them started to write.  Are you ready? Hoshin asked.  Yes sir, replied the " +
    "writer.  Then Hoshin dictated:      I came from brillancy     And return to brillancy.     What is this?   This line was one line short" +
    " of the customary four, so the disciple said: Master, we are one line short.  Hoshin, with the roar of a conquering lion, shouted Kaa! " +
    "and was gone. "

    
    

];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
