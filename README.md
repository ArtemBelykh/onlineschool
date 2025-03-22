# OnlineSchool

**OnlineSchool** is a modern educational platform designed to facilitate online learning for driving schools. It provides a convenient and interactive experience for both students and instructors.

## Features
- **Custom Branding**: Supports multiple school brands like "Автошкола «Право на Права»" and "Автошкола «Право на Права плюс»".
- **Course Management**: Manage lessons, schedules, and materials efficiently.
- **Student Portal**: Track progress, view schedules, and submit assignments.
- **Admin Dashboard**: Monitor school performance with comprehensive analytics.
- **Interactive Maps**: Integrated Yandex Maps for easy location management.
- **Form Management**: Handle data input using React Hook Form and Masked Inputs.
- **PDF Generation**: Generate reports and certificates using React PDF Renderer.
- **Modern UI**: Powered by Material UI with customizable themes.

## Tech Stack
- **Frontend**: React 18, React Router, React Scroll
- **UI Components**: Material UI, Styled Components
- **Forms**: React Hook Form, IMask
- **Maps**: Yandex Maps Integration
- **PDF Generation**: React PDF Renderer
- **State Management**: React Hooks
- **Animations**: React Spring
- **Testing**: Jest, React Testing Library

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ArtemBelykh/onlineschool.git
    ```  
2. Install dependencies:
    ```bash
    cd onlineschool
    npm install
    ```  
3. Configure environment variables:  
   Create a `.env` file using the `.env.example` template and set your desired variables.

4. Start the application for a specific school:
    ```bash
    npm run start:auto   # For 'Автошкола «Право на Права»'
    npm run start:plus   # For 'Автошкола «Право на Права плюс»'
    ```  

## Build
To build the application for deployment:
```bash
npm run build:auto
npm run build:plus
```  

## Contribution
We welcome contributions! Please submit issues, suggestions, or pull requests through the GitHub repository.