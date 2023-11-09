import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 6],
  ["Eat", 2],
  ["Commute", 2],
  ["Family", 3.5],
  ["Study", 4],
  ["Watch TV", 0.5],
  ["Sleep", 6],
];

export const options = {
  title: "My Daily Activities",
};

function App() {
  return <div>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </div>;
}

export default App;
