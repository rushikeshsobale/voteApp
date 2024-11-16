import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ElectionInterface = () => {
  const [clickCounts, setClickCounts] = useState(Array(15).fill(0));
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const playAudioTone = () => {
    const audio = new Audio('WhatsApp Audio 2024-11-16 at 3.41.33 PM (online-audio-converter.com).mp3');
    audio.play();
  };

  const handleButtonClick = (index, candidate) => {
    const updatedCounts = [...clickCounts];
    updatedCounts[index] += 1;
    setClickCounts(updatedCounts);
    setSelectedCandidate(candidate);
    playAudioTone(); // Play tone
    setShowModal(true);
    setTimeout(() => {
      const audio = new Audio('WhatsApp Audio 2024-11-16 at 3.44.21 PM (online-audio-converter.com).mp3');
      audio.play();
    }, 2000);
  };

  const handleShareClick = () => {
    const url = window.location.href; // Get the current page URL
    const message = "Check out the election interface!"; // Message to be shared

    // Social media sharing URLs
    const shareUrl = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)} ${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
    
    };
    // Open the social media share links in new windows
    window.open(shareUrl.whatsapp, "_blank", "width=600,height=400");
    window.open(shareUrl.facebook, "_blank", "width=600,height=400");
    window.open(shareUrl.twitter, "_blank", "width=600,height=400");
   
  };

  const candidates = [
    {
      name: "Manda Vijay Mhatre", // English name
      nameMarathi: "मंदा विजय म्हात्रे", // Marathi name
      party: "Bharatiya Janata Party",
      symbol: "03.png",
      photo: "WhatsApp Image 2024-11-16 at 5.44.54 PM.jpeg",
    },
    // Add more candidates here
  ];

  return (
    <div className="container my-4">
      {/* Header Section */}
      <h4 className="text-center fs-6">150 बेलापूर विधानसभा मतदारसंघ</h4>
      <p className="text-center">
        <button className="btn btn-primary btn-sm mx-2">
          डेमो मतदानासाठी कमळ चिन्ह समोरिल बटन दाबा
        </button>
      </p>

      <div className="text-center mb-3">
        <button className="btn btn-warning btn-sm mx-2">
          मतदानाच्या दिवशी कमळ चिन्हा समोरिल बटन दाबा
        </button>
        <button
          className="btn btn-success btn-sm mx-2"
          onClick={handleShareClick} // Handle share click
        >
          SHARE
        </button>
      </div>

      {/* Voting Table */}
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr>
              <th style={{ fontSize: "12px" }}>S.No.</th>
              <th style={{ fontSize: "12px" }}>Name of Candidate</th>
              <th style={{ fontSize: "12px" }}>Election Symbol</th>
              <th style={{ fontSize: "12px" }}>Bulb</th>
              <th style={{ fontSize: "12px" }}>Button</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }, (_, index) => (
              <tr key={index}>
                <td style={{ fontSize: "10px" }}>{index + 1}</td>
                <td style={{ fontSize: "12px" }}>
                  {index === 1 && (
                    <div className="d-flex flex-column align-items-center">
                      <div className="mb-2">
                        <img
                          src={candidates[0].photo}
                          alt="Candidate"
                          className="img-thumbnail"
                          style={{
                            width: "80px", // Adjust size for better visualization
                            height: "80px", // Ensure the aspect ratio is kept for good visuals
                            objectFit: "cover", // Optional, ensures the image covers the space
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <p>{candidates[0].name}</p>
                        <p>{candidates[0].nameMarathi}</p> {/* Assuming you have the Marathi name in a different field */}
                      </div>
                    </div>
                  )}
                </td>

                <td>
                  {index === 1 && (
                    <img
                      src={candidates[0].symbol}
                      alt="Symbol"
                      className="img-fluid"
                      style={{ width: "50px" }}
                    />
                  )}
                </td>
                <td>
                  <span>&larr;</span>
                </td>
                <td>
                  <button
                    style={{ fontSize: '10px' }}
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      handleButtonClick(index, candidates[0])
                    }
                  >
                    PRESS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedCandidate && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered "
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5">वी.वी.पॅट / VVPAT</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedCandidate.photo}
                  alt="Candidate"
                  className="img-thumbnail mb-2"
                  style={{ width: "80px", height: "80px" }}
                />
                <h6 className="fw-bold">{selectedCandidate.name}</h6>
                <p style={{ fontSize: "14px" }}>{selectedCandidate.party}</p>
                <img
                  src={selectedCandidate.symbol}
                  alt="Election Symbol"
                  className="img-fluid mb-2"
                  style={{ width: "40px" }}
                />
                <p style={{ fontSize: "12px" }}>
                  कृपया स्लिपची पडताळणी करा / Please verify slip
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectionInterface;
