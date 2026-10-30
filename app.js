const $ = (id) => document.getElementById(id);
const yearSelect = $("year");
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1990; y--) {
  const option = document.createElement("option");
  option.value = String(y);
  option.textContent = String(y);
  yearSelect.appendChild(option);
}
$("currentYear").textContent = String(currentYear);

const translations = {
  bn: {
    checkResult:"রেজাল্ট দেখুন", heroEyebrow:"আপনার ফলাফল, এক জায়গায়",
    heroTitle:'আপনার রেজাল্ট<br><span>সহজেই খুঁজুন</span>',
    heroDesc:"পরীক্ষা, বোর্ড, বছর ও রোল নম্বর দিয়ে ফলাফল খুঁজুন। ফলাফল সোর্সে পাওয়া গেলে তবেই আসল ফলাফল দেখানো হবে.",
    searchKicker:"RESULT FINDER", searchTitle:"রেজাল্ট সার্চ করুন", secureNote:"আপনার তথ্য শুধু সার্চের জন্য",
    examLabel:"পরীক্ষা", yearLabel:"পরীক্ষার বছর", boardLabel:"বোর্ড", rollLabel:"রোল নম্বর",
    regLabel:"রেজিস্ট্রেশন নম্বর (ঐচ্ছিক)", resultTypeLabel:"ফলাফলের ধরন",
    consentText:"আমি বুঝেছি, আসল ফলাফল দেখাতে কার্যকর ডেটা সোর্স প্রয়োজন; ডেমো ফলাফল সরকারি ফলাফল নয়।",
    searchBtn:"রেজাল্ট খুঁজুন", formNote:"ARIANBOARD কোনো সরকারি সংস্থা নয়। সরকারি ফলাফলের সত্যতা মূল উৎসে যাচাই করুন।",
    feature1Title:"সহজ সার্চ",feature1Desc:"পরীক্ষা, বছর, বোর্ড ও রোল দিয়ে দ্রুত খোঁজার জন্য সহজ ফর্ম।",
    feature2Title:"পুরোনো বছরের ফলাফল",feature2Desc:"পূর্ববর্তী বছরের ফলাফল পাওয়া যাবে যদি নির্ভরযোগ্য সোর্স বা সংরক্ষিত রেকর্ড থাকে।",
    feature3Title:"প্রিন্ট ও PDF",feature3Desc:"প্রদর্শিত রেজাল্ট প্রিন্ট করুন বা ব্রাউজার থেকে PDF হিসেবে সেভ করুন।",
    sourceTitle:"ফলাফল কোথা থেকে আসবে?",sourceDesc:"এই GitHub Pages সংস্করণে লাইভ সরকারি ডেটা API যুক্ত নেই। আসল ফলাফল দেখাতে অনুমোদিত API/ডেটা সোর্স বা নির্ভরযোগ্য ডেটাসেট যুক্ত করতে হবে। CAPTCHA বা অন্য অ্যাক্সেস-নিয়ন্ত্রণ এড়িয়ে ফলাফল সংগ্রহ করা হয় না।",
    footerDisclaimer:"স্বতন্ত্র তথ্য-সহায়ক পোর্টাল; সরকারি ওয়েবসাইট নয়।", rights:"সর্বস্বত্ব সংরক্ষিত।",
    demoTitle:"ডেমো রেজাল্ট — আসল ফলাফল নয়",demoDesc:"এটি শুধু ওয়েবসাইটের ডিজাইন দেখানোর নমুনা। সরকারি রেজাল্ট হিসেবে ব্যবহার করবেন না।",
    exam:"পরীক্ষা",year:"বছর",board:"বোর্ড",roll:"রোল",registration:"রেজিস্ট্রেশন",status:"অবস্থা",
    demo:"DEMO ONLY",print:"প্রিন্ট / PDF",close:"বন্ধ করুন",notFound:"এই সংস্করণে লাইভ সরকারি ফলাফল সংযুক্ত নেই। নিচের সরকারি পোর্টাল থেকে আসল ফলাফল যাচাই করুন।",
    demoOnly:"ডেমো রেজাল্ট",openOfficial:"সরকারি রেজাল্ট পোর্টাল খুলুন",invalid:"অনুগ্রহ করে সঠিক রোল নম্বর লিখুন।"
  },
  en: {
    checkResult:"Check Result",heroEyebrow:"Your results, in one place",
    heroTitle:'Find your results<br><span>with ease</span>',
    heroDesc:"Search by exam, board, year and roll. An official result can only be shown when a reliable, authorized source is connected.",
    searchKicker:"RESULT FINDER",searchTitle:"Search Results",secureNote:"Details are used for your search",
    examLabel:"Examination",yearLabel:"Exam year",boardLabel:"Board",rollLabel:"Roll number",
    regLabel:"Registration number (optional)",resultTypeLabel:"Result type",
    consentText:"I understand that a working data source is required for real results; demo results are not official.",
    searchBtn:"Find Result",formNote:"ARIANBOARD is not a government agency. Verify official results at the original source.",
    feature1Title:"Simple search",feature1Desc:"A simple form to search by exam, year, board and roll.",
    feature2Title:"Previous years",feature2Desc:"Past results are available only when a reliable source or stored record exists.",
    feature3Title:"Print & PDF",feature3Desc:"Print a displayed result or save it as a PDF from your browser.",
    sourceTitle:"Where do results come from?",sourceDesc:"This GitHub Pages version has no live government results API connected. Real results require an authorized API/data source or a reliable dataset. This site does not bypass CAPTCHA or other access controls.",
    footerDisclaimer:"Independent information portal; not an official government website.",rights:"All rights reserved.",
    demoTitle:"Demo Result — Not an Official Result",demoDesc:"This is a sample to preview the website design. Do not use it as a government result.",
    exam:"Examination",year:"Year",board:"Board",roll:"Roll",registration:"Registration",status:"Status",
    demo:"DEMO ONLY",print:"Print / PDF",close:"Close",notFound:"Live official results are not connected in this version. Verify your actual result through an official portal below.",
    demoOnly:"Demo result",openOfficial:"Open official result portal",invalid:"Please enter a valid roll number."
  }
};
let lang = "bn";
$("langToggle").addEventListener("click", () => {
  lang = lang === "bn" ? "en" : "bn";
  document.documentElement.lang = lang;
  $("langToggle").textContent = lang === "bn" ? "English" : "বাংলা";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
});

