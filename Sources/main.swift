import Kitura
import HeliumLogger
import SwiftyJSON

// Initialize HeliumLogger
HeliumLogger.use()

// Create a new router
let router = Router()

// Allow for serving up static files found in the public directory
router.all("/", middleware: StaticFileServer(path: "./public/public"))

let user1: [String: String] = [
    "id" : "1zzz",
    "fistName" : "Enrico"
]

let user2: [String: String] = [
    "id" : "2yyy",
    "fistName" : "Michela"
]

let user3: [String: String] = [
    "id" : "3xxx",
    "fistName" : "Raffaele"
]

var users = [user1, user2, user3]


router.get("/users") {
    request, response, next in
    response.send(json: JSON(users))
    next()
}


router.post("/users") {
    request, response, next in
    //TODO Send sample users 

    response.status(.OK)
    next()
}



// Handle HTTP GET requests to /
// router.get("/") {
//     request, response, next in
//     response.send("Hello, World!")
//     next()
// }

// Add an HTTP server and connect it to the router
Kitura.addHTTPServer(onPort: 8090, with: router)

// Start the Kitura runloop (this call never returns)
Kitura.run()
