import Image from "next/image";
import "./index.css";

export default function TailwindLab() {
  return (
    <main className="p-8 font-sans">
      <h1 className="mb-8 text-4xl font-bold">Tailwind CSS</h1>

      <section id="wd-tailwind-spacing">
        <h2 className="text-3xl">Margin</h2>
        <div className="mb-4 bg-blue-200 p-4">Bottom margin of four with padding all around.</div>
        <div className="ms-4 me-8 bg-blue-200 p-4">Start margin of four and end margin of eight.</div>
        <h2 className="mt-8 text-3xl">Padding</h2>
        <div className="mb-4 bg-green-200 ps-2 pt-4 pb-8">Start padding two, top four, bottom eight.</div>
        <div className="bg-green-200 p-6">Padding all around of six.</div>
        <div id="wd-ai-spacing" className="mt-6 ps-8 pb-4 bg-rose-200">Directional spacing utilities in one sample.</div>
      </section>

      <hr className="my-8" />
      <section id="wd-tailwind-typography">
        <h2 className="text-3xl">Font Size</h2>
        <p className="text-sm">Small text.</p><p className="text-base">Base text.</p><p className="text-lg">Large text.</p>
        <p className="text-xl">Extra large text.</p><p className="text-2xl">Two times extra large text.</p><p className="text-3xl">Three times extra large text.</p>
        <h2 className="mt-4 text-3xl">Font Weight</h2>
        <p className="font-thin">Thin</p><p className="font-light">Light</p><p className="font-normal">Normal</p><p className="font-medium">Medium</p>
        <p className="font-semibold">Semibold</p><p className="font-bold">Bold</p><p className="font-extrabold">Extra bold</p><p className="font-black">Black</p>
        <p id="wd-ai-type" className="text-2xl font-medium">A second sample size and weight.</p>
      </section>

      <hr className="my-8" />
      <section id="wd-tailwind-background-colors">
        <h2 className="mb-4 text-3xl font-bold">Background Colors</h2>
        <div className="mb-4 bg-red-500 p-4 text-white">Red background.</div>
        <div className="mb-4 bg-green-500 p-4 text-white">Green background.</div>
        <div className="mb-4 bg-blue-500 p-4 text-white">Blue background.</div>
        <div className="mb-4 bg-yellow-500 p-4 text-black">Yellow background.</div>
        <div id="wd-ai-bg" className="mb-4 bg-indigo-700 p-4 text-white">A darker background shade with contrasting text.</div>
      </section>

      <hr className="my-8" />
      <section id="wd-tailwind-responsive-breakpoint">
        <h2 className="text-2xl font-bold">Responsive breakpoints</h2>
        <div className="bg-red-500 p-4 text-white md:bg-green-500">Red below md, green at md and up.</div>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-responsive-show-hide">
        <h2 className="text-2xl font-bold">Show and hide by width</h2>
        <p className="block bg-red-200 p-2 md:hidden">Small screen</p>
        <p className="hidden bg-green-200 p-2 md:block">Large screen</p>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-responsive-flex">
        <h2 className="text-2xl font-bold">Stack, then side by side</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="bg-red-500 p-4 text-white">One</div><div className="bg-green-500 p-4 text-white">Two</div><div className="bg-blue-500 p-4 text-white">Three</div>
        </div>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-responsive-grid">
        <h2 className="text-2xl font-bold">Grid columns by breakpoint</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => <div key={index} className="bg-blue-300 p-3 text-center">{String(index + 1).padStart(2, "0")}</div>)}
        </div>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-responsive-spacing-text">
        <h2 className="bg-yellow-200 p-2 text-base md:p-8 md:text-2xl">Responsive spacing and text size</h2>
        <p className="bg-yellow-100 p-2 text-base md:p-8 md:text-2xl">Padding and font size grow at md.</p>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-responsive-design">
        <h2 className="text-3xl font-bold">Responsive Design</h2>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
          <div className="md:flex">
            <div className="relative md:w-48 md:shrink-0">
              <Image className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48" src="/images/reactjs.jpg" width={300} height={240} alt="React logo" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-5xl font-bold">R</span><span className="mt-2 text-2xl font-semibold">React JS</span>
              </div>
            </div>
            <div className="min-w-0 p-8 lg:p-12">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Professional Courses</div>
              <a href="#" className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">Rocket Propulsion Fundamentals</a>
              <p className="mt-2 text-gray-500">An in-depth study of the fundamentals of rocket propulsion.</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-filters">
        <h2 className="text-2xl font-bold">Blurs</h2>
        <div className="flex gap-2">
          <Image className="w-1/4 blur-none" src="/images/reactjs.jpg" width={300} height={180} alt="React logo without blur" />
          <Image className="w-1/4 blur-sm" src="/images/reactjs.jpg" width={300} height={180} alt="React logo with slight blur" />
          <Image className="w-1/4 blur-lg" src="/images/reactjs.jpg" width={300} height={180} alt="React logo with strong blur" />
          <Image className="w-1/4 blur-2xl" src="/images/reactjs.jpg" width={300} height={180} alt="React logo with maximum blur" />
        </div>
        <h3 className="mt-6 text-lg font-bold">Grayscale and brightness</h3>
        <div id="wd-ai-filters" className="flex gap-2">
          <Image className="w-1/4 grayscale" src="/images/reactjs.jpg" width={300} height={180} alt="Grayscale React logo" />
          <Image className="w-1/4 grayscale-0" src="/images/reactjs.jpg" width={300} height={180} alt="Color React logo" />
          <Image className="w-1/4 brightness-50" src="/images/reactjs.jpg" width={300} height={180} alt="Dim React logo" />
          <Image className="w-1/4 brightness-150" src="/images/reactjs.jpg" width={300} height={180} alt="Bright React logo" />
        </div>
      </section>
      <hr className="my-8" />
      <section id="wd-tailwind-grids">
        <h2 className="text-2xl font-bold">Tailwind Grids</h2>
        <h3 className="mt-6 text-lg font-bold">4 Columns Grid</h3>
        <div className="grid grid-cols-4 gap-4">{Array.from({ length: 9 }, (_, index) => <div key={index} className="bg-blue-300 p-3 text-center">{String(index + 1).padStart(2, "0")}</div>)}</div>
        <h3 className="mt-6 text-lg font-bold">3 Columns Grid</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-300 p-3 text-center">01</div><div className="bg-blue-300 p-3 text-center">02</div><div className="bg-blue-300 p-3 text-center">03</div>
          <div className="col-span-2 bg-blue-300 p-3 text-center">04</div><div className="bg-blue-300 p-3 text-center">05</div><div className="bg-blue-300 p-3 text-center">06</div><div className="col-span-2 bg-blue-300 p-3 text-center">07</div>
        </div>
        <div id="wd-tailwind-grid-system" className="mt-6">
          <h2 className="text-2xl font-bold">Grid system</h2>
          <div className="grid grid-cols-2 gap-2"><div className="bg-red-500 text-white"><h3 className="text-lg font-bold">Left half</h3></div><div className="bg-blue-500 text-white"><h3 className="text-lg font-bold">Right half</h3></div></div>
          <div className="mt-2 grid grid-cols-12 gap-2"><div className="col-span-4 bg-yellow-500"><h3 className="text-lg font-bold">One third</h3></div><div className="col-span-8 bg-green-500 text-white"><h3 className="text-lg font-bold">Two thirds</h3></div></div>
          <div className="mt-2 grid grid-cols-12 gap-2"><div className="col-span-2 bg-black text-white"><h3 className="text-lg font-bold">Sidebar</h3></div><div className="col-span-8 bg-gray-500 text-white"><h3 className="text-lg font-bold">Main content</h3></div><div className="col-span-2 bg-blue-400"><h3 className="text-lg font-bold">Sidebar</h3></div></div>
          <div id="wd-ai-grid" className="mt-2 grid grid-cols-12 gap-2"><div className="col-span-3 bg-rose-400">Three columns</div><div className="col-span-9 bg-cyan-700 text-white">Nine columns</div></div>
        </div>
      </section>
    </main>
  );
}