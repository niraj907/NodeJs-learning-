const path = require('path');
const aboutController = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'about.html'));
}

module.exports = aboutController;
