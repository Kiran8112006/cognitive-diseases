# 🧠 DDAP — Cognitive Disease Awareness Platform

> **Understanding and supporting individuals with cognitive differences — from Dyslexia to Dyscalculia and beyond.**

DDAP (Dyslexia , Dyscalculia & Prosopagnosia Awareness Platform) is an all-in-one web application designed to raise awareness, provide assessment tools, and assist individuals with three key cognitive learning differences: **Dyslexia**, **Dyscalculia**, and **Prosopagnosia** (face blindness). It is built to be inclusive, accessible, and easy to use for students, caregivers, parents, and educators.

---

## 📸 Screenshots

### Landing Page
![Landing Page](./docs/screenshot_01_landing.png)

### Authentication Page
![Auth Page](./docs/screenshot_02_auth.png)

---



## ✨ Key Features at a Glance

| Feature | Module | Description |
|---|---|---|
| 🔤 Font Helper | Dyslexia | Switch to dyslexia-friendly OpenDyslexic font |
| 🎙️ Live Transcription | Dyslexia | Real-time speech-to-text with syllable breakdown |
| 📁 Audio Upload | Dyslexia | Upload MP3 files for transcription & analysis |
| 📄 PDF Upload | Dyslexia | Extract & analyze text from PDF documents |
| 🔢 Dot Comparison Test | Dyscalculia | Visual number sense assessment |
| 📏 Number Line Test | Dyscalculia | Spatial number placement accuracy test |
| 🧮 Arithmetic Test | Dyscalculia | Memory-based math fluency assessment |
| 📸 AR Object Counter | Dyscalculia | Count real-world objects using your camera |
| 🎵 Music Math Game | Dyscalculia | Learn math through interactive music patterns |
| 📖 Story Mode | Dyscalculia | AI-generated math stories for contextual learning |
| 👤 Face Enrollment | Prosopagnosia | Save faces with names to a personal database |
| 🔍 Face Identification | Prosopagnosia | Instantly identify people using your webcam |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and npm
- **Python** 3.10+
- A **Firebase** project (for authentication & Firestore)
- A **Pinecone** account (for face recognition vector database)
- A **Google Gemini API** key
- A **Groq API** key

### 1. Clone the Repository

```bash
git clone https://github.com/Kiran8112006/cognitive-diseases.git
cd cognitive-diseases
```

### 2. Set Up the Frontend

```bash
cd bmsce
npm install
```

Create a `.env` file in the `bmsce/` folder:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

Start the frontend dev server:

```bash
npm run dev
```

### 3. Set Up the Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` folder:

```env
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=your_pinecone_index_name
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
python app.py
```

---

## 🗺️ How to Use the App — Step by Step

### Step 1: Visit the Landing Page

When you first open the app, you'll see the **Landing Page** — a stunning dark-themed page with a hero section titled *"Cognitive Disease Awareness Platform"*. This page is freely accessible to everyone, no login required.

You can:
- 🌐 **Change the language** using the dropdown in the top-right corner (supports multiple languages)
- 📖 **Scroll down** to read about Dyslexia and Dyscalculia
- 🖼️ View scrolling image galleries showcasing awareness content about each condition
- 🔗 Visit the team's **GitHub** and **Instagram** profiles in the footer

Click **"Get Started"** in the navigation bar to create an account or log in.

---

### Step 2: Create an Account or Log In

The **Authentication Page** provides a clean, centered login card with:

- **Login tab** — Enter your email and password, then click **Sign In**
- **Sign Up tab** — Create a new account with real-time password strength validation:
  - At least 8 characters
  - One uppercase letter, one lowercase letter
  - One number, one special character
- **Forgot Password** — Get a reset link sent to your email
- **Continue with Google** — One-click sign-in via your Google account

Once logged in, you'll be redirected to the **Dashboard**.

---

### Step 3: The Dashboard

The Dashboard is your home base. It shows three large cards — one for each module. Click a card to enter that module.

| Card | Module | What it does |
|---|---|---|
| 📊 Dyscalculia | `/dycalculia` | Math learning assessments & games |
| 📚 Dyslexia | `/dyslexia` | Reading, transcription & text analysis tools |
| 👤 Prosopagnosia | `/propognasia` | Face recognition assistance |

Your **email** is shown in the top-right of the navbar, along with a **Logout** button.

---

## 📚 Module 1: Dyslexia Tools

> Dyslexia is a learning difference that affects reading, spelling, and text processing. DDAP provides tools to help users listen, transcribe, and understand text more easily.

### Dyslexia Home Page

![Dyslexia Home](./docs/screenshot_03_dyslexia.png)

The Dyslexia Home page features:

- **Dyslexic Font Toggle** — A button at the top right: *"Feeling difficult to read? Try this font instead"*. This switches **all text** to the **OpenDyslexic** font — a specially designed typeface that makes letters more distinct and easier to differentiate for people with dyslexia.

- **Interactive Carousel** — Browse three input modes using the left/right arrow buttons or indicator dots:
  1. 🎙️ **Live Transcription** — Transcribe speech in real time
  2. 📁 **Upload MP3** — Upload an audio file for analysis  
  3. 📄 **Upload PDF** — Upload a PDF to extract text

