import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const routes = [
  {
    path: 'about',
    title: 'About Smart Homes Builders And Designers | Architectural Design Company in Palakkad',
    description: 'Learn about Smart Homes Builders And Designers, providing thoughtful architectural planning, house design, building design and construction-related solutions in Palakkad, Kerala.',
    canonical: 'https://smarthomesbuilders.in/about',
    ogImage: 'https://smarthomesbuilders.in/images/hero/hero-about.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Smart Homes Builders And Designers",
      "description": "Learn about Smart Homes Builders And Designers, providing thoughtful architectural planning, house design, building design and construction-related solutions in Palakkad, Kerala.",
      "url": "https://smarthomesbuilders.in/about"
    }
  },
  {
    path: 'services',
    title: 'Architectural Design & Construction Services in Palakkad | Smart Homes',
    description: 'Explore architectural design, residential and commercial building design, interior design, 3D elevation, renovation, building approvals and construction services in Palakkad.',
    canonical: 'https://smarthomesbuilders.in/services',
    ogImage: 'https://smarthomesbuilders.in/images/hero/hero-services.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Architectural Design and Construction Services in Palakkad",
      "url": "https://smarthomesbuilders.in/services"
    }
  },
  {
    path: 'services/architectural-design',
    title: 'Architectural Design Services in Palakkad | Smart Homes Builders',
    description: 'Professional architectural design services in Palakkad by Smart Homes Builders. Expert architectural planning, custom house designs, and building plan consultation in Kerala.',
    canonical: 'https://smarthomesbuilders.in/services/architectural-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/architectural-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Architectural Design",
      "serviceType": "Architectural Design Services in Palakkad",
      "description": "Professional architectural design services in Palakkad by Smart Homes Builders.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/architectural-design"
    }
  },
  {
    path: 'services/residential-building-design',
    title: 'Residential Building Designers in Palakkad | Modern House Design',
    description: 'Leading residential building designers in Palakkad creating modern house designs, custom family residences, and sustainable residential architecture tailored to Kerala\'s climate.',
    canonical: 'https://smarthomesbuilders.in/services/residential-building-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/residential-building-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Residential Building Design",
      "serviceType": "Residential Building Designers in Palakkad",
      "description": "Leading residential building designers in Palakkad creating modern house designs.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/residential-building-design"
    }
  },
  {
    path: 'services/commercial-building-design',
    title: 'Commercial Building Designers in Palakkad | Architectural Planning',
    description: 'Specialized commercial building designers in Palakkad offering strategic architectural planning, office complexes, retail spaces, and commercial development solutions in Kerala.',
    canonical: 'https://smarthomesbuilders.in/services/commercial-building-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/commercial-building-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Building Design",
      "serviceType": "Commercial Building Designers in Palakkad",
      "description": "Specialized commercial building designers in Palakkad offering strategic architectural planning.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/commercial-building-design"
    }
  },
  {
    path: 'services/interior-design',
    title: 'Interior Designers in Palakkad | Home & Residential Interior Design',
    description: 'Creative interior designers in Palakkad crafting inspiring home and residential interior spaces, bespoke cabinetry, ambient lighting, and elegant living environments in Kerala.',
    canonical: 'https://smarthomesbuilders.in/services/interior-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/interior-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Interior Design",
      "serviceType": "Interior Designers in Palakkad",
      "description": "Creative interior designers in Palakkad crafting inspiring home and residential interior spaces.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/interior-design"
    }
  },
  {
    path: 'services/3d-elevation',
    title: '3D Elevation Designers in Palakkad | 3D House Front Elevation',
    description: 'Photorealistic 3D house elevation design in Palakkad by Smart Homes. Visualize contemporary Kerala house exteriors, front facades, and material finishes before construction.',
    canonical: 'https://smarthomesbuilders.in/services/3d-elevation',
    ogImage: 'https://smarthomesbuilders.in/images/services/3d-elevation.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "3D Elevation",
      "serviceType": "3D Elevation Designers in Palakkad",
      "description": "Photorealistic 3D house elevation design in Palakkad by Smart Homes.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/3d-elevation"
    }
  },
  {
    path: 'services/landscape-design',
    title: 'Landscape Design in Palakkad | Residential Garden Architecture',
    description: 'Thoughtful residential landscape design in Palakkad integrating lush tropical flora, paved walkways, outdoor living zones, and eco-friendly garden spaces for Kerala residences.',
    canonical: 'https://smarthomesbuilders.in/services/landscape-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/landscape-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Landscape Design",
      "serviceType": "Landscape Design in Palakkad",
      "description": "Thoughtful residential landscape design in Palakkad integrating lush tropical flora.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/landscape-design"
    }
  },
  {
    path: 'services/renovation-remodeling',
    title: 'Home Renovation in Palakkad | House Remodeling & Extension Services',
    description: 'Professional home renovation in Palakkad and house remodeling services. Structural enhancements, vertical additions, and contemporary modernization of traditional Kerala homes.',
    canonical: 'https://smarthomesbuilders.in/services/renovation-remodeling',
    ogImage: 'https://smarthomesbuilders.in/images/services/renovation-remodeling.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Renovation & Remodeling",
      "serviceType": "Home Renovation in Palakkad",
      "description": "Professional home renovation in Palakkad and house remodeling services.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/renovation-remodeling"
    }
  },
  {
    path: 'services/building-permit-approval',
    title: 'Building Permit Services in Palakkad | Plan Approval Assistance',
    description: 'Reliable building permit services in Palakkad. Complete building permit drawings, KMBR/KPBR regulatory compliance, and statutory documentation support for smooth municipal approvals.',
    canonical: 'https://smarthomesbuilders.in/services/building-permit-approval',
    ogImage: 'https://smarthomesbuilders.in/images/services/building-permit-approval.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Building Permit & Approval",
      "serviceType": "Building Permit Services in Palakkad",
      "description": "Reliable building permit services in Palakkad.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/building-permit-approval"
    }
  },
  {
    path: 'services/construction-supervision',
    title: 'Construction Supervision in Palakkad | Building Site Supervision',
    description: 'Rigorous construction supervision in Palakkad by experienced engineers. Quality checks, blueprint adherence, material inspection, and timeline tracking at your building site.',
    canonical: 'https://smarthomesbuilders.in/services/construction-supervision',
    ogImage: 'https://smarthomesbuilders.in/images/services/construction-supervision.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Construction Supervision",
      "serviceType": "Construction Supervision in Palakkad",
      "description": "Rigorous construction supervision in Palakkad by experienced engineers.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/construction-supervision"
    }
  },
  {
    path: 'services/estimation-costing',
    title: 'Building Construction Estimate in Palakkad | Cost Estimation',
    description: 'Detailed building construction estimate in Palakkad. Accurate Bill of Quantities (BOQ), material cost forecasting, and budget planning for residential and commercial builds in Kerala.',
    canonical: 'https://smarthomesbuilders.in/services/estimation-costing',
    ogImage: 'https://smarthomesbuilders.in/images/services/estimation-costing.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Estimation & Costing",
      "serviceType": "Building Construction Estimate in Palakkad",
      "description": "Detailed building construction estimate in Palakkad.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/estimation-costing"
    }
  },
  {
    path: 'services/turnkey-construction',
    title: 'Turnkey Construction in Palakkad | Complete Home Construction Services',
    description: 'End-to-end turnkey construction in Palakkad, Kerala. Complete home construction from foundation to final finish with transparent pricing, quality craftsmanship, and timely handover.',
    canonical: 'https://smarthomesbuilders.in/services/turnkey-construction',
    ogImage: 'https://smarthomesbuilders.in/images/services/turnkey-construction.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Turnkey Construction",
      "serviceType": "Turnkey Construction in Palakkad",
      "description": "End-to-end turnkey construction in Palakkad, Kerala.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/turnkey-construction"
    }
  },
  {
    path: 'services/villa-design',
    title: 'Villa Design in Palakkad | Modern & Luxury Villa Architecture',
    description: 'Exclusive villa design in Palakkad by Smart Homes Builders. Bespoke luxury villa architecture, open-concept tropical living, double-height spaces, and serene landscaped retreats in Kerala.',
    canonical: 'https://smarthomesbuilders.in/services/villa-design',
    ogImage: 'https://smarthomesbuilders.in/images/services/villa-design.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Villa Design",
      "serviceType": "Villa Design in Palakkad",
      "description": "Exclusive villa design in Palakkad by Smart Homes Builders.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/"
      },
      "url": "https://smarthomesbuilders.in/services/villa-design"
    }
  },
  {
    path: 'gallery',
    title: 'House Designs & Architectural Projects in Kerala | Smart Homes Builders',
    description: 'Explore house designs, architectural projects, modern building concepts and residential design work by Smart Homes Builders And Designers in Palakkad, Kerala.',
    canonical: 'https://smarthomesbuilders.in/gallery',
    ogImage: 'https://smarthomesbuilders.in/images/hero/hero-gallery.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "House Designs & Architectural Projects in Kerala",
      "url": "https://smarthomesbuilders.in/gallery"
    }
  },
  {
    path: 'contact',
    title: 'Contact Smart Homes Builders And Designers | Palakkad, Kerala',
    description: 'Contact Smart Homes Builders And Designers for architectural design, house plans, building design, interior design and construction-related services in Palakkad, Kerala.',
    canonical: 'https://smarthomesbuilders.in/contact',
    ogImage: 'https://smarthomesbuilders.in/images/hero/hero-contact.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Smart Homes Builders And Designers",
      "url": "https://smarthomesbuilders.in/contact"
    }
  }
];

routes.forEach((route) => {
  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace meta title
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);

  // Replace meta description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

  // Replace canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`);

  // Replace OG tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${route.ogImage}" />`);

  // Replace Twitter tags
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${route.canonical}" />`);
  html = html.replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${route.ogImage}" />`);

  // Replace Structured Data Schema
  if (route.schema) {
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n    </script>`;
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScript);
  }

  // Create target directory and write index.html
  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`Prerendered: ${route.path}/index.html`);
});

console.log('Static route prerendering complete for all 17 canonical URLs.');
