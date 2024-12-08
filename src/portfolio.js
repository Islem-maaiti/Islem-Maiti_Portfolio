/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Islem's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Islem Maiti Portfolio",
    type: "website",
    url: "http://islem_maiti.com/",
  },
};

//Home Page
const greeting = {
  title: "Islem Maiti",
  logo_name: "Islem_Maiti",
  subTitle:
  "I am a Computer Science Engineering student specializing in Data Science, with a Master's degree in Actuarial Science. ",   
  resumeLink:
    "https://drive.google.com/drive/folders/1h_FdykIa9n9QtZz8jYMSgSBP3k-lvJNM?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Islem-maaiti",
};


const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Islem-maaiti/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/islem-maiti-data-scientist/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:islem.maiiti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "linktree",
    link: "https://linktr.ee/Islem_Maiti",
    fontAwesomeIcon: "fa-pagelines", // Icône générique pour Linktree
    backgroundColor: "#39E09B", // Couleur officielle de Linktree
  },
  
  
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Machine Learning :",

            "- 🧠 Development of supervised and unsupervised models for production applications :",
            "Design and deployment of robust Machine Learning models to solve real-world problems. Specializing in optimizing models for maximum performance in production, with a focus on scalability and efficiency of solutions. Use of classical algorithms such as random forests, support vector machines (SVM), as well as decision tree-based models and probabilistic models like Gaussian Mixture Models (GMM).",

            "- 🔍 Anomaly detection and data classification :",
            "Implementation of algorithms for detecting unusual behaviors in complex datasets. These techniques are used in fields such as cybersecurity and data quality monitoring to ensure early detection of anomalies and protect systems against potential intrusions or errors.",

        "⚡ Deep Learning :",

            "-  🤖 Modeling and deployment of complex Deep Learning models :",
            "Creation of deep neural networks, including architectures such as CNN (Convolutional Neural Networks), RNN (Recurrent Neural Networks), and LSTM (Long Short-Term Memory), used in applications like time series forecasting, computer vision, and processing of unstructured data.",

            "-  🖼️ Computer Vision :",
            "Application of convolutional neural networks (CNN) for image recognition, classification, and object detection in industrial and commercial projects. Use of pre-trained models such as Mask RCNN with a ResNet50 backbone to improve result accuracy while reducing costs and training time.",

            "-  🚀 Optimizing Deep Learning model performance :",
            "Improving model performance using advanced techniques such as hyperparameter tuning, transfer learning, and reducing overfitting, which allows handling complex datasets and improving prediction accuracy.",

         "⚡ Natural Language Processing (NLP) :",

            "- 💬 NLP models for text analysis and automatic text generation :",
            "Development of NLP models to perform syntactic and semantic analysis and information extraction in texts. These models are used in various applications such as document management, sentiment analysis, or in text classification projects, where the goal is to categorize or filter information based on its content, like in spam filtering systems.",

            "- 🎯 Intent detection and semantic understanding :",
            "Intent detection and semantic understanding are essential in Natural Language Processing (NLP). They help analyze texts and understand the intent behind each sentence, which is crucial for applications like chatbots and virtual assistants. These techniques also help structure data in a uniform way, facilitating its processing in classification and recommendation systems.",

        "⚡ Intelligent Agents (IA Agents) :",

            "- 🤝 Intelligent chatbots and virtual assistants :",
            "Creation and deployment of chatbots for online assistance, including speech recognition, conversation management, and integration of external APIs to enrich the user experience. These systems provide contextual and personalized responses across messaging platforms.",

        "⚡ GenIA (LLM - Large Language Models) :",

            "- 🛒 Personalized recommendation systems (LLM, Fine-tuning) :",
            "Development of recommendation systems based on large language models (LLM) and fine-tuning techniques. These models analyze user behaviors, preferences, and provide hyper-personalized recommendations in environments such as e-commerce applications, media platforms, and streaming services.",

            "- 🌐 Integration of LLM in intelligent chatbots :",
            "Use of LLM in creating advanced chatbots capable of understanding complex queries and providing contextually and realistically generated responses. These chatbots are used in customer service, technical support, and e-commerce applications."

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },{
      title: " Statistics ",
      fileName: "StatisticsImg",
      skills: [
          "- ⚡ Time Series Analysis and Forecasting:",
          "Application of statistical models (ARIMA, SARIMA, etc.) to predict trends in various domains such as finance, economic forecasting, and inventory management.",

          "- ⚡ Regression and Dimensionality Reduction:",
          "Exploration of relationships between variables and data classification using linear and logistic regression. Identification of key factors through analysis of variance (ANOVA) and simplification of complex data using principal component analysis (PCA).",
    
      ],
      softwareSkills: [
        {
          
            skillName: "R",
            fontAwesomeClassname: "simple-icons:r",
            style: {
              color: "#276DC3", // Official R color
            },
          
          
        },
      ],
    
    },
    {
      title: "Actuarial Science",
      fileName: "ActuarialScienceImg",
      skills: [
        "- ⚡ Actuarial Modeling and Risk Management:",
        "Utilization of probabilistic models (Markov chains, risk models) to forecast economic and financial trends in the insurance and pension sectors.",
        
        "- ⚡ Solvency and Systemic Risk Assessment:",
        "In-depth analysis of financial institutions' solvency using regulatory frameworks like Solvency II and tools such as Value at Risk (VaR).",
    
        "- ⚡ Portfolio Optimization and Simulation:",
        "Implementation of Monte Carlo simulations to evaluate and optimize portfolios, minimizing risks while maximizing returns.",
       
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776ab",  // Python color
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276dc3",  // R color
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",  // Excel color
          },
              
        },
       
        
      ],
    
    },
    {
      title: "DevOps",
      fileName: "DevopsImg",
      skills: [
"- ⚡ Setting up CI/CD processes for continuous integration and continuous deployment with Docker, Jenkins, and Maven. Automating the development pipeline, including code retrieval, Docker image build, and deployment.",        
      ],
      softwareSkills: [
       
        {
          skillName: "DevOps",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F34F29",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            color: "#4E9F3D",
          },
        },
        {
          skillName: "Nexus",
          fontAwesomeClassname: "custom-icon",
          style: {
            backgroundImage: "url('/public/icons/nexusico.ico')", // Chemin relatif à partir du dossier public
            backgroundSize: "cover",
           
          },
        },        
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E65241",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#FF6A00",
          },
        },
      ],
           
    
    },
    

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building interactive and dynamic user interfaces using React and Angular.",
        "⚡ Developing robust backend systems using Spring Boot, Flask, and Node.js.",
        "⚡ Crafting efficient and scalable solutions with Java, Python, and .NET.",
        "⚡ Building innovative web applications with Streamlit for data-driven experiences.",

        "Database Management",
        "⚡ Designing and managing relational databases with MySQL and PostgreSQL.",
        "⚡ Leveraging NoSQL databases like MongoDB for scalable and flexible data storage solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
  
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
          {
            skillName: "Spring Boot",
            fontAwesomeClassname: "simple-icons:spring",
            style: {
              color: "#6DB33F",
            },
          },
          {
            skillName: "Flask",
            fontAwesomeClassname: "simple-icons:flask",
            style: {
              color: "#000000",
            },
          },
          
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#007396",
            },
          },
          {
            skillName: "Python",
            fontAwesomeClassname: "simple-icons:python",
            style: {
              color: "#306998",
            },
          },
          {
            skillName: ".NET",
            fontAwesomeClassname: "simple-icons:dot-net",
            style: {
              color: "#512BD4",
            },
          },
          {
            skillName: "Streamlit",
            fontAwesomeClassname: "simple-icons:streamlit",
            style: {
              color: "#FF4B00",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
              
      ],
    
    },
    
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Islem_Maiti/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/islem_maiiti",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "codechef.com/users/islem_maiiti",
    },
   
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/islemmt",
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: {
        color: "#12100E", // Couleur de la marque Medium (noir ou gris)
        
      },
      profileLink: "https://medium.com/@islem.maiti", // Remplacez par le lien de votre profil Medium
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Risk and Insurance | MANS University - France",
      subtitle: "Master’s in Actuarial Sciences ",
      logo_path: "IRA.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Studying advanced actuarial topics, including Risk Modeling, Insurance Analytics, and Financial Mathematics.",

        "⚡ Developing expertise in Data Analysis, Statistical Methods, and Machine Learning applied to risk assessment and insurance.",

        "⚡ Completing projects on Predictive Analytics for insurance claim forecasts and Risk Management strategies using actuarial tools.",
      ],
      website_link: "https://ira.univ-lemans.fr/fr/index.html",
    },
    {
      title: " Private Engineering and Technology School | ESPRIT - Tunisia",
      subtitle: "Computer Science Engineering Studies",
      logo_path: "ESPRIT.png",
      alt_name: "Indiana University Bloomington",
      duration: "2022 - Present",
      descriptions: [
      "⚡ Studied at ESPRIT, part of the Honoris United Universities network, renowned for fostering innovation and global academic excellence.",

      "⚡ Specialized in artificial intelligence, software development, and cloud technologies through coursework and hands-on projects.",

      "⚡ Actively engaged in collaborative engineering projects, highlighting strong problem-solving and teamwork skills.",
        ],
      website_link: "https://esprit.tn/",
    },
    {
      title: " Faculty of Sciences of Tunis | El Manar - Tunisia ",
      subtitle: "Preparatory Cycle for Engineering Studies",
      logo_path: "FST.png",
      alt_name: "Indiana University Bloomington",
      duration: "2020 - 2022",
      descriptions: [
      "⚡ Completed a rigorous preparatory program focused on advanced mathematics, physics, and engineering sciences.",

      "⚡ Developed a strong foundation in analytical thinking , essential for succeeding in engineering disciplines.",
      ],
      website_link: "https://fst.rnu.tn/fr",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MWEPQ568T2MM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Natural Language Processing (NLP)",
      subtitle: " ",
      logo_path: "Nvidia_logo.svg.png",
      // certificate_link:
        // "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "MLOps | Machine Learning Operations Specialization",
      subtitle: "  ",
      logo_path: "Duke.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    
    {
      title: "Microsoft Azure Cloud Services",
      subtitle: "Microsoft Azure",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FN82CJ3I6JIG",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Azure Management Tools and Security Solutions",
      subtitle: "Microsoft Azure",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/HRF6XL5K25HR",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Azure Services and Lifecycles",
      subtitle: "Microsoft Azure",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Z0BVUZRDOQ8X",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Preparing for the AZ-900 Microsoft Azure Fundamentals Exam",
      subtitle: "Microsoft Azure",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GXOONMD40FL5",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Service-Oriented Architecture",
      subtitle: "- Romeo Kienzler",
      logo_path: "Alberta.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: " ",
      logo_path: "deeplearning_ai_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: " Internship and Volunteership",
  description:
  "My internships have been instrumental in honing my expertise in my career. These experiences have provided opportunities to design and implement innovative solutions while addressing real-world challenges. In addition to my technical roles, my volunteership experiences have strengthened my leadership, teamwork, and organizational skills, allowing me to make a positive impact within diverse communities.",  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        
       
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Innovation Elite council.",
          company_url: "https://www.linkedin.com/company/elite-council-consulting/posts/?feedView=all",
          logo_path: "codeclause.jpg",
          duration: "Septembre 2024 - Decembre 2024",
          location: "Tunis, Tunisia",
          description:
          "⭐  Developed a Django web application to automate CV selection using NLP techniques such as OCR and Named Entity Recognition (NER) for extracting and analyzing data from PDF and Word resumes. The project leveraged advanced models like LLM and SentenceTransformers to enhance selection accuracy, reduce manual review time, and streamline the recruitment process, ultimately improving efficiency in the hiring workflow.      ⚡ Key Skills: Django, LLM, OCR, NER, SentenceTransformers.",     
            color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "Tunisian National Olympic Committee.",
          company_url: "http://www.cnot.org.tn/",
          logo_path: "cnot_logo.png",
          duration: "July 2024 - Septembre 2024",
          location: "Tunis, Tunisia",
          description:
          "⭐ Designed and developed an intelligent chatbot to provide comprehensive support for athletes in technical, medical, and nutritional domains. The project utilized RASA for dialogue management and natural language processing to ensure smooth and intuitive user interactions. Retrieval-Augmented Generation (RAG) techniques were integrated to enhance the chatbot’s responses with relevant document-based information. A speech recognition feature was also implemented to enable effortless voice-based communication. The system was deployed using Streamlit,Flask with MySQL utilized for efficient data storage and management.⚡ Key Skills: NLP, Speech Recognition, Streamlit, Google Translate API, RAG, RASA, MySQL.",
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "CodeClause",
          company_url:
            "https://internship.codeclause.com/",
          logo_path: "codeclause_logo.jpg",
          duration: "January 2024 - January 2024",
          location: "Work From Home",
          description:
          "⭐ Developed a mask detection system capable of classifying individuals based on three categories: wearing a mask correctly, not wearing a mask, and wearing a mask incorrectly. The system utilized deep learning techniques and advanced computer vision models to achieve high accuracy in real-time detection. Leveraged RCNN for object detection and ResNet50 as the backbone for feature extraction, while PyTorch was employed for model development and training.⚡ Key Skills: PyTorch, RCNN, ResNet50.",          color: "#0071C5",
        },
        {
          title: "Full Stack Development Intern",
          company: "Amen Bank",
          company_url: "https://www.amenbank.com.tn/",
          logo_path: "AmenBank_logo.png",
          duration: "July 2023 - August 2023",
          location: "Tunis, Tunisia",
          description:
          "⭐ Designed and developed an application with a user interface for clients and administrators, featuring efficient client account management capabilities. Utilized Spring Boot for backend, Angular for frontend, and MySQL for database management.⚡ Key Skills: Spring Boot, Angular, MySQL, Full Stack Development.",          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Academic Partnerships Center",
          company: "ESPRIT",
          company_url: "httsps://www.linkedin.com/company/esprit-career-center/posts/?feedView=all",
          logo_path: "ESPRIT.png",
          duration: "Sep 2024 - May 2025",
          location: "Ariana, Tunisia",
          description:
            "Contributed to fostering collaborations between ESPRIT and industry partners to create opportunities for students.",
          color: "#D83B01",
        },
        {
          title: "Employability Center ",
          company: "ESPRIT",
          company_url: "https://www.linkedin.com/company/esprit-career-center/posts/?feedView=all",
          logo_path: "ESPRIT.png",
          duration: "Oct 2024 - May 2025",
          location: "Ariana, Tunisia",
          description:
            "Assisted in programs aimed at improving students' employability through workshops and job placement support.",
          color: "#000000",
        },
        {
          title: "Member of the IEEE ESPRIT Club",
          company: "IEEE",
          company_url: "https://esprit.ieee.tn/",
          logo_path: "IEEE.png",
          duration: "Sept 2023 - June 2024",
          location: "Tunis, Tunisia",
          description:
            "Participated in organizing events and initiatives to enhance student engagement and professional development.",
          color: "#4285F4",
        },
        
        {
          title: "Membre of TUNSA Club ",
          company: "ENSI, Tunisie",
          company_url:
            "https://ensi.rnu.tn/Anniv40ENSI/Clubs/TUNSA/index.html",
          logo_path: "ENSI.png",
          duration: "Jan 2023 - May 2023",
          location: "Manouba,Tunisia",
          description:
            "Actively engaged in organizing events and initiatives to support and connect students with industry professionals.",
          color: "#0C9D58",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Fine Tuning Techniques for large language models LLMs",
      createdAt: "2024-11-28T00:00:00Z",
      description: "Paper published in Medium",
      url: "https://medium.com/@islem.maiti/fine-tuning-techniques-for-large-language-models-llms-dfd5e66b5275",
    },
    
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};


const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Fine Tuning Techniques for large language models LLMs",
      createdAt: "2024-11-28T00:00:00Z",
      description: "Paper published in Medium",
      url: "https://medium.com/@islem.maiti/fine-tuning-techniques-for-large-language-models-llms-dfd5e66b5275",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Islem_avatar.png",
    description:
    "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Devops, Full Stack Development.I am also open to part-time job opportunities and freelance projects.",
},
  blogSection: {
    title: "Address",
    subtitle:" El Ghazella, Ariana, Tunisia",
    link: "https://www.google.com/maps/place/El+Ghazala/@36.8935037,10.1908708,16z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb7254b0ee4f:0x7e87e33674451f9e!8m2!3d36.8950951!4d10.188536!16s%2Fg%2F1ptvwdcx4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
    avatar_image_path: "address_image.svg",
  },
 phoneSection: {
    title: "Phone Number",
    subtitle: "+216 52 206 935",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
