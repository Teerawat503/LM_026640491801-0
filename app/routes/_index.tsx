import type { MetaFunction } from "@remix-run/node";
import AppMenu from "./template/header&manu";
import Foolter from "./template/foolter";
import MyHomePage from "./MyHomePage";


export const meta: MetaFunction = () => {
  return [
    { title: "Teerawat" },
    { name: "description", content: "Welcome to Remix!" },

  ];
};

export default function Index() {
  return (
    <>
    <AppMenu />
    <MyHomePage />
    <Foolter />
    </> 
    
    
  );
}
