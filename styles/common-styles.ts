import tw, { styled } from "twin.macro";

export const Container = tw.main`rounded bg-white 
p-8 h-full my-10 
shadow-2xl`;

export const NavButton = styled.a({
  ...tw`text-center text-2xl 
flex flex-col items-start justify-center 
p-5 
bg-gray-800 hover:bg-blue-500 
border-l-8 border-blue-500
text-white
hover:text-white
cursor-pointer`,
  "> span": {
    ...tw`text-xs`,
  },
});
