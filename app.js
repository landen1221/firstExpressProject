const express = require('express');
const { mean, median, mode } = require('./mathFuncs')
const ExpressError = require('./handleErrors')

const app = express();

app.use(express.json());

function checkUndefined(req) {
    if (!req.query.nums || ! req.query) {
        throw new ExpressError("No numbers provided", 400)
    }
}

function checkNotNumbers(arr) {
    for (let i=0; i<arr.length; i++) {
        let int = parseInt(arr[i])
        if (!int) {
            throw new ExpressError(`${arr[i]} is not a number`, 403)
        }
    }
}


app.get("/mean", (req, res, next) => {

    try {
        checkUndefined(req)

        let values = req.query.nums.split(',')
        checkNotNumbers(values)

        res.json({operation: 'mean', value: mean(values)})

    } catch(e) {
        next(e)
    }
})

app.get('/median', (req, res, next) => {
    try {
        checkUndefined(req)

        let values = req.query.nums.split(',')
        checkNotNumbers(values)

        res.json({operation: 'median', value: median(values)})

    } catch(e) {
        next(e)
    }
})

app.get('/mode', (req, res, next) => {
    try {
        checkUndefined(req)

        let values = req.query.nums.split(',')
        checkNotNumbers(values)

        res.json({operation: 'mode', value: mode(values)})

    } catch(e) {
        next(e)
    }
    

})

app.get('/all', (req, res, next) => {
    try {
        checkUndefined(req)

        let values = req.query.nums.split(',')
        checkNotNumbers(values)
        
        return res.json({operation: 'all', mean: mean(values), median:median(values), mode: mode(values)})

    } catch(e) {
        next(e)
    }
})

// handle 404 errors
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})
  
// handle all other errors
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
  });