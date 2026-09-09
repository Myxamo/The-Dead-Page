const links = {
  carpenter: "https://en.wikipedia.org/wiki/Stephen_Carpenter",
  greenwood: "https://en.wikipedia.org/wiki/Jonny_Greenwood",
  guns: "https://guns.lol/hamaisbest",
  duarte: "https://en.wikipedia.org/wiki/Narrow_Head",
  homme: "https://en.wikipedia.org/wiki/Josh_Homme",
  delonge: "https://en.wikipedia.org/wiki/Tom_DeLonge",
  titlefight: "https://en.wikipedia.org/wiki/Title_Fight",
  fcobain: "https://en.wikipedia.org/wiki/Frances_Bean_Cobain",
  vgrohl: "https://en.wikipedia.org/wiki/Violet_Grohl",
  love: "https://en.wikipedia.org/wiki/Courtney_Love",
  kovac: "https://web.archive.org/web/20240321151903/https://www.wonc.org/featured-local-artist-cheerleader-roadkill/",
  tankian: "https://en.wikipedia.org/wiki/Serj_Tankian",
  yorke: "https://en.wikipedia.org/wiki/Thom_Yorke",
  dgrohl: "https://en.wikipedia.org/wiki/Dave_Grohl",
  bowie: "https://en.wikipedia.org/wiki/David_Bowie",
  smith: "https://en.wikipedia.org/wiki/Chad_Smith",
  kiedis: "https://en.wikipedia.org/wiki/Anthony_Kiedis",
  lennon: "https://en.wikipedia.org/wiki/John_Lennon",
  albini: "https://en.wikipedia.org/wiki/Steve_Albini",
  nowell: "https://en.wikipedia.org/wiki/Bradley_Nowell",
  kcobain: "https://en.wikipedia.org/wiki/Kurt_Cobain",
};

document.querySelectorAll('a[data-ref]').forEach(a => {
  a.href = links[a.dataset.ref];
});