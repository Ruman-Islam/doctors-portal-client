import { toast } from "react-toastify";

const UseNotify = () => {

    const notifyInfo = (message) => {
        toast.info(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
            className: 'text-sm'
        });
    }
    const notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
            className: 'text-sm'
        });
    }

    const notifyWarning = (message) => {
        toast.warn(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
            className: 'text-sm'
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
            className: 'text-sm'
        });
    }

    return { notifyInfo, notifySuccess, notifyWarning, notifyError };
}

export default UseNotify;