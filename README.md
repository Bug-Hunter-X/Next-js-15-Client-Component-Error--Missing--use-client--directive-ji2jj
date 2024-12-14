# Next.js 15 Client Component Error: Missing 'use client'

This repository demonstrates a common error encountered in Next.js 15 applications when using client components without the necessary `use client` directive.  Client components leverage browser APIs, which are unavailable on the server during rendering.  Forgetting the directive leads to runtime errors.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Navigate to `/about`.  Observe the error in the console.

## Solution

Add the `use client` directive to the top of the client component file (`pages/about.js`) to resolve the issue.