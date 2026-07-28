'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, X, X as CloseIcon } from 'lucide-react';

// TypeScript types for collection data
interface CollectionItem {
  collection: string;
  designNo: number;
  color: string;
  // sizeCm: string;
  quality: string;
  contents: string;
  stockRef: string;
  madeIn: string;
  notes: string;
  imageSrc: string;
}

// Collection data
const collectionsData: CollectionItem[] = [
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Canary",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80%  wool  20% Cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/2.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Espresso",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80% wool 20% Cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/3.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Nordic Pine ARS 1I16",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80% wool 20% Cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/4.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Nordic Sky ARS 2m-11",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80% Wool  20% Cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/5.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Walnut",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80% wool 20% Cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/6.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Mauve",
    // "sizeCm": "30x30",
    "quality": "Hand Loom",
    "contents": "80% wool ,20% Cotton",
    "stockRef": "ID.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/7.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Nordic Forest 1HI16",
    // "sizeCm": "30x30",
    "quality": "Hand Loom",
    "contents": "80% wool,20%Cotton",
    "stockRef": "ID.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/8.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Sage Mist",
    // "sizeCm": "30x30",
    "quality": "Hand Loom",
    "contents": "80% wool,20%Cotton",
    "stockRef": "ID.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/9.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Deep Fjord",
    // "sizeCm": "30x30",
    "quality": "Hand loom",
    "contents": "80%wool,20%cotton",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/10.jpg"
  },
  {
    "collection": "Eira",
    "designNo": 201,
    "color": "Navy",
    // "sizeCm": "30x30",
    "quality": "Hand Loom",
    "contents": "80% wool ,20% Cotton",
    "stockRef": "ID.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/11.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Sand 4M15/G011",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID.210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/15.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Taupe gray IB20/D106",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID. 210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/16.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Royal blue 2J17/J126",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "Id.210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/17.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Moss 3C06/A051",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID.210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/18.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Rust 2D01/Aoo4",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID.210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/19.jpg"
  },
  {
    "collection": "Astra",
    "designNo": 210,
    "color": "Golden brawn AH05/A114",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID.210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/20.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Snow White",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/21.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "spring Green",
    // "sizeCm": "30x30 cm",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/22.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Rust & silver",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/23.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Sand",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/24.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Espresso",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID,211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/25.jpg"
  },
  {
    "collection": "Strata",
    "designNo": 206,
    "color": "White & Jute",
    // "sizeCm": "30x30",
    "quality": "Dual weave Loop, Cut",
    "contents": "Jute & tensil",
    "stockRef": "CL.206",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/26.jpg"
  },
  {
    "collection": "Strata",
    "designNo": 206,
    "color": "Cocoa & Jute",
    // "sizeCm": "30x30",
    "quality": "Dual weave Loop, Cut",
    "contents": "Jute & tensil",
    "stockRef": "CL.206",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/27.jpg"
  },
  {
    "collection": "Strata",
    "designNo": 206,
    "color": "Burgundy & Jute",
    // "sizeCm": "30x30",
    "quality": "Dual weave Loop, Cut",
    "contents": "Jute & Tencil",
    "stockRef": "CL.206",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/28.jpg"
  },
  {
    "collection": "Strata",
    "designNo": 206,
    "color": "Warm Sand & Jute",
    // "sizeCm": "30x30",
    "quality": "Dual weave Loop, Cut",
    "contents": "Jute & Tencil",
    "stockRef": "CL.206",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/29.jpg"
  },
  {
    "collection": "Strata",
    "designNo": 205,
    "color": "Rust & Jute ARS H011",
    // "sizeCm": "30x30",
    "quality": "Dual weave Loop, Cut",
    "contents": "Jute & Tencil",
    "stockRef": "CL.201",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/30.jpg"
  },
  {
    "collection": "Niva",
    "designNo": 202,
    "color": "Oat & Linen",
    // "sizeCm": "30x30",
    "quality": "Hand Loom",
    "contents": "Wool & Linen",
    "stockRef": "JA.202",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/31.jpg"
  },
  {
    "collection": "Fjord Line",
    "designNo": 102,
    "color": "Snow & Moss",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool",
    "stockRef": "JA.102",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/32.jpg"
  },
  {
    "collection": "Fjord Line",
    "designNo": 102,
    "color": "Rust & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool",
    "stockRef": "JA.103",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/33.jpg"
  },
  {
    "collection": "Fjord Line",
    "designNo": 102,
    "color": "Cocoa &Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool",
    "stockRef": "JA.104",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/34.jpg"
  },
  {
    "collection": "Fjord Line",
    "designNo": 102,
    "color": "Sun & Snow",
    // "sizeCm": "30x33",
    "quality": "Flatweave",
    "contents": "100% Wool",
    "stockRef": "JA.105",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/35.jpg"
  },
  {
    "collection": "Fjord Line",
    "designNo": 102,
    "color": "Ink & Snow",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool",
    "stockRef": "",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/36.jpg"
  },
  {
    "collection": "Dota",
    "designNo": 104,
    "color": "Sand & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool & 20% Cotton",
    "stockRef": "CL.104",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/37.jpg"
  },
  {
    "collection": "Dota",
    "designNo": 104,
    "color": "Rose & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool & 20% Cotton",
    "stockRef": "CL.104",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/38.jpg"
  },
  {
    "collection": "Dota",
    "designNo": 104,
    "color": "Sage & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool & 20% Cotton",
    "stockRef": "CL.104",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/39.jpg"
  },
  {
    "collection": "Dota",
    "designNo": 104,
    "color": "Walnut & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "100% Wool & 20% Cotton",
    "stockRef": "s",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/40.jpg"
  },
  {
    "collection": "Dota",
    "designNo": 104,
    "color": "Rose",
    // "sizeCm": "30x30",
    "quality": "Flat weave",
    "contents": "80% wool , 20% Cotton",
    "stockRef": "CL.104",
    "madeIn": "",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/41.jpg"
  },
  {
    "collection": "Nordic outdoor",
    "designNo": 111,
    "color": "Walnut",
    // "sizeCm": "30x30 cm",
    "quality": "Flatweave",
    "contents": "100% Recycled Pet yarn",
    "stockRef": "MC.111",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/42.jpg"
  },
  {
    "collection": "Nordic outdoor",
    "designNo": 111,
    "color": "Pearl White",
    // "sizeCm": "30x30 cm",
    "quality": "Flatweave",
    "contents": "100% Recycled Pet yarn",
    "stockRef": "MC.111",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/43.jpg"
  },
  {
    "collection": "Nordic outdoor",
    "designNo": 111,
    "color": "Sage",
    // "sizeCm": "30x30 cm",
    "quality": "Flatweave",
    "contents": "100% Recycled Pet yarn",
    "stockRef": "MC.111",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/44.jpg"
  },
  {
    "collection": "Luma,optiona fringes",
    "designNo": 101,
    "color": "Rust red",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "80% Wool & 20% Cotton",
    "stockRef": "CL.101",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/45.jpg"
  },
  {
    "collection": "Luma optional fringes",
    "designNo": 101,
    "color": "Terracotta",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "80% Wool & 20% Cotton",
    "stockRef": "CL.101",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/46.jpg"
  },
  {
    "collection": "Luma,optional fringes",
    "designNo": 101,
    "color": "Warm ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "80% Wool & 20% Cotton",
    "stockRef": "CL.101",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/47.jpg"
  },
  {
    "collection": "? Ny bild skall tas Astra",
    "designNo": 210,
    "color": "Golden brawn AH05/A114",
    // "sizeCm": "30x30",
    "quality": "Hand Loom, Loop & Cut",
    "contents": "Wool & Tencil & 20% Cotton",
    "stockRef": "ID. 210",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/20.jpg"// collections color match - 20 number collection
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Snow White",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/21.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Spring green",
    // "sizeCm": "30c30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/22.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Ocean Bllue",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tencil",
    "stockRef": "ID.211",
    "madeIn": "Indian",
    "notes": "No picture",
    "imageSrc": "/collection/All_New_Collection_img/51.jpg"
  },
  {
    "collection": "Elara",
    "designNo": 211,
    "color": "Blue",
    // "sizeCm": "30x30",
    "quality": "Hand Loom Loop / Cut",
    "contents": "Wool & Tensil",
    "stockRef": "",
    "madeIn": "",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/53.jpg"
  },
  {
    "collection": "Moonstone",
    "designNo": 203,
    "color": "Pearl & Mocha",
    // "sizeCm": "30x30",
    "quality": "Hand Loom over tufted",
    "contents": "Wool & Tencil",
    "stockRef": "KE. 203",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/52.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Kamel",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/54.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Mocha & Latte",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jut",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/55.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Oat",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/56.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Charcoal & Ivory",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/57.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Sand & ceries",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/58.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Wine  & Walnut",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/59.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Greige",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/60.jpg"
  },
  {
    "collection": "Root",
    "designNo": 301,
    "color": "Gloden Flax",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 knots",
    "contents": "100% Jute",
    "stockRef": "AN. 301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/61.jpg"
  },
  {
    "collection": "Terra optional Fringes",
    "designNo": 103,
    "color": "Snow",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "Jute",
    "stockRef": "MC.103",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/62.jpg"
  },
  {
    "collection": "Terra optional Fringes",
    "designNo": 103,
    "color": "Jute & Ivory",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "Jute",
    "stockRef": "MC.103",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/63.jpg"
  },
  {
    "collection": "Terra optinal Fringes",
    "designNo": 103,
    "color": "Ocean Blue",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "Jute",
    "stockRef": "MC.103",
    "madeIn": "Indian",
    "notes": "new picture",
    "imageSrc": "/collection/All_New_Collection_img/64.jpg"
  },
  {
    "collection": "Terra optional Fringes",
    "designNo": 103,
    "color": "Marine",
    // "sizeCm": "30x30",
    "quality": "Flatweave",
    "contents": "Jute",
    "stockRef": "MC.103",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/65.jpg"
  },
  {
    "collection": "Terra optional Fringes",
    "designNo": 103,
    "color": "Waknut & Olive",
    // "sizeCm": "30x30",
    "quality": "Flat weave",
    "contents": "Jute",
    "stockRef": "MC.310",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/66.jpg"
  },
  {
    "collection": "Grid",
    "designNo": 401,
    "color": "Black, Ivory & Gold dust",
    // "sizeCm": "30x30",
    "quality": "Hand Tufted",
    "contents": "Wool & Cotton",
    "stockRef": "KE.401",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/67.jpg"
  },
  {
    "collection": "Grid",
    "designNo": 401,
    "color": "Champagne & Golden dust",
    // "sizeCm": "30x30",
    "quality": "Hand Tufted",
    "contents": "Wool & Cotton",
    "stockRef": "KE.401",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/68.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Chacoal",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool  20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/69.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Ocean",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool  20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/70.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Forest Mist",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool 20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/71.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Peach",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool 20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/72.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Taupe",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool 20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/73.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Pistachio",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool 20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/74.jpg"
  },
  {
    "collection": "Alda",
    "designNo": 205,
    "color": "Ash Fade",
    // "sizeCm": "25x60",
    "quality": "Hand Loom",
    "contents": "80% Wool 20% Cotton",
    "stockRef": "ID.205",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/75.jpg"
  },
  {
    "collection": "Structure",
    "designNo": 303,
    "color": "Dusty sage",
    // "sizeCm": "30x30",
    "quality": "Nepal 60 Knots",
    "contents": "80%Wool20%Cotton",
    "stockRef": "KE.303",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/76.jpg"
  },
  {
    "collection": "Solen",
    "designNo": 305,
    "color": "Walnut & Oat",
    // "sizeCm": "30x30",
    "quality": "Nepal 80 Knotes",
    "contents": "80%Wool20%Cotton",
    "stockRef": "KE.305",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/77.jpg"
  },
  {
    "collection": "Embla",
    "designNo": 301,
    "color": "Mocha & Oat",
    // "sizeCm": "30x30",
    "quality": "Nepal 100 Knotes",
    "contents": "80%Wool20%Cotton",
    "stockRef": "KE.301",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/78.jpg"
  },
  {
    "collection": "Meadow",
    "designNo": 106,
    "color": "Multicolor",
    // "sizeCm": "60x60",
    "quality": "Flat weave",
    "contents": "80%Wool20%Linen",
    "stockRef": "JA.106",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/79.jpg"
  },
  {
    "collection": "Meadow",
    "designNo": 106,
    "color": "Multicolor",
    // "sizeCm": "60x60",
    "quality": "Flat weave",
    "contents": "80%Wool20%Linen",
    "stockRef": "Ja.106",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/80.jpg"
  },
  {
    "collection": "Eld",
    "designNo": 107,
    "color": "Multicolor",
    // "sizeCm": "60x60",
    "quality": "Flat weave",
    "contents": "80%Wool20%Linen",
    "stockRef": "ID.107",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/81.jpg"
  },
  {
    "collection": "Shadow",
    "designNo": 108,
    "color": "Graphite fade",
    // "sizeCm": "30x60",
    "quality": "Flat weave",
    "contents": "Wool",
    "stockRef": "MC.108",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/82.jpg"
  },
  {
    "collection": "Field",
    "designNo": 212,
    "color": "NordicPine",
    // "sizeCm": "60x90",
    "quality": "Hand Loom",
    "contents": "80%Wool20%Cotton",
    "stockRef": "ID.212",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/83.jpg"
  },
  {
    "collection": "Facet",
    "designNo": 109,
    "color": "Sage",
    // "sizeCm": "30x30",
    "quality": "Flat weave",
    "contents": "80%Wool20%Cotton",
    "stockRef": "RA109",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/84.jpg"
  },
  {
    "collection": "Horizon",
    "designNo": 110,
    "color": "Deep Ocean & Ivory",
    // "sizeCm": "30x60",
    "quality": "Flat weave",
    "contents": "80%Wool20%Cotton",
    "stockRef": "CL.110",
    "madeIn": "Indian",
    "notes": "",
    "imageSrc": "/collection/All_New_Collection_img/85.jpg"
  }
];

