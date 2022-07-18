import Axios from "./AxiosInstance";
export function GetAllBooks() {
  return Axios.get("/books")
    .then((response) => response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export async function Search(query, maxResults) {
  try {
    const res = await Axios.post(`/search`, { query, maxResults });
    return res.data;
  } catch (error) {
    return [];
  }
}

export function UpdateBook(book) {
  return Axios.put(`/books/${book.id}`, { shelf: book.shelf });
}
