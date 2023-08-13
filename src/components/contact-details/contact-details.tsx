import React from "react";
import Insta from "../../assets/icons/insta.png";
import Phone from "../../assets/icons/phone.png";
import Wap from "../../assets/icons/wap.png";
import Maps from "../../assets/icons/maps.png";
import Booking from "../../assets/icons/booking.png";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import "./contact-details.css";

const ContactDetailsComponent = () => {
  const { t } = useTranslation();

  const navigateToInsta = () => {
    window.open("https://instagram.com/prima.guesthouse.pg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D", "_blank");
  };

  const navigateToMaps = () => {
    window.open("https://goo.gl/maps/EwEG13TEQwcLRFwH7", "_blank");
  };

  const navigateToBooking = () => {
    window.open("https://www.booking.com/Share-8pO95x", "_blank");
  }

  return (
    <div className="footer-container">
      <div className="contact-section">
        <div style={{ cursor: "pointer", marginRight: 15 }}>
          <img src={Phone} height={28} width={28} alt="Phone" />
          <p style={{ marginTop: 5 }}>+355 69 704 6181</p>
        </div>
        <div style={{ cursor: "pointer", marginRight: 15 }}>
          <img src={Wap} height={28} width={28} alt="Wap" />
          <p style={{ marginTop: 5 }}>+355 68 565 0070</p>
        </div>

        <div onClick={navigateToBooking} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitBooking')} placement="right" color="darkgreen">
            <img src={Booking} height={32} width={35} alt="Booking" />
            <p style={{ marginTop: 2 }}>Prima Guesthouse</p>
          </Tooltip>
        </div>

        <div onClick={navigateToMaps} style={{ cursor: "pointer", marginRight: 15 }}>
          <Tooltip title={t('contactDetails.visitMaps')} placement="right" color="darkgreen">
            <img src={Maps} height={28} width={28} alt="Maps" />
            <p style={{ marginTop: 5 }}>Prima Guesthouse</p>
          </Tooltip>
        </div>
        
        <div onClick={navigateToInsta} style={{ cursor: "pointer" }}>
          <Tooltip title={t('contactDetails.visitInsta')} placement="right" color="darkgreen">
            <img src={Insta} height={28} width={28} alt="Insta" />
            <p style={{ marginTop: 5 }}>prima.guesthouse.pg</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
