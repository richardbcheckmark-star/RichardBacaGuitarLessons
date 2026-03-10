import { Suspense } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const NotFoundContent = () => (
  <section className="py-20">
    <Container>
      <div className="mx-auto max-w-xl rounded-2xl border border-brand-sand bg-white p-10 text-center shadow-soft">
        <h1 className="font-display text-4xl text-brand-ink">Page not found</h1>
        <p className="mt-3 text-sm text-brand-ink/75">
          The page you are looking for may have moved. Return home to continue browsing guitar lesson information.
        </p>
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand-pine">
          Back to home
        </Link>
      </div>
    </Container>
  </section>
);

const NotFoundPage = () => (
  <Suspense>
    <NotFoundContent />
  </Suspense>
);

export default NotFoundPage;
