import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '계정 삭제 요청 | Avoca',
    description: 'Avoca 앱의 계정 및 개인정보 삭제를 요청하실 수 있습니다. 영업일 기준 3일 이내에 처리됩니다.',
}

export default function DeleteAccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
