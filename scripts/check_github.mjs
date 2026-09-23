import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME || "Hemant-2704";

console.log("Checking GitHub API for user:", username);

async function check() {
  const headers = {
    Authorization: "Bearer " + token,
    "User-Agent": "Portfolio-Checker",
  };

  // 1. User info
  const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
  const userData = await userRes.json();
  console.log("User Data:", {
    login: userData.login,
    name: userData.name,
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
  });

  // 2. Repos
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
  const repos = await reposRes.json();
  if (Array.isArray(repos)) {
    console.log(`Found ${repos.length} public repos:`);
    repos.forEach((r) => {
      console.log(`- ${r.name} (${r.html_url}) [${r.language}] : ${r.description}`);
    });
  } else {
    console.log("Repos response:", repos);
  }

  // 3. Pinned repos via GraphQL
  const graphqlQuery = {
    query: `query {
      user(login: "${username}") {
        pinnedItems(first: 10, types: REPOSITORY) {
          totalCount
          nodes {
            ... on Repository {
              name
              url
              description
            }
          }
        }
      }
    }`,
  };

  const gqlRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  });
  const gqlData = await gqlRes.json();
  console.log("GraphQL Pinned Items:", JSON.stringify(gqlData, null, 2));
}

check().catch(console.error);
