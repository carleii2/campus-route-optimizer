// Ce fichier assume que campusGraph et dijkstra() sont déjà chargés

// Utilitaires
function byId(id) { return document.getElementById(id); }

const canvas = byId("campusCanvas");
const ctx = canvas.getContext("2d");

// Adapter taille réelle canvas au CSS (hauteur fixe -> utiliser ratio)
function fitCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener("resize", () => { fitCanvas(); drawGraph(); });
fitCanvas();

// Remplir selects
function populateSelects() {
  const start = byId("start");
  const end = byId("end");
  start.innerHTML = "";
  end.innerHTML = "";
  campusGraph.nodes.forEach(n => {
    const o1 = document.createElement("option");
    o1.value = n.id; o1.textContent = n.name;
    const o2 = o1.cloneNode(true);
    start.appendChild(o1);
    end.appendChild(o2);
  });
  // par défaut : residence -> amphiA
  start.value = "residence";
  end.value = "amphiA";
}
populateSelects();

// dessin du graphe
function drawGraph(highlightPathIds = []) {
  // clear
  ctx.clearRect(0,0,canvas.width, canvas.height);

  // draw edges
  const nodesById = {};
  campusGraph.nodes.forEach(n => nodesById[n.id] = n);

  // draw base edges
  ctx.lineWidth = 2;
  campusGraph.edges.forEach(e => {
    const a = nodesById[e.from], b = nodesById[e.to];
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = "#cfcfcf";
    ctx.stroke();
    // optionally draw weight
    const mx = (a.x + b.x)/2, my = (a.y + b.y)/2;
    ctx.fillStyle = "#666";
    ctx.font = "12px Arial";
    ctx.fillText(`${e.weight}min`, mx+6, my-6);
  });

  // draw highlighted path (if any)
  if (highlightPathIds && highlightPathIds.length > 1) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff6b00";
    ctx.beginPath();
    for (let i=0;i<highlightPathIds.length;i++) {
      const id = highlightPathIds[i], n = nodesById[id];
      if (i===0) ctx.moveTo(n.x, n.y); else ctx.lineTo(n.x, n.y);
    }
    ctx.stroke();
  }

  // draw nodes
  campusGraph.nodes.forEach(n => {
    ctx.beginPath();
    ctx.fillStyle = "#0b5fff";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.arc(n.x, n.y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.font = "11px Arial";
    ctx.fillText(n.name, n.x + 14, n.y + 4);
  });
}

// affichage du résultat
function showResult(result) {
  const info = byId("info");
  if (!result.path || result.path.length === 0 || result.distance === null) {
    info.innerHTML = "<strong>Aucun chemin trouvé.</strong>";
    drawGraph();
    return;
  }
  // chemin détaillé (noms)
  const names = result.path.map(id => campusGraph.nodes.find(n=>n.id===id).name);
  info.innerHTML = `<strong>Temps estimé :</strong> ${result.distance} min<br><strong>Chemin :</strong> ${names.join(" → ")}`;
  drawGraph(result.path);
}

// bouton trouver
byId("findBtn").addEventListener("click", () => {
  const start = byId("start").value;
  const end = byId("end").value;
  if (start === end) {
    byId("info").innerHTML = "<em>Vous êtes déjà sur place 😄</em>";
    drawGraph([start]);
    return;
  }
  const result = dijkstra(campusGraph, start, end);
  showResult(result);
});

// reset
byId("resetBtn").addEventListener("click", () => {
  populateSelects();
  byId("info").innerHTML = "";
  drawGraph();
});

// initial draw
drawGraph();
