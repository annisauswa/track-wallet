import Advertisement from "./components/home/advertisement";
import Features from "./components/home/features";
import Header from "./components/home/header";
import WelcomePage from "./components/home/welcoming";
import Navbar from "./components/navbar";
import RecentHistory from "./components/recent-history";

export default function Home() {
  return (
    <main className="min-h-full w-full flex flex-col items-center">
      <div className="max-w-[389px] items-center text-sm bg-blackPrimary">
        <Header />
        <Features />
        <Advertisement />
        <RecentHistory />
        <Navbar />
      </div>
    </main>
  );
}
