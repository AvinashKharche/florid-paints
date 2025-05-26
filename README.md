# FloridPaints - Premium Painting Services

A modern web application for FloridPaints, offering premium quality paints and professional painting services in Florida. This platform provides an intuitive interface for customers to explore paint colors, request quotes, and schedule professional painting services.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features in Detail](#features-in-detail)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🎨 Modern, responsive design with smooth animations
- 🎯 Interactive color picker with trending, classic, and modern color palettes
- 🏠 Professional painting services showcase
- 📱 Mobile-friendly interface with glass morphism effects
- 🔄 Smooth scrolling navigation
- 📝 Enhanced contact form with:
  - Floating label animations
  - Real-time validation
  - Toast notifications
  - Phone number integration
  - Optional project type selection

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0 with custom animations
- **Form Handling**: Custom form components with validation
- **State Management**: React Context API
- **Animation**: Framer Motion 10.0.0
- **UI Components**: 
  - Reusable button component with variants
  - Form inputs with floating labels
  - Toast notifications
  - Section layouts
  - Icon system

## Project Structure

```
src/
├── assets/           # Static assets
│   └── images/       # Images imported in components
│       ├── logos/    # Brand and partner logos
│       ├── services/ # Service-related images
│       ├── testimonials/ # Testimonial images
│       └── icons/    # Custom icons
├── components/
│   ├── features/     # Feature-specific components
│   │   └── ColorPicker/
│   ├── layout/      # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── SectionLayout.js
│   ├── sections/    # Page sections
│   │   ├── HeroSection.js
│   │   ├── ServicesSection.js
│   │   ├── PaintSelectionSection.js
│   │   ├── TestimonialsSection.js
│   │   └── ContactSection.js
│   └── ui/         # Reusable UI components
│       ├── Button.js
│       ├── FormInput.js
│       ├── FormSelect.js
│       ├── FormTextArea.js
│       ├── Icon.js
│       └── Toast.js
├── hooks/          # Custom hooks
│   ├── useAnimation.js
│   └── useScrollToSection.js
└── constants/     # Application constants
    └── data.js
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/AvinashKharche/florid-paints.git
```

2. Navigate to the project directory:
```bash
cd florid-paints
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables as needed

5. Start the development server:
```bash
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_CONTACT_EMAIL=your_contact_email
```

## Features in Detail

### Color Picker
- Interactive color selection interface
- Trending color palettes
- Classic and modern color combinations
- Save favorite colors
- Share color combinations

### Contact Form
- **Floating Labels**: Smooth animations for better user experience
- **Validation**: Real-time input validation with error messages
- **Toast Notifications**: Success/error notifications for form submissions
- **Phone Integration**: Click-to-call functionality
- **Project Types**: Optional project type selection with predefined categories

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized images for different devices

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code using Prettier

## Deployment

The application can be deployed to various platforms:

1. **Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

2. **Netlify**:
```bash
npm install -g netlify-cli
netlify deploy
```

3. **GitHub Pages**:
```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Process
1. Update the README.md with details of changes if needed
2. Update the documentation if needed
3. Ensure all tests pass
4. Follow the existing code style

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@floridpaints.com or join our Slack channel.
