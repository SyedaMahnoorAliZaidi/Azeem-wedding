import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.location.replace("/wedding.html");
  }, []);

  return (
    <div className="boot">
      <p>Opening invite…</p>
    </div>
  );
}
