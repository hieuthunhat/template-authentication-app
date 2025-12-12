import socketIO from 'socket.io-client';


const useSocket = () => {
    let socket = null;
    try {
        socket = socketIO.connect('http://localhost:5000');
    } catch (error) {
        console.error("Socket connection failed:", error);
    }
    
    return socket;
    // Initialize and manage socket connection here

}

export default useSocket;