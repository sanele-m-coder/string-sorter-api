export default function handler(req, res) {
  // Only allow POST requests as per requirements
  if (req.method === 'POST') {
    const { data } = req.body;

    if (typeof data !== 'string') {
      return res.status(400).json({ error: "Input must be a string." });
    }

    const sortedArray = data.split('').sort();
    return res.status(200).json({ word: sortedArray });
  } else {
    // Return error if someone tries a GET request
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}