import type { Actions } from '@sveltejs/kit'
import { fromForm, areOk, isOk } from '$utils/contact/contactFormUtils'

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    console.log('testing async in +page.server.ts')

    const formData = await request.formData()
    const { name, message, email } = fromForm(formData)
    let result: {}

    if (areOk({ name, email, message })) {
      const res = await fetch('http://localhost:4000', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      result = await res.json()
    } else {
      return {
        success: false,
        msg: 'Bad Request',
        nameErr: !isOk(name, false),
        emailErr: !isOk(email, true),
        messageErr: !isOk(message, false),
        name,
        email,
        message,
      }
    }

    return {
      success: true,
      result,
    }
  },
}
