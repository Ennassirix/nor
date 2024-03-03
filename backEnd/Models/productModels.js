const pool = require('../Config/connect');
// get all products :
async function getAllProducts() {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        return rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
// get product by id :
async function getProductById(id) {
    try {
        const [row] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id])
        return row
    } catch (error) {
        console.error('Error fetching product by id:', error);
        throw error
    }
}
// get product by category : 
async function getProductByCategory(category) {
    try {
        const [rows] = await pool.query('SELECT *FROM products WHERE category = ?', [category])
        return rows
    } catch (error) {
        console.error('Error fetching product by category:', error);
        throw error
    }
}

// search for a product by name : 
async function searchByName(productName) {
    try {
        const [rows] = await pool.query('SELECT * FROM products WHERE product_name = ?', [productName])
        return rows
    } catch (error) {
        console.error('Error searching for a product by name:', error);
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCategory,
    searchByName
};
