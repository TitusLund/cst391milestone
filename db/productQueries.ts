export const productQueries = {
    selectAll: "SELECT products.id, stud_length AS studLength, stud_width AS studWidth, color, brick_type.name as type, quantity, price FROM cst391milestone.products JOIN brick_type ON type_id = brick_type.id;",
    selectById: "SELECT products.id, stud_length AS studLength, stud_width AS studWidth, color, brick_type.name as type, quantity, price FROM cst391milestone.products JOIN brick_type ON type_id = brick_type.id WHERE products.id = ?;",
    selectAllWithFilters: "SELECT products.id, stud_length  AS studLength, stud_width AS studWidth, color, brick_type.name as type, quantity, price FROM products JOIN brick_type ON products.type_id = brick_type.id WHERE stud_length LIKE ? AND stud_width LIKE ? AND color LIKE ? AND brick_type.name LIKE ?;",
    createProduct: "INSERT INTO products (stud_length, stud_width, color, type_id, quantity, price) VALUES (?, ?, ?, (SELECT brick_type.id FROM brick_type WHERE brick_type.name = ?), ?, ?);",
    updateProduct: "UPDATE products SET stud_length = ?, stud_width = ?, color = ?, type_id=(SELECT brick_type.id FROM brick_type WHERE brick_type.name = ?), quantity = ?, price = ? WHERE products.id = ?;",
    deleteProduct: "DELETE FROM products WHERE products.id = ?"
}