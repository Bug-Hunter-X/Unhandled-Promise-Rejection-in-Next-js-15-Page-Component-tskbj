# Unhandled Promise Rejection in Next.js 15

This repository demonstrates a common error in Next.js 15 applications involving unhandled promise rejections within page components.  Unhandled rejections can lead to silent failures or crashes, making debugging difficult.  This example showcases the issue and a potential solution.

## Problem

The `about.js` file contains a promise that is intentionally rejected. In Next.js 15, if this rejection is not handled using a `.catch()` block, it can lead to errors or unexpected behavior.  The application might not display the error message directly, making it harder to identify the problem.

## Solution

The recommended solution is to always handle promise rejections using `.catch()`. This ensures that errors are handled gracefully, preventing unexpected behavior and providing a better user experience.  The updated `about.js` demonstrates this best practice.