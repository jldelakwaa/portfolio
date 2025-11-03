import PrimaryButton from "@/app/_components/_common/primary-button";
import SecondaryButton from "@/app/_components/_common/secondary-button";

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
    >
        <div className="flex items-center mb-6">
          <span className="block w-12 h-0.5 bg-indigo-600 mr-3"></span>
          <h3 className="text-xl font-bold text-indigo-600">John Lester</h3>
        </div>

        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I&apos;m Lester.
        </h1>

        <h2 className="text-2xl text-gray-700 mb-6">
          Software Developer | Network Operations Specialist.
        </h2>

        <div className="flex gap-4">
          <PrimaryButton text="My Works" href="/projects" />
          <SecondaryButton text="Contact Me" href="/contact" />
        </div>
    </section>
  );
}
