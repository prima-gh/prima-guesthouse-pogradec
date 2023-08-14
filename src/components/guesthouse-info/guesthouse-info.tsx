import React from "react";
import { useTranslation } from "react-i18next";
import "./guesthouse-info.css";

const GuesthouseInfoComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="gh-info-container">
      <div className="gh-card pogradec">
        <div className="gh-card-content">
          <h3>{t('guesthouseInfo.locationTitle')}</h3>
          <p>
            {t('guesthouseInfo.locationDetails')}
          </p>
        </div>
      </div>

      <div className="gh-card drilon">
        <div className="gh-card-content">
          <h3>{t('guesthouseInfo.facilitiesTitle')}</h3>
          <p>
            {t('guesthouseInfo.facilitiesDetails')}
          </p>
        </div>
      </div>

      <div className="gh-card lake">
        <div className="gh-card-content">
          <h3>{t('guesthouseInfo.preferedVisitorsTitle')}</h3>
          <p>
            {t('guesthouseInfo.preferedVisitorsDetails')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuesthouseInfoComponent;
