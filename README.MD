para iniciar o projeto:

Requisitos:
nodemon
typescript
ts-node
prisma

---------------------

Passos para a inicialização:

1 - npm install

2 - Antes de iniciar o projeto, deve-se configurar o arquivo de variaveis de ambiente .env:

PORT=80 <- Esta variavel deve ser configurada com a porta a ser executada no formato inteiro
DATABASE_URL="mysql://user:password@host:port/database" <- Esta variavel deve ser configurado com as informacoes de acesso do banco de dados
KEY_API = "https://api.mercadolibre.com/sites/MLB/#json" <- Esta variavel deve ser configurado com a api base para obtencao de dados
JWT_KEY='your secret key for cryptography' <- Esta variavel deve ser configurado a chave de criptografia do JTW

3 - executar no terminal "npx prisma db push"
Cria as tabelas no banco de dados conforme o arquivo "schema.prisma".

4 - executar no terminal "npx prisma generate"

5 - npm run seed

6 - npm run start-dev


Devem ser salvos pelo menos 4 produtos de cada categoria.
Devem ser implementadas as seguintes rotas:
● Importe automático de dados vindo da api de pelo menos 4 produtos de cada
categoria;

GET - /getProducts

● Cadastros: Implementar rota de cadastro de usuário com um campo para e-mail
e outro para senha;

POST - /newUser

● Login: O usuário dever ser salvo no banco de dados e como autenticação deve
ser implementado o JWT (Json Web Token). Após o cadastro deve ser possível
fazer o login utilizando o e-mail e senha cadastrado com o jwt, deve retornar um
token, que será usado para autenticar demais rotas;

POST - /login

● Categoria: Retornar uma lista de categorias contendo os seguintes valores:

GET - /categories

○ Câmeras e Acessórios
GET - /Cameras-Acessorios

○ Celulares e Telefones
GET - /Celulares-Telefones

○ Eletrônicos, Áudio e Vídeo
GET - /Eletronicos-Audio-Video

○ Games
GET - /Games

● Produtos: Deve retornar uma lista dos produtos de determinada categoria, o
identiﬁcador da categoria deve ser passado por parâmetro.

GET - /Produtos

● Produto: Deve retornar um produto passando por parâmetro de identiﬁcação.

GET - /Produto:id

● Preços: Deve retorna uma lista de produtos de uma única categoria ordenados
pelo menor preço.

GET - /Produtos-Menor-Preco

● Pedidos: Deve retornar uma lista de produtos com o nome do usuário
POST - /Pedidos