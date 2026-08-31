import React from "react";
import styles from "./AdminFeatures.module.css";

const PaginatedFeatureList = ({
  featureId,
  items,
  benefit,
  featurePages,
  setFeaturePages,
}) => {
  const ITEMS_PER_PAGE = 5;
  const currentPage = featurePages[featureId] || 0;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (direction) => {
    setFeaturePages((prev) => {
      const current = prev[featureId] || 0;
      let nextPage = current;

      if (direction === "next") {
        nextPage = Math.min(current + 1, totalPages - 1);
      }

      if (direction === "back") {
        nextPage = Math.max(current - 1, 0);
      }

      return {
        ...prev,
        [featureId]: nextPage,
      };
    });
  };

  return (
    <>
      <ul className={styles.featureList}>
        {visibleItems.map((item, index) => (
          <li key={`${featureId}-${startIndex + index}`}>{item}</li>
        ))}

        {visibleItems.length < ITEMS_PER_PAGE &&
          Array.from({
            length: ITEMS_PER_PAGE - visibleItems.length,
          }).map((_, index) => (
            <li
              key={`placeholder-${featureId}-${index}`}
              className={styles.featureListPlaceholder}
              aria-hidden="true"
            >
              &nbsp;
            </li>
          ))}
      </ul>

      <div className={styles.featureBenefit}>
        <span>✅ Benefit: {benefit}</span>
      </div>

      {items.length > ITEMS_PER_PAGE && (
        <div className={styles.featurePagination}>
          <button
            type="button"
            className={styles.paginationButton}
            onClick={() => handlePageChange("back")}
            disabled={currentPage === 0}
            aria-label="Previous feature items"
          >
            ←
          </button>

          <span className={styles.paginationInfo}>
            {currentPage + 1} / {totalPages}
          </span>

          <button
            type="button"
            className={styles.paginationButton}
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages - 1}
            aria-label="Next feature items"
          >
            →
          </button>
        </div>
      )}
    </>
  );
};

export default PaginatedFeatureList;