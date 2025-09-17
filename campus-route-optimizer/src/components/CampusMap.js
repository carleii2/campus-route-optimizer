import React, { useEffect, useRef } from 'react';
import { campusGraph } from '../data/campus-graph';
import { findShortestPath } from '../algorithms/dijkstra';

const CampusMap = ({ startNode, endNode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const nodes = campusGraph.nodes;
        const edges = campusGraph.edges;

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw nodes
        nodes.forEach(node => {
            context.beginPath();
            context.arc(node.x, node.y, 10, 0, Math.PI * 2);
            context.fillStyle = 'blue';
            context.fill();
            context.strokeText(node.name, node.x + 12, node.y);
        });

        // Draw edges
        edges.forEach(edge => {
            const start = nodes.find(node => node.id === edge.start);
            const end = nodes.find(node => node.id === edge.end);
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.strokeStyle = 'gray';
            context.stroke();
        });

        // Draw the shortest path if both nodes are provided
        if (startNode && endNode) {
            const shortestPath = findShortestPath(startNode, endNode, campusGraph);
            context.strokeStyle = 'red';
            context.lineWidth = 3;

            for (let i = 0; i < shortestPath.length - 1; i++) {
                const start = nodes.find(node => node.id === shortestPath[i]);
                const end = nodes.find(node => node.id === shortestPath[i + 1]);
                context.beginPath();
                context.moveTo(start.x, start.y);
                context.lineTo(end.x, end.y);
                context.stroke();
            }
        }
    }, [startNode, endNode]);

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default CampusMap;