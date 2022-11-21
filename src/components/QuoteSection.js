import React from "react";
import "../css/QuoteSection.css";

function QuoteSection() {
  return (
    <div className="quote-section p-5">
      <div className="quote-row row p-5">
        <div className="col-lg-4 col-md-4 col-sm-12 p-4 rounded shadow bg-dark text-light quote-card">
          <h4>
            " আমি আহলে ইল্মদের (আলিমদের) কাছে শুনেছি, তাঁরা প্রত্যেক ঈদে
            সাজসজ্জা ও সুগন্ধি ব্যবহারকে মুস্তাহাব মনে করতেন। "
          </h4>
          <h3 className="mt-5">~ ইমাম মালেক রহিমাহুল্লাহ।</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-4 quote-card">
          <h4>
            'রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম নিজ শরীর থেকে দুর্গন্ধ
            বের হওয়া খুবই অপছন্দ ও গুরুতর মনে করতেন।' [ সহিহুল মুসলিম, ১৪৭৪ ]
          </h4>
          <h3 className="mt-5"> ~আম্মাজান আয়িশা রাদিয়াল্লাহু তা'আলা আনহা</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-4 rounded shadow bg-dark text-light quote-card">
          <h4>
            ''আতর লাগানোর সময় মনে এই নিয়ত রাখা যে, প্রিয় নবীজি সাল্লাল্লাহু
            আলাইহি ওয়া সাল্লাম আতর লাগাতেন বলেই লাগাচ্ছি তাহলে এই আতর লাগানো টাও
            সওয়াবের কাজ হয়ে যাবে।"
          </h4>
          <h3 className="mt-5"> ~মুফতি মুস্তাকুন্নবী কাসেমী হাফিজাহুল্লাহ</h3>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;
