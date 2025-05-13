const express = require('express');
const router = express.Router();

const staff = [
    { id: 1, fullName: 'שרה כהן', phone: '050-1111111', idNumber: '123456789', role: 'מורה', password: 'pass123' },
    { id: 2, fullName: 'דינה לוי', phone: '050-2222222', idNumber: '987654321', role: 'מזכירה', password: 'pass456' },
    { id: 3, fullName: 'מיכל רוזן', phone: '052-3333333', idNumber: '111222333', role: 'מורה', password: 'pass789' },
    { id: 4, fullName: 'חנה ברק', phone: '053-4444444', idNumber: '444555666', role: 'מורה', password: 'pass101' },
    { id: 5, fullName: 'אסתר נחום', phone: '054-5555555', idNumber: '777888999', role: 'מזכירה', password: 'pass202' },
    { id: 6, fullName: 'רחל אורן', phone: '055-6666666', idNumber: '222333444', role: 'מורה', password: 'pass303' },
    { id: 7, fullName: 'מלכה גולד', phone: '056-7777777', idNumber: '888999000', role: 'מזכירה', password: 'pass404' },
    { id: 8, fullName: 'יעל שרון', phone: '057-8888888', idNumber: '999000111', role: 'מורה', password: 'pass505' },
    { id: 9, fullName: 'חיה וולף', phone: '058-9999999', idNumber: '333444555', role: 'מורה', password: 'pass606' },
    { id: 10, fullName: 'אלישבע הררי', phone: '059-1010101', idNumber: '101202303', role: 'מזכירה', password: 'pass707' },
    { id: 11, fullName: 'מירה צור', phone: '050-1122334', idNumber: '445566778', role: 'מורה', password: 'pass808' },
    { id: 12, fullName: 'טובה כהן', phone: '050-2233445', idNumber: '556677889', role: 'מזכירה', password: 'pass909' },
    { id: 13, fullName: 'נעמה שטרן', phone: '050-3344556', idNumber: '667788990', role: 'מורה', password: 'pass010' },
    { id: 14, fullName: 'עליזה פיין', phone: '050-4455667', idNumber: '778899001', role: 'מורה', password: 'pass111' },
    { id: 15, fullName: 'דליה הרשקוביץ', phone: '050-5566778', idNumber: '889900112', role: 'מזכירה', password: 'pass212' },
    { id: 16, fullName: 'שולמית כהנוב', phone: '050-6677889', idNumber: '990011223', role: 'מורה', password: 'pass313' },
    { id: 17, fullName: 'איילה ברזילי', phone: '050-7788990', idNumber: '001122334', role: 'מורה', password: 'pass414' },
    { id: 18, fullName: 'נעמי בן יעקב', phone: '050-8899001', idNumber: '112233445', role: 'מזכירה', password: 'pass515' },
    { id: 19, fullName: 'זהבה צוקרמן', phone: '050-9900112', idNumber: '223344556', role: 'מורה', password: 'pass616' },
    { id: 20, fullName: 'לאה פרידמן', phone: '050-1011122', idNumber: '334455667', role: 'מורה', password: 'pass717' }
];

router.get('/staff', (req, res) => {
  res.json(staff);
});

router.get('/:idNumber', (req, res) => {
    const staffId = req.params.idNumber;
    const staffMember = staff.find(s => s.idNumber === staffId);
    if (staffMember) {
        res.json(staffMember);
    } else {
        res.status(404).json({ error: 'Staff member not found' });
    }
}
);

router.post('/login', (req, res) => {
    const { username, password } = req.body;  
    const staffMember = staff.find(u => u.fullName === username && u.password === password);
    
    if (staffMember) {
      res.json({success: true, role: staffMember.role});
    } else {
      res.status(401).json({success: false, message: 'Invalid username or password'});
    }
  });

module.exports = router;