# AI-HealthCareChatBot-With-Voice
This Repository consists of the training and main chatbot.ipynb files which MUST BE be run in JupyterLab , otherwise the voice part will not work

RUN DOWNLOAD AND RUN ONLY THE .ipynb FILES IN JUPYTERLAB , OTHERWISE THE VOICE PART WILL NOT WORK.

BELOW I AM MENIONING ALL THE NECESSARY MODULES TO BE INSTALLED IN JUPYTERLAB IN BOTH chatbot.ipynb and training.ipynb TO MAKE IT WORK AS EXPECTED.

pip install tensorflow
pip install pickle
pip install pickle json
pip install nltk
pip install nltk.punkt # if there is an error
pip install nltk.wordnet # same as punkt
pip install SpeechRecognition # while importing write import speech_recognition
pip install pyAudio

if nltk.punkt and wordnet doesnot work then try the below ones.
import nltk
nltk.download('punkt')
nltk.download('wordnet')

While using both of them in JupyterLab also import the intensts.json file from your local pc to the Lab 




