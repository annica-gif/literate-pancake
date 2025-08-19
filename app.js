// Enkelt, modulärt quiz om Stockholm
options: ["Kaknästornet", "Stadshuset", "Riddarholmskyrkan", "Globen (Avicii Arena)"],
correct: 1,
fact: "Stockholms stadshus invigdes 1923 och kröns av de tre kronorna – Sveriges riksvapen."
},
{
q: "Vilken stadsdel är känd för sina gränder och kullersten?",
options: ["Norrmalm", "Södermalm", "Gamla stan", "Östermalm"],
correct: 2,
fact: "Gamla stan är Stockholms historiska kärna med anor från 1200-talet."
},
{
q: "Vad kallas tunnelbanans konstprojekt som pryder många stationer?",
options: ["Tunnel Art", "Blå linjen-projektet", "Konst i City", "Världens längsta konstutställning"],
correct: 3,
fact: "Stockholms tunnelbana kallas ofta världens längsta konstutställning, över 90 stationer har konst."
},
{
q: "Vilket vattenområde omger Djurgården?",
options: ["Brunnsviken", "Saltsjön", "Edsviken", "Mälaren"],
correct: 1,
fact: "Djurgården omges av Saltsjön – populärt för båt och promenader längs kajerna."
},
{
q: "Vilken ö binder Västerbron ihop med Södermalm?",
options: ["Kungsholmen", "Långholmen", "Skeppsholmen", "Beckholmen"],
correct: 1,
fact: "Västerbron sträcker sig över Riddarfjärden mellan Södermalm och Långholmen/Kungsholmen."
},
{
q: "Vad heter arenan som tidigare kallades Globen?",
options: ["Tele2 Arena", "Friends Arena", "Avicii Arena", "Hovet"],
correct: 2,
fact: "Globen döptes om till Avicii Arena 2021 för att hedra artisten Tim Bergling."
},
{
q: "Vilken ö är känd för sin stora park och museer som Vasa och Skansen?",
options: ["Skeppsholmen", "Djurgården", "Stadsholmen", "Stora Essingen"],
correct: 1,
fact: "Djurgården samlar Vasa museet, Skansen, ABBA The Museum m.fl."
}
];


const state = {
order: [],
index: 0,
answers: [],
started: false
};


const els = {
year: document.getElementById('year'),
progress: document.getElementById('progress'),
intro: document.getElementById('intro'),
startBtn: document.getElementById('startBtn'),
quiz: document.getElementById('quiz'),
questionText: document.getElementById('questionText'),
options: document.getElementById('options'),
nextBtn: document.getElementById('nextBtn'),
prevBtn: document.getElementById('prevBtn'),
result: document.getElementById('result'),
scoreText: document.getElementById('scoreText'),
factList: document.getElementById('factList'),
restartBtn: document.getElementById('restartBtn'),
shareBtn: document.getElementById('shareBtn')
};


els.year.textContent = new Date().getFullYear();


function shuff