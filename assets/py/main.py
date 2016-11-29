from flask import Flask, render_template
import requests
import json

app = Flask(__name__, template_folder='.')

@app.route('/')
def homepage():
  
  params = {
    'api_key': 'tNbQSeBvVT2r',
    'format': "json"
  }
  
  r = requests.post(
  	"https://www.parsehub.com/api/v2/projects/tG7_AHPO2UYk/run", 
  	data=params)

  token = r.get("run_token")

  s = requests.get(
  	'https://www.parsehub.com/api/v2/runs/' + token + '/data', 
  	params=params)

  return render_template('../../index.html', movies=json.loads(s.text)['movies'])

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)