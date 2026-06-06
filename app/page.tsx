export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="flex justify-between items-center px-6 lg:px-20 py-4">
          <h1 className="text-2xl font-black text-blue-400">GRYORA</h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/918005110277"
            className="px-5 py-2 bg-blue-500 rounded-full font-bold"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 lg:px-20 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black">
          Grow Your Business With <span className="text-blue-400">GRYORA</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          We help brands grow using SEO, Ads, and Websites.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <a href="https://wa.me/918005110277" className="px-8 py-4 bg-blue-500 rounded-full font-bold">
            Get Free Strategy
          </a>
          <a href="#services" className="px-8 py-4 border border-white/20 rounded-full">
            Our Services
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-20 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-4xl font-black text-blue-400">500+</h2>
            <p>Projects</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-4xl font-black text-cyan-400">120+</h2>
            <p>Clients</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-4xl font-black text-purple-400">5X</h2>
            <p>Growth</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 lg:px-20 py-24">
        <h2 className="text-center text-5xl font-black mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-blue-400 text-xl font-bold">SEO</h3>
            <p>Rank on Google</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-cyan-400 text-xl font-bold">Ads</h3>
            <p>High ROI campaigns</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-purple-400 text-xl font-bold">Web Dev</h3>
            <p>Conversion websites</p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-20 py-24">
        <h2 className="text-center text-5xl font-black mb-12">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            “Best agency, growth 3x”
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            “Amazing results”
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            “Highly recommended”
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24 text-center">
        <h2 className="text-5xl font-black mb-6">Ready To Grow?</h2>
        <a href="https://wa.me/918005110277" className="px-10 py-5 bg-blue-500 rounded-full font-bold">
          Get Consultation
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-blue-400 text-2xl font-black">GRYORA</h2>
            <p>Digital Marketing Agency</p>
          </div>

          <div>
            <p>📞 8005110277</p>
            <p>📧 gryorasolution@gmail.com</p>
            <p>📍 Lucknow</p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/918005110277"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          💬
        </div>
      </a>
{/* ================= NAVBAR ================= */}
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
  <div className="flex justify-between items-center px-6 lg:px-20 py-4">

    <h1 className="text-2xl font-black text-blue-400">GRYORA</h1>

    <div className="hidden md:flex gap-8 text-gray-300">
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

    <a
      href="https://wa.me/918005110277"
      className="px-5 py-2 bg-blue-500 rounded-full font-bold"
    >
      Get Quote
    </a>

  </div>
</nav>

{/* ================= HERO SECTION ================= */}
<section className="px-6 lg:px-20 pt-32 pb-20 text-center relative overflow-hidden">

  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[160px]" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[160px]" />

  <div className="relative z-10">

    <h1 className="text-5xl md:text-7xl font-black leading-tight">
      Grow Your Business With <span className="text-blue-400">GRYORA</span>
    </h1>

    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
      We help businesses scale using SEO, Meta Ads, Google Ads, and High converting websites.
    </p>

    <div className="mt-10 flex justify-center gap-5 flex-wrap">

      <a
        href="https://wa.me/918005110277"
        className="px-8 py-4 bg-blue-500 rounded-full font-bold hover:scale-105 transition"
      >
        Free Consultation
      </a>

      <a
        href="#about"
        className="px-8 py-4 border border-white/20 rounded-full"
      >
        Learn More
      </a>

    </div>

  </div>
</section>

{/* ================= ABOUT ================= */}
<section id="about" className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-10">
    About GRYORA
  </h2>

  <div className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed">

    <p>
      GRYORA is a result-driven digital marketing agency focused on helping
      businesses grow with modern strategies, performance marketing, and
      conversion-focused websites.
    </p>

    <p className="mt-4">
      Our mission is to turn small businesses into powerful brands using data,
      creativity, and technology.
    </p>

  </div>

</section>

