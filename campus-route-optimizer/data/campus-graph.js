/* global campusGraph */
const campusGraph = {
  nodes: [
    { id: "residence", name: "Résidence Étudiante", x: 120, y: 520 },
    { id: "hallA", name: "Hall A", x: 200, y: 360 },
    { id: "amphiA", name: "Amphi A", x: 360, y: 320 },
    { id: "biblio", name: "Bibliothèque", x: 560, y: 220 },
    { id: "ru", name: "Restaurant Universitaire", x: 760, y: 420 },
    { id: "salle302", name: "Salle 302", x: 520, y: 380 },
    { id: "lab", name: "Laboratoire", x: 340, y: 480 }
  ],
  edges: [
    // from, to, weight (minutes)
    { from: "residence", to: "hallA", weight: 4 },
    { from: "hallA", to: "amphiA", weight: 3 },
    { from: "amphiA", to: "biblio", weight: 5 },
    { from: "biblio", to: "ru", weight: 6 },
    { from: "hallA", to: "lab", weight: 6 },
    { from: "lab", to: "salle302", weight: 4 },
    { from: "salle302", to: "amphiA", weight: 4 },
    { from: "ru", to: "salle302", weight: 7 },
    { from: "residence", to: "lab", weight: 9 }
  ]
};
