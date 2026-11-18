import profilePhoto from "../../photos/profile.jpeg";

const photoModules = import.meta.glob(
  "../../photos/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const galleryImages = Object.entries(photoModules)
  .filter(([path]) => !path.endsWith("/profile.jpeg"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const label = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]+/g, " ");

    return {
      src,
      alt: `Alok Kumar Rai — ${label}`
    };
  });

export const siteContent = {
  profile: {
    name: "Alok Kumar Rai",
    role: "Political Affairs | Digital Media | Parliamentary Affairs | Government Coordination",
    tagline:
      "Roots in Agriculture. Experience in Organisation. Understanding of Governance. Commitment to Nation.",
    photo: profilePhoto,
    photoAlt: "Alok Kumar Rai"
  },

  closing: "From the Roots of Rural India to the Institutions of National Governance.",

  sections: [
    {
      id: "about",
      label: "About Me",
      heading: "About Me",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "Alok Kumar Rai is a political, organisational and parliamentary affairs professional with experience across political institutions, digital media, election management, parliamentary processes and government administration.",
            "His professional journey reflects a diverse understanding of grassroots India, political organisations, digital communication, electoral processes and the functioning of government institutions.",
            "Coming from a farming family with ancestral roots in Tutuwari village, Ballia district, Uttar Pradesh, he takes pride in his agricultural heritage and the values of hard work, simplicity, discipline and dedication that it represents.",
            "Over the years, he has been associated with institutional development, social media initiatives, political organisation, election campaign management, parliamentary affairs and ministerial coordination."
          ]
        }
      ]
    },
    {
      id: "roots",
      label: "My Roots",
      heading: "My Roots – A Proud Farming Heritage",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "My roots belong to Tutuwari village in Ballia district, Uttar Pradesh, where generations of my family have been connected with agriculture.",
            "I take immense pride in belonging to a farming family. Agriculture is not merely a part of my family's history; it is our heritage, identity and connection with the land.",
            "The values of hard work, patience, simplicity, resilience and commitment have shaped my outlook towards life and public service.",
            "Although my professional journey has taken me through political organisations, digital platforms, Parliament and the Government of India, my connection with my village and agricultural roots remains an integral part of my identity."
          ]
        },
        {
          type: "quote",
          text: "My roots are in the soil, my journey is through public service, and my vision is connected with the nation."
        }
      ]
    },
    {
      id: "journey",
      label: "Professional Journey",
      heading: "Professional Journey",
      blocks: [
        {
          type: "jobs",
          items: [
            {
              title: "Rambhau Mhalgi Prabodhini",
              role: "Project Coordinator",
              description:
                "Began my professional journey with Rambhau Mhalgi Prabodhini, gaining exposure to institutional development, project coordination, organisational activities and political training initiatives.",
              areas: [
                "Project and programme coordination.",
                "Institutional and organisational development.",
                "Political training and capacity-building initiatives.",
                "Coordination of institutional activities."
              ]
            },
            {
              title: "Association of Brilliant Minds (ABM) – 2017",
              role: "Election Campaign & Strategic Planning",
              description:
                "Associated with the Association of Brilliant Minds during the 2017 election campaign, contributing to electoral planning, campaign strategy and organisational coordination.",
              areas: [
                "Election campaign planning.",
                "Electoral strategy and management.",
                "Organisational and field-level coordination.",
                "Campaign execution and communication.",
                "Understanding electoral processes and political dynamics."
              ]
            },
            {
              title: "Government of Uttar Pradesh",
              role: "Social Media Development & Digital Communication",
              description:
                "Associated with social media development and digital communication initiatives during the Government of Uttar Pradesh under the leadership of Hon'ble Chief Minister Shri Yogi Adityanath.",
              areas: [
                "Social media development initiatives.",
                "Digital communication and online outreach.",
                "Coordination of social media activities.",
                "Digital platforms and public information dissemination."
              ]
            },
            {
              title: "Bharatiya Janata Party (BJP) – IT Cell",
              role: "Digital Organisation & IT Coordination",
              description:
                "Subsequently associated with the BJP IT Cell, gaining experience in digital organisational activities, social media coordination and technology-enabled political communication.",
              areas: [
                "IT Cell organisational activities.",
                "Digital communication coordination.",
                "Social media management.",
                "Online outreach and digital platforms.",
                "Technology-enabled organisational coordination."
              ]
            },
            {
              title: "Parliamentary Affairs",
              role: "Parliamentary Coordination & Support",
              description:
                "Developed experience in parliamentary affairs and the functioning of India's parliamentary institutions, supporting Members of Parliament in understanding and carrying out their parliamentary responsibilities.",
              areas: [
                "Parliamentary rules and procedures.",
                "Lok Sabha and Rajya Sabha proceedings.",
                "Parliamentary Questions and Question Hour coordination.",
                "Legislative and parliamentary business.",
                "Assistance and coordination relating to MPs' parliamentary responsibilities."
              ]
            },
            {
              title: "Government of India",
              role: "Ministerial, Administrative & Parliamentary Coordination",
              description:
                "Worked closely with a Union Minister in the Government of India, gaining valuable experience in ministerial administration, parliamentary coordination and inter-departmental communication.",
              areas: [
                "Ministerial office coordination.",
                "Parliamentary and administrative affairs.",
                "Coordination with ministries and government departments.",
                "Preparation and coordination of official meetings.",
                "Government programmes and official engagements.",
                "Communication and liaison with institutional stakeholders.",
                "Support in the execution of ministerial responsibilities."
              ]
            }
          ]
        },
        {
          type: "expertise",
          title: "Core Areas of Expertise",
          items: [
            "Political & Organisational Management",
            "Election Campaign Planning & Strategy",
            "Social Media Development & Digital Communication",
            "Political IT & Digital Organisation",
            "Parliamentary Affairs & Legislative Procedures",
            "Government & Ministerial Coordination",
            "Administrative & Institutional Management",
            "Project & Programme Coordination",
            "Public Policy & Governance",
            "Stakeholder Management"
          ]
        }
      ]
    },
    {
      id: "philosophy",
      label: "Philosophy",
      heading: "My Professional Philosophy",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "I believe that effective public service requires a strong understanding of grassroots realities, political institutions, democratic processes and government administration.",
            "My professional experiences across different institutions have provided me with an opportunity to understand how organisations function, how electoral and digital communication systems operate, how Parliament conducts its business and how government institutions coordinate to fulfil public responsibilities.",
            "I remain committed to learning, institutional development, effective coordination and contributing to nation-building."
          ]
        }
      ]
    },
    {
      id: "identity",
      label: "Identity",
      heading: "My Identity",
      blocks: [
        {
          type: "identity",
          items: [
            "A proud member of a farming family from Tutuwari, Ballia, Uttar Pradesh.",
            "A professional with experience in institutional and political organisation.",
            "An individual associated with social media development and digital organisational activities.",
            "A professional with exposure to election management and parliamentary affairs.",
            "A person experienced in ministerial and government coordination."
          ]
        }
      ]
    },
    {
      id: "gallery",
      label: "Gallery",
      heading: "Gallery",
      blocks: [
        {
          type: "gallery",
          images: galleryImages
        }
      ]
    }
  ]
};
