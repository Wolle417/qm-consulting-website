// API Route for MailerLite subscription (bypasses CORS)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  // Form code from MailerLite: yoP2S5
  const formCode = 'yoP2S5';
  
  try {
    // Try the webforms submit endpoint
    const response = await fetch(
      `https://static.mailerlite.com/webforms/submit/${formCode}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'fields[email]': email,
          'ml-submit': '1',
          'anticsrf': 'true'
        }).toString(),
      }
    );

    console.log('MailerLite response status:', response.status);
    const text = await response.text();
    console.log('MailerLite response:', text.substring(0, 500));

    // Check various success indicators
    if (response.ok || text.includes('success') || text.includes('thank')) {
      return res.status(200).json({ success: true });
    }

    // If first endpoint fails, try alternative
    const altResponse = await fetch(
      'https://assets.mailerlite.com/jsonp/2045707/forms/176954877878994663/subscribe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `fields[email]=${encodeURIComponent(email)}`,
      }
    );

    console.log('Alt response status:', altResponse.status);
    
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('MailerLite error:', error);
    return res.status(500).json({ error: 'Subscription failed', details: error.message });
  }
}