const boards = {
  Dhaka: "ঢাকা / Dhaka", Cumilla: "কুমিল্লা / Cumilla", Chittagong: "চট্টগ্রাম / Chittagong",
  Rajshahi: "রাজশাহী / Rajshahi", Jashore: "যশোর / Jashore", Barishal: "বরিশাল / Barishal",
  Sylhet: "সিলেট / Sylhet", Dinajpur: "দিনাজপুর / Dinajpur", Mymensingh: "ময়মনসিংহ / Mymensingh",
  Madrasah: "মাদ্রাসা / Madrasah", Technical: "কারিগরি / Technical", Other: "অন্যান্য / Other"
};
const examNames = {
  SSC:"SSC / এসএসসি",HSC:"HSC / এইচএসসি",Dakhil:"Dakhil / দাখিল",Alim:"Alim / আলিম",
  Vocational:"SSC Vocational / এসএসসি ভোকেশনাল",Diploma:"Diploma / ডিপ্লোমা",Other:"Other / অন্যান্য"
};

$("resultForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const roll = $("roll").value.trim();
  const registration = $("registration").value.trim();
  if (!/^[0-9A-Za-z-]{3,20}$/.test(roll)) {
    alert(translations[lang].invalid);
    return;
  }

  const values = {
    exam: $("exam").value,
    year: $("year").value,
    board: $("board").value,
    roll,
    registration,
    resultType: $("resultType").value
  };

  // The official portal may ignore these query parameters. They are an attempted
  // prefill only; ARIANBOARD never claims that the external form was populated.
  const officialUrl = new URL("https://eboardresults.com/v2/home");
  Object.entries(values).forEach(([key, value]) => {
    if (value) officialUrl.searchParams.set(key, value);
  });

  const resultArea = $("resultArea");
  const examLabel = examNames[values.exam] || values.exam;
  const boardLabel = boards[values.board] || values.board;
  resultArea.innerHTML = `
    <div class="handoff-card">
      <div class="handoff-icon">↗</div>
      <div class="handoff-content">
        <span class="handoff-kicker">ARIANBOARD · OFFICIAL RESULT SEARCH</span>
        <h3>${lang === "bn" ? "তোমার তথ্য প্রস্তুত" : "Your details are ready"}</h3>
        <p>${lang === "bn"
          ? "এখন eBoard Results খুলবে। বাইরের ওয়েবসাইট তথ্যগুলো গ্রহণ করলে ফর্মে বসতে পারে; না হলে নিচের তথ্য দেখে সেখানে পূরণ করো। CAPTCHA নিজে পূরণ করতে হবে।"
          : "eBoard Results will open now. If the external site accepts these parameters, fields may be prefilled; otherwise use the details below. You must complete the CAPTCHA yourself."}</p>
        <div class="handoff-grid">
          <div><small>${translations[lang].exam}</small><strong>${escapeHtml(examLabel)}</strong></div>
          <div><small>${translations[lang].year}</small><strong>${escapeHtml(values.year)}</strong></div>
          <div><small>${translations[lang].board}</small><strong>${escapeHtml(boardLabel)}</strong></div>
          <div><small>${translations[lang].roll}</small><strong>${escapeHtml(values.roll)}</strong></div>
          <div><small>${translations[lang].registration}</small><strong>${escapeHtml(values.registration || "—")}</strong></div>
          <div><small>${lang === "bn" ? "ফলাফলের ধরন" : "Result type"}</small><strong>${escapeHtml(values.resultType)}</strong></div>
        </div>
        <div class="handoff-actions">
          <a class="primary-btn official-btn" href="${officialUrl.toString()}" target="_blank" rel="noopener noreferrer">${lang === "bn" ? "eBoard-এ চালিয়ে যান" : "Continue to eBoard"} <span class="arrow">↗</span></a>
          <button class="secondary-btn" id="copyDetails">${lang === "bn" ? "তথ্য কপি করুন" : "Copy details"}</button>
        </div>
        <p class="handoff-foot">${lang === "bn" ? "ARIANBOARD একটি স্বাধীন পোর্টাল; সরকারি ফলাফল eBoard-এর মূল সাইটেই যাচাই করুন।" : "ARIANBOARD is independent; verify the official result on eBoard itself."}</p>
      </div>
    </div>`;
  $("copyDetails").addEventListener("click", async () => {
    const copyText = `Exam: ${values.exam}\nYear: ${values.year}\nBoard: ${values.board}\nRoll: ${values.roll}\nRegistration: ${values.registration}`;
    try {
      await navigator.clipboard.writeText(copyText);
      $("copyDetails").textContent = lang === "bn" ? "কপি হয়েছে ✓" : "Copied ✓";
    } catch {
      alert(copyText);
    }
  });
  resultArea.scrollIntoView({behavior:"smooth",block:"start"});
});

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

