<!-- # TaskManagerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->

<div dir="rtl">

# 📝 רשימת משימות (To-Do App)

ברוכה הבאה לאפליקציית רשימת משימות שפיתחתי במסגרת פרויקט אישי!  
האפליקציה מאפשרת ניהול משימות בצורה נוחה וידידותית, כולל הוספה, עריכה, מחיקה, סינון לפי סטטוס, והתראות על משימות שתאריך היעד שלהן חלף.

---

## 🚀 טכנולוגיות בשימוש

- Angular 17
- TypeScript
- Angular Material
- Reactive Forms + Template Forms
- CSS3 (כולל רספונסיביות)
- שירותים (Services) ו־HTTP Requests

---

## ✨ תכונות עיקריות

- ✅ הוספת משימות חדשות עם תיאור ותאריך יעד
- 📝 עריכת משימות קיימות
- 🗑️ מחיקת משימות
- 📅 הדגשת משימות שתאריך היעד שלהן עבר
- 🔍 חיפוש לפי כותרת
- 🔄 סינון לפי סטטוס (בוצע / לא בוצע / הכל)
- 🎨 עיצוב גרפי ייחודי בסגנון פתקים עם צבעים ודגלוני סטטוס
- 📱 רספונסיביות מותאמת למובייל

---

## ⚙️ הוראות התקנה והרצה

### דרישות מוקדמות

- Node.js מותקן (מומלץ גרסה 18 ומעלה)
- Angular CLI מותקן גלובלית:
```bash
npm install -g @angular/cli
```

### הוראות התקנה

1. הורידי את התיקייה המקומית של הפרויקט.
2. פתחי את התיקייה ב־Visual Studio Code (או כל עורך קוד אחר).
3. בטרמינל או ב ־ CMD, התקיני את התלויות:
```bash
npm install
```

### הרצת האפליקציה

אם הרצת `ng serve` מתוך VS Code גורמת לשגיאת חומת אש (firewall),
 ניתן להריץ את הפרויקט ישירות דרך ה־ CMD:

```bash
cd path/to/project
ng serve
```

ולאחר מכן לגשת לדפדפן בקישור:
```
http://localhost:4200
```

---
### 📦 מסד נתונים (SQLite)

- הקובץ `tasks.db` מכיל את כל הנתונים של המשימות.
- ודאו שהוא ממוקם בתיקיית השרת (`/server`) או באותו מקום שבו מצפה קובץ השרת (`server.js`) להתחבר אליו.
- אם מתקבלת שגיאה של "database not found", ודאו שהקובץ נמצא באותו נתיב שמוגדר בקוד.


## 🧪 בדיקות (Unit Tests)

האפליקציה כוללת בדיקות יוניט טסט בסיסיות לכל אחד מהקומפוננטים המרכזיים 
`AddTask`, `EditTask`, `TaskList`,`TaskService`.

להרצת הבדיקות:
```bash
ng test
```

---

## 🏠 מבנה הפרויקט

```
src/
├── app/
│   ├── pages/
│   │   ├── task-list/
│   │   ├── add-task/
│   │   ├── edit-task/
│   │   └── home/
│   ├── services/
│   │   └── task.service.ts
│   └── app-routing.module.ts
│   └── app.component.ts
├── assets/
│   └── images/
├── styles.css
└── index.html
```

---

## 🙋‍♀️ מי אני?

נעמי 👩‍💻  
מתכנתת FULL STACK שאוהבת להפוך רעיונות לפיצ'רים יפים, שמישים, ומרשימים.  
בפרויקט הזה הקפדתי על חוויית משתמש, עיצוב אסתטי, נגישות, ותשתית קוד נקייה ונוחה להרחבה.

</div>