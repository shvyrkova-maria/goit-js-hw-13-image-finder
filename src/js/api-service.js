export default class ApiService {
  constructor() {
    this.searchQuery = ' ';
    this.page = 1;
  }

  fetchImages() {
    const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '21768935-3fedd5c602a3f7ac5e18d4c15';

    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ hits }) => {
        this.addPage();
        return hits;
      });
  }

  addPage() {
    return (this.page += 1);
  }

  resetPage() {
    return (this.page = 1);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newSerchQuery) {
    return (this.searchQuery = newSerchQuery);
  }
}