// Result renderer for future authorized API integration.
// Only pass verified result data from a trusted backend/source.
function renderVerifiedResult(data) {
  const safe = (v) => String(v ?? "—").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
  $("resultArea").innerHTML = `
    <article class="result-card">
      <div class="result-top"><div class="result-brand">ARIANBOARD<small>RESULT PORTAL</small></div><span class="demo-badge">SOURCE: ${safe(data.sourceLabel || "VERIFIED SOURCE")}</span></div>
      <div class="result-body">
        <div class="result-title"><h3>${safe(data.examName || "Examination Result")}</h3><p>${safe(data.year)} · ${safe(data.boardName)}</p></div>
        <div class="student-grid">
          <div class="student-item"><small>${translations[lang].roll}</small><strong>${safe(data.roll)}</strong></div>
          <div class="student-item"><small>${translations[lang].registration}</small><strong>${safe(data.registration)}</strong></div>
          <div class="student-item"><small>Student name</small><strong>${safe(data.name)}</strong></div>
          <div class="student-item"><small>Institution</small><strong>${safe(data.institution)}</strong></div>
          <div class="student-item"><small>GPA</small><strong>${safe(data.gpa)}</strong></div>
          <div class="student-item"><small>${translations[lang].status}</small><strong>${safe(data.status || "Result available")}</strong></div>
        </div>
      </div>
      <div class="demo-watermark">CHECK BY ARIANBOARD · VERIFY WITH OFFICIAL SOURCE</div>
    </article>
    <div class="result-actions"><button class="secondary-btn" id="printResult">${translations[lang].print}</button></div>`;
  $("printResult").addEventListener("click", () => window.print());
}


