# todolist_back
Aplicação back-end para uma aplicação de TODO list, utilizando **NodeJS**. Nesta aplicação, são gerenciadas as informações das tarefas a serem feitas, permitindo a criação, leitura, atualização e exclusão dos registros.

## Projeto

Para esse projeto, foi decidido implementar dois modelos de banco de dados: um relacional, utilizando o **MySQL** e um orientado a documentos, utilizando o **MongoDB**.

## Dados

Cada tarefa possui os seguintes campos: **title**, **status** e **created_at**.             

## Endpoints

Essa aplicação expões uma API RESTful, com os seguintes end-points:

Endpoint                | Método    | Descrição
----------------------- | --------  |-------------------
tasks                   | GET       | Retorna um array com todos as tarefas
tasks                   | POST      | Cria um nova tarefa
tasks/(:num)            | PUT       | Atualiza tarefa cujo id é (:num)
tasks/(:num)            | DELETE    | Deleta tarefa cujo id é (:num)

## Banco de Dados

Para rodar esta aplicação, você precisará de um servidor de banco de dados instalado e rodando em sua máquina, utilizando o **MySQL** ou o **MongoDB**. Para configurar qual banco deseja usar, mude qual model é carregado no arquivo *tasksController.js*. Com a ferramenta de sua preferência, crie um banco de dados novo para esta aplicação. As configurações do banco de dados para esta aplicação são encontradas no arquivo **.env**, na pasta raíz do repositório. Neste arquivo você poderá modificar o nome, usuário e senha para as informações do banco de dados que você criou.

## Instalação

1. Instale um servidor de banco de dados **MySQL** ou **MongoDB** em sua máquina, inicie ele e crie um novo banco de dados. Garanta que exista um usuário para esse servidor em que o usuário da sua máquina consiga fazer login.

2. Se o banco de dados escolhido foi o **MySQL**, crie uma tabela chamada "tasks" com os campos necessários, mostrados em [Dados](#Dados). Se o banco de dados escolhido foi o **MongoDB**, crie uma coleção vazia com o nome "tasks".

3. Clone este repositório e, na pasta raiz, execute o seguinte comando para instalar as dependências necessárias do projeto:

    ```
    > npm install
    ```

4. Faça uma cópia do arquivo **env** para **.env** e modifique o **.env** com as configurações do banco de dados que você criou, como mostrado em [Banco de Dados](#banco-de-dados).

8. Após instalado e configurado, basta você dar o seguinte comando para subir o servidor:

    ```
    > npm start
    ```

## Melhorias

O sistema está realizando todas as operações propostas, porém existem algumas melhorias a serem implementadas.

* Adicionar autenticação
    * Atualmente qualquer usuário pode efetuar as chamadas na API, sem qualquer autenticação.
* Facilitar a troca do BD
    * Colocar a escolha do BD pelo .env.