import express from 'express';

const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Express hello' });
});

router.post('/upfile',(req: express.Request, res: express.Response) => {
  console.log(req);
  res.send()
})

router.post('/soket',(request: express.Request,response: express.Response, next: express.NextFunction) => {
  console.log(request)
})


export default router;