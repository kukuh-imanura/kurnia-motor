import axios from "axios";

export const getUsersAdmin = async (keyword: string, page: number, limit: number) => {
  const response = await axios.get(`https://bengkel-api-ruby.vercel.app/api/admin/allAdmin?search_query=${keyword}&page=${page}&limit=${limit}`);
  return {
    result: response.data.result,
    page: response.data.page,
    totalPage: response.data.totalPage,
    totalRows: response.data.totalRows,
  };
};

export const getUsersCustomer = async (keyword: string, page: number, limit: number) => {
  const response = await axios.get(`https://bengkel-api-ruby.vercel.app/api/customer/allCustomer?search_query=${keyword}&page=${page}&limit=${limit}`);
  return {
    result: response.data.result,
    page: response.data.page,
    totalPage: response.data.totalPage,
    totalRows: response.data.totalRows,
  };
};
