import Link from "next/link";
import { NAV_LINKS } from "../features/clinic/data/clinicaData";

export const metadata = {
  title: "Página no encontrada | Dental Clinic",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-4 py-20">
      <div className="w-full max-w-lg text-center">
        <p className="text-[9rem] font-light leading-none text-haze">404</p>
        <h1 className="mt-4 text-display font-light text-ink">Esta página no existe</h1>
        <p className="mx-auto mt-5 max-w-sm text-base leading-relaxed text-mist">
          El enlace que seguiste ya no lleva a ningún lado. Te dejamos por dónde seguir.
        </p>

        <nav className="mt-10 flex flex-wrap justify-center gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-graphite transition-colors hover:border-haze hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="mt-8 inline-block text-sm font-medium text-brand hover:underline"
        >
          O escríbenos y te ayudamos
        </Link>
      </div>
    </main>
  );
}
