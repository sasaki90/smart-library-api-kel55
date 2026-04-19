import { ReportModel } from '../models/reportModel.js';

export const ReportController = {
  async getTopBooks(req, res) {
    try {
      const books = await ReportModel.getTopBooks();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
