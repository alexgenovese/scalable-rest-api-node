
const _get = async (req, res, next) => {
	console.log('getting request')

    try {
        
        // something with DB or other services
        res.status(200).json({ response: true, message: 'Finding user data...' })
        
    } catch (error) {
        res.status(500).json({ response: false, message: error.name + ' ' + error.message })
    }
}


module.exports = {
    _get: _get
}