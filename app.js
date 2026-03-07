const express = require("express");
const app = express();
// const github_token="ghp_1234567890abcdefghijk";
app.get("/",(req,res)=>{
    res.status(200).json({
    message: "Hi world"
    });
});

if (require.main === module){
    app.listen(3000, ()=>{
        console.log("server is running on port 3000")

});
}
module.exports = app;
