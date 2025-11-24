const http = require("http");

const stories = [
  {
    title: "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
    link: "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
  },
  {
    title: "'Writing With Fire' Shines a Light on All-Women News Outlet",
    link: "https://time.com/6142628/writing-with-fire-india-documentary/"
  },
  {
    title: "Moderna Booster May Wane After 6 Months",
    link: "https://time.com/6142852/moderna-booster-wanes-omicron/"
  },
  {
    title: "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    link: "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
  },
  {
    title: "The James Webb Space Telescope Is in Position—And Now We Wait",
    link: "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
  },
  {
    title: "We Urgently Need a New National COVID-19 Response Plan",
    link: "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
  }
];

const server = http.createServer((req, res) => {
  if (req.url === "/getTimeStories" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(stories));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid endpoint");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/getTimeStories`);
});