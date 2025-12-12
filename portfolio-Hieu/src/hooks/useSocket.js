import socketIO from 'socket.io-client';

export const MESSAGE_EVENT = 'message';
export const NOTIFICATION_EVENT = 'notification';

const useSocket = () => {
    let socket = null;

    
    try {
        socket = socketIO.connect('http://localhost:5000');
    } catch (error) {
        console.error("Socket connection failed:", error);
    }

    const emitEvent = (event, data) => {
        if (socket) {
            socket.emit(event, data);
        }
    };

    const subscribeEvent = (event, callback) => {
        if (socket) {
            socket.on(event, callback);
        }
    };

    return { emitEvent, subscribeEvent };
}

export default useSocket;