1	CONTEXTO

1.1	Introdução

Nos dias atuais, o avanço da tecnologia traz sob sua incumbência a criação de softwares e aplicações web que resolvem problemas do dia a dia de milhares de pessoas ao redor do mundo, usando de praticidade e flexibilidade para que seu objetivo seja concretizado. Este documento, delineia o entendimento do problema estipulado pelo grupo, além da apresentação da solução com o conhecimento adquirido nas disciplinas lecionadas no 1̊ período do curso de Engenharia de Software, para realizar o processo completo de desenvolvimento de uma aplicação web, que seja iterativa e incremental.

1.2	Problema

No cenário atual, a demanda de pessoas que precisam de uma oportunidade de emprego de forma autônoma e, em que não há um contrato de trabalho formal com uma empresa, está crescendo cada vez mais. Os freelancers têm a flexibilidade de escolher seus próprios projetos, horários de trabalho e locais de trabalho, o que lhes permite um alto nível de liberdade e autonomia em sua carreira. Além disso, juntamente com essa demanda de oportunidades, a área de tecnologia da informação, está recorrentemente precisando de profissionais do ramo que atendam às suas necessidades em um curto período de tempo.
Por conseguinte, percebe-se, que estudantes, desempregados ou pessoas que pretendem ganhar dinheiro extra na área da Informática, e que possuem a necessidade de um alto nível de liberdade e autonomia em sua carreira, detêm dificuldade para sanar este problema. Em razão disso, o empecimento encontrado por esses indivíduos, está na falta de um meio de comunicação entre eles, que evidencie de forma clara, o objetivo de divulgar e encontrar oportunidades de emprego para esse público.

1.3	Objetivo Geral

Dessa forma, o propósito geral deste projeto é: entregar ofertas de emprego para freelancers de forma direta e fácil, ademais, auxiliar empresas que querem crescer e divulgar o seu negócio. Além disso, esse meio será propiciado na área da Informática, que contempla milhares de profissionais que precisam desse suporte. Sendo assim, esses dois públicos conseguem alcançar seu objetivo, o ofertante tendo a possibilidade de contratar por um curto período de tempo um profissional da área que possa auxiliar em um projeto do mesmo e, para o contratado, tendo a possibilidade de encontrar uma aplicação que atenda os critérios de flexibilidade que ele possui como restrição.

1.4	Objetivos Específicos

•	Implementar um sistema de cadastro de freelancers:
Desenvolver funcionalidades que permitam o registro de freelancers na plataforma, disponibilizando informações como competências, experiência, portfólio e dados de contato.

•	Criar um sistema de cadastro de ofertas:
Desenvolver uma interface onde os ofertantes possam cadastrar projetos e especificar os requisitos, prazos e orçamentos para os trabalhos que desejam contratar freelancers para realizar.

•	Desenvolver um mecanismo de busca avançada:
Implementar um sistema de busca robusto que permita aos freelancers encontrar projetos relevantes com base em critérios como habilidades necessárias, localização, tipo de projeto e remuneração.

•	Construir um sistema de perfis de usuário:
Criar páginas de perfil personalizadas para cada freelancer cadastrado, destacando suas habilidades, experiência, classificações e comentários de experiências anteriores.

•	Desenvolver um sistema de avaliação e feedback:
Criar um sistema de avaliação onde as empresas possam fornecer feedback sobre o trabalho realizado pelos freelancers e atribuir classificações, ajudando outros usuários a tomar decisões informadas ao escolher um freelancer.

1.5	Justificativa	

Nos últimos anos, a área de Tecnologia da Informação (TI) tem experimentado um crescimento significativo, com um aumento expressivo na demanda por profissionais qualificados em diversas especialidades. Diante desse cenário, muitos indivíduos têm buscado oportunidades de trabalho como freelancers para adquirir experiência e expandir seus conhecimentos em diferentes áreas da TI.
A justificativa para este projeto reside na ajuda aos profissionais que ingressaram na área de TI e que possam se beneficiar do desenvolvimento e utilização de um software dedicado a facilitar sua atuação no mercado. Com a crescente competição e a diversidade de projetos disponíveis, é fundamental que os freelancers tenham acesso a ferramentas eficazes que os auxiliem na busca por oportunidades, na gestão de projetos e no desenvolvimento de suas habilidades.

