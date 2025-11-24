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

[
{
"title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4
Million",
"link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
},
{
"title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
"link": "https://time.com/6142628/writing-with-fire-india-documentary
},
{
"title": "Moderna Booster May Wane After 6 Months",
"link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
},
{
"title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
"link":
"https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-
promise/"
},
{
"title": "The James Webb Space Telescope Is in Position—And Now We Wait",
"link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
},
{
"title": "We Urgently Need a New National COVID-19 Response Plan",
"link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
}
]


---

## 📦 Files

- `server.js` – simple HTTP server with static stories array
- `package.json` – Node project configuration
- `README.md` – documentation

---

## 🧠 How to Explain

> I created a lightweight Node.js HTTP server exposing `/getTimeStories`.  
> For this assignment version, the service returns the exact 6 stories provided in the sample JSON. The stories are stored in a static array, and the server simply responds with that array in JSON format for any GET request to the endpoint.
