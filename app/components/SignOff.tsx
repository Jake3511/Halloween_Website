import Image from "next/image"

export default function SignOff({ attending }: { attending: boolean }) {
  return (
    <div className="fixed inset-0">
      <Image
        src="/Meghan_and_Jake_house_empty.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className="relative z-10 flex h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="relative h-48 w-48 overflow-hidden rounded-lg">
          <Image
            src={attending ? "/nikki.jpeg" : "/abby_lee.webp"}
            alt={attending ? "Nikki" : "Abby Lee"}
            fill
            sizes="12rem"
            className="object-cover"
          />
        </div>

        <p className="max-w-[16rem] rounded-lg bg-black/60 px-4 py-3 font-brookshire text-base text-white">
          {attending
            ? "Thanks for attending, can't wait to see you there!"
            : "Thanks for the RSVP; if you change your mind, you can always resubmit!"}
        </p>
      </div>
    </div>
  )
}