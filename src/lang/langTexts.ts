//NavBar
export const navigationTxtEng = {
  home: "Home",
  about: "About",
  projects: "Projects",
  skills: "Skills, Experiences and Education",
  contact: "Contact",
};
export const navigationTxtPt = {
  home: "Home",
  about: "Sobre",
  projects: "Projetos",
  skills: "Habilidades, Experiências e Educação",
  contact: "Contato",
};

//Home
export const mainTxtEng = {
  welcome: "Hi, I'm ",
  welcomeText:
    "and",
};
export const mainTxtPt = {
  welcome: "Oi, sou ",
  welcomeText:
    "e",
}

//About
export const aboutTxtEng = {
  mainText:`
  I'm a passionate Full Stack Web Developer with a deep enthusiasm for technology and problem-solving. What began as curiosity quickly evolved into a career-defining journey. With hands-on experience in Elixir, Phoenix, LiveView, JavaScript, React.js, Node.js, and more, I specialize in building scalable, high-performance applications. 
  Beyond coding, I'm a musician and a handball enthusiast, bringing creativity, teamwork, and adaptability into everything I do. Let’s connect and transform ideas into powerful digital solutions!
  `,
  mainTextMobile: `
  I'm a passionate Full Stack Web Developer with a deep enthusiasm for technology and problem-solving. What began as curiosity quickly evolved into a career-defining journey. With hands-on experience in Elixir, Phoenix, LiveView, JavaScript, React.js, Node.js, and more, I specialize in building scalable, high-performance applications. 
  Beyond coding, I'm a musician and a handball enthusiast, bringing creativity, teamwork, and adaptability into everything I do. Let’s connect and transform ideas into powerful digital solutions!
  `
};

export const aboutTxtPt = {
  mainText: `Sou um desenvolvedor Full Stack apaixonado por tecnologia e por resolver problemas. O que começou como curiosidade logo se transformou em uma jornada que definiu minha carreira. Com experiência prática em Elixir, Phoenix, LiveView, JavaScript, React.js, Node.js e outras tecnologias, desenvolvo aplicações escaláveis e de alto desempenho, sempre focado em gerar impacto real.
  Além da programação, sou músico e entusiasta do handebol, trazendo criatividade, colaboração e adaptabilidade para tudo o que faço. Adoro trabalhar em equipe e buscar soluções inovadoras. Vamos nos conectar e transformar boas ideias em realidade!`,
  mainTextMobile: `Sou um desenvolvedor Full Stack apaixonado por tecnologia e por resolver problemas. O que começou como curiosidade logo se transformou em uma jornada que definiu minha carreira. Com experiência prática em Elixir, Phoenix, LiveView, JavaScript, React.js, Node.js e outras tecnologias, desenvolvo aplicações escaláveis e de alto desempenho, sempre focado em gerar impacto real.
  Além da programação, sou músico e entusiasta do handebol, trazendo criatividade, colaboração e adaptabilidade para tudo o que faço. Adoro trabalhar em equipe e buscar soluções inovadoras. Vamos nos conectar e transformar boas ideias em realidade!`
};

