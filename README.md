# events-api
Uma API que coleta e disponibiliza informações dos eventos disparados em sites

## GET
/events
  - Retorna todos os eventos agrupados e a quantidade de ocorrências.
  
/events?name=<sua_busca_aqui>
  - Retorna os eventos agrupados e a quantidade de ocorrência de acordo com o filtro.

## POST
/events
  - Insere um evento com nome e data especificadas.
  - Ex:
    - BODY { "name": <nome_do_evento>, "created_on": "2017-02-15T10:27:55Z" }
    
## DELETE
/events
  - Remove todos os eventos.
