import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import "/public/styles.css";
import "../../public/styles.css";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((x) => (
        <Note key={x.key} title={x.title} content={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
