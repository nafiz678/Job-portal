# Career Connect 💼

Career Connect is a modern and responsive job portal website that connects job seekers and employers seamlessly. The platform provides an intuitive interface, comprehensive job search options, and efficient employer tools for managing job postings and applications.  

--- 

## 🌟 Overview  
Career Connect is a full-stack web application designed to:  
- Allow job seekers to browse, search, and apply for jobs.  
- Enable employers to post jobs and manage applications.  
- Provide a personalized dashboard for both job seekers and employers.  
- Facilitate secure and easy communication between job seekers and employers.  

---  

## 🛠️ Technologies Used  

### Frontend:  
- **React**: Dynamic UI rendering.  
- **Tailwind CSS**: Responsive and modern styling.  

### Backend:  
- **Node.js** and **Express.js**: Backend framework for API creation.  
- **MongoDB**: NoSQL database for data storage.  
- **Prisma ORM**: For database interaction.  

### Others:  
- **Axios**: For HTTP requests.  
- **JWT**: For secure user authentication.  
- **Firebase**: For user authentication and hosting.  

---  

## ✨ Main Features  
- **Job Search and Filter**: Job seekers can search for jobs by keywords, location, and category.  
- **Employer Dashboard**: Employers can create, update, and delete job postings.  
- **Application Tracking**: Job seekers can track their applications, and employers can review applicant profiles.  
- **User Authentication**: Login and sign-up functionality with Firebase.  
- **Responsive Design**: Optimized for both desktop and mobile devices.  

---  

## 📦 Dependencies  
- **axios**: Promise-based HTTP client.  
- **firebase**: For authentication and hosting services.  
- **react**: JavaScript library for building user interfaces.  
- **react-dom**: React library for DOM rendering.  
- **react-router-dom**: Declarative routing for React.  
- **react-icons**: Library of popular icons.  
- **react-toastify**: Notifications for React.  
- **sweetalert2**: Beautiful and customizable popups.  
- **tailwindcss**: Utility-first CSS framework for building custom designs.  
- **prisma**: Database ORM for efficient database interaction.  

To see the full list of dependencies, check the [package.json](./package.json) file.  


---

## 🚀 How to Run Locally
Follow these steps to run the project on your local machine:

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/nafiz678/restaurant-project-client.git 
   cd restaurant-project-client


2. Install Dependencies:
  - Frontend
     ```bash
     cd client
     npm install


3. Set Up Environment Variables:
    ```bash
    env
    Copy code
    # Server  
    MONGO_URI=your_mongodb_connection_string
    # Client  
    VITE_FIREBASE_API_KEY=your_firebase_api_key

4. Run the Development Servers:

- Start the frontend:
    ```bash
    cd server
    npm run dev

5. Access the Application: </br>
Open your browser and navigate to http://localhost:5000.