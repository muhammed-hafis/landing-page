# Landing Dashboard

A modern, feature-rich landing page with integrated admin dashboard built with React, Vite, and Tailwind CSS. Includes authentication, dark/light theme switching, user management with search/sort/pagination, and a beautiful multi-section landing page.

## 📋 Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammed-hafis/landing-page.git
   cd landing-page/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

6. **Run code quality check:**
   ```bash
   npm run lint
   ```

### Demo Credentials
- **Email:** `user@gmail.com`
- **Password:** `user`

## ✨ Features Checklist

- ✅ **Authentication & Security**
  - Login page with form validation and error handling
  - Token-based authentication (demo with hardcoded credentials)
  - Protected routes - unauthorized users redirected to login
  - Logout functionality with token cleanup
  - Persistent auth state via localStorage

- ✅ **Landing Page (Public)**
  - Hero section with gradient wave animations
  - Feature showcase with 6 feature boxes
  - Third section with orbital graphics
  - Global companies showcase section
  - Contact form with validation
  - Footer with links
  - Responsive design across all devices

- ✅ **Admin Dashboard (Protected)**
  - Real-time user statistics (total users, companies, website coverage)
  - User data fetched from JSONPlaceholder API
  - Loading spinners with theme-aware styling
  - Error handling and display
  - Responsive statistics cards

- ✅ **User Management (Protected)**
  - Browse all users with search functionality
  - Real-time filtering by name or email
  - Sort users (ascending/descending alphabetically)
  - Pagination (6 users per page)
  - View detailed user info in modal popup
  - Display email, phone, website, company details

- ✅ **Settings (Protected)**
  - Edit user profile name
  - View account email
  - Dark/Light theme toggle
  - Save confirmation messages
  - Settings persist via localStorage

- ✅ **Theme System**
  - Dark mode and Light mode support
  - Smooth CSS transitions between themes
  - Persistent theme preference in localStorage
  - Adaptive logos (dark and light versions)
  - All components theme-aware

- ✅ **Navigation**
  - Fixed responsive navbar with logo
  - Desktop menu with active route highlighting
  - Mobile hamburger menu
  - Quick logout button
  - Logo switches based on current theme

- ✅ **UI Components**
  - GlowCircle - Animated glow effects
  - HeroContainer - Dashboard preview display
  - Modal - Reusable dialog component
  - Footer - Links and info
  - Responsive grid layouts
  - Smooth animations and transitions

- ✅ **Styling & UX**
  - Tailwind CSS for utility-first styling
  - Lucide React icons
  - React Icons library
  - Grid background patterns
  - Gradient effects (pink to purple)
  - Dark theme optimized for accessibility
  - Hover effects and smooth transitions

- ✅ **State Management**
  - Zustand for global state
  - Auth: token, email, name, login/logout methods
  - Theme: dark/light toggle with persistence
  - Profile: name editing and updates
  - All state persists to localStorage

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

| Layer | Technology |
|-------|-----------|
| **Build Tool** | Vite 7.1.6 |
| **Framework** | React 19.1.1 |
| **Routing** | React Router v7.13.0 |
| **State Management** | Zustand 5.0.11 |
| **Styling** | Tailwind CSS 4.1.18 |
| **Icons** | Lucide React, React Icons |
| **Utilities** | UUID (unique ID generation) |
| **Linting** | ESLint 9.35.0 |

## 📝 Project Structure

