const pool = require('../Config/connect')

// get all gategorys : 
async function getAllCategorys(){
    try {
        const [rows] = await pool.query('SELECT * FROM product_category')
        return rows
    } catch (error) {
        console.error('error when getting all category',error)
        throw error
    }
}
// get singel caregory :
async function getCategoryById(id){
    try {
        const [rows] = await pool.query('SELECT * FROM product_category WHERE category_id = ?',[id])
        return rows
    } catch (error) {
        console.error('error when geting a category by id', error)
        throw error
    }
}

module.exports = {
    getAllCategorys,
    getCategoryById
}