function GlowCircle({
  position = "",
  size = "w-24 h-24",
  blur = "blur-md",
  opacity = "opacity-100",
}) {
  return (
    <div
      className={`
        absolute hidden md:block rounded-full
        ${position} ${size} ${blur} ${opacity}
        transition-colors duration-500

        bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.15)_20%,_rgba(0,0,0,0.05))]
        dark:bg-[radial-gradient(circle_at_bottom_right,_#141414_20%,_#494955)]
      `}
    />
  );
}

export default GlowCircle;
