import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ElectionInterface = () => {
  const [clickCounts, setClickCounts] = useState(Array(15).fill(0));
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const playAudioTone = () => {
    // const audio = new Audio('assets/Evm2.mp3');
    // audio.play();
  };

  const handleButtonClick = (index, candidate) => {
    const updatedCounts = [...clickCounts];
    updatedCounts[index] += 1;
    setClickCounts(updatedCounts);
    setSelectedCandidate(candidate);
    playAudioTone(); // Play tone
    setShowModal(true);
  };

  const candidates = [
    {
      name: "Ganesh Ramchandra Naik",
      party: "Bharatiya Janata Party",
      symbol: "https://via.placeholder.com/50",
      photo: "https://via.placeholder.com/50",
    },
    // Add more candidates here
  ];

  return (
    <div className="container my-4">
      {/* Header Section */}
      <h4 className="text-center fs-6">150 बेलापूर विधानसभा मतदारसंघ</h4>
      <p className="text-center">
        <button className="btn btn-primary btn-sm">मदत बटन</button>
      </p>

      <div className="text-center mb-3">
        <button className="btn btn-warning btn-sm mx-2">
          मतदानाच्या दिवशी बटन दाबा
        </button>
        <button className="btn btn-success btn-sm mx-2">SHARE</button>
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
                <td style={{ fontSize: "10px" }}>
                  {index === 1 && (
                    <div>
                      <img
                        src={candidates[0].photo}
                        alt="Candidate"
                        className="img-thumbnail mb-1"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <br />
                      {candidates[0].name}
                    </div>
                  )}
                </td>
                <td>
                  {index === 1 && (
                    <img
                      src={candidates[0].symbol}
                      alt="Symbol"
                      className="img-fluid"
                      style={{ width: "30px" }}
                    />
                  )}
                </td>
                <td>
                  <span>&larr;</span>
                </td>
                <td>
                  <button
                    style={{fontSize:'10px', width:'40px'}}
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
