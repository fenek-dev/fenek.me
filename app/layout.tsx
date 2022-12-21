import 'styles/dist.css';
import 'styles/globals.css';
import { Folder, Page } from 'shared';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Arthur Vorokov website" />
        <link rel="canonical" href="https://fenek.vercel.app" />
        <title>Fenek</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen w-full items-center justify-center bg-orange-100 p-4">
        <Folder>
          <Page>{children}</Page>
        </Folder>
      </body>
    </html>
  );
}
