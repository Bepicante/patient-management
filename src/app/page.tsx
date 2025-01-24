import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Patient Management System</h1>
        <div className="flex flex-col gap-4">
          <Link href="/patient-list">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Go to Patient List
            </button>
          </Link>
          {/*<Link href="/patient-details">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Go to Another Page
            </button>
          </Link>
          <Link href="/third-page">
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Go to Third Page
            </button>
          </Link>*/}
        </div>
      </main>
  );
}
