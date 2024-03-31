import Features from "./components/home/features";
import Header from "./components/home/header";
import WelcomePage from "./components/home/welcoming";

export default function Home() {
  return (
    <main className="min-h-full w-full flex flex-col items-center">
      <div className="max-w-[389px] items-center text-sm bg-blackPrimary">
        <WelcomePage />
        <Header />
        <Features />
      </div>
    </main>
  );
}
