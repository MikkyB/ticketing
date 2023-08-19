import exppress from 'express';
import { currentUser } from '@m_x_tickets/common';

const router = exppress.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
