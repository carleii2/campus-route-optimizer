# 🎓 Campus Route Optimizer

## 📌 Description
Campus Route Optimizer est une application web simple qui aide les étudiants à trouver le **chemin le plus court** entre deux points du campus (bâtiments, salles, bibliothèques, restaurants universitaires, etc.).

Le projet utilise un **graphe pondéré** pour modéliser le campus et applique **l’algorithme de Dijkstra** en JavaScript pur (sans frameworks ni librairies externes).

---

## 🚀 Fonctionnalités
- Sélection du point de départ et de la destination.
- Calcul du chemin le plus rapide avec l’algorithme de Dijkstra.
- Affichage du temps estimé de trajet.
- Détails étape par étape du chemin (ex: Amphi A → Couloir B → Bibliothèque → Salle 302).
- (Optionnel) Visualisation du chemin sur un plan simplifié du campus (via `<canvas>`).

---

## 🛠️ Technologies utilisées
- **HTML5** – structure de l’application.
- **CSS3** – design et mise en page.
- **JavaScript (ES6)** – logique du graphe et algorithme de Dijkstra.
- **JSON** – données représentant le graphe du campus.

---

## 📂 Structure du projet
├── index.html # Page principale
├── style.css # Styles de l'application
├── app.js # Logique principale
├── dijkstra.js # Implémentation de l'algorithme de Dijkstra
└── campus-graph.js # Données du graphe (campus)
---

## ⚙️ Installation & Utilisation
1. **Cloner le projet** :
   git clone https://github.com/carleii2/campus-route-optimizer.git
   cd campus-route-optimizer
