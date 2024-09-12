# Excel to JSON Converter

## Overview

**Excel to JSON Converter** is a simple, minimalistic web application that allows users to upload Excel files (`.xls` or `.xlsx`) and convert them to JSON format. All processing is done locally on the user's device without any server-side overhead, ensuring fast and secure file conversion.

This project is designed with a focus on minimalism, using **React** and **Tailwind CSS** to deliver a clean and professional user interface. It provides users with a straightforward and efficient way to convert their Excel files into JSON and download the converted files directly.

You can access the live version of this app [here](https://ayeshrodz.github.io/excel-to-json).

## Features

- Upload `.xls` or `.xlsx` Excel files
- Converts the Excel data to JSON format
- Download the converted JSON file
- Fully client-side processing
- Clean and minimalistic design

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **XLSX.js**: JavaScript library for parsing Excel files
- **FileSaver.js**: JavaScript library for saving files client-side
- **GitHub Pages**: Hosting service for static websites

## How to Use the App

1. **Open the Web App**:
   Visit the live version of the app at: [Excel to JSON Converter](https://ayeshrodz.github.io/excel-to-json).

2. **Upload an Excel File**:

   - Click the "Choose File" button in the center of the page.
   - Select a `.xls` or `.xlsx` file from your device.

3. **Convert to JSON**:

   - Once you select a file, the "Convert and Download JSON" button will become active.
   - Click the button to convert your Excel file into JSON format.

4. **Download the JSON File**:
   - After conversion, the JSON file will automatically be downloaded to your device.

## Local Development and Setup

If you'd like to run this project locally or contribute, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ayeshrodz/excel-to-json.git
   ```

2. Navigate to the project directory:

   ```bash
   cd excel-to-json
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Install Tailwind CSS and the required PostCSS and Autoprefixer plugins:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

5. Create the Tailwind CSS configuration file:

   ```bash
   npx tailwindcss init
   ```

6. Update the Tailwind configuration in the `tailwind.config.js` file:

   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

7. Include Tailwind in your CSS:

   Replace the contents of the `src/index.css` file with:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

8. Run the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

### Deployment

To deploy the app to GitHub Pages:

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Update the `package.json` file:

   - Add the `homepage` field:

     ```json
     "homepage": "https://your-username.github.io/your-repo-name",
     ```

   - Add the `predeploy` and `deploy` scripts:

     ```json
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

   The app will be available at `https://your-username.github.io/your-repo-name`.

## Contributions

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
