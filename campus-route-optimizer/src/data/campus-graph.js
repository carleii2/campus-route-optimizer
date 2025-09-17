const campusGraph = {
    nodes: {
        A: { name: "Library", edges: { B: 5, C: 10 } },
        B: { name: "Student Center", edges: { A: 5, D: 2 } },
        C: { name: "Science Building", edges: { A: 10, D: 3 } },
        D: { name: "Engineering Building", edges: { B: 2, C: 3 } }
    },
    edges: [
        { from: "A", to: "B", weight: 5 },
        { from: "A", to: "C", weight: 10 },
        { from: "B", to: "D", weight: 2 },
        { from: "C", to: "D", weight: 3 }
    ]
};

export default campusGraph;