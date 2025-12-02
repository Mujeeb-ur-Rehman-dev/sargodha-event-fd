import { useState } from 'react'
import DonationSummaryChart from '../donationSummaryChart/DonationSummaryChart';
import DonationTypePieChart from '../donationTypePieChart/DonationTypePieChart';
import DonorReportTable from '../donorReportTable/DonorReportTable';  
import DetailedDonationSummaryChart from '../detailedDonationSummaryChart/DetailedDonationSummaryChart';
import logo from '../../assets/images/only_logo.png';
import "./DonationForm.css";
import axios from 'axios';

import { useEffect } from 'react';
function DonationForm() {
  const [form, setForm] = useState({
    name: '',
    occupation: '',
    donorType: 'Individual',
    contactNo: '',
    organization: '',
    donationFor: 'USG Machine Aplio-400 platinum (Refurb)',
    donationType: 'Cash',
    method: 'Cash',
    pledgeDate: '',
    amount: '',
    remarks: ''
  });
const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const formatDateToDDMMYYYY = (isoDate) => {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-');
    return `${d}-${m}-${y}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiPayload = {
      donationFor: form.donationFor,
      donationType: form.donationType,
      methodMode: form.method,
      amount: Number(form.amount) || 0,
      pledgeDate: formatDateToDDMMYYYY(form.pledgeDate),
      remarks: form.remarks,
      donor: {
        name: form.name,
        contactNo: form.contactNo,
        occupation: form.occupation,
        donorType: form.donorType,
        instituteOrganization: form.organization
      }
    };

    console.log('apiPayload:', apiPayload);
    // If you prefer a JSON string: console.log(JSON.stringify(apiPayload));
    const url = 'http://localhost:3000/donations'; // Replace with your actual API endpoint 

axios.post(url, apiPayload)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  };
// fetfch data from backend
  useEffect(() => {
    axios.get('http://localhost:3000/donations')
      .then(response => {
        console.log('Fetched data for /donations:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
axios.get('http://localhost:3000/donations/machines/summary')
      .then(response => {
        console.log('Fetched data for /donations/machines/summary:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      
  }, []);
  return (
     <>
    <div className="wrapper">
      <div className="form-container">

        <div className="form-header">
          <h2>Donation for Aas Lab (Collection Center) Sargodha</h2>
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

        <form className="donation-form" onSubmit={handleSubmit}>

          <div className="form-body">

            {/* LEFT SIDE  */}
            <div className="left-column">

              <label>Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} />

              <label>Occupation</label>
              <input type="text" name="occupation" value={form.occupation} onChange={handleChange} />

              <label>Donor Type</label>
              <select id="donor" name="donorType" className="input" value={form.donorType} onChange={handleChange}>
                <option value="Individual">Individual</option>
                <option value="Corporate">Corporate</option>
                <option value="Association">Association</option>
                <option value="Union">Union</option>
              </select>

              <label>Contact No.</label>
              <input type="text" name="contactNo" value={form.contactNo} onChange={handleChange} />

              <label>Institute\Organization</label>
              <input type="text" name="organization" value={form.organization} onChange={handleChange} />

            </div>

            {/* RIGHT SIDE */}
            <div className="right-column">

              <div className="right-grid">

                <label>Donation For (Equipment)</label>
                <select id="donation" name="donationFor" className="input" value={form.donationFor} onChange={handleChange}>
                  <option value="USG Machine Aplio-400 platinum (Refurb)">USG Machine Aplio-400 platinum (Refurb)</option>
                  <option value="X-Ray Machine KXO-50R(Toshiba(Japan) 630MA)">X-Ray Machine KXO-50R(Toshiba(Japan) 630MA)</option>
                  <option value="ECG 3 channel">ECG 3 channel</option>
                  <option value="OPG Verbview(Japan)">OPG Verbview(Japan)</option>
                  <option value="CT Scan 64 slices Toshiba(Japan) with Accessores">CT Scan 64 slices Toshiba(Japan) with Accessores</option>
                  <option value="0.4 Tesla Hitachi MRI (Refurb)">0.4 Tesla Hitachi MRI (Refurb)</option>
                  <option value="ECHO Machine-Paolus Plus(Japan)">ECHO Machine-Paolus Plus(Japan)</option>
                </select>

                <label>Donation Type</label>
                <select id="donationType" name="donationType" className="input" value={form.donationType} onChange={handleChange}>
                  <option value="Cash">Cash</option>
                  <option value="Pledge">Pledge</option>
                </select>

                <label>Method/ Mode</label>
                <select id="method" name="method" className="input" value={form.method} onChange={handleChange}>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Pay Order">Pay Order</option>
                  <option value="Online">Online</option>
                  <option value="Pledge">Pledge</option>
                </select>

                <label>Pledge Date (dd/mm/yyyy)</label>
                <input type="date" name="pledgeDate" className="input" value={form.pledgeDate} onChange={handleChange} />

                <label>Amount</label>
                <input type="text" name="amount" value={form.amount} onChange={handleChange} />

                <label>Remarks</label>
                <textarea name="remarks" value={form.remarks} onChange={handleChange}></textarea>

                <button className="submit-btn" type="submit">Submit</button>
              </div>

            </div>

          </div>
        </form>
      </div>
      </div>
       <DonationSummaryChart/>
      <DetailedDonationSummaryChart />
      <DonorReportTable/>
      <DonationTypePieChart/>
     </>
      
  )
}

export default DonationForm
// ...existing code...