import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import './index.css';
const ElectionInterface = () => {
  const [clickCounts, setClickCounts] = useState(Array(15).fill(0));
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [url, setUrl] = useState('https://digibitsearch.com/ganeshnaik/demo-voting/assets/bulb.png');
  const playAudioTone = (index) => {
    if (index == 1) {
      // Play the candidate-specific audio
      const audio = new Audio('WhatsApp Audio 2024-11-17 at 12.01.49 AM (online-audio-converter.com).mp3');
      audio.play();
    } else {
      // Play the default audio when no candidate is selected
      const audio = new Audio('WhatsApp Audio 2024-11-16 at 3 (mp3cut.net).mp3');
      audio.play();
    }
  };

  const handleButtonClick = (index, candidate) => {
    if (index == 1) {
      setUrl('https://digibitsearch.com/ganeshnaik/demo-voting/assets/bulbred.png')
    }
    else {
      setUrl('https://digibitsearch.com/ganeshnaik/demo-voting/assets/bulb.png')
    }
    console.log(candidate, 'candidate', index)
    const updatedCounts = [...clickCounts];
    updatedCounts[index] += 1;
    setClickCounts(updatedCounts);
    setSelectedCandidate(candidate);
    playAudioTone(index);
    if (index == 1) {
      setTimeout(() => {
        const audio = new Audio('WhatsApp Audio 2024-11-17 at 12.03.04 AM (online-audio-converter.com).mp3');
        audio.play();
      
        setShowModal(true);

      }, 1300)

      setTimeout(() => {
        setShowModal(false);
        setUrl('https://digibitsearch.com/ganeshnaik/demo-voting/assets/bulb.png')
      }, 4000)
    }
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
      symbol: "03.jpg",
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
      <div className="table-responsive" style={{ margin: '5PX' }}>
        <table className="table table-bordered text-center align-middle"
          style={{

            border: "1px solid black", // Border width and color for the table
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
            {Array.from({ length: 20 }, (_, index) => (
              <tr key={index}>
                <td style={{ fontSize: "10px", padding: '0px', margin: '0px' }}>{index + 1}</td>
                <td style={{ fontSize: "8px", padding: '0px' }}>
                  {index === 1 && (

                    <div className="d-flex flex-row align-items-center">
                      {/* Name and Details Container */}
                      <div className="text-center" style={{ width: '85px' }}>
                        <p style={{ fontSize: '11px', fontWeight: '600', marginBottom: '0px', width: '83px' }}>
                          {candidates[0].nameMarathi}
                        </p>
                        <p style={{ marginBottom: '0px', width: '83px' }}>
                          {candidates[0].name}
                        </p>
                      </div>

                      {/* Candidate Photo */}
                      <div>
                        <img
                          src={candidates[0].photo}
                          alt="Candidate"
                          className="img"
                          style={{
                            width: '40px', // Adjust size for better visualization
                            height: '35px', // Ensure the aspect ratio is kept for good visuals
                            objectFit: 'cover', // Optional, ensures the image covers the space
                          }}
                        />
                      </div>
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
                  <img
                    src={index == 1 ? url : 'https://digibitsearch.com/ganeshnaik/demo-voting/assets/bulb.png'}
                    alt="Symbol"
                    className="img-fluid"
                    style={{ width: "20px" }}
                  />
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
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered p-3 bg-none"
            style={{
              maxWidth: "400px", // Smaller width for the modal (card size)
            }}
          >
            <div
              className="modal-content px-2 py-2"
              style={{
                borderRadius: '0px',
                backgroundColor: "black", // White background for inner content
                // Rounded corners
              }}
            >

              <h5 className=" fs-5 text-center text-white mt-3 fw-bold" style={{ fontFamily: 'serif'}} >वी.वी.पॅट / VVPAT</h5>

              <div className="modal-body text-start py-5 px-3"  style={{border:'1px solid #616161'}}>
                <div className='bg-white d-flex justify-content-center items-align-center' style={{
                  height: '250px',
                  transition: "transform 0.5s ease-out", // Smooth slide-in effect
                  transform: "translateY(100%)", // Start position off-screen
                  animation: "slide-up 0.5s forwards",
                }}>
                  <div className="d-flex justify-content-center items-align-center flex-row bg-white  d-flex mx-2  pt-3 gap-1 my-auto"
                    style={{ borderTop: '1px solid black', borderBottom: '1px solid black', height: '160px' }}
                  >
                    <img
                      src={selectedCandidate.photo}
                      alt="Candidate"
                      className=" mb-2 mx-1"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover", // Optional to ensure the image fits well
                      }}
                    />
                    <div style={{ padding: '0px', marginBottom: '0px', fontSize: '13px' }}>
                      <p style={{ padding: '0px', marginBottom: '0px', fontWeight: "600" }}>{selectedCandidate.nameMarathi}</p>
                      <p style={{ padding: '0px', marginBottom: '0px', fontWeight: "600" }}>{selectedCandidate.name}</p>
                      <p style={{ padding: '0px', marginBottom: '0px', letterSpacing: '-0.5px' }}>भारतीय जनता पार्टी</p>
                      <p style={{ padding: '0px', marginBottom: '0px', letterSpacing: '-0.5px' }}>{selectedCandidate.party}</p>
                    </div>
                    <img
                      src={selectedCandidate.symbol}
                      alt="Election Symbol"
                      className="img-fluid mb-2"
                      style={{
                        width: "50px",
                        height: '50px'
                      }}
                    />
                  </div>
                </div>
               
              </div>
              <h3 className="text-white p-1" style={{ fontSize: '12px', zIndex:100 }}>कृपया स्लिपची पडताळणी करा / Please verify slip <br></br> मतदानाच्या दिवशी सुद्धा "कमळ" चिन्हा <br></br>समोरील बटण दाबावे</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ElectionInterface;
