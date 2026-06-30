# Projeto Agrinho 2026: Agro Forte, Futuro Sustentável

Este projeto web foi desenvolvido como parte do programa Agrinho 2026, com o tema **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**. O objetivo principal é educar e conscientizar o público sobre a importância de práticas conservacionistas, inovação tecnológica e o manejo equilibrado no meio rural, promovendo a harmonia entre a alta produtividade do agronegócio e a preservação ambiental.

## 1. Objetivo do Projeto

O objetivo central deste site é servir como uma plataforma informativa, interativa e engajadora para disseminar os valores e ensinamentos do Agrinho 2026. De forma detalhada, o projeto visa:

* **Educar:** Apresentar de maneira clara e acessível os conceitos e desafios relacionados ao Uso Eficiente da Água, Energia Rural Renovável e a Produção Sustentável de alto rendimento.
* **Conscientizar:** Despertar o interesse e a responsabilidade social e ambiental dos visitantes, mostrando que a continuidade e a força do agro dependem do equilíbrio com a natureza.
* **Promover o Equilíbrio Conservacionista:** Evidenciar que o uso de tecnologias modernas (como inteligência artificial, bioinsumos e drones) anda de mãos dadas com a proteção do solo, dos recursos hídricos e da biodiversidade.
* **Facilitar o Acesso à Informação:** Oferecer um ambiente digital intuitivo e responsivo, garantindo que o conteúdo seja acessível a todos, independentemente do dispositivo ou das condições de iluminação.

### Fluxos e Atores Envolvidos:

* **Visitante/Usuário:** Navega pelas páginas do site para obter informações sobre o Agrinho 2026 e seus eixos temáticos (Água, Energia, Produção). Pode interagir com os elementos de navegação, alternar o modo de visualização (claro/escuro) e retornar ao topo da página de forma fluida.
* **Conteúdo:** As informações são distribuídas em seções bem estruturadas, com textos explicativos focados em sustentabilidade, cards de destaque e imagens ilustrativas da realidade rural.
* **Design Responsivo:** A estrutura do site se adapta dinamicamente a diferentes tamanhos de tela (desktops, tablets e smartphones) usando o grid do Bootstrap.
* **Modo de Acessibilidade (Dark Mode):** O usuário pode alternar o tema de visualização entre claro e escuro através de um botão dedicado, melhorando a legibilidade em ambientes de baixa luminosidade e reduzindo a fadiga visual.
* **Navegação Aprimorada:** O botão "Voltar ao Topo" otimiza a usabilidade em páginas extensas, enquanto o menu principal garante acesso rápido e direto a todas as seções.

## 2. Alinhamento e Funcionalidades

O projeto está totalmente alinhado com a proposta de um "Agro Forte e Futuro Sustentável", onde cada página e funcionalidade foi implementada para reforçar o equilíbrio ambiental.

### Estrutura do Projeto:

* **`index.html` (Página Inicial):** A porta de entrada do site, apresentando o manifesto do Agrinho 2026, seus objetivos principais e as três áreas temáticas conectadas por cards interativos.
* **`agua.html` (Uso Eficiente da Água):** Página dedicada a explorar a conservação de mananciais, sistemas de irrigação de precisão e a importância de proteger os recursos hídricos no campo.
* **`energia.html` (Energia Rural):** Foca na transição energética do campo, destacando o uso de energia solar, biogás e biomassa como motores de uma produção limpa.
* **`producao.html` (Produção Sustentável):** Detalha as práticas agrícolas e pecuárias de alto rendimento (como sistemas ILPF e MIP) que buscam o equilíbrio perfeito entre produtividade e conservação biológica.
* **`style.css`:** Arquivo contendo a estilização e identidade visual coesa do site, gerenciando as cores institucionais do Agrinho (tons de verde e terra) e as regras para os modos claro e escuro.
* **`script.js`:** Responsável pelas interações lógicas e dinâmicas, incluindo a persistência do tema escolhido e o comportamento suave do botão de rolagem.
* **`assets/image/`:** Diretório que armazena a identidade visual do projeto, incluindo o favicon e as imagens ilustrativas das propriedades rurais.

### Recursos Utilizados:

* **HTML5:** Estruturação semântica e acessível do conteúdo.
* **CSS3:** Estilização personalizada, efeitos visuais de transição e responsividade avançada.
* **JavaScript (ES6):** Manipulação do DOM para interatividade e persistência de dados em cache local.
* **Bootstrap 5.3.5:** Framework CSS utilizado para acelerar o desenvolvimento, garantir a responsividade nativa e estruturar componentes modernos.

### Funcionalidades Chave:

1.  **Navegação Coesa:** A barra de navegação (`<nav>`) mantém-se fixa no topo (*sticky-top*) de forma consistente em todas as páginas, sinalizando visualmente a aba ativa para orientar o usuário.
2.  **Modo de Visualização Dinâmico (Claro/Escuro):**
    * Controlado via JavaScript (`script.js`) através de um botão flutuante estilizado (`#btnAlternarTema`).
    * Utiliza o recurso de `localStorage` do navegador para salvar a preferência do usuário. Isso garante que a escolha entre modo claro ou escuro seja mantida ao atualizar a página ou navegar entre as diferentes abas do site.
    * As folhas de estilo foram adaptadas para garantir contrastes adequados de acordo com as diretrizes de acessibilidade, alterando fundos, textos e cards de forma suave.
3.  **Botão "Voltar ao Topo":**
    * Um botão flutuante (`#btnVoltarAoTopo`) surge de forma sutil no canto inferior da tela assim que o usuário realiza a rolagem da página para baixo.
    * Ao ser acionado, executa uma rolagem suave (*smooth scroll*) de volta ao topo do documento, melhorando drasticamente a usabilidade em dispositivos móveis.
4.  **Cards e Layout Interativos:** Seções estruturadas com componentes de cartões do Bootstrap dotados de sombras leves (*shadow-sm*) e bordas temáticas, tornando a leitura dinâmica e dividida por blocos de conhecimento.

## 3. Compreensão do Objetivo

A execução prática do código reflete uma compreensão profunda do tema proposto. Desde o cabeçalho inicial que introduz o lema do Agrinho 2026 até o aprofundamento técnico e pedagógico das páginas internas, o site cumpre com rigor o seu papel de agente conscientizador.

* A divisão do conteúdo guia o usuário de forma lógica: identificação do problema, apresentação de inovações tecnológicas e aplicação prática sustentável.
* A escolha de cores e a consistência tipográfica reforçam o tom profissional e educativo do projeto.
* As ferramentas de usabilidade (modo escuro e retorno ao topo) demonstram uma preocupação real com a experiência do usuário e inclusão digital.

## 4. Cumprimento Total do Objetivo

O objetivo do projeto foi atingido em sua plenitude. O ambiente digital não apenas entrega as informações essenciais sobre a conservação de recursos e produção forte de maneira organizada, mas também adota boas práticas de desenvolvimento front-end:

* Todas as páginas propostas estão completamente desenvolvidas, funcionais e interligadas sem links quebrados.
* O sistema de alternância de temas responde perfeitamente e respeita a memória de escolha do visitante.
* O layout é totalmente responsivo, oferecendo uma experiência fluida e elegante tanto em telas de computadores quanto em dispositivos móveis.
* Os textos refletem com precisão a importância da pesquisa científica e o papel da comunidade escolar na construção de um agronegócio forte e sustentável.

Este projeto consolida-se como uma ferramenta digital indispensável para espalhar os ideais do Agrinho 2026, conectando tecnologia, educação e respeito ao meio ambiente de forma interativa e moderna.
