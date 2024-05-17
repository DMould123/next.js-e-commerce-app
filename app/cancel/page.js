import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Payment Cancelled</h1>
      <img
        src="https://media.giphy.com/media/xT5LMYlZh1HfoOtS6Y/giphy.gif"
        alt="Cancelled GIF"
        className="w-96 h-96 mb-4"
      />
      <p className="text-lg mb-4">Oops! Your payment was cancelled.</p>
      <Link href={'/'}>
        <p className="text-blue-500 hover:underline">Back to Home</p>
      </Link>
    </div>
  )
}
