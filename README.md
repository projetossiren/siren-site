# SIREN — Portal Institucional

Portal institucional do **SIREN**, desenvolvido com o objetivo de reunir e apresentar os projetos, ferramentas, publicações e iniciativas desenvolvidas pelo núcleo.

## Sobre o projeto

O portal SIREN busca centralizar informações sobre as iniciativas do núcleo, facilitar o acesso às ferramentas desenvolvidas e divulgar trabalhos científicos e projetos relacionados à ciência, tecnologia e preservação ambiental.

## Projetos

O portal reúne informações sobre as seguintes iniciativas:

- **SirenSky:** monitoramento marinho e costeiro utilizando drones e inteligência artificial para identificação de resíduos plásticos.
- **SirenSat:** desenvolvimento de um minissatélite voltado ao monitoramento ambiental.
- **SirenVR:** iniciativa de conscientização ambiental por meio da realidade virtual.
- **SirenSTEAM:** projeto de extensão voltado à aproximação de estudantes das áreas STEAM.
- **Dia SIREN:** ação pedagógica com atividades de ciência, tecnologia e educação ambiental.

## Ferramentas

O portal também contará com ferramentas e recursos relacionados ao monitoramento ambiental, incluindo:

- Tábua de marés;
- Mapa ambiental;
- Condições costeiras;
- Pontos de coleta.

## Tecnologias utilizadas

- HTML5
- CSS3
- TypeScript
- Vite

O projeto utiliza tecnologias web para manter uma estrutura simples, modular e de fácil manutenção.

## Estrutura do projeto

```text
/
├── index.html
├── pages/
│   ├── projetos.html
│   ├── ferramentas.html
│   ├── publicacoes.html
│   ├── sobre.html
│   ├── projetos/
│   └── ferramentas/
├── src/
│   ├── css/
│   ├── ts/
│   │   ├── components/
│   │   └── pages/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── documents/
├── package.json
└── tsconfig.json
```

### Organização

- `pages/`: páginas HTML do portal.
- `src/css/`: arquivos de estilização.
- `src/ts/`: arquivos TypeScript.
- `src/ts/components/`: componentes compartilhados entre páginas.
- `src/ts/pages/`: scripts específicos de cada página.
- `src/assets/`: imagens, ícones e documentos utilizados no site.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js).

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

Instale as dependências:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

O Vite disponibilizará um endereço local no terminal para acessar o site pelo navegador.

## Desenvolvimento

O projeto é organizado em páginas e componentes compartilhados para facilitar o desenvolvimento em equipe.

Cada integrante pode trabalhar em diferentes páginas e funcionalidades, mantendo uma estrutura padronizada e reutilizável.

## Status

<text>Em desenvolvimento.</text>

O portal está em sua fase inicial de estruturação. Novas páginas, ferramentas e funcionalidades serão adicionadas progressivamente.

---

**SIREN — Ciência, Tecnologia e Sustentabilidade.**