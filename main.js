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
  navigator.serviceWorker.register('/PWA/service-worker.js') // ✅ Update this path if hosted in /PWA
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.error("Service Worker Failed:", err));
}

// PWA Install Button Logic
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Create install button
  const installBtn = document.createElement('button');
  installBtn.textContent = "📲 Install App";
  installBtn.style.padding = "10px";
  installBtn.style.margin = "20px";
  installBtn.style.borderRadius = "10px";
  installBtn.style.backgroundColor = "#007BFF";
  installBtn.style.color = "white";
  installBtn.style.border = "none";

  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
      } else {
        console.log('❌ User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});
