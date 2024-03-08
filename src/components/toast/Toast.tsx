import { Toaster } from "react-hot-toast";

const Toast = () => (
  <Toaster
    toastOptions={{ className: "text-center" }}
    position="bottom-right"
  />
);

export default Toast;
