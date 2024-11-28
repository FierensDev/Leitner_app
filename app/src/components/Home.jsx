import React from "react";
import { useError } from "../hooks/ErrorContext";

export default function Home() {
  const { error, setError, clearError } = useError();
  return (
    <div>
      <h1 className="text-red-500">home</h1>
      <button
        onClick={() => {
          setError(!error);
        }}
      >
        showError
      </button>
    </div>
  );
}
