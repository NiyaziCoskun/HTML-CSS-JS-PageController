
const getLoginPage = (req,res) => {
    try {
        res.status(200).json({
            succeed: true,
            message : "Login Page"
        })
    } catch (err) {
        res.status(401).json({
            succeed: false,
            message: "Can't get Login Page",
            err
        })
    }
}

const getHomePage = (req,res) => {
    try {
        res.status(200).json({
            succeed: true,
            message : "Home Page"
        })
    } catch (err) {
        res.status(401).json({
            succeed: false,
            message: "Can't get Home Page",
            err
        })
    }
}

const getRegisterPage = (req,res) => {
    try {
        res.status(200).json({
            succeed: true,
            message : "Register Page"
        })
    } catch (err) {
        res.status(401).json({
            succeed: false,
            message: "Can't get Register Page",
            err
        })
    }
}





module.exports = {
    getLoginPage, getHomePage, getRegisterPageP
};