- **Previous Records** — A panel below the carousel shows all your past sessions from Firebase, sorted by date. Click any record card to open a **detailed modal** showing:
  - 📝 Summary of the text
  - 🔤 Syllable breakdown
  - 🗺️ Mind map / flow chart
  - 📖 Full original text

---

### 🎙️ Feature: Live Transcription

![Live Transcription](./docs/screenshot_04_dyslexia_live.png)

Use your **microphone** to transcribe speech in real time.

**How to use:**
1. Open the Dyslexia section and click on **Live Transcription**
2. Allow browser microphone access when prompted
3. Start speaking — your words are transcribed live on screen
4. When done, the app generates:
   - **Syllable breakdown** — each word split into syllables to aid pronunciation understanding
   - **AI Summary** — a concise summary of what was said, powered by Google Gemini
   - **Mind Map** — a visual text-based flowchart of the key ideas

**Best for:** Students and individuals who prefer listening over reading, or who want to convert spoken content into structured text.

---

### 📁 Feature: Audio File Upload

![Audio Upload](./docs/screenshot_05_dyslexia_upload.png)

Upload a pre-recorded audio file (MP3, WAV, M4A, OGG) for transcription and analysis.

**How to use:**
1. Open the Dyslexia section and click **Upload MP3**
2. Click the upload area and select your audio file
3. The backend transcribes it using **Gemini's speech recognition**
4. Results are shown automatically:
   - Original transcript
   - Syllable breakdown
   - AI-generated summary
   - Mind map

**Best for:** Uploading lecture recordings, interviews, or podcast clips for structured analysis.

---

### 📄 Feature: PDF Upload

Similar to audio upload, but for **PDF documents**. The system extracts all text from the PDF and processes it into:
- A readable transcript
- Syllable breakdown for every word
- A summarized version
- A structured mind map

**How to use:**
1. Click **Upload PDF** in the Dyslexia carousel
2. Select a `.pdf` file from your device
3. Wait a moment — the backend extracts the text and returns the full analysis

**Best for:** Processing study notes, reports, or books.

---

## 🔢 Module 2: Dyscalculia Assistant

> Dyscalculia is a learning difference that affects the ability to understand numbers, perform arithmetic, and work with math concepts. DDAP provides a suite of assessment tests and engaging learning games.

### Dyscalculia Home Page

![Dyscalculia Home](./docs/screenshot_06_dycalculia.png)

The Dyscalculia Home page has **two separate carousels**:

1. **Assessment Tests** — Standardized tests to gauge number sense and math ability
2. **Learning Features** — Fun, accessible activities to build math skills

---

### 🧪 Assessment Tests

#### 1. 🔢 Dots Comparison Test
Quickly decide which of two groups of dots has **more dots**. This tests **subitizing** — the ability to sense quantity without counting — a core skill affected by dyscalculia.

- You'll see two sets of dots side by side
- Click the side that has more dots
- Your **accuracy** and **response time** are recorded

#### 2. 📏 Number Line Test
Drag a marker to the correct position on a number line. This measures your **spatial understanding of numbers** and how you estimate where numbers fall in a range.

- A number is shown, and you place it on a number line (e.g., 0–100)
- The **error distance** from the correct position is measured

#### 3. 🧮 Arithmetic Test
Solve simple math problems from memory. This tests **working memory** and **basic arithmetic fluency**.

- You'll be shown an arithmetic question (addition, subtraction, etc.)
- Enter your answer within a time limit
- Tracks accuracy and identifies potential memory difficulties

After all three tests, the app generates a **personalized AI feedback message** using Google Gemini — written in a friendly, supportive tone to motivate the student.

---

### 🎮 Learning Features

#### 📸 AR Object Counter
Use your **device camera** to count real objects in the world around you. This bridges abstract numbers with real visual experiences — extremely helpful for people who struggle to grasp numerical quantities.

**How to use:**
1. Click **AR Object Counter** from the Dyscalculia page
2. Allow camera access
3. Point your camera at objects — the app helps you count and visualize them

#### 🎵 Music Math Game
Learn math through **music and rhythm**. Math patterns are encoded as musical beats, making abstract number relationships feel intuitive and fun.

- Beat sequences correspond to numbers
- Identify patterns and answer math questions using musical cues
- Designed to engage the auditory learning pathway

#### 📖 Story Mode
Math problems are embedded in **AI-generated short stories** to give numbers real-world context and meaning.

- Read a short story that includes a math challenge
- Solve the problem in the narrative context (e.g., "How many apples does Emma have left?")
- Stories are generated by Google Gemini and tailored for accessibility

---

## 👤 Module 3: Prosopagnosia Assistant

> Prosopagnosia (also called "face blindness") is a neurological condition that makes it very difficult or impossible to recognize people by their faces. DDAP provides AI-powered tools to help individuals recognize familiar people using a personal face database.

### Prosopagnosia Home Page

![Prosopagnosia Home](./docs/screenshot_07_prosopagnosia.png)

