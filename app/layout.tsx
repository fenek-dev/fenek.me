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
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fenek</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="flex w-full items-center justify-center bg-orange-100">
        <Folder>
          <Page>{children}</Page>
        </Folder>
      </body>
    </html>
  );
}
