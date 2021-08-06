import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import PopupItem from '../PopupItem/PopupItem';
import {getRandomString} from '../../../utils';
import './SelectorItem.scss';

function SelectorItem({caption, placeholder, items, defaultItem, handleSelect, searchFieldName}) {
    let [inputValue, setInputValue] = useState('');
    let [popupItems, setPopupItems] = useState([]);
    let [selectedPopupIndex, setSelectedPopupIndex] = useState(null);

    let selectorRef = useRef(null);
    let popupRef = useRef(null);

    let inputId = getRandomString();

    function filterItems(filterValue = null) {
        if (!filterValue) return items;
        return items.filter(item => item[searchFieldName].toLowerCase().includes(filterValue.toLowerCase()))
    }

    // При изменении значения по-умолчанию, меняем значение в поле ввода
    useEffect(() => {
        setInputValue(defaultItem ? defaultItem[searchFieldName] : '');
    }, [defaultItem])

    // Отлавливаем клик за пределами селектора, убираем всплывающее окошко и вставляем в поле значение по-умолчанию
    useEffect(() => {
        let documentClickHandler = event => {
            if (selectorRef.current && !selectorRef.current.contains(event.target)) {
                setInputValue(defaultItem ? defaultItem[searchFieldName] : '');
                setPopupItems([]);
            }
        }
        document.addEventListener('mousedown', documentClickHandler)
        return () => document.removeEventListener('mousedown', documentClickHandler);
    }, [defaultItem])

    // При получении полем ввода фокуса, выводим выпадающий список
    let handleInputFocus = () => {
        let nextPopupItems = filterItems(inputValue);
        setSelectedPopupIndex(nextPopupItems.length > 0 ? 0 : null);
        setPopupItems(nextPopupItems);
    }

    // Обрабатываем наведение мышки на элемент всплывающего блока
    let popupMouseEnterHandler = index => setSelectedPopupIndex(index);

    // Обработчик ввода символов в поле поиска
    let handleChangeInputValue = event => {
        let nextInputValue = event.target.value;
        if (nextInputValue.length > 0 && nextInputValue.trim() === '') return;

        setInputValue(nextInputValue);
        setPopupItems(filterItems(nextInputValue));
    }

    // Обработчик нажатия кнопок в поле ввода
    let handleInputKeyDown = event => {
        if (popupItems.length === 0) return;
        if (event.keyCode === 13) {
            setInputValue(popupItems[selectedPopupIndex][searchFieldName]);
            setPopupItems([]);
            handleSelect(popupItems[selectedPopupIndex]);
        }
        if (event.keyCode === 40) {
            setSelectedPopupIndex(oldIndex => oldIndex === (popupItems.length - 1) ? oldIndex : oldIndex + 1);
            popupRef.current.scrollTop += 16;
        }
        if (event.keyCode === 38) {
            setSelectedPopupIndex(oldIndex => oldIndex === 0 ? oldIndex : oldIndex - 1);
            popupRef.current.scrollTop -= 16;
        }
    }

    // Обработчик нажатия на кнопку очистки
    let handleClearValue = () => {
        setInputValue('');
        setPopupItems([]);
        handleSelect(null);
    }

    // Обработчик клика по элементу выпадающего списка
    let popupItemClickHandler = item => {
        setPopupItems([]);
        setInputValue(item[searchFieldName]);
        handleSelect(item);
    }

    return (
        <div className="selector_item" ref={selectorRef}>
            <div className="selector_item__label_block">
                <label htmlFor={inputId}>{caption}</label>
            </div>
            <div className="selector_item__input_block">
                <input
                    id={inputId}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChangeInputValue}
                    onFocus={handleInputFocus}
                    onKeyDown={handleInputKeyDown}
                />
                <span className="selector_item__clear_button" onClick={handleClearValue}>&#215;</span>
                {popupItems.length > 0 &&
                <ul className="selector_item__popup__block" ref={popupRef}>
                    {popupItems.map(
                        (item, index) =>
                            <PopupItem
                                key={item.id}
                                item={item}
                                hasSelect={index === selectedPopupIndex}
                                handleClick={() => popupItemClickHandler(item)}
                                handleMouseEnter={() => popupMouseEnterHandler(index)}
                                fieldName={searchFieldName}
                            />
                    )}
                </ul>
                }
            </div>
        </div>
    )
}

SelectorItem.propTypes = {
    caption: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    defaultItem: PropTypes.object,
    handleSelect: PropTypes.func,
    searchFieldName: PropTypes.string
}

export default SelectorItem;