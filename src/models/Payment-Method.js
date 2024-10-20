import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const PaymentMethod = sequelize.define(
  "payment_methods",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
