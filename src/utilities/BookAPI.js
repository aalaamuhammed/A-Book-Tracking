import Axios from "./AxiosInstance";
export function GetAllBooks() {
  return Axios.get("/books")
    .then((response) => response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export function Search(query, maxResults) {
  return Axios.post(`/search`, { query, maxResults }).then((res) => res.data);
}
