import './App.css';
import EmojiCounter from "./EmojiCounter";

function App() {
  return (
    <div className="App-header">
      <h1>Emoji Counter</h1>

      <EmojiCounter pic="Love" />
      <EmojiCounter pic="Like" />
      <EmojiCounter pic="Sad" />
    </div>
  );
}

export default App;
