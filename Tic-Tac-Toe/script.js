body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}

#title {
  margin-bottom: 20px; /* Add spacing before the board */
}

#board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#message {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

#reset-button {
  margin-top: 20px; /* Add spacing below the board */
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
