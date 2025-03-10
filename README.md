# FloridPaints - Premium Painting Services

A modern web application for FloridPaints, offering premium quality paints and professional painting services in Florida.

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

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS with custom animations
- **Form Handling**: Custom form components with validation
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

## Asset Organization

The project follows these guidelines for asset organization:

- **src/assets/**: For assets that are:
  - Imported directly into components
  - Need webpack processing
  - Component-specific images
  - UI elements and icons
  - Examples:
    - Service images
    - Testimonial photos
    - UI icons
    - Brand logos

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/AvinashKharche/florid-paints.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Form Features

The contact form includes several enhanced features:

- **Floating Labels**: Smooth animations for better user experience
- **Validation**: Real-time input validation with error messages
- **Toast Notifications**: Success/error notifications for form submissions
- **Phone Integration**: Click-to-call functionality
- **Project Types**: Optional project type selection with predefined categories

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
