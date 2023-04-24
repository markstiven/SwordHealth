# Sword Health - Teste
O teste consiste em avaliar dois tipos de usuarios {'technician', 'manager'}

Ações: 
 * Manager:
    - Pode deletar as atividades dos técnicos;
    - Ele consegue visualizar quando um técnico registra uma atividade ou altera a mesma;
    - O manager consegue visualizar todas as atividades e quais técnicos que realizaram;
 * Technician:
    - Ele pode registrar uma atividade;
    - Pode visualizar só apenas a sua atividade;
    - O mesmo pode atualizar a atividade;

# API
    * A API foi desenvolvidar com as seguintes tecnologias:
        - JavaScript (Node.js)
        - Mysql
        - RabbitMQ
        - docker
        - jest

## --------------------------------------------------------- ##

## As intruções abaixo é para instalar as funcionalidades da API

 * Estou deixando o .envExample em anexo a api, por favor, renomeie para .env
 * caso queira rodar a maquina no dev ao invés do docker, recomendo que substitua a variável RABBIT_HOST = rabbitmq para RABBIT_HOST = localhost
 
# Instalar IMAGES
* a partir que rodar o comando, a API já está programada para rodar automaticamente

 docker-compose up -d

# Instale as dependencias para popular o banco caso não possua yarn ou npm como global
 npm i
 
 # Criar as tabelas no banco Mysql
 * antes de criar a tabela, parar o container da API
 * no meu caso to usando o npm, mas caso esteja usando o yarn, basta substituir o npx

 - npx sequelize db:migrate

 # Popular a tabela Users e Activities
 * no meu caso to usando o npm, mas caso esteja usando o yarn, basta substituir o npx

 - npx sequelize db:seed:all

 # Para realizar o teste unitário:
 * caso queira rodar a maquina no dev ao invés do docker, recomendo que substitua a variável RABBIT_HOST = rabbitmq para RABBIT_HOST = localhost
 npm test

 # Rodar API manualmente com o comando
 * no meu caso to usando o npm, mas caso esteja usando o yarn, basta substituir o npm
 * caso queira rodar a maquina no dev ao invés do docker, recomendo que substitua a variável RABBIT_HOST = rabbitmq para RABBIT_HOST = localhost
 
 npm run dev

 ## Os pontos abaixo é para utilizar os ENDPOINTS

 * O banco foi populado com 3 tipos de usuários

 * 2 - Technicians:    
    name: 'João',
    email: 'joao@swordhealth.com',
    password: 'Joao@2023',

    name: 'Carlos',
    email: 'carlos@swordhealth.com',
    password: 'Carlos@2023'

 * 1 - Manager
    name: 'Maria',
    email: 'maria@swordhealth.com',
    password: 'Maria@2023'

## EndPoint - POST - Login
* O endPoint abaixo vai gerar um TOKEN de acesso para acessar as outras rotas

url: http://localhost:23412/authenticate

payload: {
    "email": "user@swordhealth.com",
    "password": "user@2023"
}

## EndPoint - GET - Activities
* O endPoint pode ser acessado apenas por 'technician'
* O técnico vai conseguir visualizar apenas a sua própria atividade.

url: http://localhost:23412/activities

## EndPoint - Post - Register Activity
* O endPoint é utilizado apenas por 'technician'.
* É utilizado para salvar uma atividade

url: http://localhost:23412/activities/save

payload: {
    "title": 'React.Js',
    "detail": 'Test developed by react/redux',
}

## EndPoint - Post - Update Activity
* O endPoint é utilizado apenas por 'technician'.
* É utilizado para alterar uma atividade.

url: http://localhost:23412/activities/update

payload: {
    "id": 3, ------- ID da atividade que deseja alterar
    "title": 'JAVA',
    "detail": 'Test develope by JAVA 8 and DB MYSQL',
}
## EndPoint - GET - ActivitiesAll
* O endPoint pode ser acessado apenas por 'manager'

url: http://localhost:23412/activities/all

## EndPoint - GET - Notify
* O endPoint é utilizado apenas por 'manager'.
* É utilizado para visualizar quem realizou ou alterou uma atividade.

url: http://localhost:23412/activities/notify


## EndPoint - Post - Delete Activity
* O endPoint é utilizado apenas por 'manager'.
* É utilizado para deletar uma atividade.

url: http://localhost:23412/activities/delete

payload: {
    "id": 3, ------- ID da atividade que deseja deletar
}
