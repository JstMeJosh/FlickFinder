
# 🎬 FlickFinder

**FlickFinder** is a sleek and responsive movie discovery web app that lets users explore trending, popular, and searched movies — all powered by **The Movie Database (TMDB) API)**.  
Built with **React + Tailwind CSS**, it provides a modern and intuitive movie-browsing experience.

---


## 🚀 Features

- 🔍 **Search Movies** – Instantly find movies by title  
- 🎞️ **Popular Movies** – See trending movies on the homepage  
- 🧭 **Movie Details Page** – View posters, ratings, and overviews  
- ⚡ **Dynamic Routing** – Seamless navigation with React Router  
- 💬 **Responsive Design** – Optimized for mobile, tablet, and desktop  
---

## 🛠️ Tech Stack

| Technology | Description |
|-------------|-------------|
| ⚛️ **React.js** | Frontend framework |
| 🎨 **Tailwind CSS** | Utility-first CSS |
| 🧭 **React Router** | Client-side routing |
| 🌐 **Axios** | API request handling |
| 💎 **React Icons** | Vector icons |

---

## ⚙️ Installation & Setup

<details>
<summary>🧩 Step-by-step setup</summary>

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FlickFinder.git
   cd FlickFinder


2. **Install dependencies**

   ```bash
   npm install
  

3. **Set up your TMDB API key**

   * Create a `.env` file in the project root
   * Add:

     ```bash
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     ```

4. **Run the app**

   ```bash
   npm run dev
   ```

5. Open in your browser:

   ```
   http://localhost:5173
   ```

</details>

---

## 📁 Folder Structure

<details>
<summary>🧱 View Project Structure</summary>

```
FlickFinder/
│
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── NotFound.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── api/
│       └── tmdb.js
│
├── public/
│   └── screenshots/
│       ├── homepage.png
│       └── movie-details.png
│
├── .env
├── package.json
└── README.md
```

</details>

---

## 💡 How It Works

1. **Home Page** – Fetches popular movies using TMDB’s `/movie/popular` endpoint
2. **Search Feature** – Calls `/search/movie` dynamically as users type
3. **Movie Details** – Displays info like poster, rating, and overview
4. **Error Handling** – Custom 404 page for invalid routes

---

## 🌐 API Reference

Powered by [**The Movie Database (TMDB)**](https://developer.themoviedb.org/).
You’ll need your own API key.

Example:

```bash
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&page=1
```

---

## 👨‍💻 Author

**👤JstMeJosh**
💬 Let’s collaborate or build something amazing:
[💚 Chat on WhatsApp](https://wa.me/2349122656254?text=Hi%20Joshua!%20I%20saw%20your%20FlickFinder%20project%20and%20would%20love%20to%20collaborate.)

---

## 🩶 Acknowledgements

* [TMDB API](https://www.themoviedb.org/documentation/api)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)

---

## ⭐ Support

If you like **FlickFinder**, please consider giving it a ⭐ on [GitHub](https://github.com/yourusername/FlickFinder)!

