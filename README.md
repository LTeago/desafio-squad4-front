# desafio-squad4-front

Projeto feito como desafio para o processo seletivo da Empresa Júnior da Escola de Ciências e Tecnologia da UFRN (EJECT). Projeto se trata do front-end de um site [...] desenvolvido pelos membros do squad 4 de aspirantes da EJECT.



# Compilação

## Como compilar?
Para baixar as dependências do projeto, abra o terminal e siga os passos a seguir:

# clone o repositório
```
git clone https://github.com/LTeago/desafio-squad4-front.git
cd desafio-squad4-front
```


# install nas dependências
```
npm install
```


## Como rodar o projeto?
```
cd desafio-squad4-front
npm run dev
ctrl + click no link
```


## Estrutura/árvore do Repositório
```
├── index.html
├── node_modules
│   ├── @esbuild
│   ├── esbuild
│   ├── fdir
│   ├── nanoid
│   ├── picocolors
│   ├── picomatch
│   ├── postcss
│   ├── @rollup
│   ├── rollup
│   ├── source-map-js
│   ├── tinyglobby
│   ├── @types
│   └── vite
├── package.json
├── package-lock.json
├── public
│   ├── baunilha.jpeg
│   ├── benjamin_matos.svg
│   ├── especialidades_1.svg
│   ├── especialidades_2.svg
│   ├── especialidades_3.svg
│   ├── footer_logo.svg
│   ├── footer_mapa.svg
│   ├── footer_restaurante.svg
│   ├── fundo.png
│   ├── isabella_duarte.svg
│   ├── logo_dropdown.svg
│   ├── logo_facebook.svg
│   ├── logo_instagram.svg
│   ├── logo.svg
│   ├── logo_youtube.svg
│   ├── navbar_toggle.svg
│   ├── rafael_monteiro.svg
│   ├── restaurante.svg
│   ├── servicos_1.svg
│   ├── servicos_2.svg
│   ├── servicos_3.svg
│   ├── servicos_modal_1.svg
│   ├── servicos_modal_2.svg
│   ├── servicos_modal_3.svg
│   ├── steak_tartare.svg
│   ├── Vector.svg
│   ├── vite.svg
│   ├── voltar.svg
│   ├── x_dark.svg
│   └── x.svg
└── src
    ├── cardapio.html
    ├── script
    ├── sobre-nos.html
    └── style

19 directories, 35 files
thiago@fedora:~/Documentos/ProjetoEJECT/desafio-squad4-front/desafio-squad4-front$ tree -L 3
.
├── index.html
├── node_modules
│   ├── @esbuild
│   │   └── linux-x64
│   ├── esbuild
│   │   ├── bin
│   │   ├── install.js
│   │   ├── lib
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── fdir
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── nanoid
│   │   ├── async
│   │   ├── bin
│   │   ├── index.browser.cjs
│   │   ├── index.browser.js
│   │   ├── index.cjs
│   │   ├── index.d.cts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── nanoid.js
│   │   ├── non-secure
│   │   ├── package.json
│   │   ├── README.md
│   │   └── url-alphabet
│   ├── picocolors
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── picocolors.browser.js
│   │   ├── picocolors.d.ts
│   │   ├── picocolors.js
│   │   ├── README.md
│   │   └── types.d.ts
│   ├── picomatch
│   │   ├── index.js
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── posix.js
│   │   └── README.md
│   ├── postcss
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @rollup
│   │   ├── rollup-linux-x64-gnu
│   │   └── rollup-linux-x64-musl
│   ├── rollup
│   │   ├── dist
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── source-map-js
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── source-map.d.ts
│   │   └── source-map.js
│   ├── tinyglobby
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @types
│   │   └── estree
│   └── vite
│       ├── bin
│       ├── client.d.ts
│       ├── dist
│       ├── LICENSE.md
│       ├── misc
│       ├── package.json
│       ├── README.md
│       └── types
├── package.json
├── package-lock.json
├── public
│   ├── baunilha.jpeg
│   ├── benjamin_matos.svg
│   ├── especialidades_1.svg
│   ├── especialidades_2.svg
│   ├── especialidades_3.svg
│   ├── footer_logo.svg
│   ├── footer_mapa.svg
│   ├── footer_restaurante.svg
│   ├── fundo.png
│   ├── isabella_duarte.svg
│   ├── logo_dropdown.svg
│   ├── logo_facebook.svg
│   ├── logo_instagram.svg
│   ├── logo.svg
│   ├── logo_youtube.svg
│   ├── navbar_toggle.svg
│   ├── rafael_monteiro.svg
│   ├── restaurante.svg
│   ├── servicos_1.svg
│   ├── servicos_2.svg
│   ├── servicos_3.svg
│   ├── servicos_modal_1.svg
│   ├── servicos_modal_2.svg
│   ├── servicos_modal_3.svg
│   ├── steak_tartare.svg
│   ├── Vector.svg
│   ├── vite.svg
│   ├── voltar.svg
│   ├── x_dark.svg
│   └── x.svg
└── src
    ├── cardapio.html
    ├── script
    │   ├── cardapio.js
    │   ├── carrossel.js
    │   ├── dropdown.js
    │   └── modal.js
    ├── sobre-nos.html
    └── style
        ├── cardapio.css
        ├── carrossel.css
        ├── display.css
        ├── dropdown.css
        ├── footer.css
        ├── grid.css
        ├── menu.css
        ├── modal.css
        ├── modal-menu-executivo.css
        ├── modal-reservas.css
        ├── modal-servicos.css
        ├── navbar.css
        ├── section.css
        ├── servicos.css
        ├── sobre-nos.css
        └── style.css
```

## Licença
**Todas as licensas se encontram no arquivo `author.md`. Leia o arquivo e torne-se ciente.**
