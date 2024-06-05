import '../styles/home.css'
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";

export function Home() {
    return (<>
            <div className="homepage">
                <NavBar />


                <Footer/>
            </div>
        </>)
}
