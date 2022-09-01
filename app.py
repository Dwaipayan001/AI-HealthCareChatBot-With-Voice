from flask import Flask, request
from flask_cors import CORS
import random
import json
import pickle
import nltk
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def main():
    return json.dumps({'Health.AI': 'v1.0'})


@app.route('/predict', methods=['GET'])
def classify():
    sentence = request.args.get('symptoms')
    
    lemmatizer = WordNetLemmatizer()
    intents = json.loads(open("AI-HealthCareChatBot-With-Voice/intents.json").read())

    words = pickle.load(open('AI-HealthCareChatBot-With-Voice/words.pkl','rb'))
    classes = pickle.load(open('AI-HealthCareChatBot-With-Voice/classes.pkl','rb'))
    model = load_model('AI-HealthCareChatBot-With-Voice/chatbot_model.h5')

    def clean_up_sentence(sentence):
        sentence_words = nltk.word_tokenize(sentence) 
        sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
        return sentence_words

    def bag_of_words(sentence):
        sentence_words = clean_up_sentence(sentence)
        bag = [0]*len(words)
        
        for w in sentence_words:
            for i,word in enumerate(words):
                if word == w:
                    bag[i]=1
        return np.array(bag)


    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    
    ERROR_THRESHOLD = 0.25
    
    results = [[i,r] for i,r in enumerate(res) if r > ERROR_THRESHOLD]
    
    results.sort(key=lambda x:x[1],reverse=True)
    
    return_list  = []
    
    for r in results:
        return_list.append({'intent':classes[r[0]],'probability' : str(r[1])})
    return json.dumps({'Results': return_list})

if __name__ == '__main__':
    app.run(debug=True)

