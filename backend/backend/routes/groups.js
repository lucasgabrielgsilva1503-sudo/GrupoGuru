const express = require('express');
const router = express.Router();

const fetchFacebookGroups = async (niche) => [
  {
    name: `Grupo ${niche} Brasil`,
    platform: "Facebook",
    members: 15000,
    activity: "Alta",
    type: "Posts/Links",
    language: "PT",
    link: "#",
    salesTip: "Poste dicas antes de divulgar links",
    hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook`
  }
];

const fetchTelegramGroups = async (niche) => [
  {
    name: `${niche} Oficial`,
    platform: "Telegram",
    members: 8000,
    activity: "Média",
    type: "Posts",
    language: "PT",
    link: "#",
    salesTip: "Use enquetes para engajar antes de vender",
    hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook`
  }
];

const fetchDiscordGroups = async (niche) => [
  {
    name: `${niche} Gamers`,
    platform: "Discord",
    members: 5000,
    activity: "Alta",
    type: "Chats/Links",
    language: "PT",
    link: "#",
    salesTip: "Interaja primeiro, depois compartilhe link",
    hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook`
  }
];

router.get('/', async (req,res) => {
  const { niche } = req.query;

  let allGroups = [
    ...(await fetchFacebookGroups(niche)),
    ...(await fetchTelegramGroups(niche)),
    ...(await fetchDiscordGroups(niche))
  ];

  allGroups.sort((a,b)=>b.members - a.members);

  res.json(allGroups);
});

module.exports = router;
