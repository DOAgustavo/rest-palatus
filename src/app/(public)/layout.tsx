// filepath: c:\src\rest-palatus\src\app\(public)\layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}