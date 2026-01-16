const API_CONFIG = {
  BASE_URL: "https://6960e3ebe7aa517cb7976657.mockapi.io/api/v1",
  TIMEOUT: 10000,

  ENDPOINTS: {
    //Product
    PRODUCT: "/product",
    PRODUCT_BY_ID: (id) => `/product/${id}`,
  },
};

export default API_CONFIG;
