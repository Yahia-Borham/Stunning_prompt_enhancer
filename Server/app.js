


const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" });
const express = require("express")
const router = express();
const cors = require("cors")
router.use(cors())
const promptEnhancerRoute = require("./Routes/promptEnhancerRoute")


router.use(express.json())





router.use("/promptEnhancer", promptEnhancerRoute)



let port = process.env.PORT
router.listen(port, async () => {

    console.log(`Server is running on port ${port}`)

})

