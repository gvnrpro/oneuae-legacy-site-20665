import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-6 text-8xl font-serif font-semibold text-primary">404</h1>
        <p className="mb-8 text-2xl font-sans text-muted-foreground font-light">Page not found</p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-sans">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
