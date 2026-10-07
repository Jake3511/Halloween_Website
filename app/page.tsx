import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="fixed inset-0">
      <Image
        src="/Meghan_and_Jake_house.jpg"
        alt="Event Flyer"
        fill
        priority
        sizes="100vw"
        className="object-fill"
      />
      <div className="absolute inset-x-0 top-[76%] flex flex-col items-center">
        <h1 className="font-brookshire font-semibold text-xl text-black">Will you be attending?</h1>
        <div className="font-brookshire flex gap-4 text-xl">
          <Link href="/rsvp?attending=true" className="active:text-purple-800 transition-colors duration-200 text-black">Yes</Link>
          <Link href="/rsvp?attending=false" className="active:text-purple-800 transition-colors duration-200 text-black">No</Link>
        </div>
      </div>
    </div>
  )
}