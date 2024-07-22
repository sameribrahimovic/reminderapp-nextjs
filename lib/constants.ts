export enum CollectionColors {
  sunset = "bg-gradient-to-r from-pink-500 via-red-500 to-orange-500",
  poppy = "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
  rosebud = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  snowflake = "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400",
  candy = "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500",
  firtree = "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500",
  metal = "bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700",
  powder = "bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400",
}

export type CollectionColor = keyof typeof CollectionColors;
