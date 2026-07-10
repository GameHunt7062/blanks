import { Suspense } from 'react'
import VerifyClient from './VerifyClient'

export const metadata = {
  title: 'Verify Your Account',
  description: 'Complete one-time verification to access the Discord server.',
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const params = await searchParams
  const token = params?.token || ''
  return (
    <Suspense fallback={null}>
      <VerifyClient token={token} />
    </Suspense>
  )
}
