import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.GITHUB_TOKEN;
const username = "Hemant-2704";

async function fetchDetails() {
  const headers = {
    Authorization: "Bearer " + token,
    "User-Agent": "Portfolio-Checker",
  };

  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
  const repos = await reposRes.json();

  for (const r of repos) {
    const langsRes = await fetch(r.languages_url, { headers });
    const langs = await langsRes.json();
    console.log(`=== REPO: ${r.name} ===`);
    console.log("URL:", r.html_url);
    console.log("Description:", r.description);
    console.log("Created:", r.created_at);
    console.log("Updated:", r.updated_at);
    console.log("Languages:", langs);
    console.log("Default Branch:", r.default_branch);
  }
}

fetchDetails().catch(console.error);
