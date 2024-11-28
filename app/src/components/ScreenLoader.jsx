import { Logo } from "../assets/Logo";

export function ScreenLoader(){
  return (
    <div className="relative w-screen h-screen bg-background grid grid-cols-1">
    <div className="flex justify-center items-center">
      <div className="w-[150px]">
        <Logo />
      </div>
    </div>
      <div>
        <h2 className="text-5xl text-center">Leitner</h2>
      </div>
    </div>
  )
}