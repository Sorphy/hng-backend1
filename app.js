const express = require('express');
const app = express();
const port = 3000;

// endpoint routes
app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

    if (!slackName || !track) {
        return res.status(400).json({error: 'slackName and track must be specified'})
    }
  // Get the current day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];

  // Get current UTC time
  const currentDate = new Date();
  const currentUTCTime = new Date(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
  ).toISOString();

  // define urls
  const githubRepo = "https://github.com/Sorphy/hng-backend1";
  const githubFile = "https://github.com/Sorphy/hng-backend1/master/app.js";

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track,
    github_file_url: githubRepo,
    github_repo_url: githubFile,
    status_code: 200,
  };
  res.status(200).json(response);
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});