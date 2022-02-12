import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    // items = объект который нужно отобразить
    // valueProperty = передается id элементов объекта
    // contentProperty = передается name элементов объекта
    // selectedItem = выбранная профессия
    // чтобы итерерироваться (пробежаться) по объекту, нужно  его трансформировать в массив с помощью Object.keys()
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item._id}
                    className={
                        "list-group-item " +
                        (item === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};
// дефолтные пропсы на случай обработки объекта, если везде используются одинаковые данные (_id и name), а если нет то передаем как обчычно через пропсы
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
