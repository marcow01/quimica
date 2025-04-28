from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)

# Habilita CORS para todas as rotas
CORS(app)

RIOT_API_URL = "https://ddragon.leagueoflegends.com/cdn/14.21.1/data/en_US/champion.json"
API_KEY = "RGAPI-a24509c1-8c0c-4f2f-83a4-13cfb138049e"

@app.route('/api/champions', methods=['GET'])
def get_champions():
    try:
        response = requests.get(RIOT_API_URL)
        response.raise_for_status()  # Levanta um erro para códigos de status HTTP 4xx ou 5xx
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/player/<string:name>/<string:tag>', methods=['GET'])
def get_player(name, tag):
    url = f"https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{name}/{tag}"
    headers = {
        "X-Riot-Token": API_KEY
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:

        data = response.json()
        print(data)
        puuid = data["puuid"]
        response2 = requests.get(f"https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}", headers=headers)
        dataplayer = response2.json()
        print(dataplayer)
        return dataplayer
    
    else:
        print(f"Erro {response.status_code}: {response.text}")
        return None

                              
if __name__ == '__main__':
    app.run(debug=True, port=5000)
