const path = require('path');
const studentController = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'student.html'));
}

module.exports = studentController;
