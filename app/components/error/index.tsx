interface ShowErrorProps {
  error: Error;
  heading?: string;
}

export function ShowError({ error, heading }: ShowErrorProps) {
  const errorMessage = error.message || "An unknown error occurred";
  const isTypeError = error instanceof TypeError;

  return (
    <div className="flex-1 p-2">
      <h1 className="text-2xl font-bold text-red-600">{heading || "Error"}</h1>
      <p className="text-sm mb-4">Something went wrong while loading this page.</p>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-red-200">
        <h2 className="font-semibold mb-2">Error Details:</h2>
        <p className="text-sm text-gray-700 mb-2">
          {isTypeError ? "There was a problem accessing some data: " : ""}
          {errorMessage}
        </p>
        
        {error.stack && (
          <details className="mt-2">
            <summary className="text-sm text-gray-600 cursor-pointer">Technical Details</summary>
            <pre className="text-xs mt-2 p-2 bg-gray-100 rounded overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
