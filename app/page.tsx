export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 mb-6">
              🚀 AI Digital Marketing Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Grow Faster With <span className="text-green-400">GRYORA</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              Premium SEO, Social Media Marketing, Paid Ads,
              Website Design and AI-powered digital growth solutions.
            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="https://wa.me/918005110277"
                className="px-8 py-4 rounded-full bg-green-400 text-black font-bold"
              >
                Start Project
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/20"
              >
                Explore Services
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Marketing"
              className="rounded-[30px]"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 lg:px-20 py-24"
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black mb-4">
            Our <span className="text-green-400">Services</span>
          </h2>

          <p className="text-gray-400">
            Professional digital growth solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "SEO Optimization",
            "Social Media Marketing",
            "Google Ads",
            "Meta Ads",
            "Website Design",
            "Lead Generation"
          ].map((service, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                {service}
              </h3>

              <p className="text-gray-300 leading-7">
                High-quality marketing strategies to grow your business online.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="px-6 lg:px-20 py-24">

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">

          <h2 className="text-5xl font-black mb-6">
            Contact <span className="text-green-400">GRYORA</span>
          </h2>

          <div className="space-y-4 text-lg text-gray-300">

            <p>📞 +91 8005110277</p>
            <p>📧 info.gryora@gmail.com</p>
            <p>📢 Telegram: gryora</p>
            <p>💼 LinkedIn: gryora</p>

          </div>

        </div>

      </section>

    </main>
  );
}