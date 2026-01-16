import apiService from "./api";
import API_CONFIG from "../config/api";

const { ENDPOINTS } = API_CONFIG;

const productService = {
  async getAll() {
    const result = await apiService.get(ENDPOINTS.PRODUCT);
    return result; // MockAPI trả về mảng trực tiếp
  },
  async getById(id) {
    const result = await apiService.get(ENDPOINTS.PRODUCT_BY_ID(id));
    return result; // MockAPI trả về object trực tiếp
  },
};

export default productService;
