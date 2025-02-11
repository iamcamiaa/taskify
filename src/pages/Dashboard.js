import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <Link to="/">Log out</Link>
        </div>
    );
}