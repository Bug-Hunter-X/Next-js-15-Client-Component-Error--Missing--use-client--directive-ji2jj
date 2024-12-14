```javascript
// pages/about.js
use client; // Add this line

export default function About() {
  const date = new Date();
  console.log(date);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```