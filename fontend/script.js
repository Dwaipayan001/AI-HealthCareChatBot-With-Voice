const intents_json = {"intents": [
    {
      "tag" : "greetings",
      "patterns" : ["Hello","Hey","Hi","Good Day","Greetings"],
      "responses" : ["Hello!","Hey","What Can I do for you?"]
    },
  
    {
      "tag" : "Acne",
      "patterns" : ["blackheads","pimples","face pimples","neck pimples","shoulder pimples"],
      "responses" : ["According to your symptoms you might have Acne","You have Acne","I suppose you have Acne"]
    },
  
    {
      "tag" : "Attention Deficit Disorder (ADHD)",
      "patterns" : ["impulsivity","hyperactivity","lack of focus","messy works","restlessness"],
      "responses" : ["According to your symptoms you might have Attention Deficit Disorder","You have Attention Deficit Disorder","I suppose you have Attention Deficit Disorder"]
  
    },
  
    {
      "tag" : "Allergies",
      "patterns" : ["sneezing","itchy eyes","coughing","watery eyes","itchy nose"],
      "responses" : ["According to your symptoms you might have Allergies","You have Allergies","I suppose you have Allergies"]
    },
    {
      "tag" : "Alzheimers",
      "patterns" : ["forgetful","confusion with time","poor judgement"],
      "responses" : ["According to your symptoms you might have Alzheimers","You have Alzheimers","I suppose you have Alzheimers"]
    },
    {
        "tag" : "Ankylosing Spondylitis",
        "patterns" : ["loss of appetite","weight loss","difficulty walking","pain in heels","pain in hips","pain in jaw","decreased energy","heart failure","heart block","pain in lower back","stiffness"],
        "responses" : ["According to your symptoms you might have Ankylosing Spondylitis","You have Ankylosing Spondylitis","I suppose you have Ankylosing Spondylitis"]
  
    },
    {
        "tag" : "Anorexia",
        "patterns" : ["terrifies of gaining weight","hard to sleep through night","dizziness","hair is falling out","constipation","swollen arms","swollen legs","fainting","underweight"],
        "responses" : ["According to your symptoms you might have Anorexia","You have Anorexia","I suppose you have Anorexia"]
    },
    {
        "tag" : "Anxiety or Panic Disorder",
        "patterns" : ["rapid heartbeat","fast heartbeat","sweating","shaking","shortness of breath","fear of death","chest pain","faintness"],
        "responses" : ["According to your symptoms you might have Anxiety or Panic Disorder","You have Anxiety or Panic Disorder","I suppose you have Panic Disorder"]
    },
    {
        "tag" : "Arthritis",
        "patterns" : ["lack of movement","sored area","joint pain"],
        "responses" : ["According to your symptoms you might have any type of Arthritis","You have any type of Arthritis","I suppose you have any type of Arthritis"]
    },
    {
        "tag" : "Antitrypsin Deficiency",
        "patterns" : ["jaundice","yellow skin","coughing up blood","yellow urine"],
        "responses" : ["According to your symptoms you might have Antitrypsin Deficiency","You have Antitrypsin Deficiency","I suppose you have Antitrypsin Deficiency"]
    },
    {
        "tag" : "Abdominal Migraine",
        "patterns" : ["dark shadows under eyes","be pale","have little energy","feeling drowsy","unable to eat"],
        "responses" : ["According to your symptoms you might have Abdominal Migraine","You have Abdominal Migraine","I suppose you have Abdominal Migraine"]
    },
    {
        "tag" : "Amyloidosis",
        "patterns" : ["sudden weight loss","feeling of fullness","shortness of breath","tongue swelling","severe fatigue","severe weakness","irregular heartbeat"],
        "responses" : ["According to your symptoms you might have Amyloidosis","You have Amyloidosis","I suppose you have Amyloidosis"]
  
    },
    {
        "tag" : "Abscessed Tooth",
        "patterns" : ["trouble swallowing","trouble breathing","bad taste","gum redness","sensitivity","bad odor in mouth"],
        "responses" : ["According to your symptoms you might have Abscessed Tooth","You have Abscessed Tooth","I suppose you have Abscessed Tooth"]
    },
    {
        "tag" : "Amenorrhea",
        "patterns" : ["hair loss","change in vision","hair growth on face","pain in pelvic area"],
        "responses" : ["According to your symptoms you might have Amenorrhea","You have Amenorrhea","I suppose you have Amenorrhea"]
    },
    {
        "tag" : "Absence Seizure",
        "patterns" : ["sudden stop in motion","lip smacking","eyelid fluttering","finger rubbing"],
        "responses" : ["According to your symptoms you might have Absence Seizure","You have Absence Seizure","I suppose you have Absence Seizure"]
    },
    {
        "tag" : "Sleep Apnea",
        "patterns" : ["loud snoring","loud gasping","loud choking","excessive sweating at night"],
        "responses" : ["According to your symptoms you might have Sleep Apnea","You have Sleep Apnea","I suppose you have Sleep Apnea"]
    },
    {
        "tag" : "Achalasia",
        "patterns" : ["food coming back up into the throat","nighttime coughing","heart is burning","hurt is belching"],
        "responses" : ["According to your symptoms you might have Achalasia","You have Achalasia","I suppose you have Achalasia"]
    },
    {
        "tag" : "Appendicitis",
        "patterns" : ["pain in lower belly","pain near navel","belly pain and vomiting","swollen belly","severe cramps","difficulty in peeing","constipation with gas"],
        "responses" : ["According to your symptoms you might have Appendicitis","You have Appendicitis","I suppose you have Appendicitis"]
    },
    {
        "tag" : "Aparaxia of Speech",
        "patterns" : ["unable to form proper words","unable to say complex words","speech inconsistencies","distortion in vowel sounds"],
        "responses" : ["According to your symptoms you might have Aparaxia of Speech","You have Aparaxia of Speech","I suppose you have Aparaxia of Speech"]
    },
    {
      "tag" : "Arachnoiditis",
      "patterns" : ["weakness in the legs","numbness in legs","ringing in ears","bladder problems"],
      "responses" : ["According to your symptoms you are suffering from Arachnoiditis","You have Arachnoiditis","I suppose you have Arachnoiditis"]
    },
    {
      "tag" : "Acute Respiratory Distress Syndrome (ARDS)",
      "patterns" : ["shortness of breath","low blood pressure","fast breathing","fast heartbeat","exhaustion","blue tinted lips","blue tinted nails"],
      "responses" : ["According to your symptoms you are suffering from Acute Respiratory Distress Syndrome (ARDS)","You have Acute Respiratory Distress Syndrome (ARDS)","I suppose you have Acute Respiratory Distress Syndrome (ARDS)"]
    },
    {
      "tag" : "Anemia",
      "patterns" : ["fatigue","weakness","pale skin","yellowish skin","shortness of breath","cold hands","cold feet"],
      "responses" : ["According to your symptoms you are suffering from Anemia","You have Anemia","I suppose you have Anemia"]
    },
    {
      "tag" : "Arrhythmia",
      "patterns" : ["palpitations","chest pounding","breath shortness","blurry vision","anxiety"],
      "responses" : ["According to your symptoms you might have Arrhythmia","You have Arrhythmia","I suppose you have Arrhythmia"]
    },
    {
      "tag" : "Asthma",
      "patterns" : ["coughing at night","wheezing","chest pain","frequent cough","feeling tired","easily upset","trouble in sleeping","pale face","sweaty face"],
      "responses" : ["According to your symptoms you might have Asthma","You have Asthma","I suppose you have Asthma"]
    },
    {
      "tag" : "Autism",
      "patterns" : ["delayed language","delayed learning","delayed movement","unusual mood","unusual eating habits","unusual sleeping habits","no facial expression"],
      "responses" : ["According to your symptoms you might have Autism","You have Autism","I suppose you have Autism"]
    },
    {
      "tag" : "Blepharitis",
      "patterns" : ["feels like something in the eye","a burning feeling in the eye","blurry vision","sensitivity to light","dry eyes","red eyes","watery eyes"],
      "responses" : ["According to your symptoms you might have Blepharitis","You have Blepharitis","I suppose you have Blepharitis"]
    },
    {
      "tag" : "Bacterial Arthritis",
      "patterns" : ["having chills","unable to move the limb with the infected joint","Severe pain in the affected joint"],
      "responses" : ["According to your symptoms you might have Bacterial Arthritis","You have Bacterial Arthritis","I suppose you have Backterial Arthritis"]
    },
    {
      "tag" : "Bacterial Meningitis",
      "patterns" : ["feeling confused","numbness in my face","neck is stiff","hard time concentrating","seizures","lack of appetite"],
      "responses" : ["According to your symptoms you might have Bacterial Meningitis","You have Meningitis","I suppose you have Meningitis"]
    },
    {
      "tag" : "Benign Prostate Enlargement(BPE)",
      "patterns" : ["makes it difficult o urinate","need to urinate frequently","wake up frequently in the night to urinate","difficulty in passing urine"],
      "responses" : ["According to your symptoms you might have Benign Prostate Enlargement Disease","You have Benign Prostate Enlargement Disease","I suppose you have Benign Prostate Enlargement Disease"]
    },
    {
      "tag" : "Bipolar Disorder",
      "patterns" : ["feeling depressed","lacking energy","loss of interest","feeling worthless","being pessimistic about everything","being delusional","suicidal thoughts","feeling full of energy","easily irritated"],
      "responses" : ["According to your symptoms you might have Bipolar Disorder Disease","You have Bipolar Disorder Disease","I suppose you have Bipolar Disorder Disease"]
    },
    {
        "tag" : "Bronchiectasis",
        "patterns" : ["persistent cough with large amount of phlegm","coughing up blood","coughing up blood-stained phlegm"],
        "responses" : ["According to your symptoms you might have Bronchiectasis Disease","You have Bronchiectasis Disease","I suppose you have Bronchiectasis Disease"]
  
    },
    {
        "tag" : "Bronchitis",
        "patterns" : ["blocked nose","runny or blocked nose","tiredness","cough with phlegm","cough with yellow gray phlegm"],
        "responses" : ["According to your symptoms you might have Bronchitis Disease","You have Bronchitis Disease","I suppose you have Bronchitis Disease"]
    },
    {
        "tag" : "Bulimia",
        "patterns" : ["over eating","think about food all time","overeats","focus in body image"],
        "responses" : ["According to your symptoms you might have Bulimia Disease","You have Bulimia Disease","I suppose you have Bulimia Disease"]
    },
    {
        "tag" : "Catarrh",
        "patterns" : ["constantly need to clear throat","blocked or stuffy nose can't clear","throat blocked","reduced sense of smell","reduced sense of taste","temporary hearing loss"],
        "responses" : ["According to your symptoms you might have Catarrh Disease","You have Catarrh Disease","I suppose you have Catarrh Disease"]
    },
    {
        "tag" : "Cellulitis",
        "patterns" : ["red skin","hot skin","swollen skin","tender skin"],
        "responses" : ["According to your symptoms you might have Cellulitis Disease","You have Cellulitis Disease","I suppose you have Cellulitis Disease"]
    },
    {
        "tag" : "Chest Infection",
        "patterns" : ["rapid heart beat","chest tightness","feeling confused"],
        "responses" : ["According to your symptoms you might have Chest Infection","You have Chest Infection","I suppose you have Chest Infection"]
    },
    {
      "tag" : "Chest Pain",
      "patterns" : ["chest feels heavy","chest feels tight","pain in chest and arms back and jaw","breathlessness"],
      "responses" : ["According to your symptoms you might have Chest Pain","You have Chest Pain","I suppose you have Chest Pain"]
    },
    {
      "tag" : "Chronic Fatigue Syndrome",
      "patterns" : ["sleep disturbance","poor temperature control","dizziness","hyper sensitive to light","hyper sensitive to sound","speech problem","language problem","problem with concentration","problem with thinking"],
      "responses" : ["According to your symptoms you might have Chronic Fatigue Syndrome","You have Chronic Fatigue Syndrome","I suppose you have Chronic Fatigue Syndrome"]
    },
    {
      "tag" : "Common Cold",
      "patterns" : ["sore throat","sneezing","coughing","hoarse voice","headache","ear ache","blocked nose","runny nose"],
      "responses" : ["According to your symptoms you might have Common Cold","You have Common Cold","I suppose you have Common Cold"]
    },
    {
      "tag" : "Conjunctivitis",
      "patterns" : ["eye redness","burning sensation in eyes","sticky coating on eye lashes","disturbed vision","intense red in eyes"],
      "responses" : ["According to your symptoms you might have Conjunctivitis","You have Conjunctivitis","I suppose you have Conjunctivitis"]
    },
    {
      "tag" : "Dehydration",
      "patterns" : ["light-headedness","tiredness","dry mouth","dry lips","infrequent urine"],
      "responses" : ["According to your symptoms you might have Dehydration","You have Dehydration","I suppose you have Dehydration"]
    },
    {
      "tag" : "Dental Abscess",
      "patterns" : ["intense pain in tooth","intense pain in gum","tooth pain spreads to ear jaw and neck","tender tooth","discoloured tooth","bad breath","sensitive to hot and cold"],
      "responses" : ["According to your symptoms you might have Dental Abscess","You have Dental Abscess","I suppose you have Dental Abscess"]
    },
    {
      "tag" : "Depression",
      "patterns" : ["continuous sadness","mood off","losing interest in things","losing motivation","feeling anxious","feeling guilty","feeling helpless","feeling hopeless","low self esteem","speaking slower than usual","feeling worried"],
      "responses" : ["According to your symptoms you might have Depression","You have Depression","I suppose you have Depression"]
    },
    {
      "tag" : "Diabetes",
      "patterns" : ["feeling very thirsty","loss of muscle bulk","feeling very tired","wounds heal slowly"],
      "responses" : ["According to your symptoms you might have Diabetes","You have Diabetes","I suppose you have Diabetes"]
    },
    {
      "tag" : "Diarrhoea",
      "patterns" : ["stomach cramps","pale skin","cold hands","cold feet","feeling drowsy","rapid heartbeat"],
      "responses" : ["According to your symptoms you might have Diarrhoea","You have Diarrhoea","I suppose you have Diarrhoea"]
    },
    {
      "tag" : "Dystonia",
      "patterns" : ["muscle spasms","abnormal posture","twisted posture","foot turning inwards","body parts jerking rapidly"],
      "responses" : ["According to your symptoms you might have Dystonia","You have Dystonia","I suppose you have Dystonia"]
    },
    {
      "tag" : "Epilepsy",
      "patterns" : ["experienced the events before","unusual smell or taste","tingling sensation in arms and legs","sudden feeling of fear or joy"],
      "responses" : ["According to your symptoms you might have Epilepsy","You have Epilepsy","I suppose you have Epilepsy"]
    },
    {
      "tag" : "Escherichia Coli",
      "patterns" : ["diarrhoea","stomach cramps","occasionally fever"],
      "responses" : ["According to your symptoms you might have Escherichia Coli","You have Escherichia Coli","I suppose you have Escherichia Coli"]
    },
    {
      "tag" : "Flu",
      "patterns" : ["sudden fever","dry cough","chesty cough","chills","aching muscles","sore throat"],
      "responses" : ["According to your symptoms you might have Flu","You have Flu","I suppose you have Flu"]
    },
   
  
  
  
  
  
  
  
  
  
    {
        "tag" : "Unknown",
        "patterns" : [],
        "responses" : ["Sorry I didn't understand what you said","Sorry I didn't catch that","Sorry I can't recognize you , Please try again"]
    },
    {
      "tag" : "Goodbye",
      "patterns" : ["Thank You, Goodbye","See you","Bye","goodbye"],
      "responses"  : ["Have a Nice day","Thank You to you too","Talk to you later!","GoodBye!"]
    }]}

