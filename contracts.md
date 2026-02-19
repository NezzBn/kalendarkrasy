# API Contracts - Світ Космосу

## 1. Backend API Endpoints

### Articles (Публікації)
- **GET /api/articles** - Отримати всі статті
  - Response: `[{ id, title, excerpt, image, date, category, content }]`
  
- **GET /api/articles/:id** - Отримати одну статтю
  - Response: `{ id, title, excerpt, image, date, category, content }`
  
- **POST /api/articles** - Створити нову статтю (admin)
  - Body: `{ title, excerpt, image, date, category, content }`
  - Response: `{ id, title, ... }`
  
- **PUT /api/articles/:id** - Оновити статтю (admin)
  - Body: `{ title, excerpt, image, date, category, content }`
  - Response: `{ id, title, ... }`
  
- **DELETE /api/articles/:id** - Видалити статтю (admin)
  - Response: `{ success: true }`

### Moon Phases (Фази Місяця)
- **GET /api/moon-phases** - Отримати фази місяця
  - Response: `[{ id, date, phase, icon }]`
  
- **POST /api/moon-phases** - Додати фазу (admin)
  - Body: `{ date, phase }`

### Sidebar Links (Бічна панель)
- **GET /api/sidebar-links** - Отримати всі розділи
  - Response: `[{ title, items: [{ text, link }] }]`

## 2. Database Models (MongoDB)

### Article Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  excerpt: String (required),
  content: String (required),
  image: String (URL),
  date: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

### MoonPhase Model
```javascript
{
  _id: ObjectId,
  date: String (required),
  phase: String (required),
  createdAt: Date
}
```

### SidebarLink Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  items: [{ text: String, link: String }],
  order: Number
}
```

## 3. Mocked Data Migration

### Current Mock Data (frontend/src/mockData.js)
- `articles` → буде замінено на API call до GET /api/articles
- `moonPhases` → буде замінено на API call до GET /api/moon-phases
- `sidebarLinks` → буде замінено на API call до GET /api/sidebar-links
- `zodiacSigns` → залишається статичним (не потребує backend)

## 4. Admin Panel Features

### Admin Routes (Frontend)
- **/admin/login** - Сторінка входу для адміністратора
- **/admin/dashboard** - Головна панель адміна
- **/admin/articles** - Список всіх статей
- **/admin/articles/new** - Форма створення нової статті
- **/admin/articles/edit/:id** - Форма редагування статті
- **/admin/moon-phases** - Управління фазами місяця

### Admin Article Form Fields
- Заголовок (title) - text input
- Короткий опис (excerpt) - textarea
- Повний контент (content) - textarea/rich text editor
- Зображення (image) - URL input
- Дата (date) - date picker
- Категорія (category) - select/input

## 5. Frontend Integration Plan

### Changes to Components

**HomePage.jsx:**
```javascript
// Before (mock):
import { articles } from '../mockData';

// After (API):
const [articles, setArticles] = useState([]);
useEffect(() => {
  fetchArticles();
}, []);
```

**Sidebar.jsx:**
```javascript
// Before (mock):
import { moonPhases, sidebarLinks } from '../mockData';

// After (API):
const [moonPhases, setMoonPhases] = useState([]);
const [sidebarLinks, setSidebarLinks] = useState([]);
useEffect(() => {
  fetchMoonPhases();
  fetchSidebarLinks();
}, []);
```

## 6. Authentication

### Simple Admin Auth
- Використовуємо простий password-based auth
- Зберігаємо токен в localStorage
- Middleware для захисту admin routes

### Admin Credentials (Environment Variable)
- ADMIN_PASSWORD в backend/.env
- Простий механізм перевірки пароля

## 7. File Structure

### New Backend Files
- `/app/backend/models/article.py` - Article model
- `/app/backend/models/moon_phase.py` - MoonPhase model
- `/app/backend/models/sidebar_link.py` - SidebarLink model
- `/app/backend/routes/articles.py` - Article routes
- `/app/backend/routes/moon_phases.py` - Moon phase routes
- `/app/backend/routes/admin.py` - Admin auth routes

### New Frontend Files
- `/app/frontend/src/services/api.js` - API service layer
- `/app/frontend/src/pages/admin/` - Admin panel pages
- `/app/frontend/src/components/admin/` - Admin components

## 8. Implementation Steps

1. ✅ Create contracts.md
2. Create backend models (Article, MoonPhase, SidebarLink)
3. Create backend API routes
4. Seed initial data from mockData.js to database
5. Create API service layer in frontend
6. Update frontend components to use API
7. Create admin authentication
8. Create admin panel UI
9. Test all functionality
10. Remove mockData.js dependency
