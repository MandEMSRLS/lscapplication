// export default function NewLscPage() {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">About Us</h1>
//       <p className="mt-4 text-gray-600">This page was created automatically by adding a folder!</p>
//       <a href="/" className="text-blue-500 underline mt-4 block">Go back home</a>
//     </div>
//   )
// }

import Image from "next/image";
export default function NewLscPage() {
  return (
    <div className="flex w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center p-8 m-2 bg-white shadow-xl rounded-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">

        {/* Logo */}
        <Image
          className="dark:invert mb-4"
          src="/logo.png"
          
          alt="App logo"
          width={120}
          height={30}
          priority
        />

        <div className="w-full text-center sm:text-left mb-6">
          <h1 className="text-2xl text-center font-bold tracking-tight text-black dark:text-zinc-50">
            Request New LSC
          </h1>
        </div>

        {/* request New LSC Form */}


        <form className="flex w-full flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            LSC Basic Detail :
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-4">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LSC Name : <span className="text-red-400">*</span> </label>
              <input
                type="text"
                placeholder="LSC Name"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
                required
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Date Of Established : <span className="text-red-400">*</span></label>
              <input
                type="date"
                placeholder="LSC Established"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Name Of Operator : <span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="Name of Operator"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Name Of Staff Engage : <span className="text-red-400">*</span></label>
              <input
                type="number"
                placeholder="Number of Staff Engage"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Contact Detail : <span className="text-red-400">*</span></label>
              <input
                type="number"
                placeholder="Contact Detail"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Have Building : <span className="text-red-400">*</span></label>
              <select name="" id="" className="h-11 w-full rounded-lg border border-zinc-300" required>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>

            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Have Furniture : <span className="text-red-400">*</span></label>
              <select name="" id="" className="h-11 w-full rounded-lg border border-zinc-300" required>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className=" p-4">
              <label className="text-sm font-medium" >Service Provided :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="Service Provided"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>

            <div className="p-4">
              <label className="text-sm font-medium" >Contact Email Address : <span className="text-red-400">*</span></label>
              <input
                type="email"
                placeholder="Contact Email"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Latitude :</label>
              <input
                type="text"
                placeholder="Latitude"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Longitude :</label>
              <input
                type="text"
                placeholder="Longitude"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            CLF Detail :
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-4">
              <label className="text-sm font-medium" > CLF Name :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="CLF Name"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > CLF Code :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="CLF Code"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > CLF Formation :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="CLF Formation"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > No of LSC Established :<span className="text-red-400">*</span></label>
              <input
                type="number"
                placeholder="No of LSC Established"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            Address Detail :
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className=" p-4">
              <label className="text-sm font-medium" > District :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="District"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Block :<span className="text-red-400">*</span></label>
              <input
                type="text"
                placeholder="Block"
                required
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > GP :</label>
              <input
                type="text"
                placeholder="GP"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Village :</label>
              <input
                type="text"
                placeholder="Village"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Address :</label>
              <input
                type="text"
                placeholder="Landmark"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            Bank Detail :
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-4">
              <label className="text-sm font-medium" > Bank Name :</label>
              <input
                type="text"
                placeholder="Bank Name"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Account Number :</label>
              <input
                type="text"
                placeholder="Account Number"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >IFSC:</label>
              <input
                type="text"
                placeholder="IFSC"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Branch Name :</label>
              <input
                type="text"
                placeholder="Branch Name"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-black text-white font-medium transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
           Submit
          </button>
        </form>
      </main>
    </div>
  );
}