
# Books Catalogue using Google Books API

This is a **Books Catalogue** application that allows users to search for books using the [Google Books API](https://developers.google.com/books). The app enables users to query books, view detailed information about them, and save their favorite books for later reference.

## Features

- **Search Books**: Users can search for books by title, author, or any keyword.
- **View Book Details**: Display detailed information such as title, author, published date, description, and more.
- **Add to Favorites**: Users can save books to their favorites list for easy access later.
- **Pagination**: Browse through multiple pages of results.
- **Responsive UI**: Fully responsive design that works on various devices.

## Demo


## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Google Books API**: Used for fetching book data.
- **React Context API**: For managing application state.
- **Axios**: For making API requests.
- **SCSS**: For custom styling and responsive design.

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajeshkrishnait/Books-Catalogue-GoogleBooks-API.git
   cd Books-Catalogue-GoogleBooks-API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   You'll need to create an `.env` file in the root of the project and include your Google Books API key:
   ```env
   REACT_APP_GOOGLE_BOOKS_API_KEY=your-google-books-api-key
   ```

   You can obtain an API key by visiting the [Google Cloud Console](https://console.cloud.google.com/).

4. **Run the app**:
   ```bash
   npm start
   ```

   This will start the app in development mode and open it in your browser at `http://localhost:3000`.

### Building for Production

To build the app for production, run the following command:

```bash
npm run build
```

This will generate optimized static files in the `build` folder.

### Deployment

You can deploy the production build to any static hosting service, including GitHub Pages. To deploy to GitHub Pages:

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://<your-username>.github.io/<repo-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy the app:
   ```bash
   npm run deploy
   ```

Your app will be available at `https://<your-username>.github.io/<repo-name>`.

## Usage

- **Search for Books**: Type in any keyword (title, author, genre, etc.) in the search bar and hit enter. The app will display relevant results from the Google Books API.
- **View Book Details**: Click on any book in the results to see more detailed information about it.
- **Add to Favorites**: From the book details page, click "Add to Favorites" to save the book to your favorites list.
- **View Favorites**: Access your saved books in the "Favorites" section.

## Folder Structure

- **src**: Contains all the source code of the project.
  - **components**: Reusable React components like the search bar, book card, and pagination.
  - **context**: Context API setup for managing global state.
  - **services**: Axios setup and API interaction logic.
  - **styles**: SCSS files for styling the application.

## API Reference

This project makes use of the [Google Books API](https://developers.google.com/books) to search for books. The API returns data such as:

- Title
- Author
- Published Date
- Description
- Book cover images
- Page count, categories, etc.

## Contributing

Contributions are welcome! If you have suggestions, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Google Books API](https://developers.google.com/books)
- [React](https://reactjs.org/)


