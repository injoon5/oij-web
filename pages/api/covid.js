export default async (req, res) => {
    try {
      const response = await fetch("https://apiv3.corona-live.com/domestic/live.json")

      return res.status(200).json(response.body)
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() })
    }
  }
  