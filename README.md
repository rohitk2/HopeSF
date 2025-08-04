# HopeSF 

**Building Hope in San Francisco - A Personalized Resource Platform for Homeless Individuals**


## Overview

HopeSF is a specialized platform designed to support homeless individuals in San Francisco by providing personalized access to essential services, government benefits, and housing resources. Our platform creates curated experiences based on individual profiles (age, gender, benefits status) and connects users with the exact resources they qualify for.

**Mission:** Empowering homeless individuals with personalized, dignified access to services and benefits they deserve.

**Live Demo:** [https://your-hopesf-site.netlify.app](https://your-hopesf-site.netlify.app)

##  Key Features

### 🎯 For Homeless Individuals

-   **Personalized Profiles** - Add your age, gender, current benefits (SNAP, SSI, etc.), and special needs
-   **Curated Experiences** - Different interfaces for women, seniors, youth, veterans, LGBTQ+, and families
-   **Interactive Resource Map** - Live San Francisco map showing food banks, shelters, healthcare, hygiene facilities, and job services with real-time availability
-   **Benefits Navigator** - Track current benefits, find new ones you qualify for, renewal reminders
-   **AI Chatbot** - Get instant answers about bed availability, meal times, and service hours

### For Service Providers

-   **Real-Time Inventory Management** - Update bed counts, meal availability, and service hours instantly
-   **Provider Dashboard** - Track shelter capacity, food bank inventory, and hygiene supplies
-   **Live Data Integration** - Your updates immediately appear on the map and in chatbot responses
-   **Analytics & Reporting** - Monitor usage patterns and community impact

###  Smart Chatbot with Live Access

-   _"Are there beds available tonight?"_ → Real-time bed counts from shelter dashboards
-   _"Where can I eat lunch now?"_ → Current meal availability from food bank portals
-   _"Can I shower today?"_ → Live hygiene facility status updates

## Tech Stack

-   **Frontend:** React + TypeScript + Vite + Tailwind CSS + Shadcn/UI
-   **Backend:** Supabase (database, auth, real-time updates)
-   **Maps:** Mapbox GL JS for interactive resource mapping
-   **Deployment:** Netlify with automatic GitHub integration


## Quick Start

1.  **Clone and install**
    
    bash
    
    ```bash
    git clone https://github.com/rohitk2/HopeSF.git
    cd HopeSF/Portal-frontend
    npm install
    ```
    
2.  **Set up environment variables**
    
    bash
    
    ```bash
    cp .env.example .env
    # Add your Supabase and Mapbox keys
    ```
    
3.  **Run locally**
    
    bash
    
    ```bash
    npm run dev
    ```
