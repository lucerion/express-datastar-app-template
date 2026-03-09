import { Router } from 'express';
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk/node';

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/greeting', (req, res) => {
  const name = req.body.name || 'Anonymous';

  ServerSentEventGenerator.stream(req, res, (stream) => {
    stream.patchElements(`<div id="greeting">Hello, ${name}</div>`);
  });
});

export default router;
