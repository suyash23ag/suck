# 🚀 LeetMetric

LeetMetric is a lightweight web application that allows users to track their **LeetCode problem-solving progress** by simply entering their username. It fetches real-time statistics and displays them using visually appealing circular progress indicators and summary stat cards.

The goal of this project is to combine clean UI design with dynamic data handling using pure frontend technologies.

---

## 📌 Features

- 🔎 Search any valid LeetCode username  
- 📊 Difficulty-wise progress tracking (Easy / Medium / Hard)  
- 🎯 Circular progress indicators using CSS conic gradients  
- 📈 Summary statistics including:
  - Total Solved
  - Total Questions
  - Global Ranking
  - Acceptance Rate
- ⚡ Real-time API data fetching with async/await  
- 🧠 Username validation before API request  
- 🎨 Minimal dark-themed responsive UI  

---

## 🛠️ Tech Stack

- **HTML5** – Page structure  
- **CSS3** – Styling, layout, circular progress design  
- **Vanilla JavaScript** – DOM manipulation and API handling  
- **Vercel Serverless Functions** – Backend API proxy
- **LeetCode GraphQL API** – Data source  

Serverless backend deployed on Vercel to bypass CORS restrictions.

---

## 📂 Project Structure

LeetMetric/

├── index.html     
├── style.css        
├── script.js     
└── README.md      

---

## ⚙️ How It Works

1. User enters a LeetCode username.
2. Username is validated using a regex pattern:

   ^[a-zA-Z0-9_-]{1,15}$

3. The app sends a request to the LeetCode Stats API.
4. Data is fetched asynchronously.
5. Difficulty percentages are calculated.
6. CSS custom properties (`--progress-degree`) dynamically update circular progress visuals.
7. Summary stats are rendered as responsive cards.

---

## 🚀 Deployment

This app is deployed on Vercel with serverless functions.

### Deploy to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy - it works out of the box!

### Run Locally:

1. Clone the repository:
   ```
   git clone https://github.com/TanviTater/LeetMetric.git
   cd LeetMetric
   ```

2. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

3. Run locally:
   ```
   vercel dev
   ```

4. Open http://localhost:3000

---

## 🎯 Learning Objectives

This project demonstrates:

- DOM selection and manipulation  
- Event handling  
- Asynchronous JavaScript (async/await)  
- Fetch API integration  
- Dynamic UI updates  
- CSS custom properties  
- Conic gradient progress rings  
- Input validation  

---

## 🧩 Future Improvements

- Add loading animation instead of button text change  
- Add Enter key support for search  
- Improve mobile responsiveness  
- Display recent submissions  
- Add better error UI feedback  
- Deploy live version  

---

## 📄 License

This project is open-source and available under the MIT License.
