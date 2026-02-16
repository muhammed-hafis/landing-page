# Landing Dashboard

A modern, feature-rich landing page and admin dashboard built with React, Vite, and Tailwind CSS. Includes authentication, theme switching, user management, and a beautiful landing page with multiple sections.

## 📋 Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammed-hafis/landing-page.git
   cd landing-page
   ```

2. **Navigate to the client directory:**
   ```bash
   cd client
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build:**
   ```bash
   npm run preview
   ```

7. **Run ESLint:**
   ```bash
   npm run lint
   ```

### Demo Credentials

For testing the application, use the following credentials:
- **Email:** `user@gmail.com`
- **Password:** `user`

## ✨ Features Checklist

- ✅ **Authentication System**
  - Login page with form validation
  - Token-based authentication (demo with hardcoded credentials)
  - Protected routes - unauthorized access redirects to login
  - Logout functionality

- ✅ **Multi-Page Application**
  - Landing Page - Hero section with company branding
  - Dashboard - Real-time data visualization
  - Users Page - List of users with detailed information
  - Settings Page - User profile and preferences management

- ✅ **Theme Support**
  - Dark/Light mode toggle
  - Persistent theme preference in localStorage
  - Smooth theme transitions across all pages
  - Logo adaptive to theme (dark and light versions)

- ✅ **Dashboard Features**
  - Fetch and display user data from JSONPlaceholder API
  - Statistics cards showing total users, companies, website coverage
  - Loading states with spinner animation
  - Error handling and display

- ✅ **User Management**
  - View all users with complete information
  - Display user details including company and website
  - Contact information display

- ✅ **Settings Management**
  - Edit user profile (name)
  - View account email
  - Theme toggle switch
  - Save notifications with visual feedback

- ✅ **Navigation**
  - Responsive navigation bar (desktop & mobile)
  - Mobile hamburger menu
  - Active route highlighting
  - Quick access to all pages for authenticated users

- ✅ **Landing Page Sections**
  - Hero section with call-to-action
  - Feature showcase
  - Multiple content sections
  - Global reach section
  - Contact section
  - Footer with links

