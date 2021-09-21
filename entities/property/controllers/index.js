const router = require('express').Router();
const PropertyService = require('../services/PropertyService');
const {
  jwtMiddleware,
  checkRole,
  checkDataBelongsToUser,
} = require('../../../middlewares/auth-middlewares');
const {upload} = require('../../../middlewares/multer');

router.use(jwtMiddleware);

// TODO: Validar o body
router.post('/', upload(), async (req, res, next) => {
  try {
    const property = req.body;
    const images = req.files;
    await PropertyService.create(property, images);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.get('/all', async (req, res, next) => {
  try {
    const props = await PropertyService.getAll();
    res.status(200).json(props);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const ID = req.params.id;
    const property = await PropertyService.getByID(ID);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
