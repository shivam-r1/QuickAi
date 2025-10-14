# 🚀 QuickAi — Your All-in-One AI Creation Platform


QuickAi is a **modern AI-powered productivity platform** that combines multiple intelligent tools under one roof — helping users **generate content, design visuals, and manage creative workflows** seamlessly.

🔗 **Live Website:** [https://quick-ai-tech.vercel.app/](https://quick-ai-tech.vercel.app/)  
💻 **GitHub Repository:** [https://github.com/shivam-r1/QuickAi](https://github.com/shivam-r1/QuickAi)

---

## ✨ Features

- 📝 **AI Article & Blog Title Generator** — Generate SEO-optimized blog titles and long-form articles using Gemini LLM.  
- 🧠 **Resume Review** — Get AI-driven resume feedback and suggestions.  
- 🖼️ **AI Image Generator** — Create unique images using ClipDrop API.  
- 🧹 **Background & Object Removal** — Automatically remove image backgrounds and unwanted objects.  
- 👥 **Community Hub** — View your creations, manage your work, and interact with others.  
- 🔐 **Authentication with Clerk** — Secure and seamless user sign-up/login.  
- ⚡ **Fast & Modern UI** — Built using React, Tailwind CSS, and responsive design principles.

---

## 🧩 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Tailwind CSS, Clerk Auth |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (via Neon) |
| **AI & APIs** | Gemini LLM, ClipDrop API, Cloudinary |
| **Hosting** | Vercel (Client), vercel/Neon (Server) |

---

## 🗂️ Folder Structure

```
QuickAi/
├── client/ # Frontend (React + Vite)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── server/ # Backend (Express + Node)
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── utils/
│ ├── .env
│ └── server.js
├── README.md
└── package.json
```


---

## ⚙️ Environment Variables

### 🌐 Client (Vite)

```

VITE_BASE_URL=<your_server_url>
VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>

```


### 🖥️ Server (Express)


```

CLOUDINARY_API_SECRET=<your_cloudinary_secret>
CLOUDINARY_API_KEY=<your_cloudinary_key>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
CLIPDROP_API_KEY=<your_clipdrop_api_key>
GEMINI_API_KEY=<your_gemini_api_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
DATABASE_URL=<your_neon_postgresql_url>

```


---

## 🧠 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shivam-r1/QuickAi.git
cd QuickAi

```

### 2️⃣ Install Dependencies

# For client

```bash

cd client
npm install

```

# For server

```bash

cd ../server
npm install

```

### 3️⃣ Add Environment Variables

Create .env files in both client/ and server/ directories and add the respective keys.

### 4️⃣ Run the Application

# For client

```bash

cd client
npm run dev

```

# For server

```bash

cd ../server
npm run server

```

**Your app will be live on:**

Frontend: http://localhost:5173

Backend: http://localhost:3000


# 🧩 Core Functionalities
## 🧾 AI Content Generator

Generates SEO-optimized articles and blog titles using Gemini API.

## 🖼️ Image Tools

Generate Images: Create visuals from text prompts using ClipDrop API.

Remove Background/Object: Upload images and transform them instantly.

Cloudinary Integration: Efficient image storage and CDN.

## 👤 Authentication

Secure login, registration, and session management via Clerk Auth.

## 📊 Dashboard

Displays total creations, recent activity, and active subscription plan.

Intuitive navigation and a clean design using Tailwind CSS.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve.
```bash
git checkout -b feature/your-feature
git commit -m "Add new feature"
git push origin feature/your-feature
```
# 🧑‍💻 Author

👨‍💻 Shivam Ruhela

Developer of QuickAi

🎓 CSE Student @ Delhi Technological University
💼 MERN Stack Developer | AI & Web Enthusiast


## ⭐ Show Your Support

If you like this project, don’t forget to star the repository 🌟 Your support helps the project grow and reach more developers!
