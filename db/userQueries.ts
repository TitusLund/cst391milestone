export const userQueries = {
    //selectAll: "SELECT id, username, password, email, user_type AS userType FROM cst391milestone.users;",
    //selectById: "SELECT id, username, password, email, user_type AS userType FROM cst391milestone.users WHERE id = ?;",
    selectByEmail: "SELECT id, username, password, email, user_type AS userType FROM cst391milestone.users WHERE email = ?;",
    selectByUsername: "SELECT id, username, password, email, user_type AS userType FROM cst391milestone.users WHERE username LIKE ?;",
    createUser: "INSERT INTO cst391milestone.users (username, password, email, user_type) VALUES (?,?,?,?)",
    updateUser: "UPDATE cst391milestone.users SET username = ?, password = ?, email = ?, user_type = ? WHERE id = ?",
    deleteUser: "DELETE FROM cst391milestone.users WHERE id = ?"
}