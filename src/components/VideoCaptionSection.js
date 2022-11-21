import React from "react";
import "../css/VideoCaptionSection.css";

function VideoCaptionSection() {
  return (
    <div className="video-caption-section p-5">
      <div className="row video-caption-row">
        <div className="col-lg-6 col-md-6 col-12 video-section-video">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/wDhysutq8-w"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="video-caption-text">
            <p>
              রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন <br />
              <br />
              <span
                style={{
                  color: "white",
                  fontWeight: "normal",
                }}
              >
                " আর মহিলা যদি (কোন প্রকার) সুগন্ধি ব্যবহার করে কোন (পুরুষের)
                মজলিসের পাশ দিয়ে অতিক্রম করে, তবে সে ব্যভিচারিণী । " [ হাকেম,
                সহীহুল জামে, ৪৫৪০ নং ]
                <br /> অন্যত্র বলেন, <br /> " আল্লাহর বান্দীদেরকে মসজিদে আসতে
                বারণ করো না, তবে তারা যেন খোশবু ব্যবহার না করে সাধাসিধাভাবে
                আসে।” [ আহমাদ, আবূ দাঊদ, সহীহ জামে ৭৪৫৭ নং ]
                <br /> অন্যত্র বলেন, <br /> " যে মহিলা সেন্ট ব্যবহার করে মসজিদে
                যাবে, সে মহিলার গোসল না করা পর্যন্ত কোন নামায কবুল হবে না।" [
                ইবনে মাজাহ ৪০০২ ]
              </span>
            </p>
            <button className="btn btn-dark">সকল প্রোডাক্ট দেখুন</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCaptionSection;
