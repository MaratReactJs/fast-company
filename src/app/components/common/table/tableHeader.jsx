import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, currentSort, columns }) => {
    const handleSort = (item) => {
        if (currentSort.path === item) {
            onSort({
                ...currentSort,
                order: currentSort.order === "asc" ? "desc" : "asc",
                icon: currentSort.icon === "up" ? "down" : "up"
            });
        } else {
            onSort({ path: item, order: "asc", icon: "up" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        role={columns[column].path ? "button" : ""}
                        scope="col"
                    >
                        {columns[column].name}
                        {currentSort.path === columns[column].path && (
                            <i
                                className={`bi bi-caret-${currentSort.icon}-fill`}
                            ></i>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func,
    currentSort: PropTypes.object,
    columns: PropTypes.object
};

export default TableHeader;
