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

1.7 Artefatos de Design Thinking

1.7.1	Matriz de Alinhamento CSD

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/d09a27a3-73a7-44e6-aa2f-03fbed919537)

 
1.7.2	Mapa de Stakeholders

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/03bae108-d66e-48f6-ae42-b8d98e37607d)

 
1.7.3	Entrevista Qualitativa

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/d2711269-8a0a-483a-800e-faf0bf1689ce)

 
1.7.4	Mural de Possibilidades

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/ac1c3cce-dec1-491e-ab9e-b6118719af9d)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/88176507-76be-4ee0-9121-9e7400d15130)


2	PROJETO DA SOLUÇÃO

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

•	Cadastro de Cliente;

•	Cadastro de Empresa;

•	Login;

•	Header;

•	Footer;

•	Configurações;

•	Modo escuro/claro;

•	Perfil de usuário;

•	Perfil da empresa;

•	Editar Perfil do Usuário / Empresa;

•	Excluir perfil usuário/empresa;

•	Página da empresa;

•	Criar oferta (página da empresa);

•	Exibir cards das ofertas (página da empresa);

•	Excluir oferta (página da empresa);

•	Editar oferta (página da empresa);

•	Visualização dos candidatos à vaga (página da empresa);

•	Página do usuário;

•	Exibir vagas (página do usuário);

•	Candidatar à vaga (página do usuário);

•	Avaliação do perfil da empresa.

2.4	Projeto de Interface

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/8752b1e9-57d1-4eff-8ba0-c148d0bdc84f)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/cef7d804-30a6-4ce1-8d8c-4c6f2d2cfa04)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/da80b9cc-1908-4da3-a567-dc4afa931e0a)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/e18901c8-1e2a-4c35-9b33-aa3d4801ffba)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/9c2c76e4-06ef-4981-ab67-35904ec7d288)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/ead8429c-1da9-4617-af5c-a84a1868617c)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-freelance-connect/assets/164200272/73260298-2260-4a0c-9c21-243d29ee2e0a)

2.5	Tecnologias

Para a realização do software, utilizamos diversas ferramentas tecnológicas essenciais. Utilizamos o Discord para realizar reuniões frequentes, garantindo uma comunicação eficiente entre todos os membros da equipe. O WhatsApp foi fundamental para alinhamentos ágeis e adaptações rápidas às mudanças necessárias, além de servir como plataforma para organização das funções de cada integrante. No desenvolvimento, contamos com o Visual Studio para a codificação do software, utilizando suas ferramentas de desenvolvimento integradas. Para hospedagem do JSON e garantir acesso simultâneo e colaborativo, optamos pelo Replit, proporcionando um ambiente acessível e compartilhado. 

Para o gerenciamento do código-fonte, utilizamos o GitHub, onde hospedamos nosso repositório para que todos os membros do grupo pudessem colaborar e ter acesso ao código criado por cada um. A plataforma GitHub Projects foi essencial para organizar as funcionalidades atribuídas a cada integrante, além de manter um controle claro do que estava pendente, em andamento e concluído durante todo o processo de desenvolvimento. Essas tecnologias foram fundamentais para o sucesso do projeto, garantindo uma colaboração eficiente, organização estruturada e um desenvolvimento contínuo e integrado.

3  METODOLOGIA DO TRABALHO

3.1	Processo e Atribuições

O grupo utilizou do Scrum para a organização inicial do projeto. Os requisitos foram levantados por reuniões presenciais e organizados em um backlog na ferramenta de trabalho World. 
Em cada Sprint, cada membro ficou responsável para construir um ou mais requisitos de sua escolha até a entrega final do projeto.

3.2	Ferramentas

•	Visual Studio Code: para construção do projeto.

•	World e Trelo: Para organização dos requisitos em cada Sprint.

•	Whatsapp e Discord: para reuniões e acordos necessários.

4	SOLUÇÃO IMPLEMENTADA

4.1	Funcionalidades do software

•	Registro e Gestão de Usuários.

- Registro de Usuários: Formulário de inscrição para empregadores e freelancer.
  
- Autenticação: Login seguro.
  
- Perfis de Usuários: Criação e edição de perfis com informações pessoais, habilidades, experiência e portfólio.
  
•	Gestão de Perfis.

- Perfil do Freelancer:
  
  - Informações pessoais e profissionais.
    
  - Listagem de habilidades.
    
  - Portfólio de trabalhos anteriores.
    
  - Disponibilidade e tarifas.
    
- Perfil do Empregador:
  
  - Informações da empresa.
    
  - Histórico de projetos e avaliações de freelancer.
    
  - Preferências de contratação.
    
  - Vagas.
    
•	Publicação e Gestão de Ofertas de Trabalho.

- Criação de Ofertas: Formulários para que os empregadores publiquem novas vagas.
  
- Categorias: Organização dos trabalhos por categorias, habilidades requeridas e outros filtros.
  
- Gestão de Ofertas: Edição e exclusão de ofertas publicadas.
  
•	Busca e Navegação.

- Motor de Busca: Busca avançada por palavras-chave, categorias, habilidades, tarifas, etc.
  
•	Comunicação e Colaboração.

- Mensagens Internas: Sistema de mensagens entre empregadores e freelancer por email.
 
•	Processo de Contratação.

- Avaliação e Seleção: Ferramentas para que os empregadores revisem propostas, perfis e selecionem candidatos.
  
•	Avaliações e Feedback.

- Sistema de Avaliações: Permitir que freelancer avaliem e deixem feedbacks após completar um projeto com a empresa.

5	REFERÊNCIAS BIBLIOGRÁFICAS
BLOG, Hotmart. O que é persona no marketing? Saiba mais e descubra como fazer a sua. Disponível em: https://hotmart.com/pt-br/blog/o-que-e-persona. Acesso em: 09 abr. 2024. 

BLOG, Hotmart. Público-alvo: conceito e dicas para definir o seu. Disponível em: https://hotmart.com/pt-br/blog/publico-alvo. Acesso em: 09 abr. 2024.

EDITORA, Atena. Como elaborar objetivos gerais e específicos. Disponível em: https://www.atenaeditora.com.br/blog/como-elaborar-objetivos-gerais-e-especificos. Acesso em: 09 abr. 2024.

MEDIUM. Objetivos, Problema de pesquisa e justificativa. Disponível em: https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3. Acesso em: 09 abr. 2024.

