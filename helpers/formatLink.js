export function formatLink(link) {
    let httpswwwRegex = /^https:\/\/www./gm;
    let httpsRegex = /^https:\/\//gm;
    let wwwRegex = /^www./gm;

    if (link.match(httpswwwRegex)) {
      return link;
    } else if (link.match(wwwRegex)) {
      return "https://" + link;
    } else if (link.match(httpsRegex)) {
      return link;
    } else {
      return "https://www." + link;
    }
  }