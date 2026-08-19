const icons = {
    success: "fa-regular fa-circle-check",
    error: "fa-regular fa-circle-xmark"
}

const Notification = ({type, message}) => {

    return (
        <div className={`notification ${type}`}>
            <i className={icons[`${type}`]}></i>
            {message}
        </div>
    );
};

export default Notification;