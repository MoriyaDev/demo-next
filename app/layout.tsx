// app/layout.tsx
import './globals.css'
import Header from '../components/Header' // ניצור קומפוננטה נפרדת

export const metadata = {
  title: 'Demo Next App',
  description: 'דוגמה ל-Next.js עם Header',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
