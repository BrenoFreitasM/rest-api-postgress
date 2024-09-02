const signup = (req, res, next) => {
    res.json({
        status: 'Sucess',
        message: 'Signup route are working!'
    })
}

module.exports = { signup}