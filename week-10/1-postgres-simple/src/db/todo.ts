import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const insertQuery = `INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4);`;
    const values = [userId, title, description, false];
    await client.query(insertQuery, values);
    const todo = await client.query("SELECT * FROM todos WHERE id = $1", [
      userId,
    ]);
    return todo.rows[0];
  } catch (err) {
    console.error("Error during the insertion:", err);
    return null;
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const updateQuery = `UPDATE todos SET done = $1 WHERE id = $2`;
    const values = [true, todoId];

    await client.query(updateQuery, values);

    const res = await client.query("SELECT * FROM todos WHERE id = $1", [
      todoId,
    ]);
    return res.rows[0];
  } catch (error) {}
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const query = "SELECT * FROM todos WHERE user_id = $1";
    const values = [userId];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      return result.rows;
    } else {
      return null;
    }
  } catch (error) {}
}
