import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { visitorReviews } from "../../utils/constants";
import "./visitor-reviews.css";

const VisitorReviewsComponent = () => {
  const { t } = useTranslation();

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % visitorReviews.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextReview, 10000); // Auto play every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-review-section">
      <p className="section-title">{t('visitorReviews.sectionTitle')}</p>
      <Card className="review-card">
        <p>"{visitorReviews[currentReviewIndex].text}"</p>
        <p className="author-title"> - {visitorReviews[currentReviewIndex].author}</p>
      </Card>
    </div>
  );
};

export default VisitorReviewsComponent;
