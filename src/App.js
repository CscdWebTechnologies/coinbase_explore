import bar from "./components/bar";
import Getstarted from "./components/Get_started";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import CoinTable from "./components/coin_table";
import Earn from "./components/Earn";
import Portfolio from "./components/portFolio";
import Feature from "./components/feature"
import Startearning from "./components/startEarning"
import Footer from "./components/footer";

function App() {
	return (
		<div className="bg-white h-screen">
			<NavBar />
			<Hero />
			<coin_table />
			<Earn />
			<portFolio />
			<Feature />
			<bar />
			<Getstarted />
			<startEarning />
			<footer_bottom />
			
		</div>
	);
}

export default App;
