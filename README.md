# YouTube Playlist Web App

A React-based web application that allows users to search YouTube videos, create personalized playlists, and play videos within the app. The app uses the YouTube Data API to fetch videos and supports saving playlists locally.

---

## Features

- **Search YouTube Videos:**  
  Search videos by keywords using YouTube Data API v3.

- **View Search Results:**  
  Browse video thumbnails and titles with options to add to playlist.

- **Create and Manage Playlist:**  
  Add videos to a personal playlist, remove videos, and save playlists in localStorage.

- **Video Player:**  
  Play selected videos inside the app using ReactPlayer.

---

## Tech Stack

- **Frontend:** React.js, Bootstrap  
- **API:** YouTube Data API v3  
- **Video Player:** ReactPlayer  
- **Storage:** localStorage for playlist persistence  

---

## Getting Started

### Prerequisites

- Node.js and npm installed  
- YouTube Data API key (obtain from [Google Developer Console](https://console.developers.google.com/))

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/youtube-playlist-app.git
   cd youtube-playlist-app

2. Install dependencies:
    ```
    npm install

3. Create a `.env` file in the root directory and add your YouTube API key:
    REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here

3. Start the development server:
    `npm start`

3. Open the app in your browser:
    `http://localhost:3000`

## Development Status
This project is currently a **work in progress**.