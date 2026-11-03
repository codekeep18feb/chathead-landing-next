// src/app/_guards/FeatureGate.jsx
import { notFound, redirect } from "next/navigation";
import { isEnabled } from "../config/features";

export default function FeatureGate({ flag, children, redirectTo }) {
  if (!isEnabled(flag)) {
    if (redirectTo) redirect(redirectTo);
    notFound();
  }
  return children;
}