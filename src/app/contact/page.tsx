import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";

const contacts = [
  {
    name: "Mamadou Koné",
    phone: "+2250767317621",
  },
  {
    name: "Kerfala Savané",
    phone: "+2250779461412",
  },
  {
    name: "Seydou Eddu Diawara",
    phone: "+2250141093978",
  },
  {
    name: "Oumar Sylla",
    phone: "+2250566188708",
  },
];

const whatsappUrl = (phone: string) =>
  `https://wa.me/${phone.replace(/\D/g, "")}`;

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf5] text-[#263d35]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#ded7c7] bg-[#f8f5ec]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#d8ccb0]/60" />
        <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full border border-[#d8ccb0]/50" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a8659]">
            Parlons Islam
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Nous contacter
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b59a5b]" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#5c6963] sm:text-base">
            Une question, une suggestion, une contribution ou simplement
            l&apos;envie d&apos;échanger ? L&apos;équipe de Parlons Islam
            reste à votre écoute.
          </p>

        </div>
      </section>

      {/* EMAIL */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        <div className="mx-auto max-w-3xl rounded-2xl border border-[#ded7c7] bg-white p-7 shadow-[0_10px_35px_rgba(38,61,53,0.04)] sm:p-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f3efe4] text-[#80683e]">
                <Mail size={21} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a8659]">
                  Contact général
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  Écrivez-nous
                </h2>

                <p className="mt-1 text-sm text-[#69756f]">
                  Pour toute question ou proposition.
                </p>
              </div>

            </div>

            <a
              href="mailto:contact.parlonsislam@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#263d35] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#314d43]"
            >
              Nous écrire
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>

          </div>

          <p className="mt-6 border-t border-[#ebe6da] pt-5 text-sm text-[#69756f]">
            contact.parlonsislam@gmail.com
          </p>

        </div>

      </section>

      {/* ÉQUIPE */}
      <section className="border-y border-[#ded7c7] bg-[#f8f5ec]">

        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <div className="mb-10 text-center">

            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ccb0] bg-white text-[#80683e]">
              <Users size={19} strokeWidth={1.5} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a8659]">
              L&apos;équipe
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Échanger avec nous
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#69756f]">
              Vous pouvez également contacter directement l&apos;un des
              membres de l&apos;équipe via WhatsApp.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {contacts.map((contact) => (
              <div
                key={contact.phone}
                className="group flex items-center justify-between rounded-2xl border border-[#ded7c7] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(38,61,53,0.05)]"
              >

                <div>
                  <h3 className="font-semibold text-[#263d35]">
                    {contact.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#7a847f]">
                    WhatsApp
                  </p>
                </div>

                <a
                  href={whatsappUrl(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contacter ${contact.name} sur WhatsApp`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8ccb0] text-[#80683e] transition duration-300 hover:bg-[#f3efe4]"
                >
                  <MessageCircle size={19} strokeWidth={1.6} />
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SIGNATURE */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">

        <p
          dir="rtl"
          lang="ar"
          className="text-xl tracking-wide text-[#80683e] sm:text-2xl"
        >
          العلم · العمل · الإحسان
        </p>

        <div className="mx-auto mt-6 h-px w-12 bg-[#b59a5b]" />

        <p className="mt-6 text-sm italic text-[#69756f]">
          Servir Allah en servant Ses créatures.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#263d35] transition hover:text-[#80683e]"
        >
          Retour à l&apos;accueil
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </Link>

      </section>

    </main>
  );
}