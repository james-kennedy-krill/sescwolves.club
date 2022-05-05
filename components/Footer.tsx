import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import tw, { styled } from "twin.macro";

const FooterContainer = styled.div(() => [
  tw`flex flex-col sm:flex-row gap-6 justify-center items-center shadow`,
  tw`fixed bottom-0 w-full py-6 px-2`,
  tw`text-sm md:text-base lg:text-lg uppercase tracking-widest`,
  tw`bg-gray-900 text-white`,
]);

interface NavProps extends React.RefAttributes<HTMLDivElement> {
  current?: any;
}

const Footer = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <FooterContainer>
      <span>Southeast Soccer Club</span>
      <Link href="https://www.sesc.soccer">
        <a target="_blank" className="underline">
          www.sesc.soccer
        </a>
      </Link>{" "}
      <span>Portland, Oregon, USA</span>
    </FooterContainer>
  );
};

export default Footer;
