export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        {/* Loading text with pulse animation */}
        <h2 className="text-muted-foreground mb-2 animate-pulse text-2xl font-semibold">
          Loading
        </h2>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          <div className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"></div>
          <div
            className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </main>
  );
}
