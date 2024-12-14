```javascript
// pages/about.js

export default function About() {
  const unhandledPromise = new Promise((resolve, reject) => {
      reject(new Error('Unhandled promise rejection'));
  });

unhandledPromise.catch(error => {
  // Handle the error appropriately, e.g., log it to the console or display an error message to the user
  console.error('Promise rejection caught:', error);
});

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```