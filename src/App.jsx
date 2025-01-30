import "./App.css";
import Button from "./components/button/button";
import SideBar from "./components/sidebar/sideBar";

function App() {
  return (
    <>
      <div className="testContainer flex flex-col justify-center items-center h-screen w-screen bg-gray-200">
        <h1 className="text-red-900 text-4xl border-2 border-amber-400 m-10">
          Test Text
        </h1>
        <Button />
        <SideBar />
      </div>
    </>
  );
}

export default App;
