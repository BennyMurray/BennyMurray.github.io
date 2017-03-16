
//ENDS ROUND
function endRound(){
    score_sound.play();
    document.getElementById('correct_answer_stem').innerHTML = 'Отлично!';
    $('#correct_answer_stem').addClass('animated flipInX');
    document.getElementById('overlay_image').src='static/score_a+_animated' +
        '.svg';
    document.getElementById('result_response_title').innerHTML = 'Score';

    document.getElementById('correct_answer_suffix').innerHTML = '';
    document.getElementById('final_score').innerHTML = '9/10';
    document.getElementById('final_score').style.color = '#f4bd07';
    document.getElementById('overlay').style.display = 'inline-block';
    document.getElementById('overlay').style.backgroundColor = 'rgba(58, 58, 58, 0.86)';
    document.getElementById('circle'+(counter).toString()).style.backgroundColor = '#f25c79';
    $('#overlay_image').addClass('animated bounceInLeft');
    resetAnimations();

    for(i = 1; i < 11; i++) {
        document.getElementById('circle' + (i).toString()).style.backgroundColor = '#fff';
    }
    counter = 0;
}

//PREPARES NEXT QUESTION
function prepareQuestion(){
    spelling = nouns[counter]['spelling'];
    translation = nouns[counter]['translation'];
    shuffeld_cases = shuffle(cases);
    var correct_case = shuffeld_cases[0];
    var incorrect_case = shuffeld_cases[1];
    var answer = nouns[counter][correct_case];
    var incorrect_answer = nouns[counter][incorrect_case];
    var stem = nouns[counter]['stem'];
    var suffix = answer.replace(stem, "");

    if(correct_case.includes("plural")){
        quantity = 'plural';
    }else{
        quantity = 'singular';
    }

    counter += 1;
    global_answer = answer;
    document.getElementById('overlay_question_number').innerHTML = (counter).toString();
    return {'spelling': spelling, 'translation': translation, 'answer': answer, 'incorrect_answer': incorrect_answer, 'correct_case':correct_case.split('_')[0], 'quantity': quantity, 'stem': stem, 'suffix': suffix}
}

//SHUFFLES AN ARRAY
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//CORRECT ANSWER
function correctAnswer(){
    $('#quantity_image').removeClass('animated bounceIn');
    correct_sound.play();
    document.getElementById('overlay_image').src='static/tick.svg';
    document.getElementById('overlay').style.display = 'inline-block';
    document.getElementById('overlay').style.backgroundColor = 'rgba(83,156,244,0.86)';
    document.getElementById('result_response_title').innerHTML = 'Молодец!';
    document.getElementById('circle'+(counter).toString()).style.backgroundColor = '#00c2ca';
    resetAnimations();
}

//INCORRECT ANSWER
function incorrectAnswer(){
    incorrect_sound.play();
    document.getElementById('overlay_image').src='static/incorrect_answer.svg';
    document.getElementById('overlay').style.display = 'inline-block';
    document.getElementById('overlay').style.backgroundColor = 'rgba(242, 85, 160, 0.86)';
    document.getElementById('result_response_title').innerHTML = 'Неправильно!';
    document.getElementById('circle'+(counter).toString()).style.backgroundColor = '#f25c79';
    resetAnimations();
}

//CANCELS THE OVERALY
function cancelOverlay(){
    document.getElementById('overlay').style.display = 'none';
}

//RESETS CSS ANIMATIONS
function resetAnimations(){
    $('#quantity_image').removeClass('animated bounceIn');
    $('#case_parameter_image').removeClass('animated bounceIn');
}

//BEGINS A NEW ROUND
function begin(){
    document.getElementById('start_screen').style.display = "none";
    document.getElementById("start_screen").style.zIndex = "-100";
}

//CHOOSES A NEW QUESTION AND ANSWER
function nextAnswer(){
    question = prepareQuestion();
    document.getElementById('correct_answer_stem').innerHTML = question['stem'];
    document.getElementById('correct_answer_suffix').innerHTML = question['suffix'];
    document.getElementById('noun_title').innerHTML = question['spelling'];
    document.getElementById('translation_title').innerHTML = question['translation'];
    shuffeld_sides = shuffle(sides);
    document.getElementById('choice_title_'+shuffeld_sides[0]).innerHTML = question['answer'];
    document.getElementById('choice_title_'+shuffeld_sides[1]).innerHTML = question['incorrect_answer'];
    document.getElementById('case_title').innerHTML = question['correct_case'];
    document.getElementById('quantity_title').innerHTML = question['quantity'];
    document.getElementById('quantity_image').src='static/'+ question['quantity'] + '_symbol.svg';
    $('#quantity_image').addClass('animated bounceIn');
    $('#case_parameter_image').addClass('animated bounceIn');
}


var cases = ["nominative_singular", "accusative_singular", "genitive_singular", "dative_singular", "prepositional_singular", "instrumental_singular",
    "nominative_plural", "accusative_plural", "genitive_plural", "dative_plural", "prepositional_plural", "instrumental_plural"];


