// Fournit la fonction dijkstra(graph, startId, endId)
// Graph: { nodes: [{id,name,x,y}], edges: [{from,to,weight}] }

function dijkstra(graph, startId, endId) {
  // Construire la carte d'adjacence
  const adj = {};
  graph.nodes.forEach(n => adj[n.id] = []);
  graph.edges.forEach(e => {
    // graphe non orienté (bidirectionnel)
    adj[e.from].push({ to: e.to, w: e.weight });
    adj[e.to].push({ to: e.from, w: e.weight });
  });

  // initialisation
  const dist = {};
  const prev = {};
  const visited = new Set();
  graph.nodes.forEach(n => {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  });
  dist[startId] = 0;

  // simple priorité: on sélectionne le noeud non visité de distance minimale
  while (true) {
    let u = null;
    let best = Infinity;
    for (const nodeId in dist) {
      if (!visited.has(nodeId) && dist[nodeId] < best) {
        best = dist[nodeId];
        u = nodeId;
      }
    }
    if (u === null) break;
    if (u === endId) break;
    visited.add(u);

    for (const edge of adj[u]) {
      if (visited.has(edge.to)) continue;
      const alt = dist[u] + edge.w;
      if (alt < dist[edge.to]) {
        dist[edge.to] = alt;
        prev[edge.to] = u;
      }
    }
  }

  // reconstruire le chemin
  const path = [];
  let cur = endId;
  if (prev[cur] !== null || cur === startId) {
    while (cur) {
      path.unshift(cur);
      cur = prev[cur];
    }
  }

  return {
    distance: dist[endId] === Infinity ? null : dist[endId],
    path // tableau d'ids
  };
}
