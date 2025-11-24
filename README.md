# Time.com Latest 6 Stories API (Static Assignment Version)

This version of the project returns **exactly the same 6 stories** as shown in the assignment PDF example, using a **static JSON array**.

It exposes a single endpoint:

`GET /getTimeStories` → returns the 6 stories as JSON.

---

## 🔧 How to Run

1. Make sure Node.js is installed:

```bash
node -v
```

2. Start the server:

```bash
node server.js
```

3. Open in the browser:

```
http://localhost:3000/getTimeStories
```

You will see the JSON array with the 6 fixed stories.

---

## 📦 Files

- `server.js` – simple HTTP server with static stories array
- `package.json` – Node project configuration
- `README.md` – documentation

---

## 🧠 How to Explain

> I created a lightweight Node.js HTTP server exposing `/getTimeStories`.  
> For this assignment version, the service returns the exact 6 stories provided in the sample JSON. The stories are stored in a static array, and the server simply responds with that array in JSON format for any GET request to the endpoint.