export default function CollectionsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [selectedQuality, setSelectedQuality] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Get unique collections and qualities for filters
  const uniqueCollections = useMemo(() => {
    const collections = new Set(collectionsData.map(item => item.collection));
    return ['All', ...Array.from(collections).sort()];
  }, []);

  const uniqueQualities = useMemo(() => {
    const qualities = new Set(collectionsData.map(item => item.quality));
    return ['All', ...Array.from(qualities).sort()];
  }, []);

  // Filter collections based on search and filters
  const filteredCollections = useMemo(() => {
    return collectionsData.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.contents.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCollection = selectedCollection === 'All' || item.collection === selectedCollection;
      const matchesQuality = selectedQuality === 'All' || item.quality === selectedQuality;

      return matchesSearch && matchesCollection && matchesQuality;
    });
  }, [searchQuery, selectedCollection, selectedQuality]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCollection('All');
    setSelectedQuality('All');
  };

  const openQuoteModal = (item: CollectionItem) => {
    setSelectedItem(item);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `I'm interested in ${item.collection} - ${item.color} (Design No: ${item.designNo})`
    });
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after showing success
    setTimeout(() => {
      closeQuoteModal();
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#F8F7F4] text-[#0e0e0e] font-sans min-h-screen">
      {/* Header */}
      <header className="relative text-center mt-20 overflow-hidden py-[clamp(60px,8vw,100px)] px-2 md:px-[clamp(24px,6vw,80px)]">
        <div className="relative z-[1] max-w-[840px] mx-auto">
          <p className="font-sans text-[12px] font-medium tracking-[0.3em] uppercase text-[#2D2D2D] mb-7">
            North Expression · Heritage Craft
          </p>
          <h1 className="font-serif font-light text-[clamp(36px,4vw,72px)] text-[#2D2D2D] leading-[1.05] tracking-[-0.01em] mb-6 italic">
            Collections <em className="italic text-[#2D2D2D]">List</em>
          </h1>
          <p className="font-sans font-light text-[18px] text-[#6B6B6B] max-w-3xl mx-auto tracking-[0.02em] leading-[1.7]">
            Browse our complete collection of handcrafted rugs, each defined by material honesty and structural clarity.
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/40 border border-black/5 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by collection, color, quality, or contents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
              />
            </div>

            {/* Collection Filter */}
            <div className="w-full lg:w-64">
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm cursor-pointer"
              >
                <option value="All">All Collections</option>
                {uniqueCollections.slice(1).map(collection => (
                  <option key={collection} value={collection}>{collection}</option>
                ))}
              </select>
            </div>

            {/* Quality Filter */}
            <div className="w-full lg:w-64">
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm cursor-pointer"
              >
                <option value="All">All Qualities</option>
                {uniqueQualities.slice(1).map(quality => (
                  <option key={quality} value={quality}>{quality}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={clearFilters}
              className="w-full lg:w-auto px-6 py-3 bg-[#9b8b7e] text-white rounded-md hover:bg-[#8a7a6d] transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCollections.length} of {collectionsData.length} items
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {filteredCollections.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-4">No collections found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-[#9b8b7e] hover:text-[#5d4037] underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCollections.map((item, index) => (
              <CollectionCard 
                key={`${item.collection}-${item.designNo}-${item.color}-${index}`} 
                item={item} 
                onRequestQuote={openQuoteModal}
              />
            ))}
          </div>
        )}
      </section>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#f2eae7] rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="font-serif text-2xl text-[#0e0e0e]">Request a Quote</h2>
              <button
                onClick={closeQuoteModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {selectedItem && (
                <div className="mb-6 p-4 bg-white/40 rounded-lg border border-black/5">
                  <h3 className="font-serif text-lg text-[#0e0e0e] mb-2">{selectedItem.collection}</h3>
                  <p className="text-sm text-gray-600">Color: {selectedItem.color}</p>
                  <p className="text-sm text-gray-600">Design No: {selectedItem.designNo}</p>
                  {/* <p className="text-sm text-gray-600">Size: {selectedItem.sizeCm}</p> */}
                </div>
              )}

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-[#0e0e0e] mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your quote request has been submitted successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/60 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8b7e]/30 focus:border-[#9b8b7e] text-sm resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeQuoteModal}
                      className="flex-1 px-4 py-3 border border-black/10 text-gray-700 rounded-md hover:bg-black/5 transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 bg-[#9b8b7e] text-white rounded-md hover:bg-[#8a7a6d] transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Collection Card Component
function CollectionCard({ item, onRequestQuote }: { item: CollectionItem; onRequestQuote: (item: CollectionItem) => void }) {
  return (
    <div className="bg-white/40 border border-black/5 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.color} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-2 bg-[#9b8b7e]/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧶</span>
            </div>
            <p className="text-xs text-gray-500 italic">Image coming soon</p>
          </div>
        )}
      </div>
      

      {/* Card Content */}
      <div className="p-4 space-y-3">

        {/* Collection Name */}
        <div>
          <h3 className="font-serif text-xl text-[#0e0e0e] font-medium">{item.collection}</h3>
          <p className="text-xs text-gray-500 mt-1">Design No: {item.designNo}</p>
        </div>

        {/* Color */}
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Color:</span>
          <span className="text-sm text-gray-800">{item.color}</span>
        </div>

        {/* Size */}
        {/* <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Size:</span>
          <span className="text-sm text-gray-800">{item.sizeCm}</span>
        </div> */}

        {/* Quality */}
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Quality:</span>
          <span className="text-sm text-gray-800">{item.quality}</span>
        </div>

        {/* Contents */}
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Material:</span>
          <span className="text-sm text-gray-800">{item.contents}</span>
        </div>

        {/* Stock Reference */}
        {item.stockRef && (
          <div className="flex items-start gap-2">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Stock Ref:</span>
            <span className="text-sm text-gray-800">{item.stockRef}</span>
          </div>
        )}

        {/* Made In */}
        {item.madeIn && (
          <div className="flex items-start gap-2">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider w-16 shrink-0">Origin:</span>
            <span className="text-sm text-gray-800">{item.madeIn}</span>
          </div>
        )}

        <button 
          onClick={() => onRequestQuote(item)}
          className="w-full px-4 py-2 bg-[#9b8b7e] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8b7b6e] transition-colors"
        >
          Request a Quote
        </button>

        {/* Notes */}
        {item.notes && (
          <div className="pt-2 border-t border-black/5">
            <p className="text-xs text-[#9b8b7e] italic">{item.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
