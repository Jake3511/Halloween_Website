import Image from "next/image"

export default function Home() {
  return (
    <div className="fixed inset-0  h-screen w-screen">
      <Image
        src="/Meghan_and_Jake_house.jpg"
        alt="Event Flyer"
        width={0}
        height={0}
        fill
        priority
        sizes="100vh">
      </Image>
      <div className="absolute bottom-28 right-30 flex flex-col items-center">
        <h1 className="w-full font-brookshire font-semibold">Will you be attending?</h1>
        <div className="font-brookshire flex gap-4">
          <button className="active:text-purple-800 transition-colors duration-200">Yes</button>
          <button className="active:text-purple-800 transition-colors duration-200">No</button>
        </div>
      </div>
    </div>
  )}