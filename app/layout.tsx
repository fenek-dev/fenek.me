import 'styles/dist.css';
import 'styles/globals.css';
import { Folder, Page } from 'shared';
import { Special_Elite } from '@next/font/google';
import cn from 'classnames';

const font = Special_Elite({ subsets: ['latin'], weight: '400' });

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
        <title>Fenek</title>
      </head>
      <body
        className={cn(
          'flex min-h-screen w-full items-center justify-center bg-orange-100 p-4',
          font.className,
        )}
      >
        <Folder>
          <Page>{children}</Page>
        </Folder>
      </body>
    </html>
  );
}
