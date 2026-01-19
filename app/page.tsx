import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center p-8 bg-white shadow-xl rounded-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        
        {/* Logo */}
        <Image
          className="dark:invert mb-6"
          src="/logo.png"
          alt="App logo"
          width={120}
          height={30}
          priority
        />

        <div className="w-full text-center sm:text-left mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            Welcome
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Please enter your details to sign in.</p>
        </div>

        {/* Login Form */}
        <form className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
            />
          </div>

          <button 
            type="submit"
            className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-black text-white font-medium transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        {/* <div className="mt-8 flex flex-col items-center gap-2 text-sm">
          <p className="text-zinc-500">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-semibold text-black dark:text-white underline-offset-4 hover:underline">
              Sign up
            </a>
          </p>
        </div> */}

      </main>
    </div>
  );
}