//Projects
export const projectsTxtEng = {
  main: "This is a section where I display some of my best projects, created with a variety of technologies and using different methods!",
  trio_card: 
    "A virtual prepaid card system handling approvals, refunds, and issuer callbacks. It locks and settles balances during transactions, manages invoices with scheduled Oban jobs, and allows CSV exports via AWS S3. The frontend includes dashboards for cards, purchases, and invoices, with full card and transaction details and category insights.",
  trio_checkout:
    "A dynamic, fully customizable checkout solution built with Elixir and Phoenix LiveView. Available as an embeddable iframe or standalone URL, it supports pay-in, pay-out, and onboarding flows using Pix and Open Finance. For onboarding, user data is automatically retrieved after payment—no forms required. The interface is real-time, responsive, and fully brandable with client logos, colors, timeouts, and redirect behavior.",
  trio:
    "Landing page for the fintech Trio Payments, built using Next.js integrated with Contentful CMS. The structure is fully component-based, allowing the marketing team to create and update pages using predefined, mapped content blocks, with no developer intervention needed. The website is fully responsive and features smooth animations powered by Framer Motion.",
  musichems:
    "A personal project designed to connect event organizers with musicians. On Musichems, users can search for artists (bands, DJs, or solo performers) available to perform in a specific location on a selected date. The platform allows filtering by music genre, accessing detailed artist profiles, and booking them directly for gigs or events. Ideal for parties, weddings, or local festivals.",
  findme:
    "A freelance project for OZmap, a platform for optical network management. Designed to help providers locate end-users in remote areas with vague addresses, it consists of a white-label microservice built with Node.js and Vue.js. The backend sends SMS messages with a personalized link; when opened, the frontend requests geolocation via the browser's Location API. Users adjust their exact position with a draggable pin on Google Maps. The coordinates are stored and sent to OZmap’s console, improving on-site operations.",
  drivent:
    "A white-label event management platform tailored for each specific event. It allows users to register for an event (choosing between remote or in-person attendance), make payments, and, if attending in person, select and book hotel accommodations. Once the registration and lodging are confirmed, users can browse and sign up for daily activities via a calendar interface.",
  primafiat:
    "A freelance project developed for a car dealership to streamline daily vehicle deliveries. The system includes two frontend interfaces: one for displaying all scheduled deliveries for the current day, and another for internal use to input delivery data. A custom backend handles and persists all data to a database, ensuring smooth and reliable operations.",
};

export const projectsTxtPt = {
  main: "Esta é uma seção onde exibo alguns dos meus melhores projetos, criados com diversas tecnologias e métodos!",
  trio_card:
    "Sistema de cartão virtual que gerencia aprovações, reembolsos e callbacks do emissor. Controla saldo, faturas com jobs agendados no Oban e exporta CSVs via AWS S3. No frontend, exibe painéis de cartões, compras e faturas com detalhes completos e insights por categoria.",
  trio_checkout:
    "Solução de checkout dinâmica e totalmente personalizável, feita com Elixir e Phoenix LiveView. Disponível via iframe ou URL, suporta fluxos de entrada, saída e onboarding com Pix e Open Finance. Nos fluxos de onboarding, os dados do usuário são obtidos automaticamente após o pagamento—sem formulários. A interface é em tempo real, responsiva e com suporte total a branding (logos, cores, tempo de expiração e redirecionamento).",
  trio:
    "Landing page da fintech Trio Payments, desenvolvida com Next.js e integrada ao Contentful CMS. O site foi construído com base em blocos de conteúdo pré-definidos e mapeados, permitindo que a equipe de marketing atualize e crie páginas sem depender de desenvolvedores. O layout é totalmente responsivo e conta com animações fluidas feitas com Framer Motion.",
  musichems:
    "Projeto pessoal criado para facilitar a conexão entre contratantes e músicos. No Musichems, é possível buscar artistas disponíveis para tocar em determinada data e cidade, filtrando por estilo musical. Cada artista possui uma página de perfil com informações detalhadas, permitindo que o contratante conheça melhor o trabalho antes de efetuar a reserva para eventos como festas, casamentos ou festivais.",
  findme:
    "Projeto freelance desenvolvido para a OZmap, plataforma de gerenciamento de redes ópticas. Criado para ajudar provedores a localizar clientes finais em regiões remotas com endereços vagos. O sistema é um microserviço white-label feito com Node.js e Vue.js. O backend envia um SMS com link personalizado; ao abri-lo, o frontend solicita geolocalização via API do navegador. O usuário ajusta sua posição com um pin no Google Maps. As coordenadas são armazenadas e enviadas ao painel da OZmap, otimizando operações em campo.",
  drivent:
    "Plataforma white-label para gestão de eventos, personalizada para cada evento específico. Permite que os usuários se inscrevam (escolhendo entre participação remota ou presencial), realizem o pagamento e, em caso de participação presencial, escolham e reservem hospedagem em hotéis disponíveis. Após a confirmação da inscrição e da reserva, o usuário pode visualizar um calendário com as atividades diárias do evento e se inscrever nas de sua escolha.",
  primafiat:
    "Projeto freelancer desenvolvido para uma concessionária de veículos com foco na organização das entregas diárias. O sistema conta com duas interfaces: uma tela pública que exibe os carros com entrega agendada para o dia atual, e um painel administrativo onde é possível cadastrar novas entregas. Um backend gerencia e salva os dados em banco de forma segura e eficiente."
};

