const User = require('../models/users')

exports.addUser = async(req,res)=>{
    console.log(req.body);
    const user = await User.create(req.body);
    res.json(user)   
}

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Failed to get users:', error);
      res.status(500).json({ message: 'Failed to get users' });
    }
  };

  

  // exports.deleteUser = async (req, res) => {
  //   const  id  = req.params.id;
  // console.log(id);
  //   try {
  //     const deletedUser = await User.findOneAndDelete({ id: id });
  //     if (!deletedUser) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     res.json({ message: 'User deleted successfully' });
  //   } catch (error) {
  //     console.error('Failed to delete user:', error);
  //     res.status(500).json({ message: 'Failed to delete user' });
  //   }
  // };
  exports.removeUser= async (req, res) => {
    console.log("NODEEE");
    const  id  = req.params.userId;
  console.log(id);
    try {
      const deletedUser = await User.findOneAndDelete({ id: id });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  };
  

//   exports.getUserByName = async (req, res) => {
//     const { name } = req.params;
//     console.log(name)
  
//     try {
//       const user = await User.findOne({ name });
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       console.error('Failed to get user:', error);
//       res.status(500).json({ message: 'Failed to get user' });
//     }
//   };