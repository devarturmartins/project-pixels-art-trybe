# Boas-vindas ao repositório do projeto Arte com Pixels!

Pixel Art é um tipo de arte que usa pixels visíveis para compor uma imagem ou um vídeo. Neste projeto, foi implementado um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨
--
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

---

## ✔️ Técnicas e tecnologias utilizadas

- ``HTML``
- ``CSS``
- ``JavaScript``

---

# :hammer: Funcionalidades do projeto
![exemplo de arte com pixels](./art-with-pixels.gif)

# Orientações

<details>
  <summary><strong>🏗 Estrutura do projeto</strong></summary>

- Implemente uma paleta de cores usando `javascript`, `css` e `html`;

- Crie os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente;

 ⚠️ ** Recomenda-se que você desenvolva seu projeto com a resolução de tela  de `1366 x 768`, a mesma que será utilizada pelo avaliador. Para facilitar a configuração da resolução, use este [plugin do `Chrome`](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en).** ⚠️

* Caso seu projeto contenha imagens, ⚠️ **Atenção**:
  * Não utilize arquivos maiores que _500Kb_;
  * Utilize uma ferramenta como [esta](https://picresize.com/pt) para redimensionar as imagens.

* Você tem liberdade para implementar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, mas atente-se para **não conflitar com os requisitos propostos**. 

</details>

<details>
  <summary><strong>⚛️ Dicas</strong></summary>

- Não recomenda-se a utilização de `table`, pois o sentido semântico de construir uma tabela no HTML não tem relação  com a construção de uma grade de pixels para serem coloridos. Nesse caso, fazer uso de `table` representa uma má prática;

- Que tal usar um [_loop_](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) para adicionar o mesmo evento em vários elementos? Ou então a técnica de [_event bubbling_](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp);

- Para alterar alguma propriedade do _CSS_ de um elemento por meio do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.
- Caso a avaliação falhe com alguma mensagem de erro do tipo `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304` é provável que as imagens que está utilizando são muito grandes. Tente redimensioná-las para um tamanho menor.
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Desta forma, o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! 
  Para rodar o `ESLint` e o `StyleLint` localmente no projeto, execute os comandos abaixo:

  1. Para avaliar se os arquivos com a extensão `CSS` estão com o padrão correto

```bash
npm run lint:styles
```

  2. Para avaliar se os arquivos com a extensão `JS` estão com o padrão correto

```bash
npm run lint
```

⚠️ **Atenção** O `ESLint` e o `StyleLint` não serão avaliados neste projeto. Você pode rodar os testes localmente e fazer as correções se desejar. ⚠️

# Passo a Passo

## 1 - Adicione à página o título "Paleta de Cores".

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

## 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

## 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

## 6 - Adicione à página um quadro contendo 25 pixels.

## 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

## 8 - Defina a cor preta como cor inicial da paleta de cores

## 9 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.

## 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

## 11 - Crie um botão que retorne a cor do quadro para a cor inicial.

## 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage

# Requisitos Bônus

## 13 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.

## 14 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.

## 15 - Crie uma função para manter o tamanho novo do board ao recarregar a página.

</details>
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
sd-t26-b-project-pixels-art/README.md at main · tryber/sd-t26-b-project-pixels-art 
