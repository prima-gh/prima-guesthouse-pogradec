import React from "react";
import "./guesthouse-info.css";
import { useTranslation } from "react-i18next";

const GuesthouseInfoComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="gh-info-container">
      <div className="gh-card">
        <div className="gh-card-content">
          <h4>{t('guesthouseInfo.locationTitle')}</h4>
          <p style={{ textAlign: "justify", fontSize: 12}}>
            {t('guesthouseInfo.locationDetails')}
          </p>
        </div>
      </div>

      <div className="gh-card">
        <div className="gh-card-content">
          <h4>{t('guesthouseInfo.facilitiesTitle')}</h4>
          <p style={{ textAlign: "justify", fontSize: 12 }}>
            {t('guesthouseInfo.facilitiesDetails')}
          </p>
        </div>
      </div>

      <div className="gh-card">
        <div className="gh-card-content">
          <h4>{t('guesthouseInfo.preferedVisitorsTitle')}</h4>
          <p style={{ textAlign: "justify", fontSize: 12 }}>
            {t('guesthouseInfo.preferedVisitorsDetails')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuesthouseInfoComponent;