// ARIANBOARD Student Hub interactive tools
const universityData = [
 ["University of Dhaka","public","Broad disciplines; compare department, admission unit and current circular.","https://www.du.ac.bd/"],
 ["Bangladesh University of Engineering and Technology (BUET)","special","Engineering and architecture; verify current programme eligibility.","https://www.buet.ac.bd/"],
 ["Jahangirnagar University","public","Public university; compare subject availability and admission rules.","https://juniv.edu/"],
 ["University of Rajshahi","public","Broad subject choices; check department-specific requirements.","https://www.ru.ac.bd/"],
 ["University of Chittagong","public","Explore faculties, campus location and current admission notices.","https://cu.ac.bd/"],
 ["Shahjalal University of Science and Technology","special","Science, technology and other disciplines; verify current admission circular.","https://www.sust.edu/"],
 ["Khulna University","public","Review school and discipline offerings before choosing.","https://ku.ac.bd/"],
 ["Chittagong University of Engineering & Technology (CUET)","special","Engineering-focused public university; check programme-specific rules.","https://www.cuet.ac.bd/"],
 ["Rajshahi University of Engineering & Technology (RUET)","special","Engineering-focused programmes; confirm eligibility from official notices.","https://www.ruet.ac.bd/"],
 ["Khulna University of Engineering & Technology (KUET)","special","Engineering and technology focus; compare labs and programme choices.","https://www.kuet.ac.bd/"],
 ["Bangladesh Agricultural University","special","Agriculture and related fields; review programme and admission requirements.","https://bau.edu.bd/"],
 ["Sher-e-Bangla Agricultural University","special","Agriculture-related education; check the current official admission notice.","https://www.sau.edu.bd/"],
 ["Bangladesh University of Professionals (BUP)","public","Multiple disciplines; check unit-specific eligibility and admission dates.","https://www.bup.edu.bd/"],
 ["National University","open","Affiliated colleges and degree programmes; verify college quality and official notices.","https://www.nu.ac.bd/"],
 ["Bangladesh Open University","open","Flexible learning pathways; check programme-specific admission information.","https://www.bou.ac.bd/"],
 ["Jagannath University","public","Public university in Dhaka; compare departments and current admission circular.","https://jnu.ac.bd/"],
 ["Comilla University","public","Public university in Cumilla; check subject offerings and admission requirements.","https://cou.ac.bd/"],
 ["Noakhali Science and Technology University","special","Science, technology and related programmes; confirm current requirements.","https://nstu.edu.bd/"],
 ["Jashore University of Science and Technology","special","Science and technology disciplines; review department details.","https://just.edu.bd/"],
 ["Bangladesh University of Textiles","special","Textile-focused education; check programme and admission eligibility.","https://butex.edu.bd/"],
 ["Bangladesh Maritime University","special","Maritime-related study pathways; review eligibility and career requirements.","https://bmu.edu.bd/"],
 ["Mawlana Bhashani Science and Technology University","special","Science and technology programmes; verify current department options.","https://mbstu.ac.bd/"]
];
const uniList = document.getElementById("uniList");
function renderUniversities(){
  if(!uniList) return;
  const q=(document.getElementById("uniSearch")?.value||"").toLowerCase();
  const type=document.getElementById("uniType")?.value||"all";
  const rows=universityData.filter(u=>(type==="all"||u[1]===type)&&u[0].toLowerCase().includes(q));
  uniList.innerHTML=rows.map(u=>`<article class="uni-item"><strong>${u[0]}</strong><small>${u[2]}</small><a href="${u[3]}" target="_blank" rel="noopener noreferrer">Official website ↗</a></article>`).join("") || "<p>কোনো মিল পাওয়া যায়নি।</p>";
}
document.getElementById("uniSearch")?.addEventListener("input",renderUniversities);
document.getElementById("uniType")?.addEventListener("change",renderUniversities);
renderUniversities();

