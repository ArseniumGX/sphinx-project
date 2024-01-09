# Sphinx

Projeto frontend desenvolvido em Angular responsável por fazer cadastro de clientes e listagem dos dados cadastrados. Aplicativo possui ao todo três telas: incial, cadastro de usuário e listagem dos usuários cadastrados. Acessando a aplicação você verá a tela principal com o nome da aplicação, um menu de navegação com duas opção a seguir, a area principal onde todo conteúdo é renderizado e um footer. Não há uma opção de navegação para voltar ao home da página, mas clicando no nome do projeto é possível fazer esse retorno.

### Cadastro

Ao acessar o menu de navegação `Cadastro` você será redirecinado ao cadastro de usuário. Aqui você pode adicionar as informações de código, nome, cpf, telefone e endereço do usuário. Ao preencher todas as informações necessária e clicar em Salvar você é redirecionado a tela que estava anteriormente. Essa última funcionalidade também é obtida ao clicar no botão cancelar, nesse caso os dados não serão salvos.

Os dados são salvos no localStorage do navegador, então caso feche o navegador e abra novamente os dados estarão presentes para.

### Listagem

A listagem de usuários cadastrados pode ser visuazada acessando o meno de navegação `Listagem`. Essa tela possui um filtro onde você pode pesquisar um usuário por nome ou número de telefone selecionando a opção desejada e digitando a informação que deseja buscar. É necessário digitar no mínimo 3 caracteres na pesquisa para que a busca pela informação inicie. Por padrão sempre que a opção `Todos` estiver checaga, o campo de digitar informação é desabilitado e limpo. A listagem é feita de forma dinâmica a medida que a informação é digitada, então não é necessário da enter ao digitar algo na pesquisa. Vale ressaltar que para que a listagem funcione é necessário que ao menos um usuário esteja cadastrado, caso contrário apenas a tela com os filtros será exibida sem as informações.

### Observações

Devido à falta de tempo e alguns problemas enfrentados, não foi possível aplicar responsividade para telas maiores. O projeto foi desenvolvido utilizando o preceito mobile first. O a interface inteira foi desenhado seguindo meu próprio estilo e preferência minimalista. Você pode acessar o design desenvolvido [clicando aqui](https://www.figma.com/file/rd7NE1dMnvZgwv6Vz8nj1I/Sphinx?type=design&node-id=4-74&mode=design&t=UwpDCE5yjgWRoCV6-0).

## Techs Utilizados

- Node 18.17.1
- Yarn 1.22.19
- Angular 17.0.8
- Sass
- Visual Studio Code
- Figma

## Preparando Ambiente

Para inicializar esse aplicação localmente, antes de tudo clone o projeto para uma pasta na sua máquina. Feito isso, dentro do diretório do projeto, execute `npm i` para instalar as dependências ou `yarn` se utiliza Yarn.

Após isso você pode executar `npm run start` ou `yarn start` para inicializar a aplicação. Por padrão a aplicação será incializada na porta `4200`, acesse http://localhost:4200 para acessar o app.

## Licença

Este projeto está licenciado sobre [licença MIT](./License).
