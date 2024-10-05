export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Portfolio Under Migration
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Hi! I&apos;m currently migrating my portfolio. Please check back soon!
      </p>
      <a
        href="/files/JulianOmodeyCV.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download My CV
      </a>
    </div>
  )
}
