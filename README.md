# PaintPro - Professional Painting Services

A modern web application for a professional painting service company, built with React and Tailwind CSS.

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
│   ├── images/       # Images imported in components
│   │   ├── logos/    # Brand and partner logos
│   │   ├── services/ # Service-related images
│   │   ├── backgrounds/ # Background images
│   │   └── icons/    # Custom icons
│   └── videos/       # Video assets
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

public/             # Static files served directly
├── images/         # Large, static images
│   ├── interior-service.png
│   ├── exterior-service.png
│   └── commercial-service.png
├── favicon.ico     # Browser icon
├── index.html      # HTML entry point
├── manifest.json   # PWA manifest
└── robots.txt      # SEO directives
```

## Asset Organization

The project follows these guidelines for asset organization:

- **src/assets/**: For assets that are:
  - Imported directly into components
  - Need webpack processing and optimization
  - Used frequently across components
  - Examples:
    - Small images (< 100KB)
    - Videos
    - SVG icons
    - Component-specific assets

- **public/**: For:
  - Required web files (index.html, favicon.ico, manifest.json)
  - Large static files (> 1MB)
  - Files that need direct URL access
  - Files that don't need processing

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
- **Validation**:
  - Required fields: Name, Email, Phone, Project Details
  - Optional fields: Project Type
  - Real-time email and phone number format validation
- **Toast Notifications**: Success and error messages
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: ARIA labels and keyboard navigation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
