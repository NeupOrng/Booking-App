import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingSection from "@/components/booking-section"
import EventInfoSection from "@/components/event-info-section"
import WorkshopTypesSection from "@/components/workshop-types-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BookingSection />
        <WorkshopTypesSection />
        <EventInfoSection />
      </main>
      <Footer />
    </>
  )
}

