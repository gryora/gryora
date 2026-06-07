export default function Page() {
 
  const services = [
    { id:"website", title:"Website Development", icon:"🌐", color:"#22c55e", plans:[
        { name:"Basic", price:"₹9,999", features:["5 Pages Website","Mobile Responsive","Contact Form","WhatsApp Button","Basic SEO Setup"] },
        { name:"Standard", price:"₹19,999", features:["10 Pages Website","Premium Design","Speed Optimization","Blog Setup","Advanced SEO Setup"] },
        { name:"Premium", price:"₹39,999+", features:["Custom Design","Advanced Animations","Lead Funnels","CRM Integration","Premium UI/UX"] },
    ]},
    { id:"seo", title:"SEO Services", icon:"🔍", color:"#4ade80", plans:[
        { name:"Basic", price:"₹7,999/mo", features:["Keyword Research","On-Page SEO","Google Business Profile","Monthly Report"] },
        { name:"Standard", price:"₹14,999/mo", features:["On-Page SEO","Off-Page SEO","Local SEO","10-15 Keywords"] },
        { name:"Premium", price:"₹24,999/mo", features:["Full SEO Management","Technical SEO","Competitor Analysis","25+ Keywords"] },
    ]},
    { id:"googleads", title:"Google Ads", icon:"🎯", color:"#86efac", plans:[
        { name:"Basic", price:"₹7,999/mo", features:["Campaign Setup","1 Campaign","Monthly Optimization"] },
        { name:"Standard", price:"₹14,999/mo", features:["Multiple Campaigns","Conversion Tracking","Weekly Optimization"] },
        { name:"Premium", price:"₹24,999/mo", features:["Full Funnel Ads","Landing Page Advice","Advanced Retargeting"] },
    ]},
    { id:"metaads", title:"Meta Ads", icon:"📱", color:"#22c55e", plans:[
        { name:"Basic", price:"₹6,999/mo", features:["Facebook Ads","Instagram Ads","4 Creatives"] },
        { name:"Standard", price:"₹12,999/mo", features:["Lead Generation Campaign","8 Creatives","Retargeting"] },
        { name:"Premium", price:"₹22,999/mo", features:["Full Funnel Strategy","Advanced Audience Testing","15+ Creatives"] },
    ]},
    { id:"social", title:"Social Media Management", icon:"📣", color:"#4ade80", plans:[
        { name:"Basic", price:"₹5,999/mo", features:["12 Posts","Basic Designs","Caption Writing"] },
        { name:"Standard", price:"₹11,999/mo", features:["20 Posts","Reels Editing","Story Designs"] },
        { name:"Premium", price:"₹19,999/mo", features:["Daily Content","Reels Strategy","Community Management"] },
    ]},
    { id:"content", title:"Content Creation", icon:"✨", color:"#86efac", plans:[
        { name:"Basic", price:"₹4,999/mo", features:["8 Graphics"] },
        { name:"Standard", price:"₹9,999/mo", features:["15 Graphics","4 Reels"] },
        { name:"Premium", price:"₹19,999/mo", features:["Unlimited Creatives","Professional Editing"] },
    ]},
    { id:"branding", title:"Branding", icon:"💎", color:"#22c55e", plans:[
        { name:"Basic", price:"₹7,999", features:["Logo Design","Color Palette"] },
        { name:"Standard", price:"₹14,999", features:["Brand Kit","Social Media Branding"] },
        { name:"Premium", price:"₹29,999+", features:["Complete Brand Identity","Packaging Design","Brand Guidelines"] },
    ]},
    { id:"whatsapp", title:"WhatsApp Marketing", icon:"💬", color:"#4ade80", plans:[
        { name:"Basic", price:"₹4,999/mo", features:["Setup","Broadcast Campaign"] },
        { name:"Standard", price:"₹9,999/mo", features:["Automation","Follow-up Sequences"] },
        { name:"Premium", price:"₹14,999/mo", features:["Advanced Automation","CRM Integration"] },
    ]},
    { id:"leads", title:"Lead Generation", icon:"🚀", color:"#86efac", plans:[
        { name:"Basic", price:"₹9,999/mo", features:["Facebook Leads"] },
        { name:"Standard", price:"₹19,999/mo", features:["Facebook + Google Leads"] },
        { name:"Premium", price:"₹39,999/mo", features:["Full Funnel Lead System","CRM Setup"] },
    ]},
    { id:"ecom", title:"E-commerce Management", icon:"🛒", color:"#22c55e", plans:[
        { name:"Basic", price:"₹14,999/mo", features:["Product Upload","Basic Management"] },
        { name:"Standard", price:"₹29,999/mo", features:["Product Optimization","Ads Support"] },
        { name:"Premium", price:"₹49,999/mo", features:["Complete Store Management","Growth Strategy"] },
    ]},
  ];
 
  const combos = [
    { name:"Starter", price:"₹14,999/mo", color:"#22c55e", features:["Social Media","Google Business Profile","Basic SEO","12 Posts"] },
    { name:"Growth", price:"₹29,999/mo", color:"#4ade80", popular:true, features:["SEO","Social Media","Meta Ads","Content Creation"] },
    { name:"Premium", price:"₹49,999/mo", color:"#86efac", features:["SEO","Google Ads","Meta Ads","Social Media","Content Creation","Monthly Strategy Call"] },
    { name:"Enterprise", price:"₹79,999/mo", color:"#22c55e", features:["Complete Digital Marketing","SEO","Google Ads","Meta Ads","Website Support","Branding","WhatsApp Marketing","Dedicated Account Manager"] },
  ];
 
  const testimonials = [
    { name:"Rajesh Agarwal", role:"Restaurant Owner, Lucknow", stars:5, text:"GRYORA ne hamare restaurant ki lead 3x kar di sirf 45 din mein. Ankur sir ka team bahut professional hai. Best agency in Lucknow!" },
    { name:"Sunita Verma", role:"Healthcare Clinic, Gomti Nagar", stars:5, text:"SEO aur Google Ads dono karwaye — ab hum Google ke first page pe aate hain. Revenue double ho gaya 2 mahine mein. Highly recommend!" },
    { name:"Mohit Sharma", role:"E-commerce Brand, UP", stars:5, text:"GRYORA ka Meta Ads campaign mera best investment tha. ROAS 5x aaya, aur creative quality top-notch thi. Amazing team!" },
    { name:"Priya Gupta", role:"Real Estate, Lucknow", stars:5, text:"Website development se lekar social media tak sab GRYORA ne kiya. Bahut clean aur premium result mila. Full value for money." },
    { name:"Amit Tiwari", role:"Coaching Institute, Lucknow", stars:5, text:"Branding aur WhatsApp marketing se humara enrollment 200% badh gaya. Ankur sir personally guide karte hain." },
    { name:"Neha Srivastava", role:"Startup Founder, Lucknow", stars:5, text:"Startup ke liye perfect package mila. Growth Package ne hamare 3 months mein 10x social reach banayi. Bilkul worth it!" },
  ];
 
  const team = [
    { img:"/images/ankur-singh.jpg", name:"Ankur Singh", role:"Founder & CEO", skills:"Digital Strategy · Performance Ads · SEO" },
    { img:"/images/team-girl.jpg", name:"Priya Mishra", role:"Social Media Manager", skills:"Content · Reels · Community Management" },
    { img:"/images/team-boy.jpg", name:"Rahul Verma", role:"Ads & SEO Specialist", skills:"Google Ads · Meta Ads · SEO" },
  ];
 
  return (
    <main style={{background:"#020a04",color:"#f0fdf4",fontFamily:"'DM Sans',sans-serif",overflowX:"hidden"}}>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
 
        *{box-sizing:border-box;margin:0;padding:0;}
        .dp{font-family:'Outfit',sans-serif;}
        :root{
          --g:#22c55e; --gl:#4ade80; --gp:#86efac;
          --gg:rgba(34,197,94,0.22);
          --bd:rgba(34,197,94,0.14);
          --tm:rgba(220,252,231,0.50);
          --td:rgba(220,252,231,0.32);
        }
 
        /* Buttons */
        .btn{display:inline-block;text-decoration:none;font-family:'Outfit',sans-serif;font-weight:700;cursor:pointer;border:none;transition:transform .25s,box-shadow .25s;}
        .btn-g{background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;}
        .btn-g:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(34,197,94,.4);}
        .btn-o{border:1px solid var(--bd);color:var(--gl);background:transparent;}
        .btn-o:hover{border-color:var(--g);background:rgba(34,197,94,.07);}
 
        /* Cards */
        .card{background:rgba(34,197,94,.04);border:1px solid var(--bd);transition:transform .28s,border-color .28s,box-shadow .28s;}
        .card:hover{border-color:rgba(34,197,94,.38);transform:translateY(-4px);box-shadow:0 18px 45px rgba(0,0,0,.45),0 0 22px rgba(34,197,94,.07);}
 
        /* Nav link */
        .nl{color:rgba(220,252,231,.58);text-decoration:none;font-size:.875rem;font-weight:500;position:relative;transition:color .2s;}
        .nl::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--g);transition:width .3s;}
        .nl:hover{color:#86efac;}.nl:hover::after{width:100%;}
 
        /* Tag pill */
        .tag{display:inline-block;padding:4px 14px;border-radius:999px;font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.24);color:#4ade80;font-family:'Outfit',sans-serif;}
 
        /* Gradient text */
        .gt{background:linear-gradient(135deg,#4ade80,#22c55e,#86efac);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
 
        /* Divider */
        .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(34,197,94,.18),transparent);}
 
        /* Section heading */
        .sh{font-family:'Outfit',sans-serif;font-weight:900;line-height:1.08;}
 
        /* Plan card */
        .pc{background:rgba(34,197,94,.04);border:1px solid rgba(34,197,94,.12);border-radius:18px;padding:26px;transition:border-color .28s,transform .28s;flex:1;min-width:180px;}
        .pc:hover{border-color:rgba(34,197,94,.32);transform:translateY(-3px);}
        .pc.hot{background:linear-gradient(135deg,rgba(34,197,94,.13),rgba(74,222,128,.06));border-color:rgba(34,197,94,.42);box-shadow:0 0 32px rgba(34,197,94,.1);}
 
        /* Stars */
        .star{color:#fbbf24;}
 
        /* FAQ accordion */
        details summary{list-style:none;cursor:pointer;}
        details summary::-webkit-details-marker{display:none;}
        .arr{transition:transform .28s;display:inline-block;}
        details[open] .arr{transform:rotate(180deg);}
 
        /* Dot grid bg */
        .dotgrid{background-image:radial-gradient(rgba(34,197,94,.055) 1px,transparent 1px);background-size:38px 38px;}
 
        /* Mesh bg */
        .mesh{background:
          radial-gradient(ellipse 70% 55% at 15% 20%,rgba(34,197,94,.09) 0%,transparent 60%),
          radial-gradient(ellipse 55% 40% at 85% 75%,rgba(74,222,128,.055) 0%,transparent 60%);}
 
        /* WhatsApp float pulse */
        @keyframes wapulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.55);}70%{box-shadow:0 0 0 12px rgba(34,197,94,0);}}
        .wabtn{animation:wapulse 2s ease-in-out infinite;}
 
        /* Fade-up hero */
        @keyframes fu{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
        .fu1{animation:fu .75s ease both;}
        .fu2{animation:fu .75s .14s ease both;}
        .fu3{animation:fu .75s .28s ease both;}
 
        /* Image cover */
        .imgcover{width:100%;height:100%;object-fit:cover;object-position:top center;}
 
        /* Inputs */
        input,textarea{font-family:'DM Sans',sans-serif;background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);color:#f0fdf4;outline:none;transition:border-color .2s;width:100%;}
        input:focus,textarea:focus{border-color:var(--g);}
        input::placeholder,textarea::placeholder{color:rgba(220,252,231,.3);}
 
        a{color:inherit;}
      `}</style>
 
      {/* ===== NAVBAR ===== */}
      <nav style={{position:"fixed",top:0,left:0,width:"100%",zIndex:50,backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",background:"rgba(2,10,4,0.88)",borderBottom:"1px solid rgba(34,197,94,0.1)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"13px 5%",maxWidth:1400,margin:"0 auto"}}>
 
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <img src="/images/gryora-logo.jpg" alt="GRYORA" style={{height:38,width:38,objectFit:"contain",borderRadius:8}}/>
            <div>
              <div className="dp" style={{fontSize:"1.25rem",fontWeight:900,color:"#4ade80",letterSpacing:".06em",lineHeight:1}}>GRYORA</div>
              <div style={{fontSize:".58rem",color:"rgba(134,239,172,.55)",letterSpacing:".12em",textTransform:"uppercase"}}>Digital Solutions</div>
            </div>
          </div>
 
          {/* Links */}
          <div style={{display:"flex",gap:26}}>
            {[["Home","#"],["About","#about"],["Services","#services"],["Team","#team"],["Packages","#packages"],["Contact","#contact"]].map(([l,h])=>(
              <a key={l} href={h} className="nl">{l}</a>
            ))}
          </div>
 
          <a href="https://wa.me/918005110277" className="btn btn-g" style={{padding:"9px 20px",borderRadius:999,fontSize:".85rem"}}>Get Quote</a>
        </div>
      </nav>
 
      {/* ===== HERO ===== */}
      <section className="mesh dotgrid" style={{padding:"132px 5% 84px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"relative",zIndex:1,maxWidth:920,margin:"0 auto"}}>
 
          <div className="fu1"><span className="tag">🚀 Lucknow's #1 Digital Marketing Agency</span></div>
 
          <h1 className="dp sh fu2" style={{fontSize:"clamp(2.6rem,7vw,5.6rem)",marginTop:20,color:"#fff"}}>
            Grow Your Business<br/><span className="gt">With GRYORA</span>
          </h1>
 
          <p className="fu3" style={{marginTop:20,fontSize:"1.05rem",lineHeight:1.75,color:"rgba(220,252,231,.6)",maxWidth:640,margin:"20px auto 0"}}>
            We help brands scale with SEO, Meta Ads, Google Ads, and high-converting websites — driven by data, creativity, and measurable results.
          </p>
 
          <div className="fu3" style={{marginTop:34,display:"flex",justifyContent:"center",gap:14,flexWrap:"wrap"}}>
            <a href="https://wa.me/918005110277" className="btn btn-g" style={{padding:"14px 34px",borderRadius:999,fontSize:"1rem"}}>Free Consultation 💬</a>
            <a href="#services" className="btn btn-o" style={{padding:"14px 34px",borderRadius:999,fontSize:"1rem"}}>Our Services ↓</a>
          </div>
 
        </div>
      </section>
 
      {/* ===== STATS ===== */}
      <section style={{padding:"40px 5%"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:14,maxWidth:880,margin:"0 auto"}}>
          {[{v:"500+",l:"Projects Done",c:"#22c55e"},{v:"120+",l:"Happy Clients",c:"#4ade80"},{v:"5X",l:"Average ROI",c:"#86efac"},{v:"3+",l:"Years Expertise",c:"#22c55e"}].map((s,i)=>(
            <div key={i} className="card" style={{borderRadius:16,padding:"22px 14px",textAlign:"center"}}>
              <div className="dp" style={{fontSize:"2.4rem",fontWeight:900,color:s.c}}>{s.v}</div>
              <div style={{fontSize:".75rem",color:"var(--tm)",marginTop:4,letterSpacing:".05em",textTransform:"uppercase"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== ABOUT ===== */}
      <section id="about" style={{padding:"84px 5%"}}>
        <div style={{maxWidth:1180,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center"}}>
 
          <div>
            <span className="tag">About GRYORA</span>
            <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.1rem)",marginTop:16,color:"#fff"}}>
              Result-Driven <span className="gt">Digital Agency</span>
            </h2>
            <p style={{marginTop:20,color:"var(--tm)",lineHeight:1.82,fontSize:".95rem"}}>
              GRYORA is a performance-first digital marketing agency built to help businesses grow faster. We combine data intelligence, creative strategy, and modern technology to deliver real, measurable results for every client.
            </p>
            <p style={{marginTop:12,color:"var(--tm)",lineHeight:1.82,fontSize:".95rem"}}>
              From restaurants to real estate, startups to schools — we've helped 120+ businesses across India turn their digital presence into powerful revenue engines.
            </p>
            <div style={{marginTop:28,display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="#services" className="btn btn-g" style={{padding:"11px 26px",borderRadius:999,fontSize:".9rem"}}>Our Services</a>
              <a href="https://wa.me/918005110277" className="btn btn-o" style={{padding:"11px 26px",borderRadius:999,fontSize:".9rem"}}>Talk to Us</a>
            </div>
          </div>
 
          {/* Office photo — place /public/images/office.jpg */}
          <div style={{borderRadius:22,overflow:"hidden",height:400,position:"relative"}}>
            <img src="/images/office.jpg" alt="GRYORA Office" className="imgcover"/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(2,10,4,.68) 0%,transparent 58%)"}}/>
            <div style={{position:"absolute",bottom:18,left:18,right:18}}>
              <div style={{background:"rgba(2,10,4,.82)",backdropFilter:"blur(12px)",border:"1px solid rgba(34,197,94,.18)",borderRadius:12,padding:"11px 16px"}}>
                <div className="dp" style={{fontWeight:700,color:"#4ade80",fontSize:".88rem"}}>Ankur Singh — Founder & CEO</div>
                <div style={{color:"var(--tm)",fontSize:".75rem",marginTop:2}}>Leading GRYORA's vision & strategy</div>
              </div>
            </div>
          </div>
 
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== FOUNDER ===== */}
      <section style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">Leadership</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Meet The <span className="gt">Founder</span>
          </h2>
        </div>
 
        <div style={{maxWidth:1080,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center"}}>
 
          {/* Founder photo — place /public/images/ankur-singh.jpg */}
          <div style={{position:"relative"}}>
            <div style={{borderRadius:22,overflow:"hidden",height:480,boxShadow:"0 0 40px rgba(34,197,94,.22)"}}>
              <img src="/images/ankur-singh.jpg" alt="Ankur Singh" className="imgcover"/>
            </div>
            {/* Floating badge */}
            <div style={{position:"absolute",bottom:-14,right:-14,background:"linear-gradient(135deg,#16a34a,#22c55e)",borderRadius:14,padding:"15px 20px",boxShadow:"0 8px 28px rgba(34,197,94,.32)"}}>
              <div className="dp" style={{fontWeight:900,fontSize:"1.5rem",color:"#fff"}}>120+</div>
              <div style={{fontSize:".68rem",color:"rgba(255,255,255,.82)",fontWeight:600}}>Clients Served</div>
            </div>
          </div>
 
          <div>
            <span className="tag">Founder & CEO</span>
            <h3 className="dp" style={{fontSize:"2.7rem",fontWeight:900,marginTop:12,color:"#fff",lineHeight:1.08}}>Ankur Singh</h3>
            <div style={{color:"#4ade80",fontWeight:600,marginTop:6,fontSize:".98rem"}}>Founder & CEO, GRYORA Digital Solutions</div>
 
            <p style={{marginTop:20,color:"var(--tm)",lineHeight:1.82,fontSize:".94rem"}}>
              Ankur Singh is a passionate digital marketing strategist with deep expertise in performance advertising, SEO, and brand growth. He founded GRYORA with a clear vision — to help Indian businesses compete in the digital age with the same tools used by global brands.
            </p>
            <p style={{marginTop:12,color:"var(--tm)",lineHeight:1.82,fontSize:".94rem"}}>
              Under his leadership, GRYORA has delivered results for 120+ businesses across Lucknow and all over India — from restaurants to real estate, startups to e-commerce.
            </p>
 
            <div style={{marginTop:22,display:"flex",gap:10,flexWrap:"wrap"}}>
              {[["📈","Performance Marketing"],["🎯","Paid Ads Expert"],["🔍","SEO Strategist"],["💡","Brand Builder"]].map(([icon,label],i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:7,background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.16)",borderRadius:999,padding:"5px 13px",fontSize:".78rem",color:"#86efac"}}>{icon} {label}</div>
              ))}
            </div>
 
            <div style={{marginTop:26,display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="https://wa.me/918005110277" className="btn btn-g" style={{padding:"11px 26px",borderRadius:999,fontSize:".9rem"}}>Talk to Ankur</a>
              <a href="#services" className="btn btn-o" style={{padding:"11px 26px",borderRadius:999,fontSize:".9rem"}}>View Services</a>
            </div>
          </div>
 
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== TEAM ===== */}
      <section id="team" style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">Our People</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            The <span className="gt">GRYORA Team</span>
          </h2>
        </div>
 
        <div style={{maxWidth:1000,margin:"0 auto"}}>
 
          {/* Wide office/team photo — place /public/images/team-office.jpg */}
          <div style={{borderRadius:22,overflow:"hidden",height:320,marginBottom:28,position:"relative"}}>
            <img src="/images/team-office.jpg" alt="Team at Work" className="imgcover"/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(2,10,4,.75) 0%,transparent 52%,rgba(2,10,4,.28) 100%)"}}/>
            <div style={{position:"absolute",left:30,top:"50%",transform:"translateY(-50%)"}}>
              <div className="dp" style={{fontSize:"1.75rem",fontWeight:900,color:"#fff",lineHeight:1.18}}>We Work As<br/><span className="gt">One Team</span></div>
              <div style={{color:"rgba(220,252,231,.58)",marginTop:8,fontSize:".88rem"}}>Strategy • Execution • Growth</div>
            </div>
          </div>
 
          {/* Team cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:18}}>
            {team.map((m,i)=>(
              <div key={i} className="card" style={{borderRadius:20,overflow:"hidden"}}>
                <div style={{height:255,overflow:"hidden"}}>
                  <img src={m.img} alt={m.name} className="imgcover"/>
                </div>
                <div style={{padding:"18px 20px 22px"}}>
                  <div className="dp" style={{fontWeight:800,fontSize:"1.08rem",color:"#fff"}}>{m.name}</div>
                  <div style={{color:"#4ade80",fontSize:".78rem",fontWeight:600,marginTop:4}}>{m.role}</div>
                  <div style={{color:"var(--tm)",fontSize:".76rem",marginTop:7}}>{m.skills}</div>
                </div>
              </div>
            ))}
          </div>
 
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== SERVICES & PRICING ===== */}
      <section id="services" style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">What We Do</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Services & <span className="gt">Pricing</span>
          </h2>
          <p style={{color:"var(--tm)",marginTop:12,fontSize:".94rem"}}>Click any service to see detailed plans</p>
        </div>
 
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",flexDirection:"column",gap:10}}>
          {services.map((svc)=>(
            <details key={svc.id} style={{borderRadius:16,overflow:"hidden"}}>
              <summary style={{background:"rgba(34,197,94,.05)",border:"1px solid rgba(34,197,94,.14)",borderRadius:16,padding:"17px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",userSelect:"none"}}>
                <div style={{display:"flex",alignItems:"center",gap:14}}>
                  <span style={{fontSize:"1.45rem"}}>{svc.icon}</span>
                  <span className="dp" style={{fontWeight:700,fontSize:"1.05rem",color:"#fff"}}>{svc.title}</span>
                </div>
                <span className="arr" style={{color:svc.color,fontSize:"1.1rem"}}>↓</span>
              </summary>
              <div style={{padding:"18px 4px 6px"}}>
                <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
                  {svc.plans.map((plan,pi)=>(
                    <div key={pi} className={`pc${pi===1?" hot":""}`} style={{position:"relative"}}>
                      {pi===1&&<div style={{position:"absolute",top:-11,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#16a34a,#22c55e)",padding:"3px 14px",borderRadius:999,fontSize:".62rem",fontWeight:700,color:"#fff",whiteSpace:"nowrap",fontFamily:"'Outfit',sans-serif"}}>POPULAR</div>}
                      <div className="dp" style={{fontWeight:800,fontSize:".96rem",color:svc.color}}>{plan.name}</div>
                      <div className="dp" style={{fontWeight:900,fontSize:"1.55rem",color:"#fff",marginTop:7}}>{plan.price}</div>
                      <div style={{height:1,background:"rgba(34,197,94,.14)",margin:"14px 0"}}/>
                      <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:7}}>
                        {plan.features.map((f,fi)=>(
                          <li key={fi} style={{fontSize:".8rem",color:"rgba(220,252,231,.64)",display:"flex",alignItems:"flex-start",gap:7}}>
                            <span style={{color:svc.color,flexShrink:0,marginTop:1}}>✓</span>{f}
                          </li>
                        ))}
                      </ul>
                      <a href="https://wa.me/918005110277" className="btn btn-g" style={{display:"block",textAlign:"center",marginTop:18,padding:"9px",borderRadius:10,fontSize:".82rem"}}>Get Started</a>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== COMBO PACKAGES ===== */}
      <section id="packages" style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">Best Value</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Agency <span className="gt">Combo Packages</span>
          </h2>
        </div>
 
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:18}}>
          {combos.map((c,i)=>(
            <div key={i} style={{position:"relative",borderRadius:22,padding:26,background:c.popular?"linear-gradient(135deg,rgba(34,197,94,.14),rgba(74,222,128,.07))":"rgba(34,197,94,.04)",border:c.popular?"1px solid rgba(34,197,94,.42)":"1px solid rgba(34,197,94,.12)",boxShadow:c.popular?"0 0 44px rgba(34,197,94,.12)":"none",transition:"transform .28s"}}>
              {c.popular&&<div style={{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#16a34a,#22c55e)",padding:"4px 16px",borderRadius:999,fontSize:".65rem",fontWeight:700,color:"#fff",letterSpacing:".08em",fontFamily:"'Outfit',sans-serif",whiteSpace:"nowrap"}}>⭐ MOST POPULAR</div>}
              <div className="dp" style={{fontWeight:700,fontSize:".75rem",color:c.color,textTransform:"uppercase",letterSpacing:".08em"}}>{c.name}</div>
              <div className="dp" style={{fontWeight:900,fontSize:"1.75rem",color:"#fff",marginTop:7}}>{c.price}</div>
              <div style={{height:1,background:"rgba(34,197,94,.14)",margin:"14px 0"}}/>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:7,marginBottom:22}}>
                {c.features.map((f,fi)=>(
                  <li key={fi} style={{fontSize:".8rem",color:"rgba(220,252,231,.64)",display:"flex",gap:7,alignItems:"flex-start"}}>
                    <span style={{color:"#22c55e",flexShrink:0}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/918005110277" className={`btn ${c.popular?"btn-g":"btn-o"}`} style={{display:"block",textAlign:"center",padding:"11px",borderRadius:12,fontSize:".86rem",...(c.popular?{}:{border:"1px solid rgba(34,197,94,.24)",color:"#4ade80"})}}>Get Started</a>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== INDUSTRIES ===== */}
      <section style={{padding:"60px 5%"}}>
        <div style={{textAlign:"center",marginBottom:38}}>
          <span className="tag">Industries</span>
          <h2 className="dp sh" style={{fontSize:"clamp(1.8rem,3.5vw,2.9rem)",marginTop:14,color:"#fff"}}>
            Who We <span className="gt">Work With</span>
          </h2>
        </div>
        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(135px,1fr))",gap:12}}>
          {[["🍽️","Restaurants"],["🏨","Hotels"],["🏥","Healthcare"],["🏫","Schools"],["🏠","Real Estate"],["🛒","E-commerce"],["🚀","Startups"],["🏪","Local Shops"]].map(([icon,label],i)=>(
            <div key={i} className="card" style={{borderRadius:14,padding:"16px 10px",textAlign:"center"}}>
              <div style={{fontSize:"1.75rem"}}>{icon}</div>
              <div style={{fontSize:".78rem",color:"rgba(220,252,231,.58)",marginTop:7,fontWeight:500}}>{label}</div>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== RESULTS ===== */}
      <section style={{padding:"60px 5%"}}>
        <div style={{textAlign:"center",marginBottom:38}}>
          <span className="tag">Proof of Work</span>
          <h2 className="dp sh" style={{fontSize:"clamp(1.8rem,3.5vw,2.9rem)",marginTop:14,color:"#fff"}}>
            Real <span className="gt">Results</span>
          </h2>
        </div>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:18}}>
          {[{icon:"🍽️",title:"Restaurant Growth",result:"300% increase in leads in 45 days using Meta Ads + Google Maps SEO.",color:"#22c55e"},{icon:"🛒",title:"E-commerce Sales",result:"Revenue doubled in 60 days through targeted Facebook Ads and funnel optimization.",color:"#4ade80"},{icon:"📣",title:"Brand Awareness",result:"10x social reach and 5x follower growth through consistent content strategy.",color:"#86efac"}].map((r,i)=>(
            <div key={i} className="card" style={{borderRadius:20,padding:26}}>
              <div style={{fontSize:"1.9rem"}}>{r.icon}</div>
              <h3 className="dp" style={{fontSize:"1.05rem",fontWeight:700,marginTop:13,color:r.color}}>{r.title}</h3>
              <p style={{marginTop:9,fontSize:".83rem",color:"var(--tm)",lineHeight:1.72}}>{r.result}</p>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== TESTIMONIALS ===== */}
      <section style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">Client Love</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Real <span className="gt">Client Reviews</span>
          </h2>
        </div>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:18}}>
          {testimonials.map((t,i)=>(
            <div key={i} className="card" style={{borderRadius:20,padding:26,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-8,left:14,fontSize:"4.5rem",fontFamily:"'Outfit',sans-serif",fontWeight:900,color:"rgba(34,197,94,.055)",lineHeight:1,pointerEvents:"none"}}>"</div>
              <div style={{display:"flex",gap:2,marginBottom:12}}>
                {[...Array(t.stars)].map((_,j)=><span key={j} className="star" style={{fontSize:".85rem"}}>★</span>)}
              </div>
              <p style={{fontSize:".88rem",color:"rgba(220,252,231,.68)",lineHeight:1.72,position:"relative",zIndex:1}}>"{t.text}"</p>
              <div style={{marginTop:18,paddingTop:14,borderTop:"1px solid rgba(34,197,94,.1)"}}>
                <div style={{fontWeight:700,color:"#fff",fontSize:".88rem"}}>{t.name}</div>
                <div style={{color:"var(--td)",fontSize:".75rem",marginTop:2}}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== FAQ ===== */}
      <section style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">FAQ</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Common <span className="gt">Questions</span>
          </h2>
        </div>
        <div style={{maxWidth:760,margin:"0 auto",display:"flex",flexDirection:"column",gap:10}}>
          {[
            {q:"How long does it take to see results?",a:"SEO results typically appear in 2–3 months. Paid ads can generate leads within 48–72 hours of campaign launch."},
            {q:"Do you run paid ad campaigns?",a:"Yes — we manage Meta Ads, Google Ads, and YouTube Ads including full campaign setup, creatives, and ongoing optimization."},
            {q:"Can I get a custom package?",a:"Absolutely. Contact us on WhatsApp and we'll build a custom plan tailored to your exact budget and business goals."},
            {q:"Do you serve clients outside Lucknow?",a:"Yes! We work with businesses across India. All our services are fully digital, so location is never a barrier."},
            {q:"What makes GRYORA different?",a:"We focus on real, measurable results — not vanity metrics. Ankur personally oversees key accounts to ensure consistent quality."},
          ].map((item,i)=>(
            <details key={i} className="card" style={{borderRadius:14}}>
              <summary style={{padding:"17px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:600,fontSize:".93rem",color:"#fff"}}>
                {item.q}
                <span className="arr" style={{color:"#22c55e",marginLeft:12,flexShrink:0,fontSize:"1.05rem"}}>↓</span>
              </summary>
              <p style={{padding:"0 20px 17px",color:"var(--tm)",fontSize:".86rem",lineHeight:1.74}}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== FREE AUDIT CTA ===== */}
      <section style={{padding:"84px 5%",textAlign:"center",background:"radial-gradient(ellipse 75% 55% at 50% 50%,rgba(34,197,94,.07) 0%,transparent 70%)"}}>
        <span className="tag">Limited Slots Available</span>
        <h2 className="dp sh" style={{fontSize:"clamp(2.2rem,5vw,3.9rem)",marginTop:16,color:"#fff"}}>
          Get A <span className="gt">Free Business Audit</span>
        </h2>
        <p style={{color:"var(--tm)",maxWidth:540,margin:"16px auto 0",fontSize:".94rem",lineHeight:1.74}}>
          We'll analyze your current digital presence and give you a free strategy — no strings attached.
        </p>
        <a href="https://wa.me/918005110277" className="btn btn-g" style={{display:"inline-block",marginTop:32,padding:"16px 46px",borderRadius:999,fontSize:"1.05rem"}}>
          💬 Book Free Audit on WhatsApp
        </a>
      </section>
 
      {/* ===== CAREERS ===== */}
      <section style={{padding:"60px 5%"}}>
        <div style={{textAlign:"center",marginBottom:38}}>
          <span className="tag">Join GRYORA</span>
          <h2 className="dp sh" style={{fontSize:"clamp(1.8rem,3.5vw,2.9rem)",marginTop:14,color:"#fff"}}>
            We're <span className="gt">Hiring</span>
          </h2>
        </div>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:26}}>
            {["Digital Marketing Executive","Sales Executive","Calling Executive","Graphic Designer"].map((role,i)=>(
              <div key={i} className="card" style={{borderRadius:13,padding:"15px 18px",fontSize:".86rem",color:"rgba(220,252,231,.68)",fontWeight:500}}>📌 {role}</div>
            ))}
          </div>
          <div style={{textAlign:"center"}}>
            <a href="https://wa.me/918005110277" className="btn btn-g" style={{padding:"12px 30px",borderRadius:999,fontSize:".88rem"}}>Apply on WhatsApp</a>
          </div>
        </div>
      </section>
 
      <div className="divider" style={{margin:"0 5%"}}/>
 
      {/* ===== CONTACT ===== */}
      <section id="contact" style={{padding:"84px 5%"}}>
        <div style={{textAlign:"center",marginBottom:50}}>
          <span className="tag">Get In Touch</span>
          <h2 className="dp sh" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginTop:16,color:"#fff"}}>
            Contact <span className="gt">Us</span>
          </h2>
        </div>
        <div style={{maxWidth:480,margin:"0 auto",display:"flex",flexDirection:"column",gap:11}}>
          {[{icon:"📞",label:"+91 8005110277",href:"tel:8005110277"},{icon:"📧",label:"gryorasolution@gmail.com",href:"mailto:gryorasolution@gmail.com"},{icon:"📍",label:"Lucknow, Uttar Pradesh, India",href:"#"}].map((item,i)=>(
            <a key={i} href={item.href} className="card" style={{borderRadius:13,padding:"15px 18px",display:"flex",alignItems:"center",gap:13,fontSize:".9rem",color:"rgba(220,252,231,.68)",textDecoration:"none"}}>
              <span style={{fontSize:"1.25rem"}}>{item.icon}</span>{item.label}
            </a>
          ))}
          <a href="https://wa.me/918005110277" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:9,padding:"15px",borderRadius:13,background:"linear-gradient(135deg,#15803d,#16a34a)",color:"#fff",fontWeight:700,fontSize:".92rem",textDecoration:"none",marginTop:6,fontFamily:"'Outfit',sans-serif",transition:"transform .25s,box-shadow .25s"}}>
            💬 Message on WhatsApp
          </a>
        </div>
      </section>
 
      {/* ===== FOOTER ===== */}
      <footer style={{borderTop:"1px solid rgba(34,197,94,0.1)",padding:"46px 5% 26px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:38,paddingBottom:30,borderBottom:"1px solid rgba(34,197,94,.08)"}}>
 
            <div style={{maxWidth:270}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:11}}>
                <img src="/images/gryora-logo.jpg" alt="GRYORA" style={{height:34,width:34,objectFit:"contain",borderRadius:7}}/>
                <div>
                  <div className="dp" style={{fontWeight:900,fontSize:"1.15rem",color:"#4ade80"}}>GRYORA</div>
                  <div style={{fontSize:".58rem",color:"rgba(134,239,172,.5)",letterSpacing:".1em"}}>DIGITAL SOLUTIONS</div>
                </div>
              </div>
              <p style={{fontSize:".8rem",color:"var(--td)",lineHeight:1.74}}>Result-driven digital marketing agency. Founded by Ankur Singh, Lucknow, India.</p>
            </div>
 
            <div>
              <div className="dp" style={{fontWeight:700,fontSize:".75rem",color:"#22c55e",letterSpacing:".08em",textTransform:"uppercase",marginBottom:13}}>Quick Links</div>
              <div style={{display:"flex",flexDirection:"column",gap:7}}>
                {[["Home","#"],["About","#about"],["Services","#services"],["Packages","#packages"],["Contact","#contact"]].map(([label,href])=>(
                  <a key={label} href={href} style={{fontSize:".83rem",color:"var(--tm)",textDecoration:"none",transition:"color .2s"}}>{label}</a>
                ))}
              </div>
            </div>
 
            <div>
              <div className="dp" style={{fontWeight:700,fontSize:".75rem",color:"#22c55e",letterSpacing:".08em",textTransform:"uppercase",marginBottom:13}}>Contact</div>
              <div style={{display:"flex",flexDirection:"column",gap:7,fontSize:".83rem",color:"var(--tm)"}}>
                <div>📞 +91 8005110277</div>
                <div>📧 gryorasolution@gmail.com</div>
                <div>📍 Lucknow, India</div>
              </div>
            </div>
 
          </div>
          <p style={{textAlign:"center",fontSize:".72rem",color:"var(--td)",marginTop:22}}>
            © 2026 GRYORA Digital Solutions. All Rights Reserved. | Founded by Ankur Singh
          </p>
        </div>
      </footer>
 
      {/* ===== FLOATING WHATSAPP ===== */}
      <a href="https://wa.me/918005110277" title="WhatsApp" className="wabtn" style={{position:"fixed",bottom:22,right:22,zIndex:50,width:56,height:56,borderRadius:"50%",background:"linear-gradient(135deg,#15803d,#16a34a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.55rem",textDecoration:"none"}}>
        💬
      </a>
 
    </main>
  );
}