const Product = require('../Models/ProductModel')

exports.createProduct = (req, res, next) => {
  Product.create({
    name: req.body.name,
    quantity: req.body.quantity,
    value: req.body.value,
    validity: req.body.validity
  }, (err, product) => {
    if (err)
      return res.status(500).json({message: 'Error creating product', error: err})

    if (!product || Object.keys(product).length === 0)
      return res.status(404).send('Product not found!')

    return res.status(200).json({
      message: 'Product created successfully!',
      product: product
    })
  })
}

exports.getAllProduct = (req, res, next) => {
  Product.find().exec((err, products) => {
    if (err)
      return res.status(500).json({error: err})

    if (!products || products.length === 0)
      return res.status(404).send('Product not found!')

    return res.status(200).json({product: products})
  })
}

exports.getOneProduct = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err)
      return res.status(500).json({message: 'Error fetching product', error: err})

    if (!product || Object.keys(product).length === 0)
      return res.status(404).send('Product not found!')

    return res.status(200).json({product: products})
  })
}

exports.updateProduct = (req,res, next) => {
  Product.findById({ _id: req.params.id }, (err, product) => {
    if (err)
        return handleError(err)

    if (!product || Object.keys(product).length === 0)
      return res.status(404).send('Product not found!')

    product.set({
      name: req.body.name,
      quantity: req.body.quantity,
      value: req.body.value,
      validity: req.body.validity
    })

    product.save((err, productUpdated) => {
      if (err)
        return handleError(err)

      return res.status(200).json({
        message: 'Product updated successfully!',
        product: productUpdated
      })
    })
  })
}

exports.deleteProduct = (req, res, next) => {
  Product.findById(req.params.id, (err, productFind) => {
    if (err)
      return res.status(404).json({message: 'Error', error: err})

    if (!productFind || Object.keys(productFind).length === 0)
      return res.status(404).send('Product not found!')

    Product.remove({_id: req.params.id}, (err) => {
      if (err)
        return res.status(500).json({message: 'Error in delete product', error: err})

      return res.status(200).json({message: 'Product deleted successfully!'})
    })
  })
}