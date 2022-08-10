const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail')
const { check, validationResult } = require('express-validator')

const sendMessage = (email, name, text) => {
  sgMail.send({
    to: 'ZaneGitInit@gmail.com',
    from: email,
    subject: `${name} wants to hire you!`,
    text
  })
}

router.post(
  '/',
  [
    check('name', 'Please include a name/company').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('text', 'Please give me a brief idea of what you want')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // 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 Old

    try {
      sgMail.setApiKey(
        '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'
      )

      const { email, name, text } = req.body
      sendMessage(email, name, text)
      res.json({ msg: 'Message Sent!' })
    } catch (e) {
      console.log(e)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
