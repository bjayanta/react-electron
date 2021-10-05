import axios from "axios";

const baseURL = "http://localhost:8080/maxsop";

function App() {
  axios.get(baseURL).then((response) => {
    console.log(response.data);
  });

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
