import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
    // TableBody = тело таблицы
    // data = данные
    // columns = столбцы
    // renderContent = визуализировать содержимое
    // item = элемент
    // component = компонент, деталь, часть
    // _get()= получать()= метод из библиотеки lodash помогает увидеть вложенные данные _get(наш item, вложенный путь который нужно показать columns[column].path)

    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object
};

export default TableBody;
