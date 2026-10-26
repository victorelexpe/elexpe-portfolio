// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver...) that the site
// changed, so they recrawl now instead of waiting. Run after a production deploy:
//   npm run indexnow
// The key is public by design: it lives at https://elexpe.dev/<key>.txt.

const SITE = "https://elexpe.dev";
const KEY = "458c25752a0a4887d3d8d1cf31b73851";

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((response) => {
  if (!response.ok) throw new Error(`Sitemap request failed: ${response.status}`);
  return response.text();
});

const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted and the key is still being validated.
console.log(`IndexNow: ${response.status} ${response.statusText} (${urlList.length} URLs)`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
