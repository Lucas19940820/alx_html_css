Advanced CSS project
# Project Stylesheet

This CSS file provides the styling for various sections of a web project. Below is an overview of the key sections and their styling.

## Table of Contents
- [General Styling](#general-styling)
- [Header](#header)
- [Banner Section](#banner-section)
- [Instructors Section](#instructors-section)
- [Quote Section](#quote-section)
- [Videos List Section](#videos-list-section)
- [Membership Section](#membership-section)
- [FAQ Section](#faq-section)
- [Footer](#footer)

---

### General Styling
Basic global styling for margin, padding, and font settings:
- **Font**: `Source Sans Pro`, sans-serif
- **Body Color**: #333
- **Line-height**: 1.6

### Header
A transparent header with centered text and a navigation menu:
- Navigation is horizontally aligned with gaps between items.
- The hover effect on links changes the color to `#C271FF`.

### Banner Section
This section includes:
- A **radial gradient** overlay on the background image.
- A large heading (`h1`) with custom font size (120px).
- A button with a hover effect changing the color scheme.

### Instructors Section
Displays a list of instructors:
- **Circular instructor images** with spacing above and below.
- Each instructor has a title and a short description.
- Flexbox is used to align the instructors horizontally with equal spacing.

### Quote Section
Styled with a purple background (`#C271FF`):
- The section contains a blockquote and an author’s image, aligned horizontally.

### Videos List Section
A grid of video tutorials:
- Each video includes an image, title, description, instructor info, and a rating.
- A **play button** is placed at the center of each video image using absolute positioning.
- The play button has a hover effect that increases its opacity.

### Membership Section
A membership section with subscription options:
- Each membership option includes an icon, title, and button.
- Buttons have a hover effect where the background color and text color are swapped.

### FAQ Section
Contains frequently asked questions:
- The FAQ section uses a flexbox layout to align items, with media queries to adjust for smaller screens.

### Footer
The footer is simple and includes:
- **Social icons** aligned to the right with margin adjustments.
- A logo on the left.
- Footer text with a small font size.

---

### Media Queries
The file includes media queries for responsive design:
- The FAQ section adjusts for screens under `768px`, switching to a vertical layout.

---

## Colors
- **Primary Color**: `#C271FF` (used for buttons, links, and icons)
- **Background Color**: `#071629` for dark sections
- **Text Color**: `#fff` for light text and `#333` for dark text.

---

## Fonts
- **Main Font**: `'Source Sans Pro', sans-serif`

---

### Custom Features
- **Play Button**: Uses Font Awesome's play icon and is positioned at the center of video thumbnails.
- **Hover Effects**: Buttons, links, and play buttons have color transitions for a more interactive feel.

---
