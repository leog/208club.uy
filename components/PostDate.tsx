import { format, parseISO } from 'date-fns'
import esLocale from 'date-fns/locale/es'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy', { locale: esLocale })}</time>
}