1.6	Público-Alvo

A nossa proposta visa atender três grupos específicos:
Estudantes de Tecnologia da Informação com idades entre 17 e 30 anos. Que buscam uma fonte de renda sem se comprometer com um emprego fixo, permitindo-lhes flexibilidade para dedicarem-se aos estudos. Além disso, desejam a oportunidade de adquirir experiência na área. Não há restrição de localidade; tanto os que residem em grandes cidades quanto os que vivem em áreas mais remotas podem se beneficiar.
Profissionais de Tecnologia da Informação em busca de oportunidades adicionais de renda por meio de projetos de curto prazo. Essa oportunidade é acessível tanto para residentes urbanos quanto para aqueles que vivem em áreas rurais ou do interior.
Indivíduos, pequenas empresas ou organizações com até 50 colaboradores, que buscam solucionar desafios por meio da tecnologia, porém preferem evitar os custos vinculados à contratação de grandes corporações para tal serviço, devido a restrições orçamentárias. Valorizam a agilidade e almejam soluções menos burocráticas para suas necessidades.

2	ESPECIFICAÇÃO DO PROJETO

2.1	Personas

Gabriel, 19 anos, brasileiro, reside em Belo Horizonte. Ele é um estudante universitário de Tecnologia da Informação, atualmente no terceiro semestre na Pontifícia Universidade Católica de Minas Gerais. Enquanto progride em seus estudos, Gabriel está buscando oportunidades de trabalho freelance na área de T.I. para gerar uma fonte de renda e obter experiência prática. Embora não tenha histórico profissional anterior, ele está determinado a construir um portfólio sólido durante seus anos universitários, preparando-se para futuras oportunidades no mercado de trabalho. A flexibilidade oferecida pelo trabalho freelancer é particularmente valiosa para Gabriel, pois isso lhe permite equilibrar eficientemente seus estudos com suas responsabilidades profissionais. Além disso, essa flexibilidade também lhe concede mais tempo para se dedicar a escrever músicas, o qual é seu hobby preferido.

Felipe, 35 anos, brasileiro, reside no interior de Minas Gerais, na cidade de Monte Verde. Ele é formado em Sistemas de Informação e atualmente trabalha como front-end em uma empresa. No entanto, ele busca uma renda adicional para garantir mais estabilidade financeira e melhorar a qualidade de vida de sua família. Com um filho para cuidar, Felipe valoriza muito o tempo em família. Além disso, ele também deseja ter mais tempo para se dedicar ao seu hobby, que é jogar. Por isso, ele prefere buscar oportunidades de renda extra por meio de freelancer, visto que se tratam de projetos de curto prazo.

Ester, 39 anos, brasileira, reside em Belo Horizonte. Seu hobby preferido é criar novas receitas, inspirada pelos momentos que compartilhava com sua avó. Após estudar culinária e trabalhar em diversas confeitarias, decidiu abrir sua própria loja, porém, ela enfrenta um desafio: lidar com a alta demanda de pedidos recebidos via WhatsApp e telefone. Essa demanda excessiva tem consumido grande parte do seu tempo, impedindo-a de atender a todos os clientes e de criar novas receitas. Portanto, Ester está em busca de um software de pedidos online. Contudo, ela está enfrentando um obstáculo financeiro, e não consegue contratar uma empresa de desenvolvimento de software. Por isso, ela está procurando um profissional capaz de desenvolver esse software rapidamente e por um custo que se adeque ao seu orçamento. Entretanto, ela não tem conhecimento sobre onde encontrar esse profissional.

2.2	Histórias de Usuários

