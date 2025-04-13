# GreenMine Labs Website

A modern, responsive website for GreenMine Labs - a blockchain infrastructure & digital asset solutions provider focused on sustainable mining practices and blockchain education.

## Overview

This is a clean, single-page website built with HTML, CSS, and JavaScript. It's designed to be simple to deploy and maintain while providing an attractive and professional online presence for your crypto mining startup.

## Features

- **Responsive Design:** Looks great on all devices from mobile to desktop
- **Modern UI:** Dark theme with green accents for a professional tech look
- **Smooth Animations:** Subtle animations and transitions for a polished experience
- **Contact Form:** Ready to connect with potential clients
- **Optimized Structure:** Clear sections highlighting services, impact, and more

## File Structure

```
greenmine-labs-website/
├── index.html         # Main HTML file
├── styles.css         # CSS styling
├── script.js          # JavaScript functionality
├── images/            # Image assets folder
│   ├── mining-rig.jpg # Example image for about section
│   └── favicon.ico    # Website favicon
└── README.md          # This documentation file
```

## How to Make Changes

### Editing Content

To edit the text content of the website:

1. Open `index.html` in a code editor like VS Code, Sublime Text, or even Notepad
2. Find the section you want to modify
3. Update the text between the HTML tags
4. Save the file

### Updating Styles

To make changes to the appearance:

1. Open `styles.css` in your code editor
2. Find the relevant CSS selector for the element you want to modify
3. Adjust the properties as needed
4. Save the file

Key sections in the CSS:

- `:root` - Contains color variables that control the site's color scheme
- `.hero` - Styles for the top hero section
- `.services` - Styles for the services section
- `.about` - Styles for the about section
- `.impact` - Styles for the impact section
- `.contact` - Styles for the contact section

### Adding or Changing Images

1. Add your image files to the `images` folder
2. In `index.html`, find the `<img>` tag you want to update
3. Change the `src` attribute to point to your new image

For example, to change the mining rig image:
```html
<img src="images/your-new-image.jpg" alt="Description of your image">
```

### Updating Contact Information

1. Open `index.html`
2. Find the `<!-- Contact Section -->` section
3. Update the phone number, email, and address information

### Social Media Links

1. Find the `<div class="social-links">` sections in the contact area and footer
2. Update the `href` attributes with your actual social media profile URLs

## Deployment

To deploy this website:

1. Upload all files to your web hosting server maintaining the file structure
2. Make sure the `index.html` file is in the root directory of your hosting

For GitHub Pages:
1. Create a new repository
2. Upload all the files
3. Go to Settings > Pages and choose the main branch as the source

## Adding Functionality

### Contact Form

The contact form is set up visually but doesn't actually send emails yet. To make it functional:

1. You'll need to set up a form handling service like Formspree, Netlify Forms, or your own server-side script
2. Update the form action and method in the HTML

For example, with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Analytics

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add the Google Analytics script to the `<head>` section of `index.html`

## License

This website template is free to use for your business purposes.
