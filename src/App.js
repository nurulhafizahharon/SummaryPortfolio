import "./App.css";
import kitkat from "./assets/kitkat.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div className="App-header">
      <img src={kitkat} className="Profile-picture" alt="profile" />
      <h1>&hearts; Nurulhafizah Haron &hearts;</h1>
      <h2>&hearts; Aspiring Software Engineer &hearts;</h2>
      <Card
        header="About me"
        content="I am an aspiring software engineer. I used to be a freelance tutor
        where I specialise as a Mathematics teacher for 12 years. Graduated
        with BSc in Mathematical Science, Specialise in Applied Mathematics
        and Minor in Computing at Nanyang Technological University (NTU). I
        love to code, creating and learning new things and skills."
      />
      <Card
        header="Contact me"
        content="email: nurulhafizahharon@outlook.com"
      />
    </div>
  );
}

export default App;
