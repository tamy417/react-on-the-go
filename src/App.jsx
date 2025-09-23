import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const fetchCountries = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<p>Countries are loading...</p>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
