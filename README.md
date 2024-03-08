## StellarBlue Timeseries Data Visualization - React.js

### Introduction

Welcome to the React Timeseries Data Visualization web app! The goal of this project was to show skill in using modern web technologies and to build a responsive, user-friendly interface for visualizing timeseries data with React.js.

This project has a twin-project as well, with the same goals and purposes, but built with Vue.js - please feel free to visit the Github repository on the following link:

[https://github.com/pizzaboi87/stellarblue-vue](https://github.com/pizzaboi87/stellarblue-vue)

### Core Features

#### Framework

This web app is developed using Vite, TypeScript and React.js, a popular frontend library known for its component-based architecture and flexibility.

#### Responsive Design

Tailwind CSS is utilized to ensure the web app is accessible, responsive, and user-friendly across various devices and screen sizes.

#### Data Representation

The web app utilizes Firebase as the backend service for data storage and retrieval. It fetches timeseries datasets from Firebase and visualizes them using ApexCharts, a powerful and customizable charting library.

### Enhanced Features

#### Data Filtering

Implemented a date range picker component that allows users to filter data in the table and chart based on a selected start and end date. Users can easily analyze data trends within specific timeframes.

#### Interactive Data Control

Added checkboxes for each timeseries dataset, enabling users to show or hide specific datasets in the table and chart. This feature provides users with more control over the data they are viewing, enhancing the overall user experience.

### Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

### Running the Application

1. Once the dependencies are installed, run `npm start`.
2. The application will be accessible at `http://localhost:5173`.

### Project Structure

```
├── public
│   ├── favicon.png
│   └── logo.png
├── src
│   ├── components
│   │   ├── Chart.tsx
│   │   ├── DataFilter.tsx
│   │   ├── Failure.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Loading.tsx
│   │   ├── Table.tsx
│   │   └── Toast.tsx
│   ├── context
│   │   ├── DataContext.tsx
│   │   └── ThemeContext.tsx
│   ├── font
│   │   └── code-pro.otf
│   ├── types
│   │   └── types.ts
│   └── utils
│       └── firebase.ts
├── App.tsx
├── index.tsx
├── main.tsx
├── vite-env.d.ts
├── index.css
└── README.md
```

### Resources

- [React Documentation](https://reactjs.org/)
- [ApexCharts Documentation](https://apexcharts.com/docs/react-charts/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

Feel free to reach out if you need further assistance or clarification!
