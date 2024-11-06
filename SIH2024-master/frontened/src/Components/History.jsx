import React from "react";
import "../Css/History.css"; // Make sure to adjust the path if necessary
import Line from "./Line";

const HistoryAndNewsletter = () => {
  const items = [
    "Breaking News: Major changes in the tech industry.",
    "Stay tuned for the latest updates on the upcoming event.",
    "Subscribe to our newsletter for exclusive content.",
    "Don't miss our next issue filled with insights and tips.",
    "Join our community and connect with like-minded individuals.",
    "Exciting developments are on the horizon.",
    "Check out our latest articles for in-depth analysis.",
    "Get exclusive early access to our new features.",
    "Read interviews with industry leaders.",
    "Discover tips and tricks to enhance your skills.",
    "Join discussions and webinars with experts.",
    "Be part of our newsletter to stay informed.",
  ];

  return (
    <div className="history-container">
      <div className="history-section">
        <div className="history-heading-container">
          <Line />
          <div className="history-heading">Philatelic History</div>
        </div>

        <p className="history-description">
          The evolution of Mankind is rooted in its understanding of Yesterday,
          Today and Tomorrow. In this endeavour, history has been recorded in
          many guises and disguises. India has sung its famous Love History
          through aeons, sending messages by clouds, in Kalidas creation
          Meghdootam. Sandeshvahaks (Messengers) formed an important part of the
          administration in bringing/carrying of the messages besides spying. It
          is an attempt here to put in all the available information in Indian
          Postal History Postal System used by various Indian Kings, the British
          set up, Role in Indian Independence, Post Independent India era and
          progressing to the Technology Phase and further, IT Modernization
          Project 2012 with the induction of the online processes.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="news-container">
        <div className="news-heading">NOTICE BOARD</div>
        <div className="history-carousel-container">
          <div className="history-carousel-items">
            {items.map((item, index) => (
              <div className="history-carousel-item" key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAndNewsletter;
