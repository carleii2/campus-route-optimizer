# Campus Route Optimizer

## Overview
The Campus Route Optimizer is a web application designed to help students and visitors navigate the university campus efficiently. By utilizing Dijkstra's algorithm, the application calculates the shortest paths between various locations on campus, making it easier for users to find their way.

## Features
- **Interactive Campus Map**: Visual representation of the campus layout with nodes (buildings) and edges (paths).
- **Route Calculation**: Input starting and ending points to receive the optimal route along with estimated travel time.
- **User-Friendly Interface**: Simple form for entering route details and displaying results.

## Project Structure
```
campus-route-optimizer
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── algorithms
│   │   └── dijkstra.js     # Implementation of Dijkstra's algorithm
│   ├── components
│   │   ├── CampusMap.js    # Component for rendering the campus map
│   │   └── RouteForm.js     # Component for user input
│   ├── data
│   │   └── campus-graph.js  # Graph data representing the campus layout
│   ├── styles
│   │   └── main.css         # CSS styles for the application
│   └── app.js               # Main JavaScript entry point
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd campus-route-optimizer
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.
3. Use the Route Form to enter your starting point and destination, then submit to view the calculated route on the Campus Map.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.