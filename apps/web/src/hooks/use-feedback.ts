import { useState } from "react";
import { api } from "../services/api";

type FeedbackStatus = "idle" | "loading" | "success" | "error";

/**
 * A generalized mutation hook for feedback submissions.
 * In a staff-level architecture, this would be replaced by TanStack Query.
 */
export function useFeedback<T extends Record<string, any>>(path: string) {
  const [status, setStatus] = useState<FeedbackStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: T) => {
    setStatus("loading");
    setError(null);

    try {
      // @ts-ignore - Dynamic path typing would require more complex mapping
      await api.post(path as any, data);
      setStatus("success");
      return true;
    } catch (err: any) {
      setError(err.message || "Failed to submit request");
      setStatus("error");
      return false;
    }
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
  };

  return {
    status,
    error,
    submit,
    reset,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  };
}
