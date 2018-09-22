import React from "react";
import classnames from 'classnames';

export default function Pagination({ totalPages, current, onPageChange }) {
  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        {Array.from(Array(totalPages).keys()).map((_, index) => {
          const pageNumber = index + 1;
          const isCurrent = current === index;

          let link;
          if (isCurrent) {
            link = (
              <React.Fragment>
                <span className="show-for-sr">You're on page</span>
                { pageNumber }
              </React.Fragment>
            );
          } else {
            link = (
              <a aria-label={ `Page ${pageNumber}` }>
                { pageNumber }
              </a>
            )
          }

          return (
            <li
              className={classnames({current: isCurrent})}
              key={index}
              data-page-index={ index }
              onClick={ onPageChange }
            >
              { link }
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
