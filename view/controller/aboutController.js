const path = require('path'); 
const aboutController = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
 };
module.exports = aboutController;