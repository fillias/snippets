async function getUrlLinks(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const hrefs = html.match(/href="([^"]*)"/g) || [];
    return hrefs.map((link) => link.slice(6, -1));
  } catch {
    return [];
  }
}

async function* crawl(startUrl, maxDepth = 3, maxVisits = 100) {
  const visited = new Set();
  const queue = [{ url: startUrl, depth: 0 }];

  while (queue.length && visited.size < maxVisits) {
    const { url, depth } = queue.shift();

    if (!visited.has(url) && depth < maxDepth) {
      const links = await getUrlLinks(url);
      for (const link of links) {
        queue.push({ url: link, depth: depth + 1 });
        console.log("added to queue:", link);
      }

      visited.add(url);
      yield url;
    }
  }
}

for await (const url of crawl("https://fczbkk.com")) {
  console.log("crawled URL:", url);
}
