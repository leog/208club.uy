import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

export enum Status {
  'subscribed' = 'subscribed',
  'unsubscribed' = 'unsubscribed',
  'cleaned' = 'cleaned',
  'pending' = 'pending',
  'transactional' = 'transactional',
}

export default async function subscribe(req, res) {
  const { email } = req.body

  if (!email)
    return res.status(400).json({ error: 'Es necesario tu correo electrónico' })

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: Status.subscribed,
    })
    return res.status(201).json({ error: null })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
