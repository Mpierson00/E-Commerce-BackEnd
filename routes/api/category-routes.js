const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
try {
  const categories = await Category.findAll({ include: [{ model: Product }]});
  res.json(categories);
} catch (err) {
  res.status(500).json(error);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
try {
  const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
  if (!category) {
    return res.status(404).json({ message: 'No category found with this id.' });
  }
  res.json(category);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  // create a new category
try {
  const category = await Category.create(req.body);
  res.status(201).json(category);
} catch (err) {
  res.status(500).json(err);
}
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
const [affectedRows] = await Category.update(req.body, { where: { id: req.params.id} });
if (affectedRows === 0) {
  return res.status(400).json({ message: 'No category found with this id.' });
}
res.status(200).json({ message: 'Category updated successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
