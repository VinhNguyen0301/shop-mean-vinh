import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	title: String,
  name: String,
  price: Number,
  image: String,
  des: String,
  category_name: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
