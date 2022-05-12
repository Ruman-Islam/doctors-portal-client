import { toast } from "react-toastify";

const UseNotify = () => {

    const notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        });
    }

    const notifyWarning = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        });
    }

    return { notifySuccess, notifyWarning, notifyError };
}

export default UseNotify;