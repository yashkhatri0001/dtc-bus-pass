import React from "react";
import "./App.css";

const BusPass = () => {
  return (
    <div className="flex flex-col items-center bg-teal-600 p-6 min-h-screen font-serif">
      <div
        className="relative w-full max-w-4xl bg-white shadow-lg border-2 border-gray-300 p-8"
        style={{
          backgroundImage: "url(images/background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Background watermark */}
        <div className="absolute inset-0 bg-dtc-logo bg-cover opacity-10 z-0"></div>

        {/* Horizontal and vertical lines */}
        <div className="absolute top-[85px] left-0 w-full divider-horizontal z-10"></div>
        <div className="absolute bottom-[120px] left-0 w-full divider-horizontal z-10"></div>
        <div className="absolute top-[calc(100% - 250px)] left-1/2 w-0.2 h-[calc(100% - 250px)] divider-vertical z-10"></div>

        <header className="text-center mb-6 z-20 relative">
          <h1 className="text-2xl font-bold text-teal-500 underline">
            DTC and Cluster Bus Pass
          </h1>
        </header>
        <main className="flex flex-col items-center z-20 relative">
          <div className="mb-4">
            <img
              src="images/mypic.jpg"
              alt="Karan"
              className="w-36 h-36 border-2 border-gray-300"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">YASH KHATRI</h2>
            <p className="mt-2">Student All Route AC/Non AC</p>
            <p className="mt-2">
              Bus Pass No.{" "}
              <span className="text-green-500 font-bold font-sans">
                7502082369418
              </span>
            </p>
            <p className="font-bold mt-2 text-red-500 font-sans">
              Valid from <span className="font-bold">18/06/2024</span> to{" "}
              <span className="font-bold">17/11/2024</span>
            </p>
          </div>
        </main>
        <footer className="flex justify-between mt-6 z-20 relative">
          <div className="flex flex-col items-center">
            <img
              src="images/signature.png"
              alt="Authorized Signatory"
              className="w-24"
            />
            <p>Authorized Signature</p>
          </div>
          <div>
            <img src="images/qrcode.png" alt="QR Code" className="w-24 h-24" />
          </div>
        </footer>
      </div>
      <div className="text-center mt-6 text-sm">
        <p>Copyright © - Delhi e-Governance Society 2024</p>
      </div>
    </div>
  );
};

export default BusPass;
