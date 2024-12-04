# Masonry Filter Layout

This project implements a **masonry grid layout** combined with a **filtering system**, allowing users to filter items in the grid using buttons. The layout adapts to different screen sizes with responsive design, and the filtering effect is smooth and interactive.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [HTML Structure](#html-structure)
5. [Customization](#Customization)
6. [Preview](#Preview)
7. [License](#license)
8. [Credits](#credits)

---

## 1. Overview

The **Masonry Filter Layout** is a modern, responsive grid layout that allows users to filter content by categories. It uses **CSS Grid** for the layout and **JavaScript** for the filtering functionality. The design adapts well to various screen sizes, ensuring a seamless user experience on desktops, tablets, and mobile devices.

---

## 2. Features

- **Masonry Grid Layout**: Items are dynamically arranged in a grid format.
- **Responsive Design**: The layout adjusts automatically based on the screen size.
- **Filter Buttons**: Users can filter items by categories like Video, Branding, Web Design, and Motion Graphics.
- **Smooth Transitions**: Filtering is animated with smooth transitions for opacity and scaling.
- **Accessibility**: The filter buttons are fully accessible and can be navigated via keyboard.

---

## 3. Installation

To get started with this project, follow these steps:

1. **Download the Project Files**: Clone or download the repository.
2. **Link CSS and JS Files**: Ensure you link the `main.css` and `filter-masonry.min.js` files in your HTML.

---

## 4. HTML Structure

        <div class="have-filter-masonry">
            <div>
                <div class="filter-buttons" role="group" aria-label="Filter options">
                    <button class="active" data-filter="*" aria-pressed="true"><span>All</span></button>
                    <button data-filter="video" aria-pressed="false"><span>Video</span></button>
                    <button data-filter="branding" aria-pressed="false"><span>Branding</span></button>
                    <button data-filter="web-design" aria-pressed="false"><span>Web Design</span></button>
                    <button data-filter="motion-graphics" aria-pressed="false"><span>Motion Graphics</span></button>
                </div>
            </div>
            <div class="filter-masonry" data-filter-masonry='{"default":1,"mobile":1,"tablet":2,"desktop":3,"xlarge":4}'>
                <div class="grid-item video"><img src="images/1.jpg" alt="Video Item"></div>
                <div class="grid-item branding"><img src="images/2.jpg" alt="Branding Item"></div>
                <div class="grid-item web-design"><img src="images/3.jpg" alt="Web Design Item"></div>
                <div class="grid-item motion-graphics"><img src="images/4.jpg" alt="Motion Graphics Item"></div>
            </div>
        </div>

        <script src="js/filter-masonry.min.js"></script>

---

## 5. Customization

You can easily customize the filter categories, button styles, and grid layout by editing the CSS and JavaScript files. The filtering logic is flexible, allowing you to add or remove categories without modifying the core functionality.

To change the categories, simply update the data-filter attribute in the HTML buttons and the corresponding class names on the grid items.

---

## 6. Preview

[Masonry Filter Layout](https://masonry-filter-layout.netlify.app/)

---

## 7. License

This project is licensed under the MIT License. You can freely use and modify it for personal or commercial purposes, as long as you provide credit to the original author.

---

## 8. Credits

#### Author : DoomAccount (Mostafa Sabry)
#### License: MIT License
#### Email: mr.mostafa.vb@gmail.com
#### Repository: [GitHub - Masonry Filter Layout](https://github.com/DoomAccount/masonry-filter-layout)