```
landing-dashboard/
├── client/
│   ├── public/
│   │   ├── icons/          # Feature showcase icons
│   │   ├── profile/        # Profile images
│   │   └── text/           # Company logos/assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx              # Top navigation with theme toggle
│   │   │   ├── Footer.jsx              # Footer component
│   │   │   ├── Modal.jsx               # Reusable modal dialog
│   │   │   ├── GlowCircle.jsx          # Animated glow effects
│   │   │   └── HeroContainer.jsx       # Dashboard preview display
│   │   ├── pages/
│   │   │   ├── Login.jsx               # Authentication page
│   │   │   ├── dashboard/Dashboard.jsx # Stats & data visualization
│   │   │   ├── home/
│   │   │   │   ├── Home.jsx            # Landing page wrapper
│   │   │   │   ├── Hero.jsx            # Hero section with gradient
│   │   │   │   ├── Feature.jsx         # 6-box feature showcase
│   │   │   │   ├── Third.jsx           # Orbital graphics section
│   │   │   │   ├── Global.jsx          # Company logos section
│   │   │   │   └── Contact.jsx         # Contact form
│   │   │   ├── users/Users.jsx         # User list with search/sort/pagination
│   │   │   └── settings/Settings.jsx   # Profile & theme settings
│   │   ├── routes/ProtectedRoute.jsx   # Route protection wrapper
│   │   ├── store/useAppStore.js        # Zustand global state
│   │   ├── App.jsx                     # Main app with routing
│   │   ├── Child.jsx                   # Demo component
│   │   ├── main.jsx                    # React entry point
│   │   └── index.css                   # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
└── README.md
```

## 🛠️ Architecture & Design Decisions

| # | Decision | Why | Trade-off |
|---|----------|-----|-----------|
| 1 | **Zustand** for state management | Lightweight, minimal boilerplate, perfect for medium-sized apps | Not ideal for very large complex state trees |
| 2 | **localStorage** for persistence | Simple implementation, automatic session persistence | Not secure for sensitive data; use httpOnly cookies in production |
| 3 | **Hardcoded demo auth** | Quick testing without backend setup | Must replace with real API before production use |
| 4 | **Vite** as build tool | Faster builds, better HMR, smaller bundles | Requires Node.js with ES module support |
| 5 | **Tailwind CSS** for styling | Rapid development, consistent design system, smaller CSS output | Verbose HTML with utility classes; learning curve |
| 6 | **Protected Routes** component | Simple token-based access control implementation | Could extend with role-based access control (RBAC) |
| 7 | **JSONPlaceholder API** for demo data | Real-world API integration demonstration | Demo data unsuitable for production analytics |
| 8 | **Mobile-first responsive design** | Better performance and UX on mobile devices | Requires careful CSS media query management |
| 9 | **Fetch API** instead of Axios | No additional dependency, built-in browser support | Manual error handling and loading states required |
| 10 | **Removed Three.js** | Reduced bundle size, simplified dependencies | Lost potential for 3D visual effects |

## 🔐 Security Considerations

**Current Demo State:**
- Hardcoded credentials for testing only (`user@gmail.com` / `user`)
- Tokens stored in localStorage (not recommended for production)
- No CSRF or rate limiting configured

**Production Requirements:**
1. Replace hardcoded authentication with real backend API
2. Use httpOnly cookies instead of localStorage for token storage
3. Implement CSRF protection on sensitive endpoints
4. Add rate limiting on login attempts
5. Validate and sanitize all user inputs
6. Enable HTTPS for all communications
7. Implement secure session management
8. Add proper error handling without exposing sensitive data

## 🚀 Performance & Optimization

**Current Optimizations:**
- Vite's tree-shaking and code splitting
- React Router for component-level code splitting
- Tailwind CSS with PurgeCSS for minimal output
- Removed Three.js and Bootstrap to reduce bundle size
- Static asset caching via public folder
- Memoized components (React.memo usage)

**Future Improvements:**
- Lazy load landing page sections with React.lazy()
- Image optimization and WebP format conversion
- Service Worker for offline support
- API response caching strategies
- Bundle size monitoring and analysis

## 📚 Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with HMR at `localhost:5173` |
| `npm run build` | Create production-optimized build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For major changes, open an issue first to discuss your ideas.

## 📄 License

Licensed under the MIT License. See LICENSE file for details.

## 📞 Support & Feedback

- Open an issue on GitHub for bugs or feature requests
- Check existing issues before creating a new one

---

**Built with ❤️ by Muhammed Hafis**  
**Modern stack: React • Vite • Tailwind CSS • Zustand**