document.getElementById("makePlan")?.addEventListener("click",()=>{
  const hours=Math.max(1,Math.min(12,Number(document.getElementById("studyHours").value)||4));
  const subjects=Math.max(1,Math.min(10,Number(document.getElementById("studySubjects").value)||3));
  const start=document.getElementById("studyStart").value;
  let [h,m]=start.split(":").map(Number), lines=[];
  const totalMinutes=hours*60, session=Math.max(25,Math.floor(totalMinutes/subjects/5)*5);
  for(let i=0;i<subjects;i++){
    const st=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
    m+=session;h+=Math.floor(m/60);m%=60;h%=24;
    const en=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
    lines.push(`${st}–${en}  |  বিষয় ${i+1}: কনসেপ্ট + অনুশীলন`);
    m+=10;h+=Math.floor(m/60);m%=60;h%=24;
  }
  lines.push("শেষে ১৫ মিনিট: আজ কী শিখেছ লিখে রাখো। নিজের ঘুম ও খাবারের সময় অনুযায়ী রুটিন বদলে নাও।");
  document.getElementById("planOutput").textContent=lines.join("\\n");
});
document.getElementById("calcGpa")?.addEventListener("click",()=>{
  const raw=document.getElementById("gradePoints").value.trim();
  const vals=raw.split(/[,\s]+/).filter(Boolean).map(Number);
  const out=document.getElementById("gpaOutput");
  if(!vals.length||vals.some(n=>!Number.isFinite(n)||n<0||n>5)){out.textContent="০ থেকে ৫-এর মধ্যে বৈধ গ্রেড পয়েন্ট কমা দিয়ে লিখুন।";return;}
  out.textContent=`সাধারণ গড় (আনুমানিক): ${(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2)} / 5.00\\nএটি অফিসিয়াল GPA নয়; বোর্ডের নিয়ম ও ঐচ্ছিক বিষয়ের হিসাব আলাদা হতে পারে।`;
});
const quotes=[
"বড় স্বপ্নের জন্য প্রতিদিন ছোট কিন্তু সত্যিকারের পদক্ষেপ নাও।",
"একটি খারাপ ফলাফল তোমার পুরো গল্প নয়—এটি শুধু একটি অধ্যায়।",
"আজ ৩০ মিনিট মন দিয়ে পড়া, কালকের অনুশোচনার চেয়ে ভালো।",
"নিজের গতিতে এগোও; ধারাবাহিকতা অনেক সময় প্রতিভাকেও ছাড়িয়ে যায়।",
"ব্যর্থতা তোমাকে থামাতে পারে, যদি তুমি শেখা বন্ধ করো।",
"পরিকল্পনা নিখুঁত না হলেও শুরু করো; চলতে চলতেই উন্নতি হবে।",
"তোমার মূল্য নম্বর দিয়ে পুরোপুরি মাপা যায় না।",
"বিশ্রাম নিয়ে আবার শুরু করাও সাহসের অংশ।",
"তুলনা করো গতকালের নিজের সঙ্গে, অন্য কারও হাইলাইটের সঙ্গে নয়।",
"যে প্রশ্ন আজ কঠিন, অনুশীলনে সেটিই একদিন সহজ হতে পারে।",
"সাহায্য চাওয়া দুর্বলতা নয়; এটি শেখার বুদ্ধিমান উপায়।",
"স্বপ্নকে লক্ষ্য বানাও, লক্ষ্যকে কাজ বানাও, কাজকে অভ্যাস বানাও।",
"একদিনে সব বদলাবে না, কিন্তু একদিনের কাজ ভবিষ্যৎ বদলাতে পারে।",
"ফেল করলে পথ বদলাও, নিজের প্রতি সম্মান নয়।",
"তোমার আগামী দিনের জন্য আজ একটি ভালো সিদ্ধান্ত নাও।",
"অল্প অল্প অগ্রগতিও অগ্রগতি—নিজেকে সময় দাও।",
"ভুলের খাতা তোমাকে ব্যর্থতার নয়, উন্নতির মানচিত্র দেখাবে।",
"কঠিন অধ্যায়কে ছোট অংশে ভাঙো; শুরু করলেই অর্ধেক বাধা কমে।",
"তুমি সাহায্য পাওয়ার যোগ্য, শেখার যোগ্য, আবার চেষ্টা করার যোগ্য।",
"সাফল্য মানে শুধু পৌঁছানো নয়—পথে মানুষ হিসেবেও বড় হওয়া।"
];
document.getElementById("newQuote")?.addEventListener("click",()=>{
 const q=quotes[Math.floor(Math.random()*quotes.length)];
 document.getElementById("quoteText").textContent=q;
 document.getElementById("quoteAuthor").textContent="— Talha Jubayer Arian";
});

