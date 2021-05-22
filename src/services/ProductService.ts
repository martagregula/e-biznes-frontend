import axios from "axios";

class ProductService {
    async getProducts() {
        return axios.get(`http://localhost:9000/api/products`)
        .then(res => {
          return res.data;
        })
    }
  }
  
export default new ProductService();