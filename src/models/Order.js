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
      type: DataTypes.NUMBER,
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

Order.hasOne(PaymentMethod, {
  foreignKey: "id",
  sourceKey: "payment_method_id",
});

PaymentMethod.belongsTo(Order, {
  foreignKey: "id",
  sourceKey: "payment_method_id",
});

// Define the relationship between Order and SaleFunnel

Order.hasOne(SaleFunnel, {
  foreignKey: "id",
  sourceKey: "sales_funnel_id",
});

SaleFunnel.belongsTo(Order, {
  foreignKey: "id",
  sourceKey: "sales_funnel_id",
});

// Define the relationship between Order and Address

Order.hasOne(Address, {
  foreignKey: "id",
  sourceKey: "address_id",
});

Address.belongsTo(Order, {
  foreignKey: "id",
  sourceKey: "address_id",
});
