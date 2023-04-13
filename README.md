# colab_listUsers
Olá! espero encontrá-los bem, aqui está o código da listagem de usuários a partir da Random User Generator API.

## Considerações gerais sobre o teste
Eu achei a proposta desse teste muito interessante, pois realmente trata de assuntos abordados no dia a dia de um desenvolvedor. 
Eu me senti confortável desenvolvendo este teste, e foi muito prazeroso colocar vários conhecimentos a prova, realizar pesquisas, quebrar a cabeça
com erros, perceber alguns pontos a melhorar e por fim chegar em produto final que acredito eu, responde às expectativas do que foi pedido.

## Estruturação do projeto
Para a estrutura do projeto, eu segui algumas boas práticas que aprendi ao longo da minha experiência, e que acredito serem uteis. Nesse sentido eu separei os elementos react nos diretórios de *página* e *componentes*. Criei um layout padrão para persistir o mesmo *Header* em todas as páginas, criei algumas interfaces do typescript em separado, agrupei no diretório *store* o próprio store, bem como os reducers e o arquivo de chamada da API (services). Por fim, criei também o diretório *Utils* para separar o código de utilidades diversas, que neste caso se resume ao pequeno código de formatação das datas de aniversário dos usuários.

## Ferramentas utilizadas
Para este teste eu pensei em desenvolver algo direto, mas que ao mesmo tempo pudesse mostrar um pouco dos meus conhecimentos de forma abrangente. Então, eu tentei mesclar algumas ferramentas que eu achei interessante, e que mesmo que a complexidade do teste não requerisse, foram usadas algumas ferramentas de forma a demonstrar um pouco do que eu conheço.

### Criação do projeto
Minhas escolhas passaram por criar o projeto a partir da ferramenta de build **Vite**, e utilizar o **React** com **Typescript** como sendo uma abordagem frontend da qual eu tenho mais familiaridade. 

### Rotas, estado global e utilização da API
No quesito de gerenciamento de rotas eu utilizei a biblioteca **react-router-dom**. Já na parte de gerenciamento de estados, eu optei por utilizar o redux com seu store e reducers. Na questão da utilização do endpoint, eu até cogitei ir pelo caminho mais facil com o axios, porém lembrei que alguns colegas já tinham mencionado a existência do toolset **Redux Toolkit**, responsável por deixar a utilização do **Redux** mais tranquila. Assim, eu ousei utilizar o **RTK Query** como ferramenta para fetching que promete separar de uma melhor forma o processo de fetching do processo de mudanças de estado. Eu confesso que foi uma escolha que me fez perder um pouco de tempo pois eu precisei estudar um pouco sobre esse toolset para implementá-lo. Mas acredito que foi uma boa escolha, pois reflete minha capacidade de assimilação e implementação de ferramentas que eu não domino muito bem, mas que creio serem interessantes ao menos para testes para aplicações mais complexas e escaláveis. 

### Estilização
Eu optei por utilizar o framework de estilização Styled-Components para dar a cara do projeto. Nessa parte, eu também utilizei a biblioteca de componentes radix-ui para implementar a parte das fotos de usuário. Eu gosto da utilização dessas ferramentas pois elas facilitam o trabalho ao proverem componentes primitivos de fácil uso e estilização. Além disso, criei os arquivos de estilos globais e temas para configurar algumas propriedades de estilo globais da aplicação e armazenar as variáveis de cor usadas no projeto.

**OBS:**npm: ">=8.15.0", node: ">=16.17.1"
