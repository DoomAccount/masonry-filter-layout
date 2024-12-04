# Masonry Filter Layout

The **masonry-filter-layout** is a JavaScript library designed to create a flexible and beautiful grid layout with support for dynamic filtering of items using both CSS and JavaScript.

## Features

- **Masonry Layout:** Displays items in a staggered grid format, balancing the item heights across columns.
- **Dynamic Filtering:** Supports filtering between different categories without reloading the page.
- **Responsive:** Works across all devices, with multi-size support (Mobile, Tablet, Desktop).

## How to Use

### 1. Include the Library in Your Project

You can either download the **JavaScript** and **CSS** files directly or link to them in your project like this:

```html
<!-- Link to CSS file -->
<link rel="stylesheet" href="path/to/masonry-filter-layout.css" type="text/css">

<!-- Link to JavaScript file -->
<script src="path/to/masonry-filter-layout.js"></script>

## HTML Structure

Use the following structure to create the filter interface:

<div class="have-filter-masonry">
    <div class="filter-buttons" role="group" aria-label="Filter options">
        <button data-filter="*" aria-pressed="true">All</button>
        <button data-filter="video">Video</button>
        <button data-filter="branding">Branding</button>
        <button data-filter="web-design">Web Design</button>
        <button data-filter="motion-graphics">Motion Graphics</button>
    </div>
    
    <div class="filter-masonry">
        <!-- Items to be displayed -->
        <div class="grid-item video"><img src="video.jpg" alt="Video"></div>
        <div class="grid-item branding"><img src="branding.jpg" alt="Branding"></div>
        <div class="grid-item web-design"><img src="web-design.jpg" alt="Web Design"></div>
        <div class="grid-item motion-graphics"><img src="motion-graphics.jpg" alt="Motion Graphics"></div>
    </div>
</div>

