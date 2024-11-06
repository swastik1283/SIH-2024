import React, { useState } from "react";
import "../Css/PDAForm.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { formSave } from "../redux/services/operations/PDAservices";

const PhilatelicForm = () => {
  const [PDAformData, setPDAFormData] = useState({
    customerType: "",
    applicantName: "",
    mailingAddress: "",
    pin: "",
    recipientName: "",
    recipientMailingAddress: "",
    recipientPin: "",
    subscriptionFrequency: "",
    orderform: {
      mintCommemorativeStamps: 0,
      mintCommemorativeStampsWithoutPersonalities: 0,
      mintDefinitiveStamps: 0,
      topMarginalBlock: 0,
      bottomMarginalBlock: 0,
      fullSheet: 0,
      firstDayCovers: 0,
      firstDayCoversWithoutPersonalities: 0,
      firstDayCoversBlank: 0,
      informationBrochure: 0,
      informationBrochureBlank: 0,
      annualStampPack: 0,
      specialAnnualStampPack: 0,
      childrenAnnualStampPack: 0,
      firstDayCoverPack: 0,
      postalStationery: 0,
      miniSheet: 0,
      otherItems: "",
    },
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPDAFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setPDAFormData((prev) => ({
      ...prev,
      orderform: {
        ...prev.orderform,
        [name]: value,
      },
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    formSave(PDAformData, dispatch);
  };

  return (
    <>
      <div className="pda-guidelines">
        <h4>Guidelines:</h4>
        <ol type="roman">
          <li>
            Minimum deposit amount for account opening is 200 rupees and maximum
            is 10000 rupees.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla ut pariatur vel perferendis doloribus corrupti
            nemo, aspernatur dolore eos eum odit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            earum itaque natus nulla sequi, laudantium laborum voluptas
            voluptat.
          </li>
        </ol>
      </div>
      <form className="philatelic-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
          Philatelic Deposit Account Application Form
        </h2>

        <div className="form-group">
          <label className="form-label">Type of Customer:</label>
          <select
            className="form-select"
            name="customerType"
            value={PDAformData.customerType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="private">Private / Individual</option>
            <option value="dealer">Stamp Dealer / Shop</option>
            <option value="company">Company</option>
          </select>
        </div>

        <h3 className="section-title">Personal Details</h3>
        <div className="form-group">
          <label className="form-label">Name of applicant:</label>
          <input
            className="form-input"
            type="text"
            name="applicantName"
            value={PDAformData.applicantName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Mailing Address:</label>
          <textarea
            className="form-textarea"
            name="mailingAddress"
            value={PDAformData.mailingAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Pin:</label>
          <input
            className="form-input"
            type="text"
            name="pin"
            value={PDAformData.pin}
            onChange={handleChange}
          />
        </div>

        <h3 className="section-title">Gift Subscription</h3>
        <div className="form-group">
          <label className="form-label">Name of recipient:</label>
          <input
            className="form-input"
            type="text"
            name="recipientName"
            value={PDAformData.recipientName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Recipient Mailing Address:</label>
          <textarea
            className="form-textarea"
            name="recipientMailingAddress"
            value={PDAformData.recipientMailingAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Recipient Pin:</label>
          <input
            className="form-input"
            type="text"
            name="recipientPin"
            value={PDAformData.recipientPin}
            onChange={handleChange}
          />
        </div>

        <h3 className="section-title">Subscription Frequency</h3>
        <div className="form-group">
          <label className="form-label">Choose Frequency:</label>
          <select
            className="form-select"
            name="subscriptionFrequency"
            value={PDAformData.subscriptionFrequency}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="once">Once a Year</option>
            <option value="twice">Twice a Year</option>
            <option value="four">Four Times a Year</option>
            <option value="six">Six Times a Year</option>
          </select>
        </div>

        <h3 className="section-title">Order Form</h3>
        {Object.keys(PDAformData.orderform).map((item, index) => (
          <div key={index} className="form-group order-item">
            <label className="form-label">
              {item.replace(/([A-Z])/g, " $1").trim()}:
            </label>
            <input
              className="form-input"
              type="text"
              name={item}
              value={PDAformData.orderform[item]}
              onChange={handleOrderChange}
            />
          </div>
        ))}

        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            className="form-input"
            type="date"
            name="date"
            value={PDAformData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default PhilatelicForm;
