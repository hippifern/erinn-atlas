import Popup from "./Components/UI/Popup";
import "./css/App.css";

import InnScene from "./Scenes/Inn";
function App() {
    return (
        <>
            <div className="ui">
                <Popup />
            </div>
            <InnScene />
        </>
    );
}

export default App;
