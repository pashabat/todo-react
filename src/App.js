import './App.scss';
import { Header } from "./components/header/Header";
import { MainLayout } from "./components/main-layout/Main-layout";
import { Route, Routes } from 'react-router-dom';
import { History } from './components/History';

function App() {
    return (
        <div className="main-block">
            <Header/>
            <Routes>
                <Route path="/" element={<MainLayout/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </div>
    );
}

export default App;
