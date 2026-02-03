# Game of Life

A JavaScript implementation of Conway’s Game of Life.
This project simulates cellular automata behavior on a 2D grid, applying classic Life rules to visualize generation-by-generation evolution in real time.

## Rules of the Game

Conway’s Game of Life is a cellular automaton devised by mathematician John Horton Conway.

The game is played on a two-dimensional grid of cells, where each cell is either alive or dead.  
At each generation, the state of every cell is updated simultaneously according to the following rules:

1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors survives.
3. Any live cell with more than three live neighbors dies (overpopulation).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

