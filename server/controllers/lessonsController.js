const express = require('express');
const router = express.Router();

const lessons = [
    { id: 1, lessonName: 'יוגה', teacher: 'שרה כהן', sessions: 12, startDate: '2025-04-01', price: 1200, day: 'ראשון', time: '10:00' },
    { id: 2, lessonName: 'פילאטיס', teacher: 'מיכל רוזן', sessions: 10, startDate: '2025-02-02', price: 1000, day: 'שני', time: '12:00' },
    { id: 3, lessonName: 'זומבה', teacher: 'חנה ברק', sessions: 15, startDate: '2025-03-03', price: 1500, day: 'שלישי', time: '14:00' },
    { id: 4, lessonName: 'אירובי', teacher: 'רחל אורן', sessions: 8, startDate: '2025-06-04', price: 800, day: 'רביעי', time: '16:00' },
    { id: 5, lessonName: 'אימון כוח', teacher: 'יעל שרון', sessions: 10, startDate: '2025-06-05', price: 1000, day: 'חמישי', time: '18:00' },
    { id: 6, lessonName: 'מתיחות', teacher: 'חיה וולף', sessions: 12, startDate: '2025-06-06', price: 1200, day: 'שישי', time: '08:00' },
    { id: 7, lessonName: 'ריצה', teacher: 'מירה צור', sessions: 10, startDate: '2025-06-07', price: 1000, day: 'שבת', time: '07:00' },
    { id: 8, lessonName: 'אימון פונקציונלי', teacher: 'נעמה שטרן', sessions: 14, startDate: '2025-06-08', price: 1400, day: 'ראשון', time: '09:00' },
    { id: 9, lessonName: 'אימון אישי', teacher: 'עליזה פיין', sessions: 6, startDate: '2025-02-09', price: 600, day: 'שני', time: '11:00' },
    { id: 10, lessonName: 'קיקבוקסינג', teacher: 'שולמית כהנוב', sessions: 10, startDate: '2025-06-10', price: 1000, day: 'שלישי', time: '13:00' },
    { id: 11, lessonName: 'אימון סיבולת', teacher: 'איילה ברזילי', sessions: 12, startDate: '2025-06-11', price: 1200, day: 'רביעי', time: '15:00' },
    { id: 12, lessonName: 'אימון משקולות', teacher: 'זהבה צוקרמן', sessions: 8, startDate: '2025-06-12', price: 800, day: 'חמישי', time: '17:00' },
    { id: 13, lessonName: 'אימון קרוספיט', teacher: 'לאה פרידמן', sessions: 10, startDate: '2025-05-02', price: 1000, day: 'שישי', time: '19:00' }
]; 

router.get('/', (req, res) => {
    res.json(lessons);
});

router.get('/:id', (req, res) => {
    const lessonId = Number(req.params.id);
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
        res.json(lesson);
    } else {
        res.status(404).json({ error: 'Lesson not found' });
    }
});

module.exports = router;