import Kitura
import HeliumLogger

// Initialize HeliumLogger
HeliumLogger.use()

// Create a new router
let router = Router()

// Allow for serving up static files found in the public directory
router.all("/", middleware: StaticFileServer(path: "./public/public"))

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
