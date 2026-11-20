import type { ServiceItem, GalleryProject, WhyChooseUsItem, ApproachStep } from '../types';

export const COMPANY_INFO = {
  name: 'Smart Homes Builders and Designers',
  shortName: 'Smart Homes',
  tagline: 'Designing Spaces. Building Dreams.',
  heroDescription: 'Thoughtfully designed spaces and quality construction solutions that turn your vision into reality.',
  aboutIntro: 'Smart Homes Builders and Designers is a full-service architecture and design firm specializing in cost-effective building design.\n\nWe believe that exceptional architecture should be accessible to everyone. Our goal is to create beautiful, functional and thoughtfully planned spaces while respecting our clients\' budgets.\n\nFrom architectural planning and 3D design to interior design, construction supervision and project execution, we bring together experience and creativity to make your dream spaces a reality.',
  mission: 'Our mission is to provide high-quality, cost-effective home extension, renovation and construction solutions.\n\nWhether you are planning additional floors, expanding your kitchen or bathroom, renovating an existing space or building a new home, we bring the experience and expertise needed to make your project successful.\n\nWe are passionate about creating beautiful, functional and comfortable spaces.',
  address: {
    line1: 'Ansar Complex',
    line2: 'Kodikkunnu',
    city: 'Palakkad District',
    state: 'Kerala',
    pincode: '679305',
    country: 'India',
    fullFormatted: 'Ansar Complex, Kodikkunnu, Palakkad District, Kerala – 679305, India'
  },
  emails: [
    'sajeevpakkath@gmail.com',
    'smartbuilders7@gmail.com'
  ],
  phones: [
    { display: '+91 96458 93458', raw: '9645893458', primary: true },
    { display: '+91 95392 21066', raw: '9539221066', primary: false }
  ],
  whatsapp: {
    number: '9645893458',
    url: 'https://wa.me/919645893458',
    defaultMessage: 'Hello Smart Homes Builders and Designers! I would like to inquire about your architectural and construction services.'
  },
  social: {
    facebook: 'https://www.facebook.com/smarthomessajeev/',
    instagram: 'https://www.instagram.com/smart_homes_builders',
    youtube: 'https://www.youtube.com/@smarthomeskodikkunnu'
  },
  map: {
    googleMapsLink: 'https://maps.app.goo.gl/HekMvxzW5Doa8Pwn6',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.654359218698!2d76.223871!3d10.825272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d4c8ef589c37%3A0xe5a3c2ce59265bd1!2sKodikkunnu%2C%20Kerala%20679305!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },
  businessHours: [
    { day: 'Monday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Holiday', isOpen: false }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    description: 'Creative and functional architectural planning tailored to your requirements and available space.',
    image: '/images/services/architectural-design.jpg',
    iconName: 'Compass'
  },
  {
    id: 'residential-building-design',
    title: 'Residential Building Design',
    description: 'Thoughtfully designed homes that balance comfort, functionality and aesthetics.',
    image: '/images/services/residential-building-design.jpg',
    iconName: 'Home'
  },
  {
    id: 'commercial-building-design',
    title: 'Commercial Building Design',
    description: 'Practical and professional building designs for commercial spaces and business requirements.',
    image: '/images/services/commercial-building-design.jpg',
    iconName: 'Building2'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Beautiful and functional interior spaces designed around your lifestyle and preferences.',
    image: '/images/services/interior-design.jpg',
    iconName: 'LayoutGrid'
  },
  {
    id: '3d-elevation',
    title: '3D Elevation',
    description: 'Realistic 3D building elevations that help visualize the exterior appearance of your future property.',
    image: '/images/services/3d-elevation.jpg',
    iconName: 'Box'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Outdoor environments designed to complement your building and enhance the surroundings.',
    image: '/images/services/landscape-design.jpg',
    iconName: 'Trees'
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with carefully planned renovation and remodeling solutions.',
    image: '/images/services/renovation-remodeling.jpg',
    iconName: 'Hammer'
  },
  {
    id: 'building-permit-approval',
    title: 'Building Permit & Approval',
    description: 'Assistance with building permit drawings and approval-related documentation.',
    image: '/images/services/building-permit-approval.jpg',
    iconName: 'FileCheck'
  },
  {
    id: 'construction-supervision',
    title: 'Construction Supervision',
    description: 'Professional supervision to help maintain construction quality and follow approved plans.',
    image: '/images/services/construction-supervision.jpg',
    iconName: 'HardHat'
  },
  {
    id: 'estimation-costing',
    title: 'Estimation & Costing',
    description: 'Practical project estimates and cost planning to support informed building decisions.',
    image: '/images/services/estimation-costing.jpg',
    iconName: 'Calculator'
  },
  {
    id: 'turnkey-construction',
    title: 'Turnkey Construction',
    description: 'Integrated construction solutions from planning through project completion.',
    image: '/images/services/turnkey-construction.jpg',
    iconName: 'Key'
  },
  {
    id: 'villa-design',
    title: 'Villa Design',
    description: 'Distinctive villa designs combining modern architecture, comfort and functionality.',
    image: '/images/services/villa-design.jpg',
    iconName: 'Sparkles'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'Cost-Effective Solutions',
    description: 'Smart architectural planning that maximizes value and keeps construction strictly within your budget.',
    iconName: 'Coins'
  },
  {
    id: 2,
    title: 'Client-Focused Planning',
    description: 'Every layout and design decision is tailored specifically to your family’s routine and aspirations.',
    iconName: 'UserCheck'
  },
  {
    id: 3,
    title: 'Smart Space Utilization',
    description: 'Innovative floor planning eliminating wasted square footage while delivering spacious, breathable rooms.',
    iconName: 'Maximize2'
  },
  {
    id: 4,
    title: 'Vastu Considerations',
    description: 'Harmonious spatial alignment and traditional Vastu principles blended seamlessly into contemporary design.',
    iconName: 'Compass'
  },
  {
    id: 5,
    title: 'Maximum Land Utilization',
    description: 'Thoughtful site layouts engineered to optimize plot topography, setbacks, natural gradients, and solar orientation.',
    iconName: 'Grid'
  },
  {
    id: 6,
    title: 'Quality Architectural Design',
    description: 'Timeless visual aesthetics, clean proportions, structural durability, and refined modern architectural balance.',
    iconName: 'Award'
  },
  {
    id: 7,
    title: 'Safe and Accessible Spaces',
    description: 'Ergonomic circulation, child and elder-friendly ergonomics, non-slip transitions, and universal accessibility.',
    iconName: 'ShieldCheck'
  },
  {
    id: 8,
    title: 'Government Rule Compliance',
    description: 'Meticulous adherence to Kerala Municipality Building Rules (KMBR/KPBR) and statutory norms.',
    iconName: 'FileText'
  },
  {
    id: 9,
    title: 'Protection of Existing Trees & Water Bodies',
    description: 'Eco-conscious site planning designed around existing native trees, slopes, natural wells, and water features.',
    iconName: 'Leaf'
  },
  {
    id: 10,
    title: 'Well-Planned Pathways and Lighting',
    description: 'Strategic passive natural cross-ventilation, daylighting studies, and beautiful ambient evening walkway illumination.',
    iconName: 'Sun'
  }
];

