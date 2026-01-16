import API_CONFIG from "../config/api";

/**
 * Base API Service - Xử lý fetch chung
 */
class ApiService {
  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  // Tạo full URL
  getUrl(endpoint) {
    return `${this.baseUrl}${endpoint}`;
  }

  // Headers mặc định
  getHeaders(customHeaders = {}) {
    return {
      "Content-Type": "application/json",
      // Thêm token nếu có
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
      ...customHeaders,
    };
  }

  // GET request
  async get(endpoint, customHeaders = {}) {
    try {
      const response = await fetch(this.getUrl(endpoint), {
        method: "GET",
        headers: this.getHeaders(customHeaders),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData || "Đã xảy ra lỗi");
      }

      return await response.json();
    } catch (error) {
      console.error(`GET ${endpoint} failed:`, error);
      throw error;
    }
  }

  //POST request
  async post(endpoint, data, customHeaders = {}) {
    try {
      const response = await fetch(this.getUrl(endpoint), {
        method: "POST",
        headers: this.getHeaders(customHeaders),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData || "Đã xảy ra lỗi");
      }

      return await response.json();
    } catch (error) {
      console.error(`POST ${endpoint} failed:`, error);
      throw error;
    }
  }

  //PUT request
  async put(endpoint, data, customHeaders = {}) {
    try {
      const response = await fetch(this.getUrl(endpoint), {
        method: "PUT",
        headers: this.getHeaders(customHeaders),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData || "Đã xảy ra lỗi");
      }

      return await response.json();
    } catch (error) {
      console.error(`PUT ${endpoint} failed:`, error);
      throw error;
    }
  }

  //DELETE request
  async delete(endpoint, customHeaders = {}) {
    try {
      const response = await fetch(this.getUrl(endpoint), {
        method: "DELETE",
        headers: this.getHeaders(customHeaders),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData || "Đã xảy ra lỗi");
      }

      return await response.json();
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      throw error;
    }
  }
}

export default new ApiService();
