import React from "react";

const Resume11 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5 bg-[#f4f4f4] text-[#333] leading-[1.5] overflow-x-hidden">
      {/* Header */}
      <div className="text-center pb-[10px] border-b-2 border-[#0a66c2] mb-[15px]">
        <h1 className="text-[26px] text-[#0a66c2] font-bold mb-[5px]">
          JOHN DOE
        </h1>
        <div className="text-[12px]">
          <p className="mb-[5px]">
            <a
              href="mailto:johndoe@email.com"
              className="text-[#0a66c2] no-underline hover:underline"
            >
              johndoe@email.com
            </a>
            <span className="mx-[8px]">|</span>
            +1 555-123-4567
            <span className="mx-[8px]">|</span>
            San Francisco, CA
          </p>
          <p>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a66c2] no-underline hover:underline"
            >
              linkedin.com/in/johndoe
            </a>
            <span className="mx-[8px]">|</span>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a66c2] no-underline hover:underline"
            >
              github.com/johndoe
            </a>
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          BLOCKCHAIN DEVELOPER
        </div>
        <p className="text-[12px]">
          Computer Science student specializing in blockchain technology with
          hands-on experience in Ethereum smart contracts and decentralized
          applications. Skilled in Solidity development, cryptographic security,
          and building transparent distributed systems.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          TECHNICAL SKILLS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
          <li>
            <strong>Blockchain:</strong> Ethereum, Solidity, Hyperledger,
            Web3.js, Hardhat
          </li>
          <li>
            <strong>Development:</strong> Smart Contracts, dApps, Cryptography,
            Token Standards
          </li>
          <li>
            <strong>Languages:</strong> JavaScript, Python, Rust, Go
          </li>
          <li>
            <strong>Tools:</strong> Truffle, Ganache, Metamask, IPFS
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          EXPERIENCE
        </div>
        <div className="mt-[10px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>Blockchain Developer Intern | XYZ Tech</span>
            <span>May 2023 – Aug 2023</span>
          </p>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>
              Developed and deployed 5+ Solidity smart contracts on Ethereum
              testnet with 100% test coverage
            </li>
            <li>
              Optimized gas costs by 25% through efficient contract design
              patterns
            </li>
            <li>
              Identified 3 critical security vulnerabilities during smart
              contract audits
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          PROJECTS
        </div>
        <div className="mt-[10px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>Supply Chain Transparency dApp</span>
            <span>Jan 2024 – Present</span>
          </p>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>
              Built on Hyperledger Fabric with Node.js backend for supply chain
              verification
            </li>
            <li>
              Implemented cryptographic product authentication reducing
              counterfeit incidents
            </li>
            <li>
              Designed immutable audit trail for complete supply chain
              visibility
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          EDUCATION
        </div>
        <div className="mt-[10px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>Stanford University</span>
            <span>Expected May 2025</span>
          </p>
          <p className="text-[12px] mt-[5px]">
            B.S. Computer Science | Specialization: Blockchain Technology | GPA:
            3.9/4.0
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          CERTIFICATIONS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          <li>
            <strong>Certified Blockchain Developer</strong> - Blockchain Council
            (2023)
          </li>
          <li>
            <strong>Ethereum Smart Contract Security</strong> - ConsenSys
            Academy (2022)
          </li>
        </ul>
      </div>

      {/* Technical Interests */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          TECHNICAL INTERESTS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          <li>Zero-knowledge proofs and cryptographic research</li>
          <li>Contributing to open-source blockchain projects</li>
          <li>Writing technical articles on decentralized systems</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume11;
