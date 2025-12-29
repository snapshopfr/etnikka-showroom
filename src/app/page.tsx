import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-md px-5 py-10">
      <header className="text-center">
        <h1 className="font-serif text-4xl">Etnikka</h1>
        <p className="mt-4 text-neutral-700">
          Découvrez nos créations et réservez votre visite au showroom.
        </p>
      </header>

      <div className="mt-10 grid gap-3">
        <Link
          href="/catalog"
          className="rounded-2xl bg-neutral-900 px-5 py-4 text-center text-white shadow"
        >
          Voir le catalogue
        </Link>

        <Link
          href="/book"
          className="rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-center shadow-sm"
        >
          Réserver un créneau
        </Link>
      </div>
    </main>
  );
}

