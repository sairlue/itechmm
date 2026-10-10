import mysql from "mysql2/promise";

let pool = null;

export function isDatabaseConfigured() {
  return Boolean(
    process.env.MYSQL_DATABASE &&
    process.env.MYSQL_USER &&
    (process.env.MYSQL_HOST || process.env.MYSQL_PORT)
  );
}

export function getDbPool() {
  if (!isDatabaseConfigured()) {
    return null;
  }

  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "localhost",
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }

  return pool;
}

export async function query(sql, params = []) {
  const dbPool = getDbPool();
  if (!dbPool) {
    console.warn("[MySQL] Database is not yet configured. Returning mock/empty result.");
    return { unconfigured: true, rows: [] };
  }

  try {
    const [rows, fields] = await dbPool.execute(sql, params);
    return { rows, fields };
  } catch (error) {
    console.error("[MySQL Error]", error.message);
    throw error;
  }
}
