function Popup({ children, data, ref }) {
    console.log(data);
    return (
        <div ref={ref} className="popup-outer-container">
            <div className="popup-inner-container">{children}</div>
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
        </div>
    );
}

export default Popup;
