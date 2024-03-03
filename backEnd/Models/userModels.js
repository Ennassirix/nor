const pool = require('../Config/connect')

// get all users : 
async function getAlusers() {
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        return rows
    } catch (error) {
        console.error('error when get all users', error)
        throw error
    }
}
// get user by id :
async function getUserById(id) {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [id])
        return rows
    } catch (error) {
        console.error('error when getting user by id', error)
        throw error
    }
}
// get user by username :
async function getUserByUsername(username) {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
        return rows
    } catch (error) {
        console.error('error when getting user by username', error)
        throw error
    }
}

module.exports = {
    getAlusers,
    getUserByUsername,
    getUserById
}