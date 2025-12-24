# React Context API – Login & Profile Example

##  Project Overview
This is a beginner-friendly React project created to understand how **Context API** works in real applications.  
The project demonstrates how user data entered in a **Login** component can be shared and displayed in a **Profile** component **without using props**.

The main goal of this project is to learn **global state management** using React Context API in a simple and clear way.

---

##  What This Project Teaches
- What is React Context API
- Why Context API is used
- Difference between local state and global state
- How to avoid prop drilling
- How components share data using Context
- How UI updates automatically when context data changes

---

##  Technologies Used
- **React.js**
- **React Hooks**
  - `useState`
  - `useContext`
- **Context API**
- **JavaScript (ES6)**
- **CSS (basic styling)**

---

##  Project Structure
```
src/
│
├── context/
│ ├── UserContext.js
│ └── UserContextProvider.jsx
│
├── components/
│ ├── Login.jsx
│ └── Profile.jsx
│
├── App.jsx
└── main.jsx

```

---

##  Explanation of Files

### 1 UserContext.js
- Creates a Context using `createContext()`
- Acts as a connection to access shared data

**Why used:**  
To define a common context that can be accessed by multiple components.

---

### 2 UserContextProvider.jsx
- Contains the actual **global state**
- Stores user data using `useState`
- Provides data using `<UserContext.Provider>`

**Why used:**  
This file stores the user data and makes it available to other components.

---

### 3 App.jsx
- Wraps `Login` and `Profile` components with `UserContextProvider`

**Why used:**  
So that both components can access the shared context.

---

### 4 Login.jsx
- Uses local state to store input values
- Uses `useContext` to access `setUser`
- Sends user data to Context on button click

**Why used:**  
To collect user input and store it in global context.

---

### 5 Profile.jsx
- Uses `useContext` to access `user` data
- Displays user details if available
- Shows a message if user is not logged in

**Why used:**  
To read and display data stored in Context.

---

##  Data Flow (Simple Explanation)
User enters data → Login component
Login sends data → UserContextProvider
UserContextProvider stores data in user state
Profile reads data → Displays on UI

---

##  Key Concepts Learned
- Context API is used for **global state**
- `UserContextProvider` stores the data
- `Login` updates the data
- `Profile` reads the data
- No props are passed between components
---

##  Why Context API?
- Avoids prop drilling
- Cleaner and more maintainable code
- Useful for authentication, themes, language, cart data, etc.
---

##  Conclusion
This project helped me understand how React Context API works internally by sharing data between components in a simple login and profile example. It is a foundational project for learning advanced state management in React.
---

##  Future Improvements
- Add better UI styling
- Add logout functionality
- Improve form validation
- Convert to real authentication flow
---

## ✨ Author
Created as a learning project to understand React Context API.
