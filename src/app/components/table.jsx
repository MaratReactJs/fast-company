import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ children }) => {
    // children = дети
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader />
                    <TableBody />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    children: PropTypes.array
};

export default Table;
