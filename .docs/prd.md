# PRD — Interface inicial de chat com IA “Eren Yeager”
 

## 1. Visão geral

Criar a tela inicial de uma interface de chat com IA chamada **Eren Yeager**, inspirada na simplicidade de interfaces como ChatGPT e Claude. Esta entrega cobre somente a experiência visual e os controles locais da tela inicial: não haverá busca, chamada a um modelo de IA nem envio de mensagens.

O projeto já utiliza **Vite, React, TypeScript e Tailwind CSS**. A implementação deve aproveitar a configuração existente.

## Estratégia mobile-first

A interface deve ser desenvolvida com abordagem **mobile-first desde o início**: começar pelo layout e pelas interações em telas pequenas e, em seguida, aprimorá-los progressivamente para tablets e desktops usando breakpoints responsivos do Tailwind CSS v4. Responsividade não deve ser tratada como uma etapa posterior.

Priorizar o uso confortável em celulares, incluindo áreas de toque adequadas, texto legível, controles acessíveis e composição que se adapte à largura disponível. Em telas maiores, preservar a hierarquia e o posicionamento central da experiência, aproveitando o espaço adicional sem distorcer o layout.

## 2. Objetivo

Entregar uma tela escura, com identidade visual em azul-marinho, que permita ao usuário:

- localizar o campo de mensagem no centro da página;
- selecionar entre os modos **Rápido** e **Especialista**;
- ativar ou desativar **Pensamento profundo** e **Busca inteligente**.

O usuário pode digitar no campo, mas não pode enviar a mensagem nesta fase.

## 3. Público e necessidade

**Público:** pessoas que querem iniciar uma conversa com um assistente de IA.

**Necessidade principal:** encontrar rapidamente o campo de mensagem e reconhecer, antes de uma futura conversa, os modos e opções disponíveis.

## 4. Escopo funcional

### 4.1 Tela inicial

- Exibir o nome **Eren Yeager** acima das opções de modo.
- Apresentar as opções **Rápido** e **Especialista** como abas ou controles equivalentes de seleção exclusiva.
- Exibir o campo de mensagem centralizado, com o botão de envio arredondado no canto inferior direito do campo.
- Dentro da área do campo:
  - posicionar os controles **Pensamento profundo** e **Busca inteligente** no canto inferior esquerdo;
  - posicionar o botão de envio no canto inferior direito.

### 4.2 Modos e controles

- **Rápido** e **Especialista:** permitir alternar a seleção e indicar visualmente qual opção está ativa. Nesta versão, a escolha não altera o comportamento do campo nem inicia uma busca.
- **Pensamento profundo** e **Busca inteligente:** permitir ativar e desativar cada opção independentemente e representar visualmente o estado atual. Nesta versão, esses estados são apenas locais e não executam processamento.
- **Campo de mensagem:** permitir entrada de texto.
- **Enviar:** permanecer desabilitado nesta fase, sem enviar mensagens ou iniciar uma busca. O estado desabilitado deve ser perceptível visualmente e exposto a tecnologias assistivas.

## 5. Requisitos visuais e de experiência

- Usar tema escuro com azul-marinho como cor principal.
- Manter o grupo de composição da mensagem no centro da tela, respeitando a hierarquia: nome do projeto, seleção de modo e campo de mensagem.
- Manter os controles dentro da área do campo e nas posições relativas descritas no escopo funcional.
- Desenvolver mobile-first, validando primeiro a experiência em telas pequenas e aprimorando-a progressivamente para telas maiores.
- Garantir layout utilizável em celulares, tablets e desktops, sem sobreposição, perda de controles, conteúdo cortado ou rolagem horizontal.
- Em telas estreitas, permitir que os controles do campo se reorganizem ou quebrem linha mantendo clara sua associação ao campo e sem comprometer o acesso ao botão de envio.
- Garantir alvos de toque confortáveis em dispositivos móveis, sem depender de hover para indicar ou acionar estados.
- Distinguir claramente os estados selecionado/não selecionado, ativado/desativado e desabilitado.
- Fornecer foco de teclado visível e nomes acessíveis para os controles interativos.

## 6. Requisitos técnicos

- Implementar com React e TypeScript na configuração Vite existente.
- Usar Tailwind CSS já configurado; não adicionar outra biblioteca de interface ou dependência sem necessidade.
- Organizar componentes reutilizáveis em `src/components`, evitando duplicação e abstrações desnecessárias.
- Manter o estado de modo e dos dois controles na interface; não persistir esses estados após recarregar a página.
- Não adicionar integração de API, backend, armazenamento de conversas ou lógica de busca nesta entrega.

## 7. Fora de escopo

- Enviar mensagens ou apresentar respostas da IA.
- Executar busca na web ou qualquer outra busca.
- Conectar a um provedor/modelo de IA.
- Persistir conversas, preferências ou histórico.
- Implementar autenticação, navegação para outras páginas ou funcionalidades não descritas neste documento.

## 8. Critérios de aceite

1. A interface é implementada mobile-first: o layout-base atende celulares, e breakpoints adicionam aprimoramentos progressivos para tablets e desktops.
2. Ao abrir a aplicação, a tela exibe **Eren Yeager**, os modos **Rápido** e **Especialista** e o campo de mensagem em uma composição centralizada e escura, com azul-marinho como cor principal.
3. É possível alternar entre **Rápido** e **Especialista**, e a opção atual fica visualmente identificável.
4. **Pensamento profundo** e **Busca inteligente** podem ser ligados e desligados independentemente, com o estado visível.
5. É possível digitar no campo de mensagem, mas o botão **Enviar** permanece desabilitado e nenhuma mensagem ou busca é iniciada.
6. Em larguras de celular, tablet e desktop, a composição permanece utilizável, sem controles sobrepostos, conteúdo cortado ou rolagem horizontal; os alvos de toque funcionam sem hover.
7. Os controles podem ser identificados e operados por teclado, e o estado dos controles e o estado desabilitado do botão são comunicados semanticamente.
8. A aplicação continua compilando com os scripts e ferramentas já configurados no projeto.
