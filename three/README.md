# 3D Interactive Project (Chill Drinks)
## React + Three.js 
A modern, interactive 3D Website with React and Three.js, featuring an animated 3D model with real-time rendering capabilities.

## 📋 Overview

This project demonstrates the integration of Three.js with React using React Three Fiber (@react-three/fiber) and Drei (@react-three/drei) helper libraries. It showcases a 3D cola can model with smooth animations, interactive controls, and realistic lighting, creating an engaging hero section for a web application.

## 🛠️ Tech Stack

- **React** - UI framework for building component-based interfaces
- **Three.js** - 3D graphics library for rendering 3D content in the browser
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for React Three Fiber

## 🎨 Animations & 3D Features
- **Sketchfab** - using [Sketchfab](https://sketchfab.com/) website select and download a animation in the website in GLTF/GLB formate.

### 1. **Model Animation (GLTF/GLB Animation)**
- Plays baked animations from the GLB model file
- Automatically detects and plays the first animation clip if available
- Uses `useAnimations` hook to manage animation states and mixer
- Proper cleanup on component unmount to prevent memory leaks

### 2. **Continuous Rotation**
- The 3D model rotates continuously around its Y-axis
- Smooth rotation at a constant speed (0.2 radians per second)
- Implemented using `useFrame` which runs on every frame (~60fps)
- Independent of user interaction for persistent visual engagement

### 3. **Interactive Orbit Controls**
- **Rotate**: Click and drag to rotate the camera around the model
- **Zoom**: Scroll to zoom in/out (limited to 5-10 units distance)
- **Pan**: Right-click and drag to reposition the view
- Manual rotation disabled (`autoRotate={false}`) since rotation is handled via `useFrame`

### 4. **Dynamic Lighting System**
- **Ambient Light**: Provides base illumination (intensity: 0.6)
- **Spot Light**: Creates focused, directional light with soft edges (penumbra: 1)
- **Point Light**: Adds dramatic backlighting from behind the model
- Creates depth and highlights the model's material properties

### 5. **Environmental Effects**
- **Environment Map**: Uses "sunset" preset for realistic reflections and ambient lighting
- **Contact Shadows**: Ground shadows that anchor the 3D model to its virtual space
- Semi-transparent, blurred shadows for realistic depth perception

### 6. **Camera Configuration**
- Perspective camera with 75° field of view
- Initial position set to [1, 1, 1] for an angled, dimensional view
- Gives users a clear perspective of the model's 3D form

## 🚀 Getting Started
### npm command
- Three.js Library -`npm i three`
- React renderer for Three.js - `npm i @react-three/fiber`
- Helpers and Abstractions for React Three - `npm i @react-three/fiber`