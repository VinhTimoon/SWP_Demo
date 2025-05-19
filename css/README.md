# CSS Organization

This directory contains the CSS files for the SchoolHealth website. The styles are organized into separate files based on functionality and page-specific requirements.

## File Structure

- `base.css`: Base styles, variables, and common elements
- `header.css`: Header and navigation styles
- `footer.css`: Footer styles
- `home.css`: Homepage-specific styles
- `news.css`: News page styles
- `contact.css`: Contact page styles
- `partners.css`: Partners page styles
- `dashboard.css`: Dashboard page styles
- `components.css`: Common component styles

## Usage

Include these CSS files in your HTML files in the following order:

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/components.css">
<!-- Page-specific CSS -->
<link rel="stylesheet" href="css/home.css">
```

## CSS Variables

Common variables are defined in `base.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #ff9800;
    --text-color: #2c3e50;
    --light-gray: #f8f9fa;
    --border-radius: 12px;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
```

## Responsive Design

All CSS files include responsive styles with the following breakpoints:

- 1200px: Large screens
- 992px: Medium screens
- 768px: Tablets
- 576px: Mobile devices

## Best Practices

1. Use CSS variables for consistent colors and values
2. Follow BEM naming convention for classes
3. Keep styles modular and maintainable
4. Use flexbox and grid for layouts
5. Implement responsive design for all components
6. Optimize for performance with efficient selectors
7. Include comments for complex sections
8. Maintain consistent spacing and formatting

## Browser Support

The CSS is designed to work with modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When adding new styles:
1. Place them in the appropriate file based on functionality
2. Follow the existing naming conventions
3. Include responsive styles
4. Add comments for complex sections
5. Test across different screen sizes 