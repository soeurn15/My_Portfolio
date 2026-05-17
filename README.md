# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Design** - Clean and professional layout
- 🌓 **Dark/Light Mode** - Theme toggle with localStorage persistence
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Smooth Animations** - Scroll animations and transitions
- 🎯 **Easy Customization** - Well-organized and commented code

## Sections

1. **Home/Hero** - Introduction and call-to-action
2. **About** - Personal information and statistics
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio projects with images and links
5. **Contact** - Contact form and information

## How to Customize

### 1. Personal Information

Open `index.html` and replace the following placeholders:

- `[Your Name]` - Your full name
- `Full Stack Developer & Designer` - Your title/role
- Update the bio text in the About section
- Replace placeholder links in social media icons
- Update contact information (email, phone, location)

### 2. Projects

Replace the project cards in the Projects section:
- Update project images (replace placeholder URLs)
- Modify project titles and descriptions
- Update technology tags
- Add your GitHub and live project links

### 3. Skills

Update the skills in the Skills section:
- Add or remove skill categories
- Modify skill tags to match your expertise

### 4. Colors & Theme

Customize colors in `styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #4a90e2;  /* Main brand color */
    --accent-color: #e74c3c;   /* Accent color */
    /* ... other variables */
}
```

### 5. Images

Replace placeholder images:
- Add your project screenshots to an `images/` folder
- Update the `src` attributes in the HTML
- Recommended size: 600x400px for project images

### 6. CV Download Button

The hero section includes a **Download CV** button.

- Add your CV PDF file at: `images/Song-Soeurn-CV.pdf`
- Keep the same filename, or update the button `href` in `index.html`
- The file will download automatically when visitors click the button

## Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. **Using a Backend Service:**
   - Set up a backend API endpoint
   - Uncomment the fetch code in `script.js`
   - Update the endpoint URL

2. **Using a Form Service:**
   - Use services like Formspree, EmailJS, or Netlify Forms
   - Follow their documentation to integrate

3. **Using Email:**
   - You can also use `mailto:` links as a simple solution

## Optional Enhancements

The `script.js` file includes commented code for:
- **Typing Effect** - Animated role/title text
- **Scroll to Top Button** - Quick navigation to top
- **3D Tilt Effect** - Interactive project cards

Uncomment these sections to enable these features!

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select your branch and save

### Netlify
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Your site is live!

### Other Options
- Vercel
- Firebase Hosting
- Your own web server

## File Structure

```
my_portfolio/
├── index.html       # Main HTML file
├── styles.css       # All styles and responsive design
├── script.js        # Interactive functionality
└── README.md        # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this template for your own portfolio!

## Credits

- Font Awesome for icons
- Google Fonts (Segoe UI)

---

**Made with ❤️ by [Your Name]**

*Happy Coding! 🚀*
"# My_Portfolio" 
