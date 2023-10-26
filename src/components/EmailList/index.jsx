import emails from '../../database/emails.json'
import { EmailListItem } from './EmailListItem'

export const EmailList = ({ setOpenEmail }) => {
  return (
    <>
      <div className="relative overflow-y-scroll grow">
        {emails.map((email) => {
          return (
            <>
              <EmailListItem
                key={email.id}
                email={email}
                onClick={() => setOpenEmail(email)}
              />
            </>
          )
        })}
      </div>
    </>
  )
}
