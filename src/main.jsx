import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context.jsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true}/>
            <App />
        </QueryClientProvider>
    </AppProvider>
);
