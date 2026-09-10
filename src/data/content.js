export const LOGO_SRC =
  'https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg'

export const HERO_VIDEO = '/hero.mp4'
export const HERO_VIDEO_FALLBACK =
  'https://raw.githubusercontent.com/jxlee007/PROJECT-5-Sundown/main/media/video.mp4'

export const ABOUT_IMAGE =
  'https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg'

export const NAV_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Studio', path: '/studio' },
  { label: 'Contact', path: '/contact' },
]

export const MARQUEE_WORDS = ['EXPERIENCES', 'CONTENT', 'ENVIRONMENTS']

export const PROJECTS = [
  {
    slug: 'play-new-kidvision',
    title: 'Play New Kidvision',
    client: 'Nike',
    category: 'Environment',
    year: '2021',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1698_Nike_Soho_Play-New-Kids_10-27-21_1950.webp',
    description:
      'Giant fuzzy sports balls, larger-than-life stickers, playful neons, and reflective surfaces create an engaging consumer journey through the space.',
  },
  {
    slug: 'soho-nyc',
    title: 'SOHO NYC',
    client: 'Converse',
    category: 'Environment',
    year: '2022',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163d_Copy%20of%20DSC04086.webp',
    description:
      'Interior design of the Converse SoHo store. Sheet metal and RGB lighting star the chevron entry moment, with plywood furniture on casters and custom fixtures.',
  },
  {
    slug: 'makers-studio-hoi',
    title: 'Makers Studio HOI',
    client: 'Nike',
    category: 'Experience',
    year: '2022',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp',
    description:
      'A ten-week experience bringing in makers from all over the world to teach classes on how to craft your own Nike-inspired products.',
  },
  {
    slug: '50th-anniversary',
    title: '50th Anniversary',
    client: 'Nike',
    category: 'Environment',
    year: '2022',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp',
    description:
      'Celebrating Nike’s 50th anniversary in New York through archival storytelling — digital screens mixed with lit imagery and historic details brought to life.',
  },
  {
    slug: 'nyfw-popup',
    title: 'NYFW Popup',
    client: 'Afterpay',
    category: 'Experience',
    year: '2022',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170d_AM704059.webp',
    description:
      'Two-story pop-up during New York Fashion Week featuring nine brands throughout the space, along with interactive moments for guests.',
  },
  {
    slug: 'air-force-1-2021',
    title: 'Air Force 1 2021',
    client: 'Nike',
    category: 'Experience',
    year: '2021',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    description:
      'A retail and event environment built around the Air Force 1 — from concept through installation, with custom fabrication and brand storytelling.',
  },
  {
    slug: 'soho-2023',
    title: 'SOHO 2023',
    client: 'Converse',
    category: 'Environment',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Production, design, and install oversight for the SoHo store opening on Broadway, plus creative support for a new store in Glendale, California.',
  },
  {
    slug: '7pm-in-brooklyn',
    title: '7PM in Brooklyn',
    client: 'Carmelo Anthony',
    category: 'Set Design',
    year: '2024',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/6606dcc1c344d6007601cd83_IMG_0892.JPG',
    description:
      'Set design, fabrication, and propping for Carmelo Anthony’s 7PM in Brooklyn — an intimate, material-rich environment built for story.',
  },
  {
    slug: 'capezio-nyc',
    title: 'Capezio New York',
    client: 'Capezio',
    category: 'Retail',
    year: '2024',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/6605770bec3c2abb85f2366c_Copy%20of%20Capezio-RAW.01_24_56_14.Still043.jpg',
    description:
      'Retail fabrication and design-build for Capezio in New York, translating a heritage dance brand into a tactile, contemporary store environment.',
  },
]

export const FEATURED_PROJECTS = [
  'makers-studio-hoi',
  '50th-anniversary',
  'nyfw-popup',
  'air-force-1-2021',
  'soho-nyc',
  'soho-2023',
  'play-new-kidvision',
].map((slug) => PROJECTS.find((project) => project.slug === slug))

export const SERVICES = [
  {
    id: 'design',
    title: 'Design',
    copy: 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp',
  },
  {
    id: 'project',
    title: 'Project',
    copy: 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170d_AM704059.webp',
  },
  {
    id: 'execution',
    title: 'Execution',
    copy: 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.',
    image:
      'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1698_Nike_Soho_Play-New-Kids_10-27-21_1950.webp',
  },
]

export const CLIENTS = [
  {
    name: 'Nike',
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg',
    copy: 'Retained production support across retail and events in NY, CHI, LA. Creative design, design management, production / project management, and execution of work from concept to installation across the country.',
  },
  {
    name: 'Converse',
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg',
    copy: 'Creative concepting, design, design management, project management, and execution of work from concept to installation across the country. Cross-functional communication and management of third-party partners.',
  },
  {
    name: "Arc'teryx",
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg',
    copy: 'Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.',
  },
  {
    name: 'Hunter',
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg',
    copy: 'Design and production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones, plus thirty-five additional take-downs across the US.',
  },
  {
    name: 'MediaLink',
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg',
    copy: 'Creative, design, and production partner for 2023 CES. Scope included branding identity, assets, and digital content, plus production oversight and installation of client activations for IBM, Delta, Instacart, and more.',
  },
  {
    name: 'Afterpay',
    logo: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg',
    copy: 'Creative, design, and production partner for 2022 NY Fashion Week pop-up space. In partnership with B-Reel: final design, 3D renders, production design, and a two-story pop-up for Crocs, JD Sports, Container Store, and Revolve.',
  },
]

export const CAPABILITIES = [
  'Experiential marketing',
  'Retail environments',
  'Events & pop-ups',
  'Set design & fabrication',
  'Digital content',
  'Production & install',
]
