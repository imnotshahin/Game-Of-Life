# Game of Life

A JavaScript implementation of **Conway’s Game of Life**.

This project demonstrates the behavior of cellular automata on a 2D grid, applying the classic Life rules to visualize how simple deterministic rules can create complex, evolving patterns in real time.

---

## Rules of the Game

Conway’s Game of Life is a cellular automaton devised by mathematician **John Horton Conway**.

The game is played on a two-dimensional grid of cells, where each cell is either *alive* or *dead*.  
At each generation, the state of every cell is updated simultaneously according to these rules:

1. Any live cell with fewer than two live neighbors dies *(underpopulation)*.  
2. Any live cell with two or three live neighbors survives.  
3. Any live cell with more than three live neighbors dies *(overpopulation)*.  
4. Any dead cell with exactly three live neighbors becomes a live cell *(reproduction)*.

---

## Implementation Details

This project is built using plain **vanilla JavaScript**, standard **HTML**, and **CSS**, without any external frameworks.

- The grid is rendered as an HTML `<table>`, each cell representing one cell of the automaton.
- Users can click to toggle cells alive before running the simulation.
- Each generation is computed using a temporary 2D array to prevent interference during state updates.
- Both step-by-step and continuous run modes are available.
- Rendering logic is kept separate from cell state logic for clarity and easy modification.

---

## Technical Notes

- Employs a **double-buffering** approach (via an intermediate array) for accurate next-generation computations.  
- Neighbor detection includes diagonals, matching Conway’s original rules.  
- Designed for **readability and educational clarity** rather than raw performance optimization.

---

## Controls

| Button | Function |
|--------|-----------|
| **Next** | Advances the simulation by one generation |
| **Play** | Runs the simulation continuously |
| **Stop** | Pauses the simulation |
| **Generate** | Randomly populates the grid with a given number of live cells |

Inputs:
- **Speed (ms)** → delay between generations in milliseconds  
- **Number** → number of initial random live cells

---

## Live Demo (optional)

If hosted (e.g., via GitHub Pages), add a demo link here:  
👉 [Live Demo](https://imnotshahin.github.io/Game-Of-Life)

---

## License

This project is open-source and available under the MIT License.
