Passos para a inicialização:

1 - npm install
//Instala todas as dependencias do projeto


2 - Antes de iniciar o projeto, deve-se configurar o arquivo de variaveis de ambiente ".env" conforme as informações abaixo: 

PORT=80 <- Esta variavel deve ser configurada com a porta a ser executada no formato inteiro
DATABASE_URL="mysql://user:password@host:port/database" <- Esta variavel deve ser configurado com as informacoes de acesso do banco de dados
KEY_API = "https://api.mercadolibre.com/sites/MLB/#json" <- Esta variavel deve ser configurado com a api base para obtencao de dados
JWT_KEY='your secret key for cryptography' <- Esta variavel deve ser configurado a chave de criptografia do JTW


3 - executar no terminal "npx prisma db push"
//Cria as tabelas no banco de dados conforme o arquivo "schema.prisma".



4 - executar no terminal "npx prisma generate"
//Cria 



5 - npm run seed
//Obtem os dados da API do Mercado Livre e Cadastra 4 produtos de cada tipo retornado no banco de dados.
- [x] Devem ser salvos pelo menos 4 produtos de cada categoria.
- [x] Importe automático de dados vindo da api de pelo menos 4 produtos de cada categoria;



6 - npm run start-dev
//inicia o servidor



ROTAS:

- [x] Cadastros: Implementar rota de cadastro de usuário com um campo para e-mail e outro para senha;
*POST - /register
Parametros a serem passados no body:
1. email
2. password
3. name


- [x] Login: O usuário dever ser salvo no banco de dados e como autenticação deve ser implementado o JWT (Json Web Token). 
*POST - /login
Parametros a serem passados no body:
1. email
2. password


- [x] Após o cadastro deve ser possível fazer o login utilizando o e-mail e senha cadastrado com o jwt, deve retornar um token, que será usado para autenticar demais rotas:
- Utilizar o token retornado na rota de login, no header com o parametro "authorization", e no valor "Bearer token".


- [x] Categoria: Retornar uma lista de categorias contendo os seguintes valores:
○ Câmeras e Acessórios
○ Celulares e Telefones
○ Eletrônicos, Áudio e Vídeo
○ Games
*GET - /categories

Também foi implementada uma roda que exibe todas as categorias disponiveis pela API do Mercado Livre.
*GET /categories/all


- [x]  Produtos: Deve retornar uma lista dos produtos de determinada categoria, o identiﬁcador da categoria deve ser passado por parâmetro.
*GET - /products/:category

No parametro :category, informar o id da categoria a serem exibidos os produtos. O valor deve ser do tipo inteiro.


- [x] Produto: Deve retornar um produto passando por parâmetro de identiﬁcação.
*GET - /product/:id

No parametro :id, informar o ID do produto a ser exibido. O valor deve ser do tipo inteiro.


- [x] Preços: Deve retorna uma lista de produtos de uma única categoria ordenados pelo menor preço.
*GET - /products/:category/:filter
No parametro :filter, deve ser passado o valor "price" no formato string.


- [x] Pedidos: Deve retornar uma lista de produtos com o nome do usuário
*POST - /orders

Parametro a ser passado no body:
1. client

No parametro client, deve ser informado o id do cliente a ser consultado.

Para adicionar novos pedidos, foi implementada a rota abaixo:
*POST - /neworder
Parametros a serem passados no body:
1. product
2. client

Nos campos respectivos, os valores devem ser o id do produto e id do cliente, ambos no formato ineiro.