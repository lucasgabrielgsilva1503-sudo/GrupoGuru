const express = require('express');
const fetch = require('node-fetch'); // npm install node-fetch@2
const router = express.Router();

const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// Funções simuladas para teste, prontos para substituir pelos tokens reais
const fetchFacebookGroups = async (niche) => [
  { name: `Grupo ${niche} Brasil`, platform: "Facebook", members: 15000, activity: "Alta", type: "Posts/Links", language: "PT", link: "#", salesTip: "Poste dicas antes de divulgar links", hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook` }
];

const fetchTelegramGroups = async (niche) => [
  { name: `${niche} Oficial`, platform: "Telegram", members: 8000, activity: "Média", type: "Posts", language: "PT", link: "#", salesTip: "Use enquetes para engajar antes de vender", hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook` }
];

const fetchDiscordGroups = async (niche) => [
  { name: `${niche} Gamers`, platform: "Discord", members: 5000, activity: "Alta", type: "Chats/Links", language: "PT", link: "#", salesTip: "Interaja primeiro, depois compartilhe link", hashtags: `#${niche.replace(/\s/g,'')} #VendaOnline #Ebook` }
];

router.get('/', async (req,res) => {
  const { niche } = req.query;
  let allGroups = [
    ...(await fetchFacebookGroups(niche)),
    ...(await fetchTelegramGroups(niche)),
    ...(await fetchDiscordGroups(niche))
  ];

  // Dicas dinâmicas
  allGroups.forEach(g => {
    if(g.members < 5000) g.salesTip = "Interaja bastante, grupos pequenos precisam de engajamento";
    else if(g.activity === "Alta") g.salesTip = "Use posts curtos com dicas antes de divulgar link";
  });

  // Ordenar por membros
  allGroups.sort((a,b)=>b.members - a.members);
  res.json(allGroups);
});

module.exports = router;
