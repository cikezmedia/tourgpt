import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="absolute flex">
        <div className="bgShape1 bgTeal opacity50 bgBlur"></div>
        <div className="bgShape2 bgPrimary opacity50 bgBlur"></div>
        <div className="bgShape1 bgPurple opacity50 bgBlur"></div>
      </div>
      <section className="flex flex-col max-w-3xl z-50 text-center py-24 gap-5 px-4">
        <h1 className="font-extrabold text-5xl leading-tight">
          Do You Plan To Travel But Don't Know Where To Visit ?
        </h1>
        <p className="text-gray-400">
          Tour GPT can help you explore countries and cities to know the best
          city that matches your travel needs. It's super easy to plan your next
          trip.
        </p>
        <div className="mt-3">
          <Link
            className="cursor-pointer capitalize font-medium px-8 py-3 bg-[#2B59FF] text-white rounded-3xl"
            href="/"
          >
            Let's Get Started
          </Link>
        </div>
      </section>
      <section className="bg-gray-600 p-4 py-16 w-full mt-28">
        <div className="flex flex-col-reverse gap-6 md:flex-row mx-auto max-w-6xl items-center justify-between">
          <div className="flex flex-col gap-5 md:w-1/2 w-full">
            <h1 className="flex font-extrabold text-2xl md:text-3xl max-w-lg">
              We have helped so many people plan their Travels in the past
            </h1>
            <div className="flex flex-col gap-3">
              <p>
                Tour GPT goes beyond basic travel planning by leveraging natural
                language processing to understand your specific needs and
                preferences. It can provide real-time updates on weather
                conditions, local events, transportation options, and safety
                advisories, ensuring a smooth and enjoyable journey from start
                to finish.
              </p>
              <p>
                Whether you're looking for off-the-beaten-path experiences,
                iconic landmarks, culinary delights, or relaxation spots, Tour
                GPT offers curated suggestions that align with your travel
                goals.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-4xl">120k+</h1>
                <span className="text-green-300">Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-4xl">3k+</h1>
                <span className="text-green-300">Active Users</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/image.png"
              width={625}
              height={460}
              alt="Plan"
              priority
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
