import { Link } from "react-router-dom";

export function LinkTo({to, style, content}){
  return (
      <Link to={to} className={`w-full text-center rounded-full p-2 max-h-min ${style === "primary" ? "bg-primary" : "bg-subtitle" }`}>{content}</Link>
    )
}