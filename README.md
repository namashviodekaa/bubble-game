# Bubble Pop Game

A fast-paced JavaScript logic game.

## Overview
This is a simple interactive game where players must match a target number ('Hit') by clicking bubbles on the screen. The game features a 60-second timer and dynamic score tracking.

## Features
- **Dynamic Grid**: Generates over 200 bubbles with random numbers.
- **Event Delegation**: Efficient event handling for high-performance interaction.
- **Real-time Logic**: Automatic reshuffling of numbers upon successful hits.
- **Replayability**: Includes a `playagain()` function to reset game state.

## Core Functions
- `makeBubbles()`: Populates the play area.
- `newHit()`: Sets the target number.
- `startTimer()`: Handles the 60-second countdown.
- `game()`: Main event listener and game logic.

## Usage
Open the project in a browser. The timer starts automatically on your first bubble click.
