import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div className="bg-[url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg')] bg-no-repeat bg-cover w-[100%] h-[25rem] flex flex-col items-center">
        <Navbar />
        <Header />
        <fasicon />
      </div>
    </>
  );
}

export default App