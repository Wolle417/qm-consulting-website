// API Route for Readiness Check lead submission to MailerLite
// Sends email + custom fields (score, maturity level, weakest category)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, companyName, companySize, totalScore, maturityLevel, weakestCategory } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  // MailerLite account ID (same as global config in _app.js)
  const accountId = '2045707';

  try {
    // ─── Approach 1: MailerLite webforms endpoint ───
    // Uses the same pattern as subscribe.js but with custom fields
    // You'll need to create a dedicated form in MailerLite for the assessment
    // and replace this form code with the actual one
    const formCode = 'yoP2S5'; // TODO: Create dedicated MailerLite form for assessment & replace

    const formParams = new URLSearchParams({
      'fields[email]': email,
      'ml-submit': '1',
      'anticsrf': 'true',
    });

    // Add custom fields if available
    if (companyName) formParams.append('fields[company]', companyName);
    if (companySize) formParams.append('fields[company_size]', companySize);
    if (totalScore !== undefined) formParams.append('fields[assessment_score]', String(totalScore));
    if (maturityLevel) formParams.append('fields[maturity_level]', maturityLevel);
    if (weakestCategory) formParams.append('fields[weakest_category]', weakestCategory);

    const response = await fetch(
      `https://static.mailerlite.com/webforms/submit/${formCode}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formParams.toString(),
      }
    );

    const text = await response.text();
    console.log('[Assessment] MailerLite status:', response.status);
    console.log('[Assessment] MailerLite response:', text.substring(0, 300));

    if (response.ok || text.includes('success') || text.includes('thank')) {
      return res.status(200).json({ success: true });
    }

    // ─── Approach 2: Fallback JSONP endpoint ───
    const altParams = new URLSearchParams({
      'fields[email]': email,
    });
    if (companyName) altParams.append('fields[company]', companyName);

    const altResponse = await fetch(
      `https://assets.mailerlite.com/jsonp/${accountId}/forms/176954877878994663/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: altParams.toString(),
      }
    );

    console.log('[Assessment] Alt response status:', altResponse.status);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('[Assessment] MailerLite error:', error);
    return res.status(500).json({ 
      error: 'Subscription failed', 
      details: error.message 
    });
  }
}
