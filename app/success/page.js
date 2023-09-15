import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Payment Successful</h1>
      <img
        src="https://media.giphy.com/media/Od0QRnzwRBYmDU3eEO/giphy.gif"
        alt="Success GIF"
        className="w-96 h-96 mb-4"
      />
      <p className="text-lg mb-4">
        Congratulations! Your payment was successful.
      </p>
      <Link href={'/'}>
        <p className="text-blue-500 hover:underline">Back to Home</p>
      </Link>
    </div>
  )
}