//Skills
export const skillsTxtPt = {
  experiences: {
    driven: {
      title: "Desenvolvedor Full Stack (Freelancer)",
      company: "OZmap",
      period: "Jun/2022 - Presente",
      description: `Responsável por atualizar e adicionar novas features a um microserviço em produção. Trabalho no desenvolvimento tanto do front-end quanto do back-end, garantindo o bom funcionamento e aprimoramento da aplicação como um todo.
      No front-end, utilizo Vue.js, Typescript e ferramentas de geolocalização e mapas. Já no back-end utilizo TypeScript, Node.js, Express.js, e um banco de dados MongoDB.
      Nesse projeto, atuo como freelancer em colaboração com um desenvolvedor sênior da empresa. Essa parceria assegura a consistência e a qualidade do código, além de proporcionar uma troca de conhecimentos valiosa.
      Principais responsabilidades:
      - Atualizar e adicionar novas features ao microserviço existente.
      - Desenvolver interfaces de usuário intuitivas e atraentes utilizando Vue.js, Typescript e ferramentas de geolocalização e mapas.
      - Construir e otimizar o back-end como uma API em TypeScript com Node.js e Express.js.
      - Colaborar com o desenvolvedor sênior para garantir a consistência e a qualidade do código.`,
    },
    lajetrel: {
      title: "Desenvolvedor Full Stack (Freelancer)",
      company: "Prima FIAT",
      period: "Mai/2023 - Jun/2023",
      description: `Um projeto freelancer para uma concessionária de carros, onde há um frontend apenas para exibir as entregas de carros no dia atual, um frontend para popular o banco de dados com as entregas e um backend para persistir essas inserções em um banco de dados.`,
    },
    crestani: {
      title: "Desenvolvedor Full Stack",
      company: `Driven.t - Gerenciador de Eventos
      ( Projeto )`,
      period: "Dez/2022 - Mar/2023",
      description: `Aprendi as particularidades do código em quatro semanas de onboarding, desenvolvendo provas de conceito sobre tecnologias com as quais eu não estava familiarizado, em paralelo com a implementação de features utilizando essas mesmas tecnologias. (Typescript, Prisma ORM e testes de integração usando JEST e Supertest).
      O projeto então entrou na próxima fase, onde eu participei de uma equipe trabalhando através de metodologias ágeis (SCRUM) na qual eu fui Scrum Master.
      • Tecnologias utilizadas: 
       • Back-end: TypeScript, Node.js, Express.js, JEST, Prisma ORM, Redis.
       • Front-end: React.js, Styled Components, JavaScript`,
    },
    concreta: {
      title: "Multiplios cargos relacionados à Engenharia Civil",
      company: "Múltiplas Empresas",
      period: "Mai/2018 - Mar/2022",
      description: `- Engenheiro Calculista Assistente na Lajetrel: Preparava estimativas, conduzia trabalhos de projeto e, ocasionalmente, coordenava a produção e entrega de lajes treliçadas. Desenvolvi habilidades de liderança, organização e atendimento ao cliente como fornecedor.

      - Desenvolvedor de Propostas de Licitação na Crestani Comércio: Desenvolvi habilidades sólidas em organização, análise de requisitos e gestão de projetos. Responsável por preparar propostas, organizar documentação e criar cronogramas para licitações de serviços de engenharia na região de Palhoça. Habilidades em trabalhar com prazos apertados e atender aos requisitos específicos listados nos documentos de licitação.
      
      - Estagiário de Projeto Estrutural e Orçamentista na Concreta Pré Moldados: Criei projetos arquitetônicos para armazéns pré-moldados e conduzi estimativas de custos. Meu papel envolvia traduzir as necessidades dos clientes em projetos arquitetônicos visualmente atrativos e funcionais. Essa experiência aprimorou minha capacidade de entregar projetos que atendessem às expectativas dos clientes, considerando soluções econômicas.
      
      Essas experiências destacam minha proficiência em projeto estrutural, estimativa de custos, coordenação de projetos e relacionamento com clientes na área de engenharia civil. Combinando esse conjunto diversificado de habilidades, fiz a transição para o desenvolvimento web, unindo conhecimento em engenharia a soluções inovadoras.`,
    },
  },
  education: {
    driven: {
      title: "Desenvolvimento Full Stack",
      company: "Driven Education",
      period: "Jun/2022 - Mai/2023",
      description: `• Formação intensiva de +1.200h focadas em projetos práticos.
• +25 projetos práticos nas tecnologias: HTML, CSS, Javascript, React.js, Node.js, Typescript e Prisma.
• Fundamentos da engenharia de software: lógica de programação, algorítmos, estrutura de dados, orientação a objetos, arquitetura, otimização, performance e clean code.
• Bancos de dados relacionais e não relacionais com Postgres, MongoDB e Redis.
• Princípios de Devops com GitHub Actions, Docker e AWS.
• Testes unitários, de integração e ponta-a-ponta, com Jest, SuperTest e Cypress.
• Trabalhos em equipe usando metodologias ágeis (Scrum), Git, Slack, Trello, Zoom. Coolaborando dando e recebendo feedbacks.
• Desenvolvimento de competências comportamentais e habilidades profissionais (soft skills).`,
    },
    cs50: {
      title: "Ciência da Computação - CS50",
      company: "Harvard University",
      period: "Dez/2022 - Jun/2023",
      description: ` •  Uma compreensão ampla e robusta de ciência da computação e programação.
• Como pensar algoritmicamente e resolver problemas de programação de forma eficiente.
• Conceitos como abstração, algoritmos, estruturas de dados, encapsulamento, gerenciamento de recursos, segurança, engenharia de software e desenvolvimento web.
• Familiaridade com várias linguagens, incluindo C, Python, SQL e JavaScript, além de CSS e HTML.
• Como se envolver com uma comunidade vibrante de alunos com ideias semelhantes de todos os níveis de experiência.
• Como desenvolver e apresentar um projeto final de programação para seus colegas.`,
    },
    ufsc: {
      title: "Engenharia Civil (Incompleto)",
      company: "Universidade Federal de Santa Catarina (UFSC)",
      period: "Mar/2014 - Mar/2022",
      description: `• Introdução à Ciência da Computação usando Pascal.
• Cálculo Numérico com foco em algorítmos.`,
    },
  },
};

