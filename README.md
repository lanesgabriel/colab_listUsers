# colab_listUsers
Olá! espero encontrá-los bem, aqui está o código da listagem de usuários a partir da Random User Generator API.

## Considerações gerais sobre o teste
Eu achei a proposta desse teste muito interessante, pois realmente trata de assuntos abordados no dia a dia de um desenvolvedor. 
Eu me senti confortável desenvolvendo este teste, e foi muito prazeroso colocar vários conhecimentos a prova, realizar pesquisas, quebrar a cabeça
com erros e por fim chegar em produto final que acredito eu, responde às expectativas do que foi pedido.
## Ferramentas utilizadas
Para este teste eu pensei em desenvolver algo direto, mas que ao mesmo tempo pudesse mostrar um pouco dos meus conhecimentos de forma abrangente.
E a partir disso, minhas escolhas passaram por utilizar o react que é o framework frontend do qual eu mais tenho proximidade. Assim, eu criei o projeto a partir
do Vite, um .... que eu já tenho certa familiaridade. Utilizei também typescript para a tipagem, a biblioteca react-router-dom para gerenciamento das rotas, o framework de estilização Styled-Components para dar a cara do projeto. 

Na parte de gerenciamento de estados, eu optei por utilizar o redux com seu store e reducers. Com isso, eu ousei utilizar o RTK Query, um conjunto de ferramentas que é utilizado em conjunto com o Redux para facilitar tal gerenciamento em projetos mais complexos. Eu confesso que foi uma escolha que me fez perder um pouco de tempo pois eu precisei estudar um pouco sobre esse toolset para implementá-lo. Mas acredito que foi uma boa escolha, pois reflete minha capacidade de assimilação e implementação de ferramentas que eu não domino muito bem, mas que creio serem interessantes ao menos para testes para aplicações mais complexas e escaláveis. 

Na parte da estilização eu também utilizei a biblioteca de componentes radix-ui para implementar a parte das fotos de usuário. Eu gosto da utilização dessas ferramentas pois elas facilitam o trabalho ao proverem componentes primitivos de fácil uso e estilização. 
## Estrutura da aplicação
Para a estrutura do projeto, eu segui algumas boas práticas que aprendi ao longo da minha experiência, e que acredito serem bem uteis. Nesse sentido eu separei os elementos react de página e os componentes, criei um layout padrão que sempre terá o Header e uma estilização padrão, criei algumas interfaces em separado, separei dentro do store os reducers do arquivo de chamada da API (services). Além disso, criei estilos globais e o arquivo de temas para armazenar as variáveis de cor usadas no projeto. Por fim, criei também o diretório Utils para separar o código de utilidades diversas, que neste caso se resume ao pequeno código de formatação das datas de aniversário dos usuários.
