export const portfolioData = {
  personal: {
    name: "Gustavo Gaiotti",
    title: "Desenvolvedor Fullstack",
    description: "Transformando ideias em soluções digitais.",
    email: "gusgaiotti77@gmail.com",
    github: "https://github.com/GusGaiotti",
    linkedin: "https://www.linkedin.com/in/gustavogaiotti/",
    photo: "/profile.jpg"
  },
  
  experiences: [
    {
      position: 'Desenvolvedor Full Stack',
      company: 'Cartos',
      period: 'Fev 2025 - Jul 2025',
      description: [
        'Desenvolvi e entreguei funcionalidades de ponta a ponta para um produto SaaS, desde a concepção até a implantação em produção',
        'Colaborei na construção do front-end com Next.js, React e TypeScript, implementando interfaces responsivas e otimizadas',
        'Implementei microserviços em Node.js utilizando arquitetura Serverless na AWS (Lambda\'s, SQS...), garantindo escalabilidade e baixo custo operacional',
        'Automatizei e dei manutenção em workflows com N8N, reduzindo o tempo de execução de tarefas manuais'
      ],
      technologies: ['Next.js', 'AWS', 'TypeScript', 'N8N'],
      color: 'purple'
    },
    {
      position: 'Desenvolvedor de automações',
      company: 'C6 Bank',
      period: 'Mar 2024 - Fev 2025',
      description: [
        'Criei e mantive automações em Python para processos operacionais críticos, resultando em ganhos significativos de eficiência para a equipe',
        'Utilizei bibliotecas como Pandas e Selenium para manipular grandes volumes de dados',
        'Assegurei a estabilidade e performance dos robôs (RPA), colaborei no monitoramento contínuo e atuação em incidentes N2'
      ],
      technologies: ['Python', 'Pandas', 'Selenium', 'VBA'],
      color: 'blue'
    },
  
    {
      position: 'Desenvolvedor',
      company: 'Autônomo',
      period: 'Set 2021 - Mar 2024',
      description: [
        'Durante a experiência anterior me aprofundei em estudos e desenvolvimento de projetos pessoais (disponíveis no meu GitHub)',
        'Atuei em projetos como freelancer no tempo livre',
        'Desenvolvi API\'s e testes em um projeto em Rust para tradução automática de vídeo e legendagem com IA',
      ],
      technologies: ['Rust', 'IA/ML', 'API\'s'],
      color: 'green'
    },{
      position: 'Customer Success',
      company: 'C6 Bank',
      period: 'Set 2021 - Mar 2024',
      description: [
        'Responsável por prestar suporte para clientes alta renda',
        'Esclarecimento de dúvidas referentes a faturas, cartões, produtos e serviços bancários',
        'Atendimento especializado para segmento premium',
      ],
      technologies: ['Atendimento ao Cliente', 'Suporte'],
      color: 'green'
    }
  ],

  skills: {
    categories: [
      {
        title: 'Frontend',
        icon: 'Code',
        skills: [
          { name: 'React / Next.js', percentage: 90 },
          { name: 'TypeScript', percentage: 85 },
          { name: 'Tailwind CSS', percentage: 95 }
        ],
        gradient: 'from-purple-600 to-blue-600'
      },
      {
        title: 'Backend',
        icon: 'Server',
        skills: [
          { name: 'Node.js', percentage: 85 },
          { name: 'Java / Spring Boot', percentage: 80 },
          { name: 'Python', percentage: 88 }
        ],
        gradient: 'from-blue-600 to-green-600'
      },
      {
        title: 'Cloud & Ferramentas',
        icon: 'Cloud',
        skills: [
          { name: 'AWS', percentage: 82 },
          { name: 'Serverless', percentage: 85 },
          { name: 'Git / GitHub', percentage: 90 }
        ],
        gradient: 'from-green-600 to-yellow-600'
      }
    ],
    
    technologies: [
      { name: 'Java', icon: 'SiOpenjdk', color: 'text-[#007396]' },
      { name: 'React', icon: 'SiReact', color: 'text-blue-400' },
      { name: 'Node.js', icon: 'SiNodedotjs', color: 'text-green-400' },
      { name: 'Python', icon: 'SiPython', color: 'text-yellow-400' },
      { name: 'Docker', icon: 'SiDocker', color: 'text-blue-500' },
      { name: 'Git', icon: 'SiGit', color: 'text-red-500' },
      { name: 'AWS', icon: 'SiAmazonwebservices', color: 'text-orange-400' }

    ]
  },

  achievements: [
    {
      icon: 'Rocket',
      title: 'Desenvolvimento de um SaaS',
      description: 'Participei ativamente do desenvolvimento de um SaaS escalável em arquitetura de microserviços, utilizando Node.js com AWS Serverless para o back-end e Next.js para o front-end. ',
      color: 'purple'
    },
    {
      icon: 'Bot',
      title: 'Automação Financeira',
      description: 'Automatizei processos operacionais para a área de investimentos utilizando Python e, adicionalmente, já desenvolvi e otimizei workflows de conciliação financeira com N8N.',
      color: 'blue'
    },
    {
      icon: 'Globe',
      title: 'Formação Acadêmica',
      description: 'Concluí minha formação em Análise e Desenvolvimento de Sistemas pela FIAP, uma pós graduação em CyberSec na Cruzeiro do Sul e atualmente curso bacharelado em Ciência da Computação na Anhembi Morumbi.',
      color: 'green'
    }
  ]
};