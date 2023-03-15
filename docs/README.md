# Documentacao do Site - Pensamento Computacional - Colégio Estadual Vila Alta

## Documentação de código:

### Linguagens:

#### JavaScript:

##### Arquivo: script-a.js

> Este código JavaScript recebe o código de um projeto ou imagem por meio da URL de consulta e, em seguida, insere um objeto HTML correspondente na página, dependendo do tipo de URL.

>>  - **const url = window.location.search.substring(1)**: armazena a parte da URL da página que contém a consulta após o "?".
>>
>> - **const codigo = url.substring(1)**: extrai o código da consulta, excluindo o primeiro caractere.
>>
>> - **console.log(codigo)**: exibe o código extraído no console.
>>
>> - **let urldef**: declara uma variável vazia para ser preenchida posteriormente.
>>
>> - **if (url.substring(0, 1) == p)**: verifica se o primeiro caractere da consulta é 'p' (abreviação de projeto).
>>
>> - **let urldef = https://scratch.mit.edu/projects/${codigo}/embed**: preenche a variável urldef com o URL do projeto correspondente usando o código extraído e exibe o URL no console.
>>
>> - **document.getElementById('canva').innerHTML = <iframe src="${urldef}" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>**: Insere um objeto <iframe> na página que corresponde ao URL do projeto.
>>
>> - if (url.substring(0, 1) == i)**: verifica se o primeiro caractere da consulta é 'i' (abreviação de imagem).
>>
>> - **let urldef = https://curious-croquembouche-3d49c2.netlify.app/pens-comp/img/${codigo}**: preenche a variável urldef com o URL da imagem correspondente usando o código extraído e exibe o URL no console.
>>
>> - **document.getElementById('canva').innerHTML = <img src="${urldef}" alt="Indisponivel" width="900">**: Insere uma imagem na página que corresponde ao URL da imagem.

##### Arquivo: script-b.js

> Este código em JavaScript define algumas variáveis e funções para manipular elementos de uma página HTML.

>> - A primeira linha define a variável **menu** como o elemento HTML com o ID "menu".
>>
>> - A segunda linha define a variável **menuimg** como o elemento HTML com o ID "img__menu".
>>
>> - A terceira linha define a variável **menubotao** como o elemento HTML com o ID "menu__botao".
>>
>> - A quarta linha define a variável **span** como o elemento HTML com o ID "span".
>>
>> - A quinta linha define a variável **condicaomenu** como verdadeira.
>>
>> - A sexta linha define a variável **condicaospan** como falsa.
>>
>> - A função **openmenu** é definida com um parâmetro **i**, que é usado para decidir qual caminho seguir dentro da função. Se **i** for igual a 0, a função muda a classe dos elementos **menu**, **menubotao** e **menuimg** para abrir o menu. Caso contrário, a função muda a classe desses elementos para fechar o menu.
>>
>> - A função **interagemspan** é definida para alterar a classe do elemento **span** para "fecha".
>>
>> - Essas funções são destinadas a serem chamadas por eventos de interação do usuário na página HTML.

##### Arquivo: script-c.js

> Este código JavaScript define variáveis para selecionar elementos do DOM (Document Object Model) e adicionar classes aos elementos para mostrar ou ocultar conteúdo quando o usuário clica em um botão "Ver Mais" ou "Ver Menos".

>> - **let ver1 = document.querySelector("#canva--projetos")**: define uma variável ver1 para selecionar um elemento do DOM com o ID canva--projetos (um contêiner para mostrar projetos).
>>
>> - **let ver2 = document.querySelector("#canva--videos")**: define uma variável ver2 para selecionar um elemento do DOM com o ID canva--videos (um contêiner para mostrar vídeos).
>>
>> - **let ver3 = document.querySelector("#canva--fotos")**: define uma variável ver3 para selecionar um elemento do DOM com o ID canva--fotos (um contêiner para mostrar fotos).
>>
>> - **let bnt1 = document.querySelector("#ver1")**: define uma variável bnt1 para selecionar um botão do DOM com o ID ver1 (um botão "Ver Mais" para os projetos).
>>
>> - **let bnt2 = document.querySelector("#ver2")**: define uma variável bnt2 para selecionar um botão do DOM com o ID ver2 (um botão "Ver Mais" para os vídeos).
>>
>> - **let bnt3 = document.querySelector("#ver3")**: define uma variável bnt3 para selecionar um botão do DOM com o ID ver3 (um botão "Ver Mais" para as fotos).

> Em seguida, o código define variáveis booleanas de condição para verificar se o conteúdo está visível ou não:

