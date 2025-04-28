import requests

API_KEY = "RGAPI-a24509c1-8c0c-4f2f-83a4-13cfb138049e"

def get_account_by_riot_id(game_name, tag_line, region='americas'):
    url = f"https://{region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{game_name}/{tag_line}"
    headers = {
        "X-Riot-Token": API_KEY
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Erro {response.status_code}: {response.text}")
        return None

def get_summoner_by_puuid(puuid, region='br1'):
    url = f"https://{region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}"
    headers = {
        "X-Riot-Token": API_KEY
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Erro {response.status_code}: {response.text}")
        return None

if __name__ == "__main__":
    game_name = "mentirinhaonline"  # Substitua pelo nome do jogador
    tag_line = "0110"         # Substitua pela tag do jogador
    account_region = "americas"  # Usado para a conta
    summoner_region = "br1"      # Região específica do jogo League of Legends

    account_info = get_account_by_riot_id(game_name, tag_line, account_region)
    
    if account_info:
        puuid = account_info["puuid"]
        print("Informações da Conta:")
        print(account_info)

        # Obter informações do invocador usando o PUUID e a região correta
        summoner_info = get_summoner_by_puuid(puuid, summoner_region)
        if summoner_info:
            print("Informações do Invocador:")
            print(summoner_info)
