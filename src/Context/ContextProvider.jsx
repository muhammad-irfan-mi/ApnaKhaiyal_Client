// Context/ContextProvider.jsx
import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [token, setToken] = useState(null);

  const theme =
    {
      iconGrayColor:'text-[#999999]',
      menuHover:"#555753",
      whiteText: "text-white",               // For typing animation 
      overlayBg: "bg-slate-950",            // For the overlay
      searchContainerBg: "bg-red-500",      // For the search container
      formIconsColor: "text-slate-500",      // For the search container
      formBg: "bg-white",                   // For the form background
      formBgSlate: "bg-slate-400",          // For the form background
      formBorder: "border-black",           // For form borders
      btnBg: "bg-blue-900",        // For search button
      searchButtonText: "text-white",        // For search button text
      cardBg: "bg-white",
      cardBorder: "border",
      cardRounded: "rounded-lg",
      cardImgHeight: "h-[150px]",
      cardImgCover: "object-cover",
      cardTextSize: "text-[10px]",
      cardFontBold: "font-bold",
      cardPadding: "p-1",
      cardMarginY: "my-2",
      cardButtonText: "text-slate-700",
      overSeasCardBg:"bg-[#002456]",
      CardheadtextColor:"text-gray-800"
    }
  
  return (
    <Context.Provider value={{ theme, token, setToken }}>
      {children}
    </Context.Provider>
  );
}