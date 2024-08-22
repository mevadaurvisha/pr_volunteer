let systemStorage = [];
let count = 1;

const defaultController = (req, res) => {
    res.render('index',{row:systemStorage});
}

const viewController = (req, res) => {
    console.log('view page');
    res.render('viewlist', {row:systemStorage})
}
const addController = (req, res) => {
    console.log('add>>' ,req.body.name);
    const registrationList = {
        id: count++,
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        skill: req.body.skill
    }
    systemStorage = [...systemStorage , registrationList]
    res.redirect('/');
}
const editController = (req , res)=> {
    console.log("edit controller>>>");
    const id = req.params.id;
    const SingleRec = systemStorage.find((todo)=> todo.id == id);
    console.log('SingleRec',SingleRec);
    res.render('edit',{SingleRec});
    
}
const updateController = (req, res) => {
    console.log('updated>>' ,req.body.name);
    let updatedtodo = systemStorage.map((todo)=> {
        if(todo.id == req.params.id){
            return{
                ...todo,
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
                skill: req.body.skill
            }
        }
        else{
            return todo;
        }
    })
    systemStorage = updatedtodo;
    console.log('update>>>', systemStorage);
    
    res.redirect('/viewlist');
}

const deletedController = (req, res) => {
    console.log('delete>>' ,req.params.id);
    systemStorage = systemStorage.filter((todo)=> todo.id != req.params.id);
    res.redirect('/viewlist');
}


module.exports = {defaultController,addController,viewController,editController,updateController,deletedController};