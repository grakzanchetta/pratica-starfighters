import { connection } from "../databases/database";

export async function find(){
    const result = await connection.query(
        `SELECT * FROM fighters`
    )
    return (result.rows)
}