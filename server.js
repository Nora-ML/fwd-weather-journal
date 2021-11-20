var projectData = {};

/* ************* Server,Dependincies and general setting ******************/

/**setting express as Local server */
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.listen(port, lisening => {
    console.log('running local host port: ' + port);
})

/**Dependincies */
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

/* middleware */
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
/**adding static Website */
app.use(express.static('website'));

/* ************************* GET And POST routes *************************/

let array = [];


/**GET route API */

app.get('/all', (req, res) => {
    res.send(projectData);
})

/**POST MAIN route */

app.post('/add', (req, res) => {
    array=({
        dateP: req.body.dateZ,
        moodP: req.body.moodZ,
        zipP: 0,
        apiP: 0,
        tempP: 0,
        descripP: 0,
        locationP: 0
    });
    projectData = array;
});

/**POST route --ZIP*/
app.post('/addZip', (req, res) => {
    projectData.zipP = req.body.zipZ;
    projectData.apiP = req.body.apiZ;
    res.send(projectData);
})

/**POST route --weather*/
app.post('/addWeather', (req, res) => {
    projectData.tempP=req.body.tempZ;
    projectData.descripP=req.body.descripZ;
    projectData.locationP=req.body.locationZ;
    res.send(projectData);
})