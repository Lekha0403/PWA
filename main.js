const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Do it with passion or not at all.",
  "Start today. Not tomorrow.",
  "Push yourself, because no one else will."
];

const quoteElement = document.getElementById('quote');
const quote = quotes[new Date().getDate() % quotes.length];
quoteElement.textContent = quote;

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.error("Service Worker Failed:", err));
}
