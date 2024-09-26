const allStudents = (req, res) => { 
    res.send('<h1>All students</h1>');
  }
  
  const deleteAll = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    if(id == 10){
      res.send(`This student with ID ${id} has not been deleted`);
    } else {
      res.send(`This student with ID ${id} has been deleted successfully`);
    }
  }
  
  module.exports = { allStudents, deleteAll };
  