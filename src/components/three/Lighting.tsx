export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF00FF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFFF" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#FFFFFF" />
    </>
  );
}