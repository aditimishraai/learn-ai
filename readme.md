# AI Data Flow Architecture Tutorial

An interactive educational website that explains the complete data flow ecosystem for AI applications, from data sources to final AI applications.

![AI Data Flow Architecture Tutorial](assets/images/preview.png)

## 🌟 Features

- **Interactive Architecture Visualization**: Click on any component to explore its role in the AI ecosystem
- **Comprehensive Learning Guide**: Step-by-step instructions for creating AI projects
- **Detailed Component Explanations**: In-depth coverage of data sources, data engineering, AI components, and applications
- **Code Examples**: Practical code snippets for data processing, model building, and deployment
- **Responsive Design**: Works on all devices from desktop to mobile

## 📋 Project Structure

```
ai-data-flow-tutorial/
├── index.html                  # Main landing page
├── data-sources.html           # Data Sources page
├── data-engineering.html       # Data Engineering page
├── ai-components.html          # AI Components page
├── ai-applications.html        # AI Applications page
├── architecture.html           # Interactive Architecture page
├── assets/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   └── responsive.css      # Responsive design rules
│   ├── js/
│   │   ├── main.js             # Main JavaScript file
│   │   └── architecture.js     # Architecture interaction logic
│   └── images/
│       ├── preview.png         # Preview image for README
│       └── placeholder/        # Placeholder images
├── examples/
│   ├── code-samples/           # Example code snippets
│   └── project-templates/      # Project starter templates
└── README.md                   # This file
```

## 🚀 Getting Started

### Option 1: Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ai-data-flow-tutorial.git
   cd ai-data-flow-tutorial
   ```

2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

### Option 2: Set Up with a Simple HTTP Server

For better performance and to avoid CORS issues:

1. Install a simple HTTP server if you don't have one:
   ```bash
   # Using Python
   pip install http-server
   
   # Or using Node.js
   npm install -g http-server
   ```

2. Run the server:
   ```bash
   # Using Python
   python -m http.server
   
   # Or using Node.js
   http-server
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Option 3: Deploy to a Static Site Hosting Service

You can deploy this project to services like:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 🔧 Customization

### Modifying Content

- Edit the HTML files directly to update content
- Modify `styles.css` to change the appearance
- Update `architecture.js` to change the interactive behavior

### Adding New Components

To add a new component to the architecture:

1. Add the component data in `architecture.js`:
   ```javascript
   const newComponent = {
     title: 'New Component',
     icon: 'NC',
     description: 'Description of the new component',
     features: ['Feature 1', 'Feature 2', 'Feature 3'],
     color: '#hexcolor'
   };
   ```

2. Add the HTML structure in the appropriate section of `architecture.html`:
   ```html
   <div class="arch-box your-category-box" data-target="new-component">
       <div class="arch-title">
           <span class="arch-icon">NC</span>
           New Component
       </div>
       <p class="arch-description">Description of the new component.</p>
   </div>
   ```

### Adding New Pages

To add a new page:

1. Create a new HTML file using the existing pages as a template
2. Add a link to the new page in the navigation section of all pages
3. Update the responsive styles if needed

## 📚 Learning Path

This tutorial is designed to be followed in this order:

1. **Start with the Overview** on the main page to understand the big picture
2. **Explore the Interactive Architecture** to visualize how components connect
3. **Study each Component Category** in depth (Data Sources → Engineering → AI Components → Applications)
4. **Follow the Project Guide** to create your own AI project

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- All illustrations and diagrams were created specifically for this tutorial
- Code examples are provided for educational purposes
- Special thanks to the AI and data science community for inspiration

## 📬 Contact

For questions or feedback, please open an issue in the GitHub repository or contact the project maintainers directly.

---

Happy learning! 🚀