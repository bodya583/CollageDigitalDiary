import { DataTypes } from "sequelize";
import { sql } from "../../config/sql.js";

export const User = sql.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});