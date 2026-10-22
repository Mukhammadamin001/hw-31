# Transactions and Categories

A phone-first finance app with two connected screens: **Transaction** and **Categories**.

## Open it
- On a computer: double-click `index.html`. It shows as one phone in the middle of the window.
- On a phone: the app fills the whole screen.

## Put it on your phone's home screen
The phone needs to load the folder from a web address, so host it first (any static host works,
for example GitHub Pages or Netlify Drop: drag this folder onto https://app.netlify.com/drop).
Then open the address on your phone:
- iPhone (Safari): Share → Add to Home Screen
- Android (Chrome): ⋮ menu → Add to Home screen / Install app

It then opens full screen like a normal app.

## How the screens connect
- Tab bar: switch between Transaction and Categories.
- Tap a category: opens Transaction filtered to that category.
- Back arrow, or the phone's back gesture: returns to the previous screen.

## Files
- `index.html`: page structure
- `style.css`: colours and layout
- `script.js`: example data and everything you can tap
- `manifest.webmanifest`, `icons/`: home-screen name and icon
