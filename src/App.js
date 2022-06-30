import './App.scss';
import { Header } from "./components/header/Header";
import { MainLayout } from "./components/main-layout/Main-layout";

function App() {
    return (
        <div className="main-block">
            <Header/>
            <MainLayout/>
        </div>
    );
}

export default App;