export const skillsTxtEng = {
  experiences: {
    driven: {
      title: "Full Stack Developer (Freelance)",
      company: "OZmap",
      period: "Jun/2023 - Present",
      description: `Responsible for updating and adding new features to a microservice in production. I work on both front-end and back-end development, ensuring the smooth functioning and enhancement of the application as a whole. 
      On the front-end, I use Vue.js, Typescript, and geolocation and mapping tools. On the back-end, I use TypeScript, Node.js, Express.js, and a MongoDB database.
      In this project, I work as a freelancer in collaboration with a senior developer from the company. This partnership ensures code consistency and quality, as well as valuable knowledge exchange. 
      Key responsibilities: 
      - Updating and adding new features to the existing microservice. 
      - Developing intuitive and appealing user interfaces using Vue.js, Typescript, and geolocation and mapping tools. 
      - Building and optimizing the back-end as a TypeScript API with Node.js and Express.js. 
      - Collaborating with the senior developer to ensure code consistency and quality.`,
    },
    lajetrel: {
      title: "Full Stack Developer (Freelance)",
      company: "Prima FIAT",
      period: "May/2023 - Jun/2023",
      description:
        `A Freelancer project for a car retailer store, where there is a frontend only for displaying the car deliveries in the current day, a frontend to populate the database with deliveries, and a backend to persist that insertions into a database.`,
    },
    crestani: {
      title: "Full Stack Developer",
      company: `Driven.t - Event Management Website
      ( Project )`,
      period: "Dec/2022 - Mar/2023",
      description: `As a Full-Stack Developer I learned the particularities of the code in four weeks of onboarding proccess and made P.O.Cs about technologies I wasn't familiar with, in paralel with implementing features using the tech I was learning (Typescript, Prisma ORM and testing using JEST and Supertest). 
      The project then entered the next phase, where I had a team working under Agile methodology (SCRUM) and I was the SCRUM master. 
      • Technologies used: 
       • Back-end: TypeScript, Node.js, Express.js, JEST, Prisma ORM, Redis.
       • Front-end: React.js, Styled Components, JavaScript`,
    },
    concreta: {
      title: "Multiple Jobs related to Civil Engineering",
      company: "Multiple Companies",
      period: "May/2018 - Mar/2022",
      description: `- Assistant Calculating Engineer at Lajetrel: Prepared estimates, conducted project work, and occasionally coordinated latticed slab production and deliveries. Developed leadership, organizational, and client treatment skills as a supplier.

      - Bidding Proposal Developer at Crestani Comércio: Developed strong skills in organization, requirements analysis, and project management. Responsible for preparing proposals, organizing documentation, and creating schedules for engineering service bids in the Palhoça region. Thrived in working with tight deadlines and meeting specific bid requirements.
      
      - Structural Designer and Cost Estimator Intern at Concreta Pre Moldados: Created architectural designs for precast warehouses and conducted cost estimations. Translated client requirements into visually appealing and functional architectural projects. Delivered projects that met client expectations while considering cost-effective solutions.
      
      These experiences showcase my proficiency in structural design, cost estimation, project coordination, and client relationship management within the civil engineering field. Leveraging this diverse skill set, I have transitioned into web development, combining engineering knowledge with innovative solutions.`,
    },
  },
  education: {
    driven: {
      title: "Full Stack Development",
      company: "Driven Education",
      period: "Jun/2022 - May/2023",
      description: `• Intensive formation of +1,200 hours focused on practical projects.
• +25 practical projects in technologies: HTML, CSS, JavaScript (React.js, Node.js, TypeScript, and Prisma).
• Fundamentals of software engineering: programming logic, algorithms, data structures, object-oriented programming, architecture, optimization, performance, and clean code.
• Relational and non-relational databases with Postgres, MongoDB, and Redis.
• DevOps principles with GitHub Actions, Docker, and AWS.
• Unit, integration, and end-to-end testing with Jest, SuperTest, and Cypress.
• Teamwork using agile methodologies (Scrum), Git, Slack, Trello, Zoom, collaborating, giving and receiving feedback.
• Development of behavioral competencies and professional skills (soft skills).`,
    },
    cs50: {
      title: "Computer Science - CS50",
      company: "Harvard University",
      period: "Dec/2022 - Jun/2023",
      description: `• A broad and robust understanding of computer science and programming.
• How to think algorithmically and solve programming problems efficiently.
• Concepts such as abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.
• Familiarity with various languages, including C, Python, SQL, and JavaScript, as well as CSS and HTML.
• How to engage with a vibrant community of like-minded students at all levels of experience.
• How to develop and present a final programming project to your peers.`,
    },
    ufsc: {
      title: "Civil Engineering (Incomplete)",
      company: "Federal University of Santa Catarina (UFSC)",
      period: "Mar/2014 - Mar/2022",
      description: `• Introduction to Computer Science using Pascal
• Numerical Calculus with a Focus on Algorithms.`,
    },
  },
};

//Contact