Como estudante de Tecnologia da Informação e desempregado, desejo acessar uma plataforma que me permita encontrar oportunidades de trabalho freelancer que se encaixem na minha agenda de estudos e me proporcionem experiência na área. 
Critérios de aceitação:
Como usuário, desejo que a plataforma me permita cadastrar um perfil que inclua informações sobre minha formação acadêmica, habilidades técnicas e disponibilidade de horários de trabalho. Além disso, é importante poder visualizar uma lista de oportunidades de trabalho freelancer disponíveis. E que as oportunidades de trabalho exibam informações detalhadas, incluindo o escopo do projeto, requisitos técnicos e a remuneração oferecida e poder candidatar-me a oportunidades de trabalho diretamente através da plataforma e ter acesso aos contatos do contratante para enviar uma mensagem.
Como pequena empresa viso solucionar desafios por meio da tecnologia sem comprometer o orçamento e sem burocracia, sendo assim desejo acessar uma plataforma que me conecte a profissionais qualificados e soluções eficientes, valorizando a agilidade e a praticidade no processo.
Critérios de Aceitação:
Como usuário, desejo poder criar um perfil na plataforma, fornecendo informações sobre mim, minha empresa ou organização. Além disso, desejo poder cadastrar minhas necessidades e receber propostas via e-mail de indivíduos interessados em realizar o trabalho. Também desejo ter acesso ao perfil desses usuários, contendo informações sobre suas experiências, trabalhos já realizados e habilidades.

2.3	Requisitos

Requisitos funcionais (correspondem a uma funcionalidade que deve estar presente na plataforma (ex: cadastro de usuário):
• Landing Page (cadastro de usuário);
• Cliente – Tela de ofertas;
• Perfil do usuário;
• Post de ofertas;
• Ver mais (sobre a empresa e ofertas);
•  Ofertante – Tela de Cadastro e Ofertas em aberto;
•  Tela de Configurações.

Requisitos não funcionais (correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a dispositivos IOS e Android)):
•  O sistema será desenvolvido usando HTML, CSS e JavaScript;
•  O sistema será desenvolvido usando Banco de Dados – LocalStorage;
•  O sistema será desenvolvido sendo responsivo em Firefox, Microsoft Edge e Chrome;
•  O sistema será desenvolvido pra ser responsivo em outros dispositivos.

3	PROJETO DE INTERFACE

3.1	Fluxo do usuário
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/0ae61fd0-5f20-40a6-aa12-a94de4e2116e)

3.2	Wireframes

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/d591c3c8-6147-4917-a79a-d8f2d1942634)

 
3.3	Protótipo Interativo [LINK]

https://www.figma.com/proto/nMWNippnxVA2i7tkJpczjD/Wireframe-TIAW?page-id=0%3A1&type=design&node-id=4-60&viewport=515%2C679%2C0.13&t=54EJ2By1596Srvyd-1&scaling=min-zoom&starting-point-node-id=4%3A60&mode=design

4	METODOLOGIA

4.1	Ferramentas

As ferramentas utilizadas na Sprint 1 desse projeto foram:
• WhatsApp: Usado para a comunicação. 
• Trello:  Usado para a organização. 
• Figma:  Usado para a criação de interfaces, wireframes e protótipos. 
• GitHub: Usado para implantar o código e o repositório.

4.2	Organização da equipe e divisão de papéis

A equipe realizou sua organização e divisão de papéis, da seguinte forma:
• Introdução, Problema, Objetivo do projeto, Formatação do documento - Mirelly;
• Personas, Histórias de Usuários, Público-Alvo - Jheni;
• Fluxo do usuário - Pedro;
• Wireframes das telas, Protótipo Interativo [LINK] - Igor e Pedro;
• Metodologia e Artefatos do Processo de Design Thinking - Rafael;
• Slides, Justificativa - Ruan.

4.3	Quadro de controle de tarefas – Kanban

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/587d33c4-041d-4b7f-be37-c07df9743244)

5	REFERÊNCIAS BIBLIOGRÁFICAS

BLOG, Hotmart. O que é persona no marketing? Saiba mais e descubra como fazer a sua. Disponível em: https://hotmart.com/pt-br/blog/o-que-e-persona. Acesso em: 09 abr. 2024. 

BLOG, Hotmart. Público-alvo: conceito e dicas para definir o seu. Disponível em: https://hotmart.com/pt-br/blog/publico-alvo. Acesso em: 09 abr. 2024.

EDITORA, Atena. Como elaborar objetivos gerais e específicos. Disponível em: https://www.atenaeditora.com.br/blog/como-elaborar-objetivos-gerais-e-especificos. Acesso em: 09 abr. 2024.

MEDIUM. Objetivos, Problema de pesquisa e justificativa. Disponível em: https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3. Acesso em: 09 abr. 2024.
