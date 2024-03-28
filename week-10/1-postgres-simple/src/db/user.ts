import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser( 
  username: string,
  password: string,
  name: string
) {
  try {
    const insertQuery =
      "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
    const values = [username, password, name];
    const res = await client.query(insertQuery, values);
    // console.log("Insertion success:", res); // Output insertion result
    return res;
  } catch (err) {
    console.error("Error during the insertion:", err);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [userId];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      //   console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      //   console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    // console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  }
}
