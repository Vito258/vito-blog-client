import { Alert, Snackbar } from "@mui/material";
import { createRoot } from "react-dom/client";

interface MessageConfig {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
}

const message = {
  success(message: string, duration: number = 3000) {
    this.show({ message, type: "success", duration });
  },
  error(message: string, duration: number = 3000) {
    this.show({ message, type: "error", duration });
  },
  info(message: string, duration: number = 3000) {
    this.show({ message, type: "info", duration });
  },
  warning(message: string, duration: number = 3000) {
    this.show({ message, type: "warning", duration });
  },
  show({ message, type = "info", duration = 3000 }: MessageConfig) {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const root = createRoot(div);

    const destroy = () => {
      root.unmount();
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    };

    root.render(
      <Snackbar
        open={true}
        autoHideDuration={duration}
        onClose={destroy}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={type} onClose={destroy}>
          {message}
        </Alert>
      </Snackbar>
    );
  },
};

export default message;
