import cross from "../../assets/cross.png";

function CloseButton({ onclick }) {
    return <img className="closs-cross" onClick={onclick} src={cross} alt="" />;
}

export default CloseButton;
