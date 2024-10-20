import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Sell } from "./Sell.js";
import { PaymentMethod } from "./Payment-Method.js";
import { SaleFunnel } from "./Sale-Funnel.js";
import { Address } from "./Address.js";

export const Order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    cost: {
      type: DataTypes.DECIMAL(6, 2),
      isNumeric: true,
      allowNull: false,
    },

    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sales_funnel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Define the relationship between Order and Sell
Order.hasMany(Sell, {
  foreignKey: "order_id",
  sourceKey: "id",
});

Sell.belongsTo(Order, {
  foreignKey: "order_id",
  sourceKey: "id",
});

// Define the relationship between Order and PaymentMethod
Order.belongsTo(PaymentMethod, {
  foreignKey: "payment_method_id",
  targetKey: "id",
});

PaymentMethod.hasMany(Order, {
  foreignKey: "payment_method_id",
  sourceKey: "id",
});

// Define the relationship between Order and SaleFunnel
Order.belongsTo(SaleFunnel, {
  foreignKey: "sales_funnel_id",
  targetKey: "id",
});

SaleFunnel.hasMany(Order, {
  foreignKey: "sales_funnel_id",
  sourceKey: "id",
});

// Define the relationship between Order and Address
Order.belongsTo(Address, {
  foreignKey: "address_id",
  targetKey: "id",
});

Address.hasMany(Order, {
  foreignKey: "address_id",
  sourceKey: "id",
});