The Prosopagnosia Home shows two options in a carousel:
1. **Enroll Face** — Add a person to your database
2. **Identify Faces** — Recognize someone from a live photo

Your face database is **private and unique to your account** — no data is shared between users.

---

### 📸 Feature: Enroll Face

![Enroll Face](./docs/screenshot_08_enroll.png)

Register a person's face so the system can recognize them later.

**How to use:**
1. Go to **Prosopagnosia → Enroll Face**
2. A live webcam feed appears on screen
3. Ask the person to look at the camera and click **"Capture Photo"**
4. The captured photo is shown — if you're happy with it, enter the person's **name** in the text field
5. Click **"Save Face"** — the system:
   - Detects the face in the photo using OpenCV
   - Generates a 128-dimensional facial embedding using a FaceNet ONNX model
   - Stores the embedding in your private namespace in the Pinecone vector database
6. A success message confirms enrollment (e.g., *"Success! Enrolled John"*)

You can enroll as many people as you need — family members, colleagues, friends, etc.

**Technical note:** Each person's face is stored as a numerical vector (not a photo), so the system is fast, private, and can match even with lighting or angle variations.

---

### 🔍 Feature: Identify Face

![Identify Face](./docs/screenshot_09_identify.png)

Point your webcam at someone to instantly identify who they are.

**How to use:**
1. Go to **Prosopagnosia → Identify Faces**
2. A live webcam feed appears
3. Click **"Scan Person"**
4. The system:
   - Captures the photo
   - Detects all faces in it using OpenCV
   - Generates embeddings for each detected face
   - Searches your personal Pinecone database for a match
5. Results appear below — each recognized face is shown with the enrolled name  
   (e.g., 👤 **John**, 👤 **Mom**)
6. If no match is found: *"Faces found but unknown"*
7. Click **"Scan Again"** to try another photo

**Works best with:** Clear, well-lit frontal photos. Multiple faces in one photo are all identified simultaneously.

---

## 🌐 Multi-Language Support

DDAP supports **multiple languages**, accessible from the language picker dropdown on both the Landing Page and within module pages. This makes the platform inclusive for non-English speakers and regions where cognitive health resources are limited.

The app uses a centralized translation system (`translations.js`) that covers all UI strings — from navigation labels to button text and descriptive content.

---

## 🔐 Authentication & Security

- Powered by **Firebase Authentication**
- Supports **email/password** sign-up and login
- Supports **Google OAuth** (one-click sign-in)
- Password reset via email link
- Real-time password strength validation on signup
- All routes are protected — unauthenticated users are redirected to `/auth`
- Face data is stored in **user-namespaced** Pinecone indexes, ensuring complete privacy between accounts

---

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + Vite | SPA framework |
| React Router DOM | Client-side routing |
| Framer Motion | Smooth animations & carousel transitions |
| Firebase SDK | Auth + Firestore real-time data |
| react-webcam | Live camera feed for face features |
| Vanilla CSS | All custom styling |

### Backend
| Technology | Purpose |
|---|---|
| Python + Flask | REST API server |
| Google Gemini API | Transcription, summarization, story generation, AI feedback |
| ONNX + FaceNet128 | Face embedding model (replaced DeepFace) |
| OpenCV | Face detection (Haar Cascade classifier) |
| Pinecone | Vector database for face embeddings |
| PyMuPDF / pdfplumber | PDF text extraction |

---

## 📁 Project Structure

```
cognitive-diseases/
├── backend/               # Flask backend
│   ├── app.py             # Main API server with all routes
│   ├── face.py            # ONNX FaceNet embedding model wrapper
│   ├── db.py              # Pinecone face add/query functions
│   ├── transcribe.py      # Gemini audio transcription
│   ├── summary.py         # Gemini text summarization
│   ├── mindmap.py         # Gemini mind map generation
│   ├── syllable.py        # Syllable breakdown processor
│   ├── pdf_processor.py   # PDF text extraction
│   └── requirements.txt
│
└── bmsce/                 # React frontend
    └── src/
        ├── App.jsx        # Route definitions
        ├── landing.jsx    # Public landing page
        ├── hero.jsx       # Dashboard (module picker)
        ├── Auth.jsx       # Login / Signup / Reset
        ├── dyslexia/      # Dyslexia module
        │   ├── pages/
        │   │   ├── Home.jsx       # Carousel + records
        │   │   ├── Live.jsx       # Live transcription
        │   │   ├── Upload.jsx     # Audio upload
        │   │   └── PdfUpload.jsx  # PDF upload
        │   └── components/
        ├── dycalculia/    # Dyscalculia module
        │   ├── pages/Home.jsx
        │   ├── components/
        │   │   ├── ARCountingGame.jsx
        │   │   ├── MusicMathGame.jsx
        │   │   └── StoryMode.jsx
        │   └── features/smartTest/
        └── propognasia/   # Prosopagnosia module
            └── pages/
                ├── Home.jsx
                ├── Enroll.jsx
                └── Identify.jsx
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or raise an issue.

---

## 📬 Contact

- **GitHub**: [Kiran8112006](https://github.com/Kiran8112006)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
