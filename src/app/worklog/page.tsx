"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CornerDownLeft } from "lucide-react";
import backgroundImage from '@/app/svg/bg.svg';

export default function Worklog() {

    return(<div className="py-16 px-8 md:px-16 bg-center bg-gray-100" style={{ backgroundSize: '250px', backgroundImage: `url(${backgroundImage.src})`, backgroundBlendMode: 'overlay', backgroundColor: 'rgba(243, 244, 246, 0.5)' }}>

        <h1 className="font-bold tracking-tighter text-4xl md:text-7xl text-center">Munkanapló</h1>

        <div className="mt-8">
            <p className="text-3xl font-bold tracking-tight pl-2"><span className="bg-slate-700 p-2 rounded-tr-xl rounded-tl-xl text-white">H2</span></p>
        </div>

        <Card className="flex-1 overflow-x-auto mt-2">
            <Table>
              <TableHeader>
                <TableRow className="h-12">
                  <TableHead className="whitespace-nowrap">Kezdet</TableHead>
                  <TableHead className="whitespace-nowrap">Időtartam (óra)</TableHead>
                  <TableHead className="whitespace-nowrap">Résztvevők</TableHead>
                  <TableHead className="whitespace-nowrap">Tevékenység</TableHead>
                  <TableHead className="whitespace-nowrap">Eredmény</TableHead>


                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-02</TableCell>
                  <TableCell className="whitespace-nowrap">1</TableCell>
                  <TableCell className="whitespace-nowrap">Vay Dominika, Tóth Mátyás</TableCell>
                  <TableCell className="whitespace-nowrap">Bevezetés megfogalmazása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 1. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-02</TableCell>
                  <TableCell className="whitespace-nowrap">2.5</TableCell>
                  <TableCell className="whitespace-nowrap">Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">A termék leírásának összesítése, stratégiai feltételezések és kritikus függőségek meghatározása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 4., 4.3 pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-03</TableCell>
                  <TableCell className="whitespace-nowrap">1.5</TableCell>
                  <TableCell className="whitespace-nowrap">Ardon Milán</TableCell>
                  <TableCell className="whitespace-nowrap">A platform helyzetének feltérképezése, célcsoportok és versenytársak megismerése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 2.3. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-04</TableCell>
                  <TableCell className="whitespace-nowrap">2.5</TableCell>
                  <TableCell className="whitespace-nowrap">Gombkötő Ábel Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Az alkalmazás informatikai piaci elhelyezkedése, az üzleti modell meghatározása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 2., 2.1. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-05</TableCell>
                  <TableCell className="whitespace-nowrap">2</TableCell>
                  <TableCell className="whitespace-nowrap">Ardon Milán, Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Minőségi elvárások átgondolása és megfogalmazása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 7. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-07</TableCell>
                  <TableCell className="whitespace-nowrap">3</TableCell>
                  <TableCell className="whitespace-nowrap">Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Potenciális kockázatok és kihívások proaktív kezelése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 9. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-08</TableCell>
                  <TableCell className="whitespace-nowrap">1.5</TableCell>
                  <TableCell className="whitespace-nowrap">Ardon Milán, Vay Dominika</TableCell>
                  <TableCell className="whitespace-nowrap">A platform szükséges dokumentációinak és technikai leírásainak összesítése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 8. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-10</TableCell>
                  <TableCell className="whitespace-nowrap">2</TableCell>
                  <TableCell className="whitespace-nowrap">Tóth Mátyás, Ardon Milán</TableCell>
                  <TableCell className="whitespace-nowrap">Végső funkciók összesítése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 5. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-11</TableCell>
                  <TableCell className="whitespace-nowrap">1.5</TableCell>
                  <TableCell className="whitespace-nowrap">Tóth Mátyás</TableCell>
                  <TableCell className="whitespace-nowrap">A probléma elemezése és előnyök meghatározása, funkciók komponensekre bontása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 4.1., 4.2. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-11</TableCell>
                  <TableCell className="whitespace-nowrap">1.5</TableCell>
                  <TableCell className="whitespace-nowrap">Vay Dominika, Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Az ideális felhasználói környezet meghatározása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 3.3. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-11</TableCell>
                  <TableCell className="whitespace-nowrap">3</TableCell>
                  <TableCell className="whitespace-nowrap">Vay Dominika, Gombkötő Ábel Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Problémák keresése a piac általunk célzott területein</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 2.2. pontja</TableCell>
                </TableRow>
            
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-12</TableCell>
                  <TableCell className="whitespace-nowrap">1</TableCell>
                  <TableCell className="whitespace-nowrap">Vay Dominika</TableCell>
                  <TableCell className="whitespace-nowrap">A felmerülő költségek megbecslése, a termék telepítéséhez szükséges adatok öszzegzése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 4.4., 4.5. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-12</TableCell>
                  <TableCell className="whitespace-nowrap">2</TableCell>
                  <TableCell className="whitespace-nowrap">Tóth Mátyás</TableCell>
                  <TableCell className="whitespace-nowrap">Az eltárolandó adatok definiálása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 3.4., 3.5. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-12</TableCell>
                  <TableCell className="whitespace-nowrap">2</TableCell>
                  <TableCell className="whitespace-nowrap">Ardon Milán</TableCell>
                  <TableCell className="whitespace-nowrap">A célközönség és a projekt megvalósítóinak meghatározása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 3., 3.1., 3.2. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-12</TableCell>
                  <TableCell className="whitespace-nowrap">2.5</TableCell>
                  <TableCell className="whitespace-nowrap">Gombkötő Ábel Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">A termék fizikai és szoftveres korlátainak megfogalmazása</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 6. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-13</TableCell>
                  <TableCell className="whitespace-nowrap">1.5</TableCell>
                  <TableCell className="whitespace-nowrap">Kovács Attila Marcell</TableCell>
                  <TableCell className="whitespace-nowrap">Szakszavak pontos jelentésének kifejtése</TableCell>
                  <TableCell className="whitespace-nowrap">Vízió dokumentum 10. pontja</TableCell>
                </TableRow>
                <TableRow className="h-auto md:h-12">
                  <TableCell className="whitespace-nowrap">2024-10-13</TableCell>
                  <TableCell className="whitespace-nowrap">1</TableCell>
                  <TableCell className="whitespace-nowrap">Tóth Mátyás</TableCell>
                  <TableCell className="whitespace-nowrap">A csapat által beküldött anyagok egyesítése, a weboldal frissítése</TableCell>
                  <TableCell className="whitespace-nowrap">A vízió dokumentum létrejötte</TableCell>
                </TableRow>
               
              </TableBody>
            </Table>
          </Card>


        <div className="mt-8">
            <p className="text-3xl font-bold tracking-tight pl-2"><span className="bg-slate-700 p-2 rounded-tr-xl rounded-tl-xl text-white">H3</span></p>
        </div>

        <Card className="flex-1 overflow-x-auto mt-2">
            <Table>
              <TableHeader>
                <TableRow className="h-12">
                  <TableHead className="whitespace-nowrap">Kezdet</TableHead>
                  <TableHead className="whitespace-nowrap">Időtartam (óra)</TableHead>
                  <TableHead className="whitespace-nowrap">Résztvevők</TableHead>
                  <TableHead className="whitespace-nowrap">Tevékenység</TableHead>
                  <TableHead className="whitespace-nowrap">Eredmény</TableHead>


                </TableRow>
              </TableHeader>
              <TableBody>
               
              </TableBody>
            </Table>
          </Card>

          <div className="mt-8">
            <p className="text-3xl font-bold tracking-tight pl-2"><span className="bg-slate-700 p-2 rounded-tr-xl rounded-tl-xl text-white">H4</span></p>
        </div>

        <Card className="flex-1 overflow-x-auto mt-2">
            <Table>
              <TableHeader>
                <TableRow className="h-12">
                  <TableHead className="whitespace-nowrap">Kezdet</TableHead>
                  <TableHead className="whitespace-nowrap">Időtartam (óra)</TableHead>
                  <TableHead className="whitespace-nowrap">Résztvevők</TableHead>
                  <TableHead className="whitespace-nowrap">Tevékenység</TableHead>
                  <TableHead className="whitespace-nowrap">Eredmény</TableHead>


                </TableRow>
              </TableHeader>
              <TableBody>
               
              </TableBody>
            </Table>
          </Card>

          <div className="mt-8">
            <p className="text-3xl font-bold tracking-tight pl-2"><span className="bg-slate-700 p-2 rounded-tr-xl rounded-tl-xl text-white">H5</span></p>
        </div>

        <Card className="flex-1 overflow-x-auto mt-2">
            <Table>
              <TableHeader>
                <TableRow className="h-12">
                  <TableHead className="whitespace-nowrap">Kezdet</TableHead>
                  <TableHead className="whitespace-nowrap">Időtartam (óra)</TableHead>
                  <TableHead className="whitespace-nowrap">Résztvevők</TableHead>
                  <TableHead className="whitespace-nowrap">Tevékenység</TableHead>
                  <TableHead className="whitespace-nowrap">Eredmény</TableHead>


                </TableRow>
              </TableHeader>
              <TableBody>
               
              </TableBody>
            </Table>
          </Card>

          <Button onClick={() => (window.location.href = "/")} className="fixed top-5 left-5 p-3 rounded-xl bg-slate-700 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1.5px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300  focus:outline-none hover:bg-slate-500 z-50"><CornerDownLeft size={16} className="mr-2" />Vissza a főoldalra</Button>

    </div>);

}