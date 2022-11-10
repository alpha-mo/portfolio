import type { Actions } from '@sveltejs/kit'
import { fromForm, areOk, isOk } from '$utils/contact/contactFormUtils'

const res = await fetch('http://localhost:4000', {
  method: 'GET',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
})
const result = await res.json()
console.log(result)

// export const actions: Actions = {
//   default: async ({ request, fetch }) => {
//     console.log('actions in +page.ts invoked')
//     const formData = await request.formData()
//     const { name, message, email } = fromForm(formData)
//     let result: {}

//     if (areOk({ name, email, message })) {
//       const res = await fetch('http://localhost:4000', {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, message }),
//       })
//       result = await res.json()
//     } else {
//       return {
//         success: false,
//         msg: 'Bad Request',
//         nameErr: !isOk(name, false),
//         emailErr: !isOk(email, true),
//         messageErr: !isOk(message, false),
//         name,
//         email,
//         message,
//       }
//     }

//     return {
//       success: true,
//       result,
//     }
//   },
// }
