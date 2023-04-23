import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <Head>
        <title>avantgrogg</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute top-0 right-0 p-4 space-x-4">
        <a
          href="mailto:doug@avantgrogg.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          email
        </a>
        <a
          href="https://github.com/avantgrogg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          github
        </a>
      </header>

      <main className="w-full">
        <img
          src="/16-bit-developer.png"
          alt="My Portfolio"
          className="mx-auto w-1/6 object-contain"
        />
      </main>
    </div>
  );
}
