My First Portfolio - CSS Basic
This project is a continuation of the My First Portfolio project, where the focus is on applying CSS styling and layout techniques, specifically using Flexbox. Below are the tasks and goals for this project.
Tasks Overview
0. Some Early Styling
Objective: Begin adding basic styles to your webpage using external CSS files.
Steps:
Create a directory called css_basic.
Copy of index.html and tweets.html from the previous project (html_basic directory).
Created two CSS files: base.css (for foundational styles) and styles.css (for custom styles).
Linked these files within the <head> tag of each HTML file:
html

<link href="base.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet">


Files Created:
index.html, tweets.html, base.css, styles.css
1. Positioning with Flexbox
Objective: Arrange elements using the CSS Flexbox layout system.
Instructions:
Used display: flex for both the <body> and <main> containers.
Applied flex-direction: column to the <body> and flex-direction: row to the <main>.
Set up flex: auto for the <main> tag to handle height and width automatically.
Defined flex: 2 for <article> and flex: 1 for <aside>, ensuring proper proportions.
Ensure scrollability within both <article> and <aside> by adding overflow-y: auto.
2. Responsive Web Design
Objective: Ensure the webpage layout adjusts for mobile devices.
Instructions:
Added class="works_on_smartphone" to the <body> tag in index.html to enable a mobile-friendly layout.
Set the viewport for better rendering on smartphones:

<meta name="viewport" content="width=device-width, initial-scale=1.0">


3. Additional Styling
Objective: Customize and enhance the appearance of your website.
Instructions:
Added my own styles to styles.css for custom elements like colors, backgrounds, and borders.
Insert a logo (Unicode character) in the <header> section for a personalized touch.
 Experimented with the content inside the <article> tag, but did not modify the overall Flexbox layout.

Repository Structure
/css_basic

base.css        # Base CSS styles provided for initial structure
styles.css      # Custom CSS styles for positioning, colors, and responsiveness
index.html      # Main HTML page for the portfolio
tweets.html     # Secondary HTML page for displaying tweets


Flexbox Layout Summary
Body: Flexbox column layout to position the <header>, <main>, and <footer>.
Main: Flexbox row layout to position <article> and <aside>.
Responsiveness: Optimized for both desktop and mobile devices.

License
This project is open-source under the MIT License.

Author
Nyiko Lucas Chauke