var nouns = [

    {
        "spelling": "вид",
        "translation": "appearance",
        "gender": "MASCULINE",
        "nominative_singular": "вид",
        "accusative_singular": "вид",
        "genitive_singular": "виду",
        "dative_singular": "виду",
        "prepositional_singular": "видом",
        "instrumental_singular": "виде",
        "nominative_plural": "вид",
        "accusative_plural": "вид",
        "genitive_plural": "виду",
        "dative_plural": "виду",
        "prepositional_plural": "видом",
        "instrumental_plural": "виде",
        "stem": "вид"},

    {
        "spelling": "власть",
        "translation": "power",
        "gender": "FEMININE",
        "nominative_singular": "власть",
        "accusative_singular": "власть",
        "genitive_singular": "власти",
        "dative_singular": "власти",
        "prepositional_singular": "властию",
        "instrumental_singular": "власти",
        "nominative_plural": "власть",
        "accusative_plural": "власть",
        "genitive_plural": "власти",
        "dative_plural": "власти",
        "prepositional_plural": "властию",
        "instrumental_plural": "власти",
        "stem": "власт"},

    {
        "spelling": "письмо",
        "translation": "letter",
        "gender": "NEUTER",
        "nominative_singular": "письмо",
        "accusative_singular": "письмо",
        "genitive_singular": "письма",
        "dative_singular": "письму",
        "prepositional_singular": "письмом",
        "instrumental_singular": "письме",
        "nominative_plural": "письмо",
        "accusative_plural": "письмо",
        "genitive_plural": "письма",
        "dative_plural": "письму",
        "prepositional_plural": "письмом",
        "instrumental_plural": "письме",
        "stem": "письм"
    },

    {
        "spelling": "земля",
        "translation": "earth, land, soil",
        "gender": "FEMININE",
        "nominative_singular": "земля",
        "accusative_singular": "землю",
        "genitive_singular": "земли",
        "dative_singular": "земле",
        "prepositional_singular": "землёю",
        "instrumental_singular": "земле",
        "nominative_plural": "земля",
        "accusative_plural": "землю",
        "genitive_plural": "земли",
        "dative_plural": "земле",
        "prepositional_plural": "землёю",
        "instrumental_plural": "земле",
        "stem": "земл"
    },

    {
        "spelling": "случай",
        "translation": "case",
        "gender": "MASCULINE",
        "nominative_singular": "случай",
        "accusative_singular": "случай",
        "genitive_singular": "случая",
        "dative_singular": "случаю",
        "prepositional_singular": "случаем",
        "instrumental_singular": "случае",
        "nominative_plural": "случай",
        "accusative_plural": "случай",
        "genitive_plural": "случая",
        "dative_plural": "случаю",
        "prepositional_plural": "случаем",
        "instrumental_plural": "случае",
        "stem": "случа"
    },
    {
        "spelling": "воздух",
        "translation": "air",
        "gender": "MASCULINE",
        "nominative_singular": "воздух",
        "accusative_singular": "воздух",
        "genitive_singular": "воздуху",
        "dative_singular": "воздуху",
        "prepositional_singular": "воздухом",
        "instrumental_singular": "воздухе",
        "nominative_plural": "воздух",
        "accusative_plural": "воздух",
        "genitive_plural": "воздуху",
        "dative_plural": "воздуху",
        "prepositional_plural": "воздухом",
        "instrumental_plural": "воздухе",
        "stem": "воздух"
    },
    {
        "spelling": "правда",
        "translation": "truth",
        "gender": "FEMININE",
        "nominative_singular": "правда",
        "accusative_singular": "правду",
        "genitive_singular": "правды",
        "dative_singular": "правде",
        "prepositional_singular": "правдою",
        "instrumental_singular": "правде",
        "nominative_plural": "правда",
        "accusative_plural": "правду",
        "genitive_plural": "правды",
        "dative_plural": "правде",
        "prepositional_plural": "правдою",
        "instrumental_plural": "правде",
        "stem": "правд"
    },
    {
        "spelling": "лес",
        "translation": "forest",
        "gender": "MASCULINE",
        "nominative_singular": "лес",
        "accusative_singular": "лес",
        "genitive_singular": "лесу",
        "dative_singular": "лесу",
        "prepositional_singular": "лесом",
        "instrumental_singular": "лесу",
        "nominative_plural": "лес",
        "accusative_plural": "лес",
        "genitive_plural": "лесу",
        "dative_plural": "лесу",
        "prepositional_plural": "лесом",
        "instrumental_plural": "лесу",
        "stem": "лес"
    },
    {
        "spelling": "путь",
        "translation": "way, track, path",
        "gender": "MASCULINE",
        "nominative_singular": "путь",
        "accusative_singular": "путь",
        "genitive_singular": "пути",
        "dative_singular": "путю",
        "prepositional_singular": "путём",
        "instrumental_singular": "путе",
        "nominative_plural": "путь",
        "accusative_plural": "путь",
        "genitive_plural": "пути",
        "dative_plural": "путю",
        "prepositional_plural": "путём",
        "instrumental_plural": "путе",
        "stem": "пут"
    },
    {
        "spelling": "работа",
        "translation": "work, job",
        "gender": "FEMININE",
        "nominative_singular": "работа",
        "accusative_singular": "работу",
        "genitive_singular": "работы",
        "dative_singular": "работе",
        "prepositional_singular": "работою",
        "instrumental_singular": "работе",
        "nominative_plural": "работа",
        "accusative_plural": "работу",
        "genitive_plural": "работы",
        "dative_plural": "работе",
        "prepositional_plural": "работою",
        "instrumental_plural": "работе",
        "stem": "работ"
    }
];