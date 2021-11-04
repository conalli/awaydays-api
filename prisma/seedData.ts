import { Prisma } from "@prisma/client";

// export const specialtyData: Prisma.SpecialtyCreateInput[] = [
//   {
//     name: "Gyutan",
//     description: "Beef tongue, it sounds weird but it is suprisingly good!",
//   },
//   {
//     name: "Okonomiyaki",
//     description: "Savory pancake style dish with many possible ingredients.",
//   },
// ];

// export const sightData: Prisma.SightCreateInput[] = [
//   {
//     name: "Statue of Date Masamune",
//     description: "Statue of the famous founder of the city",
//   },
//   {
//     name: "Hiroshima Peace Memorial Museum",
//     description:
//       "Dedicated to documenting the atomic bombing of Hiroshima in World War II.",
//   },
//   {
//     name: "Tokyo SkyTree",
//     description: "The tallest tower in the world",
//   },
//   {
//     name: "Meiji Shrine",
//     description:
//       "A Shinto shrine in Shibuya, Tokyo, that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken.",
//   },
// ];

// export const cityData: Prisma.CityCreateInput[] = [
//   {
//     name: "Sendai",
//     specialties: {},
//     sights: {},
//     teams: {},
//     region: {},
//   },
//   {
//     name: "Hiroshima",
//     specialties: {},
//     sights: {},
//     teams: {},
//     region: {},
//   },
//   {
//     name: "Tokyo",
//     sights: {},
//     teams: {},
//     region: {},
//   },
// ];
// export const regionData: Prisma.RegionCreateInput[] = [
//   {
//     name: "Miyagi, Japan",
//   },
//   {
//     name: "Hiroshima, Japan",
//   },
//   {
//     name: "Tokyo, Japan",
//   },
// ];

// export const leagueData: Prisma.LeagueCreateInput[] = [
//   {
//     name: "Meiji Yasuda J1 League",
//   },
// ];

// export const sportData: Prisma.SportCreateInput[] = [
//   {
//     name: "Soccer",
//   },
// ];

// export const teamData: Prisma.TeamCreateInput[] = [
//   {
//     name: "Vegalta Sendai",
//     league: {},
//     sport: {},
//   },
//   {
//     name: "Sanfrecce Hiroshima",
//     league: {},
//     sport: {},
//   },
//   {
//     name: "FC Tokyo",
//     league: {},
//     sport: {},
//   },
// ];

export const cityData: Prisma.CityCreateInput[] = [
  {
    name: "Sendai",
    specialties: {
      create: [
        {
          name: "Gyutan",
          description:
            "Beef tongue, it sounds weird but it is suprisingly good!",
        },
      ],
    },
    sights: {
      create: [
        {
          name: "Statue of Date Masamune",
          description: "Statue of the famous founder of the city",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "Vegalta Sendai",
        },
      ],
    },
    region: {
      create: {
        name: "Miyagi, Japan",
      },
    },
  },
  {
    name: "Hiroshima",
    specialties: {
      create: [
        {
          name: "Okonomiyaki",
          description:
            "Savory pancake style dish with many possible ingredients.",
        },
      ],
    },
    sights: {
      create: [
        {
          name: "Hiroshima Peace Memorial Museum",
          description:
            "Dedicated to documenting the atomic bombing of Hiroshima in World War II.",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "Sanfrecce Hiroshima",
        },
      ],
    },
    region: {
      create: {
        name: "Hiroshima, Japan",
      },
    },
  },
  {
    name: "Tokyo",
    sights: {
      create: [
        {
          name: "Tokyo SkyTree",
          description: "The tallest tower in the world",
        },
        {
          name: "Meiji Shrine",
          description:
            "A Shinto shrine in Shibuya, Tokyo, that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken.",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "FC Tokyo",
        },
      ],
    },
    region: {
      create: {
        name: "Tokyo, Japan",
      },
    },
  },
];

export const leagueData: Prisma.LeagueCreateInput[] = [
  {
    name: "Meiji Yasuda J1 League",
  },
];

export const sportData: Prisma.SportCreateInput[] = [
  {
    name: "Soccer",
  },
];