>> - **condicao1 = false**: define uma variável booleana condicao1 para verificar se o conteúdo dos projetos está visível (false significa que está oculto inicialmente).
>>
>> - **condicao2 = false**: define uma variável booleana condicao2 para verificar se o conteúdo dos vídeos está visível (false significa que está oculto inicialmente).
>>
>> - **condicao3 = false**: define uma variável booleana condicao3 para verificar se o conteúdo das fotos está visível (false significa que está oculto inicialmente).

> Define uma função chamada "vermais" que recebe um índice como entrada e executa algumas ações com base nesse índice.

>> - A função começa com uma estrutura condicional que verifica se o índice é igual a 0, 1 ou 2, usando o operador "==" para comparação.
>>
>> - Se o **índice** for igual a 0, a função verifica se a variável **condicao1** é igual a false (ou seja, se a seção correspondente está atualmente fechada). Se for esse o caso, a função muda a classe da seção **ver1** para "corpo__projetos", muda o valor da variável **condicao1** para true (indicando que a seção está agora aberta), e muda o conteúdo do botão **bnt1** para "Ver Menos ↑". Se a seção já estiver aberta, a função faz o oposto: muda a classe da seção **ver1** para "fecha", muda o valor da variável **condicao1** para false (indicando que a seção está agora fechada), e muda o conteúdo do botão **bnt1** para "Ver Mais ↓".
>>
>> - Se o **índice** for igual a 1 ou 2, o código executa uma lógica semelhante, mas com as variáveis e elementos correspondentes à seção apropriada.
>>

> No geral, esta função é projetada para ser usada em uma página da web que possui três seções diferentes que podem ser expandidas ou contraídas com botões. A função "vermais" é chamada quando um desses botões é clicado, e altera as classes CSS e o conteúdo dos botões para mostrar ou ocultar as seções. As variáveis **condicao1**, **condicao2** e **condicao3** são usadas para controlar o estado atual de cada seção (aberta ou fechada) para que a função possa alternar entre eles conforme necessário.

##### Arquivo: script-d.js

> Este código começa definindo constantes que fazem referência aos elementos do HTML com os IDs canva--projetos e canva--fotos, respectivamente, por meio da função document.querySelector(). Em seguida, são criadas variáveis e arrays vazios.

>> - **let i**: uma variável inicializada com o valor zero.
>>
>> - **let nomeprojeto**: um array vazio que irá armazenar os nomes dos projetos.
>>
>> - **let autor**: um array vazio que irá armazenar os nomes dos autores dos projetos.
>>
>> - **let serie**: um array vazio que irá armazenar os números das séries dos projetos.
>>
>> - **let turma**: um array vazio que irá armazenar os nomes das turmas dos projetos.
>>
>> - **let link**: um array vazio que irá armazenar os links dos projetos.
>>
>> - **let img**: um array vazio que irá armazenar as imagens dos projetos.
>>

> Este é um conjunto de funções JavaScript que busca dados em planilhas do Google Sheets e exibe esses dados em uma página HTML.

>> - A função **buscarid** é responsável por buscar dados em uma planilha do Google Sheets. Ela recebe dois parâmetros: o ID da planilha e um número **is** que indica se os dados são de projetos (is = 0) ou de imagens (is = 1). A função constrói a URL da planilha com base no ID passado como parâmetro e realiza uma requisição fetch para obter os dados. Em seguida, os dados são transformados em um objeto JSON por meio do método **JSON.parse()**. Dependendo do valor do parâmetro **is**, a função chama as funções escrevendoa ou escrevendob passando os dados obtidos como parâmetro.
>> - A função **escrevendoa** é responsável por exibir os dados dos projetos. Ela recebe dois parâmetros: um objeto JSON com os dados dos projetos e um número number que indica a quantidade de projetos. A função percorre os dados dos projetos e armazena os valores dos campos **nome do projeto**, **autor**, **série** e **turma** em arrays. Em seguida, para cada projeto, a função utiliza o método innerHTML para adicionar um elemento HTML à página. Esse elemento contém um link para acessar o projeto no Scratch, o nome do projeto, o nome do autor e a série e turma do autor.
>> - A função **escrevendob** é responsável por exibir as imagens. Ela recebe dois parâmetros: um objeto JSON com os dados das imagens e um número number que indica a quantidade de imagens. A função percorre os dados das imagens e armazena os valores dos campos **imagem** em um array. Em seguida, para cada imagem, a função utiliza o método innerHTML para adicionar um elemento HTML à página. Esse elemento contém a imagem e um link para acessar mais informações sobre a imagem.

> Por fim, as funções **buscarid** e **escrevendoa** são chamadas passando o ID da planilha e o valor 0, indicando que os dados a serem buscados são de projetos. Em seguida, as funções **buscarid** e **escrevendob** são chamadas passando o ID da planilha e o valor 1, indicando que os dados a serem buscados são de imagens.
