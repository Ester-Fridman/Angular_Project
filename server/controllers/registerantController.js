const express = require('express');
const router = express.Router();

const registrants = [
    { fullName: 'אביגיל לוי', phone: '050-1234567', idNumber: '123456789', lessonId: 1, price: 1200, paid: true },
    { fullName: 'אורית כהן', phone: '050-2345678', idNumber: '987654321', lessonId: 2, price: 1000, paid: false },
    { fullName: 'גלית ישראלי', phone: '050-3456789', idNumber: '111222333', lessonId: 3, price: 1500, paid: true },
    { fullName: 'ליאת ברקוביץ', phone: '050-4567890', idNumber: '444555666', lessonId: 4, price: 800, paid: true },
    { fullName: 'אפרת דוידי', phone: '050-5678901', idNumber: '777888999', lessonId: 5, price: 1000, paid: false },
    { fullName: 'ענת פרידמן', phone: '050-6789012', idNumber: '222333444', lessonId: 6, price: 1200, paid: true },
    { fullName: 'שירה מלמד', phone: '050-7890123', idNumber: '888999000', lessonId: 7, price: 1000, paid: true },
    { fullName: 'דפנה רוזנבלום', phone: '050-8901234', idNumber: '999000111', lessonId: 8, price: 1400, paid: false },
    { fullName: 'אילנה גולן', phone: '050-9012345', idNumber: '333444555', lessonId: 9, price: 600, paid: true },
    { fullName: 'רבקה בן דוד', phone: '050-0123456', idNumber: '101202303', lessonId: 10, price: 1000, paid: false },
    { fullName: 'אביטל צור', phone: '050-1122334', idNumber: '445566778', lessonId: 11, price: 1200, paid: true },
    { fullName: 'חגית כהנוב', phone: '050-2233445', idNumber: '556677889', lessonId: 12, price: 800, paid: true },
    { fullName: 'אדוה שטרן', phone: '050-3344556', idNumber: '667788990', lessonId: 13, price: 1000, paid: false },
    { fullName: 'שני פיין', phone: '050-4455667', idNumber: '778899001', lessonId: 1, price: 1200, paid: true },
    { fullName: 'אורנה הרשקוביץ', phone: '050-5566778', idNumber: '889900112', lessonId: 2, price: 1000, paid: true },
    { fullName: 'נועה ברזילי', phone: '050-6677889', idNumber: '990011223', lessonId: 3, price: 1500, paid: false },
    { fullName: 'מאיה בן יעקב', phone: '050-7788990', idNumber: '001122334', lessonId: 4, price: 800, paid: true },
    { fullName: 'הילה צוקרמן', phone: '050-8899001', idNumber: '112233445', lessonId: 5, price: 1000, paid: false },
    { fullName: 'יערה ליפשיץ', phone: '050-9900112', idNumber: '223344556', lessonId: 6, price: 1200, paid: true },
    { fullName: 'לירון גולדשטיין', phone: '050-1011122', idNumber: '334455667', lessonId: 7, price: 1000, paid: true },
    { fullName: 'אורלי דגן', phone: '050-1212121', idNumber: '445566778', lessonId: 8, price: 1400, paid: false },
    { fullName: 'שירן לוי', phone: '050-2323232', idNumber: '556677889', lessonId: 9, price: 600, paid: true },
    { fullName: 'איילת רוזן', phone: '050-3434343', idNumber: '667788990', lessonId: 10, price: 1000, paid: true },
    { fullName: 'דנה ברק', phone: '050-4545454', idNumber: '778899001', lessonId: 11, price: 1200, paid: false },
    { fullName: 'קרן נחום', phone: '050-5656565', idNumber: '889900112', lessonId: 12, price: 800, paid: true },
    { fullName: 'אור ברקוביץ', phone: '050-6767676', idNumber: '990011223', lessonId: 13, price: 1000, paid: true },
    { fullName: 'תמר גולד', phone: '050-7878787', idNumber: '001122334', lessonId: 1, price: 1200, paid: false },
    { fullName: 'ליאורה שרון', phone: '050-8989898', idNumber: '112233445', lessonId: 2, price: 1000, paid: true },
    { fullName: 'אביגיל וולף', phone: '050-9090909', idNumber: '223344556', lessonId: 3, price: 1500, paid: true },
    { fullName: 'אילנה הררי', phone: '050-1112223', idNumber: '334455667', lessonId: 4, price: 800, paid: false },
    { fullName: 'רונית צור', phone: '050-2223334', idNumber: '445566778', lessonId: 5, price: 1000, paid: true },
    { fullName: 'אביטל כהן', phone: '050-3334445', idNumber: '556677889', lessonId: 6, price: 1200, paid: true },
    { fullName: 'אורית לוי', phone: '050-4445556', idNumber: '667788990', lessonId: 7, price: 1000, paid: false },
    { fullName: 'גלית רוזן', phone: '050-5556667', idNumber: '778899001', lessonId: 8, price: 1400, paid: true },
    { fullName: 'ליאת ברק', phone: '050-6667778', idNumber: '889900112', lessonId: 9, price: 600, paid: true },
    { fullName: 'אפרת נחום', phone: '050-7778889', idNumber: '990011223', lessonId: 10, price: 1000, paid: false },
    { fullName: 'ענת אורן', phone: '050-8889990', idNumber: '001122334', lessonId: 11, price: 1200, paid: true },
    { fullName: 'שירה גולד', phone: '050-9991011', idNumber: '112233445', lessonId: 12, price: 800, paid: true },
    { fullName: 'דפנה שרון', phone: '050-1011123', idNumber: '223344556', lessonId: 13, price: 1000, paid: false },
    { fullName: 'אילנה וולף', phone: '050-1122335', idNumber: '334455667', lessonId: 1, price: 1200, paid: true },
    { fullName: 'רבקה הררי', phone: '050-2233446', idNumber: '445566778', lessonId: 2, price: 1000, paid: true },
    { fullName: 'אביגיל צור', phone: '050-3344557', idNumber: '556677889', lessonId: 3, price: 1500, paid: false },
    { fullName: 'חגית כהן', phone: '050-4455668', idNumber: '667788990', lessonId: 4, price: 800, paid: true },
    { fullName: 'אדוה לוי', phone: '050-5566779', idNumber: '778899001', lessonId: 5, price: 1000, paid: false },
    { fullName: 'שני רוזן', phone: '050-6677880', idNumber: '889900112', lessonId: 6, price: 1200, paid: true },
    { fullName: 'אור ברק', phone: '050-7788991', idNumber: '990011223', lessonId: 7, price: 1000, paid: true }
];

router.get('/', (req, res) => {
    res.json(registrants);
});

router.get('/:idNumber', (req, res) => {
    const registrantId = req.params.idNumber;
    const registrant = registrants.find(r => r.idNumber === registrantId);
    if (registrant) {
        res.json(registrant);
    } else {
        res.status(404).json({ error: 'Registrant not found' });
    }
});

module.exports = router;