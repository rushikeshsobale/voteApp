import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
const ElectionInterface = () => {
  const [clickCounts, setClickCounts] = useState(Array(15).fill(0));
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const playAudioTone = () => {
    // const audio = new Audio('WhatsApp Audio 2024-11-16 at 3.41.33 PM (online-audio-converter.com).mp3');
    // audio.play();
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
    <div className="my-2">
      {/* Header Section */}
      <h5 className="text-center" style={{ padding: '0px', fontSize: '12px', marginBottom: '0px' }}>150 बेलापूर विधानसभा मतदारसंघ</h5>
      <p className="text-center">
        <button
          className="btn btn-primary btn-sm mx-2 text-white rounded"
          style={{
            borderRadius: '10px',
            background: '#393186',
            fontSize: '10px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',// Adds a subtle shadow
          }}
        >
          डेमो मतदानासाठी कमळ चिन्ह समोरिल बटन दाबा
        </button>

      </p>

      <div className="text-center mb-3 d-flex">
        <button className="btn btn-warning btn-sm mx-1 text-white p-1" style={{ background: '#ff6634', fontSize: '10px', fontWeight: '800', padding: '0px' }}>
          मतदानाच्या दिवशी कमळ चिन्हा समोरिल बटन दाबा
        </button>
        <Button
          className="btn btn-success btn-sm mx-2 my-auto"
          onClick={handleShareClick}
          style={{ fontSize: '10px', padding: '0px', width: '100px', height: '30px' }}
        >
          <FaWhatsapp className="me-2" /> SHARE
        </Button>
      </div>

      {/* Voting Table */}
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle"
          style={{
            border: "2px solid black", // Border width and color for the table
          }}  // Ensures borders between table cells are collapsed into a single border
        >
          <thead>
            <tr>
              <th style={{ fontSize: "11px", fontWeight: "normal" }}>S.No.</th>
              <th style={{ fontSize: "11px", fontWeight: "normal" }}>Name of Candidate</th>
              <th style={{ fontSize: "11px", fontWeight: "normal", padding: '0px' }}>Election Symbol</th>
              <th style={{ fontSize: "11px", fontWeight: "normal" }}>Bulb</th>
              <th style={{ fontSize: "11px", fontWeight: "normal" }}>Button</th>
            </tr>
          </thead>

          <tbody className="p-0">
            {Array.from({ length: 15 }, (_, index) => (
              <tr key={index}>
                <td style={{ fontSize: "8px", padding: '0px', margin: '0px' }}>{index + 1}</td>
                <td style={{ fontSize: "8px", padding: '0px' }}>
                  {index === 1 && (

                    <div className="d-flex flex-row align-items-center">
                      <td>
                        <div className="text-center" style={{ width: '85px' }}>
                          <p style={{ fontSize: '11px', fontWeight: '600', marginBottom: '0px', width: '83px' }}>{candidates[0].nameMarathi}</p>
                          <p style={{ marginBottom: '0px', width: '83px' }}>{candidates[0].name}</p>
                          {/* Assuming you have the Marathi name in a different field */}
                        </div>
                      </td>
                      <td>
                        <div className="">
                          <img
                            src={candidates[0].photo}
                            alt="Candidate"
                            className="img"
                            style={{
                              width: "40px", // Adjust size for better visualization
                              height: "35px", // Ensure the aspect ratio is kept for good visuals
                              objectFit: "cover", // Optional, ensures the image covers the space
                            }}
                          />
                        </div>
                      </td>
                    </div>
                  )}
                </td>

                <td style={{ width: '40px', padding: '0px' }}>
                  {index === 1 && (
                    <img
                      src={candidates[0].symbol}
                      alt="Symbol"
                      className="img-fluid"
                      style={{ width: "40px" }}
                    />
                  )}
                </td>
                <td style={{ padding: '0px', fontSize: '9px' }}>
                  <span>&larr;</span>
                </td>
                <td style={{ padding: '0px' }}>
                  <button
                    style={{
                      fontSize: '8px',
                      background: '#393186',
                      borderRadius: '10px',
                      width: '45px',
                      height: '20px',
                      padding: '0px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Adds a shadow effect
                    }}
                    className="btn btn-primary btn-sm mb-1" // Adds bottom margin using Bootstrap class
                    onClick={() => handleButtonClick(index, candidates[0])}
                  >
                    {index === 1 ? 'बटण दाबा' : ''}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '5px' }}>अस्वीकरण: ही एक शैक्षणिक व प्रमोशनल वेबसाइट आहे, आणि याचा वास्तविक मतदानाशी काहीही संबंध नाही. माहितीपूर्ण उद्देशासाठी कृपया याचा वापर करा.</p>
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
