# Hawkathon - ULM Hackathon Project

## Project Overview
Hawkathon is a web application developed for the ULM Hackathon. This project features a modern, responsive frontend built with React and incorporates ULM's branding and color scheme.

## Features
- Modern, responsive design with ULM branding
- Google Authentication integration
- Clean and professional user interface
- Mobile-friendly layout

## Tech Stack
- React 18.2.0
- Create React App
- @react-oauth/google for Google Authentication
- CSS3 for styling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Cloud Console account (for OAuth setup)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Prasanna401623/Hawkathon.git
cd Hawkathon/hawkathon-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Google Client ID:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here
   ```

4. Start the development server:
```bash
npm start
```

The application will run on `http://localhost:3000`

## Project Structure
```
hawkathon-frontend/
├── public/
│   ├── images/
│   │   └── ULM_Logo.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── GoogleAuth.js
│   │   └── GoogleAuth.css
│   ├── App.js
│   └── index.js
└── package.json
```


## Team Members
- Adhik Adhikari
- Sujal Thapa
- Prabin BK
- Prasanna Jha

## License
This project is licensed under the MIT License - see the LICENSE file for details.
