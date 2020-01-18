import { Router } from 'express';
import * as NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const newsRoutes = Router();

newsRoutes.get('/news/:page', (req, res) => {
  (async function() {
    const page = req.params.page;

    const newsResult = await newsapi.v2.everything({
      q: 'sports',
      from: process.env.DATE_FROM,
      to: process.env.DATE_TO,
      language: 'en',
      sortBy: 'relevancy',
      page: page
    });
    return res.json(newsResult)
  })();
});

export default newsRoutes;