{/* ================= FOUNDER SECTION ================= */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-y border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Founder
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* image placeholder */}
    <div className="w-full h-[350px] bg-white/10 rounded-2xl flex items-center justify-center">
      Founder Image
    </div>

    <div>

      <h3 className="text-3xl font-bold text-blue-400">
        Founder Name
      </h3>

      <p className="text-gray-300 mt-4 leading-relaxed">
        With strong experience in digital marketing, performance ads, and
        brand building, the founder of GRYORA has helped multiple businesses
        achieve scalable growth through data-driven strategies.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap">

        <a
          href="https://wa.me/918005110277"
          className="px-6 py-3 bg-blue-500 rounded-full font-bold"
        >
          Contact Founder
        </a>

        <a
          href="#services"
          className="px-6 py-3 border border-white/20 rounded-full"
        >
          View Services
        </a>

      </div>

    </div>

  </div>

</section>

{/* ================= END MARKER (DO NOT TOUCH) ================= */}{/* ================= SERVICES ================= */}
<section id="services" className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-blue-400 font-bold text-xl">SEO</h3>
      <p className="text-gray-300 mt-2">Rank your business on Google.</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-cyan-400 font-bold text-xl">Social Media</h3>
      <p className="text-gray-300 mt-2">Grow Instagram & Facebook pages.</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-purple-400 font-bold text-xl">Meta Ads</h3>
      <p className="text-gray-300 mt-2">High ROI Facebook & Instagram ads.</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-blue-400 font-bold text-xl">Google Ads</h3>
      <p className="text-gray-300 mt-2">Instant leads from search ads.</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-cyan-400 font-bold text-xl">Website Dev</h3>
      <p className="text-gray-300 mt-2">High converting websites.</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-purple-400 font-bold text-xl">Branding</h3>
      <p className="text-gray-300 mt-2">Build strong brand identity.</p>
    </div>

  </div>

</section>

{/* ================= INDUSTRIES ================= */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-y border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Industries We Serve
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      "Restaurants",
      "Hotels",
      "Healthcare",
      "Schools",
      "Real Estate",
      "E-commerce",
      "Startups",
      "Local Businesses"
    ].map((item, i) => (
      <div key={i} className="p-4 border border-white/10 rounded-xl bg-black/30">
        {item}
      </div>
    ))}

  </div>

</section>

