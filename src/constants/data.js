// Import service images
import interiorService from '../assets/images/services/interior-service.png';
import exteriorService from '../assets/images/services/exterior-service.png';
import commercialService from '../assets/images/services/commercial-service.png';

// Import testimonial images
import testimonial1 from '../assets/images/testimonials/testimonial-1.png';
import testimonial2 from '../assets/images/testimonials/testimonial-2.png';
import testimonial3 from '../assets/images/testimonials/testimonial-3.png';
import testimonial4 from '../assets/images/testimonials/testimonial-4.png';

export const SERVICES = [
  {
    title: 'Interior Painting',
    description: 'Professional interior painting services for homes and businesses',
    image: interiorService,
    features: [
      'Wall preparation and repairs',
      'Premium paint selection',
      'Clean and precise execution',
      'Furniture protection',
      'Post-painting cleanup'
    ]
  },
  {
    title: 'Exterior Painting',
    description: 'Expert exterior painting to protect and beautify your property',
    image: exteriorService,
    features: [
      'Surface preparation',
      'Weather-resistant paints',
      'Complete exterior coverage',
      'Property protection',
      'Long-lasting finish'
    ]
  },
  {
    title: 'Commercial Painting',
    description: 'Large-scale painting solutions for commercial properties',
    image: commercialService,
    features: [
      'Minimal business disruption',
      'Schedule flexibility',
      'Safety compliance',
      'Project management',
      'Quality assurance'
    ]
  }
];

export const PAINT_TYPES = [
  {
    name: 'Interior Paints',
    description: 'Premium quality paints for indoor spaces',
    features: ['Low VOC', 'Easy application', 'Excellent coverage', 'Washable finish']
  },
  {
    name: 'Exterior Paints',
    description: 'Durable paints for outdoor protection',
    features: ['Weather resistant', 'UV protection', 'Long-lasting', 'Color retention']
  },
  {
    name: 'Specialty Finishes',
    description: 'Unique finishes for special applications',
    features: ['Textured options', 'Metallic finishes', 'Anti-bacterial', 'High durability']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Contractor, Indore',
    image: testimonial1,
    text: 'The team at FloridPaints transformed our home completely. Their attention to detail and professional approach made the entire process smooth and hassle-free. The quality of paint and workmanship is exceptional!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Home Owner, Indore',
    image: testimonial2,
    text: 'I was amazed by the color selection process. Their color expert helped me choose the perfect shade for each room. The paint quality is superb, and the finish looks absolutely stunning. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'VP, Financial Services, Indore',
    image: testimonial3,
    text: 'Outstanding service from start to finish! The team was punctual, professional, and the results exceeded our expectations. Our office looks brand new with the fresh paint job.',
    rating: 5
  },
  {
    id: 4,
    name: 'Anubha Seth',
    location: 'Business Owner, Indore',
    image: testimonial4,
    text: 'The durability of the paint is impressive. Even after a year, the colors look as fresh as day one. Their expertise in color combinations really helped us create the perfect ambiance.',
    rating: 5
  }
]; 