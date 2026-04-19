import { pool } from '../config/db.js';

export const ReportModel = {
  async getTopBooks() {
    const query = `
      SELECT b.id, b.title, b.isbn, COUNT(l.id)::int as total_borrowed
      FROM books b
      JOIN loans l ON b.id = l.book_id
      GROUP BY b.id
      ORDER BY total_borrowed DESC
      LIMIT 2
    `;
    const result = await pool.query(query);
    return result.rows;
  }
};
