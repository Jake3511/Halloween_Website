import RsvpForm from "../components/RsvpForm";

export default async function RsvpPage({ searchParams }: {searchParams: Promise<{attending?: string}>}) {
    const { attending } = await searchParams
    return <RsvpForm attending={attending === "true"} />
}