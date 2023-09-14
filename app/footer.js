import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-solid border-slate-300 p-4 md:p-8 space-x-4">
      <Link
        href="https://www.linkedin.com/in/david-mould-b6731a21a/"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
      </Link>
      <Link href="https://twitter.com/DM12_51" target="_blank">
        <i className="fa-brands fa-twitter text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
      </Link>
      <Link href="https://github.com/DMould123" target="_blank">
        <i className="fa-brands fa-github text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
      </Link>
      <p class="text-500 text-lg font-bold">© David Mould 2023 ©</p>
    </footer>
  )
}

export default Footer
