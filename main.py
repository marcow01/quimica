import requests

BASE_URL = "http://ddragon.leagueoflegends.com/cdn"

def get_latest_version():
    # Obtém a versão mais recente do Data Dragon
    response = requests.get("http://ddragon.leagueoflegends.com/api/versions.json")
    if response.status_code == 200:
        versions = response.json()
        return versions[0]  # Retorna a versão mais recente
    else:
        print(f"Erro {response.status_code}: Não foi possível obter a versão mais recente.")
        return None

# Função para obter o URL do ícone de invocador
def get_profile_icon_url(profile_icon_id):
    version = get_latest_version()
    if version:
        return f"{BASE_URL}/{version}/img/profileicon/{profile_icon_id}.png"
    else:
        return None

# Função para obter dados de campeões
def get_champion_data(language="pt_BR"):
    version = get_latest_version()
    if version:
        url = f"{BASE_URL}/{version}/data/{language}/champion.json"
        response = requests.get(url)
        return response.json() if response.status_code == 200 else None
    else:
        return None

# Função para obter a URL da imagem de um campeão específico
def get_champion_image_url(champion_name):
    version = get_latest_version()
    if version:
        return f"{BASE_URL}/{version}/img/champion/{champion_name}.png"
    else:
        return None

# Função para obter dados de itens
def get_item_data(language="pt_BR"):
    version = get_latest_version()
    if version:
        url = f"{BASE_URL}/{version}/data/{language}/item.json"
        response = requests.get(url)
        return response.json() if response.status_code == 200 else None
    else:
        return None

# Função para obter a URL da imagem de um item específico
def get_item_image_url(item_id):
    version = get_latest_version()
    if version:
        return f"{BASE_URL}/{version}/img/item/{item_id}.png"
    else:
        return None

# Função para obter dados de feitiços de invocador
def get_summoner_spell_data(language="pt_BR"):
    version = get_latest_version()
    if version:
        url = f"{BASE_URL}/{version}/data/{language}/summoner.json"
        response = requests.get(url)
        return response.json() if response.status_code == 200 else None
    else:
        return None

# Função para obter a URL da imagem de um feitiço de invocador específico
def get_summoner_spell_image_url(spell_name):
    version = get_latest_version()
    if version:
        return f"{BASE_URL}/{version}/img/spell/{spell_name}.png"
    else:
        return None

# Exemplo de uso das funções
if __name__ == "__main__":
    # Exemplo para obter a URL do ícone de perfil
    profile_icon_id = 1234  # Substitua pelo ID do ícone de perfil
    print("URL do Ícone de Perfil:", get_profile_icon_url(profile_icon_id))

    # # Exemplo para obter dados de campeões
    # champion_data = get_champion_data()
    # print("Dados de Campeões:", champion_data)

    # # Exemplo para obter a imagem de um campeão específico
    # champion_name = "Aatrox"  # Substitua pelo nome do campeão
    # print("URL da Imagem do Campeão:", get_champion_image_url(champion_name))

    # # Exemplo para obter dados de itens
    # item_data = get_item_data()
    # print("Dados de Itens:", item_data)

    # # Exemplo para obter a imagem de um item específico
    # item_id = 1001  # Substitua pelo ID do item
    # print("URL da Imagem do Item:", get_item_image_url(item_id))

    # # Exemplo para obter dados de feitiços de invocador
    # summoner_spell_data = get_summoner_spell_data()
    # print("Dados de Feitiços de Invocador:", summoner_spell_data)

    # # Exemplo para obter a imagem de um feitiço de invocador específico
    # spell_name = "Flash"  # Substitua pelo nome do feitiço
    # print("URL da Imagem do Feitiço:", get_summoner_spell_image_url(spell_name))
