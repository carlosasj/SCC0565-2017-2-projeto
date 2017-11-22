# Projeto Web SCC0565 - Frontend

## Dependências globais

Para executar este projeto você precisa ter:

* Python 3.6 (versão 3.6.1 recomendada)
* PIP 9 (versão 9.0.1 recomendada)

## Separando o ambiente

É comum instalar as dependências de um projeto em Python de forma isolada do sistema externo, para que o projeto funcione com somente os pacotes necessários, reduzindo a chance de erros inesperados por conta de algum pacote que está instalado em um lugar mas não em outro. Essa isolação é feita por uma ferramenta chamada [Virtualenv](https://virtualenv.pypa.io/en/stable/).

Os comandos dessa seção estão assumindo que `python --version` retorna `Python 3.6[.x]`, e que `pip --version` retorna `pip 9[.x.x] from <path> (python 3.6)`. Se esses comandos não retornarem algo parecido, tente colocar um `3` ou `3.6` na frente (ex.: `python3` e `pip3`, ou `python3.6` e `pip3.6`)

Para instalar o virtualenv, execute:

    [sudo] pip install virtualenv

A partir desse ponto, assume-se que os comandos sempre serão executados dentro da pasta `backend` deste repositório.

Para criar um ambiente virtual (você só precisa fazer isso 1 vez), execute:

    virtualenv env

Para entrar nesse ambiente isolado, execute:

    source env/bin/activate

Você vai reparar que um `(env)` apareceu no início da sua linha de comando. Os comandos a partir de agora só devem ser executados se esse `(env)` estiver presente.

## Instalar dependências

Para instalar as dependências do projeto, execute:

    pip install -r requirements/dev.txt

## Gerar o Banco de dados

Execute as migrações junto com a inserção de alguns dados, com o comando:

    python manage.py migrate

## Executando o site

Agora já é possível executar e testar o site, uhu! No terminal, digite:

    python manage.py runserver

Depois de alguns segundos o servidor web vai ser iniciado, é só abrir o seu navegador favorito (exceto o IE) e acessar o Frontend.
