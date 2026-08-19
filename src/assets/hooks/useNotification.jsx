import {useCallback, useState} from 'react';
import Notification from '../components/notification';

const useNotification = () => {
    const [notification, setNotification] = useState(null)

    let timer;

    const triggerNotification = useCallback((notificationProps) => {
        clearTimeout(timer);
        setNotification(notificationProps);
        timer = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    }, []);

    const NotificationComponent = notification ? (
        <div className="bottom-right">
            <Notification {...notification}/>
        </div>
    ) : null;

    return {NotificationComponent, triggerNotification};
};

export default useNotification;