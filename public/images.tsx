const Images = Array.from(
  { length: 10 },
  (_, i) => require(`@/public/Pictures/${i + 1}.jpg`).default
);

export default Images;
