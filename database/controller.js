//Controller
import Users from "@/model/user"

//GET: http://localhost:3000/api/users
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})

        if(!users) return res.status(404).json({error: 'Data not found'})
        res.status(200).json(users)
    } catch (error) {
       res.status(404).json({error: "Error While Fetching User"}) 
    }
}

export async function getUser(req, res) {
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({error: "User not Selected"}) 
    } catch (error) {
     res.status(404).json({error: "Cannot get the User...!"})   
    }
};


//POST: http://localhost:3000/api/users
export async function postUser(req, res) {
    try {
        const formData = req.body;

        if(!formData) return res.status(404).json({error: 'Form Dat Not Provided'});
        Users.create(formData, function(err, data){
            return res.status(200).json(data);
        })   
    } catch (error) {
        return res.status(404).json({error}) 
    }
}

//PUT: http://localhost:3000/api/users/?id=123

export async function putUser(req, res) {
    try {
        const { userId }  = req.query;
        const formData = req.body;
        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        } 
        res.status(404).json({error: "User Not Selected...!"}) 
    } catch (error) {
        res.status(404).json({error: "Error While Updating Data...!"}) 
    }
}

//DELETE: http://localhost:3000/api/users/?id=123
export async function deleteUser(req, res) {
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }
        res.status(404).json({error: "Users not Selected"})
    } catch (error) {
        res.status(404).json({error: "Error While Deleting the User...!"}) 
    }
}