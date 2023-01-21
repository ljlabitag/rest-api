
export default function handler(req, res) {
    if (req.method !== "GET") {
        req.status(405).json({
            message: "Method Not Allowed"
        });
        return
    }
    
    res.status(200).json({test: "TRIPS!"});
}