import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, selectedSort, columns, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader
                        onSort={onSort}
                        selectedSort={selectedSort}
                        columns={columns}
                    />
                    <TableBody columns={columns} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    allUsers: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.array,
    children: PropTypes.array
};

export default Table;
