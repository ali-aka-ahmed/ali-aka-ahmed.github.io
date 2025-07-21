export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get email from request body
  const { email } = req.body;

  // Validate email
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Add contact to Loops
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        mailingLists: {
          [process.env.LOOPS_LIST]: true
        }
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Successfully added email to Loops:', email);
      return res.status(200).json({ success: true, message: 'Email added successfully' });
    } else {
      const errorData = await response.text();
      console.error('Loops API error:', response.status, errorData);
      return res.status(500).json({ error: 'Failed to add email to list' });
    }
  } catch (error) {
    console.error('Network error when adding to Loops:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 