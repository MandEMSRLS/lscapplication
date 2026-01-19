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
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LSC Name : </label>
              <input
                type="text"
                placeholder="LSC Name"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Date Of Established :</label>
              <input
                type="date"
                placeholder="LSC Established"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Name Of Operator :</label>
              <input
                type="number"
                placeholder="Number of Operator"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Name Of Staff Engage :</label>
              <input
                type="number"
                placeholder="Number of Staff Engage"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Contact Detail :</label>
              <input
                type="number"
                placeholder="Contact Detail"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Have Building :</label>
              <select name="" id="" className="h-11 w-full rounded-lg border border-zinc-300">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>

            </div>
            <div className="p-4">
              <label className="text-sm font-medium" >Have Furniture :</label>
              <select name="" id="" className="h-11 w-full rounded-lg border border-zinc-300">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className=" p-4">
              <label className="text-sm font-medium" >Service Provided :</label>
              <input
                type="text"
                placeholder="Service Provided"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>

            <div className="p-4">
              <label className="text-sm font-medium" >Contact Email Address :</label>
              <input
                type="email"
                placeholder="Contact Email"
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
              <label className="text-sm font-medium" > CLF Name :</label>
              <input
                type="text"
                placeholder="CLF Name"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > CLF Code :</label>
              <input
                type="text"
                placeholder="CLF Code"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > CLF Formation :</label>
              <input
                type="text"
                placeholder="CLF Formation"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > No of LSC Established :</label>
              <input
                type="number"
                placeholder="No of LSC Established"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            Address Detail :
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className=" p-4">
              <label className="text-sm font-medium" > District :</label>
              <input
                type="text"
                placeholder="District"
                className="h-11 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:focus:ring-white transition-all"
              />
            </div>
            <div className="p-4">
              <label className="text-sm font-medium" > Block :</label>
              <input
                type="text"
                placeholder="Block"
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
        </form>
      </main>
    </div>
  );
}