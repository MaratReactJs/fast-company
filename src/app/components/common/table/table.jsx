import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, currentSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    {" "}
                    <TableHeader {...{ onSort, currentSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.array,
    onSort: PropTypes.func,
    currentSort: PropTypes.object,
    columns: PropTypes.object,
    children: PropTypes.array
};

export default Table;
