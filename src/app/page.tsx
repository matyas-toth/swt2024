import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Palette, Grid2x2Plus, Braces, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl text-gray-800 font-bold text-center mb-8">Alt+F4 Alakulat - Az Azonnali Kilépők</h1>
      <div className="w-full max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1 p-4 md:p-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="h-12">
                  <TableHead className="whitespace-nowrap">Név</TableHead>
                  <TableHead className="whitespace-nowrap">Neptun kód</TableHead>
                  <TableHead className="whitespace-nowrap">Szerep</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">Tóth Mátyás</TableCell>
                  <TableCell className="whitespace-nowrap tracking-wider font-mono">OQH5NH</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      <HoverCard>
                        <HoverCardTrigger>
                          <Badge className="bg-gray-800 hover:bg-white hover:text-gray-800"><GraduationCap size={16} className="mr-1"></GraduationCap>Projektmenedzser</Badge>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          Projektmenedzser: Felelős a projekt tervezéséért és végrehajtásáért.
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger>
                          <Badge className="bg-sky-600 hover:bg-white hover:text-sky-600"><Braces size={16} className="mr-1"></Braces>Backend fejlesztő</Badge>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          Backend fejlesztő: A szerver oldali logika és adatbázis kezelés felelőse.
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">Ardon Milán</TableCell>
                  <TableCell className="whitespace-nowrap tracking-wider font-mono">E00XC3</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Badge className="bg-sky-600 hover:bg-white hover:text-sky-600"><Braces size={16} className="mr-1"></Braces>Backend fejlesztő</Badge>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Backend fejlesztő: A szerver oldali logika és adatbázis kezelés felelőse.
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">Vay Dominika</TableCell>
                  <TableCell className="whitespace-nowrap tracking-wider font-mono">VM3DIR</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Badge className="bg-pink-500 hover:bg-white hover:text-pink-500"><Palette size={16} className="mr-1"></Palette> Frontend fejlesztő</Badge>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Frontend fejlesztő: A felhasználói felület és kliens oldali funkcionalitás fejlesztője.
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap tracking-wider font-mono">SEGUV3</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Badge className="bg-pink-500 hover:bg-white hover:text-pink-500"><Palette size={16} className="mr-1"></Palette>Frontend fejlesztő</Badge>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Frontend fejlesztő: A felhasználói felület és kliens oldali funkcionalitás fejlesztője.
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">Gombkötő Ábel Marcell</TableCell>
                  <TableCell className="whitespace-nowrap tracking-wider font-mono">C67VWA</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Badge className="bg-emerald-400 hover:bg-white hover:text-emerald-400"><Grid2x2Plus size={16} className="mr-1"></Grid2x2Plus>UI/UX tervező</Badge>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        UI/UX tervező: A felhasználói élmény és felület tervezéséért felelős szakember.
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <Card className="flex-1 p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "H1", className: "bg-[linear-gradient(220.55deg,_#C5EDF5_0%,_#4A879A_100%)]", isReady: true },
                { text: "H2", className: "bg-[linear-gradient(220.55deg,_#4A879A_0%,_#C5EDF5_100%)]", isReady: false },
                { text: "H3", className: "bg-[linear-gradient(220.55deg,_#C5EDF5_0%,_#4A879A_100%)]", isReady: false },
                { text: "H4", className: "bg-[linear-gradient(220.55deg,_#4A879A_0%,_#C5EDF5_100%)]", isReady: false },
                { text: "H5", className: "bg-[linear-gradient(220.55deg,_#C5EDF5_0%,_#4A879A_100%)]", isReady: false },
                { text: "Munkanapló", className: "bg-[linear-gradient(220.55deg,_#4A879A_0%,_#C5EDF5_100%)]", isReady: false }
              ].map((item) => (
                <div key={item.text} className="relative">
                  <Button
                    size="lg"
                    className={`w-full rounded-lg h-16 md:h-24 text-lg md:text-xl transition-opacity duration-300 hover:opacity-80 ${item.className}`}
                  >
                    {item.text}
                  </Button>
                  {item.isReady && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
