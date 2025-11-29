import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import SubmissionForm from "../forms/SubmissionForm";

export default function Landing() {
  return (
    <div className="bg-[#FFF9EA]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* CATEGORIES SECTION */}
      <Categories />

      {/* FORM SECTION */}
      <section className="mt-16">
        <SubmissionForm />
      </section>
    </div>
  );
}
