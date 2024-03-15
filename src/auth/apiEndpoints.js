export const ApiEndpoints = {
  login: "/login",
  register: "/register",
  getFurnitureCategory: "/categories",
  uploadImage: "/upload",
  getFurnitureProducts: "/category/products/", // /products/categoryId
  getSingleFurnitureProduct: "/product/",
  getPremadeCategory: "/premade/categories",
  getPremadeProduct: "/premade/category/products/", // /category/products/premadeCategoryId
  getSinglePremadeProduct: "/premade/product/", // /productId
  curatedCollection: "/curated-collections",
  curatedCollectionById: "/curated-collections/choices/",
  choiceById: "/choice/",
  promoCode: "/promocode/check",
  userById: "/user/",
  createOrder: "/create-order",
  uploadImage: "/order/generate-image-url",
  getSingleOrder: "/order/",
  editProfile: "/user/update-profile/",
  updatePassword: "/user/update-password/",
  stlyes: "/style/all",
  styleById: "/style/",
  getAllBlogs: "/blogs",
  getSingleBlog: "/blog/",
  recentBlogs: "/recent-blogs",
  contactForm: "/contact-form",
};
