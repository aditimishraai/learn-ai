# AI Data Flow Tutorial - Installation Guide

This guide will walk you through the process of setting up the AI Data Flow Tutorial website on your local machine or deploying it to a web hosting service.

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (like Visual Studio Code, Sublime Text, or Atom)
- Git (optional, but recommended for version control)
- A web browser

## Local Setup

### Option 1: Basic Setup

1. **Download or clone the repository**

   If you have Git installed:
   ```bash
   git clone https://github.com/yourusername/ai-data-flow-tutorial.git
   cd ai-data-flow-tutorial
   ```

   Alternatively, download and extract the ZIP file from GitHub.

2. **Organize the files**

   Ensure the files are organized according to the project structure:
   ```
   ai-data-flow-tutorial/
   ├── index.html
   ├── data-sources.html
   ├── data-engineering.html
   ├── ai-components.html
   ├── ai-applications.html
   ├── architecture.html
   ├── assets/
   │   ├── css/
   │   │   ├── styles.css
   │   │   └── responsive.css
   │   ├── js/
   │   │   ├── main.js
   │   │   └── architecture.js
   │   └── images/
   │       └── placeholder/
   ├── examples/
   │   └── code-samples/
   └── README.md
   ```

3. **Open the website locally**

   Simply open the `index.html` file in your web browser:
   - Double-click the file in your file explorer
   - Or use the browser's "Open File" option

### Option 2: Using a Local Development Server (Recommended)

Using a local server provides better performance and avoids potential CORS issues:

1. **Python HTTP Server**

   If you have Python installed:

   ```bash
   # Python 3
   python -m http.server

   # Python 2
   python -m SimpleHTTPServer
   ```

   Then open `http://localhost:8000` in your browser.

2. **Node.js HTTP Server**

   If you have Node.js installed:

   ```bash
   # Install http-server globally
   npm install -g http-server

   # Run the server
   http-server
   ```

   Then open `http://localhost:8080` in your browser.

3. **VS Code Live Server**

   If you're using Visual Studio Code:
   
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## Extracting HTML from Artifacts

If you're starting with the artifacts created in our conversation:

1. **Create the project directory structure**

   ```bash
   mkdir -p ai-data-flow-tutorial/assets/{css,js,images/placeholder} examples/code-samples
   ```

2. **Extract HTML content**

   For each HTML artifact (data-flow-tutorial, data-sources-page, etc.):
   - Copy the HTML content from the artifact
   - Create the corresponding HTML file in the project root
   - Save the content to the file

3. **Extract CSS and JavaScript**

   - Extract the `<style>` sections from HTML files and save them to:
     - `assets/css/styles.css`
     - `assets/css/responsive.css`
   
   - Extract the `<script>` sections and save them to:
     - `assets/js/main.js`
     - `assets/js/architecture.js`

4. **Update file references**

   In each HTML file, replace internal styles and scripts with external references:

   ```html
   <!-- Remove internal styles -->
   <style>...</style>
   
   <!-- Add external stylesheet references -->
   <link rel="stylesheet" href="assets/css/styles.css">
   <link rel="stylesheet" href="assets/css/responsive.css">
   
   <!-- Remove internal scripts -->
   <script>...</script>
   
   <!-- Add external script references -->
   <script src="assets/js/main.js"></script>
   <script src="assets/js/architecture.js"></script>
   ```

## Customization

### 1. Updating Content

To update the content of the tutorial:

- Edit the HTML files directly to modify text and structure
- Ensure navigation links remain consistent across all pages

### 2. Custom Styling

To customize the appearance:

- Modify `assets/css/styles.css` for general styles
- Update `assets/css/responsive.css` for responsive design adjustments

### 3. Adding New Pages

To add a new page to the tutorial:

1. Create a new HTML file in the project root
2. Copy the structure from an existing page as a template
3. Update the content as needed
4. Add navigation links to the new page in all other HTML files

## Deployment

### GitHub Pages

1. Push your repository to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-data-flow-tutorial.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Choose "main" branch as the source
   - Click "Save"

### Netlify

1. Create a free Netlify account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings (not needed for this static site)
5. Click "Deploy site"

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Choose your Firebase project or create a new one
   - Set public directory to the project root (.)
   - Configure as a single-page app: No
   - Set up automatic builds and deploys: No

4. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - If you see CORS errors in the console, use a local server instead of opening files directly

2. **Broken Links**
   - Ensure all file paths are correct and consistent
   - Check for case sensitivity issues in filenames

3. **JavaScript Not Working**
   - Check the browser console for errors
   - Verify that script tags are correctly placed at the end of the body

4. **Responsive Design Issues**
   - Test on multiple devices and browsers
   - Use browser developer tools to debug responsive layout

### Getting Help

If you encounter issues with this tutorial:

1. Check the GitHub repository for open issues or create a new one
2. Consult web development forums or communities
3. Refer to documentation for specific deployment platforms

## Next Steps

After successful installation, consider:

1. Adding additional content specific to your AI learning goals
2. Implementing a search functionality for better navigation
3. Adding user authentication for private sections
4. Integrating with a backend for dynamic content

---

Happy learning and exploring the AI Data Flow ecosystem!