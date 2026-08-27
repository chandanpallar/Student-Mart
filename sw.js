importScripts(
    "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyCpip3JYy6CDpStzSo5Ak8hTRR9CTv72Uw",
    authDomain: "studentmart-726f4.firebaseapp.com",
    projectId: "studentmart-726f4",
    storageBucket: "studentmart-726f4.firebasestorage.app",
    messagingSenderId: "441914681487",
    appId: "1:441914681487:web:49f8e75d2603e6004328fa"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log(
        "Background message received:",
        payload
    );

    const notification =
        payload.notification || {};

    self.registration.showNotification(
        notification.title || "StudentMart",
        {
            body:
                notification.body ||
                "You have a new message.",
            icon: "/Student-Mart/icon-192.png"
        }
    );
});

self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        self.clients.claim()
    );
});
