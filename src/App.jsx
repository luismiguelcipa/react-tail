import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4">
        <div className="flex justify-between pt-8">
          <h1 className="uppercase text-2xl font-semibold text-white tracking-[0.3em]" >Todo</h1>
          <button><MoonIcon/></button>

        </div>
        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..." />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">

        <div className="bg-white rounded-md ">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">Complete Online JavaScript Course</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">Jog Around the park 3x</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">10 minutes meditation</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">Read for 1 hour</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">Pick up groceries</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 rounded-full border-2" flex-none></button>
            <p className="grow text-gray-500 text-sm">Complete Todo App on Frontend Mentor</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
          
          <section className="flex justify-between px-4 py-4 text-gray-400 text-sm">
            <span >5 Items Left</span>
            <button>Clear Complete</button>
          </section>

          </div>

          
          <div className="bg-white rounded-md container mx-auto px-4 py-4 mt-8">
          <section className="flex justify-center gap-4">
          <button className="text-blue-500 font-semibold">All</button>
          <button className="text-gray-400 font-semibold">Active</button>
          <button className="text-gray-400 font-semibold">Complete</button>
        </section>
          </div>
       
       
        <p className="flex justify-center py-8 text-gray-500">Drag and drop to reorder list</p>
      </main>



    </div>
  )
}
export default App;