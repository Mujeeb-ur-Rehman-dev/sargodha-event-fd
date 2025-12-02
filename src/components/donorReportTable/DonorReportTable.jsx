import React from "react";
import "./DonorReportTable.css";

const donors = [
  {
    id: 1,
    name: "Muhammad Irfan",
    occupation: "IT Manager",
    donorType: "Corporate",
    contactNo: "03001234578",
    institute: "MTJ Foundation",
    donationFor: "0.4 Tesla Hitachi MRI (Refurb)",
    donationType: "Cash",
    method: "Cash",
    pledgeDate: { dd: 0, mm: 0, yyyy: 0 },
    amount: 5000000,
    remaining: 0,
  },
  {
    id: 2,
    name: "Amir Khan Burki",
    occupation: "Region Head",
    donorType: "Individual",
    contactNo: "03001234567",
    institute: "MTJ Foundation",
    donationFor: "CT Scan 64 Slices Toshiba (Japan) with Accessories",
    donationType: "Cash",
    method: "Online",
    pledgeDate: { dd: 0, mm: 0, yyyy: 0 },
    amount: 5000000,
    remaining: 0,
  },
  {
    id: 3,
    name: "Rizwan Zahid",
    occupation: "Coordinator CRD",
    donorType: "Individual",
    contactNo: "03001234567",
    institute: "MTJ Foundation",
    donationFor: "USG Machine Aplio-400 Platinum (Refurb)",
    donationType: "Pledge",
    method: "Pledge",
    pledgeDate: { dd: 25, mm: 12, yyyy: 2025 },
    amount: 2500000,
    remaining: 0,
  },
  {
    id: 4,
    name: "Rizwan Zahid",
    occupation: "Coordinator CRD",
    donorType: "Corporate",
    contactNo: "03001234567",
    institute: "MTJ Foundation",
    donationFor: "0.4 Tesla Hitachi MRI (Refurb)",
    donationType: "Cash",
    method: "Cheque",
    pledgeDate: { dd: 0, mm: 0, yyyy: 0 },
    amount: 500000,
    remaining: 0,
  },
];

const formatPledgeDate = ({ dd, mm, yyyy }) => {
  if (!dd && !mm && !yyyy) return "-";
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(dd)}/${pad(mm)}/${yyyy}`;
};

const formatAmount = (n) =>
  n ? n.toLocaleString("en-PK", { maximumFractionDigits: 0 }) : "0";

const DonorReportTable = () => {
  return (
    <section className="report-wrapper">
      <div className="report-card">
        <header className="report-header">
          <h2>Donor Detailed Report</h2>
          <p className="report-subtitle">
            Summary of pledges and donations by equipment
          </p>
        </header>

        <div className="report-table-container">
          <table className="report-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Donor Type</th>
                <th>Contact No.</th>
                <th>Institute / Organization</th>
                <th>Donation For (Equipment)</th>
                <th>Donation Type</th>
                <th>Method / Mode</th>
                <th>Pledge Date</th>
                <th>Amount</th>
                <th>Remaining</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.occupation}</td>
                  <td>{d.donorType}</td>
                  <td>{d.contactNo}</td>
                  <td>{d.institute}</td>
                  <td>{d.donationFor}</td>
                  <td>{d.donationType}</td>
                  <td>{d.method}</td>
                  <td>{formatPledgeDate(d.pledgeDate)}</td>
                  <td className="numeric">Rs {formatAmount(d.amount)}</td>
                  <td className="numeric">Rs {formatAmount(d.remaining)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DonorReportTable;