import { CanActivateFn } from '@angular/router';

  export const AuthGuard: CanActivateFn = (route, state) => {
   const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user && user.role) {
    // בדוק את הנתיב הנוכחי
    const currentUrl = state.url;

    // חסימת גישה למורה לנתיבים של מזכירה
    if (user.role === 'מורה' && (currentUrl.includes('registrations') || currentUrl.includes('registrant/'))) {
      window.alert('אין לך הרשאה לגשת לדף זה!');
      window.location.href = '/lessons';
      return false;
    }

    // חסימת גישה למזכירה לנתיבים של מורה
    if (user.role === 'מזכירה' && (currentUrl.includes('lessons') || currentUrl.includes('lessons/'))) {
      window.alert('אין לך הרשאה לגשת לדף זה!');
      window.location.href = '/registrations';
      return false;
    }

    return true; // המשתמש מחובר ויש לו הרשאה
  } else {
    window.alert('עליך להתחבר כדי לגשת לדף זה!');
    return false; // המשתמש לא מחובר
  }
};
