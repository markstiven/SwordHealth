
# Instalar API docker:
 docker-compose up -d

 # Criar as tabelas no banco
 sequelize db:migrate

 # Popular a tabela Users
 sequelize db:seed:all