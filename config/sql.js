import { Sequelize } from "sequelize";

export const sql = new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_USER,
    process.env.SQL_PASSWORD,
    {
        host: process.env.SQL_HOST,
        dialect: "mysql",
    }
);

export async function connectSQL() {
    try {
        await sql.authenticate();
        console.log("MySQL connected");
    } catch (e) {
        console.error("SQL error:", e);
    }
}