{/* ================= RESULTS ================= */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Results & Case Studies
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-blue-400 font-bold">Restaurant Growth</h3>
      <p className="text-gray-300 mt-2">Leads increased by 300%</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-cyan-400 font-bold">E-commerce Sales</h3>
      <p className="text-gray-300 mt-2">Revenue doubled in 60 days</p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-purple-400 font-bold">Brand Awareness</h3>
      <p className="text-gray-300 mt-2">10x social reach growth</p>
    </div>

  </div>

</section>

{/* ================= TESTIMONIALS ================= */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-t border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Client Testimonials
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
      “Amazing results from Gryora. Highly recommended!”
    </div>

    <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
      “Best digital marketing agency in our city.”
    </div>

    <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
      “We saw real business growth in 2 months.”
    </div>

  </div>

</section>{/* ================= CAREERS ================= */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Careers / Hiring
  </h2>

  <div className="max-w-4xl mx-auto text-center text-gray-300">

    <p>We are hiring talented individuals to join GRYORA team.</p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        Digital Marketing Executive
      </div>

      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        Sales Executive
      </div>

      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        Calling Executive
      </div>

      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        Graphic Designer
      </div>

    </div>

    <a
      href="https://wa.me/918005110277"
      className="inline-block mt-10 px-8 py-4 bg-blue-500 rounded-full font-bold"
    >
      Apply Now
    </a>

  </div>

</section>

{/* ================= PARTNERS ================= */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-y border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Partner With Us
  </h2>

  <p className="text-center text-gray-300 max-w-2xl mx-auto">
    Freelancers, agencies and referral partners can collaborate with GRYORA
    to earn high commissions.
  </p>

</section>

{/* ================= PACKAGES ================= */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Packages
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {["Basic", "Standard", "Premium", "Enterprise"].map((p, i) => (
      <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-blue-400">{p}</h3>
        <p className="text-gray-300 mt-2">Custom pricing available</p>
      </div>
    ))}

  </div>

</section>

{/* ================= FREE AUDIT ================= */}
<section className="px-6 lg:px-20 py-24 text-center bg-white/5 border-y border-white/10">

  <h2 className="text-4xl md:text-6xl font-black mb-6">
    Free Business Audit
  </h2>

  <p className="text-gray-300 max-w-2xl mx-auto">
    Get a free analysis of your business and marketing strategy.
  </p>

  <a
    href="https://wa.me/918005110277"
    className="inline-block mt-8 px-10 py-5 bg-blue-500 rounded-full font-bold"
  >
    Get Free Audit
  </a>

</section>

{/* ================= FAQ ================= */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    FAQ
  </h2>

  <div className="max-w-3xl mx-auto space-y-6 text-gray-300">

    <div>Q: How long results take? → 15-60 days</div>
    <div>Q: Do you run ads? → Yes</div>
    <div>Q: Monthly packages? → Yes available</div>

  </div>

</section>

{/* ================= CONTACT ================= */}
<section id="contact" className="px-6 lg:px-20 py-24 bg-white/5 border-t border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Contact Us
  </h2>

  <div className="text-center text-gray-300 space-y-2">

    <p>📞 8005110277</p>
    <p>📧 gryorasolution@gmail.com</p>
    <p>📍 Lucknow, India</p>

    <a
      href="https://wa.me/918005110277"
      className="inline-block mt-6 px-8 py-4 bg-blue-500 rounded-full font-bold"
    >
      Message on WhatsApp
    </a>

  </div>

</section>

{/* ================= PREMIUM FOOTER ================= */}
<footer className="border-t border-white/10 py-12 px-6 lg:px-20">

  <div className="flex flex-col md:flex-row justify-between gap-8">

    <div>
      <h2 className="text-blue-400 text-3xl font-black">GRYORA</h2>
      <p className="text-gray-400 mt-2">
        Result-driven digital marketing agency.
      </p>
    </div>

    <div className="text-gray-400">
      <p>📞 8005110277</p>
      <p>📧 gryorasolution@gmail.com</p>
      <p>📍 Lucknow</p>
    </div>

  </div>

  <p className="text-center text-gray-500 mt-10">
    © 2026 GRYORA. All Rights Reserved.
  </p>

</footer>

{/* ================= FLOATING WHATSAPP ================= */}
<a
  href="https://wa.me/918005110277"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse text-2xl">
    💬
  </div>
</a>{/* ================= DETAILED SERVICES + DELIVERABLES ================= */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    What We Actually Deliver
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
      <h3 className="text-blue-400 font-bold text-xl">SEO (Search Engine Optimization)</h3>
      <p className="text-gray-300 mt-2">
        Keyword ranking, Google Maps optimization, backlinks, and organic traffic growth.
      </p>
    </div>

    <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
      <h3 className="text-cyan-400 font-bold text-xl">Meta Ads (Facebook/Instagram)</h3>
      <p className="text-gray-300 mt-2">
        High converting ad campaigns, lead generation funnels, retargeting setup.
      </p>
    </div>

    <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
      <h3 className="text-purple-400 font-bold text-xl">Google Ads</h3>
      <p className="text-gray-300 mt-2">
        Search ads, display ads, conversion tracking, keyword bidding strategy.
      </p>
    </div>

    <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
      <h3 className="text-blue-400 font-bold text-xl">Website Development</h3>
      <p className="text-gray-300 mt-2">
        High speed landing pages, business websites, conversion optimization.
      </p>
    </div>

  </div>

</section>

{/* ================= PACKAGES (IMPORTANT) ================= */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-y border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Pricing Packages
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* BASIC */}
    <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
      <h3 className="text-xl font-bold text-blue-400">Basic Plan</h3>
      <p className="text-gray-300 mt-2">
        Social media management + basic posts + monthly report
      </p>
      <p className="mt-4 font-bold">₹5,000 - ₹10,000</p>
    </div>

    {/* STANDARD */}
    <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
      <h3 className="text-xl font-bold text-cyan-400">Standard Plan</h3>
      <p className="text-gray-300 mt-2">
        SEO + Social media + Ads management + lead generation
      </p>
      <p className="mt-4 font-bold">₹10,000 - ₹25,000</p>
    </div>

    {/* PREMIUM */}
    <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
      <h3 className="text-xl font-bold text-purple-400">Premium Plan</h3>
      <p className="text-gray-300 mt-2">
        Full marketing system + ads + SEO + branding + funnel setup
      </p>
      <p className="mt-4 font-bold">₹25,000 - ₹75,000+</p>
    </div>

  </div>

</section>

{/* ================= FINAL CTA ================= */}
<section className="px-6 lg:px-20 py-24 text-center">

  <h2 className="text-4xl md:text-6xl font-black mb-6">
    Ready To Grow Your Business?
  </h2>

  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
    Book your free consultation and get a custom growth strategy for your business.
  </p>

  <a
    href="https://wa.me/918005110277"
    className="px-10 py-5 bg-blue-500 rounded-full font-bold"
  >
    Book Free Strategy Call
  </a>

</section>{/* SERVICES DETAILS (CLICK OPEN) */}
<section className="px-6 lg:px-20 py-24">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Explore Our Services
  </h2>

  <div className="space-y-4 max-w-4xl mx-auto">

    <details className="p-6 border border-white/10 rounded-2xl bg-white/5">
      <summary className="cursor-pointer text-xl font-bold text-blue-400">
        SEO Optimization
      </summary>
      <p className="mt-4 text-gray-300">
        ✔ Google ranking<br/>
        ✔ Local SEO<br/>
        ✔ Keywords setup<br/>
        ✔ Monthly report<br/>
        💰 ₹10,000/month
      </p>
    </details>

    <details className="p-6 border border-white/10 rounded-2xl bg-white/5">
      <summary className="cursor-pointer text-xl font-bold text-cyan-400">
        Meta Ads
      </summary>
      <p className="mt-4 text-gray-300">
        ✔ Facebook Ads<br/>
        ✔ Instagram Ads<br/>
        ✔ Lead generation<br/>
        ✔ Retargeting<br/>
        💰 ₹12,000/month
      </p>
    </details>

    <details className="p-6 border border-white/10 rounded-2xl bg-white/5">
      <summary className="cursor-pointer text-xl font-bold text-purple-400">
        E-Commerce Marketing
      </summary>
      <p className="mt-4 text-gray-300">
        ✔ Product ads<br/>
        ✔ Sales funnel<br/>
        ✔ Shopify support<br/>
        ✔ ROAS focus<br/>
        💰 ₹15,000/month
      </p>
    </details>

  </div>

</section>{/* FREE AUDIT FORM */}
<section className="px-6 lg:px-20 py-24 bg-white/5 border-y border-white/10">

  <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
    Free Business Audit
  </h2>

  <form className="max-w-2xl mx-auto space-y-4">

    <input
      type="text"
      placeholder="Name"
      className="w-full p-4 rounded-xl bg-black border border-white/10"
    />

    <input
      type="number"
      placeholder="Phone"
      className="w-full p-4 rounded-xl bg-black border border-white/10"
    />

    <input
      type="text"
      placeholder="Business Type"
      className="w-full p-4 rounded-xl bg-black border border-white/10"
    />

    <button
      type="button"
      className="w-full py-4 bg-blue-500 rounded-xl font-bold"
    >
      Submit
    </button>

  </form>

</section>
    </main>
  );
}