const ENDPOINT = "http://127.0.0.1:5000/predict?symptoms="

var messages = [], //array that hold the record of each string in chat
    lastUserMessage = "", //keeps track of the most recent input string from the user
    botMessage = "", //var keeps track of what the chatbot is going to say
    talking = true; //when false the speech function doesn't work


async function chatbotResponse() {
    talking = true;

    fetch(ENDPOINT+lastUserMessage, {            
        method: 'GET',
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            var tag = data.Results[0].intent
            console.log(tag)

            for(var i = 0; i<intents_json.intents.length;i++)
            {
                if(intents_json.intents[i].tag == tag)
                {
                    var index = Math.floor(Math.random() * 3);
                    botMessage = intents_json.intents[i].responses[index]
                }
            }
        })
}

async function newEntry(mssg, val) {
    if (document.getElementById("chatbox").value != "" || val) {
        lastUserMessage = mssg;
        document.getElementById("chatbox").value = "";
        messages.push(lastUserMessage);
        await chatbotResponse();
        await new Promise(r => setTimeout(r, 300));
        messages.push(botMessage);
        Speech(botMessage);
        for (var i = 1; i < 8; i++) {
        if (messages[messages.length - i])
            document.getElementById("chat-bubble" + i).style.visibility = "visible"
            document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    }
}

function Speech(say) {
    if ('speechSynthesis' in window && talking) {
        var utterance = new SpeechSynthesisUtterance(say);
        speechSynthesis.speak(utterance);
    }
}

document.onkeypress = keyPress;

function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        newEntry(document.getElementById("chatbox").value, false);
    }
}

function enter()
{
  newEntry(document.getElementById("chatbox").value, false);
}

function placeHolder() {
    document.getElementById("chatbox").placeholder = "";
}

const GetSpeech = () => {
  console.log("clicked microphone");
  const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
 
  let recognition = new SpeechRecognition();
recognition.onstart = () => {
          document.getElementById('mic').style.background = 'lightblue';
          console.log("starting listening, speak in microphone");
      }
      recognition.onspeechend = () => {
          document.getElementById('mic').style.background = 'white';
          console.log("stopped listening");
          recognition.stop();
      }
      recognition.onresult = (result) => {
          newEntry(`${result.results[0][0].transcript}`, true)
          console.log(result.results[0][0].transcript);
       }
   
       recognition.start();
}

