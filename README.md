# API de Links
Essa API permite armazenar e recuperar links com um ID, URL e título. Você pode usar a API para criar uma lista de links que pode ser exibida em uma página da web, por exemplo.

API hospedado em:
https://link-api.glitch.me

## Como Usar
Para começar a usar a API, siga estas etapas:

Instale o Node.js se ainda não o tiver feito.
Clone ou baixe o repositório da API.
Abra um terminal na pasta raiz do projeto e execute o comando npm install para instalar as dependências.
Execute o comando npm start para iniciar a API.
Use as URLs dos endpoints descritos acima para fazer solicitações HTTP para a API.


### Endpoints
A API tem os seguintes endpoints:

GET /links
Retorna uma lista de todos os links armazenados na API.

Exemplo de resposta:
```
[
  {
    "id": 1,
    "url": "https://www.example.com",
    "title": "Exemplo"
  },
  {
    "id": 2,
    "url": "https://www.google.com",
    "title": "Google"
  }
]
```

### GET /links/:id
Retorna o link com o ID especificado.

Exemplo de resposta:
```
{
  "id": 1,
  "url": "https://www.example.com",
  "title": "Exemplo"
}
```

### POST /links
Cria um novo link com a URL e título especificados. Retorna o link recém-criado.

Exemplo de payload:
```
{
  "url": "https://www.example.com",
  "title": "Exemplo"
}
```
Exemplo de resposta:
```
{
  "id": 1,
  "url": "https://www.example.com",
  "title": "Exemplo"
}
```
### PUT /links/:id
Atualiza o link com o ID especificado com a URL e título fornecidos. Retorna o link atualizado.

Exemplo de payload:
```
{
  "url": "https://www.example.com",
  "title": "Exemplo Atualizado"
}
```
Exemplo de resposta:

```
{
  "id": 1,
  "url": "https://www.example.com",
  "title": "Exemplo Atualizado"
}
```

### DELETE /links/:id
Exclui o link com o ID especificado. Retorna uma mensagem indicando se o link foi excluído com sucesso ou não.

Exemplo de resposta:
```
{
  "message": "Link excluído com sucesso"
}
```
