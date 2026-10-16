import RootRedirect from "@/components/RootRedirect";

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 text-center">
      <RootRedirect />
      <noscript>
        <a href="/en">Continue in English</a>
      </noscript>
    </main>
  );
}
