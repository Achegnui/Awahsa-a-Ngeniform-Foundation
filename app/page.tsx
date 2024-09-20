import BackGround from "./public/assets/background.jpg";
export default function Home() {
  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-center"
      style={{
        background: `url(${BackGround.src}) lightgray 50% / cover no-repeat`,
      }}
    >
      <h1 className="text-4xl font-extrabold text-white">WELCOME</h1>
    </div>
  );
}
