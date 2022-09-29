import knex from "knex";
import config from "../src/config.js";

//------------------------------------------

try {
  const mariaDbClient = knex(config.mariaDb);
  await mariaDbClient.schema.dropTableIfExists("productos");

  await mariaDbClient.schema
    .createTable("productos", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.double("price");
      table.string("thumbnail");
    })
    .then(() => {
      console.log("tabla mariaDB creada");
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      mariaDbClient.destroy();
      console.log("conexion finalizada");
    });

  console.log("proceso de creacion de tabla productos en mariaDb finalizado con éxito");
} catch (error) {
  console.log("error al crear tabla productos en mariaDb");
  console.log(error);
}

//------------------------------------------

try {
  const sqliteClient = knex(config.sqlite3);
  await sqliteClient.schema.dropTableIfExists("mensajes");

  await sqliteClient.schema
    .createTable("mensajes", (table) => {
      table.increments("id").primary();
      table.dateTime("dateTime");
      table.string("email");
      table.string("text");
    })
    .then(() => {
      console.log("tabla sqlite3 creada");
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      sqliteClient.destroy();
      console.log("conexion finalizada");
    });

  console.log("proceso de creacion de tabla productos en mariaDb finalizado con éxito");
} catch (error) {
  console.log("error al crear tabla mensajes en sqlite3");
}
