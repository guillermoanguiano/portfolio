import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="container my-3 mx-auto w-full md:w-[80%]">
      <Navbar locale={locale} />
      <div className="w-[65%] mx-auto">
        <About />
      </div>
    </div>
  );
}
