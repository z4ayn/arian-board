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
  if (!/^[0-9A-Za-z-]{3,20}$/.test(roll)) {
    alert(translations[lang].invalid);
    return;
  }
  const resultArea = $("resultArea");
  resultArea.innerHTML = `
    <div class="notice">
      <strong>${translations[lang].notFound}</strong>
      <span>${translations[lang].demoDesc}</span>
      <div class="source-links">
        <a href="https://eboardresults.com/v2/home" target="_blank" rel="noopener noreferrer">${translations[lang].openOfficial} — eBoard ↗</a>
        <a href="https://educationboardresults.gov.bd/" target="_blank" rel="noopener noreferrer">Education Board Results ↗</a>
      </div>
    </div>`;
  resultArea.scrollIntoView({behavior:"smooth",block:"start"});
});

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
