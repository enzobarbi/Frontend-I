# Prova de Frontend

## Questão 1
  
    HTML: Lingugagem de marcação de hipertexto. Fornecendo estruturas básicas e semântica para páginas web. (Hyper text marquer lenguage)

    CSS: Linguagem de estilos em cascata para controlar a apresentação das paginas web. (Cascade style sheet)


## Questão 2

    - Importância dos elementos semânticos: importante na estruturação e compreensão do conteúdo de uma página web
    Significao de elemento semantico: que conseguem passar uma informação, um significado específico para o conteúdo interpretado pelo navegador. 
    
    - Elementos semânticos:
    <header>: Define o cabeçalho da página ou de uma seção.
    <nav>: Representa a navegação do site.
    <main>: Indica o conteúdo principal da página.
    <article>: Usado para conteúdo autônomo, como posts de blog.
    <section>: Divide o conteúdo em seções temáticas.


## Questão 3 
    como adicionar semânticas a elementos genéricos: Utilizando classes e atributos personalizados <div> <span>

## Questão 4
    elementos de bloco: Cria uma nova linha em bloco. Mas, aceitam redimensionamento de largura e altura.

    elementos em linha: sequencia em linha permite colocar elementos em volta mas, não aceitam redimensionamento de largura e altura.

## Questão 5
    Feito por linha

<table>
  <tr> <!-- tabble row -->
    <th>Company</th>
    <th>Contact</th> <!-- Table header aqui vai a primeira linha (cabeçalho) -->
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td> <!-- Table dados linha da tabela -->
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td> <!-- Table dados linha da tabela -->
    <td>Mexico</td>
  </tr>
</table>


## Questão 6
3 maneiras de implementar o CSS

- interno: Abrindo <style> na tag <head></head>
    vantagens: Classes e seletores de IDs podem ser usados ​​por stylesheet interno.

    desvantagens: Adicionar o código para o documento HTML pode aumentar o tamanho da página e o tempo de carregamento.

- externo: criando um arquivo .css <link rel="stylesheet" type="text/css" href="style.css" />
    vantagens: Como o código CSS está num documento separado, os seus arquivos HTML terão uma estrutura mais limpa e serão menores

    desvantagens: Até que o CSS externo seja carregado, a página pode não ser processada corretamente.

- inline: colocando na propria tag <h1 color: red >Enzo</h1>
    vantagens: Você pode inserir elementos CSS de maneira fácil e rápida numa página HTML. É método é útil para testar e pré-visualizar mudanças.

    desvantagens: Adicionar regras CSS para cada elemento HTML consome muito tempo e faz a sua estrutura HTML ficar bagunçada.


## Questão 7
    pseudo-elemento:
    palavra-chave adicionada a um seletor que permite que você estilize uma parte específica do elemento selecionado. Por exemplo, o pseudo-elemento ::first-line aplica o estilo apenas na primeira linha de um parágrafo.

## Questão 8 
    body {
        color: blue
    }

## Questão 9 
    
Altura: width, padding, margin
Largura: height, padding, margin 

## Questão 10
    Flexbox: unidimensional 
    Grid: multidimencional