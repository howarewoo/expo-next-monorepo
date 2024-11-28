import { HomeIcon, HomeScreen } from "@repo/surfaces";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen bg-white">
      <main className="flex flex-col items-center">
        <HomeIcon />
        <HomeScreen />
      </main>
    </div>
  );
}
