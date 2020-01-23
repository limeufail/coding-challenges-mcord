import { Router } from 'express';
import * as NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const newsRoutes = Router();


newsRoutes.get('/sources', (req, res) => {
  (async function () {
    const { sources } = await newsapi.v2.sources({
      category: 'technology',
      country: 'us'
    });

    const mapSources = sources.map(src => { return { id: src.id, name: src.name }});
    return res.json(mapSources)
  })();
});

newsRoutes.get('/:page/:source', (req, res) => {
  (async function () {
    const page = req.params.page;
    const source = req.params.source;
    const queryOptions = {
      sources: source,
      from: process.env.DATE_FROM,
      to: process.env.DATE_TO,
      language: 'en',
      sortBy: 'relevancy',
      pageSize: 10,
      page: page
    }
    
    const newsResult = await newsapi.v2.everything(queryOptions);
    return res.json(newsResult)
  })();
});

export default newsRoutes;