- ✅ **UI/UX Enhancements**
  - Responsive design (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Loading spinners with theme awareness
  - Modal components for dialogs
  - Accessible form inputs with validation
  - Tailwind CSS for modern styling
  - Lucide React and React Icons for iconography

- ✅ **State Management**
  - Zustand for global state management
  - Persistent localStorage for auth and preferences
  - Clean separation of concerns

## 📸 Screenshots

<table>
  <tr>
    <td><b>Login Page</b></td>
    <td><b>Hero Section</b></td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/a8c77932-3e0a-48cc-be01-6986c5ac0a5d" width="100%" />
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/51a25367-1b00-48b5-ba49-33307cb3ff28" width="100%" />
    </td>
  </tr>
  <tr>
    <td><b>Dashboard Page</b></td>
    <td><b>Users Page</b></td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/7b2b3fd3-b238-429f-a4d1-ee12e45956fa" width="100%" />
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/4459ea82-2c49-4746-b8f3-aa773fc4a7e0" width="100%" />
    </td>
  </tr>
</table>


## 🏗️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Build Tool | Vite 7.1.6 |
| Framework | React 19.1.1 |
| Routing | React Router v7.13.0 |
| State Management | Zustand 5.0.11 |
| Styling | Tailwind CSS 4.1.18 |
| 3D Graphics | Three.js + React Three Fiber |
| UI Components | Bootstrap 5.3.8, Lucide React, React Icons |
| Code Quality | ESLint 9.35.0 |

## 🎯 Project Structure

```
client/
├── public/
│   ├── icons/          # Icon assets
│   ├── profile/        # Profile images
│   └── text/           # Text assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── GlowCircle.jsx
│   │   └── HeroContainer.jsx
│   ├── pages/          # Page components
│   │   ├── Login.jsx
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx
│   │   ├── home/       # Landing page sections
│   │   │   ├── Home.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Feature.jsx
│   │   │   ├── Third.jsx
│   │   │   ├── Global.jsx
│   │   │   └── Contact.jsx
│   │   ├── users/
│   │   │   └── Users.jsx
│   │   └── settings/
│   │       └── Settings.jsx
│   ├── routes/         # Route protection
│   │   └── ProtectedRoute.jsx
│   ├── store/          # Global state management
│   │   └── useAppStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## 🛠️ Architecture & Design Decisions

### 1. **Zustand for State Management**
   - **Decision:** Used Zustand instead of Redux or Context API
   - **Rationale:** Lightweight, simple API, minimal boilerplate, perfect for medium-sized apps
   - **Trade-off:** Less suitable for very large applications with complex state trees

### 2. **localStorage for Persistence**
   - **Decision:** Chose localStorage for storing auth tokens and user preferences
   - **Rationale:** Simple implementation, automatic persistence across sessions
   - **Trade-off:** Not secure for sensitive data; in production, should use httpOnly cookies and secure backend sessions

### 3. **Hardcoded Demo Authentication**
   - **Decision:** Used hardcoded credentials for demo purposes
   - **Rationale:** Quick testing without backend setup
   - **Trade-off:** Obviously not suitable for production; should integrate with real API

### 4. **Vite as Build Tool**
   - **Decision:** Used Vite over Create React App
   - **Rationale:** Faster build times, better HMR (Hot Module Replacement), smaller bundle size
   - **Trade-off:** Requires Node.js with ES module support

### 5. **Tailwind CSS for Styling**
   - **Decision:** Utility-first CSS framework instead of CSS-in-JS or SCSS
   - **Rationale:** Faster development, consistent design system, smaller CSS output with PurgeCSS
   - **Trade-off:** HTML becomes verbose with many utility classes; learning curve for new developers

### 6. **Protected Routes Pattern**
   - **Decision:** Custom ProtectedRoute component wrapping children
   - **Rationale:** Flexible, allows nuanced access control based on token presence
   - **Trade-off:** Could be extended with role-based access control (RBAC) for more complex scenarios

### 7. **External API Integration**
   - **Decision:** Dashboard fetches real data from JSONPlaceholder API
   - **Rationale:** Demonstrates real-world API integration and async data handling
   - **Trade-off:** Demo data changes; not suitable for production analytics

### 8. **Responsive Design Mobile-First**
   - **Decision:** Mobile-first approach with breakpoints for larger screens
   - **Rationale:** Better performance on mobile devices, progressive enhancement
   - **Trade-off:** Requires careful CSS media query management

### 9. **Bootstrap Dependency**
   - **Decision:** Bootstrap included in dependencies alongside Tailwind
   - **Rationale:** Possible for component libraries or legacy compatibility
   - **Trade-off:** Redundant CSS frameworks increase bundle size; recommend removing if not used

### 10. **Three.js for Visual Effects**
   - **Decision:** Included React Three Fiber for potential 3D animations
   - **Rationale:** Enhanced visual appeal with 3D components (GlowCircle)
   - **Trade-off:** Adds to bundle size; performance impact on low-end devices

## 📝 Environment Variables

Currently, the app uses no environment variables. For production deployment, consider adding:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_AUTH_TOKEN_KEY=your_token_key
```

## 🔒 Security Considerations

For production deployment:
1. Replace demo authentication with real backend API
2. Use httpOnly cookies instead of localStorage for tokens
3. Implement CSRF protection
4. Add rate limiting on login attempts
5. Sanitize user input before storing
6. Use HTTPS for all communications
7. Implement proper error handling without exposing sensitive details

## 🚀 Performance Optimizations

- Tree-shaking via Vite
- Code splitting with React Router
- Lazy loading potential for heavy components
- CSS purging with Tailwind
- Responsive image optimization recommendations

## 📚 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality with ESLint

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
