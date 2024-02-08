# Multiplayer Card Game

This is a simple console-based multiplayer card game written in Node.js.

## Rules of the Game

- 6 players are dealt 5 cards from two 52-card decks.
- The winner is the one with the highest score.
- Card values: Number cards have their face value, J = 11, Q = 12, K = 13, and A = 11 (not 1).
- In the event of a tie, scores are recalculated based on a "suit score" to break the tie.

## Getting Started

1. **Install Node.js:**
   Ensure that you have Node.js installed on your machine. If not, you can download it from [Node.js website](https://nodejs.org/).

2. **Clone the Repository:**
   Clone this repository to your local machine using the following command:

   ```bash
   git clone <repository_url>
   ```

3. **Navigate to Project Directory:**
   Change to the project directory:

   ```bash
   cd <project_directory>
   ```

4. **Install Dependencies:**
   Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Running the Game

Execute the following command in the terminal to start the card game:

```bash
npm run start
```

Follow the on-screen instructions to view the cards dealt, the winner(s), and the scores for each player.

## Troubleshooting

If you encounter any issues or errors during execution, please refer to the error messages in the console. If the problem persists, feel free to open an issue in the repository.

## Additional Notes

- This application uses Node.js and the `lodash` library for utility functions.
- Feel free to extend or modify the code to add more features or improve functionality.

Enjoy the game!