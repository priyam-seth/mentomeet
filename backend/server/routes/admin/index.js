import express from 'express';

import User from '../../../database/models/users/index.js'

const router = express.Router();

function admin_check(req, res, next) {
    // API_KEY in body parameters in needed
    console.log("Admin check");

    if (req.body.API_KEY) {
        console.log("API Key Provided", req.body.API_KEY);

        // Change this API key and most probable store it in an environment variable
        if (req.body.API_KEY === 'Hello_World') {
            return next();
        } else {
            console.log("Incorrect API key")
            var err = new Error('Wrong API Key Provided');
            err.status = 404;
            return next(err);
        }

    } else {
        console.log("NO API Key provided");
        var err = new Error('No API Key Provided');
        err.status = 404;
        return next(err);
    }
}

router.post('/admin/users', admin_check, function (req, res) {
    /**
     * TAKE care of API_KEY check
     * Required Params
     *  skip: The number to skip to, for example if skip(40) then start from 41
     *  limit: The limit the number of user you want to
     * 
     * Default to 1 to 20 if not provided params
     * 
     * Return
     *  The data in json form of each user (See Users schema)
     * 
     * Returns an empty array if no user found 
     */
    console.log("Admin route!");

    let bodySkip = req.body.skip;
    let bodyLimit = req.body.limit;

    if (!bodySkip) {
        bodySkip = 0;
    }

    if (!bodyLimit) {
        bodyLimit = 20;
    }

    // console.log(bodySkip, bodyLimit);
    // MongoDB call
    User.find({}).skip(bodySkip).limit(bodyLimit).then(result => {
        // console.log(result);
        return res.json(result);
    }).catch(err => {
        return next(err);
    });
});

router.post('/admin/nusers', admin_check, (req, res) => {
    /**
     * Provides the current nummber of users
     * Stored in the Users doc
     * 
     * Params: API_KEY needed to make a request
     * 
     * return: error or { count: number_of_users (int) }
     */
    User.count({}, function(error, result) {
        if (error) {
            var err = new Error('Error');
            err.status = 404;
            return next(err);
        } else {
            return res.json({count: result});
        }
    });
});

export default router;