export const OUR_APPROACH: ApproachStep[] = [
  {
    step: 1,
    title: 'Understanding client requirements',
    description: 'We begin every project with thorough discussions to listen closely to your needs, family lifestyle, design preferences, and long-term aspirations.'
  },
  {
    step: 2,
    title: 'Planning according to the available land and budget',
    description: 'We analyze your plot’s unique geometry, orientation, and context while establishing a realistic, transparent budget framework.'
  },
  {
    step: 3,
    title: 'Creating functional and attractive architectural designs',
    description: 'Our team crafts conceptual floor plans and distinctive exterior elevations that unite visual elegance with everyday practicality.'
  },
  {
    step: 4,
    title: 'Utilizing available space efficiently',
    description: 'Every square foot is optimized to provide comfortable circulation, ample storage, and expansive, open living spaces.'
  },
  {
    step: 5,
    title: 'Considering Vastu requirements',
    description: 'We respect traditional Vastu principles, orienting key spaces such as the master bedroom, kitchen, and entrance harmoniously.'
  },
  {
    step: 6,
    title: 'Following applicable government building regulations',
    description: 'Drawings and structural plans are drafted in full compliance with Kerala building rules and local municipality requirements for smooth approvals.'
  },
  {
    step: 7,
    title: 'Maintaining quality throughout the design and construction process',
    description: 'From initial blueprints through site supervision and final handover, we oversee craftsmanship and material standards to ensure lasting value.'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    title: 'Modern Kerala Residential House Exterior',
    subtitle: 'Contemporary Tropical Residence with Cantilevered Louvers',
    category: 'Residential Exterior',
    image: '/images/gallery/project-1.jpg'
  },
  {
    id: 2,
    title: 'Contemporary Luxury Villa Elevation',
    subtitle: 'Minimalist Architectural Geometry & Stone Finishes',
    category: 'Villa Elevation',
    image: '/images/gallery/project-2.jpg'
  },
  {
    id: 3,
    title: 'Elegant Modern Home Interior',
    subtitle: 'Open-Concept Living with Warm Teak Accents & Ambient Lighting',
    category: 'Interior Architecture',
    image: '/images/gallery/project-3.jpg'
  },
  {
    id: 4,
    title: 'Commercial Building Architecture',
    subtitle: 'Sleek Commercial Facade with Glass Curtain & Louvers',
    category: 'Commercial Architecture',
    image: '/images/gallery/project-4.jpg'
  },
  {
    id: 5,
    title: 'Beautiful Landscaped Residential Exterior',
    subtitle: 'Harmonious Landscape with Native Flora & Natural Stone Pathways',
    category: 'Landscape & Exterior',
    image: '/images/gallery/project-5.jpg'
  },
  {
    id: 6,
    title: 'Modern House Renovation / Remodeled Home',
    subtitle: 'Complete Structural Transformation of an Existing Family Residence',
    category: 'Renovation & Remodeling',
    image: '/images/gallery/project-6.jpg'
  }
];
