function GlowCircle({
  position = "",
  size = "w-24 h-24",
  blur = "blur-md",
  opacity = "opacity-100",
}) {
  return (
    <div
      className={`absolute rounded-full ${position} ${size} ${blur} ${opacity}
      bg-[radial-gradient(circle_at_bottom_right,_#141414_20%,_#494955)]`}
    />
  );
}

export default GlowCircle;
