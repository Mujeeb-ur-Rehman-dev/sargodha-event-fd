import React from 'react'
import logo from '../../assets/images/only_logo.png';
import "./DonationForm.css";
function DonationForm() {
  return (
    <div className="wrapper">
    <div className="form-container">

    <div className="form-header">
      <h2>Donation for Aas Lab (Collection Center) Sargodha</h2>
      <img src={logo} alt="Logo" className="header-logo" />
    </div>

    <form className="donation-form">

      <div className="form-body">

         {/* LEFT SIDE  */}
        <div className="left-column">

          <label>Name</label>
          <input type="text" />

          <label>Occupation</label>
          <input type="text" />

          <label>Donor Type</label>
          {/* <input type="text" /> */}
          <select id="donor" name="donor-type" className="input">
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Association">Association</option>
                    <option value="Union">Union</option>
                </select>

          <label>Contact No.</label>
          <input type="text" />

          <label>Institute\Organization</label>
          <input type="text" />

          {/* <button className="submit-btn">Submit</button> */}
        </div>

         {/* RIGHT SIDE */}
        <div className="right-column">

          <div className="right-grid">

            <label>Donation For (Equipment)</label>
            {/* <input type="text" /> */}
            <select id="donation" name="donation-type" className="input">
                    <option value="USG">USG Machine Aplio-400 platinum (Refurb)</option>
                    <option value="X-Ray">X-Ray Machine KXO-50R(Toshiba(Japan) 630MA)</option>
                    <option value="ECG">ECG 3 channel</option>
                    <option value="OPG">OPG Verbview(Japan)</option>
                    <option value="CT Scan">CT Scan 64 slices Toshiba(Japan) with Accessores</option>
                    <option value="MRI">0.4 Tesla Hitachi MRI (Refurb)</option>
                    <option value="ECHO">ECHO Machine-Paolus Plus(Japan)</option>
                </select>

            <label>Donation Type</label>
            {/* <input type="text" /> */}
            <select id="donation" name="donation-type" className="input">
                    <option value="Cash">Cash</option>
                    <option value="Pledge">Pledge</option>
                </select>

            <label>Method/ Mode</label>
            {/* <input type="text" /> */}
            <select id="donation" name="donation-type" className="input">
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Pay Order">Pay Order</option>
                    <option value="Online">Online</option>
                    <option value="Pledge">Pledge</option>
                </select>
{/* 
            <label>Pledge Date (if applicable)</label>
            <div className="date-box">
              <input type="text" placeholder="dd" />
              <input type="text" placeholder="mm/yyyy" />
            </div> */}
            <label>Pledge Date (dd/mm/yyyy)</label>
            <input type="date" className="input" />
            <label>Amount</label>
            <input type="text" />

            <label>Remarks</label>
            <textarea></textarea>
            <button className="submit-btn">Submit</button>
          </div>

        </div>

      </div>
    </form>
  </div>
  </div>
  )
}

export default DonationForm