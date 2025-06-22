import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <Link to="/" className="btn back-home-btn">
        Back to Home
      </Link>
    </div>
  );
}
