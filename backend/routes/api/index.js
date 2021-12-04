const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');

// **TEST ROUTE**

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// **TEST ROUTE**

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));

// **TEST ROUTE**

router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// **TEST ROUTE**


router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


module.exports = router;
