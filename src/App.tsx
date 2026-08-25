import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PublicAppRoutes } from "./auth/public/PublicAppRoutes";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system" switchable>
        <Toaster />
        <PublicAppRoutes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
