/* eslint-disable jsx-a11y/anchor-has-content */
import Link from '@/components/Link'

import useSWR from 'swr'

const CovidCases = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('/api/covid', fetcher, { refreshInterval: 1000 * 60 * 5 })

  if (error) return 'Error!'
  if (!data) return 'Loading...'

  return data.live.today
}

export default CovidCases