// ARIANBOARD v4 Student Toolkit
(()=>{
 const $=id=>document.getElementById(id);
 const read=(k,d)=>{try{return JSON.parse(localStorage.getItem("arian_v4_"+k))??d}catch{return d}};
 const save=(k,v)=>{try{localStorage.setItem("arian_v4_"+k,JSON.stringify(v))}catch{}};
 // Focus timer
 let remaining=25*60, tick=null;
 const display=()=>{if($("timerDisplay"))$("timerDisplay").textContent=String(Math.floor(remaining/60)).padStart(2,"0")+":"+String(remaining%60).padStart(2,"0")};
 $("timerStart")?.addEventListener("click",()=>{if(tick){clearInterval(tick);tick=null;$("timerStart").textContent="চালু করো";return}
   if(remaining<=0)remaining=Math.max(1,Math.min(180,Number($("focusMinutes").value)||25))*60;
   $("timerStart").textContent="পজ";$("timerStatus").textContent="ফোকাস চলছে—একটি কাজেই মন দাও";
   tick=setInterval(()=>{remaining--;display();if(remaining<=0){clearInterval(tick);tick=null;$("timerStart").textContent="আবার শুরু";$("timerStatus").textContent="সেশন শেষ! ৫ মিনিট বিরতি নাও।";}},1000);
 });
 $("timerReset")?.addEventListener("click",()=>{if(tick)clearInterval(tick);tick=null;remaining=Math.max(1,Math.min(180,Number($("focusMinutes").value)||25))*60;display();$("timerStart").textContent="শুরু";$("timerStatus").textContent="ফোকাস সেশন প্রস্তুত"});
 $("focusMinutes")?.addEventListener("change",()=>{$("timerReset")?.click()});display();
 // Tasks
 let tasks=read("tasks",[]);
 const drawTasks=()=>{if(!$("taskList"))return;$("taskList").innerHTML="";tasks.forEach((t,i)=>{const li=document.createElement("li");const cb=document.createElement("input");cb.type="checkbox";cb.checked=t.done;cb.addEventListener("change",()=>{tasks[i].done=cb.checked;save("tasks",tasks);drawTasks()});const s=document.createElement("span");s.textContent=t.text;s.style.textDecoration=t.done?"line-through":"none";const del=document.createElement("button");del.textContent="মুছুন";del.addEventListener("click",()=>{tasks.splice(i,1);save("tasks",tasks);drawTasks()});li.append(cb,s,del);$("taskList").append(li)});$("taskCount").textContent=`${tasks.filter(t=>!t.done).length}টি বাকি · মোট ${tasks.length}টি`};
 $("addTask")?.addEventListener("click",()=>{const v=$("taskInput").value.trim();if(!v)return;tasks.push({text:v,done:false});$("taskInput").value="";save("tasks",tasks);drawTasks()});drawTasks();
 // Habits
 let habits=read("habits",[]);
 const drawHabits=()=>{if(!$("habitList"))return;$("habitList").innerHTML="";habits.forEach((h,i)=>{const d=document.createElement("div");d.className="habit-item";const s=document.createElement("span");s.textContent=h.name+" · "+h.count+" দিন";const b=document.createElement("button");b.textContent="আজ করেছি ✓";b.addEventListener("click",()=>{const today=new Date().toDateString();if(h.last!==today){h.count++;h.last=today;save("habits",habits);drawHabits()}});const x=document.createElement("button");x.textContent="×";x.addEventListener("click",()=>{habits.splice(i,1);save("habits",habits);drawHabits()});d.append(s,b,x);$("habitList").append(d)})};
 $("addHabit")?.addEventListener("click",()=>{const v=$("habitInput").value.trim();if(!v)return;habits.push({name:v,count:0,last:""});$("habitInput").value="";save("habits",habits);drawHabits()});drawHabits();
 // Notes
 if($("quickNotes")){$("quickNotes").value=read("notes","");$("quickNotes").addEventListener("input",()=>{save("notes",$("quickNotes").value);$("noteStatus").textContent="সেভ হয়েছে ✓"})}
 // Flashcards
 let cards=read("cards",[]), cardIndex=0, answerShown=false;
 const showCard=()=>{const v=$("flashView");if(!v)return;if(!cards.length){v.textContent="এখনো কোনো কার্ড নেই।";return}const c=cards[cardIndex%cards.length];v.textContent=answerShown?"উত্তর: "+c.a:"প্রশ্ন: "+c.q+"\\n(উত্তর দেখতে আবার 'কার্ড দেখো' চাপো)";};
 $("addFlash")?.addEventListener("click",()=>{const q=$("flashQ").value.trim(),a=$("flashA").value.trim();if(!q||!a)return;cards.push({q,a});save("cards",cards);$("flashQ").value="";$("flashA").value="";cardIndex=cards.length-1;answerShown=false;showCard()});
 $("nextFlash")?.addEventListener("click",()=>{if(!cards.length)return; if(!answerShown)answerShown=true;else{cardIndex=(cardIndex+1)%cards.length;answerShown=false}showCard()});showCard();
 // Budget
 $("budgetCalc")?.addEventListener("click",()=>{const total=Math.max(0,Number($("budgetTotal").value)||0),spent=Math.max(0,Number($("budgetSpent").value)||0);$("budgetOutput").textContent=`${spent>total?"বাজেট ছাড়িয়েছে: ":"অবশিষ্ট: "}৳${Math.abs(total-spent).toLocaleString("bn-BD")}`});
 // Deadlines
 let deadlines=read("deadlines",[]);
 const drawDeadlines=()=>{if(!$("deadlineList"))return;$("deadlineList").innerHTML="";deadlines.sort((a,b)=>a.date.localeCompare(b.date)).forEach((d,i)=>{const li=document.createElement("li");const days=Math.ceil((new Date(d.date+"T23:59:59")-new Date())/86400000);li.textContent=`${d.name} — ${d.date} (${days<0?"সময় পেরিয়েছে":days===0?"আজ":days+" দিন বাকি"})`;const x=document.createElement("button");x.textContent="মুছুন";x.onclick=()=>{deadlines.splice(i,1);save("deadlines",deadlines);drawDeadlines()};li.append(x);$("deadlineList").append(li)})};
 $("addDeadline")?.addEventListener("click",()=>{const name=$("deadlineName").value.trim(),date=$("deadlineDate").value;if(!name||!date)return;deadlines.push({name,date});save("deadlines",deadlines);$("deadlineName").value="";drawDeadlines()});drawDeadlines();
 // Goal
 $("saveGoal")?.addEventListener("click",()=>{const name=$("goalName").value.trim(),step=$("goalStep").value.trim();if(!name||!step)return;save("goal",{name,step});$("goalOutput").textContent=`লক্ষ্য: ${name}\\nআজকের পদক্ষেপ: ${step}`});
 const goal=read("goal",null);if(goal&&$("goalOutput"))$("goalOutput").textContent=`লক্ষ্য: ${goal.name}\\nআজকের পদক্ষেপ: ${goal.step}`;
 // Resource library: 120 practical, categorized learning prompts and checklists.
 const seed=[
 ["পড়াশোনা","study","Active Recall","বই বন্ধ করে ৫টি প্রশ্নের উত্তর নিজের ভাষায় লিখো; পরে বইয়ের সঙ্গে মিলিয়ে ভুল ঠিক করো।"],
 ["পড়াশোনা","study","Spaced Revision","আজ শেখা বিষয় ১ দিন, ৩ দিন, ৭ দিন ও ১৪ দিন পর সংক্ষেপে রিভিশন দাও।"],
 ["পড়াশোনা","study","ভুলের খাতা","প্রতিটি ভুলের পাশে ভুলের কারণ, সঠিক নিয়ম ও পরেরবার কীভাবে ধরবে লিখে রাখো।"],
 ["পড়াশোনা","study","কঠিন অধ্যায় ভাঙা","অধ্যায়কে ২০–৩০ মিনিটের ছোট অংশে ভাগ করে প্রতিটি অংশ শেষে নিজেকে পরীক্ষা করো।"],
 ["পড়াশোনা","study","নিজেকে শেখাও","একটি ধারণা ১২ বছরের কাউকে বোঝানোর মতো সহজ ভাষায় ব্যাখ্যা করো।"],
 ["পরীক্ষা","exam","সময় ভাগ","মোট সময় থেকে শেষ ১০ মিনিট যাচাইয়ের জন্য রেখে প্রশ্নের নম্বর অনুযায়ী সময় ভাগ করো।"],
 ["পরীক্ষা","exam","প্রশ্ন বিশ্লেষণ","প্রশ্নে নির্দেশক শব্দ—ব্যাখ্যা, তুলনা, প্রমাণ, নির্ণয়—আন্ডারলাইন করো।"],
 ["পরীক্ষা","exam","মক টেস্ট","সপ্তাহে অন্তত একটি সময়বদ্ধ মক টেস্ট দিয়ে ভুলের ধরন বিশ্লেষণ করো।"],
 ["পরীক্ষা","exam","পরীক্ষার আগের রাত","নতুন অধ্যায় শুরু না করে সূত্র, সংজ্ঞা, ভুলের খাতা ও প্রয়োজনীয় জিনিস গুছিয়ে ঘুমাও।"],
 ["ভর্তি","admission","যোগ্যতা যাচাই","SSC/HSC GPA, পাশের বছর, বিভাগ ও বিষয়ভিত্তিক শর্ত সর্বশেষ অফিসিয়াল সার্কুলারে মিলিয়ে নাও।"],
 ["ভর্তি","admission","আবেদন নথি","ছবি, স্বাক্ষর, নম্বরপত্র, পরিচয়তথ্য ও পেমেন্ট রসিদ আলাদা ফোল্ডারে রাখো।"],
 ["ভর্তি","admission","ভর্তি খরচ","আবেদন ফি, যাতায়াত, থাকা, বই ও প্রথম সেমিস্টারের সম্ভাব্য খরচ আলাদা হিসাব করো।"],
 ["ভর্তি","admission","বিশ্ববিদ্যালয় তুলনা","বিষয়, স্বীকৃতি, শিক্ষক, ল্যাব, খরচ, অবস্থান ও স্নাতকের সুযোগ তুলনা করো।"],
 ["ক্যারিয়ার","career","CV-এর প্রমাণ","দক্ষতা লেখার বদলে কাজের উদাহরণ দাও—কী বানিয়েছ, কী দায়িত্ব নিয়েছ, কী ফল হয়েছে।"],
 ["ক্যারিয়ার","career","পোর্টফোলিও","নিজের ৩টি প্রকল্পে সমস্যা, তোমার ভূমিকা, ব্যবহৃত টুল ও শেখা বিষয় লিখে রাখো।"],
 ["ক্যারিয়ার","career","ইন্টারভিউ প্রস্তুতি","নিজের পরিচয়, একটি চ্যালেঞ্জ, একটি সাফল্য ও শেখার আগ্রহ—প্রতিটির ৬০ সেকেন্ডের উত্তর অনুশীলন করো।"],
 ["জীবনদক্ষতা","life","ডিজিটাল নিরাপত্তা","প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা পাসওয়ার্ড ও সম্ভব হলে 2-step verification চালু করো।"],
 ["জীবনদক্ষতা","life","সাপ্তাহিক পর্যালোচনা","কী শেষ, কী বাকি, কোথায় সময় নষ্ট, আগামী সপ্তাহের ৩টি অগ্রাধিকার লিখো।"],
 ["জীবনদক্ষতা","life","মানসিক চাপ","চাপ বেশি হলে কাজ ছোট করো, বিরতি নাও এবং বিশ্বস্ত মানুষ বা উপযুক্ত সহায়তার সঙ্গে কথা বলো।"],
 ["জীবনদক্ষতা","life","অর্থ ব্যবস্থাপনা","খরচকে প্রয়োজন, শিক্ষা, যাতায়াত ও ইচ্ছার ভাগে লিখে মাস শেষে পর্যালোচনা করো।"]
 ];
 const variants=[
 ["দৈনিক অনুশীলন","আজ ২০ মিনিট সময় ধরে প্রয়োগ করো। শেষে কী শিখলে এক লাইনে লিখো।"],
 ["সাপ্তাহিক লক্ষ্য","এই সপ্তাহে তিনবার প্রয়োগ করে ফলাফল নোট করো।"],
 ["নিজেকে যাচাই","কাজটি না দেখে মনে করার চেষ্টা করো; আটকে গেলে দুর্বল জায়গা চিহ্নিত করো।"],
 ["বন্ধুকে শেখাও","বন্ধুকে বা নিজের কণ্ঠে ২ মিনিটে বিষয়টি বুঝিয়ে বলো।"],
 ["প্রগতি মাপো","আগের সপ্তাহের তুলনায় একটি পরিমাপযোগ্য উন্নতি ঠিক করো।"]
 ];
 const resources=[];seed.forEach(s=>{resources.push({title:s[2],cat:s[1],desc:s[3],tag:s[0]});variants.forEach(v=>resources.push({title:s[2]+" · "+v[0],cat:s[1],desc:s[3]+" "+v[1],tag:s[0]}))});
 // 120+ distinct practical cards; deterministic, searchable and offline.
 for(let i=0;i<resources.length;i++){resources[i].id=i+1}
 const renderResources=()=>{const box=$("resourceList");if(!box)return;const q=($("resourceSearch").value||"").toLowerCase(),cat=$("resourceCategory").value;const rows=resources.filter(r=>(cat==="all"||r.cat===cat)&&(r.title+" "+r.desc+" "+r.tag).toLowerCase().includes(q));box.innerHTML=rows.map(r=>`<article class="resource-item"><small>${r.tag} · #${r.id}</small><h3>${r.title}</h3><p>${r.desc}</p></article>`).join("")||"<p>কোনো গাইড পাওয়া যায়নি।</p>"};
 $("resourceSearch")?.addEventListener("input",renderResources);$("resourceCategory")?.addEventListener("change",renderResources);renderResources();
})();
