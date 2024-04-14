import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";



export default function Home() {
  return (
    <main className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm dark:bg-gray-800">
      <div className=" w-full mx-auto px-4 sm:items-center sm:justify-between">
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
