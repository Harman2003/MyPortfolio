'use client'
import React, { useEffect, useState } from "react";
interface ClientComponentProps {
  children: React.ReactNode;
}
export const ClientComponent: React.FC<ClientComponentProps> = ({
  children,
}) => {
  const [clientReady, setClientReady] = useState<boolean>(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  return clientReady && <>{children}</>;
};
