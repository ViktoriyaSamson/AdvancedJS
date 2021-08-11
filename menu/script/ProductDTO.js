'use strict';

/**
 *  хранит в себе информацию о каком-то конкретном товаре.
 * @see https://ru.wikipedia.org/wiki/DTO
 */
class ProductDTO {
    /**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} img название файла с картинкой, например 0.jpg
     * @param {string} name имя товара
     * @param {string} description описание товара
     * @param {number} price цена товара
     */
    constructor(id, img, name, description, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}