import exppress from 'express';

const router = exppress.Router();

router.post('/api/users/signout', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signoutRouter };
