<div align="center">

# DG Solutions Challenge

<img src="./dgsolutions.jpeg" width="150px">

Esse repositório se trata do teste técnico para empresa [DG Solutions](https://dgsolutions.com.br/).

</div>

## Descrição
O projeto está separado em duas pastas, backend e frontend.
O projeto se refere, a um cadastro de pessoas, onde se inputa o nome e a data de nascimento.
É possível listar todas as pessoas cadastradas, retornando os dados inputados e também a idade atual dela.
Também é possivel deletar e editar os cadastros.

## Tecnologias:
- Backend:
  - NodeJS;
  - ORM Sequelize;
  - MySQL
- Frontend:
  - React;
  - Biblioteca MUI

## Deploys:
- Backend: https://dgsolutions-api.herokuapp.com/register
- Frontend: https://dgsolutions-front.vercel.app/register

## Instruções de uso para API localmente:
- Clone o repositório em sua máquina;
- Acesse a pasta `/backend`;
- Instale as dependencias com o comando `npm install`;
- Acesse o arquivo `config.json` que está na pasta `/backend/config`, e altere os campos `username` e `password` de acordo com o que você utiliza em sua máquina para acessar o MySQL;
- Utilize o comando `npx sequelize db:create` para criar o banco de dados;
- Em seguida utilize o comando `npx sequelize db:migrate` para migrar as configurações do arquivos na pasta `/backend/migrations` para o banco de dados;
- Utilize o comando `npm start` para iniciar a aplicação;
- Aplicação utilizará a porta `3001` do localhost.
- É necessário o serviço do MySQL funcionando em sua máquina para rodar localmente.
- API possui as seguintes rotas:
    - POST, GET: `/register`
    - GET, DELETE e PUT: `/register/:id`
    
#### POST `/register`:
- API permite que seja criado um novo cadastro através do método POST no endpoint `/register` passando no body um json no formato:
```json
    {
      "name": "String com no minimo 3 caracteres.",
      "edition": "Data no formato ISO 8601 YYYY-MM-DD",
    }
```

#### GET `/register` e `/register/:id`:
- API permite que seja possivel listar todas os cadastros registrados através dp método GET no endpoint `/register`, e listar um registro especifico com o endpoint `/register/:id`, passando um id de um registro já cadastrado.

#### DELETE `/register/:id`:
- A API permite deletar um registro especifico com o endpoint `/register/:id`, passando um id de um registro já cadastrado.

#### PUT `/register/:id`:
- API permite que seja editado um registro, através do método PUT no endpoint `/register/:id` passando o id de um registro já cadastrado, e no body um json no formato, do mesmo jeito no método POST:
```json
    {
      "name": "String com no minimo 3 caracteres.",
      "edition": "Data no formato ISO 8601 YYYY-MM-DD",
    }
```

### Próximos passos na API:
- Aprimoramento nos teste,
- Mais testes;
- Uma rota para login;
- Implementação do JWT;
- "Dockerizar" a aplicação;

## Instruções de do Frontend localmente:
- Clone o repositório em sua máquina;
- Acesse a pasta `/frontend`;
- Instale as dependencias com o comando `npm install`;
- Utilize o comando `npm start` para iniciar a aplicação;
- Aplicação utilizará a porta `3000` do localhost;
- O front já está integrado com o backend.
- O frontend possui 3 rotas:
  - `/register`, onde é possível cadastrar novos registros;
  - `/list-register`, onde listará todos os registros cadastrados;
  - `/edit-register`, onde é possível editar um registro selecionado.

### Considerações finais:
<div align="center">
  Dúvidas ou sugestões me contate por:
  - Linkedin: https://www.linkedin.com/in/guicouto90/
  - Email: gui.couto90@yahoo.com.br
</div>