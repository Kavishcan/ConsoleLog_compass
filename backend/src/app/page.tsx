import Dashboard from "@/components/features/dashboard";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Dashboard />
      </main>
    </div>
  );
}