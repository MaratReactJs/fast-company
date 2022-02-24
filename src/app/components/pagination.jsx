import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    // Pagination = Пагинация, нумерация страниц
    // onPageChange = при изменении страницы
    // currentPage = текущая страница
    // itemsCount = колличество элементов
    // pageSize = размер страницы
    // pageCount = колличество страниц
    // Math.ceil = округление в большую  сторону
    // _.range() = ряд() метод из библиотеки Lodash переводит число в массив, колличество элементов массива будет это число, например 3 поделит на [1,2,3]

    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link "
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    currentPage: PropTypes.number
};

export default Pagination;
