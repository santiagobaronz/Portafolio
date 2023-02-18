import { Outlet } from "react-router-dom";
import { Footer } from "./components/templates/Footer";
import { Header } from "./components/templates/Header";

export default function Root() {
	return (
	  <>
	  	<Header/>
			<div id="content"><Outlet /></div>
		<Footer/>
	  </>
	);
  }