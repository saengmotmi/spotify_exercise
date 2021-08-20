import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthCheck } from "./hooks";

export default function AuthCheck() {
  const { isLoading } = useAuthCheck();

  if (isLoading) return <div>Loading...</div>;
  return <Redirect to="/" />;
}
