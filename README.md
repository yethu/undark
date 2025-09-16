# Undark
A Chrome extension that removes forced dark mode from websites that don’t provide a native light theme.

## How It Works
Undark applies a simple CSS filter trick to flip dark pages into a light-friendly version:
* The entire page (`html` element) is inverted and hue-rotated:
  ```css
  filter: invert(1) hue-rotate(180deg);
  ```
* Images and other media are inverted back, so they display correctly.

## Usage
1. Install the extension in Chrome.
2. Open any website that has only a dark theme.
3. Click the **Undark** button in the extension popup to turn light mode on.
4. Click the **Dark** button to return to the dark mode.

## Features
* Works on any site that doesn’t provide a native light theme.
* Lightweight and minimal — just a few lines of CSS.

## Installation (Developer Mode)
1. Clone or download this repo.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the project folder.

## License
MIT License — feel free to use and modify.
