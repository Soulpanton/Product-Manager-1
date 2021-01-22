const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("your now inside the mainframe..."))
    .catch(err => console.log("MELTDOWN! MELTDOWN!  JUST kidding heres your error", err))
