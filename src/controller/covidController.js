const { connection } = require('../connector')

const getTotalRecovered = async (req, res) => {
    try {
        let Recovered = await collection_connection.aggregate([{
            $group: {
                _id: "total",
                recover: { $sum: '$recovered' }
            }
        }])
        res.status(200).json({ status: "Success", Recovered });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }

};


const getTotalActive = async (req, res) => {
    try {
        let Active = await collection_connection.aggregate([{

            $group: {
                _id: "total",
                active: {
                    $sum: { $subtract: ['$infected', '$recovered'] }
                }
            }
        }
        ])
        res.status(200).json({ status: "Success", Active });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }

};

const getTotalDeath = async (req, res) => {
    try {
        let Death = await collection_connection.aggregate([{
            $group: {
                _id: "total",
                death: { $sum: '$death' }
            }
        }])
        res.status(200).json({ status: "Success", Death });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }

};

const getHotspotStates = async (req, res) => {
    try{
        const hotspot=await connection.aggregate([
                { 
                    $project:{ 
                        _id:0,
                       state: 1,
                        rate:{$round:[{ $divide: [{ $subtract: ['$infected', '$recovered']}, "$infected" ] },4]} 
                    }
                 }
            ])
                    res.status(200).json({ status: "Success", hotspot });

    
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }

};

const getHealthyStates = async (req, res) => {
    try{
        const healthy=await connection.aggregate([
                { 
                    $project:
                     { 
                        _id:0,
                       state: 1,
                        mortality:{$round:[{ $divide: [ "$death", "$infected" ] },4]} 
                    }
                 }
        ])
        res.status(200).json({ status: "Success", healthy });

    } catch (error) {
        res.status(400).json({ status: "Failed", message: error.message })
    }

};

module.exports = { getTotalRecovered, getTotalActive, getTotalDeath, getHotspotStates, getHealthyStates };