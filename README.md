# ⚽ Bankers United - Football Team Website

> **Note:** This is an amateur project under development. The website is being created for educational purposes and to demonstrate web technologies.

## 📋 Project Description

Bankers United is a modern, responsive website for a football team that includes complete functionality for presenting the team, players, coaches, results, and statistics. The project is built with clean HTML, CSS, and JavaScript without using external frameworks.

## 🚀 Demo

The website includes the following main sections:
- 🏠 **Home Page** - team presentation and latest news
- 🖼️ **Gallery** - photos from matches and training sessions
- 👥 **Team** - player information with interactive profiles
- 🏆 **Coaching Staff** - presentation of coaches
- 📊 **Results** - matches (played and upcoming) with details
- 📈 **Statistics** - detailed player statistics
- 📞 **Contact** - functional contact form

## 🛠️ Technologies

- **HTML5** - semantic structure
- **CSS3** - modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - interactivity without frameworks
- **Responsive Design** - mobile-first approach
- **Progressive Enhancement** - graceful degradation

### External Services:
- **Formspree** - contact form processing
- **Font Awesome** - icons
- **Google Fonts** (optional)

## 📁 Project Structure

```
bankers-united/
├── index.html              # Home page
├── gallery.html            # Gallery
├── players.html             # Players page
├── coaches.html             # Coaching staff
├── results.html             # Match results
├── statistics.html          # Player statistics
├── contact.html             # Contact page
├── styles.css               # Main styles
├── script.js                # JavaScript functionality
├── matches.json             # Match data
├── player-stats.json        # Player statistics
├── images/                  # Images folder
│   ├── players/            # Player photos
│   ├── coaches/            # Coach photos
│   └── gallery/            # Gallery images
└── README.md               # This file
```

## 🚀 How to Run the Project

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended)

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone [repository-url]
   cd bankers-united
   ```

2. **Start a local server**
   
   **Option 1: Python (if you have Python installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 2: Node.js (if you have Node.js)**
   ```bash
   npx http-server
   ```
   
   **Option 3: Live Server (VS Code extension)**
   - Install Live Server extension in VS Code
   - Right-click on index.html → "Open with Live Server"

3. **Open in browser**
   - Go to `http://localhost:8000`
   - Or use the address shown by your server

### ⚠️ Important
The project uses AJAX requests to load JSON data, so it needs to run through an HTTP server. Opening HTML files directly (file://) will not work properly.

## 📊 Data and Content

### JSON Files
- **matches.json** - contains match information, results, goals, cards
- **player-stats.json** - player statistics, ratings, form

### Sample Data
The project includes sample data for demonstration purposes. For real use, replace with actual data for your team.

## ✨ Key Features

### ✅ Completed Features
- [x] Responsive design for all devices
- [x] Interactive gallery with modal windows
- [x] Player profiles with detailed information
- [x] Functional contact form (Formspree)
- [x] Results system with filtering
- [x] Detailed player statistics
- [x] Lazy loading for images
- [x] Keyboard navigation support
- [x] SEO-friendly structure

### 🚧 Under Development
- [ ] League standings
- [ ] Team form charts
- [ ] Statistics export
- [ ] PWA functionality
- [ ] Multi-language support
- [ ] Google Maps integration
- [ ] Newsletter system
- [ ] Social media integration

## 🎨 Customization

### Color Scheme
Main colors are defined as CSS variables in `styles.css`:
```css
:root {
  --main-blue: #005387;
  --bg-color: #eaf3f9;
  --button-bg: #1580b3;
  --button-hover: #004f77;
}
```

### Logo and Images
- Replace images in the `images/` folder with your photos
- Update alt texts in HTML files
- Maintain recommended sizes for best performance

### Team Data
- Edit JSON files with your team's data
- Update contact information in HTML files
- Personalize texts and descriptions

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ⚠️ Internet Explorer 11 (basic functionality)

## 🔒 Security

- Form uses HTTPS through Formspree
- No server-side logic or database
- Static site - minimal security risks
- HTTPS hosting recommended for production

## 📈 Performance

### Optimizations
- Lazy loading for images
- Minimal external dependencies
- Efficient CSS with CSS Grid/Flexbox
- Compressed images (recommended)

### Lighthouse Score (targets)
- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 90+
- 🟢 SEO: 95+

## 🤝 Contributing

This is an educational project, but we welcome suggestions and improvements:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes and is freely available for use and modification.

## 📞 Contact

For questions about the project:
- 📧 Email: info@bankersunited.bg
- 🌐 Website: [demo-link]

## 🎯 Roadmap

### Phase 1 (Completed)
- ✅ Basic structure and design
- ✅ Results and statistics

### Phase 2 (Current)
- 🚧 Standings and charts
- 🚧 PWA features

### Phase 3 (Planned)
- 📋 CMS integration
- 📋 Mobile application
- 📋 Real-time updates

## 🔧 Development Notes

### File Naming Convention
- Use lowercase with hyphens for HTML files
- Keep image files optimized and properly named
- JSON files use camelCase for properties

### Code Style
- Semantic HTML5 elements
- BEM methodology for CSS classes
- Modern JavaScript (ES6+)
- Mobile-first responsive design

### Testing
- Test on multiple devices and browsers
- Validate HTML and CSS
- Check accessibility with screen readers
- Test form functionality

## 📚 Learning Resources

This project demonstrates:
- Modern CSS techniques (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript DOM manipulation
- Responsive web design principles
- Progressive enhancement strategies
- Web accessibility best practices

---

**⚽ Made with ❤️ for football fans**

> This project demonstrates modern web technologies and best practices for creating sports websites.
